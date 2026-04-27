import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { TerminalOverlay } from "./TerminalOverlay";

describe("TerminalOverlay", () => {
  it("does not render when closed", () => {
    render(
      <TerminalOverlay
        isOpen={false}
        onClose={vi.fn()}
        onModeChange={vi.fn()}
      />,
    );

    expect(
      screen.queryByRole("dialog", { name: /terminal portfolio mode/i }),
    ).not.toBeInTheDocument();
  });

  it("renders available commands when open", () => {
    render(
      <TerminalOverlay
        isOpen
        onClose={vi.fn()}
        onModeChange={vi.fn()}
      />,
    );

    expect(
        screen.getByRole("heading", { name: /available commands/i })
    ).toBeInTheDocument();
    expect(
        screen.getByRole("button", { name: /modules/i })
    ).toBeInTheDocument();

    expect(
        screen.getByRole("button", { name: /contact/i })
    ).toBeInTheDocument();
  });

  it("closes on escape", () => {
    const onClose = vi.fn();

    render(
      <TerminalOverlay
        isOpen
        onClose={onClose}
        onModeChange={vi.fn()}
      />,
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onClose).toHaveBeenCalled();
  });

  it("returns to UI mode when exit is clicked", () => {
    const onModeChange = vi.fn();

    render(
      <TerminalOverlay
        isOpen
        onClose={vi.fn()}
        onModeChange={onModeChange}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /exit/i }));

    expect(onModeChange).toHaveBeenCalledWith("UI");
  });
});