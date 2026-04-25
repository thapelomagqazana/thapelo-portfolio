import type {
  ProjectModuleStatus,
  ProjectTechStackGroup,
} from "./project.types";

/**
 * Props for the recruiter-facing project signal summary.
 */
export interface SystemSignalSummaryProps {
  readonly purpose: string;
  readonly status: ProjectModuleStatus;
  readonly techStack: readonly ProjectTechStackGroup[];
}

/**
 * Convert project status enum values into readable labels.
 */
function formatProjectStatus(status: ProjectModuleStatus): string {
  return status.replaceAll("_", " ");
}

/**
 * Flatten grouped tech stack entries into a concise visible list.
 *
 * Rules:
 * - Display max 5 items
 * - Preserve scan speed
 * - Prevent tool overload
 */
function flattenTechStack(
  techStack: readonly ProjectTechStackGroup[],
): readonly string[] {
  return techStack.flatMap((group) => group.items).slice(0, 5);
}

/**
 * Recruiter-facing signal summary layer.
 *
 * Responsibilities:
 * - Expose project purpose, status, and tech stack at a glance
 * - Help recruiters evaluate relevance in 3–5 seconds
 * - Keep labels explicit and accessible
 *
 * Accessibility:
 * - Each signal has a clear text label
 * - Status meaning does not rely on color
 * - Group labels are exposed through aria-labels
 */
export function SystemSignalSummary({
  purpose,
  status,
  techStack,
}: SystemSignalSummaryProps) {
  const formattedStatus = formatProjectStatus(status);
  const stackItems = flattenTechStack(techStack);

  return (
    <section
      aria-label="Project signal summary"
      className="grid gap-3 rounded-[var(--radius-panel-xl)] border border-border-subtle bg-bg-800/50 p-4"
    >
      <div
        role="group"
        aria-label={`Purpose: ${purpose}`}
        className="rounded-[var(--radius-panel-lg)] border border-border-subtle bg-bg-850/60 px-4 py-3"
      >
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
          Purpose
        </p>

        <p className="mt-2 text-sm font-semibold leading-6 text-text-primary">
          {purpose}
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div
          role="group"
          aria-label={`Status: ${formattedStatus}`}
          className="rounded-[var(--radius-panel-lg)] border border-border-subtle bg-bg-850/60 px-4 py-3"
        >
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
            Status
          </p>

          <p className="mt-2 font-mono text-sm font-semibold uppercase tracking-[0.08em] text-text-primary">
            {formattedStatus}
          </p>
        </div>

        <div
          role="group"
          aria-label={`Tech Stack: ${stackItems.join(", ")}`}
          className="rounded-[var(--radius-panel-lg)] border border-border-subtle bg-bg-850/60 px-4 py-3"
        >
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
            Tech Stack
          </p>

          <p className="mt-2 text-sm font-semibold leading-6 text-text-primary">
            {stackItems.join(" • ")}
          </p>
        </div>
      </div>
    </section>
  );
}