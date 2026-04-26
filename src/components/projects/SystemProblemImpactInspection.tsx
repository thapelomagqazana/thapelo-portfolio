import type { ProjectOutcomeIndicator } from "./project.types";

export interface SystemProblemImpactInspectionProps {
  readonly problemContext: string;
  readonly impact: string;
  readonly impactIndicators?: readonly ProjectOutcomeIndicator[];
}

/**
 * Business and operational impact inspection layer.
 *
 * Responsibilities:
 * - Explain the real problem behind the project.
 * - Explain what changed because of the system.
 * - Make project value clear to engineering managers and recruiters.
 */
export function SystemProblemImpactInspection({
  problemContext,
  impact,
  impactIndicators = [],
}: SystemProblemImpactInspectionProps) {
  return (
    <section
      aria-labelledby="problem-impact-heading"
      className="rounded-[var(--radius-panel-xl)] bg-gradient-to-br from-bg-850/85 to-bg-800/45 p-5 ring-1 ring-accent-cyan/20"
    >
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent-cyan">
        Problem &amp; Impact
      </p>

      <h5
        id="problem-impact-heading"
        className="mt-2 text-base font-semibold text-text-primary"
      >
        Why this system matters
      </h5>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <ProblemImpactBlock label="Problem" value={problemContext} />
        <ProblemImpactBlock label="Impact" value={impact} />
      </div>

      {impactIndicators.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2.5" aria-label="Impact signals">
          {impactIndicators.slice(0, 4).map((indicator) => (
            <li
              key={indicator.label}
              className="rounded-full bg-bg-900/45 px-3.5 py-2 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-secondary ring-1 ring-white/10"
            >
              {indicator.label}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

interface ProblemImpactBlockProps {
  readonly label: "Problem" | "Impact";
  readonly value: string;
}

/**
 * Small labelled block for problem/impact copy.
 */
function ProblemImpactBlock({ label, value }: ProblemImpactBlockProps) {
  return (
    <section className="rounded-[var(--radius-panel-lg)] bg-bg-900/45 p-4 ring-1 ring-white/5">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
        {label}
      </p>

      <p className="mt-2 text-sm leading-6 text-text-secondary">{value}</p>
    </section>
  );
}