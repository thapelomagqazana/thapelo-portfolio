import type { ProjectModule, ProjectModuleStatus } from "./projectModel";

/**
 * Canonical project-model validation helpers.
 *
 * Purpose:
 * - Provide lightweight runtime validation for fixture data
 * - Keep validation logic centralized and reusable
 * - Prevent invalid example data from silently entering rendering surfaces
 */

/**
 * Approved project-module status values for this phase.
 */
export const PROJECT_MODULE_STATUSES: readonly ProjectModuleStatus[] = [
  "ACTIVE",
  "DEPLOYED",
] as const;

/**
 * Returns true when a status value is part of the approved bounded vocabulary.
 */
export function isProjectModuleStatus(
  value: string,
): value is ProjectModuleStatus {
  return PROJECT_MODULE_STATUSES.includes(value as ProjectModuleStatus);
}

/**
 * Validates a project/module fixture at runtime.
 *
 * Returns:
 * - true if the object matches the minimum canonical model expectations
 * - false otherwise
 *
 * Notes:
 * - This is intentionally lightweight
 * - It complements TypeScript rather than replacing it
 */
export function isProjectModule(value: unknown): value is ProjectModule {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const candidate = value as Partial<ProjectModule>;

  return (
    typeof candidate.id === "string" &&
    candidate.id.trim().length > 0 &&
    typeof candidate.name === "string" &&
    candidate.name.trim().length > 0 &&
    typeof candidate.status === "string" &&
    isProjectModuleStatus(candidate.status) &&
    typeof candidate.description === "string" &&
    candidate.description.trim().length > 0 &&
    Array.isArray(candidate.techStack) &&
    candidate.techStack.length > 0 &&
    candidate.techStack.every(
      (item) => typeof item === "string" && item.trim().length > 0,
    )
  );
}

/**
 * Asserts that a project/module fixture is valid.
 *
 * Throws:
 * - Error when the fixture does not conform to the canonical model
 *
 * Purpose:
 * - Useful for fixture bootstrapping and test setup
 * - Fails loudly when data drifts from the approved model
 */
export function assertProjectModule(value: unknown): asserts value is ProjectModule {
  if (!isProjectModule(value)) {
    throw new Error("Invalid project module fixture.");
  }
}