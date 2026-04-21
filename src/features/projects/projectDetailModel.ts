import type { ProjectModule, ProjectModuleStatus } from "./projectModel";

/**
 * Canonical project-detail contracts.
 *
 * Purpose:
 * - Extend the summary project/module model into a bounded detail-page model
 * - Keep project detail content structured and reusable
 * - Prevent freeform case-study markup from being scattered across route components
 */

/**
 * Canonical project-detail section content.
 *
 * Purpose:
 * - Keep section bodies structured and easy to render consistently
 * - Support concise, bounded case-study-style content
 */
export interface ProjectDetailSection {
  /**
   * Section heading.
   *
   * Expected values in this phase:
   * - Problem
   * - Approach
   * - Architecture
   * - Outcome
   */
  readonly title: string;

  /**
   * Ordered paragraphs used to render the section body.
   */
  readonly paragraphs: readonly string[];
}

/**
 * Canonical project-detail model.
 *
 * Responsibilities:
 * - Preserve the project/module identity fields from the summary model
 * - Add the bounded sections required for the detail page
 * - Remain concise and presentation-focused for this phase
 */
export interface ProjectDetail extends ProjectModule {
  /**
   * Optional short summary shown near the top of the page.
   *
   * This can mirror or slightly deepen the summary description.
   */
  readonly summary?: string;

  /**
   * Problem section.
   */
  readonly problem: ProjectDetailSection;

  /**
   * Approach section.
   */
  readonly approach: ProjectDetailSection;

  /**
   * Architecture section.
   */
  readonly architecture: ProjectDetailSection;

  /**
   * Outcome section.
   */
  readonly outcome: ProjectDetailSection;
}

/**
 * Optional reusable identity snapshot for not-found or lookup logic.
 */
export interface ProjectLookupResult {
  readonly id: string;
  readonly found: boolean;
  readonly status?: ProjectModuleStatus;
}