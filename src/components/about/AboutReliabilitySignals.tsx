import type { AboutReliabilitySignal } from "./about.types";

/**
 * Props for the AboutReliabilitySignals component.
 */
export interface AboutReliabilitySignalsProps {
  /**
   * Reliability/quality-oriented signals to render.
   */
  readonly signals: readonly AboutReliabilitySignal[];
}

/**
 * About-section reliability and quality framing strip.
 *
 * Responsibilities:
 * - Make the section's current engineering orientation visible at a glance
 * - Reinforce consistency with the hero and live system panel
 * - Keep the About section concise while still strongly positioned
 *
 * Accessibility:
 * - Uses a named region for grouped supporting signals
 * - Keeps labels explicit and readable without depending on color
 */
export function AboutReliabilitySignals({
  signals,
}: AboutReliabilitySignalsProps) {
  return (
    <div
      role="region"
      aria-label="Reliability and quality framing signals"
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