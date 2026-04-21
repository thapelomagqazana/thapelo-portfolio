import type { JSX } from "react";

import { HeroSystem } from "../features/hero";
import { TerminalSimulator } from "../features/terminal";
import { SystemDashboard } from "../features/dashboard";
import { AboutSection } from "../features/about";
import { ModuleCard, DEFAULT_PROJECT_MODULES } from "../features/projects";
import { MotionProvider } from "./MotionProvider";
import { ThemeProvider } from "./ThemeProvider";
import { MainLayout } from "../components/layout-shell";
import { Section, Container, Grid } from "../components/layout";
import { Text } from "../components/ui";

/**
 * Root application validation entry component.
 *
 * Validation scope:
 * - HeroSystem (with preview)
 * - AboutSection
 * - ModuleCard system
 */
export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <MotionProvider>
        <MainLayout>
          {/* HERO */}
          <HeroSystem
            preview={
              <div className="space-y-4">
                <TerminalSimulator />
                <SystemDashboard />
              </div>
            }
          />

          {/* ABOUT */}
          <AboutSection />

          {/* PROJECT MODULES */}
          <Section space="default" aria-labelledby="projects-title">
            <Container width="wide">
              <Text
                as="h2"
                variant="h2"
                id="projects-title"
                className="mb-6"
              >
                System Modules
              </Text>

              <Grid columns={2} gap="lg">
                {DEFAULT_PROJECT_MODULES.map((module) => (
                  <ModuleCard key={module.id} module={module} />
                ))}
              </Grid>
            </Container>
          </Section>
        </MainLayout>
      </MotionProvider>
    </ThemeProvider>
  );
}