import { render, screen } from "./test-utils";
import { SystemBadge } from "../components/system";

/**
 * SystemBadge component tests.
 */
describe("SystemBadge", () => {
  it("renders metadata content", () => {
    render(<SystemBadge>module</SystemBadge>);

    expect(screen.getByText(/module/i)).toBeInTheDocument();
  });
});