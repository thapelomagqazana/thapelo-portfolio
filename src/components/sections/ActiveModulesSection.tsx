import type { HTMLAttributes } from "react";

import { classNames } from "../../lib/classNames";
import { PROJECT_MODULES } from "../projects/project.content";
import { SystemModuleCard } from "../projects/SystemModuleCard";

/**
 * Props for the ActiveModulesSection component.
 */
export interface ActiveModulesSectionProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  /**
   * Navigation section id used by active-section tracking.
   *
   * Example:
   * - "modules"
   */
  readonly sectionId?: string;

  /**
   * Visible section heading.
   */
  readonly title?: string;

  /**
   * Supporting section summary.
   */
  readonly summary?: string;
}

const flagshipModules = PROJECT_MODULES.filter(
  (module) => module.variant === "flagship",
);

const standardModules = PROJECT_MODULES.filter(
  (module) => module.variant !== "flagship",
);

/**
 * Active Modules section.
 *
 * Responsibilities:
 * - Present portfolio projects as system modules
 * - Replace generic project cards with structured operational units
 * - Preserve fast scanning for recruiters and engineering managers
 * - Support configurable section metadata from page composition
 *
 * Accessibility:
 * - Uses a semantic section with a stable labelled heading
 * - Keeps project modules inside a predictable grid structure
 */
export function ActiveModulesSection({
  id = "active-modules",
  sectionId = "modules",
  title = "Projects presented as operational systems.",
  summary = "Each module shows purpose, status, operational signals, capabilities, and actions for fast evaluation.",
  className,
  ...rest
}: ActiveModulesSectionProps) {
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
          <p className="type-label text-accent-cyan">Active Modules</p>

          <h2
            id={headingId}
            className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-text-primary sm:text-4xl"
          >
            {title}
          </h2>

          {summary ? (
            <p className="mt-5 text-base leading-7 text-text-secondary">
              {summary}
            </p>
          ) : null}
        </div>

        <div className="mt-10 grid gap-6">
          {flagshipModules.map((module) => (
            <SystemModuleCard key={module.id} module={module} />
          ))}

          {standardModules.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-2">
              {standardModules.map((module) => (
                <SystemModuleCard key={module.id} module={module} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}