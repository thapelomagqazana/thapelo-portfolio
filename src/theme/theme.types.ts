/**
 * Supported portfolio interaction modes.
 *
 * UI:
 * - Default polished portfolio experience.
 *
 * TERMINAL:
 * - Optional command-inspired exploration layer.
 */
export type PortfolioUIMode = "UI" | "TERMINAL";

export interface PortfolioThemePreference {
  /**
   * Current visual interaction mode.
   */
  readonly mode: PortfolioUIMode;

  /**
   * Current theme.
   *
   * Phase 1 supports dark only.
   */
  readonly theme: "dark";
}