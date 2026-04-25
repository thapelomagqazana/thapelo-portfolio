import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it("renders project category filters above the module grid", () => {
    render(<ActiveModulesSection />);

    const filters = screen.getByRole("tablist", {
      name: /project category filters/i,
    });

    expect(within(filters).getByRole("tab", { name: /all/i })).toHaveAttribute(
      "aria-selected",
      "true",
    );

    expect(within(filters).getByRole("tab", { name: /systems/i })).toBeInTheDocument();
    expect(within(filters).getByRole("tab", { name: /quality/i })).toBeInTheDocument();
    expect(within(filters).getByRole("tab", { name: /frontend/i })).toBeInTheDocument();
  });

  it("assigns every module at least one and at most two categories", () => {
    for (const module of PROJECT_MODULES) {
      expect(module.categories.length).toBeGreaterThanOrEqual(1);
      expect(module.categories.length).toBeLessThanOrEqual(2);
    }
  });

  it("filters visible modules by selected category", async () => {
    const user = userEvent.setup();

    render(<ActiveModulesSection />);

    await user.click(screen.getByRole("tab", { name: /frontend/i }));

    expect(
      screen.getByRole("article", { name: /portfolio control room/i }),
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("article", { name: /brikbyteos/i }),
    ).not.toBeInTheDocument();
  });

  it("all filter resets visible modules", async () => {
    const user = userEvent.setup();

    render(<ActiveModulesSection />);

    await user.click(screen.getByRole("tab", { name: /frontend/i }));
    await user.click(screen.getByRole("tab", { name: /all/i }));

    for (const module of PROJECT_MODULES) {
      expect(
        screen.getByRole("article", { name: new RegExp(module.title, "i") }),
      ).toBeInTheDocument();
    }
  });

  it("renders category chips on every visible module", () => {
    render(<ActiveModulesSection />);

    for (const module of PROJECT_MODULES) {
      const card = screen.getByRole("article", {
        name: new RegExp(module.title, "i"),
      });

      expect(
        within(card).getByLabelText(/project categories/i),
      ).toBeInTheDocument();
    }
  });
});