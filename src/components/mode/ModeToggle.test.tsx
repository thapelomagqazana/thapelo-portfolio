import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ModeToggle } from "./ModeToggle";

describe("ModeToggle", () => {
  it("shows current mode state", () => {
    render(<ModeToggle mode="UI" onChange={vi.fn()} />);

    expect(screen.getByRole("button", { name: "UI Mode" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );

    expect(
      screen.getByRole("button", { name: "Terminal Mode" }),
    ).toHaveAttribute("aria-pressed", "false");
  });

  it("requests terminal mode when clicked", () => {
    const onChange = vi.fn();

    render(<ModeToggle mode="UI" onChange={onChange} />);

    fireEvent.click(screen.getByRole("button", { name: "Terminal Mode" }));

    expect(onChange).toHaveBeenCalledWith("TERMINAL");
  });
});