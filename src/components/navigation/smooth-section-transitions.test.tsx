import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { SiteNavigation } from "./SiteNavigation";

/**
 * Mock IntersectionObserver for deterministic navigation tests.
 */
class MockIntersectionObserver {
  constructor(_: IntersectionObserverCallback) {}

  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

describe("smooth section transitions", () => {
  beforeEach(() => {
    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

    document.body.innerHTML = `
      <section id="system" data-section-id="system"></section>
      <section id="active-modules" data-section-id="modules"></section>
      <section id="operational-history" data-section-id="history"></section>
      <section id="credential-stack" data-section-id="credentials"></section>
      <section id="open-transmission" data-section-id="contact"></section>
    `;

    vi.spyOn(window, "scrollTo").mockImplementation(() => {});

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      configurable: true,
      value: vi.fn().mockImplementation((query: string): MediaQueryList => {
        return {
          matches: false,
          media: query,
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
        } as MediaQueryList;
      }),
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    document.body.innerHTML = "";
  });

  it("scrolls smoothly when a primary nav link is clicked", () => {
    render(<SiteNavigation />);

    const nav = screen.getByRole("navigation", {
      name: /primary site navigation/i,
    });

    fireEvent.click(
      within(nav).getByRole("link", {
        name: /navigate to active modules section/i,
      }),
    );

    expect(window.scrollTo).toHaveBeenCalled();
  });

  it("renders stable nav structure while enabling guided movement", () => {
    render(<SiteNavigation />);

    const nav = screen.getByRole("navigation", {
      name: /primary site navigation/i,
    });

    expect(within(nav).getByText(/^system$/i)).toBeInTheDocument();
    expect(within(nav).getByText(/^modules$/i)).toBeInTheDocument();
    expect(within(nav).getByText(/^history$/i)).toBeInTheDocument();
  });
});