import type { JSX } from "react";

import { HeroSystem } from "../features/hero";
import { TerminalSimulator } from "../features/terminal";
import { SystemDashboard } from "../features/dashboard";
import { AboutSection } from "../features/about";
import { ModuleCard, DEFAULT_PROJECT_MODULES } from "../features/projects";
import { Section, Container, Grid } from "../components/layout";
import { Text } from "../components/ui";

/**
 * Canonical home page.
 *
 * Responsibilities:
 * - Render the primary portfolio landing experience
 * - Compose the entry system, about section, and project modules
 * - Remain route-owned rather than app-entry-owned
 */
export function HomePage(): JSX.Element {
  return (
    <>
      <HeroSystem
        preview={
          <div className="space-y-4">
            <TerminalSimulator />
            <SystemDashboard />
          </div>
        }
      />

      <AboutSection />

      <Section space="standard" aria-labelledby="projects-title">
        <Container width="wide">
          <Text as="h2" variant="h2" id="projects-title" className="mb-6">
            System Modules
          </Text>

          <Grid columns={2} gap="lg">
            {DEFAULT_PROJECT_MODULES.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}