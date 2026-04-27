import type { ModeTransitionConfig } from "./terminal.types";

/**
 * Terminal transition timing.
 *
 * Rule:
 * - Keep total perceived transition under 250ms.
 */
export const MODE_TRANSITION_CONFIG: Omit<
  ModeTransitionConfig,
  "reducedMotion"
> = {
  overlayMs: 180,
  shellMs: 220,
};