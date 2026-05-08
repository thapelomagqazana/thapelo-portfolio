import { useEffect, useRef } from "react";
import { loadGsapIfAllowed } from "../../lib/animation/gsapLoader";

/**
 * Decorative hero scan layer.
 *
 * Responsibilities:
 * - Add a subtle control-room scanning atmosphere behind hero content
 * - Remain purely decorative and non-interactive
 * - Avoid blocking hero content rendering or LCP
 * - Respect reduced-motion preferences through the GSAP loader boundary
 *
 * Accessibility:
 * - Uses aria-hidden because it communicates no required information
 * - Uses pointer-events-none so it never intercepts interaction
 *
 * Performance:
 * - Uses only opacity and transform animation
 * - Avoids images, canvas, video, filters, and layout-affecting properties
 * - Fails safely if GSAP is unavailable or disabled
 */
export function HeroScanLayer() {
  const scanLineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    async function startScanAnimation() {
      const gsap = await loadGsapIfAllowed();

      if (!gsap || !scanLineRef.current) {
        return;
      }

      const timeline = gsap.timeline({
        repeat: -1,
        defaults: {
          ease: "none",
        },
      });

      timeline.fromTo(
        scanLineRef.current,
        {
          opacity: 0,
          yPercent: -120,
        },
        {
          opacity: 0.16,
          yPercent: 120,
          duration: 4.8,
        },
      );

      timeline.to(scanLineRef.current, {
        opacity: 0,
        duration: 0.4,
      });

      cleanup = () => {
        timeline.kill();
      };
    }

    void startScanAnimation();

    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      data-testid="hero-scan-layer"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(61,220,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(61,220,255,0.045)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div
        ref={scanLineRef}
        className="absolute left-0 top-0 h-28 w-full bg-linear-to-b from-transparent via-accent-cyan/15 to-transparent opacity-0"
        data-testid="hero-scan-line"
      />
    </div>
  );
}