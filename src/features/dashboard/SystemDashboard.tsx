import type { HTMLAttributes, JSX } from "react";

import { FadeIn, GlowPulse, SlideUp } from "../../components/motion";
import { Grid } from "../../components/layout";
import { KPIValue, StatusChip, SystemBadge } from "../../components/system";
import { Card, Panel, Text } from "../../components/ui";
import { classNames } from "../../lib/classNames";
import { DEFAULT_SYSTEM_DASHBOARD_DATA } from "./dashboardData";
import type { SystemDashboardData } from "./dashboardTypes";

/**
 * Props for the canonical SystemDashboard component.
 *
 * Responsibilities:
 * - Render the bounded dashboard-like proof layer
 * - Display one primary release-confidence metric
 * - Display a concise row/grid of status indicators
 * - Display a bounded KPI summary set
 *
 * Notes:
 * - This is not a real analytics dashboard
 * - It does not fetch, compute, or update live data
 */
export interface SystemDashboardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /**
   * Structured dashboard preview data.
   *
   * Defaults to the canonical dashboard fixture.
   */
  readonly data?: SystemDashboardData;

  /**
   * Optional dashboard heading.
   */
  readonly title?: string;
}

/**
 * Canonical SystemDashboard component.
 *
 * Design goals:
 * - Reinforce the “System Boot Experience”
 * - Present a bounded proof layer beneath or within the hero
 * - Keep release confidence visually primary
 *
 * Accessibility notes:
 * - All metrics have readable labels
 * - Status meaning is conveyed by text, not color alone
 * - Layout remains readable at smaller viewport sizes
 */
export function SystemDashboard({
  data = DEFAULT_SYSTEM_DASHBOARD_DATA,
  title = "System Dashboard Preview",
  className,
  ...props
}: SystemDashboardProps): JSX.Element {
  return (
    <div
      className={classNames("w-full", className)}
      data-component="system-dashboard"
      {...props}
    >
      <SlideUp>
        <Panel variant="focus" className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,140,255,0.10),transparent_35%)]"
          />

          <div className="relative">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <SystemBadge variant="info">preview</SystemBadge>
              <Text variant="label">proof layer</Text>
            </div>

            <Text as="h2" variant="h2" className="mt-4">
              {title}
            </Text>

            <Text variant="body-muted" className="mt-4 max-w-2xl">
              A bounded operational preview of readiness, state visibility, and
              portfolio capability using canonical metrics and status primitives.
            </Text>

            <div className="mt-8">
              <GlowPulse>
                <KPIValue
                  label={data.releaseConfidence.label}
                  value={data.releaseConfidence.value}
                  tone={data.releaseConfidence.tone ?? "neutral"}
                  className="border-border-active/40 bg-bg-800/90"
                />
              </GlowPulse>
            </div>

            <div className="mt-8">
              <Text variant="label">status overview</Text>

              <div className="mt-4 flex flex-wrap gap-3">
                {data.statuses.map((item) => (
                  <FadeIn key={item.id}>
                    <StatusChip
                      status={item.status}
                      value={item.value ?? item.label}
                    />
                  </FadeIn>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <Text variant="label">kpi summary</Text>

              <Grid columns={3} gap="lg" className="mt-4">
                {data.kpis.map((item) => (
                  <FadeIn key={item.id}>
                    <Card>
                      <KPIValue
                        label={item.label}
                        value={item.value}
                        tone={item.tone ?? "neutral"}
                        className="border-0 bg-transparent p-0 shadow-none"
                      />
                    </Card>
                  </FadeIn>
                ))}
              </Grid>
            </div>
          </div>
        </Panel>
      </SlideUp>
    </div>
  );
}