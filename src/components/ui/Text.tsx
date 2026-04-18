import type { ElementType, HTMLAttributes, ReactNode, JSX } from "react";

import { classNames } from "../../lib/classNames";
import { textVariants } from "../../lib/uiVariants";

/**
 * Supported text style variants.
 */
export type TextVariant = keyof typeof textVariants.variant;

/**
 * Polymorphic Text props.
 *
 * Responsibilities:
 * - Apply canonical typography styles consistently
 * - Preserve semantic rendering through the `as` prop
 * - Provide bounded typography variants
 *
 * Notes:
 * - This primitive is intentionally small.
 * - It is not a full rich-text system.
 */
export interface TextProps extends HTMLAttributes<HTMLElement> {
  /**
   * Underlying HTML element to render.
   *
   * Examples:
   * - h1
   * - h2
   * - p
   * - span
   *
   * Defaults to "p".
   */
  as?: ElementType;

  /**
   * Canonical typography style variant.
   *
   * Defaults to "body".
   */
  variant?: TextVariant;

  /**
   * Child content to render.
   */
  children: ReactNode;
}

/**
 * Canonical Text primitive.
 *
 * Accessibility notes:
 * - Semantic correctness is controlled by the `as` prop
 * - Visual style and semantic tag are intentionally separable
 * - Callers must still preserve proper heading hierarchy
 */
export function Text({
  as: Component = "p",
  className,
  variant = "body",
  children,
  ...props
}: TextProps): JSX.Element {
  return (
    <Component
      className={classNames(textVariants.variant[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}