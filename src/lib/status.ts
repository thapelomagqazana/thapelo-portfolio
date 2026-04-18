/**
 * Canonical status vocabulary and normalization helpers.
 *
 * Purpose:
 * - Establish a single authoritative set of allowed operational statuses
 * - Prevent drift between "WARN", "WARNING", "warning", etc.
 * - Keep visual state mapping and component behavior deterministic
 *
 * Design rules:
 * - StatusChip must only consume normalized statuses
 * - Free-text semantic status values are not allowed in component APIs
 * - Future statuses may be added intentionally in later WBS items
 */

/**
 * Canonical normalized operational statuses allowed in this task.
 */
export const CANONICAL_STATUSES = ["PASS", "WARN", "FAIL"] as const;

/**
 * Strongly typed canonical status union.
 */
export type CanonicalStatus = (typeof CANONICAL_STATUSES)[number];

/**
 * Input values accepted for normalization.
 *
 * This type intentionally allows friendly loose inputs so helpers can be
 * reused when integrating later feature data, while still normalizing into
 * a strict canonical vocabulary.
 */
export type StatusInput = string | CanonicalStatus;

/**
 * Metadata describing how a canonical status should be presented.
 */
export interface StatusPresentation {
  /**
   * Canonical semantic color tone.
   */
  readonly tone: "success" | "warning" | "danger";

  /**
   * Human-readable label shown in the UI.
   */
  readonly label: CanonicalStatus;

  /**
   * Optional descriptive copy for future use in tooltips or longer status text.
   */
  readonly description: string;
}

/**
 * Stable presentation metadata for each canonical status.
 */
export const STATUS_PRESENTATION: Record<CanonicalStatus, StatusPresentation> = {
  PASS: {
    tone: "success",
    label: "PASS",
    description: "The system or metric is operating within acceptable boundaries.",
  },
  WARN: {
    tone: "warning",
    label: "WARN",
    description: "The system or metric needs attention but is not in a failed state.",
  },
  FAIL: {
    tone: "danger",
    label: "FAIL",
    description: "The system or metric is outside acceptable boundaries.",
  },
} as const;

/**
 * Normalize loose status input into a canonical status.
 *
 * Supported examples:
 * - "pass"
 * - "PASS"
 * - "warning"
 * - "warn"
 * - "fail"
 * - "failed"
 *
 * Throws:
 * - Error if the value cannot be normalized safely
 */
export function normalizeStatus(input: StatusInput): CanonicalStatus {
  const normalized = input.trim().toUpperCase();

  if (normalized === "PASS" || normalized === "PASSED" || normalized === "SUCCESS") {
    return "PASS";
  }

  if (normalized === "WARN" || normalized === "WARNING") {
    return "WARN";
  }

  if (normalized === "FAIL" || normalized === "FAILED" || normalized === "ERROR") {
    return "FAIL";
  }

  throw new Error(`Unsupported status value: "${input}"`);
}

/**
 * Returns presentation metadata for a normalized status.
 */
export function getStatusPresentation(status: CanonicalStatus): StatusPresentation {
  return STATUS_PRESENTATION[status];
}