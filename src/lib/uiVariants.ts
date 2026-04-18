/**
 * Centralized primitive variant definitions.
 *
 * Purpose:
 * - Keep primitive styling decisions predictable and reusable
 * - Prevent scattered one-off variant strings across components
 * - Preserve role boundaries between component families
 *
 * Important:
 * - This file is not a generic design-system engine.
 * - It only stores bounded variant maps needed by the current primitives.
 * - Expand intentionally, not casually.
 */
export const buttonVariants = {
  variant: {
    primary:
      "bg-accent-cyan text-bg-900 border border-accent-cyan hover:bg-accent-blue hover:border-accent-blue",
    secondary:
      "bg-transparent text-text-primary border border-border-strong hover:bg-bg-750",
    ghost:
      "bg-transparent text-text-secondary border border-transparent hover:bg-bg-800 hover:text-text-primary",
    status:
      "bg-accent-green/10 text-accent-green border border-accent-green/30 hover:bg-accent-green/15",
  },
  size: {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4 text-sm",
    lg: "h-12 px-5 text-base",
  },
} as const;

export const cardVariants = {
  variant: {
    default: "bg-bg-800 border-border-subtle shadow-[var(--shadow-panel-quiet)]",
    elevated: "bg-bg-750 border-border-strong shadow-[var(--shadow-panel-elevated)]",
  },
} as const;

export const panelVariants = {
  variant: {
    default:
      "bg-bg-850/85 border-border-subtle shadow-[var(--shadow-panel-elevated)] backdrop-blur",
    focus:
      "bg-bg-850/90 border-border-active shadow-[var(--shadow-panel-focus)] backdrop-blur",
  },
} as const;

export const badgeVariants = {
  variant: {
    neutral: "bg-bg-800 text-text-secondary border-border-subtle",
    info: "bg-accent-blue/10 text-accent-blue border-accent-blue/30",
    success: "bg-accent-green/10 text-accent-green border-accent-green/30",
    warning: "bg-accent-amber/10 text-accent-amber border-accent-amber/30",
    danger: "bg-accent-red/10 text-accent-red border-accent-red/30",
  },
} as const;

export const textVariants = {
  variant: {
    display: "font-sans text-5xl md:text-7xl font-bold tracking-tight text-text-primary",
    h1: "font-sans text-4xl md:text-5xl font-bold tracking-tight text-text-primary",
    h2: "font-sans text-3xl md:text-4xl font-semibold tracking-tight text-text-primary",
    h3: "font-sans text-2xl font-semibold tracking-tight text-text-primary",
    body: "font-sans text-base leading-7 text-text-primary",
    bodyMuted: "font-sans text-base leading-7 text-text-secondary",
    caption: "font-sans text-sm leading-6 text-text-muted",
    label:
      "font-mono text-xs uppercase tracking-[0.08em] text-text-secondary",
  },
} as const;