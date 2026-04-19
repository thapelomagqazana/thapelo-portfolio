import type { JSX, PropsWithChildren } from "react";

import { MotionBox, type MotionBoxProps } from "./MotionBox";

/**
 * GlowPulse wrapper props.
 */
export type GlowPulseProps = PropsWithChildren<
  Omit<MotionBoxProps, "highlight" | "children">
>;

/**
 * Canonical GlowPulse wrapper.
 *
 * Purpose:
 * - Provide subtle ongoing emphasis for KPI/status surfaces
 * - Keep highlight motion centralized and reduced-motion aware
 */
export function GlowPulse({
  children,
  ...props
}: GlowPulseProps): JSX.Element {
  return (
    <MotionBox highlight="glowPulse" {...props}>
      {children}
    </MotionBox>
  );
}