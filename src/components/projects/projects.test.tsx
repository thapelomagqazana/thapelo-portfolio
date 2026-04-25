import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ActiveModulesSection } from "../sections/ActiveModulesSection";
import { PROJECT_MODULES } from "./project.content";

describe("ActiveModulesSection", () => {
  it("renders projects as system modules", () => {
    render(<ActiveModulesSection />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /projects presented as operational systems/i,
      }),
    ).toBeInTheDocument();

    for (const module of PROJECT_MODULES) {
      expect(
        screen.getByRole("article", { name: new RegExp(module.title, "i") }),
      ).toBeInTheDocument();
    }
  });

  it("keeps operational signals meaningful and bounded", () => {
    for (const module of PROJECT_MODULES) {
      expect(module.signals.length).toBeGreaterThanOrEqual(2);
      expect(module.signals.length).toBeLessThanOrEqual(3);
    }
  });

  it("keeps capability snapshots short and domain-based", () => {
    for (const module of PROJECT_MODULES) {
      expect(module.capabilities.length).toBeGreaterThanOrEqual(3);
      expect(module.capabilities.length).toBeLessThanOrEqual(5);
    }
  });

  it("does not rely on raw tech stack as the primary capability list", () => {
    const forbiddenToolOnlyLabels = ["react", "vite", "docker", "git", "typescript"];

    const capabilityLabels = PROJECT_MODULES.flatMap((module) =>
      module.capabilities.map((capability) => capability.toLowerCase()),
    );

    for (const forbidden of forbiddenToolOnlyLabels) {
      expect(capabilityLabels).not.toContain(forbidden);
    }
  });
});