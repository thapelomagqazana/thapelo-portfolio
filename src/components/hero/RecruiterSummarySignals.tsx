import type { HeroRecruiterSummarySignal } from "./hero.types";

/**
 * Props for the RecruiterSummarySignals component.
 */
export interface RecruiterSummarySignalsProps {
  readonly signals: readonly HeroRecruiterSummarySignal[];
}

/**
 * Recruiter-facing visual summary strip for the live system panel.
 *
 * Responsibilities:
 * - Translate candidate strengths into fast-scanning operational summary rows
 * - Help recruiters classify the profile before reading deeper sections
 * - Reinforce systems, quality, and reliability positioning
 *
 * Accessibility:
 * - Uses structured label/value rows
 * - Keeps summary meaning readable without relying on color alone
 */
export function RecruiterSummarySignals({
  signals,
}: RecruiterSummarySignalsProps) {
  return (
    <div
      role="region"
      aria-label="Recruiter visual summary"
      className="grid gap-3"
    >
      <p className="type-label">Profile Signals</p>

      <ul className="grid gap-3 sm:grid-cols-2" aria-label="Recruiter summary signals">
        {signals.map((signal) => (
          <li
            key={signal.label}
            className="list-none rounded-[var(--radius-panel-lg)] border border-border-subtle bg-bg-800/60 px-4 py-3"
          >
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-text-muted">
              {signal.label}
            </p>
            <p className="mt-2 text-sm leading-6 text-text-primary">
              {signal.value}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}