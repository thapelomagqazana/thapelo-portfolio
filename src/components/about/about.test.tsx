import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AboutMissionProfile } from "./AboutMissionProfile";
import { ABOUT_MISSION_PROFILE_CONTENT } from "./about.content";

/**
 * Count words in a string using simple whitespace tokenization.
 *
 * Purpose:
 * - Keep the About story inside the approved brevity envelope
 * - Provide a stable unit-test guard against copy drift
 */
function countWords(value: string): number {
  return value.trim().split(/\s+/u).length;
}

describe("AboutMissionProfile", () => {
  it("renders the section heading", () => {
    render(<AboutMissionProfile />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /from construction to software, with systems thinking intact/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders concise story content", () => {
    render(<AboutMissionProfile />);

    expect(
      screen.getByText(/my background began in construction studies/i),
    ).toBeInTheDocument();
  });

  it("includes construction background, software transition, and current value", () => {
    render(<AboutMissionProfile />);

    const story = ABOUT_MISSION_PROFILE_CONTENT.story.toLowerCase();

    expect(story).toContain("construction");
    expect(story).toContain("software");
    expect(story).toContain("quality");
  });

  it("keeps the story within the approved word-count limit", () => {
    const wordCount = countWords(ABOUT_MISSION_PROFILE_CONTENT.story);

    expect(
        wordCount,
        `Expected About story word count to be between 90 and 130, received ${wordCount}.`,
    ).toBeGreaterThanOrEqual(90);

    expect(
        wordCount,
        `Expected About story word count to be between 90 and 130, received ${wordCount}.`,
    ).toBeLessThanOrEqual(130);
 });
});