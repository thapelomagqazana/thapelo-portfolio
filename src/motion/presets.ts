import type { TargetAndTransition, Variant, Variants } from "motion/react";

import {
  MOTION_DURATIONS,
  MOTION_EASINGS,
  MOTION_GLOW,
  MOTION_OFFSETS,
} from "./config";

/**
 * Motion preset factory helpers.
 *
 * Purpose:
 * - Create reusable, bounded animation definitions
 * - Keep raw animation objects out of feature components
 * - Support reduced-motion fallbacks without duplicating logic
 */

/**
 * Returns a canonical fade-in variant pair.
 *
 * Reduced-motion behavior:
 * - Keeps opacity transition only
 * - Avoids transform movement entirely
 */
export function createFadeInVariants(
  reduceMotion = false,
): Variants {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: MOTION_DURATIONS.normal,
        ease: MOTION_EASINGS.standard,
      },
    },
  };
}

/**
 * Returns a canonical slide-up variant pair.
 *
 * Reduced-motion behavior:
 * - Removes Y translation
 * - Preserves opacity transition for gentle appearance
 */
export function createSlideUpVariants(
  reduceMotion = false,
): Variants {
  return {
    initial: {
      opacity: 0,
      y: reduceMotion ? 0 : MOTION_OFFSETS.slideUpY,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: MOTION_DURATIONS.normal,
        ease: MOTION_EASINGS.emphasized,
      },
    },
  };
}

/**
 * Returns a canonical glow-pulse animation target.
 *
 * Reduced-motion behavior:
 * - Disables scale pulsing
 * - Keeps the target visually stable
 *
 * Notes:
 * - This is intentionally subtle
 * - It should be used for emphasis only, not continuous decoration everywhere
 */
export function createGlowPulseAnimation(
  reduceMotion = false,
): TargetAndTransition {
  if (reduceMotion) {
    return {
      opacity: 1,
      scale: 1,
      transition: {
        duration: MOTION_DURATIONS.fast,
        ease: MOTION_EASINGS.standard,
      },
    };
  }

  return {
    opacity: [MOTION_GLOW.opacityFrom, MOTION_GLOW.opacityTo, MOTION_GLOW.opacityFrom],
    scale: [MOTION_GLOW.scaleFrom, MOTION_GLOW.scaleTo, MOTION_GLOW.scaleFrom],
    transition: {
      duration: MOTION_DURATIONS.slow * 2,
      ease: MOTION_EASINGS.linear,
      repeat: Infinity,
      repeatType: "loop",
    },
  };
}

/**
 * Returns a canonical initial state for static motion wrappers.
 */
export const MOTION_INITIAL: Variant = {
  opacity: 0,
};

/**
 * Returns a canonical visible state for static motion wrappers.
 */
export const MOTION_VISIBLE: Variant = {
  opacity: 1,
};