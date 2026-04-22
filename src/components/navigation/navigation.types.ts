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
 * Navigation item contract for the primary site navigation.
 *
 * Responsibilities:
 * - Represent one visible navigation destination
 * - Keep navigation labels, hrefs, and ordering content-driven
 * - Support consistent rendering across desktop and mobile navigation
 */
export interface SiteNavigationItem {
  /**
   * Stable section identifier used for active-state tracking.
   */
  readonly id: SiteSectionId;

  /**
   * Human-readable label shown in navigation.
   */
  readonly label: string;

  /**
   * In-page anchor target.
   */
  readonly href: `#${string}`;
}