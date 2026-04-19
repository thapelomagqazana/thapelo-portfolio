import { render, screen } from "./test-utils";
import { HeroSystem } from "../features/hero";

/**
 * HeroSystem tests.
 *
 * These tests validate:
 * - headline rendering
 * - subheadline rendering
 * - primary and secondary CTA rendering
 * - semantic heading usage
 */
describe("HeroSystem", () => {
  it("renders the primary hero headline", () => {
    render(<HeroSystem />);

    expect(
      screen.getByRole("heading", {
        name: /i build systems that decide whether software is safe to release/i,
        level: 1,
      }),
    ).toBeInTheDocument();
  });

  it("renders the supporting subheadline", () => {
    render(<HeroSystem />);

    expect(
      screen.getByText(
        /software developer and test analyst focused on quality, reliability, and release confidence/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders the primary and secondary ctas", () => {
    render(<HeroSystem />);

    expect(screen.getByRole("link", { name: /run inspection/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view experience/i })).toBeInTheDocument();
  });
});