import { render } from "./test-utils";
import { ThemeProvider } from "../app/ThemeProvider";
import { useTheme } from "../theme/useTheme";
import type { JSX } from "react";


/**
 * Small consumer component for theme-provider tests.
 *
 * Purpose:
 * - Verify theme context availability
 * - Verify the enforced baseline theme value
 */
function ThemeConsumer(): JSX.Element {
  const { theme } = useTheme();

  return <div>{theme}</div>;
}

/**
 * Theme baseline tests.
 *
 * These tests validate:
 * - dark mode is the default theme
 * - root document receives the canonical data attribute
 * - theme provider exposes a stable context value
 */
describe("theme baseline", () => {
  it("applies dark mode as the default theme", () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );

    expect(document.documentElement.dataset.theme).toBe("dark");
  });

  it("provides the canonical theme through context", () => {
    const { getByText } = render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );

    expect(getByText("dark")).toBeInTheDocument();
  });
});