import type { HTMLAttributes } from "react";
import type {
  HeroManagerSignal,
  HeroRoleSignal,
} from "./hero.types";
import { classNames } from "../../lib/classNames";

/**
 * Props for the hero positioning block.
 */
export interface HeroManagerPositioningProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /**
   * Small overline or classification label shown before the main statement.
   */
  readonly kicker: string;

  /**
   * Primary hero statement.
   *
   * Purpose:
   * - Act as the dominant output of the hero
   * - Communicate the portfolio's niche immediately
   */
  readonly title: string;

  /**
   * Supporting summary line beneath the headline.
   *
   * Rules:
   * - Must remain concise
   * - Must reinforce value without competing with the headline
   */
  readonly summary: string;

  /**
   * Recruiter-facing fast-scan chips.
   */
  readonly recruiterSignals: readonly HeroRoleSignal[];

  /**
   * Engineering-manager-facing structured proof signals.
   *
   * Note:
   * - This component currently receives them for future flexibility and API stability
   * - They are not rendered here directly
   */
  readonly managerSignals: readonly HeroManagerSignal[];
}

/**
 * Hero positioning block.
 *
 * Responsibilities:
 * - Present the dominant value proposition in the hero
 * - Make the headline feel like the primary output of the interface
 * - Maintain strong scan hierarchy for recruiters and engineering managers
 *
 * Design goals:
 * - Wider but controlled measure
 * - More generous line-height for large heading text
 * - Clear vertical separation from system labels above and actions below
 */
export function HeroManagerPositioning({
  kicker,
  title,
  summary,
  recruiterSignals,
  managerSignals: _managerSignals,
  className,
  ...rest
}: HeroManagerPositioningProps) {
  return (
    <div
      {...rest}
      className={classNames("max-w-[52rem]", className)}
    >
      <p className="type-label text-accent-cyan">
        {kicker}
      </p>

      <h1
        id="hero-title"
        className="mt-7 max-w-[14ch] text-balance text-[clamp(3.5rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-text-primary"
      >
        {title}
      </h1>

      <p className="mt-8 max-w-[42rem] text-[1.2rem] leading-8 text-text-secondary">
        {summary}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {recruiterSignals.map((signal) => (
          <span
            key={signal.id}
            className="inline-flex items-center rounded-full border border-border-subtle bg-bg-850/70 px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-text-secondary"
          >
            {signal.label}
          </span>
        ))}
      </div>
    </div>
  );
}