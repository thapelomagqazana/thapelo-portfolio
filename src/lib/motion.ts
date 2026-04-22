/**
 * Shared motion utility helpers.
 *
 * Purpose:
 * - Keep motion class selection explicit and reusable
 * - Avoid scattering raw motion class strings through components
 */

/**
 * Returns a safe hero entry animation class.
 *
 * Usage:
 * - Apply to hero sections or panels that should fade in subtly
 * - Do not use on elements whose visibility is required before animation
 */
export function heroFadeUpClass(): string {
  return "hero-fade-up";
}

/**
 * Returns the standard panel sweep class for telemetry-style surfaces.
 */
export function heroPanelSweepClass(): string {
  return "hero-panel-sweep";
}

/**
 * Returns the standard live-status pulse class.
 */
export function heroStatusPulseClass(): string {
  return "hero-status-pulse";
}