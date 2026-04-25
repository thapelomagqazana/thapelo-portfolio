import type { HTMLAttributes } from "react";
import { useMemo, useState } from "react";

import { classNames } from "../../lib/classNames";
import type { ProjectCategoryFilter as ProjectCategoryFilterValue } from "../projects/project.types";
import { PROJECT_MODULES } from "../projects/project.content";
import { ProjectCategoryFilter } from "../projects/ProjectCategoryFilter";
import { SystemModuleCard } from "../projects/SystemModuleCard";

export interface ActiveModulesSectionProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  readonly sectionId?: string;
  readonly title?: string;
  readonly summary?: string;
}
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
  const [activeFilter, setActiveFilter] =
    useState<ProjectCategoryFilterValue>("ALL");

  const visibleModules = useMemo(() => {
    if (activeFilter === "ALL") {
      return PROJECT_MODULES;
    }

    return PROJECT_MODULES.filter((module) =>
      module.categories.includes(activeFilter),
    );
  }, [activeFilter]);

  const flagshipModules = visibleModules.filter(
    (module) => module.variant === "flagship",
  );

  const standardModules = visibleModules.filter(
    (module) => module.variant !== "flagship",
  );

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
            System Modules
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
          <ProjectCategoryFilter
            activeFilter={activeFilter}
            onChange={setActiveFilter}
          />
        </div>

        <div className="mt-8 grid gap-6">
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

          {visibleModules.length === 0 ? (
            <p className="rounded-[var(--radius-panel-lg)] border border-border-subtle bg-bg-850/60 p-5 text-sm text-text-secondary">
              No modules match this category yet.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}