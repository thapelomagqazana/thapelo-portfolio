import { useReducedMotion } from "motion/react";

/**
 * Canonical reduced-motion preference hook.
 *
 * Purpose:
 * - Provide one motion-preference entry point for the application
 * - Normalize Motion library output into a strict boolean
 * - Prevent null leakage into animation logic
 *
 * Why normalization is required:
 * - `useReducedMotion()` returns `boolean | null`
 * - `null` occurs during SSR or before hydration
 * - Downstream code must not deal with tri-state logic
 *
 * Behavior:
 * - true  → user prefers reduced motion
 * - false → user does not prefer reduced motion OR value not yet known
 */
export function useMotionPreference(): boolean {
  const prefersReducedMotion = useReducedMotion();

  /**
   * Normalize null → false
   *
   * Rationale:
   * - Defaulting to "no reduction" avoids breaking animations unexpectedly
   * - MotionConfig will still globally enforce reducedMotion="user"
   */
  return prefersReducedMotion ?? false;
}