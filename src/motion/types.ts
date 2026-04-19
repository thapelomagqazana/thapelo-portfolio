/**
 * Shared motion type contracts.
 *
 * Purpose:
 * - Keep motion-specific types centralized
 * - Avoid repeating literal unions across motion helpers
 * - Support consistent, bounded configuration usage
 */

/**
 * Canonical timing presets used across the motion system.
 */
export type MotionDurationPreset = "fast" | "normal" | "slow";

/**
 * Canonical entrance animation kinds.
 */
export type MotionEntrancePreset = "fadeIn" | "slideUp";

/**
 * Canonical highlight animation kinds.
 */
export type MotionHighlightPreset = "glowPulse";