/**
 * Canonical project route data.
 *
 * Purpose:
 * - Provide a bounded known-project source of truth for the routing baseline
 * - Keep project route recognition deterministic without introducing a full data layer
 *
 * Notes:
 * - This file is intentionally small and static for WBS 2.1.1
 * - It is not a full project repository, CMS, or fetch layer
 * - Future tasks may replace or extend this source
 */

/**
 * Minimal project route contract.
 */
export interface ProjectRouteRecord {
  /**
   * Stable route identifier used in `/projects/:id`.
   */
  readonly id: string;

  /**
   * Human-readable title shown in route shells and fallback messaging.
   */
  readonly title: string;

  /**
   * Short bounded summary for placeholder rendering.
   */
  readonly summary: string;
}

/**
 * Known projects available to the routing baseline.
 *
 * This list is intentionally small and deterministic.
 */
export const PROJECT_ROUTE_RECORDS: readonly ProjectRouteRecord[] = [
  {
    id: "brikbyteos",
    title: "BrikByteOS",
    summary:
      "Release intelligence operating system focused on quality, policy, and production confidence.",
  },
  {
    id: "cargo-tracking",
    title: "Cargo Tracking System",
    summary:
      "Real-time cargo tracking experience with map-driven logistics visibility.",
  },
  {
    id: "qa-dashboard",
    title: "QA Signal Dashboard",
    summary:
      "Testing and quality signal visualization concept for operational software confidence.",
  },
] as const;