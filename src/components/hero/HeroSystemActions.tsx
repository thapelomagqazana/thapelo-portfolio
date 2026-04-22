import type { HeroAction } from "./hero.types";
import { Button } from "../ui/Button";

/**
 * Props for the hero action group.
 */
export interface HeroSystemActionsProps {
  readonly actions: readonly HeroAction[];
}

/**
 * Hero action group.
 *
 * Responsibilities:
 * - Present the primary navigation choices in the hero
 * - Preserve a clear primary/secondary/tertiary hierarchy
 * - Keep the number of visible hero actions intentionally limited
 * - Ensure CTA outcomes remain explicit and predictable
 *
 * Accessibility:
 * - Exposes the CTA collection as a named navigation region
 * - Uses clear text labels for all actions
 * - Keeps touch targets large and keyboard focus visible
 */
export function HeroSystemActions({ actions }: HeroSystemActionsProps) {
  const visibleActions = actions.slice(0, 3);

  return (
    <nav aria-label="Hero primary actions">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {visibleActions.map((action) => (
          <Button
            key={action.id}
            href={action.href}
            variant={action.priority}
            aria-label={action.ariaLabel ?? action.label}
          >
            {action.label}
          </Button>
        ))}
      </div>
    </nav>
  );
}