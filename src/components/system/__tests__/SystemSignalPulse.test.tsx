import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SystemSignalPulse } from "../SystemSignalPulse";

describe("SystemSignalPulse", () => {
  it("renders as decorative non-semantic pulse UI", () => {
    render(<SystemSignalPulse indicatorClassName="bg-accent-cyan" />);

    const pulse = screen.getByTestId("system-signal-pulse");

    expect(pulse).toHaveAttribute("aria-hidden", "true");
  });

  it("keeps a static status dot available without relying on animation", () => {
    render(<SystemSignalPulse indicatorClassName="bg-accent-cyan" />);

    expect(screen.getByTestId("system-signal-pulse-dot")).toBeInTheDocument();
    expect(screen.getByTestId("system-signal-pulse-ring")).toBeInTheDocument();
  });
});