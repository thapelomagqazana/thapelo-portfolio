import type { ProjectAction } from "./project.types";
import { Button } from "../ui/Button";

export interface SystemModuleActionsProps {
  readonly actions: readonly ProjectAction[];

  /**
   * Optional inline inspection handler.
   *
   * Purpose:
   * - Allows module actions to open inspection mode without navigation
   * - Keeps route/page context intact
   */
  readonly onInspect?: () => void;
}

/**
 * System module action layer.
 *
 * Responsibilities:
 * - Provide clear next actions for each module
 * - Preserve primary/secondary action hierarchy
 * - Support inline inspection without route navigation
 */
export function SystemModuleActions({
  actions,
  onInspect,
}: SystemModuleActionsProps) {
  return (
    <nav aria-label="Module actions" className="flex flex-col gap-3 sm:flex-row">
      {actions.map((action) => {
        const shouldOpenInspection =
          action.label.toLowerCase().includes("inspect") ||
          action.label.toLowerCase().includes("view");

        return (
          <Button
            key={action.label}
            href={action.href}
            variant={action.variant}
            onClick={
              shouldOpenInspection && onInspect
                ? (event) => {
                    event.preventDefault();
                    onInspect();
                  }
                : undefined
            }
          >
            {action.label}
          </Button>
        );
      })}
    </nav>
  );
}