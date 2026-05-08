import { describe, expect, it, vi } from "vitest";
import { prefersReducedMotion } from "../motionPreferences";

describe("prefersReducedMotion", () => {
  it("returns false when matchMedia is unavailable", () => {
    const originalMatchMedia = globalThis.matchMedia;

    Object.defineProperty(globalThis, "matchMedia", {
      configurable: true,
      value: undefined,
    });

    expect(prefersReducedMotion()).toBe(false);

    Object.defineProperty(globalThis, "matchMedia", {
      configurable: true,
      value: originalMatchMedia,
    });
  });

  it("returns true when reduced motion is enabled", () => {
    const originalMatchMedia = globalThis.matchMedia;

    Object.defineProperty(globalThis, "matchMedia", {
      configurable: true,
      value: vi.fn().mockReturnValue({ matches: true }),
    });

    expect(prefersReducedMotion()).toBe(true);

    Object.defineProperty(globalThis, "matchMedia", {
      configurable: true,
      value: originalMatchMedia,
    });
  });
});