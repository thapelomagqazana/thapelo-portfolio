import type { HTMLAttributes, JSX } from "react";

import { classNames } from "../../lib/classNames";
import { containerVariants } from "../../lib/layoutVariants";

/**
 * Supported width variants for the Container primitive.
 */
export type ContainerWidth = keyof typeof containerVariants.width;

/**
 * Supported horizontal gutter variants for the Container primitive.
 */
export type ContainerGutter = keyof typeof containerVariants.gutter;

/**
 * Props for the Container primitive.
 *
 * Responsibilities:
 * - Constrain content width
 * - Center content horizontally
 * - Provide canonical page gutters
 *
 * Design rules:
 * - Container is structural only
 * - Container must not impose semantic meaning
 * - Container must not encode feature-specific layout behavior
 */
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Maximum width preset for the container.
   *
   * Defaults to "standard".
   */
  width?: ContainerWidth;

  /**
   * Horizontal gutter preset.
   *
   * Defaults to "page".
   */
  gutter?: ContainerGutter;
}

/**
 * Canonical Container primitive.
 *
 * Purpose:
 * - Provide a reusable width-constraining wrapper
 * - Standardize page alignment and gutters across the application
 *
 * Notes:
 * - Renders a structural <div> only
 * - Can be nested if a later use case truly requires it,
 *   but typical page usage should prefer a single outer container
 */
export function Container({
  width = "standard",
  gutter = "page",
  className,
  ...props
}: ContainerProps): JSX.Element {
  return (
    <div
      className={classNames(
        "mx-auto w-full",
        containerVariants.width[width],
        containerVariants.gutter[gutter],
        className,
      )}
      {...props}
    />
  );
}