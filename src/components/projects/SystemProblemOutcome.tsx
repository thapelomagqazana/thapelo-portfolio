export interface SystemProblemOutcomeProps {
  readonly problem: string;
  readonly outcome: string;
}

/**
 * Unified problem-to-outcome value block.
 *
 * Responsibilities:
 * - Communicate business value without extra visual noise
 * - Show what changed because the module exists
 * - Avoid duplicating purpose or capability content
 */
export function SystemProblemOutcome({
  problem,
  outcome,
}: SystemProblemOutcomeProps) {
  return (
    <section
      aria-label="Problem and outcome"
      className="rounded-[var(--radius-panel-lg)] border border-border-subtle bg-bg-800/45 p-4"
    >
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
        Problem → Outcome
      </p>

      <div className="mt-3 grid gap-3 text-sm leading-6 sm:grid-cols-[1fr_auto_1fr]">
        <p className="text-text-secondary">{problem}</p>

        <span aria-hidden="true" className="hidden text-accent-cyan sm:block">
          →
        </span>

        <p className="font-medium text-text-primary">{outcome}</p>
      </div>
    </section>
  );
}