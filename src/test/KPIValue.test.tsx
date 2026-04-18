import { render, screen } from "./test-utils";
import { KPIValue } from "../components/system";

/**
 * KPIValue component tests.
 */
describe("KPIValue", () => {
  it("renders a metric value and label", () => {
    render(<KPIValue label="Release Confidence" value="92%" />);

    expect(screen.getByText(/release confidence/i)).toBeInTheDocument();
    expect(screen.getByText(/92%/i)).toBeInTheDocument();
  });
});