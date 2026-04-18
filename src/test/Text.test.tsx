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
  it("renders semantic heading tags correctly", () => {
    render(
      <Text as="h1" variant="h1">
        Mission Profile
      </Text>,
    );

    expect(
      screen.getByRole("heading", { name: /mission profile/i, level: 1 }),
    ).toBeInTheDocument();
  });

  it("renders body content correctly", () => {
    render(<Text variant="body">Readable content</Text>);

    expect(screen.getByText(/readable content/i)).toBeInTheDocument();
  });

  it("renders mono output content correctly", () => {
    render(<Text variant="mono-output">RUN_ID=READY</Text>);

    expect(screen.getByText(/run_id=ready/i)).toBeInTheDocument();
  });
});