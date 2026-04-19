import type { JSX } from "react";

import { Container, Section } from "../components/layout";
import { Text } from "../components/ui";
import { SystemDashboard } from "../features/dashboard";
import { HeroSystem } from "../features/hero";
import { TerminalSimulator } from "../features/terminal";
import { MotionProvider } from "./MotionProvider";
import { ThemeProvider } from "./ThemeProvider";
import { MainLayout } from "../components/layout-shell";

/**
 * Root application validation entry component.
 *
 * Responsibilities:
 * - Compose application-wide providers required by the validation surface
 * - Apply the theme baseline before rendering UI
 * - Render the full Phase 3 entry experience in one bounded validation flow
 *
 * Validation scope:
 * - HeroSystem
 * - TerminalSimulator
 * - SystemDashboard
 *
 * Notes:
 * - This intentionally bypasses application routing
 * - Use this only while validating Phase 3 components in isolation
 * - Restore AppRouter after focused validation is complete
 */
export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <MotionProvider>
        <MainLayout>
          {/* HERO */}
          <HeroSystem />

          {/* TERMINAL */}
          <Section space="compact" aria-labelledby="terminal-preview-title">
            <Container width="narrow">
              <Text
                as="h2"
                variant="h2"
                id="terminal-preview-title"
                className="mb-6"
              >
                Terminal Simulation Preview
              </Text>

              <TerminalSimulator />
            </Container>
          </Section>

          {/* DASHBOARD */}
          <Section space="compact" aria-labelledby="dashboard-preview-title">
            <Container width="wide">
              <Text
                as="h2"
                variant="h2"
                id="dashboard-preview-title"
                className="mb-6"
              >
                System Dashboard Preview
              </Text>

              <SystemDashboard />
            </Container>
          </Section>
        </MainLayout>
      </MotionProvider>
    </ThemeProvider>
  );
}