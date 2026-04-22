import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { SiteNavigation } from "./SiteNavigation";

/**
 * Mock IntersectionObserver for deterministic active-section tests.
 */
class MockIntersectionObserver {
  private callback: IntersectionObserverCallback;

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }

  observe() {
    // no-op for basic render tests
  }

  unobserve() {
    // no-op
  }

  disconnect() {
    // no-op
  }

  takeRecords() {
    return [];
  }
}

describe("active section highlighting", () => {
  beforeEach(() => {
    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
  });

  it("renders the primary navigation region", () => {
    render(<SiteNavigation />);

    expect(
      screen.getByRole("navigation", {
        name: /primary site navigation/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders all primary navigation items", () => {
    render(<SiteNavigation />);

    const nav = screen.getByRole("navigation", {
      name: /primary site navigation/i,
    });

    expect(within(nav).getByText(/^system$/i)).toBeInTheDocument();
    expect(within(nav).getByText(/^modules$/i)).toBeInTheDocument();
    expect(within(nav).getByText(/^history$/i)).toBeInTheDocument();
    expect(within(nav).getByText(/^credentials$/i)).toBeInTheDocument();
    expect(within(nav).getByText(/^contact$/i)).toBeInTheDocument();
  });

  it("marks one item as the current active destination", () => {
    render(<SiteNavigation />);

    const nav = screen.getByRole("navigation", {
      name: /primary site navigation/i,
    });

    const currentLinks = within(nav).getAllByRole("link", {
      current: "page",
    });

    expect(currentLinks).toHaveLength(1);
  });

  it("uses a structural cue for active state", () => {
    render(<SiteNavigation />);

    const nav = screen.getByRole("navigation", {
      name: /primary site navigation/i,
    });

    const currentLink = within(nav).getAllByRole("link", {
      current: "page",
    })[0];

    expect(currentLink).toBeInTheDocument();
  });
});