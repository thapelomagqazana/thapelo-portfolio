/**
 * Canonical theme model definitions.
 *
 * Purpose:
 * - Establish one approved theme vocabulary for the application
 * - Keep theme naming stable and future-safe
 * - Prevent ad hoc string usage across providers and components
 *
 * Notes:
 * - This phase supports only the dark theme as the enforced baseline
 * - The model is intentionally extensible for future theme work
 */

/**
 * Supported application theme identifiers.
 *
 * Current phase:
 * - only "dark" is active
 *
 * Future-safe:
 * - additional themes may be added later without rewriting the provider contract
 */
export type AppTheme = "dark";

/**
 * Canonical default theme for the application.
 */
export const DEFAULT_APP_THEME: AppTheme = "dark";

/**
 * Root dataset key used for theme application.
 *
 * Example resulting DOM:
 * - <html data-theme="dark">
 */
export const THEME_DATA_ATTRIBUTE = "theme";