import type { HeroMetric } from "./hero.types";
import { Panel } from "../ui/Panel";
import { StatusChip } from "../ui/StatusChip";

/**
 * Props for the hero dashboard summary panel.
 */
export interface SystemDashboardProps {
  readonly metrics: readonly HeroMetric[];
}

/**
 * Hero system dashboard.
 *
 * Responsibilities:
 * - Provide a fast visual proof layer for the visitor.
 * - Reinforce the release-confidence positioning.
 * - Keep the UI compact, readable, and above-the-fold friendly.
 *
 * Accessibility:
 * - Exposes the dashboard as a named landmark region
 * - Exposes each metric card as a named group for reliable querying
 * - Preserves readable text labels alongside visual status indicators
 */
export function SystemDashboard({ metrics }: SystemDashboardProps) {
  return (
    <Panel
      className="hero-panel-sweep grid gap-4"
      role="region"
      aria-label="Release confidence summary"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="type-label">Live System Panel</p>
          <p className="mt-2 text-sm text-text-secondary">
            Operational telemetry aligned to software release confidence.
          </p>
        </div>

        <StatusChip label="Live" tone="info" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            role="group"
            aria-label={`Metric: ${metric.label}`}
            className="rounded-[var(--radius-panel-lg)] border border-border-subtle bg-bg-800/70 p-4"
          >
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-text-muted">
              {metric.label}
            </p>

            <div className="mt-2 flex items-center justify-between gap-3">
              <p className="text-lg font-semibold text-text-primary">
                {metric.value}
              </p>

              <StatusChip
                label={metric.value}
                tone={metric.tone ?? "info"}
                className="shrink-0"
              />
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}