import { classNames } from "../../lib/classNames";

/**
 * Props for the ActiveSectionIndicator component.
 */
export interface ActiveSectionIndicatorProps {
  /**
   * Whether the related nav item is currently active.
   */
  readonly isActive: boolean;

  /**
   * Optional extra classes for composition.
   */
  readonly className?: string;
}

/**
 * Structural active-state indicator for navigation items.
 *
 * Responsibilities:
 * - Provide a non-color-only cue for the active section
 * - Reinforce current location with a clear, persistent marker
 * - Stay visually noticeable without overpowering the nav layout
 *
 * Accessibility:
 * - Exists as a structural cue so active state is not communicated by color alone
 */
export function ActiveSectionIndicator({
  isActive,
  className,
}: ActiveSectionIndicatorProps) {
  return (
    <span
      aria-hidden="true"
      className={classNames(
        "inline-block h-2 w-2 rounded-full transition-[background-color,transform,opacity] duration-200 ease-out",
        isActive
          ? "bg-accent-cyan opacity-100 scale-100"
          : "bg-transparent opacity-0 scale-75",
        className,
      )}
    />
  );
}