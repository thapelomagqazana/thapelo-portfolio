import { render, screen } from "./test-utils";
import { Text } from "../components/ui";

/**
 * Typography system tests.
 *
 * These tests validate:
 * - bounded hierarchy usage
 * - label and caption rendering
 * - semantic flexibility through the Text primitive
 */
describe("Typography system", () => {
  it("renders label text without breaking content visibility", () => {
    render(<Text variant="label">system status</Text>);

    expect(screen.getByText(/system status/i)).toBeInTheDocument();
  });

  it("renders caption text correctly", () => {
    render(<Text variant="caption">Supporting information</Text>);

    expect(screen.getByText(/supporting information/i)).toBeInTheDocument();
  });

  it("supports semantic section heading composition", () => {
    render(
      <>
        <Text as="h2" variant="h2">
          Active Modules
        </Text>
        <Text variant="body-muted">Supporting explanation</Text>
      </>,
    );

    expect(
      screen.getByRole("heading", { name: /active modules/i, level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByText(/supporting explanation/i)).toBeInTheDocument();
  });
});