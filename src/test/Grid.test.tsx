import { render, screen } from "./test-utils";
import { Grid } from "../components/layout";
import { Text } from "../components/ui";

/**
 * Grid primitive tests.
 *
 * These tests validate:
 * - structural rendering
 * - child composition
 */
describe("Grid", () => {
  it("renders multiple child elements", () => {
    render(
      <Grid columns={2}>
        <Text>Item one</Text>
        <Text>Item two</Text>
      </Grid>,
    );

    expect(screen.getByText(/item one/i)).toBeInTheDocument();
    expect(screen.getByText(/item two/i)).toBeInTheDocument();
  });
});