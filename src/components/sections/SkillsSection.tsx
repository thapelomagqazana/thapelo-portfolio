import type { HTMLAttributes } from "react";

import { classNames } from "../../lib/classNames";
import { SKILL_CAPABILITIES } from "../skills/skill.content";
import { SkillCapabilityGrid } from "../skills/SkillCapabilityGrid";

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
 * - Present skills as structured capability groups.
 * - Preserve recruiter scan speed.
 * - Match the portfolio's Control Room / Mission Control visual language.
 *
 * Accessibility:
 * - Uses a semantic section with a stable labelled heading.
 * - Keeps capabilities inside a predictable list/grid.
 */
export function SkillsSection({
  id = "skills",
  sectionId = "skills",
  title = "Capabilities grouped for fast evaluation.",
  summary = "Skills are grouped into practical capability areas so recruiters and engineering managers can quickly understand where I create value.",
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
            Capability Panels
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
          <SkillCapabilityGrid groups={SKILL_CAPABILITIES} />
        </div>
      </div>
    </section>
  );
}