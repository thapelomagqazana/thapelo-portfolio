import type { HTMLAttributes, JSX } from "react";

import { classNames } from "../../lib/classNames";
import { cardVariants } from "../../lib/uiVariants";

/**
 * Supported visual variants for the Card primitive.
 */
export type CardVariant = keyof typeof cardVariants.variant;

/**
 * Props for the Card primitive.
 *
 * Responsibilities:
 * - Group related informational content
 * - Provide a reusable surface with bounded elevation treatment
 * - Remain structural and non-semantic by default
 */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Surface treatment for the card.
   *
   * Defaults to "default".
   */
  variant?: CardVariant;
}

/**
 * Canonical Card primitive.
 *
 * Design intent:
 * - Lower-emphasis grouped content container
 * - Distinct from Panel, which is for higher-emphasis system surfaces
 */
export function Card({
  className,
  variant = "default",
  ...props
}: CardProps): JSX.Element {
  return (
    <div
      className={classNames(
        "rounded-[var(--radius-panel-lg)] border p-5",
        cardVariants.variant[variant],
        className,
      )}
      {...props}
    />
  );
}