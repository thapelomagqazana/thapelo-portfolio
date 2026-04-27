/**
 * Canonical skill category.
 *
 * Purpose:
 * - Keep skill groups aligned to engineering-manager evaluation.
 */
export type SkillCategory =
  | "QUALITY_ENGINEERING"
  | "FRONTEND_ENGINEERING"
  | "SYSTEMS_THINKING"
  | "DEVOPS_FOUNDATIONS"
  | "TOOLING_WORKFLOW";

/**
 * Evidence source type for a skill capability.
 *
 * Purpose:
 * - Make skill proof explicit.
 * - Avoid unsupported skill claims.
 */
export type SkillEvidenceType =
  | "PROJECT"
  | "WORK_EXPERIENCE"
  | "CREDENTIAL"
  | "OPEN_SOURCE"
  | "LEARNING";

export interface SkillEvidenceSignal {
  /**
   * Type of evidence supporting the capability.
   */
  readonly type: SkillEvidenceType;

  /**
   * Human-readable evidence source.
   */
  readonly source: string;

  /**
   * Short explanation of how this source proves the skill.
   *
   * Rules:
   * - 1 sentence max.
   * - Must be concrete.
   */
  readonly proof: string;

  /**
   * Optional internal anchor or public URL.
   */
  readonly href?: `#${string}` | `https://${string}`;
}

export interface SkillCapabilityPanel {
  readonly category: SkillCategory;
  readonly title: string;
  readonly summary: string;
  readonly items: readonly string[];

  /**
   * Evidence proving this capability.
   *
   * Rules:
   * - 1–3 signals max.
   * - Must connect to real project, work, credential, or learning context.
   */
  readonly evidence: readonly SkillEvidenceSignal[];
}

export type DifferentiatorEmphasis = "PRIMARY" | "SECONDARY";

export interface DifferentiatorSignal {
  /**
   * Core differentiator visitors should remember.
   *
   * Example:
   * "Release Confidence"
   */
  readonly label: string;

  /**
   * Short positioning line.
   *
   * Rules:
   * - 1 sentence max.
   * - Must communicate market value.
   */
  readonly summary: string;

  /**
   * Capabilities supporting the differentiator.
   *
   * Rules:
   * - 2–5 items recommended.
   * - Must be concrete.
   */
  readonly capabilities: readonly string[];

  /**
   * Evidence that supports this differentiator.
   *
   * Rules:
   * - Must connect to real project, work, or credential evidence.
   */
  readonly evidence: string;

  /**
   * Visual priority.
   *
   * Rules:
   * - Only one PRIMARY differentiator should exist.
   */
  readonly emphasis: DifferentiatorEmphasis;
}