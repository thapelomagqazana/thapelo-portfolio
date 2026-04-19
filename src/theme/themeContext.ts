import { createContext } from "react";
import type { AppTheme } from "./theme";

/**
 * Theme context contract.
 *
 * Purpose:
 * - Provide a stable theme state boundary for the application
 * - Keep future theme expansion possible without redesigning consumers
 *
 * Current phase:
 * - setTheme exists but is intentionally non-changing because only dark mode is approved
 */
export interface ThemeContextValue {
  /**
   * Active application theme.
   */
  readonly theme: AppTheme;

  /**
   * Theme setter reserved for future bounded expansion.
   *
   * Current implementation keeps the theme fixed to dark.
   */
  readonly setTheme: (theme: AppTheme) => void;
}

/**
 * Canonical theme context.
 *
 * This is intentionally nullable so the consumer hook can enforce
 * correct provider usage.
 */
export const ThemeContext = createContext<ThemeContextValue | null>(null);