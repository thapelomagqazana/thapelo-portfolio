import { DEFAULT_CAPABILITIES_PANEL_CONTENT } from "../features/capabilities";

/**
 * Capability panel data contract tests.
 *
 * These tests validate that the canonical capability content remains
 * structured, bounded, and aligned with required categories.
 */
describe("capabilities panel data", () => {
  it("includes all required capability categories", () => {
    expect(DEFAULT_CAPABILITIES_PANEL_CONTENT.items.map((item) => item.title)).toEqual(
      expect.arrayContaining(["QA", "DevOps", "Frontend", "Systems thinking"]),
    );
  });

  it("includes summaries for all capability items", () => {
    DEFAULT_CAPABILITIES_PANEL_CONTENT.items.forEach((item) => {
      expect(item.summary).toBeTruthy();
    });
  });

  it("includes a panel title", () => {
    expect(DEFAULT_CAPABILITIES_PANEL_CONTENT.title).toBe("Capabilities");
  });
});