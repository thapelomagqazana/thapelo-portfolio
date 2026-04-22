import type { PortfolioSectionProps } from "./section.types";

/**
 * Credential stack section for the portfolio.
 *
 * Responsibilities:
 * - Reinforce educational and professional credibility
 * - Keep trust signals visible and compact
 * - Support recruiter scanning without forcing deep reading
 *
 * UX role:
 * - Answers: "What signals reinforce confidence in this profile?"
 */
export function CredentialStackSection({
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
          <p className="type-label text-accent-cyan">Credibility Layer</p>

          <h2 id={`${id}-heading`} className="type-h2 mt-3">
            {title}
          </h2>

          <p className="mt-4 text-text-secondary">
            {summary}
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-[var(--radius-panel-xl)] border border-border-subtle bg-bg-850/80 p-5 shadow-[var(--shadow-panel-elevated)]">
            <p className="type-label">Education</p>
            <h3 className="mt-3 text-lg font-semibold text-text-primary">
              UNISA
            </h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              BSc in Computer Science and Mathematics, building stronger depth
              in systems, algorithms, and applied technical foundations.
            </p>
          </article>

          <article className="rounded-[var(--radius-panel-xl)] border border-border-subtle bg-bg-850/80 p-5 shadow-[var(--shadow-panel-elevated)]">
            <p className="type-label">Training</p>
            <h3 className="mt-3 text-lg font-semibold text-text-primary">
              WeThinkCode
            </h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              Practical software development training grounded in real problem-solving
              and working-system delivery.
            </p>
          </article>

          <article className="rounded-[var(--radius-panel-xl)] border border-border-subtle bg-bg-850/80 p-5 shadow-[var(--shadow-panel-elevated)]">
            <p className="type-label">Foundation</p>
            <h3 className="mt-3 text-lg font-semibold text-text-primary">
              Wits
            </h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              Earlier academic background that contributes structured thinking,
              discipline, and systems-oriented problem framing.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}