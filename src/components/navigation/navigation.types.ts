/**
 * Stable identifiers for the primary sections in the portfolio.
 *
 * Purpose:
 * - Keep section targeting deterministic
 * - Prevent ad hoc string duplication across navigation, sections, and tests
 */
export type SiteSectionId =
  | "system"
  | "modules"
  | "history"
  | "credentials"
  | "contact";

/**
 * Supported label styles for the navigation system.
 *
 * Purpose:
 * - Allow the portfolio to choose between a simpler and a slightly more
 *   thematic navigation language without changing component code
 */
export type NavigationLabelStyle = "balanced" | "enhanced";

/**
 * Navigation item contract for the primary site navigation.
 *
 * Responsibilities:
 * - Represent one visible navigation destination
 * - Keep labels, hrefs, and heading names content-driven
 * - Preserve consistency across desktop, mobile, and section rendering
 */
export interface SiteNavigationItem {
  /**
   * Stable section identifier used for active-state tracking.
   */
  readonly id: SiteSectionId;

  /**
   * Short label intended for compact navigation display.
   *
   * Example:
   * - "Modules"
   * - "History"
   */
  readonly shortLabel: string;

  /**
   * Slightly more thematic label for expanded usage when appropriate.
   *
   * Example:
   * - "Active Modules"
   * - "Operational History"
   */
  readonly fullLabel: string;

  /**
   * Accessible label used for screen readers and role-based tests.
   *
   * This should remain maximally clear even if visual labels are more stylized.
   */
  readonly ariaLabel: string;

  /**
   * Stable in-page anchor target.
   */
  readonly href: `#${string}`;

  /**
   * Canonical destination heading shown in the section itself.
   *
   * Purpose:
   * - Ensure section naming stays aligned with navigation naming
   */
  readonly sectionHeading: string;
}