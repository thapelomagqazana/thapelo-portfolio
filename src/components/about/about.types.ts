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
  readonly value: string;
}

export interface AboutStoryModule {
  /**
   * Short module title.
   *
   * Rules:
   * - 1–3 words
   * - must describe a real story phase
   */
  readonly title: string;

  /**
   * Concise module body.
   *
   * Rules:
   * - max 60 words
   * - must add distinct story value
   */
  readonly body: string;
}

/**
 * Data contract for one capability item inside a domain group.
 *
 * Purpose:
 * - Keep capability labels short and scannable
 * - Allow optional supporting phrases without forcing verbosity
 */
export interface AboutCapabilityItem {
  /**
   * Short capability label.
   *
   * Rules:
   * - 1 to 4 words
   * - readable in under a second
   */
  readonly label: string;
}

/**
 * Data contract for one grouped capability domain.
 *
 * Purpose:
 * - Express strengths through recognizable engineering areas
 * - Avoid flat, resume-like skill dumping
 */
export interface AboutCapabilityGroup {
  /**
   * Domain title.
   *
   * Examples:
   * - Systems Thinking
   * - Software Quality
   * - Reliability / Release
   * - Technical Execution
   */
  readonly title: string;

  /**
   * Capability items belonging to this domain.
   */
  readonly items: readonly AboutCapabilityItem[];
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
   * Concise narrative content for the section.
   *
   * Rules:
   * - Must be between 90 and 130 words
   * - Must include construction background, software transition, and current value
   * - Must avoid becoming a full biography or resume dump
   */
  readonly storyModules: readonly AboutStoryModule[];
  
  readonly valueSignals: readonly AboutValueSignal[];
  readonly capabilityGroups: readonly AboutCapabilityGroup[];
}