import { Link, useParams } from "react-router";
import { Container, Section } from "../components/layout";
import { StatusChip, SystemBadge } from "../components/system";
import { Card, Panel, Text } from "../components/ui";
import { ROUTE_PATHS } from "../app/routePaths";
import { getProjectByRouteId, normalizeProjectId } from "../routes/projectRoute";
import type { JSX } from "react";

/**
 * Project detail route page.
 *
 * Responsibilities:
 * - Read the `id` route parameter
 * - Resolve known vs unknown project identifiers deterministically
 * - Render a bounded detail shell without introducing full project feature logic
 *
 * Behavior:
 * - known project id   -> renders project route shell
 * - unknown project id -> renders graceful fallback state
 */
export function ProjectDetailPage(): JSX.Element {
  const { id } = useParams();
  const normalizedId = normalizeProjectId(id);
  const project = getProjectByRouteId(id);

  return (
    <main className="min-h-screen bg-bg-900 text-text-primary">
      <Section space="hero">
        <Container width="narrow">
          <Panel variant="focus">
            <SystemBadge variant="info">project detail route</SystemBadge>

            <Text as="h1" variant="display" className="mt-4">
              {project ? project.title : "Unknown Project Route"}
            </Text>

            <Text variant="body-muted" className="mt-4">
              Route parameter received:{" "}
              <span className="font-mono text-accent-green">
                {normalizedId || "(missing)"}
              </span>
            </Text>

            <div className="mt-6">
              <StatusChip status={project ? "PASS" : "WARN"} />
            </div>
          </Panel>
        </Container>
      </Section>

      <Section space="standard" surface="subtle">
        <Container width="narrow">
          {project ? (
            <Card>
              <Text variant="label">project summary</Text>
              <Text variant="body" className="mt-4">
                {project.summary}
              </Text>

              <Text variant="caption" className="mt-6">
                This is the bounded placeholder shell for a known project detail
                route in WBS 2.1.1.
              </Text>
            </Card>
          ) : (
            <Card>
              <Text variant="label">fallback state</Text>
              <Text as="h2" variant="h2" className="mt-4">
                Project route not found
              </Text>

              <Text variant="body-muted" className="mt-4">
                The requested project identifier is not part of the approved
                routing baseline. The application remains stable and provides a
                bounded fallback instead of crashing.
              </Text>

              <div className="mt-6">
                <Link
                  to={ROUTE_PATHS.home}
                  className="inline-flex h-11 items-center justify-center rounded-[var(--radius-panel-md)] border border-border-strong px-4 text-sm font-medium text-text-primary transition hover:bg-bg-750"
                >
                  Return Home
                </Link>
              </div>
            </Card>
          )}
        </Container>
      </Section>
    </main>
  );
}