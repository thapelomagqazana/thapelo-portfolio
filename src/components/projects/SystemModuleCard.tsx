import { useState } from "react";

import type { ProjectModule } from "./project.types";
import { classNames } from "../../lib/classNames";
import { SystemModuleHeader } from "./SystemModuleHeader";
import { SystemProblemOutcome } from "./SystemProblemOutcome";
import { SystemCapabilityList } from "./SystemCapabilityList";
import { SystemModuleActions } from "./SystemModuleActions";
import { ProjectCategoryChips } from "./ProjectCategoryChips";
import { ProjectInspectionModal } from "./ProjectInspectionModal";

export interface SystemModuleCardProps {
  readonly module: ProjectModule;
}

/**
 * Flattens grouped tech stack items into a short display string.
 *
 * Purpose:
 * - Keeps module cards compact.
 * - Prevents project cards from becoming noisy tool dumps.
 */
function flattenTechStack(module: ProjectModule): string {
  return module.techStack.flatMap((group) => group.items).slice(0, 5).join(" • ");
}

/**
 * System module card.
 *
 * Purpose:
 * - Present a project as a clean operational module.
 * - Preserve hierarchy: identity → purpose → proof → action.
 * - Keep deep inspection details outside the card in a focused modal.
 */
export function SystemModuleCard({ module }: SystemModuleCardProps) {
  const [isInspecting, setIsInspecting] = useState(false);
  const isFlagship = module.variant === "flagship";
  const headingId = `${module.id}-title`;

  return (
    <>
      <article
        id={module.id}
        aria-labelledby={headingId}
        data-module-variant={module.variant ?? "standard"}
        className={classNames(
          "rounded-[var(--radius-panel-xl)] border bg-bg-850/70",
          "grid gap-6 p-6 sm:p-7",
          isFlagship
            ? "border-accent-cyan/50 shadow-[0_0_42px_rgba(34,211,238,0.10)]"
            : "border-border-subtle",
        )}
      >
        <SystemModuleHeader
          title={module.title}
          tag={module.tag}
          status={module.status}
          titleId={headingId}
        />

        <ProjectCategoryChips categories={module.categories} />

        <section aria-label="Project purpose" className="max-w-3xl">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
            Purpose
          </p>

          <p className="mt-2 text-base font-semibold leading-7 text-text-primary">
            {module.purpose}
          </p>
        </section>

        <section aria-label="Tech stack">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
            Stack
          </p>

          <p className="mt-2 text-sm leading-6 text-text-secondary">
            {flattenTechStack(module)}
          </p>
        </section>

        <SystemProblemOutcome problem={module.problem} outcome={module.outcome} />

        <SystemCapabilityList capabilities={module.capabilities} />

        <SystemModuleActions
          actions={module.actions}
          onInspect={() => setIsInspecting(true)}
        />
      </article>

      <ProjectInspectionModal
        title={module.title}
        inspection={module.inspection}
        isOpen={isInspecting}
        onClose={() => setIsInspecting(false)}
      />
    </>
  );
}