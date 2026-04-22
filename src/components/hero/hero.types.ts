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
 * Data contract for engineering-manager-facing proof signals.
 *
 * Purpose:
 * - Communicate strategic engineering fit quickly
 * - Reinforce reliability, operational clarity, and production judgment
 */
export interface HeroManagerSignal {
  readonly id: string;
  readonly label: string;
  readonly description: string;
}

/**
 * Visual priority levels for hero actions.
 *
 * Purpose:
 * - Preserve a clear call-to-action hierarchy
 * - Help the UI communicate which action is primary vs secondary
 */
export type HeroActionPriority = "primary" | "secondary" | "tertiary";

/**
 * Supported semantic outcomes for hero actions.
 *
 * Purpose:
 * - Keep CTA intent explicit and structured
 * - Make future analytics, routing, and interaction wiring easier
 */
export type HeroActionOutcome =
  | "open_terminal_preview"
  | "navigate_to_modules"
  | "open_flagship_module";

/**
 * Data contract for a hero action.
 *
 * Responsibilities:
 * - Represent one visible CTA in the hero
 * - Keep CTA labeling, priority, and destination data-driven
 * - Reduce hard-coded button logic in rendering components
 */
export interface HeroAction {
  readonly id: string;
  readonly label: string;
  /**
   * Anchor-style href for in-page navigation.
   *
   * Enforces:
   * - Must start with "#"
   * - Must target a valid section
   */
  readonly href: `#${string}`;
  readonly priority: HeroActionPriority;
  readonly outcome: HeroActionOutcome;
  readonly ariaLabel?: string;
}

/**
 * Data contract for the hero content model.
 *
 * Purpose:
 * - Decouple copy from UI implementation
 * - Keep the hero deterministic and easy to test
 * - Make future content changes safe and local
 *
 * Migration note:
 * - `primaryActionLabel`, `primaryActionHref`, `secondaryActionLabel`,
 *   and `secondaryActionHref` are preserved temporarily for backward compatibility
 * - New code should prefer `actions`
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
   * - Must be suitable for fast scanning
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
   * Recruiter-oriented fast-scan role signals.
   */
  readonly recruiterSignals: readonly HeroRoleSignal[];

  /**
   * Engineering-manager-oriented strategic fit signals.
   *
   * Purpose:
   * - Help a manager infer how the candidate thinks
   * - Communicate quality, reliability, and production awareness
   */
  readonly managerSignals: readonly HeroManagerSignal[];

  /**
   * Structured hero actions.
   *
   * Rules:
   * - Should contain 2 to 3 visible actions
   * - First action should be the dominant one
   * - Labels should be command-oriented
   */
  readonly actions: readonly HeroAction[];

  /**
   * Legacy primary action label.
   *
   * Temporary compatibility field.
   * New code should prefer `actions`.
   */
  readonly primaryActionLabel: string;

  /**
   * Legacy primary action href.
   *
   * Temporary compatibility field.
   * New code should prefer `actions`.
   */
  readonly primaryActionHref: string;

  /**
   * Legacy secondary action label.
   *
   * Temporary compatibility field.
   * New code should prefer `actions`.
   */
  readonly secondaryActionLabel: string;

  /**
   * Legacy secondary action href.
   *
   * Temporary compatibility field.
   * New code should prefer `actions`.
   */
  readonly secondaryActionHref: string;

  readonly metrics: readonly HeroMetric[];
  readonly terminalCommand: string;
  readonly terminalLines: readonly TerminalLine[];
}