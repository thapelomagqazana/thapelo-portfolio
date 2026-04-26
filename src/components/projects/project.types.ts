export type ProjectModuleStatus =
  | "ACTIVE"
  | "DEPLOYED"
  | "IN_DEVELOPMENT"
  | "EXPERIMENTAL"
  | "ARCHIVED";

export type ProjectCategory =
  | "SYSTEMS"
  | "QUALITY"
  | "FRONTEND"
  | "DEVOPS"
  | "DATA";

export type ProjectCategoryFilter = "ALL" | ProjectCategory;

export interface ProjectSignal {
  readonly label: string;
  readonly value: string;
}

export interface ProjectAction {
  readonly label: string;
  readonly href: `#${string}` | `https://${string}`;
  readonly variant: "primary" | "secondary";
}

/**
 * Grouped tech stack signal.
 *
 * Purpose:
 * - Keep tech context structured
 * - Avoid dumping every tool into the module UI
 */
export interface ProjectTechStackGroup {
  readonly label: string;
  readonly items: readonly string[];
}

export type ProjectModuleVariant = "standard" | "flagship";

/**
 * Structured evidence point that supports the project outcome.
 *
 * Purpose:
 * - Make outcome claims more credible
 * - Keep evidence concise and scannable
 */
export interface ProjectOutcomeIndicator {
  readonly label: string;
}

export interface ProjectInspectionDetail {
  readonly overview: string;
  readonly architecture: string;
  readonly problemContext: string;
  readonly impact: string;
  readonly evidence?: readonly string[];
}

export interface ProjectModule {
  readonly id: string;
  readonly title: string;
  readonly tag?: string;
  readonly variant?: ProjectModuleVariant;
  readonly status: ProjectModuleStatus;
  readonly categories: readonly ProjectCategory[];

  /**
   * Recruiter-facing purpose line.
   */
  readonly purpose: string;

  readonly summary: string;
  readonly techStack: readonly ProjectTechStackGroup[];

  /**
   * Business or engineering problem addressed by the module.
   *
   * Rules:
   * - concrete
   * - concise
   * - must not simply repeat purpose
   */
  readonly problem: string;

  /**
   * Observable outcome created by the module.
   *
   * Rules:
   * - concise
   * - value-oriented
   * - should communicate clarity, confidence, efficiency, or risk reduction
   */
  readonly outcome: string;

  /**
   * Optional supporting evidence for the outcome.
   *
   * Rules:
   * - 2–3 indicators max
   * - must strengthen the outcome claim
   */
  readonly outcomeIndicators?: readonly ProjectOutcomeIndicator[];
  readonly capabilities: readonly string[];
  readonly actions: readonly ProjectAction[];

  /**
   * Optional inline inspection content.
   *
   * Purpose:
   * - Let visitors inspect deeper project detail without leaving page context
   * - Keep deeper information structured and scannable
   */
  readonly inspection: ProjectInspectionDetail;
}