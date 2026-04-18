/**
 * Canonical variant maps for status and metric display primitives.
 *
 * Purpose:
 * - Keep state-related styling centralized and bounded
 * - Prevent duplicated tone logic across system components
 * - Ensure all status and metric displays stay token-driven
 */

export const statusToneVariants = {
  success:
    "border-accent-green/30 bg-accent-green/10 text-accent-green",
  warning:
    "border-accent-amber/30 bg-accent-amber/10 text-accent-amber",
  danger:
    "border-accent-red/30 bg-accent-red/10 text-accent-red",
} as const;

export const statusChipSizeVariants = {
  sm: "px-2.5 py-1 text-[11px]",
  md: "px-3 py-1.5 text-xs",
} as const;

export const systemBadgeVariants = {
  neutral: "border-border-subtle bg-bg-800 text-text-secondary",
  info: "border-accent-blue/30 bg-accent-blue/10 text-accent-blue",
  active: "border-accent-violet/30 bg-accent-violet/10 text-accent-violet",
} as const;

export const kpiValueVariants = {
  neutral: "text-text-primary",
  success: "text-accent-green",
  warning: "text-accent-amber",
  danger: "text-accent-red",
} as const;