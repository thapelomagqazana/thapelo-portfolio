/**
 * Canonical project-module contracts.
 *
 * Purpose:
 * - Define the bounded data structure used by project presentation surfaces
 * - Prevent duplicated ad hoc project-card prop shapes
 * - Keep module listing and future detail routing aligned
 */

/**
 * Approved bounded project/module status vocabulary for this phase.
 *
 * Notes:
 * - ACTIVE: currently in-progress, evolving, or being iterated on
 * - DEPLOYED: available as a shipped or released module
 */
export type ProjectStatus = "ACTIVE" | "DEPLOYED";

/**
 * Canonical project/module summary model.
 *
 * This model is intentionally bounded to the fields required by
 * ModuleCard and near-term project listing features.
 */
export interface ProjectModule {
  /**
   * Stable unique identifier.
   *
   * Used for rendering keys and future route/detail lookup.
   */
  readonly id: string;

  /**
   * Primary user-facing project/module name.
   */
  readonly name: string;

  /**
   * Bounded project/module state.
   */
  readonly status: ProjectStatus;

  /**
   * Concise summary for module/list presentation.
   *
   * This must remain scannable and must not expand into full case-study content.
   */
  readonly description: string;

  /**
   * Ordered list of technologies used by the module.
   */
  readonly techStack: readonly string[];

  /**
   * Optional navigation target for module-detail routing.
   *
   * If omitted, the card remains presentational only.
   */
  readonly href?: string;
}