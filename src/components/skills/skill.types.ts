/**
 * Grouped capability model for skills.
 *
 * Purpose:
 * - Present skills as meaningful capability areas.
 * - Avoid generic tag-cloud skill dumping.
 */
export interface SkillCapabilityGroup {
  /**
   * Capability area represented by the skills.
   *
   * Examples:
   * - Frontend Engineering
   * - Quality Engineering
   * - Systems Thinking
   * - DevOps Foundations
   */
  readonly label: string;

  /**
   * Skills, tools, or practices within this capability.
   *
   * Rules:
   * - 2–6 items recommended.
   * - Must be relevant to actual work.
   */
  readonly items: readonly string[];

  /**
   * Optional explanation of why this capability matters.
   *
   * Rules:
   * - 1 sentence max.
   * - Must connect to real-world application.
   */
  readonly context?: string;
}