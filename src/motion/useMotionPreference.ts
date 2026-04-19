import { useReducedMotion } from "motion/react";

/**
 * Canonical reduced-motion preference hook.
 *
 * Purpose:
 * - Provide one motion-preference entry point for local component logic
 * - Keep direct reduced-motion checks out of feature components
 *
 * Returns:
 * - true when the user prefers reduced motion
 * - false otherwise
 */
export function useMotionPreference(): boolean {
  return useReducedMotion();
}