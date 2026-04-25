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

  it("renders BrikByteOS as the first flagship module", () => {
    render(<ActiveModulesSection />);

    const modules = screen.getAllByRole("article");

    expect(modules[0]).toHaveAttribute("id", "brikbyteos");
    expect(modules[0]).toHaveAttribute("data-module-variant", "flagship");
    expect(within(modules[0]).getByText(/flagship system/i)).toBeInTheDocument();
  });

  it("uses flagship-specific BrikByteOS action priority", () => {
    render(<ActiveModulesSection />);

    const brikbyteos = screen.getByRole("article", {
        name: /brikbyteos/i,
    });

    expect(
        within(brikbyteos).getByRole("link", { name: /view brikbyteos/i }),
    ).toBeInTheDocument();

    expect(
        within(brikbyteos).getByRole("link", { name: /inspect system/i }),
    ).toBeInTheDocument();
  });

  it("allows flagship modules to carry deeper capability breadth", () => {
    const flagship = PROJECT_MODULES.find(
        (module) => module.variant === "flagship",
    );

    expect(flagship).toBeDefined();
    expect(flagship?.capabilities.length).toBeGreaterThanOrEqual(4);
    expect(flagship?.capabilities.length).toBeLessThanOrEqual(6);
  });

  it("keeps BrikByteOS purpose specific and direction-setting", () => {
    const brikbyteos = PROJECT_MODULES.find((module) => module.id === "brikbyteos");

    expect(brikbyteos?.purpose.toLowerCase()).toContain("release intelligence");
    expect(brikbyteos?.purpose.toLowerCase()).toContain("safe to ship");
  });
});