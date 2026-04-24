import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AboutMissionProfile } from "./AboutMissionProfile";
import { ABOUT_MISSION_PROFILE_CONTENT } from "./about.content";

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

  it("renders the modular About section heading", () => {
    render(<AboutMissionProfile />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /From construction to software, with systems thinking intact./i,
      }),
    ).toBeInTheDocument();
  });

  it("renders story modules in the required narrative sequence", () => {
    render(<AboutMissionProfile />);

    const list = screen.getByRole("list", {
      name: /mission profile story modules/i,
    });

    expect(
      within(list).getByRole("heading", { name: /origin/i })
    ).toBeInTheDocument();

    expect(
      within(list).getByRole("heading", { name: /transition/i })
    ).toBeInTheDocument();

    expect(
      within(list).getByRole("heading", { name: /current value/i })
    ).toBeInTheDocument();
  });

  it("keeps the module count within the approved range", () => {
    expect(ABOUT_MISSION_PROFILE_CONTENT.storyModules.length).toBeGreaterThanOrEqual(2);
    expect(ABOUT_MISSION_PROFILE_CONTENT.storyModules.length).toBeLessThanOrEqual(4);
  });

  it("keeps every module under the approved word limit", () => {
    for (const module of ABOUT_MISSION_PROFILE_CONTENT.storyModules) {
      expect(
        countWords(module.body),
        `${module.title} exceeds the 60-word module limit.`,
      ).toBeLessThanOrEqual(60);
    }
  });

  it("reinforces reliability, quality, or systems positioning", () => {
    const combinedCopy = ABOUT_MISSION_PROFILE_CONTENT.storyModules
      .map((module) => module.body)
      .join(" ")
      .toLowerCase();

    expect(combinedCopy).toMatch(/quality|reliability|systems|release confidence/);
  });

  it("renders current engineering value signals for fast scanning", () => {
    render(<AboutMissionProfile />);

    const signals = screen.getByRole("region", {
      name: /current engineering value signals/i,
    });

    expect(within(signals).getByText(/release confidence/i)).toBeInTheDocument();
    expect(within(signals).getByText(/reliability focus/i)).toBeInTheDocument();
    expect(within(signals).getByText(/systems thinking/i)).toBeInTheDocument();
  });

  it("renders a structured engineering capability panel", () => {
    render(<AboutMissionProfile />);

    expect(
      screen.getByRole("complementary", {
        name: /engineering capability panel/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders meaningful capability groups", () => {
    render(<AboutMissionProfile />);

    const panel = screen.getByRole("complementary", {
      name: /engineering capability panel/i,
    });

    expect(
      within(panel).getByRole("heading", { name: /systems thinking/i }),
    ).toBeInTheDocument();

    expect(
      within(panel).getByRole("heading", { name: /software quality/i }),
    ).toBeInTheDocument();

    expect(
      within(panel).getByRole("heading", { name: /reliability \/ release/i }),
    ).toBeInTheDocument();
  });
});