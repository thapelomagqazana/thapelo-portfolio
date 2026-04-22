import type { PropsWithChildren } from "react";
import { classNames } from "../../lib/classNames";
import { heroFadeUpClass } from "../../lib/motion";

/**
 * Props for the HeroSystemMotion wrapper.
 */
export interface HeroSystemMotionProps extends PropsWithChildren {
  /**
   * Optional extra class names for composition.
   */
  readonly className?: string;
}

/**
 * Lightweight hero motion wrapper.
 *
 * Responsibilities:
 * - Apply a restrained fade-up entry effect
 * - Keep motion composition consistent across hero sections
 * - Avoid repeating animation class strings inline
 *
 * Accessibility:
 * - Motion is disabled automatically by reduced-motion CSS
 * - Content remains present immediately in the DOM
 */
export function HeroSystemMotion({
  children,
  className,
}: HeroSystemMotionProps) {
  return (
    <div className={classNames(heroFadeUpClass(), className)}>
      {children}
    </div>
  );
}