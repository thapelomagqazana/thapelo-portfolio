import type { ContactAction } from "./contact.types";

export interface ContactActionsProps {
  readonly actions: readonly ContactAction[];
}

/**
 * Contact action group.
 *
 * Responsibilities:
 * - Render primary and secondary contact paths.
 * - Keep recruiter outreach low-friction.
 * - Apply safe behavior for external links.
 *
 * Accessibility:
 * - Uses clear text labels.
 * - Avoids icon-only links.
 * - External links announce destination through aria-label.
 */
export function ContactActions({ actions }: ContactActionsProps) {
  const visibleActions = actions.filter(isRenderableContactAction).slice(0, 4);

  if (visibleActions.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Contact actions"
      className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
    >
      {visibleActions.map((action) => (
        <ContactActionLink key={`${action.type}-${action.href}`} action={action} />
      ))}
    </nav>
  );
}

interface ContactActionLinkProps {
  readonly action: ContactAction;
}

/**
 * Single contact action link.
 *
 * Security:
 * - External HTTPS links open in a new tab.
 * - External HTTPS links use noopener/noreferrer.
 * - Mailto and internal links remain same-tab.
 */
function ContactActionLink({ action }: ContactActionLinkProps) {
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
      className={
        isPrimary
          ? "inline-flex min-h-11 items-center justify-center rounded-[var(--radius-panel-md)] border border-accent-cyan/40 bg-accent-cyan/10 px-5 py-3 text-sm font-semibold text-accent-cyan transition hover:-translate-y-0.5 hover:bg-accent-cyan/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
          : "inline-flex min-h-11 items-center justify-center rounded-[var(--radius-panel-md)] border border-border-subtle bg-bg-900/25 px-5 py-3 text-sm font-semibold text-text-secondary transition hover:-translate-y-0.5 hover:border-accent-cyan/30 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
      }
    >
      {action.label}
      {isExternal ? <span aria-hidden="true" className="ml-1">↗</span> : null}
    </a>
  );
}

/**
 * Validates whether a contact action is safe and useful to render.
 */
function isRenderableContactAction(action: ContactAction): boolean {
  return action.label.trim().length > 0 && action.href.trim().length > 0;
}