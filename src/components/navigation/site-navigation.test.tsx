import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SiteNavigation } from "./SiteNavigation";

describe("SiteNavigation", () => {
  it("renders the primary site navigation region", () => {
    render(<SiteNavigation />);

    expect(
      screen.getByRole("navigation", {
        name: /primary site navigation/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the expected desktop navigation labels", () => {
    render(<SiteNavigation />);

    const nav = screen.getByRole("navigation", {
      name: /primary site navigation/i,
    });

    expect(within(nav).getByText(/^system$/i)).toBeInTheDocument();
    expect(within(nav).getByText(/^modules$/i)).toBeInTheDocument();
    expect(within(nav).getByText(/^history$/i)).toBeInTheDocument();
    expect(within(nav).getByText(/^credentials$/i)).toBeInTheDocument();
    expect(within(nav).getByText(/^contact$/i)).toBeInTheDocument();
  });

  it("renders a mobile navigation trigger", () => {
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
      screen.getByRole("navigation", {
        name: /mobile navigation/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the navigation labels in the mobile sheet", () => {
    render(<SiteNavigation />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /open mobile navigation/i,
      }),
    );

    const mobileNav = screen.getByRole("navigation", {
      name: /mobile navigation/i,
    });

    expect(within(mobileNav).getByText(/^system$/i)).toBeInTheDocument();
    expect(within(mobileNav).getByText(/^modules$/i)).toBeInTheDocument();
    expect(within(mobileNav).getByText(/^history$/i)).toBeInTheDocument();
    expect(within(mobileNav).getByText(/^credentials$/i)).toBeInTheDocument();
    expect(within(mobileNav).getByText(/^contact$/i)).toBeInTheDocument();
  });

  it("closes the mobile navigation sheet", () => {
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
      screen.queryByRole("navigation", {
        name: /mobile navigation/i,
      }),
    ).not.toBeInTheDocument();
  });
});