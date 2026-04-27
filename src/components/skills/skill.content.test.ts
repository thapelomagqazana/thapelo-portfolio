import { describe, expect, it } from "vitest";

import { SKILL_CAPABILITY_PANELS } from "./skill.content";

describe("SKILL_CAPABILITIES", () => {
  it("contains 3 to 5 capability groups", () => {
    expect(SKILL_CAPABILITY_PANELS.length).toBeGreaterThanOrEqual(3);
    expect(SKILL_CAPABILITY_PANELS.length).toBeLessThanOrEqual(5);
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

    expect(labels).toContain("Frontend Engineering");
    expect(labels).toContain("Quality Engineering");
    expect(labels).toContain("Systems Thinking");
    expect(labels).toContain("DevOps Foundations");
  });
});