import { render, screen } from "./test-utils";
import { Container } from "../components/layout";
import { Text } from "../components/ui";

/**
 * Container primitive tests.
 *
 * These tests validate:
 * - child rendering
 * - structural rendering
 * - basic composability
 */
describe("Container", () => {
  it("renders child content", () => {
    render(
      <Container>
        <Text>Centered content</Text>
      </Container>,
    );

    expect(screen.getByText(/centered content/i)).toBeInTheDocument();
  });
});