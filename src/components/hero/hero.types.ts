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
 * Data contract for the hero content model.
 *
 * Purpose:
 * - Decouple copy from UI implementation.
 * - Keep the hero deterministic and easy to test.
 * - Make future content changes safe and local.
 */
export interface HeroContent {
  readonly status: HeroStatus;
  readonly modeLabel: string;
  readonly kicker: string;
  readonly title: string;
  readonly summary: string;
  readonly primaryActionLabel: string;
  readonly primaryActionHref: string;
  readonly secondaryActionLabel: string;
  readonly secondaryActionHref: string;
  readonly metrics: readonly HeroMetric[];
  readonly terminalCommand: string;
  readonly terminalLines: readonly TerminalLine[];
}