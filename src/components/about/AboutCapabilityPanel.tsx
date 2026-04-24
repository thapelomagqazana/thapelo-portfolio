import type { AboutCapabilityGroup } from "./about.types";

/**
 * Props for AboutCapabilityPanel.
 */
export interface AboutCapabilityPanelProps {
  readonly groups: readonly AboutCapabilityGroup[];
}

/**
 * Engineering-manager-facing capability panel.
 *
 * Responsibilities:
 * - Present concrete engineering strengths beside the About story
 * - Avoid raw tool dumping or generic soft-skill lists
 * - Make the candidate's profile scannable by domain
 */
export function AboutCapabilityPanel({ groups }: AboutCapabilityPanelProps) {
  return (
    <aside
      role="complementary"
      aria-label="Engineering capability panel"
      className="rounded-[var(--radius-panel-xl)] border border-border-subtle bg-bg-850/60 p-5"
    >
      <p className="type-label text-accent-cyan">Capability Signals</p>
      <p className="mt-2 text-sm text-text-secondary">
        Concrete domains for fast engineering-manager scanning.
      </p>

      <div className="mt-5 grid gap-4">
        {groups.map((group) => (
          <section key={group.title} aria-labelledby={`capability-${group.title}`}>
            <h3
              id={`capability-${group.title}`}
              className="text-sm font-semibold uppercase tracking-[0.08em] text-text-primary"
            >
              {group.title}
            </h3>

            <ul className="mt-3 grid gap-2">
              {group.items.map((item) => (
                <li
                  key={item.label}
                  className="rounded-[var(--radius-panel-md)] border border-border-subtle bg-bg-800/55 px-3 py-2 font-mono text-[0.75rem] uppercase tracking-[0.08em] text-text-secondary"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </aside>
  );
}