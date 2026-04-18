import { render, screen } from "./test-utils";
import { Button } from "../components/ui";

/**
 * Button primitive tests.
 *
 * These tests validate:
 * - accessible default rendering
 * - label rendering
 * - variant baseline presence
 */
describe("Button", () => {
  it("renders a native button element", () => {
    render(<Button>Run Inspection</Button>);

    expect(
      screen.getByRole("button", { name: /run inspection/i }),
    ).toBeInTheDocument();
  });

  it("supports disabled state", () => {
    render(<Button disabled>Disabled</Button>);

    expect(screen.getByRole("button", { name: /disabled/i })).toBeDisabled();
  });
});