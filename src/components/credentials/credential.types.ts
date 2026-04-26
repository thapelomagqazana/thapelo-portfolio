/**
 * Credential status.
 *
 * Purpose:
 * - Make credential state explicit and scannable.
 * - Avoid vague wording such as "currently studying".
 */
export type CredentialStatus = "IN_PROGRESS" | "COMPLETED" | "CERTIFIED";

/**
 * Credential category.
 *
 * Purpose:
 * - Distinguish formal education, training programs, and certifications.
 */
export type CredentialType =
  | "DEGREE"
  | "DIPLOMA"
  | "CERTIFICATION"
  | "PROGRAM";

export interface CredentialEntry {
  readonly id: string;

  /**
   * Qualification, program, or certification name.
   */
  readonly title: string;

  /**
   * Institution or credential provider.
   */
  readonly institution: string;

  /**
   * Time period label.
   *
   * Example:
   * "2026 — Present"
   */
  readonly period: string;

  /**
   * Credential completion state.
   */
  readonly status: CredentialStatus;

  /**
   * Credential classification.
   */
  readonly type: CredentialType;

  /**
   * Short context explaining what the credential contributes.
   *
   * Rules:
   * - 1 sentence max.
   * - Must connect to credibility, technical foundation, or learning trajectory.
   */
  readonly description?: string;

  /**
   * Optional location or learning mode context.
   */
  readonly location?: string;

  /**
   * Optional credential identifier.
   *
   * Purpose:
   * - Supports verification when a credential ID exists.
   */
  readonly credentialId?: string;

  /**
   * Optional public verification link.
   *
   * Security:
   * - Must be HTTPS.
   * - Rendered only when provided.
   */
  readonly verificationHref?: `https://${string}`;
}