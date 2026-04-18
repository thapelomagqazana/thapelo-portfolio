import { render, screen } from "./test-utils";
import { Panel, Text } from "../components/ui";

/**
 * Panel primitive tests.
 */
describe("Panel", () => {
  it("renders panel content", () => {
    render(
      <Panel>
        <Text>System panel</Text>
      </Panel>,
    );

    expect(screen.getByText(/system panel/i)).toBeInTheDocument();
  });
});