import { useEffect, useState } from "react";

/**
 * Browser media query used for motion accessibility.
 */
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Safely checks reduced-motion preference outside React.
 *
 * Purpose:
 * - Allow animation utilities to avoid starting GSAP timelines
 * - Stay safe in tests and non-browser runtimes
 */
export function prefersReducedMotion(): boolean {
  const media = globalThis.matchMedia?.(REDUCED_MOTION_QUERY);

  return media?.matches ?? false;
}

/**
 * React hook for reduced-motion preference.
 *
 * Responsibilities:
 * - Detect user motion preference
 * - Update if the preference changes
 * - Provide one consistent guard for animation components
 */
export function usePrefersReducedMotion(): boolean {
  const [isReducedMotion, setIsReducedMotion] = useState(prefersReducedMotion);

  useEffect(() => {
    const mediaQuery = globalThis.matchMedia?.(REDUCED_MOTION_QUERY);

    if (!mediaQuery) {
      return;
    }

    const handleChange = () => {
      setIsReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener?.("change", handleChange);

    return () => {
      mediaQuery.removeEventListener?.("change", handleChange);
    };
  }, []);

  return isReducedMotion;
}