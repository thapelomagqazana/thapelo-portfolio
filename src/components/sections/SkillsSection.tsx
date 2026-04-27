import type { HTMLAttributes } from "react";

import { classNames } from "../../lib/classNames";
import { SKILL_CAPABILITY_PANELS, DIFFERENTIATOR_SIGNALS } from "../skills/skill.content";
import { SkillCapabilityGrid } from "../skills/SkillCapabilityGrid";
import { DifferentiatorStrip } from "../skills/DifferentiatorStrip";

export interface SkillsSectionProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  readonly sectionId?: string;
  readonly title?: string;
  readonly summary?: string;
}

/**
 * Skills section.
 *
 * Responsibilities:
 * - Present skills as evidence-backed capability panels.
 * - Preserve recruiter scan speed.
 * - Avoid unsupported skill lists.
 *
 * Accessibility:
 * - Uses a semantic section with stable labelled heading.
 */
export function SkillsSection({
  id = "skills",
  sectionId = "skills",
  title = "Evidence-backed capabilities.",
  summary = "Each capability panel connects skills to real project, work, or credential evidence so the strengths are trustworthy and easy to evaluate.",
  className,
  ...rest
}: SkillsSectionProps) {
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
            Capability Evidence
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

        <div className="mt-10">
          <DifferentiatorStrip signals={DIFFERENTIATOR_SIGNALS} />
        </div>

        <div className="mt-12">
          <SkillCapabilityGrid panels={SKILL_CAPABILITY_PANELS} />
        </div>
      </div>
    </section>
  );
}