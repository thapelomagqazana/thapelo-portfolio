import type { SkillCapabilityGroup } from "./skill.types";

export interface SkillCapabilityGridProps {
  readonly groups: readonly SkillCapabilityGroup[];
}

/**
 * Skill capability grid.
 *
 * Responsibilities:
 * - Render grouped skills as capability panels.
 * - Keep scanning fast for recruiters and engineering managers.
 * - Avoid generic skill-cloud layouts.
 *
 * Accessibility:
 * - Uses list semantics.
 * - Does not rely on icons or color alone.
 */
export function SkillCapabilityGrid({ groups }: SkillCapabilityGridProps) {
  const visibleGroups = groups.filter(isRenderableSkillGroup).slice(0, 5);

  if (visibleGroups.length === 0) {
    return null;
  }

  return (
    <ul className="grid gap-5 lg:grid-cols-2" aria-label="Skill capability groups">
      {visibleGroups.map((group) => (
        <li key={group.label}>
          <SkillCapabilityCard group={group} />
        </li>
      ))}
    </ul>
  );
}

interface SkillCapabilityCardProps {
  readonly group: SkillCapabilityGroup;
}

/**
 * Single skill capability panel.
 *
 * Purpose:
 * - Show one capability area with supporting skills and context.
 * - Keep skill presentation intentional and evidence-friendly.
 */
function SkillCapabilityCard({ group }: SkillCapabilityCardProps) {
  return (
    <article className="h-full rounded-[var(--radius-panel-xl)] bg-bg-800/15 p-5 ring-1 ring-white/5 transition hover:bg-bg-800/25 hover:ring-accent-cyan/20">
      <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-accent-cyan">
        Capability Panel
      </p>

      <h3 className="mt-3 text-lg font-semibold text-text-primary">
        {group.label}
      </h3>

      <p className="mt-3 text-sm leading-6 text-text-secondary">
        {group.items.slice(0, 6).join(" • ")}
      </p>

      {group.context ? (
        <p className="mt-3 text-sm leading-6 text-text-muted">
          {group.context}
        </p>
      ) : null}
    </article>
  );
}

/**
 * Validates whether a skill group is complete enough to render.
 *
 * Purpose:
 * - Prevent empty or misleading capability panels.
 * - Reduce technical debt from incomplete content objects.
 */
function isRenderableSkillGroup(group: SkillCapabilityGroup): boolean {
  return group.label.trim().length > 0 && group.items.length >= 2;
}