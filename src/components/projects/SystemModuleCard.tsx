import type { ProjectModule } from "./project.types";
import { SystemModuleHeader } from "./SystemModuleHeader";
import { SystemProblemOutcome } from "./SystemProblemOutcome";
import { SystemCapabilityList } from "./SystemCapabilityList";
import { SystemModuleActions } from "./SystemModuleActions";

export interface SystemModuleCardProps {
  readonly module: ProjectModule;
}

function flattenTechStack(module: ProjectModule): string {
  return module.techStack.flatMap((group) => group.items).slice(0, 5).join(" • ");
}

/**
 * System module card.
 *
 * Responsibilities:
 * - Present each project as a clean system module
 * - Avoid duplicated purpose/status/summary content
 * - Prioritize fast scanning before deeper inspection
 *
 * Layout contract:
 * 1. Header: title + status
 * 2. Purpose: primary summary
 * 3. Stack: compact implementation context
 * 4. Problem → Outcome: business value
 * 5. Capabilities: demonstrated engineering value
 * 6. Actions
 */
export function SystemModuleCard({ module }: SystemModuleCardProps) {
  return (
    <article
      id={module.id}
      aria-labelledby={`${module.id}-title`}
      className="grid gap-5 rounded-[var(--radius-panel-xl)] border border-border-subtle bg-bg-850/70 p-6"
    >
      <SystemModuleHeader
        title={module.title}
        tag={module.tag}
        status={module.status}
        titleId={`${module.id}-title`}
      />

      <section aria-label="Project purpose">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
          Purpose
        </p>
        <p className="mt-2 max-w-[64ch] text-sm font-semibold leading-6 text-text-primary">
          {module.purpose}
        </p>
      </section>

      <section aria-label="Tech stack">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
          Stack
        </p>
        <p className="mt-2 text-sm text-text-secondary">
          {flattenTechStack(module)}
        </p>
      </section>

      <SystemProblemOutcome problem={module.problem} outcome={module.outcome} />

      <SystemCapabilityList capabilities={module.capabilities} />

      <SystemModuleActions actions={module.actions} />
    </article>
  );
}