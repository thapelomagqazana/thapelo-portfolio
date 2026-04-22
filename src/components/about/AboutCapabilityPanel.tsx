import type { AboutCapabilityGroup } from "./about.types";

/**
 * Props for the AboutCapabilityPanel component.
 */
export interface AboutCapabilityPanelProps {
  /**
   * Structured capability groups to render.
   */
  readonly groups: readonly AboutCapabilityGroup[];
}

/**
 * About-section capability panel.
 *
 * Responsibilities:
 * - Help engineering managers scan strengths quickly
 * - Present strengths through concrete engineering domains
 * - Reinforce the About story without becoming a resume-like skill dump
 *
 * Design goals:
 * - Structured, scannable, and restrained
 * - Secondary to the story, but visually clear
 * - Consistent with the control-room / system-first direction
 *
 * Accessibility:
 * - Uses a named complementary region
 * - Groups capabilities under readable headings
 * - Keeps labels short and readable without relying on decoration
 */
export function AboutCapabilityPanel({
  groups,
}: AboutCapabilityPanelProps) {
  return (
    <aside
      role="complementary"
      aria-label="Engineering capability panel"
      className="grid gap-4"
    >
      <div>
        <p className="type-label text-accent-cyan">Capability Signals</p>
        <p className="mt-2 text-sm text-text-secondary">
          Concrete engineering domains presented for fast technical scanning.
        </p>
      </div>

      <div className="grid gap-4">
        {groups.map((group) => (
          <section
            key={group.title}
            aria-labelledby={`capability-group-${group.title}`}
            className="rounded-[var(--radius-panel-xl)] border border-border-subtle bg-bg-850/70 p-5"
          >
            <h3
              id={`capability-group-${group.title}`}
              className="text-sm font-semibold uppercase tracking-[0.08em] text-text-primary"
            >
              {group.title}
            </h3>

            {group.summary ? (
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {group.summary}
              </p>
            ) : null}

            <ul className="mt-4 grid gap-2" aria-label={`${group.title} capabilities`}>
              {group.items.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-col gap-1 rounded-[var(--radius-panel-md)] border border-border-subtle/60 bg-bg-800/55 px-3 py-2"
                >
                  <span className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-text-primary">
                    {item.label}
                  </span>

                  {item.detail ? (
                    <span className="text-xs leading-5 text-text-secondary">
                      {item.detail}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </aside>
  );
}