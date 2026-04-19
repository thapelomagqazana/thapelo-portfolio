import { render, screen } from "./test-utils";
import { SystemDashboard } from "../features/dashboard";

/**
 * SystemDashboard tests.
 *
 * These tests validate:
 * - primary metric rendering
 * - status chip rendering
 * - KPI rendering
 * - required dashboard labels
 */
describe("SystemDashboard", () => {
  it("renders the primary release-confidence metric", () => {
    render(<SystemDashboard />);

    expect(screen.getByText(/release confidence/i)).toBeInTheDocument();
    expect(screen.getByText(/92%/i)).toBeInTheDocument();
  });

  it("renders bounded status indicators", () => {
    render(<SystemDashboard />);

    const passStatuses = screen.getAllByText(/pass/i);
    expect(passStatuses.length).toBeGreaterThanOrEqual(2);

    expect(screen.getByText(/warn/i)).toBeInTheDocument();
  });

  it("renders KPI summary values", () => {
    render(<SystemDashboard />);

    expect(screen.getByText(/systems built/i)).toBeInTheDocument();
    expect(screen.getByText(/12\+/i)).toBeInTheDocument();
  });

  it("renders the dashboard heading", () => {
    render(<SystemDashboard />);

    expect(screen.getByText(/system dashboard preview/i)).toBeInTheDocument();
  });
});