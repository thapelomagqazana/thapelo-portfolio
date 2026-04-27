import type { ContactAction } from "./contact.types";
import { ContactIcon } from "./ContactIcon";

export type ContactActionsVariant = "hero" | "compact" | "full";
export interface ContactActionsProps {
  readonly actions: readonly ContactAction[];
  readonly variant?: ContactActionsVariant;
  readonly showIcons?: boolean;
}

/**
 * Distributed contact action group.
 *
 * Responsibilities:
 * - Reuse one contact action system across Hero, Navigation, and Contact.
 * - Keep labels, ordering, accessibility, and link security consistent.
 * - Avoid duplicated hard-coded contact links across the portfolio.
 *
 * Accessibility:
 * - Uses clear text labels.
 * - External links announce new-tab behavior.
 * - Does not rely on icons alone.
 */
export function ContactActions({
  actions,
  variant = "full",
  showIcons = false,
}: ContactActionsProps) {
  const visibleActions = getVisibleActions(actions, variant)
    .filter(isRenderableContactAction)
    .slice(0, variant === "full" ? 4 : 2);

  if (visibleActions.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Contact actions"
      className={
        variant === "compact"
          ? "flex items-center gap-2"
          : "flex flex-col gap-3 sm:flex-row sm:flex-wrap"
      }
    >
      {visibleActions.map((action) => (
        <ContactActionLink
          key={`${action.type}-${action.href}`}
          action={action}
          variant={variant}
          showIcon={showIcons}
        />
      ))}
    </nav>
  );
}

interface ContactActionLinkProps {
  readonly action: ContactAction;
  readonly variant: ContactActionsVariant;
  readonly showIcon: boolean;
}

/**
 * Single contact action link.
 *
 * Security:
 * - HTTPS links open in a new tab.
 * - HTTPS links use rel="noopener noreferrer".
 * - mailto and internal links remain same-tab.
 */
function ContactActionLink({ action, variant, showIcon }: ContactActionLinkProps) {
  const isExternal = action.href.startsWith("https://");
  const isPrimary = action.priority === "PRIMARY";

  return (
    <a
      href={action.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={
        isExternal ? `${action.ariaLabel}. Opens in a new tab.` : action.ariaLabel
      }
      className={getActionClassName(isPrimary, variant)}
    >
      {showIcon && action.icon ? (
        <span aria-hidden="true" className="mr-2 inline-flex">
          <ContactIcon name={action.icon} />
        </span>
      ) : null}
      {action.label}
      {isExternal ? (
        <span aria-hidden="true" className="ml-1">
          ↗
        </span>
      ) : null}
    </a>
  );
}

/**
 * Selects the correct contact links for each portfolio surface.
 */
function getVisibleActions(
  actions: readonly ContactAction[],
  variant: ContactActionsVariant,
): readonly ContactAction[] {
  if (variant === "hero") {
    return actions.filter(
      (action) => action.type === "EMAIL" || action.type === "LINKEDIN",
    );
  }

  if (variant === "compact") {
    return actions.filter((action) => action.type === "EMAIL");
  }

  return actions;
}

/**
 * Shared button styling.
 *
 * Purpose:
 * - Keep distributed contact links visually consistent.
 * - Make Email remain the strongest CTA.
 */
function getActionClassName(
  isPrimary: boolean,
  variant: ContactActionsVariant,
): string {
  const sizeClass =
    variant === "compact"
      ? "min-h-9 px-3 py-2 text-xs"
      : "min-h-11 px-5 py-3 text-sm";

  const baseClass =
    "inline-flex items-center justify-center rounded-[var(--radius-panel-md)] font-semibold transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan";

  if (isPrimary) {
    return `${baseClass} ${sizeClass} border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan hover:bg-accent-cyan/15`;
  }

  return `${baseClass} ${sizeClass} border border-border-subtle bg-bg-900/25 text-text-secondary hover:border-accent-cyan/30 hover:text-text-primary`;
}

/**
 * Prevents empty or broken-looking contact actions from rendering.
 */
function isRenderableContactAction(action: ContactAction): boolean {
  return action.label.trim().length > 0 && action.href.trim().length > 0;
}