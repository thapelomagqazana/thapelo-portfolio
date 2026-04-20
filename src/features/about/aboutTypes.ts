import type { ReactNode } from "react";

/**
 * Canonical About section layout contracts.
 *
 * Purpose:
 * - Keep the About layout data-driven and structurally explicit
 * - Separate layout composition from content implementation details
 * - Prevent scattered hard-coded markup across the feature
 */

/**
 * Story-region content contract.
 *
 * This remains intentionally lightweight in the layout task.
 */
export interface AboutStoryContent {
  /**
   * Region heading.
   */
  readonly title: string;

  /**
   * Optional supporting text blocks.
   *
   * The layout task uses concise placeholders or bounded copy only.
   */
  readonly paragraphs: readonly string[];
}

/**
 * Capability-region content contract.
 *
 * This remains intentionally lightweight in the layout task.
 */
export interface AboutCapabilitiesContent {
  /**
   * Region heading.
   */
  readonly title: string;

  /**
   * Bounded list of capability labels or short descriptors.
   */
  readonly items: readonly string[];
}

/**
 * Canonical About section content model.
 */
export interface AboutSectionContent {
  /**
   * Optional eyebrow/kicker above the section heading.
   */
  readonly eyebrow?: string;

  /**
   * Main section title.
   */
  readonly title: string;

  /**
   * Supporting section introduction.
   */
  readonly intro?: string;

  /**
   * Story-region content.
   */
  readonly story: AboutStoryContent;

  /**
   * Capability-region content.
   */
  readonly capabilities: AboutCapabilitiesContent;
}

/**
 * Shared content-region slot type.
 *
 * Allows controlled overrides in the layout shell without coupling the layout
 * to the later story/capability implementation tasks.
 */
export interface AboutSectionSlots {
  /**
   * Optional custom node for the story region.
   */
  readonly story?: ReactNode;

  /**
   * Optional custom node for the capabilities region.
   */
  readonly capabilities?: ReactNode;
}
