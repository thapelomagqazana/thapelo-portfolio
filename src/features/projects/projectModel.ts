/**
 * Canonical project-module data contracts.
 *
 * Purpose:
 * - Establish a single authoritative data shape for portfolio projects
 * - Support module cards, future project grids, and future project-detail routes
 * - Prevent duplicate project type definitions across the codebase
 *
 * Design notes:
 * - This model is intentionally bounded
 * - It supports summary/listing use cases in this phase
 * - It does not yet absorb long-form project-detail content
 */

/**
 * Canonical bounded status vocabulary for portfolio modules in this phase.
 *
 * Semantics:
 * - ACTIVE:
 *   The module is actively evolving, being iterated on, or is currently in progress.
 *
 * - DEPLOYED:
 *   The module has been shipped, released, or is available in a deployed state.
 */
export type ProjectModuleStatus = "ACTIVE" | "DEPLOYED";

/**
 * Single authoritative project/module model for the portfolio.
 *
 * Responsibilities:
 * - Provide enough structure for module-card rendering
 * - Provide a stable identifier for future route resolution
 * - Keep summary metadata concise and reusable
 */
export interface ProjectModule {
  /**
   * Stable unique identifier.
   *
   * Requirements:
   * - non-empty
   * - deterministic
   * - suitable for use as a rendering key and future lookup key
   */
  readonly id: string;

  /**
   * Primary user-facing project/module name.
   */
  readonly name: string;

  /**
   * Bounded project/module lifecycle state for this phase.
   */
  readonly status: ProjectModuleStatus;

  /**
   * Concise project summary for list/module presentation.
   *
   * Notes:
   * - Must remain scannable
   * - Not intended to store full case-study content
   */
  readonly description: string;

  /**
   * Ordered list of technologies used in the project/module.
   *
   * Notes:
   * - Replaces ambiguous names such as `tech`
   * - Intended for lightweight metadata rendering
   */
  readonly techStack: readonly string[];

  /**
   * Optional navigation target for module-detail routing.
   *
   * If omitted, the card remains presentational only.
   */
  readonly href?: string;
}