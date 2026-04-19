import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";

import { render, screen } from "./test-utils";
import { MainLayout } from "../components/layout-shell";
import { Text } from "../components/ui";

/**
 * Global layout shell tests.
 *
 * These tests validate:
 * - Navbar renders
 * - Footer renders
 * - Routed content slot appears inside MainLayout
 * - Mobile menu control is present and accessible
 */
describe("global layout shell", () => {
  it("renders navbar, main content, and footer", () => {
    render(
      <MemoryRouter>
        <MainLayout>
          <Text as="h1" variant="h1">
            Shell Content
          </Text>
        </MainLayout>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("button", { name: /open navigation menu/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /shell content/i, level: 1 }),
    ).toBeInTheDocument();

    expect(screen.getByText(/transmission channel/i)).toBeInTheDocument();
  });

  it("opens the mobile navigation menu when toggled", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <MainLayout>
          <div>Body Content</div>
        </MainLayout>
      </MemoryRouter>,
    );

    const toggle = screen.getByRole("button", {
      name: /open navigation menu/i,
    });

    await user.click(toggle);

    expect(
      await screen.findByRole("navigation", { name: /mobile navigation/i }),
    ).toBeInTheDocument();
  });
});