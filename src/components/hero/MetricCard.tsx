import type { HeroMetric } from "./hero.types";
import { StatusChip } from "../ui/StatusChip";

/**
 * Props for the MetricCard component.
 */
export interface MetricCardProps {
  readonly metric: HeroMetric;
}

/**
 * Compact dashboard metric card.
 *
 * Responsibilities:
 * - Render one clear engineering-style signal
 * - Preserve label + value readability
 * - Reinforce meaning with a status chip without relying on color alone
 *
 * Accessibility:
 * - Exposes a stable labeled group for each metric
 * - Keeps the signal understandable via text even without color
 */
export function MetricCard({ metric }: MetricCardProps) {
  return (
    <div
      role="group"
      aria-label={`Metric: ${metric.label}`}
      className="rounded-[var(--radius-panel-lg)] border border-border-subtle bg-bg-800/70 p-4 transition-transform duration-200 ease-out hover:-translate-y-0.5"
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
  );
}