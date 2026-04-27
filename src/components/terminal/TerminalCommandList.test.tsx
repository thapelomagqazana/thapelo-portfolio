import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { TerminalCommandList } from "./TerminalCommandList";

describe("TerminalCommandList", () => {
  it("renders available commands as a labelled section", () => {
    render(
      <TerminalCommandList
        commands={[
          { name: "help", description: "Show available commands." },
          {
            name: "modules",
            description: "Inspect active project modules.",
            href: "#active-modules",
          },
        ]}
        onNavigate={vi.fn()}
      />,
    );

    expect(
      screen.getByRole("heading", { name: /available commands/i }),
    ).toBeInTheDocument();

    expect(screen.getByText("help")).toBeInTheDocument();
    expect(screen.getByText("modules")).toBeInTheDocument();
  });

  it("navigates when command has an anchor", () => {
    const onNavigate = vi.fn();

    render(
      <TerminalCommandList
        commands={[
          {
            name: "contact",
            description: "Open transmission section.",
            href: "#open-transmission",
          },
        ]}
        onNavigate={onNavigate}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /contact/i }));

    expect(onNavigate).toHaveBeenCalledWith("#open-transmission");
  });
});