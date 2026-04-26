import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { TimelineLogs } from "./TimelineLogs";
import type { ExperienceLogEntry } from "./experience.types";

const entries: readonly ExperienceLogEntry[] = [
  {
    id: "alula-test-analyst",
    role: "Test Analyst",
    company: "Alula Technologies",
    period: "May 2025 — Present",
    location: "Pretoria, South Africa · Hybrid",
    status: "ACTIVE",
    summary:
      "Executed QA strategies across enterprise systems to strengthen release readiness.",
    outcomes: [
      {
        statement: "Identified system failures before production",
        context: "Led testing efforts for new software releases.",
      },
      {
        statement: "Improved defect visibility",
        context: "Implemented tracking system for reported issues.",
      },
    ],
    tags: ["QUALITY", "RELIABILITY"],
  },
];

describe("TimelineLogs", () => {
  it("renders role, company, period, and location clearly", () => {
    render(<TimelineLogs entries={entries} />);

    expect(
        screen.getByText((content) =>
            content.includes("May 2025 — Present"),
        ),
    ).toBeInTheDocument();
    expect(screen.getByText(/Test Analyst/i)).toBeInTheDocument();
    expect(screen.getByText(/Alula Technologies/i)).toBeInTheDocument();
    expect(
      screen.getByText("Pretoria, South Africa · Hybrid"),
    ).toBeInTheDocument();
  });

  it("renders outcome signals instead of responsibility-only content", () => {
    render(<TimelineLogs entries={entries} />);

    expect(
      screen.getByText("Identified system failures before production"),
    ).toBeInTheDocument();
    expect(screen.getByText("Improved defect visibility")).toBeInTheDocument();
  });

  it("limits visible signals to four", () => {
    render(
      <TimelineLogs
        entries={[
          {
            ...entries[0],
            outcomes: [
              { statement: "One", context: "Context for One" },
              { statement: "Two", context: "Context for Two" },
              { statement: "Three", context: "Context for Three" },
              { statement: "Four", context: "Context for Four" },
              { statement: "Five", context: "Context for Five" },
            ],
          },
        ]}
      />,
    );

    expect(screen.getByText("Four")).toBeInTheDocument();
    expect(screen.queryByText("Five")).not.toBeInTheDocument();
  });
});