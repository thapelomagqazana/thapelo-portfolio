/**
 * Canonical hero content contracts.
 *
 * Purpose:
 * - Keep hero messaging structured and deterministic
 * - Separate hero content configuration from presentation logic
 * - Reduce future churn when updating messaging or CTA targets
 *
 * Notes:
 * - This is a bounded content contract for the hero system only.
 * - It is not a CMS or dynamic content model.
 */

/**
 * Supported CTA intents for the hero system.
 *
 * These values are intentionally bounded so the hero stays aligned
 * with the approved UX flow.
 */
export type HeroCtaIntent = "primary" | "secondary";

/**
 * Structured CTA definition for the hero system.
 */
export interface HeroCta {
  /**
   * Stable identifier for the CTA.
   */
  readonly id: string;

  /**
   * Visible button label.
   */
  readonly label: string;

  /**
   * Interaction target.
   *
   * This can be:
   * - an in-page hash target
   * - an internal route path
   */
  readonly href: string;

  /**
   * Intended hierarchy for visual emphasis.
   */
  readonly intent: HeroCtaIntent;
}

/**
 * Canonical hero content definition.
 */
export interface HeroContent {
  /**
   * Primary hero statement.
   */
  readonly headline: string;

  /**
   * Supporting explanatory statement.
   */
  readonly subheadline: string;

  /**
   * Primary and secondary CTA definitions.
   */
  readonly ctas: readonly HeroCta[];
}

/**
 * Default hero content for the portfolio.
 *
 * This content is intentionally concise and system-oriented,
 * matching the approved “Control Room / Mission Control” voice.
 */
export const DEFAULT_HERO_CONTENT: HeroContent = {
  headline: "I build systems that decide whether software is safe to release.",
  subheadline:
    "Software Developer and Test Analyst focused on quality, reliability, and release confidence through structured, production-ready systems.",
  ctas: [
    {
      id: "run-inspection",
      label: "Run Inspection",
      href: "#modules",
      intent: "primary",
    },
    {
      id: "view-history",
      label: "View Experience",
      href: "#history",
      intent: "secondary",
    },
  ],
} as const;