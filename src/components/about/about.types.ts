/**
 * Data contract for a short About value signal.
 *
 * Purpose:
 * - Reinforce the current-value framing beside the story
 * - Keep recruiter-facing cues structured and reusable
 */
export interface AboutValueSignal {
  /**
   * Short signal label.
   *
   * Examples:
   * - "Systems Thinking"
   * - "Software Quality"
   * - "Release Confidence"
   */
  readonly label: string;
}


/**
 * Data contract for the concise About / Mission Profile story.
 *
 * Purpose:
 * - Keep About copy content-driven and easy to refine
 * - Prevent story text from being scattered through JSX
 * - Make future Epic 4 expansion safe and local
 */
export interface AboutMissionProfileContent {
  /**
   * Small section overline used to classify the section.
   *
   * Example:
   * - "Mission Profile"
   * - "Background Signal"
   */
  readonly kicker: string;

  /**
   * Main section heading.
   *
   * Rules:
   * - Must remain concise
   * - Must support the hero without competing with it
   */
  readonly title: string;

  /**
   * Primary story paragraph.
   *
   * Rules:
   * - Must include background, transition, and present value
   * - Must stay within the approved brevity target
   */
  readonly story: string;

  /**
   * Supporting recruiter-facing value signals.
   *
   * Purpose:
   * - Make current value scannable beside the story
   * - Reinforce positioning without repeating the hero verbatim
   */
  readonly valueSignals: readonly AboutValueSignal[];
}