/**
 * Canonical route path definitions.
 *
 * Purpose:
 * - Centralize approved application paths
 * - Prevent magic strings from drifting across components and tests
 * - Provide helpers for safe route construction
 *
 * Design rules:
 * - Paths defined here are the only approved route path constants
 * - Future routes must be added intentionally
 */

/**
 * Canonical application route path constants.
 */
export const ROUTE_PATHS = {
  home: "/",
  projectDetail: "/projects/:id",
} as const;

/**
 * Builds a project detail path from a project identifier.
 *
 * @param id - Canonical project identifier
 * @returns Stable application route to the project detail page
 */
export function getProjectDetailPath(id: string): string {
  return `/projects/${encodeURIComponent(id)}`;
}