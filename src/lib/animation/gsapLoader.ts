import { prefersReducedMotion } from "./motionPreferences";

/**
 * Loaded GSAP instance type.
 *
 * Purpose:
 * - Avoid leaking GSAP imports across the application
 * - Keep advanced animation access controlled by this boundary
 */
export type LoadedGsap = Awaited<typeof import("gsap")>["gsap"];

/**
 * Lazily load GSAP only when animation is allowed.
 *
 * Responsibilities:
 * - Prevent eager GSAP loading during app startup
 * - Respect reduced-motion preferences before loading animation code
 * - Fail safely if GSAP cannot be loaded
 * - Keep vendor dependency isolated to src/lib/animation
 */
export async function loadGsapIfAllowed(): Promise<LoadedGsap | null> {
  if (prefersReducedMotion()) {
    return null;
  }

  try {
    const gsapModule = await import("gsap");

    return gsapModule.gsap;
  } catch {
    return null;
  }
}