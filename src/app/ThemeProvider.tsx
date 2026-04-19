import { useEffect, useMemo, useState } from "react";
import type { JSX, PropsWithChildren } from "react";

import { ThemeContext } from "../theme/themeContext";
import {
  DEFAULT_APP_THEME,
  THEME_DATA_ATTRIBUTE,
  type AppTheme,
} from "../theme/theme";

/**
 * Applies the active theme to the root document element.
 *
 * Purpose:
 * - Keep theme DOM mutation in one place
 * - Ensure the entire application reads one consistent theme signal
 *
 * @param theme - canonical active theme
 */
function applyThemeToDocument(theme: AppTheme): void {
  document.documentElement.dataset[THEME_DATA_ATTRIBUTE] = theme;
}

/**
 * Canonical ThemeProvider.
 *
 * Responsibilities:
 * - Enforce dark mode as the default application theme for this phase
 * - Apply the theme consistently to the root document element
 * - Expose a future-safe context contract without enabling uncontrolled theme switching yet
 *
 * Design decision:
 * - This phase intentionally does not expose a user-facing theme toggle
 * - Theme state is fixed to "dark" even though the architecture remains extensible
 *
 * Accessibility notes:
 * - The dark theme must preserve readability and contrast through token usage
 * - Theme application is deterministic and global
 */
export function ThemeProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const [theme] = useState<AppTheme>(DEFAULT_APP_THEME);

  /**
   * Applies the canonical theme on mount and whenever the theme changes.
   *
   * Current phase:
   * - theme remains fixed to "dark"
   */
  useEffect(() => {
    applyThemeToDocument(theme);
  }, [theme]);

  /**
   * Future-safe setter.
   *
   * Current phase behavior:
   * - Theme switching is intentionally disabled
   * - The setter exists so the context contract does not need redesign later
   */
  function setTheme(nextTheme: AppTheme): void {
    if (nextTheme !== DEFAULT_APP_THEME) {
      console.warn(
        `[ThemeProvider] Theme "${nextTheme}" is not enabled in this phase. ` +
          `Dark mode remains the enforced baseline.`,
      );
      return;
    }

    applyThemeToDocument(nextTheme);
  }

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}