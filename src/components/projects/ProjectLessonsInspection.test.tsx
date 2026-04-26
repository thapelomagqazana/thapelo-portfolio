import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProjectLessonsInspection } from "./ProjectLessonsInspection";

describe("ProjectLessonsInspection", () => {
  it("does not render when no lessons are provided", () => {
    const { container } = render(<ProjectLessonsInspection />);

    expect(container).toBeEmptyDOMElement();
  });

  it("renders practical project lessons", () => {
    render(
      <ProjectLessonsInspection
        lessons={[
          {
            title: "Determinism beats flexibility early",
            insight:
              "Release tooling is harder to trust when outputs are unpredictable.",
            futureUse:
              "Future adapters should preserve stable contracts before expanding flexibility.",
          },
        ]}
      />,
    );

    expect(screen.getByText("Lessons")).toBeInTheDocument();
    expect(
      screen.getByText("Determinism beats flexibility early"),
    ).toBeInTheDocument();
    expect(screen.getByText(/Release tooling is harder to trust/i)).toBeInTheDocument();
    expect(screen.getByText(/Future adapters should preserve/i)).toBeInTheDocument();
  });

  it("renders a maximum of three lessons", () => {
    render(
      <ProjectLessonsInspection
        lessons={[
          { title: "One", insight: "Insight one.", futureUse: "Use one." },
          { title: "Two", insight: "Insight two.", futureUse: "Use two." },
          { title: "Three", insight: "Insight three.", futureUse: "Use three." },
          { title: "Four", insight: "Insight four.", futureUse: "Use four." },
        ]}
      />,
    );

    expect(screen.getByText("One")).toBeInTheDocument();
    expect(screen.getByText("Three")).toBeInTheDocument();
    expect(screen.queryByText("Four")).not.toBeInTheDocument();
  });
});