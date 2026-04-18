import { render, screen } from "./test-utils";
import { Card, Text } from "../components/ui";

/**
 * Card primitive tests.
 */
describe("Card", () => {
  it("renders grouped content", () => {
    render(
      <Card>
        <Text>Grouped content</Text>
      </Card>,
    );

    expect(screen.getByText(/grouped content/i)).toBeInTheDocument();
  });
});