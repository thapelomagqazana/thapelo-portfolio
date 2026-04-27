import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SkillCapabilityGrid } from "./SkillCapabilityGrid";

describe("SkillCapabilityGrid", () => {
  it("renders capability groups instead of a generic tag cloud", () => {
    render(
      <SkillCapabilityGrid
        groups={[
          {
            label: "Quality Engineering",
            items: ["Test Analysis", "Defect Reporting", "Manual Testing"],
            context:
              "Used to validate system behavior and improve release confidence.",
          },
        ]}
      />,
    );

    expect(screen.getByText("Quality Engineering")).toBeInTheDocument();
    expect(
      screen.getByText("Test Analysis • Defect Reporting • Manual Testing"),
    ).toBeInTheDocument();
    expect(screen.getByText(/validate system behavior/i)).toBeInTheDocument();
  });

  it("does not render incomplete groups", () => {
    const { container } = render(
      <SkillCapabilityGrid
        groups={[
          { label: "", items: ["React", "TypeScript"] },
          { label: "Too Small", items: ["React"] },
        ]}
      />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("renders a maximum of five capability groups", () => {
    render(
      <SkillCapabilityGrid
        groups={[
          { label: "One", items: ["A", "B"] },
          { label: "Two", items: ["A", "B"] },
          { label: "Three", items: ["A", "B"] },
          { label: "Four", items: ["A", "B"] },
          { label: "Five", items: ["A", "B"] },
          { label: "Six", items: ["A", "B"] },
        ]}
      />,
    );

    expect(screen.getByText("One")).toBeInTheDocument();
    expect(screen.getByText("Five")).toBeInTheDocument();
    expect(screen.queryByText("Six")).not.toBeInTheDocument();
  });
});