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

  it("renders the supporting recruiter-facing summary", () => {
    render(<HeroSystem />);

    expect(
      screen.getByText(
        /software engineer focused on release confidence, software quality, and production-ready delivery/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders the primary hero actions", () => {
    render(<HeroSystem />);

    expect(
      screen.getByRole("link", {
        name: /run portfolio inspection/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /view portfolio modules/i }),
    ).toBeInTheDocument();
  });

  it("renders recruiter classification signals", () => {
    render(<HeroSystem />);

    const recruiterSignals = screen.getByRole("list", {
      name: /recruiter classification signals/i,
    });

    expect(
      within(recruiterSignals).getByText(/software engineer/i),
    ).toBeInTheDocument();

    expect(
      within(recruiterSignals).getByText(/test analyst/i),
    ).toBeInTheDocument();

    expect(
      within(recruiterSignals).getByText(/release confidence/i),
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
      name: /live system panel/i,
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

  it("renders the primary recruiter navigation actions", () => {
    render(<HeroSystem />);

    expect(
      screen.getByRole("link", {
        name: /run portfolio inspection/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /view portfolio modules/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /inspect brikbyteos flagship module/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the terminal preview command", () => {
    render(<HeroSystem />);

    expect(screen.getByText(/bb run --portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/systems thinking detected/i)).toBeInTheDocument();
    expect(
      screen.getByText(/release reliability signal:\s*high/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/candidate:\s*strategic fit/i)).toBeInTheDocument();
  });


  it("renders the hero primary action navigation", () => {
    render(<HeroSystem />);

    const heroActions = screen.getByRole("navigation", {
      name: /hero primary actions/i,
    });

    expect(
      within(heroActions).getByRole("link", {
        name: /run portfolio inspection/i,
      }),
    ).toBeInTheDocument();

    expect(
      within(heroActions).getByRole("link", {
        name: /view portfolio modules/i,
      }),
    ).toBeInTheDocument();

    expect(
      within(heroActions).getByRole("link", {
        name: /inspect brikbyteos flagship module/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders command-style visible CTA labels", () => {
    render(<HeroSystem />);

    expect(screen.getByText(/^run inspection$/i)).toBeInTheDocument();
    expect(screen.getByText(/^view modules$/i)).toBeInTheDocument();
    expect(screen.getByText(/^inspect brikbyteos$/i)).toBeInTheDocument();
  });

  it("limits the hero to at most three visible primary actions", () => {
    render(<HeroSystem />);

    const heroActions = screen.getByRole("navigation", {
      name: /hero primary actions/i,
    });

    expect(within(heroActions).getAllByRole("link")).toHaveLength(3);
  });

  it("renders the visible hero system status above the fold", () => {
    render(<HeroSystem />);

    expect(
      screen.getByText(/system status: operational/i),
    ).toBeInTheDocument();
  });

  it("renders the hero operating mode label", () => {
    render(<HeroSystem />);

    expect(
      screen.getByText(/mode: release analysis/i),
    ).toBeInTheDocument();
  });

  it("renders the hero operating mode description", () => {
    render(<HeroSystem />);

    expect(
      screen.getByText(/live release-readiness posture for portfolio inspection/i),
    ).toBeInTheDocument();
  });

  it("renders the live system panel near the top of the hero", () => {
    render(<HeroSystem />);

    expect(
      screen.getByRole("region", {
        name: /live system panel/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders engineering-style dashboard metrics", () => {
    render(<HeroSystem />);

    const dashboard = screen.getByRole("region", {
      name: /live system panel/i,
    });

    expect(
      within(dashboard).getByRole("group", {
        name: /metric: release confidence/i,
      }),
    ).toBeInTheDocument();

    expect(
      within(dashboard).getByRole("group", {
        name: /metric: security/i,
      }),
    ).toBeInTheDocument();

    expect(
      within(dashboard).getByRole("group", {
        name: /metric: performance/i,
      }),
    ).toBeInTheDocument();

    expect(
      within(dashboard).getByRole("group", {
        name: /metric: verdict/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders practical dashboard signals", () => {
    render(<HeroSystem />);

    const practicalSignals = screen.getByRole("region", {
      name: /current practical signals/i,
    });

    expect(
      within(practicalSignals).getByText(/current focus/i),
    ).toBeInTheDocument();

    expect(
      within(practicalSignals).getByText(/core stack/i),
    ).toBeInTheDocument();

    expect(
      within(practicalSignals).getByText(/availability/i),
    ).toBeInTheDocument();
  });

  it("uses explicit text labels and does not rely on color alone", () => {
    render(<HeroSystem />);

    const dashboard = screen.getByRole("region", {
      name: /live system panel/i,
    });

    const securityMetric = within(dashboard).getByRole("group", {
      name: /metric: security/i,
    });

    const performanceMetric = within(dashboard).getByRole("group", {
      name: /metric: performance/i,
    });

    const verdictMetric = within(dashboard).getByRole("group", {
      name: /metric: verdict/i,
    });

    expect(within(securityMetric).getAllByText(/^pass$/i)).toHaveLength(2);
    expect(within(performanceMetric).getAllByText(/^warning$/i)).toHaveLength(2);
    expect(within(verdictMetric).getAllByText(/^approved$/i)).toHaveLength(2);
  });

  it("renders realistic practical values", () => {
    render(<HeroSystem />);

    expect(
      screen.getByText(/brikbyteos — release intelligence/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/go, react, typescript, docker/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/open to opportunities/i),
    ).toBeInTheDocument();
  });

  it("renders engineering-legible dashboard states", () => {
    render(<HeroSystem />);

    const dashboard = screen.getByRole("region", {
      name: /live system panel/i,
    });

    expect(
      within(dashboard).getByRole("group", {
        name: /metric: tests/i,
      }),
    ).toBeInTheDocument();

    expect(
      within(dashboard).getByRole("group", {
        name: /metric: security/i,
      }),
    ).toBeInTheDocument();

    expect(
      within(dashboard).getByRole("group", {
        name: /metric: performance/i,
      }),
    ).toBeInTheDocument();

    expect(
      within(dashboard).getByRole("group", {
        name: /metric: release confidence/i,
      }),
    ).toBeInTheDocument();

    expect(
      within(dashboard).getByRole("group", {
        name: /metric: verdict/i,
      }),
    ).toBeInTheDocument();
  });

  it("uses operational values that feel like real release-readiness signals", () => {
    render(<HeroSystem />);

    const dashboard = screen.getByRole("region", {
      name: /live system panel/i,
    });

    const testsMetric = within(dashboard).getByRole("group", {
      name: /metric: tests/i,
    });

    const securityMetric = within(dashboard).getByRole("group", {
      name: /metric: security/i,
    });

    const performanceMetric = within(dashboard).getByRole("group", {
      name: /metric: performance/i,
    });

    const releaseConfidenceMetric = within(dashboard).getByRole("group", {
      name: /metric: release confidence/i,
    });

    const verdictMetric = within(dashboard).getByRole("group", {
      name: /metric: verdict/i,
    });

    expect(within(testsMetric).getAllByText(/^pass$/i)).toHaveLength(2);
    expect(within(securityMetric).getAllByText(/^pass$/i)).toHaveLength(2);
    expect(within(performanceMetric).getAllByText(/^warning$/i)).toHaveLength(2);
    expect(
      within(releaseConfidenceMetric).getAllByText(/^92%$/i),
    ).toHaveLength(2);
    expect(within(verdictMetric).getAllByText(/^approved$/i)).toHaveLength(2);
  });

  it("makes the dashboard feel like engineering judgment, not passive decoration", () => {
    render(<HeroSystem />);

    const dashboard = screen.getByRole("region", {
      name: /live system panel/i,
    });

    expect(
      within(dashboard).getByRole("group", {
        name: /metric: tests/i,
      }),
    ).toBeInTheDocument();

    expect(
      within(dashboard).getByRole("group", {
        name: /metric: security/i,
      }),
    ).toBeInTheDocument();

    expect(
      within(dashboard).getByRole("group", {
        name: /metric: performance/i,
      }),
    ).toBeInTheDocument();

    expect(
      within(dashboard).getByRole("group", {
        name: /metric: release confidence/i,
      }),
    ).toBeInTheDocument();

    expect(
      within(dashboard).getByRole("group", {
        name: /metric: verdict/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders explicit label and value pairings for engineering metrics", () => {
    render(<HeroSystem />);

    const dashboard = screen.getByRole("region", {
      name: /live system panel/i,
    });

    const securityMetric = within(dashboard).getByRole("group", {
      name: /metric: security/i,
    });

    const performanceMetric = within(dashboard).getByRole("group", {
      name: /metric: performance/i,
    });

    const verdictMetric = within(dashboard).getByRole("group", {
      name: /metric: verdict/i,
    });

    expect(within(securityMetric).getByText(/^security$/i)).toBeInTheDocument();
    expect(within(securityMetric).getAllByText(/^pass$/i).length).toBeGreaterThan(0);

    expect(within(performanceMetric).getByText(/^performance$/i)).toBeInTheDocument();
    expect(within(performanceMetric).getAllByText(/^warning$/i).length).toBeGreaterThan(0);

    expect(within(verdictMetric).getByText(/^verdict$/i)).toBeInTheDocument();
    expect(within(verdictMetric).getAllByText(/^approved$/i).length).toBeGreaterThan(0);
  });

  it("gives status chips contextual accessibility labels", () => {
    render(<HeroSystem />);

    expect(
      screen.getByLabelText(/security status: pass/i),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/performance status: warning/i),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/verdict status: approved/i),
    ).toBeInTheDocument();
  });

  it("keeps dashboard statuses understandable without relying on color alone", () => {
    render(<HeroSystem />);

    const dashboard = screen.getByRole("region", {
      name: /live system panel/i,
    });

    expect(within(dashboard).getByText(/^tests$/i)).toBeInTheDocument();
    expect(within(dashboard).getByText(/^security$/i)).toBeInTheDocument();
    expect(within(dashboard).getByText(/^performance$/i)).toBeInTheDocument();
    expect(
      within(dashboard).getAllByText(/^pass$/i).length,
    ).toBeGreaterThan(0);
    expect(
      within(dashboard).getAllByText(/^warning$/i).length,
    ).toBeGreaterThan(0);
    expect(
      within(dashboard).getAllByText(/^approved$/i).length,
    ).toBeGreaterThan(0);
  });
});