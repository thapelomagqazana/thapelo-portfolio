import { Link } from "react-router";
import { Container, Grid, Section } from "../components/layout";
import { SystemBadge } from "../components/system";
import { Card, Panel, Text } from "../components/ui";
import { PROJECT_ROUTE_RECORDS } from "../data/projects";
import { getProjectDetailPath } from "../app/routePaths";
import type { JSX } from "react";

/**
 * Home route page.
 *
 * Responsibilities:
 * - Serve as the canonical landing route for the portfolio app
 * - Provide a bounded, testable home shell
 * - Offer deterministic navigation to known project detail routes
 *
 * Notes:
 * - This route intentionally remains a shell/preview surface for the routing baseline
 * - It should not absorb full homepage feature complexity in this WBS
 */
export function HomePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-bg-900 text-text-primary">
      <Section space="hero">
        <Container width="wide">
          <Panel variant="focus">
            <SystemBadge variant="info">home route</SystemBadge>

            <Text as="h1" variant="display" className="mt-4">
              Canonical routing baseline is operational
            </Text>

            <Text variant="body-muted" className="mt-4 max-w-3xl">
              This home route acts as the application entry point and provides
              deterministic navigation into bounded project detail routes.
            </Text>
          </Panel>
        </Container>
      </Section>

      <Section space="standard" surface="subtle">
        <Container>
          <Text as="h2" variant="h2">
            Available Project Routes
          </Text>

          <Grid columns={3} gap="lg" className="mt-6">
            {PROJECT_ROUTE_RECORDS.map((project) => (
              <Card key={project.id}>
                <Text variant="label">project id</Text>
                <Text variant="mono-output" className="mt-3">
                  {project.id}
                </Text>

                <Text as="h3" variant="h3" className="mt-4">
                  {project.title}
                </Text>

                <Text variant="body-muted" className="mt-3">
                  {project.summary}
                </Text>

                <div className="mt-6">
                  <Link
                    to={getProjectDetailPath(project.id)}
                    className="inline-flex h-11 items-center justify-center rounded-[var(--radius-panel-md)] border border-accent-cyan bg-accent-cyan px-4 text-sm font-medium text-bg-900 transition hover:border-accent-blue hover:bg-accent-blue"
                  >
                    Open Project Route
                  </Link>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </main>
  );
}