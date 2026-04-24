import type { AboutValueSignal } from "./about.types";

/**
 * Props for AboutValueSignals.
 */
export interface AboutValueSignalsProps {
  readonly signals: readonly AboutValueSignal[];
}

/**
 * Recruiter-facing engineering value signal layer.
 *
 * Responsibilities:
 * - Convert the About story into fast-scannable professional signals
 * - Help recruiters understand current value without reading all story modules
 * - Keep meaning explicit through label/value pairs
 */
export function AboutValueSignals({ signals }: AboutValueSignalsProps) {
  return (
    <section
      role="region"
      aria-label="Current engineering value signals"
      className="mt-8 rounded-[var(--radius-panel-xl)] border border-border-subtle bg-bg-850/60 p-5"
    >
      <p className="type-label text-accent-cyan">Current Engineering Signals</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {signals.map((signal) => (
          <div
            key={signal.label}
            className="rounded-[var(--radius-panel-lg)] border border-border-subtle bg-bg-800/60 px-4 py-3"
          >
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-text-muted">
              {signal.label}
            </p>
            <p className="mt-2 text-sm font-semibold text-text-primary">
              {signal.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}