import type { HeroRoleSignal } from "./hero.types";
import { classNames } from "../../lib/classNames";

/**
 * Props for the recruiter-facing positioning block.
 */
export interface HeroPositioningProps {
  readonly kicker: string;
  readonly title: string;
  readonly summary: string;
  readonly recruiterSignals: readonly HeroRoleSignal[];
  readonly className?: string;
}

/**
 * Recruiter-oriented positioning layer for the hero.
 *
 * Responsibilities:
 * - Present the dominant positioning statement above the fold
 * - Communicate niche and value in under 5 seconds
 * - Provide a short supporting line that reinforces the candidate's lane
 * - Expose quick-scan recruiter signals without adding verbose copy
 *
 * Accessibility:
 * - Uses a semantic heading as the primary landmark text
 * - Exposes recruiter classification signals as a named list
 * - Preserves readability across mobile and desktop layouts
 */
export function HeroPositioning({
  kicker,
  title,
  summary,
  recruiterSignals,
  className,
}: HeroPositioningProps) {
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
    </div>
  );
}