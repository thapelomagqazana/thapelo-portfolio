import type { HeroManagerSignal } from "./hero.types";
import { Panel } from "../ui/Panel";

/**
 * Props for the engineering-manager supporting proof panel.
 */
export interface HeroManagerSignalsProps {
  readonly title?: string;
  readonly items: readonly HeroManagerSignal[];
}

/**
 * Supporting proof panel for engineering-manager hero evaluation.
 *
 * Responsibilities:
 * - Reinforce the candidate's systems and reliability orientation
 * - Translate strategic fit into a compact operational panel
 * - Remain visually secondary to the main headline while increasing confidence
 */
export function HeroManagerSignals({
  title = "Strategic Fit Signals",
  items,
}: HeroManagerSignalsProps) {
  return (
    <Panel
      role="complementary"
      aria-label="Engineering manager strategic fit signals"
      className="grid gap-4"
    >
      <div>
        <p className="type-label">{title}</p>
        <p className="mt-2 text-sm text-text-secondary">
          Operational cues for teams that care about release quality, production safety, and delivery confidence.
        </p>
      </div>

      <ul className="grid gap-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="list-none rounded-[var(--radius-panel-lg)] border border-border-subtle bg-bg-800/70 p-4"
          >
            <p className="text-sm font-semibold text-text-primary">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </Panel>
  );
}