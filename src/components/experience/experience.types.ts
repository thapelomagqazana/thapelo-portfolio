/**
 * Outcome signal for a professional experience entry.
 *
 * Purpose:
 * - Replace responsibility-only bullets with value-first impact statements.
 * - Make each role easier for recruiters and engineering managers to evaluate.
 *
 * Content rules:
 * - Must be concise.
 * - Must describe action + result.
 * - Must avoid vague wording like "worked on" or "responsible for".
 */
export interface ExperienceOutcome {
  readonly statement: string;

  /**
   * Optional supporting context.
   *
   * Example:
   * "Across enterprise insurance workflows with developer and stakeholder feedback."
   */
  readonly context?: string;
}

/**
 * Experience domain model.
 *
 * Purpose:
 * - Represent work history as operational log entries.
 * - Keep experience content structured, scannable, and recruiter-friendly.
 * - Avoid responsibility-only CV language.
 */

export type ExperienceLogStatus = "ACTIVE" | "COMPLETED" | "CONTRACT";

export interface ExperienceLogEntry {
  readonly id: string;

  /**
   * Role title shown first for fast recruiter scanning.
   */
  readonly role: string;

  /**
   * Organization name.
   */
  readonly company: string;

  /**
   * Clear display period.
   *
   * Example:
   * - "2025 — Present"
   * - "Mar 2024 — Sep 2024"
   */
  readonly period: string;

  /**
   * Optional credibility context.
   */
  readonly location?: string;

  /**
   * Operational state of the role.
   */
  readonly status: ExperienceLogStatus;

  /**
   * One-line role summary.
   *
   * Rules:
   * - Must describe impact.
   * - Must not become a paragraph.
   */
  readonly summary: string;

  /**
   * Primary role outcomes.
   *
   * Rules:
   * - 2–4 outcomes recommended.
   * - Must show impact, not only responsibility.
   */
  readonly outcomes: readonly ExperienceOutcome[];

  /**
   * Optional system tags.
   */
  readonly tags?: readonly string[];
}