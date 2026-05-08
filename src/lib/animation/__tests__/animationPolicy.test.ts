import { describe, expect, it } from "vitest";
import {
  APPROVED_ANIMATION_ZONES,
  FORBIDDEN_ANIMATION_PROPERTIES,
} from "../animationPolicy";

describe("animation governance policy", () => {
  it("maps every approved animation zone to a component and purpose", () => {
    for (const zone of APPROVED_ANIMATION_ZONES) {
      expect(zone.id).toBeTruthy();
      expect(zone.component).toBeTruthy();
      expect(zone.purpose).toBeTruthy();
    }
  });

  it("allows only opacity and transform in approved animation zones", () => {
    for (const zone of APPROVED_ANIMATION_ZONES) {
      expect(zone.allowedProperties).toEqual(["opacity", "transform"]);
    }
  });

  it("does not allow layout-affecting animation properties", () => {
    expect(FORBIDDEN_ANIMATION_PROPERTIES).toContain("width");
    expect(FORBIDDEN_ANIMATION_PROPERTIES).toContain("height");
    expect(FORBIDDEN_ANIMATION_PROPERTIES).toContain("top");
    expect(FORBIDDEN_ANIMATION_PROPERTIES).toContain("left");
  });

  it("keeps transition durations bounded", () => {
    for (const zone of APPROVED_ANIMATION_ZONES) {
      expect(zone.maxDurationMs).toBeLessThanOrEqual(2000);
    }
  });
});