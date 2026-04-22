import type { HeroManagerSignal, HeroRoleSignal } from "./hero.types";
import { classNames } from "../../lib/classNames";

/**
 * Props for the engineering-manager-facing positioning block.
 */
export interface HeroManagerPositioningProps {
  readonly kicker: string;
  readonly title: string;
  readonly summary: string;
  readonly recruiterSignals: readonly HeroRoleSignal[];
  readonly managerSignals: readonly HeroManagerSignal[];
  readonly className?: string;
}

/**
 * Engineering-manager-oriented positioning layer for the hero.
 *
 * Responsibilities:
 * - Present the dominant engineering value statement above the fold
 * - Communicate systems thinking and release reliability in under 5–8 seconds
 * - Reinforce the candidate's strategic engineering fit without requiring deep reading
 * - Preserve a concise, skimmable structure suitable for top-level hiring scans
 *
 * Accessibility:
 * - Uses a semantic heading as the primary hero statement
 * - Exposes role and manager signals as named lists
 * - Preserves strong reading order across responsive layouts
 */
export function HeroManagerPositioning({
  kicker,
  title,
  summary,
  recruiterSignals,
  managerSignals,
  className,
}: HeroManagerPositioningProps) {
  return (
    <div className={classNames("max-w-3xl", className)}>
      <p className="type-label text-accent-cyan">{kicker}</p>

      <h1
        id="hero-title"
        className="type-display mt-4 max-w-4xl text-balance"
      >
        {title}
      </h1>

      <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary sm:text-body-lg">
        {summary}
      </p>

      <ul
        aria-label="Recruiter classification signals"
        className="mt-6 flex flex-wrap gap-2"
      >
        {recruiterSignals.map((signal) => (
          <li key={signal.id} className="list-none">
            <span className="inline-flex items-center rounded-full border border-border-subtle bg-bg-800/75 px-3 py-1.5 font-mono text-[0.72rem] font-medium uppercase tracking-[0.08em] text-text-secondary">
              {signal.label}
            </span>
          </li>
        ))}
      </ul>

      <ul
        aria-label="Engineering manager strategic signals"
        className="mt-6 grid gap-3 sm:grid-cols-2"
      >
        {managerSignals.map((signal) => (
          <li
            key={signal.id}
            className="list-none rounded-[var(--radius-panel-lg)] border border-border-subtle bg-bg-800/70 p-4"
          >
            <p className="text-sm font-semibold text-text-primary">
              {signal.label}
            </p>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              {signal.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}