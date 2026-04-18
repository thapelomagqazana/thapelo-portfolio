import type { HTMLAttributes, JSX } from "react";

import { classNames } from "../../lib/classNames";
import { panelVariants } from "../../lib/uiVariants";

/**
 * Supported visual variants for the Panel primitive.
 */
export type PanelVariant = keyof typeof panelVariants.variant;

/**
 * Props for the Panel primitive.
 *
 * Responsibilities:
 * - Render major elevated interface surfaces
 * - Support emphasis for core system sections
 * - Stay structural by default
 */
export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Surface emphasis preset.
   *
   * Defaults to "default".
   */
  variant?: PanelVariant;
}

/**
 * Canonical Panel primitive.
 *
 * Design intent:
 * - Higher-emphasis than Card
 * - Suitable for hero panels, overlays, featured surfaces, and command areas
 */
export function Panel({
  className,
  variant = "default",
  ...props
}: PanelProps): JSX.Element {
  return (
    <div
      className={classNames(
        "rounded-[var(--radius-panel-xl)] border p-6 md:p-8",
        panelVariants.variant[variant],
        className,
      )}
      {...props}
    />
  );
}