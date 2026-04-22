import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteNavigation } from "./SiteNavigation";
import { PRIMARY_SITE_NAV_ITEMS, getNavigationLabel } from "./navigation.content";
import { getSectionHeading } from "../../content/sections/sectionHeadings";

describe("thematic navigation labeling", () => {
  it("uses clear balanced labels in desktop navigation", () => {
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

  it("provides clear accessible labels for navigation destinations", () => {
    for (const item of PRIMARY_SITE_NAV_ITEMS) {
      expect(item.ariaLabel).toMatch(/^Navigate to /i);
    }
  });

  it("resolves balanced labels predictably", () => {
    expect(getNavigationLabel(PRIMARY_SITE_NAV_ITEMS[1], "balanced")).toBe("Modules");
    expect(getNavigationLabel(PRIMARY_SITE_NAV_ITEMS[1], "enhanced")).toBe("Active Modules");
  });

  it("keeps section headings aligned with navigation destinations", () => {
    expect(getSectionHeading("modules")).toBe("Active Modules");
    expect(getSectionHeading("history")).toBe("Operational History");
    expect(getSectionHeading("credentials")).toBe("Credential Stack");
    expect(getSectionHeading("contact")).toBe("Open Transmission");
  });
});