import type { JSX } from "react";

import { MotionProvider } from "./MotionProvider";
import { ThemeProvider } from "./ThemeProvider";
import { AppRouter } from "./router";

/**
 * Root application entry component.
 *
 * Responsibilities:
 * - Compose application-wide providers
 * - Delegate rendering to the canonical router
 */
export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <MotionProvider>
        <AppRouter />
      </MotionProvider>
    </ThemeProvider>
  );
}