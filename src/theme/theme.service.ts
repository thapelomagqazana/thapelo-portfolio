import type { PortfolioThemePreference } from "./theme.types";

const STORAGE_KEY = "portfolio-ui-mode";

const DEFAULT_THEME: PortfolioThemePreference = {
  theme: "dark",
  mode: "UI",
};

/**
 * Safely loads portfolio UI mode from localStorage.
 *
 * Guarantees:
 * - Never throws.
 * - Falls back to UI mode for invalid values.
 * - Persists only the mode, not unrelated UI state.
 */
export function loadThemePreference(): PortfolioThemePreference {
  try {
    const mode = window.localStorage.getItem(STORAGE_KEY);

    if (mode === "UI" || mode === "TERMINAL") {
      return {
        theme: "dark",
        mode,
      };
    }
  } catch {
    // Storage may be unavailable in restricted browser contexts.
  }

  return DEFAULT_THEME;
}

/**
 * Safely persists portfolio UI mode.
 */
export function saveThemePreference(preference: PortfolioThemePreference): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, preference.mode);
  } catch {
    // Persistence failure must not break the portfolio.
  }
}