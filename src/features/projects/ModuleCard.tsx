import type { HTMLAttributes, JSX } from "react";

import { StatusChip, SystemBadge } from "../../components/system";
import { Badge, Card, Text } from "../../components/ui";
import { classNames } from "../../lib/classNames";
import type { ProjectModule, ProjectStatus } from "./projectTypes";

/**
 * Props for the canonical ModuleCard component.
 *
 * Responsibilities:
 * - Render one project as a bounded system-module summary
 * - Present name, status, description, and tech stack in a scannable hierarchy
 * - Optionally support semantic navigation when a module href is provided
 *
 * Notes:
 * - This component remains intentionally bounded
 * - It does not absorb project-detail logic or analytics concerns
 */
export interface ModuleCardProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  /**
   * Structured module data.
   */
  readonly module: ProjectModule;
}

/**
 * Maps a project/module status into the canonical PASS/WARN/FAIL-style
 * status chip vocabulary available in the shared status system.
 *
 * Rationale:
 * - ACTIVE is treated as a live/in-progress state needing attention/focus
 * - DEPLOYED is treated as a stable success-like state
 */
function mapProjectStatusToChipStatus(
  status: ProjectStatus,
): "PASS" | "WARN" {
  return status === "DEPLOYED" ? "PASS" : "WARN";
}

/**
 * Renders the inner module-card content once so it can be reused by both
 * presentational and navigation-enabled modes.
 */
function ModuleCardBody({ module }: { readonly module: ProjectModule }): JSX.Element {
  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <SystemBadge variant="info">module</SystemBadge>

          <Text
            as="h3"
            variant="h3"
            className="mt-4 break-words text-[1.125rem]"
          >
            {module.name}
          </Text>
        </div>

        <StatusChip
          status={mapProjectStatusToChipStatus(module.status)}
          value={module.status}
          size="sm"
        />
      </div>

      <Text variant="body-muted" className="mt-4">
        {module.description}
      </Text>

      <div className="mt-6">
        <Text variant="label">tech stack</Text>

        <div className="mt-3 flex flex-wrap gap-2">
          {module.techStack.map((tech) => (
            <Badge key={tech} variant="neutral">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
}

/**
 * Canonical ModuleCard component.
 *
 * Design goals:
 * - Frame projects as system modules, not generic portfolio tiles
 * - Keep the visual hierarchy scannable and consistent
 * - Support both presentational-only and navigation-enabled usage
 *
 * Accessibility notes:
 * - If `href` exists, the card renders as a semantic link wrapper
 * - If `href` is absent, the card remains presentational
 * - Status is always conveyed with text, not color alone
 */
export function ModuleCard({
  module,
  className,
  ...props
}: ModuleCardProps): JSX.Element {
  const cardClasses = classNames(
    "h-full border-border-subtle bg-bg-800/85 transition duration-200 ease-out",
    "hover:border-border-active/60 hover:shadow-[var(--shadow-panel-focus)]",
    className,
  );

  if (module.href) {
    return (
      <a
        href={module.href}
        className="block rounded-[var(--radius-panel-lg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-900"
        data-component="module-card"
        {...props}
      >
        <Card className={cardClasses}>
          <ModuleCardBody module={module} />
        </Card>
      </a>
    );
  }

  return (
    <Card
      className={cardClasses}
      data-component="module-card"
      {...props}
    >
      <ModuleCardBody module={module} />
    </Card>
  );
}