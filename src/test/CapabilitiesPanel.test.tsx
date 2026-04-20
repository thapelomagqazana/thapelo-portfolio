import { render, screen } from "./test-utils";
import { CapabilitiesPanel } from "../features/capabilities";

/**
 * CapabilitiesPanel tests.
 *
 * These tests validate:
 * - panel heading rendering
 * - required capability category rendering
 * - concise, structured capability presentation
 */
describe("CapabilitiesPanel", () => {
  it("renders the panel heading", () => {
    render(<CapabilitiesPanel />);

    expect(
      screen.getByRole("heading", { name: /capabilities/i, level: 3 }),
    ).toBeInTheDocument();
  });

  it("renders all required capability categories", () => {
    render(<CapabilitiesPanel />);

    expect(screen.getByText(/^qa$/i)).toBeInTheDocument();
    expect(screen.getByText(/^devops$/i)).toBeInTheDocument();
    expect(screen.getByText(/^frontend$/i)).toBeInTheDocument();
    expect(screen.getByText(/^systems thinking$/i)).toBeInTheDocument();
  });

  it("renders concise supporting summaries", () => {
    render(<CapabilitiesPanel />);

    expect(
      screen.getByText(/structured testing, defect prevention/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/reliable delivery pipelines/i),
    ).toBeInTheDocument();
  });
});