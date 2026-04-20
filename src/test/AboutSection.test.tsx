import { render, screen } from "./test-utils";
import { AboutSection } from "../features/about";

/**
 * AboutSection tests.
 *
 * These tests validate:
 * - section heading rendering
 * - existence of story and capabilities regions
 * - required capability labels in the default layout shell
 */
describe("AboutSection", () => {
  it("renders the section heading", () => {
    render(<AboutSection />);

    expect(
      screen.getByRole("heading", {
        name: /identity and capability in one structured view/i,
        level: 2,
      }),
    ).toBeInTheDocument();
  });

  it("renders the story and capabilities regions", () => {
    render(<AboutSection />);

    expect(
        screen.getByRole("heading", { name: /story/i, level: 3 })
    ).toBeInTheDocument();

    expect(
        screen.getByRole("heading", { name: /capabilities/i, level: 3 })
    ).toBeInTheDocument();
  });

  it("renders the required capability items", () => {
    render(<AboutSection />);

    expect(screen.getByText(/^qa$/i)).toBeInTheDocument();
    expect(screen.getByText(/^devops$/i)).toBeInTheDocument();
    expect(screen.getByText(/^frontend$/i)).toBeInTheDocument();
    expect(screen.getByText(/^systems thinking$/i)).toBeInTheDocument();
  });
});