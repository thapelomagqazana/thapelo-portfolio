import type { PortfolioSectionProps } from "./section.types";

/**
 * Contact / action section for the portfolio.
 *
 * Responsibilities:
 * - Give recruiters a clear next step after identity, proof, and trust
 * - Frame the contact moment as the natural conclusion of the page flow
 * - Keep the call to action concise and professionally direct
 *
 * UX role:
 * - Answers: "What should I do next if this profile is relevant?"
 */
export function OpenTransmissionSection({
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
          <p className="type-label text-accent-cyan">Action Layer</p>

          <h2 id={`${id}-heading`} className="type-h2 mt-3">
            {title}
          </h2>

          <p className="mt-4 text-text-secondary">
            {summary}
          </p>
        </div>

        <div className="mt-8 rounded-[var(--radius-panel-xl)] border border-border-subtle bg-bg-850/80 p-6 shadow-[var(--shadow-panel-elevated)]">
          <p className="text-sm leading-6 text-text-secondary">
            If you are looking for someone with software delivery exposure,
            QA discipline, systems thinking, and a strong release-confidence mindset,
            this is the right point to continue the conversation.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:thapelo@example.com"
              className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-panel-md)] border border-border-active bg-bg-800/80 px-5 py-3 text-sm font-semibold text-text-primary transition-[color,background-color,border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-bg-800"
            >
              Contact
            </a>

            <a
              href="#"
              className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-panel-md)] border border-border-subtle px-5 py-3 text-sm font-semibold text-text-secondary transition-[color,background-color,border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:text-text-primary hover:bg-bg-850/70"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}