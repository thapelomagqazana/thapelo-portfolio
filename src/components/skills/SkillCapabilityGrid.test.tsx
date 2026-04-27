import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SkillCapabilityGrid } from "./SkillCapabilityGrid";

describe("SkillCapabilityGrid", () => {
  it("renders skill panels with evidence", () => {
    render(
      <SkillCapabilityGrid
        panels={[
          {
            category: "QUALITY_ENGINEERING",
            title: "Quality Engineering",
            summary: "Validating system behavior.",
            items: ["Test Analysis", "Defect Reporting"],
            evidence: [
              {
                type: "WORK_EXPERIENCE",
                source: "Test Analyst @ Alula Technologies",
                proof:
                  "Applied structured QA processes across enterprise systems.",
                href: "#operational-history",
              },
            ],
          },
        ]}
      />,
    );

    expect(screen.getByText("Quality Engineering")).toBeInTheDocument();
    expect(screen.getByText("Test Analysis • Defect Reporting")).toBeInTheDocument();
    expect(screen.getByText("Evidence")).toBeInTheDocument();
    expect(screen.getByText("Test Analyst @ Alula Technologies")).toBeInTheDocument();
  });

  it("does not render panels without evidence", () => {
    const { container } = render(
      <SkillCapabilityGrid
        panels={[
          {
            category: "FRONTEND_ENGINEERING",
            title: "Frontend Engineering",
            summary: "Building interfaces.",
            items: ["React", "TypeScript"],
            evidence: [],
          },
        ]}
      />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("uses safe external link attributes", () => {
    render(
      <SkillCapabilityGrid
        panels={[
          {
            category: "DEVOPS_FOUNDATIONS",
            title: "DevOps Foundations",
            summary: "Deployment basics.",
            items: ["Docker", "Nginx"],
            evidence: [
              {
                type: "PROJECT",
                source: "External Project",
                proof: "Shows deployment workflow.",
                href: "https://example.com",
              },
            ],
          },
        ]}
      />,
    );

    const link = screen.getByRole("link", {
      name: /external project.*new tab/i,
    });

    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("keeps internal evidence anchors same-page", () => {
    render(
      <SkillCapabilityGrid
        panels={[
          {
            category: "FRONTEND_ENGINEERING",
            title: "Frontend Engineering",
            summary: "Building interfaces.",
            items: ["React", "TypeScript"],
            evidence: [
              {
                type: "PROJECT",
                source: "Portfolio Control Room",
                proof: "Shows structured component work.",
                href: "#portfolio-control-room",
              },
            ],
          },
        ]}
      />,
    );

    const link = screen.getByRole("link", {
      name: /portfolio control room.*evidence section/i,
    });

    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
  });
});