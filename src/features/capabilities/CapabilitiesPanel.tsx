import type { HTMLAttributes, JSX } from "react";

import { Grid } from "../../components/layout";
import { SystemBadge } from "../../components/system";
import { Card, Panel, Text } from "../../components/ui";
import { classNames } from "../../lib/classNames";
import { DEFAULT_CAPABILITIES_PANEL_CONTENT } from "./capabilitiesData";
import type { CapabilitiesPanelContent, CapabilityItem } from "./capabilitiesTypes";

/**
 * Props for the canonical CapabilitiesPanel component.
 *
 * Responsibilities:
 * - Present core capability categories in a concise, scannable format
 * - Reuse the canonical design system and shared layout primitives
 * - Remain bounded and avoid drifting into a resume or project evidence system
 */
export interface CapabilitiesPanelProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /**
   * Optional content override.
   *
   * Defaults to the canonical capability fixture.
   */
  readonly content?: CapabilitiesPanelContent;
}

/**
 * Renders a single capability item card.
 *
 * Purpose:
 * - Keep capability-item structure consistent
 * - Prevent repeated item markup in the panel component
 */
function CapabilityCard({ title, summary }: CapabilityItem): JSX.Element {
  return (
    <Card className="h-full bg-bg-800/80">
      <Text as="h4" variant="h3" className="text-[1.125rem]">
        {title}
      </Text>

      <Text variant="body-muted" className="mt-3">
        {summary}
      </Text>
    </Card>
  );
}

/**
 * Canonical CapabilitiesPanel component.
 *
 * Design goals:
 * - Make strengths easy to scan
 * - Keep the content bounded and recruiter-friendly
 * - Integrate cleanly into the About section layout
 *
 * Accessibility notes:
 * - Uses semantic heading structure
 * - Keeps summaries readable on smaller screens
 * - Groups capability items in a consistent, understandable structure
 */
export function CapabilitiesPanel({
  content = DEFAULT_CAPABILITIES_PANEL_CONTENT,
  className,
  ...props
}: CapabilitiesPanelProps): JSX.Element {
  return (
    <Panel
      variant="focus"
      className={classNames("h-full", className)}
      data-component="capabilities-panel"
      {...props}
    >
      <SystemBadge variant="info">core strengths</SystemBadge>

      <Text as="h3" variant="h3" className="mt-4">
        {content.title}
      </Text>

      {content.intro ? (
        <Text variant="body-muted" className="mt-4">
          {content.intro}
        </Text>
      ) : null}

      <Grid columns={2} gap="lg" className="mt-6">
        {content.items.map((item) => (
          <CapabilityCard key={item.id} {...item} />
        ))}
      </Grid>
    </Panel>
  );
}