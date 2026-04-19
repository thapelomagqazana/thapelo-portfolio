import type { JSX } from "react";

import { Container, Section } from "../components/layout";
import { HeroSystem } from "../features/hero";
import { TerminalSimulator } from "../features/terminal";
import { MotionProvider } from "./MotionProvider";
import { ThemeProvider } from "./ThemeProvider";

/**
 * Root application validation entry component.
 *
 * Responsibilities:
 * - Compose application-wide providers required by the validation surface
 * - Apply the theme baseline before rendering UI
 * - Render HeroSystem and TerminalSimulator together in a bounded validation layout
 *
 * Notes:
 * - This intentionally bypasses application routing
 * - Use this only while validating WBS 3.1.1 and 3.2.1 together
 * - Restore AppRouter after focused validation is complete
 */
export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <MotionProvider>
        <main className="min-h-screen bg-bg-900 text-text-primary">
          <HeroSystem />

          <Section space="compact">
            <Container width="narrow">
              <TerminalSimulator />
            </Container>
          </Section>
        </main>
      </MotionProvider>
    </ThemeProvider>
  );
}