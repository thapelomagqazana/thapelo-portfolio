import { render, screen, within } from "@testing-library/react";
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

 it("renders current engineering value signals for fast scanning", () => {
    render(<AboutMissionProfile />);

    const signals = screen.getByRole("region", {
      name: /current engineering value signals/i,
    });

    expect(within(signals).getByText(/systems thinking/i)).toBeInTheDocument();
    expect(within(signals).getByText(/software quality/i)).toBeInTheDocument();
    expect(within(signals).getByText(/reliability mindset/i)).toBeInTheDocument();
    expect(within(signals).getByText(/release confidence/i)).toBeInTheDocument();
  });

  it("renders a structured engineering capability panel", () => {
    render(<AboutMissionProfile />);

    expect(
      screen.getByRole("complementary", {
        name: /engineering capability panel/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders at least two meaningful capability groups", () => {
    render(<AboutMissionProfile />);

    const panel = screen.getByRole("complementary", {
      name: /engineering capability panel/i,
    });

    expect(
      within(panel).getByRole("heading", {
        level: 3,
        name: /systems thinking/i,
      }),
    ).toBeInTheDocument();

    expect(
      within(panel).getByRole("heading", {
        level: 3,
        name: /software quality/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders between six and ten capability items", () => {
    const totalCapabilities = ABOUT_MISSION_PROFILE_CONTENT.capabilityGroups
      .flatMap((group) => group.items)
      .length;

    expect(totalCapabilities).toBeGreaterThanOrEqual(6);
    expect(totalCapabilities).toBeLessThanOrEqual(10);
  });

  it("reinforces at least three positioning-aligned capabilities", () => {
    const allLabels = ABOUT_MISSION_PROFILE_CONTENT.capabilityGroups
      .flatMap((group) => group.items)
      .map((item) => item.label.toLowerCase());

    const matchedThemes = [
      allLabels.some((label) => label.includes("end-to-end") || label.includes("dependency")),
      allLabels.some((label) => label.includes("test") || label.includes("regression")),
      allLabels.some((label) => label.includes("release") || label.includes("validation")),
    ].filter(Boolean);

    expect(matchedThemes.length).toBeGreaterThanOrEqual(3);
  });

  it("does not read like a raw tool dump", () => {
    const forbiddenFlatList = [
      "react",
      "vite",
      "docker",
      "git",
      "typescript",
    ];

    const titlesAndLabels = [
      ...ABOUT_MISSION_PROFILE_CONTENT.capabilityGroups.map((group) => group.title.toLowerCase()),
      ...ABOUT_MISSION_PROFILE_CONTENT.capabilityGroups.flatMap((group) =>
        group.items.map((item) => item.label.toLowerCase()),
      ),
    ];

    const directMatches = forbiddenFlatList.filter((tool) =>
      titlesAndLabels.includes(tool),
    );

    expect(directMatches).toHaveLength(0);
  });
});