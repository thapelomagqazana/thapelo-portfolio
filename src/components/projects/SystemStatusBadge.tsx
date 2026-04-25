import type { ProjectModuleStatus } from "./project.types";

/**
 * Presentation metadata for one project lifecycle status.
 *
 * Purpose:
 * - Keep lifecycle wording centralized
 * - Prevent inconsistent labels across project modules
 * - Preserve accessibility by always exposing readable text
 */
interface ProjectStatusDefinition {
  readonly label: string;
  readonly description: string;
  readonly className: string;
}

/**
 * Controlled project status presentation map.
 *
 * Rules:
 * - Every ProjectModuleStatus must be represented here
 * - Colors are only secondary reinforcement
 * - Text label remains the primary meaning carrier
 */
const PROJECT_STATUS_DEFINITIONS: Record<
  ProjectModuleStatus,
  ProjectStatusDefinition
> = {
  ACTIVE: {
    label: "Active",
    description: "Currently maintained and evolving",
    className: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  },
  DEPLOYED: {
    label: "Deployed",
    description: "Live and usable",
    className: "border-cyan-400/30 bg-cyan-400/10 text-cyan-200",
  },
  IN_DEVELOPMENT: {
    label: "In Development",
    description: "Actively being built",
    className: "border-amber-400/30 bg-amber-400/10 text-amber-200",
  },
  EXPERIMENTAL: {
    label: "Experimental",
    description: "Exploratory or non-final",
    className: "border-violet-400/30 bg-violet-400/10 text-violet-200",
  },
  ARCHIVED: {
    label: "Archived",
    description: "No longer actively evolving",
    className: "border-slate-400/30 bg-slate-400/10 text-slate-200",
  },
};

export interface SystemStatusBadgeProps {
  /**
   * Controlled lifecycle status for a project module.
   */
  readonly status: ProjectModuleStatus;

  /**
   * Whether to show the "Status:" label visually.
   *
   * The accessible name always includes "Project status".
   */
  readonly showPrefix?: boolean;
}

/**
 * Standardized project status badge.
 *
 * Responsibilities:
 * - Communicate project maturity consistently across all modules
 * - Enforce the controlled status vocabulary visually
 * - Keep project state readable without relying on color alone
 *
 * Accessibility:
 * - Uses an explicit aria-label with status and meaning
 * - Keeps visible text readable and high contrast
 */
export function SystemStatusBadge({
  status,
  showPrefix = false,
}: SystemStatusBadgeProps) {
  const definition = PROJECT_STATUS_DEFINITIONS[status];

  return (
    <span
      aria-label={`Project status: ${definition.label}. ${definition.description}.`}
      title={definition.description}
      className={[
        "inline-flex min-h-8 shrink-0 items-center rounded-full border px-3 py-1",
        "font-mono text-[0.7rem] font-semibold uppercase tracking-[0.08em]",
        definition.className,
      ].join(" ")}
    >
      {showPrefix ? `Status: ${definition.label}` : definition.label}
    </span>
  );
}