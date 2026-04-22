import type { HeroInfoSignal } from "./hero.types";

/**
 * Props for the HeroInfoSignals component.
 */
export interface HeroInfoSignalsProps {
  readonly signals: readonly HeroInfoSignal[];
}

/**
 * Secondary practical information signals for the hero dashboard.
 *
 * Responsibilities:
 * - Surface current focus, stack, and availability
 * - Keep practical information compact and scannable
 * - Complement the engineering metrics without overwhelming them
 *
 * Accessibility:
 * - Uses structured label/value rows
 * - Keeps practical meaning readable without relying on styling alone
 */
export function HeroInfoSignals({ signals }: HeroInfoSignalsProps) {
  return (
    <div
      role="region"
      aria-label="Current practical signals"
      className="grid gap-3"
    >
      {signals.map((signal) => (
        <div
          key={signal.label}
          className="rounded-[var(--radius-panel-lg)] border border-border-subtle bg-bg-800/60 px-4 py-3"
        >
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-text-muted">
            {signal.label}
          </p>
          <p className="mt-2 text-sm leading-6 text-text-primary">
            {signal.value}
          </p>
        </div>
      ))}
    </div>
  );
}