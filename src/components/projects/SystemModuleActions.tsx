import type { MouseEventHandler } from "react";
import type { ProjectAction } from "./project.types";
import { Button } from "../ui/Button";
import { analyticsClient } from "../../lib/analytics/analytics.client";

export interface SystemModuleActionsProps {
  readonly actions: readonly ProjectAction[];

  /**
   * Opens project inspection mode.
   *
   * Purpose:
   * - Allows inspection actions to open the modal without route navigation.
   */
  readonly onInspect?: () => void;
}

/**
 * System module action layer.
 *
 * Responsibilities:
 * - Provide clear next actions for each module.
 * - Preserve primary/secondary action hierarchy.
 * - Avoid fragile label-based behavior.
 */
export function SystemModuleActions({
  actions,
  onInspect,
}: SystemModuleActionsProps) {
  function createInspectClickHandler(
    action: ProjectAction,
  ): MouseEventHandler<HTMLAnchorElement> {
    return (event) => {
      event.preventDefault();

      analyticsClient.track("portfolio_project_inspection_opened", {
        actionLabel: action.label,
        destination: action.href,
        source: "project_module_actions",
      });

      onInspect?.();
    };
  }

  return (
    <nav aria-label="Module actions" className="flex flex-col gap-3 sm:flex-row">
      {actions.map((action) => {
        const shouldOpenInspection = action.kind === "inspect";

        return (
          <Button
            key={`${action.label}-${action.href}`}
            href={action.href}
            variant={action.variant}
            onClick={
              shouldOpenInspection && onInspect
                ? createInspectClickHandler(action)
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