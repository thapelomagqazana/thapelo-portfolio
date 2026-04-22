import { Panel } from "../ui/Panel";

/**
 * Props for recruiter validation signals.
 */
export interface HeroPositioningSignalsProps {
  readonly title?: string;
  readonly items: readonly string[];
}

/**
 * Supporting recruiter proof panel.
 *
 * Responsibilities:
 * - Reinforce the hero positioning visually
 * - Translate the positioning into recruiter-readable relevance signals
 * - Remain secondary to the main positioning statement
 */
export function HeroPositioningSignals({
  title = "Recruiter Signals",
  items,
}: HeroPositioningSignalsProps) {
  return (
    <Panel
      role="complementary"
      aria-label="Recruiter validation signals"
      className="grid gap-4"
    >
      <div>
        <p className="type-label">{title}</p>
        <p className="mt-2 text-sm text-text-secondary">
          Fast-scan indicators for software engineering, QA, and release-focused roles.
        </p>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="list-none rounded-[var(--radius-panel-lg)] border border-border-subtle bg-bg-800/70 px-4 py-3 text-sm font-medium text-text-primary"
          >
            {item}
          </li>
        ))}
      </ul>
    </Panel>
  );
}