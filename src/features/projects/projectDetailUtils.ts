import type { ProjectDetail } from "./projectDetailModel";
import { PROJECT_DETAIL_FIXTURES } from "./projectDetailData";

/**
 * Canonical project-detail lookup helpers.
 *
 * Purpose:
 * - Keep lookup logic centralized and deterministic
 * - Prevent repeated route-resolution logic in page components
 * - Support graceful invalid-id handling
 */

/**
 * Finds a project detail by canonical project id.
 *
 * Returns:
 * - matching project detail when found
 * - undefined when the id is unknown
 */
export function findProjectDetailById(id: string): ProjectDetail | undefined {
  return PROJECT_DETAIL_FIXTURES.find((project) => project.id === id);
}

/**
 * Returns the canonical ordered detail sections for rendering.
 *
 * Purpose:
 * - Keep section order deterministic
 * - Avoid ad hoc ordering inside the detail-page component
 */
export function getProjectDetailSections(project: ProjectDetail) {
  return [
    project.problem,
    project.approach,
    project.architecture,
    project.outcome,
  ] as const;
}