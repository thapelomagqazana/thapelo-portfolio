import type { HTMLAttributes, JSX } from "react";

import { classNames } from "../../lib/classNames";
import { badgeVariants } from "../../lib/uiVariants";

/**
 * Supported visual variants for the Badge primitive.
 */
export type BadgeVariant = keyof typeof badgeVariants.variant;

/**
 * Props for the Badge primitive.
 *
 * Responsibilities:
 * - Display compact metadata or categorical information
 * - Remain presentational and non-interactive by default
 * - Support bounded semantic tone variants
 */
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Visual tone for the badge.
   *
   * Defaults to "neutral".
   */
  variant?: BadgeVariant;
}

/**
 * Canonical Badge primitive.
 *
 * Accessibility notes:
 * - Renders as a non-interactive <span> by default
 * - Should not be used as a button or link in this task
 */
export function Badge({
  className,
  variant = "neutral",
  ...props
}: BadgeProps): JSX.Element {
  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-full border px-3 py-1",
        "font-mono text-xs font-medium uppercase tracking-[0.08em]",
        badgeVariants.variant[variant],
        className,
      )}
      {...props}
    />
  );
}