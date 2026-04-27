import { render, screen } from "@testing-library/react";
import { describe, expect, it, beforeEach, vi } from "vitest";
import { HomePage } from "../../pages/HomePage";
import { RECRUITER_GUIDED_FLOW } from "../../content/page-flow/recruiterFlow";

/**
 * Mock IntersectionObserver for deterministic page-flow tests.
 *
 * Purpose:
 * - Prevent jsdom runtime failures when sticky navigation mounts
 * - Keep recruiter-flow tests focused on content order and section headings
 * - Avoid depending on real browser intersection behavior in unit tests
 */
class MockIntersectionObserver {
  constructor(_callback: IntersectionObserverCallback) {}

  observe() {
    // no-op
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

describe("recruiter guided assessment flow", () => {
  beforeEach(() => {
    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
  });

  it("preserves the canonical recruiter section order", () => {
    expect(RECRUITER_GUIDED_FLOW).toEqual([
      "system",
      "modules",
      "history",
      "credentials",
      "contact",
    ]);
  });

  it("renders sections in the intended recruiter-first order", () => {
    render(<HomePage />);

    const system = document.getElementById("system");
    const modules = document.getElementById("active-modules");
    const history = document.getElementById("operational-history");
    const credentials = document.getElementById("credential-stack");
    const contact = document.getElementById("open-transmission");

    expect(system).toBeInTheDocument();
    expect(modules).toBeInTheDocument();
    expect(history).toBeInTheDocument();
    expect(credentials).toBeInTheDocument();
    expect(contact).toBeInTheDocument();

    expect(system?.compareDocumentPosition(modules!)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
    expect(modules?.compareDocumentPosition(history!)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
    expect(history?.compareDocumentPosition(credentials!)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
    expect(credentials?.compareDocumentPosition(contact!)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
  });

  it("renders recruiter-oriented section headings", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: /active modules/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /operational history/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /credential stack/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /open transmission/i }),
    ).toBeInTheDocument();
  });
});