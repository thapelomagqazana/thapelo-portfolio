import {
  PROJECT_ROUTE_RECORDS,
  type ProjectRouteRecord,
} from "../data/projects";

/**
 * Project route lookup helpers.
 *
 * Purpose:
 * - Keep project-id handling deterministic and centralized
 * - Prevent route components from duplicating lookup and normalization logic
 * - Provide one approved boundary for known vs unknown project route behavior
 */

/**
 * Safely normalizes a route parameter into a comparable project id.
 *
 * Behavior:
 * - trims surrounding whitespace
 * - lowercases for route comparison consistency
 *
 * @param value - raw route parameter
 * @returns normalized project id or empty string if unavailable
 */
export function normalizeProjectId(value: string | undefined): string {
  return (value ?? "").trim().toLowerCase();
}

/**
 * Returns a known project record for a route parameter, or null if unknown.
 *
 * @param rawId - raw route parameter value
 * @returns matching project record or null
 */
export function getProjectByRouteId(
  rawId: string | undefined,
): ProjectRouteRecord | null {
  const normalizedId = normalizeProjectId(rawId);

  if (!normalizedId) {
    return null;
  }

  return (
    PROJECT_ROUTE_RECORDS.find((project) => project.id === normalizedId) ?? null
  );
}