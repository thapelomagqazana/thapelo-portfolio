import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ExperienceOutcomeList } from "./ExperienceOutcomeList";

describe("ExperienceOutcomeList", () => {
  it("renders outcome-driven statements", () => {
    render(
      <ExperienceOutcomeList
        role="Test Analyst"
        outcomes={[
          {
            statement:
              "Identified system failures before production to improve release confidence.",
          },
        ]}
      />,
    );

    expect(screen.getByText("Outcome Signals")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Identified system failures before production to improve release confidence.",
      ),
    ).toBeInTheDocument();
  });

  it("renders optional supporting context", () => {
    render(
      <ExperienceOutcomeList
        role="Test Analyst"
        outcomes={[
          {
            statement:
              "Improved defect visibility across QA workflows through structured reporting.",
            context:
              "Applied across enterprise workflows with developers and stakeholders.",
          },
        ]}
      />,
    );

    expect(
      screen.getByText(
        "Applied across enterprise workflows with developers and stakeholders.",
      ),
    ).toBeInTheDocument();
  });

  it("renders a maximum of four outcomes", () => {
    render(
      <ExperienceOutcomeList
        role="Software Tester"
        outcomes={[
          { statement: "One" },
          { statement: "Two" },
          { statement: "Three" },
          { statement: "Four" },
          { statement: "Five" },
        ]}
      />,
    );

    expect(screen.getByText("Four")).toBeInTheDocument();
    expect(screen.queryByText("Five")).not.toBeInTheDocument();
  });
});