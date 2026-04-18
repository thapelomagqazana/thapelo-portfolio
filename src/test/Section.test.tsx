import { render, screen } from "./test-utils";
import { Section } from "../components/layout";
import { Text } from "../components/ui";

/**
 * Section primitive tests.
 *
 * These tests validate:
 * - semantic element override
 * - child rendering
 */
describe("Section", () => {
  it("renders with semantic element override", () => {
    render(
      <Section as="section" aria-label="Mission section">
        <Text>Mission profile</Text>
      </Section>,
    );

    expect(screen.getByLabelText(/mission section/i)).toBeInTheDocument();
    expect(screen.getByText(/mission profile/i)).toBeInTheDocument();
  });
});