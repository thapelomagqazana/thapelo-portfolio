import type { PropsWithChildren } from "react";
import { MotionConfig } from "motion/react";
import type { JSX } from "react";

/**
 * Canonical Motion provider.
 *
 * Purpose:
 * - Apply default transition behavior consistently across motion-enabled UI
 * - Respect user reduced-motion preferences automatically
 *
 * Notes:
 * - MotionConfig supports repository-wide defaults
 * - reducedMotion="user" tells Motion to honor the device/user preference
 *   by disabling transform/layout-heavy motion while allowing safer values
 *   like opacity to continue where appropriate
 */
export function MotionProvider({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionConfig>
  );
}