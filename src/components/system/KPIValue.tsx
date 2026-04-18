import type { HTMLAttributes, ReactNode, JSX } from "react";

import { classNames } from "../../lib/classNames";
import { kpiValueVariants } from "../../lib/systemVariants";

/**
 * Supported semantic tone variants for KPIValue.
 */
export type KPIValueTone = keyof typeof kpiValueVariants;

/**
 * Props for the KPIValue primitive.
 *
 * Responsibilities:
 * - Display a key metric or summary value
 * - Optionally show a supporting label
 * - Remain a bounded display primitive, not a chart or dashboard widget
 */
export interface KPIValueProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Primary metric value.
   *
   * Examples:
   * - 92%
   * - 4 Modules
   * - Approved
   */
  value: ReactNode;

  /**
   * Optional supporting label for context.
   */
  label?: ReactNode;

  /**
   * Optional semantic tone.
   *
   * Defaults to "neutral".
   */
  tone?: KPIValueTone;
}

/**
 * Canonical KPIValue primitive.
 *
 * Accessibility notes:
 * - Keeps the label and value in normal readable content flow
 * - Avoids color-only meaning by preserving readable text content
 */
export function KPIValue({
  value,
  label,
  tone = "neutral",
  className,
  ...props
}: KPIValueProps): JSX.Element {
  return (
    <div
      className={classNames(
        "flex flex-col gap-1 rounded-[var(--radius-panel-lg)] border border-border-subtle bg-bg-800/80 p-4",
        className,
      )}
      {...props}
    >
      {label ? (
        <span className="type-label text-text-muted">{label}</span>
      ) : null}

      <span className={classNames("type-h2", kpiValueVariants[tone])}>
        {value}
      </span>
    </div>
  );
}