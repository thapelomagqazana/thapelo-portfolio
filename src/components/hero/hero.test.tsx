import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HeroSystem } from "./HeroSystem";

/**
 * HeroSystem test suite.
 *
 * Focus:
 * - Preserve the landing story's key guarantees.
 * - Validate critical content and CTA visibility.
 * - Keep tests centered on user-visible behavior, not implementation details.
 */
describe("HeroSystem", () => {
  it("renders the core positioning statement", () => {
    render(<HeroSystem />);

    expect(
      screen.getByRole("heading", {
        name: /i build systems that decide whether software is safe to release/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the primary hero actions", () => {
    render(<HeroSystem />);

    expect(
      screen.getByRole("link", { name: /run inspection/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /view modules/i }),
    ).toBeInTheDocument();
  });

  it("renders the operational status signal", () => {
    render(<HeroSystem />);

    expect(
      screen.getByText(/system status: operational/i),
    ).toBeInTheDocument();

    expect(screen.getByText(/mode: release analysis/i)).toBeInTheDocument();
  });

  it("renders the supporting telemetry dashboard", () => {
    render(<HeroSystem />);

    const dashboard = screen.getByRole("region", {
      name: /release confidence summary/i,
    });

    const releaseConfidenceMetric = within(dashboard).getByRole("group", {
      name: /metric: release confidence/i,
    });

    expect(
      within(releaseConfidenceMetric).getByText(/^release confidence$/i),
    ).toBeInTheDocument();

    expect(
      within(releaseConfidenceMetric).getAllByText("92%"),
    ).toHaveLength(2);

    const verdictMetric = within(dashboard).getByRole("group", {
      name: /metric: verdict/i,
    });

    expect(
      within(verdictMetric).getAllByText("APPROVED"),
    ).toHaveLength(2);
  });

  it("renders the terminal preview command", () => {
    render(<HeroSystem />);

    expect(screen.getByText(/bb run --portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/candidate: approved/i)).toBeInTheDocument();
  });
});