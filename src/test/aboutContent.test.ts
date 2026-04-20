import { DEFAULT_ABOUT_SECTION_CONTENT } from "../features/about";

/**
 * About content contract tests.
 *
 * These tests validate that the canonical About layout content remains
 * structurally usable by the layout shell.
 */
describe("about section content", () => {
  it("includes story region content", () => {
    expect(DEFAULT_ABOUT_SECTION_CONTENT.story.title).toBeTruthy();
    expect(DEFAULT_ABOUT_SECTION_CONTENT.story.paragraphs.length).toBeGreaterThan(0);
  });

  it("includes capabilities region content", () => {
    expect(DEFAULT_ABOUT_SECTION_CONTENT.capabilities.title).toBeTruthy();
    expect(DEFAULT_ABOUT_SECTION_CONTENT.capabilities.items.length).toBeGreaterThan(0);
  });

  it("includes the required default capability categories", () => {
    expect(DEFAULT_ABOUT_SECTION_CONTENT.capabilities.items).toEqual(
      expect.arrayContaining(["QA", "DevOps", "Frontend", "Systems thinking"]),
    );
  });
});