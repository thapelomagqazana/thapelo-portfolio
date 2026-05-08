import { describe, expect, it } from "vitest";

import { SKILL_CAPABILITY_PANELS } from "./skill.content";

describe("SKILL_CAPABILITIES", () => {
  it("contains 3 to 6 capability groups", () => {
    expect(SKILL_CAPABILITY_PANELS.length).toBeGreaterThanOrEqual(3);
    expect(SKILL_CAPABILITY_PANELS.length).toBeLessThanOrEqual(6);
  });

  it("keeps each capability group concise", () => {
    for (const group of SKILL_CAPABILITY_PANELS) {
      expect(group.title.trim().length).toBeGreaterThan(0);
      expect(group.items.length).toBeGreaterThanOrEqual(2);
      expect(group.items.length).toBeLessThanOrEqual(6);
    }
  });

  it("uses meaningful capability labels", () => {
    const labels = SKILL_CAPABILITY_PANELS.map((group) => group.title);

    expect(labels).toContain("Frontend Systems Engineering");
    expect(labels).toContain("Quality & Release Engineering");
    expect(labels).toContain("Systems Engineering");
  });
});