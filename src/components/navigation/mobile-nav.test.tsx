import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteNavigation } from "./SiteNavigation";

describe("SiteNavigation mobile navigation", () => {
  it("renders a discoverable mobile navigation trigger", () => {
    render(<SiteNavigation />);

    expect(
      screen.getByRole("button", {
        name: /open mobile navigation/i,
      }),
    ).toBeInTheDocument();
  });

  it("opens the mobile navigation sheet when triggered", () => {
    render(<SiteNavigation />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /open mobile navigation/i,
      }),
    );

    expect(
      screen.getByRole("dialog", {
        name: /mobile navigation/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the expected mobile navigation labels", () => {
    render(<SiteNavigation />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /open mobile navigation/i,
      }),
    );

    const mobileNav = within(
      screen.getByRole("dialog", {
        name: /mobile navigation/i,
      }),
    ).getByRole("navigation", {
      name: /mobile navigation/i,
    });

    expect(within(mobileNav).getByText(/^system$/i)).toBeInTheDocument();
    expect(within(mobileNav).getByText(/^modules$/i)).toBeInTheDocument();
    expect(within(mobileNav).getByText(/^history$/i)).toBeInTheDocument();
    expect(within(mobileNav).getByText(/^credentials$/i)).toBeInTheDocument();
    expect(within(mobileNav).getByText(/^contact$/i)).toBeInTheDocument();
  });

  it("renders a clear close control", () => {
    render(<SiteNavigation />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /open mobile navigation/i,
      }),
    );

    expect(
      screen.getByRole("button", {
        name: /close navigation panel/i,
      }),
    ).toBeInTheDocument();
  });

  it("closes the mobile navigation sheet when the close control is used", () => {
    render(<SiteNavigation />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /open mobile navigation/i,
      }),
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /close navigation panel/i,
      }),
    );

    expect(
      screen.queryByRole("dialog", {
        name: /mobile navigation/i,
      }),
    ).not.toBeInTheDocument();
  });
});