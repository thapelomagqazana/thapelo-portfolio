import type { HTMLMotionProps } from "motion/react";
import { motion } from "motion/react";
import type { JSX } from "react";

import { classNames } from "../../lib/classNames";
import {
  createFadeInVariants,
  createSlideUpVariants,
  createGlowPulseAnimation,
} from "../../motion/presets";
import { useMotionPreference } from "../../motion/useMotionPreference";
import type { MotionEntrancePreset, MotionHighlightPreset } from "../../motion/types";

/**
 * Props for the canonical MotionBox wrapper.
 *
 * Responsibilities:
 * - Provide bounded reusable entrance/highlight motion presets
 * - Prevent ad hoc raw motion definitions in consuming components
 * - Remain a light wrapper over motion.div
 */
export interface MotionBoxProps extends HTMLMotionProps<"div"> {
  /**
   * Optional entrance preset.
   */
  entrance?: MotionEntrancePreset;

  /**
   * Optional highlight preset.
   *
   * Current supported highlight motion is glowPulse.
   */
  highlight?: MotionHighlightPreset;

  /**
   * Disables entrance animation if true.
   */
  disableEntrance?: boolean;
}

/**
 * Canonical MotionBox wrapper.
 *
 * Design rules:
 * - Use this wrapper for standard motion behavior
 * - Prefer presets over raw animation objects in reusable code
 * - Keep the API small and intentional
 */
export function MotionBox({
  entrance,
  highlight,
  disableEntrance = false,
  className,
  children,
  ...props
}: MotionBoxProps): JSX.Element {
  const reduceMotion = useMotionPreference();

  const entranceVariants =
    entrance === "slideUp"
      ? createSlideUpVariants(reduceMotion)
      : entrance === "fadeIn"
        ? createFadeInVariants(reduceMotion)
        : undefined;

  const animate =
    highlight === "glowPulse"
      ? createGlowPulseAnimation(reduceMotion)
      : entranceVariants
        ? "animate"
        : undefined;

  const initial =
    disableEntrance || !entranceVariants ? undefined : "initial";

  return (
    <motion.div
      className={classNames(className)}
      variants={entranceVariants}
      initial={initial}
      animate={animate}
      {...props}
    >
      {children}
    </motion.div>
  );
}