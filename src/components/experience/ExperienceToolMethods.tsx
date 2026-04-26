import type { ExperienceToolMethodGroup } from "./experience.types";

export interface ExperienceToolMethodsProps {
  readonly groups?: readonly ExperienceToolMethodGroup[];
}

/**
 * Experience tools and methods layer.
 *
 * Responsibilities:
 * - Show important tools, methods, and practices used in a role.
 * - Group tools by capability area instead of dumping a flat skill list.
 * - Explain why each group mattered to the role.
 *
 * Accessibility:
 * - Uses a semantic section with a clear heading.
 * - Does not rely on icons or color alone.
 * - Keeps each group readable as plain text.
 */
export function ExperienceToolMethods({
  groups = [],
}: ExperienceToolMethodsProps) {
  const visibleGroups = groups.slice(0, 4);

  if (visibleGroups.length === 0) {
    return null;
  }

  return (
    <section aria-label="Capability methods" className="mt-5">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-accent-cyan">
        Capability Methods
      </p>

      <div className="mt-3 grid gap-3 lg:grid-cols-3">
        {visibleGroups.map((group) => (
          <article
            key={group.label}
            className="rounded-[var(--radius-panel-lg)] bg-bg-900/25 p-4 ring-1 ring-white/5"
          >
            <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-text-primary">
              {group.label}
            </h4>

            <p className="mt-2 text-sm leading-6 text-text-secondary">
              {group.items.slice(0, 5).join(" • ")}
            </p>

            <p className="mt-2 text-sm leading-6 text-text-muted">
              {group.purpose}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

interface ToolMethodGroupRowProps {
  readonly group: ExperienceToolMethodGroup;
}

/**
 * Single tool/method group row.
 *
 * Purpose:
 * - Keep tools grouped by purpose.
 * - Connect implementation methods to work outcomes.
 */
function ToolMethodGroupRow({ group }: ToolMethodGroupRowProps) {
  return (
    <article className="rounded-[var(--radius-panel-md)] bg-bg-850/35 p-4 ring-1 ring-white/5">
      <h4 className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-primary">
        {group.label}
      </h4>

      <p className="mt-2 text-sm leading-6 text-text-secondary">
        {group.items.slice(0, 5).join(" • ")}
      </p>

      <p className="mt-2 text-sm leading-6 text-text-muted">
        {group.purpose}
      </p>
    </article>
  );
}

/**
 * Checks whether a tool/method group has enough useful content to render.
 *
 * Purpose:
 * - Prevent empty placeholders.
 * - Avoid showing incomplete capability claims.
 */
function isRenderableToolMethodGroup(
  group: ExperienceToolMethodGroup,
): boolean {
  return (
    group.label.trim().length > 0 &&
    group.items.length > 0 &&
    group.purpose.trim().length > 0
  );
}