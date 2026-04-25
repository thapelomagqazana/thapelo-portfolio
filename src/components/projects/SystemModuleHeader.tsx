import type { ProjectModuleStatus } from "./project.types";

export interface SystemModuleHeaderProps {
  readonly title: string;
  readonly tag?: string;
  readonly status: ProjectModuleStatus;

  /**
   * Optional heading id used by the parent article's aria-labelledby.
   */
  readonly titleId?: string;
}

function formatStatus(status: ProjectModuleStatus): string {
  return status.replaceAll("_", " ");
}

/**
 * System module header.
 *
 * Responsibilities:
 * - Present the module title as the primary project identifier
 * - Display project maturity as a system-style state
 * - Provide an optional stable heading id for accessible article labeling
 * - Avoid generic card-header patterns
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

      <span
        aria-label={`Project status: ${formatStatus(status)}`}
        className="shrink-0 rounded-full border border-border-subtle bg-bg-800/70 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-text-secondary"
      >
        {formatStatus(status)}
      </span>
    </header>
  );
}