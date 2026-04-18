import { render, screen } from "./test-utils";
import { Text } from "../components/ui";

/**
 * Text primitive tests.
 *
 * These tests validate:
 * - semantic rendering control
 * - visible content rendering
 */
describe("Text", () => {
  it("renders with semantic tag override", () => {
    render(
      <Text as="h1" variant="h1">
        Mission Profile
      </Text>,
    );

    expect(
      screen.getByRole("heading", { name: /mission profile/i, level: 1 }),
    ).toBeInTheDocument();
  });
});