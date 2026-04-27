import { describe, expect, it } from "vitest";

import { loadThemePreference, saveThemePreference } from "./theme.service";

describe("theme.service", () => {
  it("defaults to UI mode when no preference exists", () => {
    localStorage.clear();

    expect(loadThemePreference()).toEqual({
      theme: "dark",
      mode: "UI",
    });
  });

  it("loads a valid terminal preference", () => {
    localStorage.setItem("portfolio-ui-mode", "TERMINAL");

    expect(loadThemePreference()).toEqual({
      theme: "dark",
      mode: "TERMINAL",
    });
  });

  it("falls back to UI mode for invalid values", () => {
    localStorage.setItem("portfolio-ui-mode", "BROKEN");

    expect(loadThemePreference()).toEqual({
      theme: "dark",
      mode: "UI",
    });
  });

  it("saves valid preference mode", () => {
    saveThemePreference({
      theme: "dark",
      mode: "TERMINAL",
    });

    expect(localStorage.getItem("portfolio-ui-mode")).toBe("TERMINAL");
  });
});