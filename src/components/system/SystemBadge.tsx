import type { HTMLAttributes, ReactNode, JSX } from "react";

import { classNames } from "../../lib/classNames";
import { systemBadgeVariants } from "../../lib/systemVariants";

/**
 * Supported visual variants for SystemBadge.
 */
export type SystemBadgeVariant = keyof typeof systemBadgeVariants;

/**
 * Props for the SystemBadge primitive.
 *
 * Responsibilities:
 * - Display metadata and category labels
 * - Remain clearly distinct from StatusChip
 * - Stay presentational and non-interactive by default
 */
export interface SystemBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Metadata tone/category variant.
   *
   * Defaults to "neutral".
   */
  variant?: SystemBadgeVariant;

  /**
   * Rendered badge content.
   */
  children: ReactNode;
}

/**
 * Canonical SystemBadge primitive.
 *
 * Design intent:
 * - Used for labels such as:
 *   - MODULE
 *   - ENVIRONMENT
 *   - MODE
 *   - CATEGORY
 * - Not used for normalized PASS/WARN/FAIL state
 */
export function SystemBadge({
  variant = "neutral",
  className,
  children,
  ...props
}: SystemBadgeProps): JSX.Element {
  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-full border px-3 py-1",
        "font-mono text-xs font-medium uppercase tracking-[0.08em]",
        systemBadgeVariants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}