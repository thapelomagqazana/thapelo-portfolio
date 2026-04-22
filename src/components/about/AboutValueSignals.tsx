import type { AboutValueSignal } from "./about.types";

/**
 * Props for the AboutValueSignals component.
 */
export interface AboutValueSignalsProps {
  /**
   * Structured value signals to render beside or below the About story.
   */
  readonly signals: readonly AboutValueSignal[];
}

/**
 * About-section value signal strip.
 *
 * Responsibilities:
 * - Reinforce the story's present-day engineering value
 * - Help recruiters scan current positioning quickly
 * - Keep the About section professionally relevant and aligned with the hero
 *
 * Accessibility:
 * - Uses a named region for grouped supporting signals
 * - Keeps visible labels short and readable
 */
export function AboutValueSignals({ signals }: AboutValueSignalsProps) {
  return (
    <div
      role="region"
      aria-label="Current engineering value signals"
      className="flex flex-wrap gap-3"
    >
      {signals.map((signal) => (
        <span
          key={signal.label}
          className="inline-flex items-center rounded-full border border-border-subtle bg-bg-850/70 px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-text-secondary"
        >
          {signal.label}
        </span>
      ))}
    </div>
  );
}