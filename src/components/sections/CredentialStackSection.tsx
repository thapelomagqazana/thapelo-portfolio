import type { HTMLAttributes } from "react";

import { classNames } from "../../lib/classNames";
import { CREDENTIALS } from "../credentials/credential.data";
import { CredentialTimeline } from "../credentials/CredentialTimeline";

export interface CredentialStackSectionProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  readonly sectionId?: string;
  readonly title?: string;
  readonly summary?: string;
}

/**
 * Credential stack section.
 *
 * Responsibilities:
 * - Present degrees, programs, and certifications as one trust system.
 * - Keep technical credibility visible without certificate clutter.
 * - Match the visual rhythm of the portfolio's operational sections.
 *
 * Accessibility:
 * - Uses a semantic section with a stable labelled heading.
 * - Keeps credential records in an ordered timeline.
 */
export function CredentialStackSection({
  id = "credential-stack",
  sectionId = "credentials",
  title = "Credentials that reinforce technical credibility.",
  summary = "Structured credential records showing academic background, cloud awareness, technical foundation, and continuous learning trajectory.",
  className,
  ...rest
}: CredentialStackSectionProps) {
  const headingId = `${id}-title`;

  return (
    <section
      {...rest}
      id={id}
      data-section-id={sectionId}
      aria-labelledby={headingId}
      className={classNames("px-6 py-20 sm:px-8 lg:px-10", className)}
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-accent-cyan">
            Credential Stack
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

        <div className="mt-8">
          <CredentialTimeline credentials={CREDENTIALS} />
        </div>
      </div>
    </section>
  );
}