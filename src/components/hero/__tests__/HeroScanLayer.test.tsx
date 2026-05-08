import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HeroScanLayer } from "../HeroScanLayer";

describe("HeroScanLayer", () => {
  it("renders as a decorative non-interactive layer", () => {
    render(<HeroScanLayer />);

    const layer = screen.getByTestId("hero-scan-layer");

    expect(layer).toHaveAttribute("aria-hidden", "true");
    expect(layer.className).toContain("pointer-events-none");
  });

  it("renders a scan line without required readable content", () => {
    render(<HeroScanLayer />);

    expect(screen.getByTestId("hero-scan-line")).toBeInTheDocument();
  });
});