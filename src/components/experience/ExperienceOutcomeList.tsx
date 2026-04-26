import type { ExperienceOutcome } from "./experience.types";

export interface ExperienceOutcomeListProps {
  readonly role: string;
  readonly outcomes: readonly ExperienceOutcome[];
}

/**
 * Outcome-first experience list.
 *
 * Responsibilities:
 * - Render value-focused role outcomes.
 * - Keep experience entries concise and marketable.
 * - Prevent responsibility-only content from dominating the timeline.
 *
 * Accessibility:
 * - Uses a labelled section per role.
 * - Keeps every outcome readable as text, not icon-only content.
 */
export function ExperienceOutcomeList({
  role,
  outcomes,
}: ExperienceOutcomeListProps) {
  const visibleOutcomes = outcomes.slice(0, 4);

  return (
    <section aria-label={`${role} outcome signals`} className="mt-4">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
        Outcome Signals
      </p>

      <ul className="mt-3 grid gap-3">
        {visibleOutcomes.map((outcome) => (
          <li
            key={outcome.statement}
            className="rounded-[var(--radius-panel-lg)] bg-bg-850/35 p-4 ring-1 ring-white/5"
          >
            <div className="flex gap-3 text-sm leading-6 text-text-secondary">
              <span
                aria-hidden="true"
                className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-green shadow-[0_0_12px_rgba(53,230,161,0.35)]"
              />

              <p>{outcome.statement}</p>
            </div>

            {outcome.context ? (
              <p className="mt-2 pl-4 text-sm leading-6 text-text-muted">
                {outcome.context}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}