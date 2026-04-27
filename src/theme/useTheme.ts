import { useEffect, useState } from "react";

import {
  loadThemePreference,
  saveThemePreference,
} from "./theme.service";
import type { PortfolioThemePreference, PortfolioUIMode } from "./theme.types";

/**
 * Portfolio theme and UI-mode controller.
 *
 * Responsibilities:
 * - Default to dark UI mode.
 * - Persist UI/Terminal mode preference.
 * - Sync mode onto document attributes for styling hooks.
 */
export function useTheme() {
  const [preference, setPreference] =
    useState<PortfolioThemePreference>(loadThemePreference);

  useEffect(() => {
    document.documentElement.dataset.theme = preference.theme;
    document.documentElement.dataset.uiMode =
      preference.mode.toLowerCase();

    saveThemePreference(preference);
  }, [preference]);

  function setMode(mode: PortfolioUIMode): void {
    setPreference((current) => ({
      ...current,
      mode,
    }));
  }

  function toggleMode(): void {
    setPreference((current) => ({
      ...current,
      mode: current.mode === "UI" ? "TERMINAL" : "UI",
    }));
  }

  return {
    preference,
    mode: preference.mode,
    setMode,
    toggleMode,
  };
}