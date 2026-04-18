import { render, screen } from "./test-utils";
import { StatusChip } from "../components/system";

/**
 * StatusChip component tests.
 */
describe("StatusChip", () => {
  it("renders a canonical status label", () => {
    render(<StatusChip status="PASS" />);

    expect(screen.getByText(/pass/i)).toBeInTheDocument();
  });

  it("renders optional value text", () => {
    render(<StatusChip status="WARN" value="latency" />);

    expect(screen.getByText(/warn/i)).toBeInTheDocument();
    expect(screen.getByText(/latency/i)).toBeInTheDocument();
  });
});