/**
 * Canonical motion configuration.
 *
 * Purpose:
 * - Define the default motion timing system
 * - Centralize easing and duration decisions
 * - Keep animations subtle, fast, and consistent
 *
 * Design notes:
 * - Motion should feel operational, not theatrical
 * - Use transform and opacity first for performance
 * - Prefer bounded presets over one-off transition objects
 */

/**
 * Canonical duration values in seconds.
 */
export const MOTION_DURATIONS = {
  fast: 0.18,
  normal: 0.3,
  slow: 0.55,
} as const;

/**
 * Canonical easing presets.
 *
 * These are tween-friendly curves for subtle UI motion.
 */
export const MOTION_EASINGS = {
  standard: [0.22, 1, 0.36, 1],
  emphasized: [0.16, 1, 0.3, 1],
  linear: [0, 0, 1, 1],
} as const;

/**
 * Default distance, in pixels, for vertical entrance motion.
 */
export const MOTION_OFFSETS = {
  slideUpY: 16,
} as const;

/**
 * Default pulse range for glow emphasis.
 *
 * This uses small scale shifts to avoid distracting motion.
 */
export const MOTION_GLOW = {
  scaleFrom: 1,
  scaleTo: 1.02,
  opacityFrom: 0.92,
  opacityTo: 1,
} as const;