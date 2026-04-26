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

export type ProjectActionKind = "link" | "inspect";


export interface ProjectAction {
  readonly label: string;
  readonly href: `#${string}` | `https://${string}`;
  readonly variant: "primary" | "secondary";

  /**
   * Action behavior.
   *
   * Purpose:
   * - Avoid guessing behavior from button labels.
   * - Keep navigation actions and inspection actions explicit.
   */
  readonly kind?: ProjectActionKind;
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

export interface ProjectEngineeringDecision {
  readonly title: string;
  readonly reason: string;
  readonly benefit: string;
}

export interface ProjectTradeOff {
  readonly title: string;
  readonly gain: string;
  readonly cost: string;
}

/**
 * Practical engineering lesson learned from a project.
 *
 * Purpose:
 * - Show reflection and growth.
 * - Connect project experience to better future engineering decisions.
 *
 * Rules:
 * - Keep lessons concrete.
 * - Recommended: 2–3 lessons per project.
 * - Avoid vague statements like "I learned a lot".
 */
export interface ProjectLesson {
  readonly title: string;
  readonly insight: string;
  readonly futureUse: string;
}

export type ProjectVerificationLinkType =
  | "code"
  | "demo"
  | "screenshot"
  | "writeup"
  | "docs"
  | "architecture";

export interface ProjectVerificationLink {
  readonly label: string;
  readonly type: ProjectVerificationLinkType;
  readonly href: `#${string}` | `https://${string}`;
  readonly description?: string;
}


export interface ProjectInspectionDetail {
  readonly overview: string;
  readonly architecture: string;
  readonly problemContext: string;
  readonly impact: string;
  readonly evidence?: readonly string[];

  /**
   * Key engineering decisions behind the project.
   *
   * Rules:
   * - 2–4 decisions
   * - must explain reason and benefit
   */
  readonly decisions: readonly ProjectEngineeringDecision[];

  /**
   * Important trade-offs considered during implementation.
   *
   * Rules:
   * - 2–3 trade-offs
   * - must show both gain and cost
   */
  readonly tradeOffs: readonly ProjectTradeOff[];

  /**
   * Practical constraints considered during design or implementation.
   */
  readonly constraints?: readonly string[];

  /**
   * Practical lessons learned from the project.
   *
   * Rules:
   * - 2–3 lessons max.
   * - Must show engineering reality.
   * - Must connect to future work.
   */
  readonly lessons?: readonly ProjectLesson[];

  readonly verificationLinks?: readonly ProjectVerificationLink[];
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