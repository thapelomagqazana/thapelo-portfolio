import type { JSX, PropsWithChildren } from "react";

import { MotionBox, type MotionBoxProps } from "./MotionBox";

/**
 * FadeIn wrapper props.
 *
 * Purpose:
 * - Reuse MotionBox behavior
 * - Remove internal motion-control props that callers must not set directly
 * - Reintroduce `children` in a single, explicit, conflict-free way
 */
export type FadeInProps = PropsWithChildren<
  Omit<MotionBoxProps, "entrance" | "highlight" | "children">
>;

/**
 * Canonical FadeIn wrapper.
 *
 * Purpose:
 * - Provide a declarative opacity-only entrance helper
 * - Keep consuming code expressive and consistent
 */
export function FadeIn({ children, ...props }: FadeInProps): JSX.Element {
  return (
    <MotionBox entrance="fadeIn" {...props}>
      {children}
    </MotionBox>
  );
}