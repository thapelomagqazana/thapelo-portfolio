import { render, screen } from "./test-utils";
import { DEFAULT_PROJECT_MODULES, ModuleCard } from "../features/projects";

/**
 * ModuleCard tests.
 *
 * These tests validate:
 * - required field rendering
 * - tech stack rendering
 * - canonical status integration
 * - accessible navigation behavior when href exists
 */
describe("ModuleCard", () => {
  const module = DEFAULT_PROJECT_MODULES[0];

  it("renders the module name, description, and tech stack", () => {
    render(<ModuleCard module={module} />);

    expect(
      screen.getByRole("heading", { name: /brikbyteos/i, level: 3 }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/release-intelligence operating system/i),
    ).toBeInTheDocument();

    expect(screen.getByText(/^go$/i)).toBeInTheDocument();
    expect(screen.getByText(/^opa$/i)).toBeInTheDocument();
  });

  it("renders project status through the canonical status system", () => {
    render(<ModuleCard module={module} />);

    expect(screen.getByLabelText(/warn active/i)).toBeInTheDocument();
  });

  it("renders as a semantic link when href is provided", () => {
    render(<ModuleCard module={module} />);

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "/projects/brikbyteos",
    );
  });
});