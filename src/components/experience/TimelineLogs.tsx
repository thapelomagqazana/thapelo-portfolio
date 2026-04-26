import type { ExperienceLogEntry } from "./experience.types";
import { ExperienceOutcomeList } from "./ExperienceOutcomeList";
import { ExperienceToolMethods } from "./ExperienceToolMethods";

export interface TimelineLogsProps {
  readonly entries: readonly ExperienceLogEntry[];
}

/**
 * Operational log timeline.
 *
 * Responsibilities:
 * - Render experience as structured operational history.
 * - Match the Control Room / Mission Control portfolio theme.
 * - Preserve recruiter scan speed and role clarity.
 *
 * Accessibility:
 * - Uses ordered list semantics for timeline order.
 * - Keeps role, company, period, status, and location visible as text.
 */
export function TimelineLogs({ entries }: TimelineLogsProps) {
  return (
    <ol className="relative grid gap-5 border-l border-border-subtle/80 pl-5">
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
 * - Present one role as a readable system log.
 * - Balance theme with credibility.
 * - Avoid plain CV-card presentation.
 */
function TimelineLogEntry({ entry }: TimelineLogEntryProps) {
  return (
    <li className="relative">
      <span
        aria-hidden="true"
        className="absolute -left-[1.72rem] top-6 size-2.5 rounded-full bg-accent-cyan shadow-[0_0_18px_rgba(61,220,255,0.45)]"
      />

      <article className="rounded-[var(--radius-panel-xl)] bg-bg-800/15 p-5 ring-1 ring-white/5 transition hover:bg-bg-800/25 hover:ring-accent-cyan/20">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-accent-cyan">
              [{entry.period}] Log Entry
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

          <StatusBadge status={entry.status} />
        </header>

        <p className="mt-4 max-w-3xl text-sm leading-6 text-text-secondary">
          {entry.summary}
        </p>

        <ExperienceOutcomeList role={entry.role} outcomes={entry.outcomes} />

        <ExperienceToolMethods groups={entry.toolMethods} />

        {entry.tags?.length ? <LogTags tags={entry.tags} /> : null}
      </article>
    </li>
  );
}

interface StatusBadgeProps {
  readonly status: ExperienceLogEntry["status"];
}

/**
 * Operational status badge.
 *
 * Purpose:
 * - Make role state visible without overpowering the entry.
 * - Preserve readable text for accessibility.
 */
function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className="w-fit rounded-full bg-bg-850/60 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-text-secondary ring-1 ring-white/10">
      Status: {status}
    </span>
  );
}

interface LogTagsProps {
  readonly tags: readonly string[];
}

/**
 * Functional/system tags for an experience entry.
 *
 * Purpose:
 * - Connect role history to capability areas.
 * - Keep tags compact and scannable.
 */
function LogTags({ tags }: LogTagsProps) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Functional tags">
      {tags.slice(0, 5).map((tag) => (
        <li
          key={tag}
          className="rounded-full bg-bg-900/30 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-text-muted ring-1 ring-white/5"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}