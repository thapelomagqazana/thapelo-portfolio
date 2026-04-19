import { useContext } from "react";
import { ThemeContext } from "./themeContext";

/**
 * Canonical theme hook.
 *
 * Purpose:
 * - Provide one approved access point for theme state
 * - Prevent direct context access throughout the codebase
 * - Fail fast if used outside the ThemeProvider
 */
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}