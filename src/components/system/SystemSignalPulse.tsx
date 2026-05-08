import { useEffect, useRef } from "react";
import { loadGsapIfAllowed } from "../../lib/animation/gsapLoader";
import { classNames } from "../../lib/classNames";

export interface SystemSignalPulseProps {
  /**
   * Visual tone class applied to the core status dot.
   *
   * Purpose:
   * - Keep color ownership in the caller/design system
   * - Avoid hard-coding dashboard status colors inside animation logic
   */
  readonly indicatorClassName: string;

  /**
   * Optional className for layout extension.
   */
  readonly className?: string;
}

/**
 * Decorative pulse for small system-status indicators.
 *
 * Responsibilities:
 * - Make status indicators feel subtly alive
 * - Animate only a small decorative ring, never text or layout containers
 * - Respect reduced-motion preferences through the GSAP loader boundary
 * - Keep the static status dot visible even when animation is disabled
 *
 * Accessibility:
 * - Entire pulse is decorative and aria-hidden
 * - Status meaning must be communicated by surrounding text labels
 *
 * Performance:
 * - Uses only opacity and transform
 * - Does not animate dimensions, layout, or metric values
 */
export function SystemSignalPulse({
  indicatorClassName,
  className,
}: SystemSignalPulseProps) {
  const pulseRingRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    async function startPulseAnimation() {
      const gsap = await loadGsapIfAllowed();

      if (!gsap || !pulseRingRef.current) {
        return;
      }

      const timeline = gsap.timeline({
        repeat: -1,
        defaults: {
          ease: "power1.out",
        },
      });

      timeline.fromTo(
        pulseRingRef.current,
        {
          opacity: 0.15,
          scale: 1,
        },
        {
          opacity: 0.42,
          scale: 1.35,
          duration: 1.8,
        },
      );

      timeline.to(pulseRingRef.current, {
        opacity: 0.15,
        scale: 1,
        duration: 1.2,
      });

      cleanup = () => {
        timeline.kill();
      };
    }

    void startPulseAnimation();

    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <span
      aria-hidden="true"
      className={classNames("relative inline-flex h-2 w-2 items-center justify-center", className)}
      data-testid="system-signal-pulse"
    >
      <span
        ref={pulseRingRef}
        className={classNames(
          "absolute h-2 w-2 rounded-full opacity-20",
          indicatorClassName,
        )}
        data-testid="system-signal-pulse-ring"
      />

      <span
        className={classNames("relative h-2 w-2 rounded-full", indicatorClassName)}
        data-testid="system-signal-pulse-dot"
      />
    </span>
  );
}