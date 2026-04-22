import type { MouseEvent } from "react";
import { classNames } from "../../lib/classNames";
import { scrollToSection } from "../../lib/scrollToSection";
import { getNavigationLabel } from "./navigation.content";
import { ActiveSectionIndicator } from "./ActiveSectionIndicator";
import type {
  NavigationLabelStyle,
  SiteNavigationItem,
} from "./navigation.types";

/**
 * Props for the SiteNavLink component.
 */
export interface SiteNavLinkProps {
  readonly item: SiteNavigationItem;
  readonly isActive: boolean;
  readonly onNavigate?: () => void;
  readonly labelStyle?: NavigationLabelStyle;
}

/**
 * Canonical navigation link for the portfolio.
 *
 * Responsibilities:
 * - Render one consistent navigation target
 * - Support active-state styling across desktop and mobile surfaces
 * - Trigger smooth in-page scrolling with predictable section alignment
 * - Keep visible labeling consistent with the selected thematic style
 *
 * Accessibility:
 * - Applies `aria-current="page"` to the active destination
 * - Uses clear accessible names independent of visual styling
 * - Keeps focus state and active state visually distinct
 */
export function SiteNavLink({
  item,
  isActive,
  onNavigate,
  labelStyle = "balanced",
}: SiteNavLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    scrollToSection(item.href.replace(/^#/, ""));
    onNavigate?.();
  }

  return (
    <a
      href={item.href}
      onClick={handleClick}
      aria-label={item.ariaLabel}
      aria-current={isActive ? "page" : undefined}
      className={classNames(
        "inline-flex min-h-11 items-center rounded-[var(--radius-panel-md)] px-3 py-2 text-sm font-medium transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg-900",
        isActive
          ? "border border-border-active bg-bg-800/80 text-text-primary shadow-[0_0_0_1px_rgba(61,220,255,0.10),0_0_18px_rgba(61,220,255,0.08)]"
          : "border border-transparent text-text-secondary hover:-translate-y-0.5 hover:text-text-primary hover:bg-bg-850/70",
      )}
    >
      <ActiveSectionIndicator isActive={isActive} className="mr-2" />
      {getNavigationLabel(item, labelStyle)}
    </a>
  );
}