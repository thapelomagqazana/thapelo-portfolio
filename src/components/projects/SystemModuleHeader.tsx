import type { ProjectModuleStatus } from "./project.types";
import { SystemStatusBadge } from "./SystemStatusBadge";

export interface SystemModuleHeaderProps {
  readonly title: string;
  readonly tag?: string;
  readonly status: ProjectModuleStatus;

  /**
   * Optional heading id used by parent article aria-labelledby.
   */
  readonly titleId?: string;
}

/**
 * System module header.
 *
 * Responsibilities:
 * - Present the module title as the primary project identifier
 * - Display project maturity through the standardized status badge
 * - Avoid inconsistent status rendering across project modules
 */
export function SystemModuleHeader({
  title,
  tag,
  status,
  titleId,
}: SystemModuleHeaderProps) {
  return (
    <header className="flex items-start justify-between gap-4">
      <div>
        {tag ? <p className="type-label text-accent-cyan">{tag}</p> : null}

        <h3
          id={titleId}
          className="mt-2 text-xl font-semibold tracking-[-0.02em] text-text-primary"
        >
          {title}
        </h3>
      </div>

      <SystemStatusBadge status={status} />
    </header>
  );
}