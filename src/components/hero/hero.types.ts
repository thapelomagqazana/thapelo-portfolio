/**
 * Data contract for the hero system status.
 */
export interface HeroStatus {
  readonly label: string;
  readonly tone: "pass" | "warn" | "info";
}

/**
 * Data contract for a dashboard metric row.
 */
export interface HeroMetric {
  readonly label: string;
  readonly value: string;
  readonly tone?: "pass" | "warn" | "info";
}

/**
 * Data contract for terminal output lines.
 */
export interface TerminalLine {
  readonly id: string;
  readonly content: string;
}

/**
 * Data contract for recruiter-facing role mapping signals.
 *
 * Purpose:
 * - Help recruiter users classify the candidate quickly
 * - Keep recruiter-specific proof copy structured and reusable
 */
export interface HeroRoleSignal {
  readonly id: string;
  readonly label: string;
}

/**
 * Data contract for the hero content model.
 *
 * Purpose:
 * - Decouple copy from UI implementation
 * - Keep the hero deterministic and easy to test
 * - Make future content changes safe and local
 */
export interface HeroContent {
  readonly status: HeroStatus;
  readonly modeLabel: string;
  readonly kicker: string;

  /**
   * Dominant positioning statement shown in the hero.
   *
   * Rules:
   * - Must communicate niche clearly
   * - Must remain concise and high-signal
   * - Must be suitable for recruiter scanning
   */
  readonly title: string;

  /**
   * Secondary supporting line for the hero.
   *
   * Rules:
   * - One sentence maximum
   * - Must reinforce the candidate's lane and value
   */
  readonly summary: string;

  /**
   * Fast-scan recruiter classification signals.
   *
   * Purpose:
   * - Help hiring viewers classify the candidate quickly
   * - Reinforce the positioning statement without adding paragraphs
   */
  readonly recruiterSignals: readonly HeroRoleSignal[];

  readonly primaryActionLabel: string;
  readonly primaryActionHref: string;
  readonly secondaryActionLabel: string;
  readonly secondaryActionHref: string;
  readonly metrics: readonly HeroMetric[];
  readonly terminalCommand: string;
  readonly terminalLines: readonly TerminalLine[];
}