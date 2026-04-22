import type { HTMLAttributes } from "react";
import { classNames } from "../../lib/classNames";

/**
 * Reusable control-room surface container.
 *
 * Responsibilities:
 * - Provide the canonical elevated panel treatment for dashboard and terminal UI
 * - Centralize blur, border, radius, and shadow styling
 * - Support extension through className without losing the base system look
 *
 * Motion:
 * - Includes a subtle transform transition for hover-capable surfaces
 * - Keeps movement restrained and performance-friendly
 */
export function Panel({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={classNames(
        "relative overflow-hidden rounded-[var(--radius-panel-xl)] border border-border-subtle bg-bg-850/80 p-5 shadow-[var(--shadow-panel-elevated)] backdrop-blur-md transition-transform duration-200 ease-out",
        className,
      )}
    />
  );
}