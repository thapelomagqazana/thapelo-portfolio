import type { ProjectAction } from "./project.types";
import { Button } from "../ui/Button";

export interface SystemModuleActionsProps {
  readonly actions: readonly ProjectAction[];
}

/**
 * System module action layer.
 *
 * Responsibilities:
 * - Provide clear next actions for each module
 * - Preserve primary/secondary action hierarchy
 * - Keep actions predictable and accessible
 */
export function SystemModuleActions({ actions }: SystemModuleActionsProps) {
  return (
    <nav aria-label="Module actions" className="flex flex-col gap-3 sm:flex-row">
      {actions.map((action) => (
        <Button
          key={action.label}
          href={action.href}
          variant={action.variant}
        >
          {action.label}
        </Button>
      ))}
    </nav>
  );
}