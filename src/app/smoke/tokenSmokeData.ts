/**
 * Smoke-validation data for design tokens.
 *
 * Purpose:
 * - Keep temporary validation content separate from the root app component
 * - Make token smoke validation deterministic and easy to replace later
 * - Avoid scattering token test content across the UI tree
 *
 * Notes:
 * - This file is not domain data.
 * - It exists only for WBS 0.3.1 token validation.
 */

/**
 * A single token preview item used in the validation screen.
 */
export interface TokenPreviewItem {
  /**
   * Human-readable token category or semantic role.
   */
  readonly label: string;

  /**
   * Value shown to the user for token smoke validation.
   */
  readonly value: string;

  /**
   * Optional semantic status hint for colorized preview text.
   */
  readonly status?: "pass" | "warn" | "fail";
}

/**
 * High-level token validation preview cards.
 */
export const TOKEN_PREVIEW_ITEMS: readonly TokenPreviewItem[] = [
  {
    label: "Source of truth",
    value: "Tailwind @theme variables",
    status: "pass",
  },
  {
    label: "Primary UI font",
    value: "Inter via font-sans",
    status: "pass",
  },
  {
    label: "System font",
    value: "JetBrains Mono via font-mono",
    status: "pass",
  },
  {
    label: "Surface scale",
    value: "bg-900 → bg-750",
    status: "pass",
  },
  {
    label: "Semantic states",
    value: "green / amber / red",
    status: "pass",
  },
  {
    label: "Token drift",
    value: "hard-coded component colors blocked",
    status: "warn",
  },
] as const;

/**
 * Accent chip descriptors used to validate token color classes.
 */
export const TOKEN_ACCENT_PREVIEWS = [
  { label: "Cyan", className: "text-accent-cyan bg-accent-cyan/10" },
  { label: "Blue", className: "text-accent-blue bg-accent-blue/10" },
  { label: "Violet", className: "text-accent-violet bg-accent-violet/10" },
  { label: "Green", className: "text-accent-green bg-accent-green/10" },
  { label: "Amber", className: "text-accent-amber bg-accent-amber/10" },
  { label: "Red", className: "text-accent-red bg-accent-red/10" },
] as const;