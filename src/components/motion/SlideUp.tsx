import type { JSX, PropsWithChildren } from "react";

import { MotionBox, type MotionBoxProps } from "./MotionBox";

/**
 * SlideUp wrapper props.
 */
export type SlideUpProps = PropsWithChildren<
  Omit<MotionBoxProps, "entrance" | "highlight" | "children">
>;

/**
 * Canonical SlideUp wrapper.
 *
 * Purpose:
 * - Provide a bounded vertical entrance motion helper
 * - Standardize subtle entrance motion across the app
 */
export function SlideUp({ children, ...props }: SlideUpProps): JSX.Element {
  return (
    <MotionBox entrance="slideUp" {...props}>
      {children}
    </MotionBox>
  );
}