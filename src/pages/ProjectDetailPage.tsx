import type { JSX } from "react";
import { useParams } from "react-router-dom";

import { Container, Section } from "../components/layout";
import { StatusChip, SystemBadge } from "../components/system";
import { Card, Text } from "../components/ui";
import { findProjectDetailById, getProjectDetailSections } from "../features/projects/projectDetailUtils";
import type { ProjectDetail } from "../features/projects/projectDetailModel";

/**
 * Maps project-module status to the canonical status-chip vocabulary.
 *
 * Rationale:
 * - DEPLOYED is presented as a pass-like stable state
 * - ACTIVE is presented as a warn-like active/in-progress state
 */
function mapProjectStatusToChipStatus(
  status: ProjectDetail["status"],
): "PASS" | "WARN" {
  return status === "DEPLOYED" ? "PASS" : "WARN";
}

/**
 * Bounded not-found state for unknown project ids.
 *
 * Responsibilities:
 * - Fail gracefully when the route id does not resolve
 * - Keep the UI bounded and readable
 * - Avoid crashing or showing a blank screen
 */
function ProjectNotFoundState({ id }: { readonly id?: string }): JSX.Element {
  return (
    <Section space="standard" aria-labelledby="project-not-found-title">
      <Container width="narrow">
        <SystemBadge variant="warning">not found</SystemBadge>

        <Text
          as="h1"
          variant="h1"
          id="project-not-found-title"
          className="mt-4"
        >
          Project module not found
        </Text>

        <Text variant="body-muted" className="mt-4">
          The requested project detail could not be resolved from the canonical
          project dataset.
        </Text>

        {id ? (
          <Text variant="mono-output" className="mt-6">
            REQUESTED_ID={id}
          </Text>
        ) : null}
      </Container>
    </Section>
  );
}

/**
 * Canonical project detail route and view.
 *
 * Responsibilities:
 * - Resolve a project detail from the route parameter
 * - Render structured project-detail content
 * - Fail gracefully when the route id is invalid
 *
 * Accessibility notes:
 * - Uses semantic heading hierarchy
 * - Keeps detail sections structured and readable
 */
export function ProjectDetailPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <ProjectNotFoundState />;
  }

  const project = findProjectDetailById(id);

  if (!project) {
    return <ProjectNotFoundState id={id} />;
  }

  const sections = getProjectDetailSections(project);

  return (
    <Section
      space="standard"
      aria-labelledby="project-detail-title"
      data-page="project-detail"
    >
      <Container width="wide">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <SystemBadge variant="info">project detail</SystemBadge>
            <StatusChip
              status={mapProjectStatusToChipStatus(project.status)}
              value={project.status}
            />
          </div>

          <Text
            as="h1"
            variant="h1"
            id="project-detail-title"
            className="mt-4"
          >
            {project.name}
          </Text>

          <Text variant="body-muted" className="mt-4">
            {project.summary ?? project.description}
          </Text>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <SystemBadge key={tech}>{tech}</SystemBadge>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          {sections.map((section) => (
            <Card key={section.title}>
              <Text as="h2" variant="h2">
                {section.title}
              </Text>

              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph, index) => (
                  <Text
                    key={`${section.title}-paragraph-${index}`}
                    variant="body-muted"
                  >
                    {paragraph}
                  </Text>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}