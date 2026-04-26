import type { ExperienceLogEntry } from "./experience.types";
import { ExperienceOutcomeList } from "./ExperienceOutcomeList";

export interface TimelineLogsProps {
  readonly entries: readonly ExperienceLogEntry[];
}

/**
 * Operational history timeline.
 *
 * Responsibilities:
 * - Render work history as structured operational logs.
 * - Preserve recruiter scan speed.
 * - Show progression through roles, outcomes, and system tags.
 *
 * Accessibility:
 * - Uses a list to represent chronological entries.
 * - Keeps role, company, period, and location readable as text.
 */
export function TimelineLogs({ entries }: TimelineLogsProps) {
  return (
    <ol className="relative grid gap-5 border-l border-border-subtle pl-5">
      {entries.map((entry) => (
        <TimelineLogEntry key={entry.id} entry={entry} />
      ))}
    </ol>
  );
}

interface TimelineLogEntryProps {
  readonly entry: ExperienceLogEntry;
}

/**
 * Single operational log entry.
 *
 * Purpose:
 * - Communicate one role as identity, summary, outcomes, and tags.
 * - Avoid generic responsibility lists.
 */
function TimelineLogEntry({ entry }: TimelineLogEntryProps) {
  return (
    <li className="relative">
      <span
        aria-hidden="true"
        className="absolute -left-[1.72rem] top-6 size-2.5 rounded-full bg-accent-cyan shadow-[0_0_18px_rgba(61,220,255,0.45)]"
      />

      <article className="rounded-[var(--radius-panel-xl)] bg-bg-800/20 p-5 ring-1 ring-white/5">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent-cyan">
              {entry.period}
            </p>

            <h3 className="mt-2 text-lg font-semibold text-text-primary">
              {entry.role}{" "}
              <span className="text-text-muted">@ {entry.company}</span>
            </h3>

            {entry.location ? (
              <p className="mt-1 text-sm leading-6 text-text-secondary">
                {entry.location}
              </p>
            ) : null}
          </div>

          <span className="w-fit rounded-full bg-bg-850/60 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-text-secondary ring-1 ring-white/10">
            Status: {entry.status}
          </span>
        </header>

        <p className="mt-4 max-w-3xl text-sm leading-6 text-text-secondary">
          {entry.summary}
        </p>

        <ExperienceOutcomeList role={entry.role} outcomes={entry.outcomes} />

        {entry.tags?.length ? (
          <ul className="mt-5 flex flex-wrap gap-2">
            {entry.tags.slice(0, 5).map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-bg-850/55 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-text-muted ring-1 ring-white/10"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    </li>
  );
}