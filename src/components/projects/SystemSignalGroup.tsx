import type { ProjectSignal } from "./project.types";

export interface SystemSignalGroupProps {
  readonly signals: readonly ProjectSignal[];
}

/**
 * Operational signal group.
 *
 * Responsibilities:
 * - Expose project telemetry-style signals
 * - Help visitors understand focus, system type, and quality posture quickly
 * - Keep signals readable without relying on color or decoration
 */
export function SystemSignalGroup({ signals }: SystemSignalGroupProps) {
  return (
    <section
      aria-label="Operational signals"
      className="grid gap-3 sm:grid-cols-3"
    >
      {signals.map((signal) => (
        <div
          key={signal.label}
          role="group"
          aria-label={`${signal.label}: ${signal.value}`}
          className="rounded-[var(--radius-panel-lg)] border border-border-subtle bg-bg-800/60 px-4 py-3"
        >
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
            {signal.label}
          </p>
          <p className="mt-2 text-sm font-semibold text-text-primary">
            {signal.value}
          </p>
        </div>
      ))}
    </section>
  );
}