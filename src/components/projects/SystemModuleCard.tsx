import type { ProjectModule } from "./project.types";
import { SystemModuleHeader } from "./SystemModuleHeader";
import { SystemSignalGroup } from "./SystemSignalGroup";
import { SystemCapabilityList } from "./SystemCapabilityList";
import { SystemModuleActions } from "./SystemModuleActions";

export interface SystemModuleCardProps {
  readonly module: ProjectModule;
}

/**
 * System module card.
 *
 * Responsibilities:
 * - Render a project as an operational system module
 * - Preserve consistent module structure across all projects
 * - Surface summary, signals, capabilities, and actions in a predictable order
 *
 * Layout contract:
 * 1. Header
 * 2. Summary
 * 3. Operational signals
 * 4. Capability snapshot
 * 5. Actions
 */
export function SystemModuleCard({ module }: SystemModuleCardProps) {
  return (
    <article
      id={module.id}
      aria-labelledby={`${module.id}-title`}
      className="grid gap-6 rounded-[var(--radius-panel-xl)] border border-border-subtle bg-bg-850/70 p-6"
    >
      <div id={`${module.id}-title`}>
        <SystemModuleHeader
          title={module.title}
          tag={module.tag}
          status={module.status}
        />
      </div>

      <p className="max-w-[64ch] text-base leading-7 text-text-secondary">
        {module.summary}
      </p>

      <SystemSignalGroup signals={module.signals} />

      <SystemCapabilityList capabilities={module.capabilities} />

      <SystemModuleActions actions={module.actions} />
    </article>
  );
}