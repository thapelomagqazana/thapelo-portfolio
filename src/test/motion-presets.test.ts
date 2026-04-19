import {
  createFadeInVariants,
  createGlowPulseAnimation,
  createSlideUpVariants,
} from "../motion/presets";

/**
 * Motion preset tests.
 *
 * These tests validate:
 * - bounded preset structure
 * - reduced-motion fallback behavior
 * - stable contract shape for reusable helpers
 */
describe("motion presets", () => {
  it("creates fadeIn variants", () => {
    const variants = createFadeInVariants(false);

    expect(variants.initial).toEqual({ opacity: 0 });
    expect(variants.animate).toBeDefined();
  });

  it("creates slideUp variants with movement when reduced motion is off", () => {
    const variants = createSlideUpVariants(false);

    expect(variants.initial).toMatchObject({
      opacity: 0,
      y: 16,
    });
  });

  it("removes movement for slideUp when reduced motion is on", () => {
    const variants = createSlideUpVariants(true);

    expect(variants.initial).toMatchObject({
      opacity: 0,
      y: 0,
    });
  });

  it("disables pulsing scale when reduced motion is on", () => {
    const animation = createGlowPulseAnimation(true);

    expect(animation.scale).toBe(1);
  });
});