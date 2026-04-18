import type { ElementType, HTMLAttributes, ReactNode, JSX } from "react";

import { classNames } from "../../lib/classNames";
import { sectionVariants } from "../../lib/layoutVariants";

/**
 * Supported spacing presets for the Section primitive.
 */
export type SectionSpace = keyof typeof sectionVariants.space;

/**
 * Supported surface presets for the Section primitive.
 */
export type SectionSurface = keyof typeof sectionVariants.surface;

/**
 * Props for the Section primitive.
 *
 * Responsibilities:
 * - Define canonical vertical rhythm for major content blocks
 * - Allow controlled semantic rendering
 * - Optionally provide a bounded background surface treatment
 *
 * Design rules:
 * - Section owns vertical spacing, not width constraints
 * - Section should be paired with Container for centered content
 * - Semantic element control must remain bounded and intentional
 */
export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /**
   * Underlying semantic element to render.
   *
   * Defaults to "section".
   */
  as?: ElementType;

  /**
   * Vertical spacing preset.
   *
   * Defaults to "standard".
   */
  space?: SectionSpace;

  /**
   * Optional surface treatment.
   *
   * Defaults to "transparent".
   */
  surface?: SectionSurface;

  /**
   * Child content to render inside the section.
   */
  children: ReactNode;
}

/**
 * Canonical Section primitive.
 *
 * Purpose:
 * - Standardize vertical spacing across major page blocks
 * - Allow semantic section rendering without coupling spacing
 *   to page-specific components
 */
export function Section({
  as: Component = "section",
  space = "standard",
  surface = "transparent",
  className,
  children,
  ...props
}: SectionProps): JSX.Element {
  return (
    <Component
      className={classNames(
        "w-full",
        sectionVariants.space[space],
        sectionVariants.surface[surface],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}