/**
 * Canonical capability panel contracts.
 *
 * Purpose:
 * - Keep capability presentation structured and reusable
 * - Prevent duplicated hard-coded capability cards across the app
 * - Make future capability expansion safe without changing the component API
 */

/**
 * A single capability item shown in the panel.
 */
export interface CapabilityItem {
  /**
   * Stable identifier used for rendering and future extension.
   */
  readonly id: string;

  /**
   * User-facing capability title.
   */
  readonly title: string;

  /**
   * Concise supporting summary used to explain the capability.
   *
   * This must remain short and recruiter-friendly.
   */
  readonly summary: string;
}

/**
 * Canonical capability panel content model.
 */
export interface CapabilitiesPanelContent {
  /**
   * Panel heading shown above the capability grid.
   */
  readonly title: string;

  /**
   * Optional supporting introduction.
   */
  readonly intro?: string;

  /**
   * Ordered capability items.
   */
  readonly items: readonly CapabilityItem[];
}