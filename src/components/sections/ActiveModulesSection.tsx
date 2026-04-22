import type { PortfolioSectionProps } from "./section.types";

/**
 * Proof section for the portfolio.
 *
 * Responsibilities:
 * - Surface capability evidence quickly after the hero
 * - Reinforce systems thinking and technical depth
 * - Give recruiters immediate proof before asking for trust
 *
 * UX role:
 * - Answers: "Why should I care?" and "What has he built?"
 */
export function ActiveModulesSection({
  id,
  sectionId,
  title,
  summary,
}: PortfolioSectionProps) {
  return (
    <section
      id={id}
      data-section-id={sectionId}
      className="px-6 py-20 sm:px-8 lg:px-10"
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="type-label text-accent-cyan">Proof Layer</p>

          <h2 id={`${id}-heading`} className="type-h2 mt-3">
            {title}
          </h2>

          <p className="mt-4 text-text-secondary">
            {summary}
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <article className="rounded-[var(--radius-panel-xl)] border border-border-subtle bg-bg-850/80 p-5 shadow-[var(--shadow-panel-elevated)]">
            <p className="type-label">Flagship Module</p>
            <h3 className="mt-3 text-lg font-semibold text-text-primary">
              BrikByteOS
            </h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              Release intelligence and quality orchestration thinking expressed
              through structured system design, scoring, gating, and evidence-driven delivery.
            </p>
          </article>

          <article className="rounded-[var(--radius-panel-xl)] border border-border-subtle bg-bg-850/80 p-5 shadow-[var(--shadow-panel-elevated)]">
            <p className="type-label">Engineering Signal</p>
            <h3 className="mt-3 text-lg font-semibold text-text-primary">
              Reliability Thinking
            </h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              Work organized around safer releases, operational clarity,
              and production-confidence decisions rather than generic app output alone.
            </p>
          </article>

          <article className="rounded-[var(--radius-panel-xl)] border border-border-subtle bg-bg-850/80 p-5 shadow-[var(--shadow-panel-elevated)]">
            <p className="type-label">Execution Signal</p>
            <h3 className="mt-3 text-lg font-semibold text-text-primary">
              Systems + QA Depth
            </h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              Combines software delivery, test analysis, structured problem-solving,
              and system-oriented thinking into one coherent engineering profile.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}