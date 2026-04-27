import type { HTMLAttributes } from "react";

import { classNames } from "../../lib/classNames";
import { CONTACT_ACTIONS } from "../contact/contact.content";
import { ContactActions } from "../contact/ContactActions";

export interface OpenTransmissionSectionProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  readonly sectionId?: string;
  readonly title?: string;
  readonly summary?: string;
}

/**
 * Contact / conversion section.
 *
 * Responsibilities:
 * - Convert portfolio interest into clear next action.
 * - Provide direct, credible, low-friction contact paths.
 * - Keep outreach aligned with the release-confidence positioning.
 *
 * UX role:
 * - Answers: "How do I contact him now?"
 */
export function OpenTransmissionSection({
  id = "open-transmission",
  sectionId = "contact",
  title = "Open Transmission",
  summary = "Once identity, proof, and trust are established, this is the next step.",
  className,
  ...rest
}: OpenTransmissionSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      {...rest}
      id={id}
      data-section-id={sectionId}
      className={classNames("px-6 py-20 sm:px-8 lg:px-10", className)}
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-accent-cyan">
            Open Transmission
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

        <div className="mt-8 rounded-[var(--radius-panel-xl)] border border-accent-cyan/20 bg-bg-900/40 p-6 shadow-[0_0_48px_rgba(61,220,255,0.07)]">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent-cyan">
            Transmission Ready
          </p>

          <h3 className="mt-3 text-xl font-semibold text-text-primary">
            Let’s build systems that improve release confidence.
          </h3>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-text-secondary">
            If the system signals align and you are building production-ready
            software, QA systems, release tooling, or frontend systems, use the
            fastest channel below.
          </p>

          <ContactActions actions={CONTACT_ACTIONS} />

          <div className="mt-6 rounded-[var(--radius-panel-lg)] bg-bg-800/20 p-4 ring-1 ring-white/5">
            <p className="text-sm leading-6 text-text-muted">
              Best fit: quality engineering, release confidence, frontend delivery,
              developer tooling, and systems-focused product work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}