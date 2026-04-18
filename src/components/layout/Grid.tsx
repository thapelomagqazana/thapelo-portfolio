import type { HTMLAttributes, JSX } from "react";

import { classNames } from "../../lib/classNames";
import { gridVariants } from "../../lib/layoutVariants";

/**
 * Supported column presets for the Grid primitive.
 */
export type GridColumns = keyof typeof gridVariants.columns;

/**
 * Supported gap presets for the Grid primitive.
 */
export type GridGap = keyof typeof gridVariants.gap;

/**
 * Supported vertical alignment presets for the Grid primitive.
 */
export type GridAlign = keyof typeof gridVariants.align;

/**
 * Props for the Grid primitive.
 *
 * Responsibilities:
 * - Arrange content in a structured column layout
 * - Provide bounded responsive column presets
 * - Provide canonical gap and alignment defaults
 *
 * Design rules:
 * - Grid is structural only
 * - Grid does not imply list semantics
 * - Grid should not encode feature-specific responsive orchestration
 */
export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Responsive column preset.
   *
   * Defaults to 1.
   */
  columns?: GridColumns;

  /**
   * Gap preset between grid items.
   *
   * Defaults to "lg".
   */
  gap?: GridGap;

  /**
   * Cross-axis item alignment.
   *
   * Defaults to "start".
   */
  align?: GridAlign;
}

/**
 * Canonical Grid primitive.
 *
 * Purpose:
 * - Provide a reusable grid abstraction for section composition
 * - Prevent repeated ad hoc grid class definitions across feature modules
 */
export function Grid({
  columns = 1,
  gap = "lg",
  align = "start",
  className,
  ...props
}: GridProps): JSX.Element {
  return (
    <div
      className={classNames(
        "grid",
        gridVariants.columns[columns],
        gridVariants.gap[gap],
        gridVariants.align[align],
        className,
      )}
      {...props}
    />
  );
}