import { render, screen } from "./test-utils";
import { vi } from "vitest";

vi.mock("motion/react", async () => {
  const actual = await vi.importActual<typeof import("motion/react")>("motion/react");

  return {
    ...actual,
    useReducedMotion: () => true,
  };
});

import { TerminalSimulator } from "../features/terminal";

/**
 * TerminalSimulator tests.
 *
 * These tests validate:
 * - terminal header rendering
 * - structured script rendering
 * - reduced-motion-safe static fallback behavior
 */
describe("TerminalSimulator", () => {
  it("renders the terminal header", () => {
    render(<TerminalSimulator />);

    expect(screen.getByText(/system execution/i)).toBeInTheDocument();
  });

  it("renders the full script when reduced motion is enabled", () => {
    render(<TerminalSimulator />);

    expect(screen.getByText(/bb run --portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/identity verified/i)).toBeInTheDocument();
    expect(screen.getByText(/projects loaded/i)).toBeInTheDocument();
    expect(screen.getByText(/verdict: approved/i)).toBeInTheDocument();
  });
});