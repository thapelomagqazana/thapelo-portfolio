import type { PortfolioSectionProps } from "./section.types";

/**
 * Operational history section for the portfolio.
 *
 * Responsibilities:
 * - Reinforce credibility after proof has been established
 * - Show practical exposure across testing, delivery, and engineering contexts
 * - Keep experience scannable instead of verbose
 *
 * UX role:
 * - Answers: "Can I trust this?" through practical history
 */
export function OperationalHistorySection({
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
          <p className="type-label text-accent-cyan">Trust Layer</p>

          <h2 id={`${id}-heading`} className="type-h2 mt-3">
            {title}
          </h2>

          <p className="mt-4 text-text-secondary">
            {summary}
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <article className="rounded-[var(--radius-panel-xl)] border border-border-subtle bg-bg-850/80 p-5 shadow-[var(--shadow-panel-elevated)]">
            <p className="type-label">Current Role</p>
            <h3 className="mt-3 text-lg font-semibold text-text-primary">
              Test Analyst · Alula Technologies
            </h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              Contributes to planning, execution, and reporting across critical
              systems, helping teams validate quality, requirements alignment,
              and operational confidence.
            </p>
          </article>

          <article className="rounded-[var(--radius-panel-xl)] border border-border-subtle bg-bg-850/80 p-5 shadow-[var(--shadow-panel-elevated)]">
            <p className="type-label">Web Delivery</p>
            <h3 className="mt-3 text-lg font-semibold text-text-primary">
              Web Developer · C. Steinweg Bridge Ltd
            </h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              Built a marketing-focused cargo tracking experience using React,
              maps, Docker, and deployment-oriented thinking to support
              performance and engagement.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}