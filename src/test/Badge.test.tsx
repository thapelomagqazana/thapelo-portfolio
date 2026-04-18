import { render, screen } from "./test-utils";
import { Badge } from "../components/ui";

/**
 * Badge primitive tests.
 */
describe("Badge", () => {
  it("renders presentational content", () => {
    render(<Badge>active</Badge>);

    expect(screen.getByText(/active/i)).toBeInTheDocument();
  });
});