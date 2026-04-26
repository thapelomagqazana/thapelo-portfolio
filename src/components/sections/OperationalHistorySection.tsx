import type { HTMLAttributes } from "react";

import { EXPERIENCE_LOGS } from "../experience/experience.data";
import { TimelineLogs } from "../experience/TimelineLogs";
import { classNames } from "../../lib/classNames";

export interface OperationalHistorySectionProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  readonly sectionId?: string;
  readonly title?: string;
  readonly summary?: string;
}

/**
 * Operational history section.
 *
 * Responsibilities:
 * - Present work history as structured operational logs.
 * - Reinforce credibility after project proof has been established.
 * - Preserve fast scanning for recruiters and engineering managers.
 * - Support configurable section metadata from page composition.
 *
 * Accessibility:
 * - Uses a semantic section with a stable labelled heading.
 * - Keeps timeline entries inside a predictable log structure.
 */
export function OperationalHistorySection({
  id = "operational-history",
  sectionId = "history",
  title = "Experience presented as operational history.",
  summary = "Timeline entries show role progression, delivery context, and outcome signals across testing, reliability, frontend delivery, and systems thinking.",
  className,
  ...rest
}: OperationalHistorySectionProps) {
  const headingId = `${id}-title`;

  return (
    <section
      {...rest}
      id={id}
      data-section-id={sectionId}
      aria-labelledby={headingId}
      className={classNames("px-6 py-20 sm:px-8 lg:px-10", className)}
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-accent-cyan">
            Operational History
          </p>

          <h2
            id={headingId}
            className="mt-6 text-4xl font-semibold tracking-[-0.035em] text-text-primary sm:text-5xl"
          >
            {title}
          </h2>

          {summary ? (
            <p className="mt-5 max-w-[64ch] text-base leading-7 text-text-secondary">
              {summary}
            </p>
          ) : null}
        </div>

        <div className="mt-8">
          <TimelineLogs entries={EXPERIENCE_LOGS} />
        </div>
      </div>
    </section>
  );
}