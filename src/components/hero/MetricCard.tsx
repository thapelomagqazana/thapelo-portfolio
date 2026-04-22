import type { CSSProperties } from "react";
import type { HeroMetric } from "./hero.types";
import { StatusChip } from "../ui/StatusChip";
import { metricRevealClass } from "../../lib/motion";

/**
 * CSS custom properties used by the MetricCard motion layer.
 */
interface MetricCardStyleProperties extends CSSProperties {
  readonly "--metric-stagger-index"?: number;
}

/**
 * Props for the MetricCard component.
 */
export interface MetricCardProps {
  /**
   * Metric content rendered by this card.
   */
  readonly metric: HeroMetric;

  /**
   * Zero-based reveal index used for staggered dashboard animation.
   *
   * Purpose:
   * - Keep reveal order deterministic
   * - Avoid hardcoded animation delays in markup
   */
  readonly revealIndex?: number;
}

/**
 * Compact dashboard metric card.
 *
 * Responsibilities:
 * - Render one clear engineering-style signal
 * - Preserve label + value readability
 * - Reinforce meaning with a status chip without relying on color alone
 * - Support lightweight, staggered load-in motion
 *
 * Accessibility:
 * - Exposes a stable labeled group for each metric
 * - Keeps the signal understandable via text even without color
 * - Avoids live-region behavior because the animation is decorative, not semantic
 */
export function MetricCard({
  metric,
  revealIndex = 0,
}: MetricCardProps) {
  const style: MetricCardStyleProperties = {
    "--metric-stagger-index": revealIndex,
  };

  return (
    <div
      role="group"
      aria-label={`Metric: ${metric.label}`}
      className={`rounded-[var(--radius-panel-lg)] border border-border-subtle bg-bg-800/70 p-4 transition-transform duration-200 ease-out hover:-translate-y-0.5 ${metricRevealClass()}`}
      style={style}
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