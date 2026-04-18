import type { HTMLAttributes, JSX } from "react";

import { classNames } from "../../lib/classNames";
import {
  type CanonicalStatus,
  getStatusPresentation,
} from "../../lib/status";
import { statusChipSizeVariants, statusToneVariants } from "../../lib/systemVariants";

/**
 * Supported size variants for StatusChip.
 */
export type StatusChipSize = keyof typeof statusChipSizeVariants;

/**
 * Props for the StatusChip primitive.
 *
 * Responsibilities:
 * - Display a normalized operational state
 * - Always show a text label, not color alone
 * - Remain presentational and non-interactive by default
 */
export interface StatusChipProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Canonical required status value.
   */
  status: CanonicalStatus;

  /**
   * Optional compact size preset.
   *
   * Defaults to "md".
   */
  size?: StatusChipSize;

  /**
   * Optional value shown after the status label.
   *
   * Example:
   * - PASS 98%
   * - WARN latency
   */
  value?: string;
}

/**
 * Canonical StatusChip component.
 *
 * Accessibility notes:
 * - Uses text labels so state is not conveyed by color alone
 * - Renders as a non-interactive <span> by default
 */
export function StatusChip({
  status,
  size = "md",
  value,
  className,
  ...props
}: StatusChipProps): JSX.Element {
  const presentation = getStatusPresentation(status);

  return (
    <span
      className={classNames(
        "inline-flex items-center gap-2 rounded-full border font-mono font-medium uppercase tracking-[0.08em]",
        statusToneVariants[presentation.tone],
        statusChipSizeVariants[size],
        className,
      )}
      aria-label={value ? `${presentation.label} ${value}` : presentation.label}
      {...props}
    >
      <span
        aria-hidden="true"
        className="inline-block h-2 w-2 rounded-full bg-current"
      />
      <span>{presentation.label}</span>
      {value ? <span className="text-current/90">{value}</span> : null}
    </span>
  );
}