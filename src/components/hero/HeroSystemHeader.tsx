import type { HeroStatus } from "./hero.types";
import { SystemStatus } from "./SystemStatus";

/**
 * Props for the HeroSystemHeader component.
 */
export interface HeroSystemHeaderProps {
  /**
   * Current hero status.
   */
  readonly status: HeroStatus;

  /**
   * Current hero operating mode label.
   */
  readonly modeLabel: string;

  /**
   * Optional supporting system microcopy.
   */
  readonly description?: string;
}

/**
 * Header block for hero system signals.
 *
 * Responsibilities:
 * - Keep hero status rendering isolated from the larger hero composition
 * - Provide a clean extension point for future system-state transitions
 * - Preserve a simple top-level `HeroSystem` layout
 */
export function HeroSystemHeader({
  status,
  modeLabel,
  description,
}: HeroSystemHeaderProps) {
  return (
    <SystemStatus
      status={status}
      modeLabel={modeLabel}
      description={description}
    />
  );
}