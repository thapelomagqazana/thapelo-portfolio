import type { 
  HeroInfoSignal, 
  HeroMetric, 
  HeroRecruiterSummarySignal
 } from "./hero.types";
import { Panel } from "../ui/Panel";
import { StatusChip } from "../ui/StatusChip";
import { MetricCard } from "./MetricCard";
import { HeroInfoSignals } from "./HeroInfoSignals";
import { RecruiterSummarySignals } from "./RecruiterSummarySignals";
import { heroPanelSweepClass } from "../../lib/motion";

/**
 * Props for the hero dashboard summary panel.
 */
export interface SystemDashboardProps {
  readonly metrics: readonly HeroMetric[];
  readonly recruiterSummarySignals: readonly HeroRecruiterSummarySignal[];
  readonly infoSignals: readonly HeroInfoSignal[];
}

/**
 * Live system dashboard for the hero.
 *
 * Responsibilities:
 * - Provide a fast visual proof layer for the visitor
 * - Reinforce the systems and reliability positioning immediately
 * - Summarize strengths in a credible, engineering-style way
 * - Surface practical signals without making the panel feel gimmicky
 *
 * Motion:
 * - Uses a subtle telemetry sweep to suggest activity
 * - Keeps movement ambient and non-blocking
 *
 * Accessibility:
 * - Exposes the panel as a named dashboard region
 * - Uses explicit labels and values for all signals
 * - Keeps meaning readable without relying on color alone
 */
export function SystemDashboard({
  metrics,
  recruiterSummarySignals,
  infoSignals,
}: SystemDashboardProps) {
  return (
    <Panel
      className={`${heroPanelSweepClass()} grid gap-5`}
      role="region"
      aria-label="Live system panel"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="type-label">Live System Panel</p>
          <p className="mt-2 text-sm text-text-secondary">
            Release-confidence and quality signals aligned to a systems-first engineering profile.
          </p>
        </div>

        <StatusChip label="Live" tone="info" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="border-t border-border-subtle pt-1">
        <RecruiterSummarySignals signals={recruiterSummarySignals} />
      </div>

      <div className="border-t border-border-subtle pt-1">
        <p className="type-label">Current Signals</p>

        <div className="mt-4">
          <HeroInfoSignals signals={infoSignals} />
        </div>
      </div>
    </Panel>
  );
}