import type { CanonicalStatus } from "../../lib/status";

/**
 * Canonical dashboard preview contracts.
 *
 * Purpose:
 * - Keep dashboard preview data structured and reusable
 * - Prevent hardcoded metric blocks from being scattered through JSX
 * - Keep the preview lightweight and bounded
 */

/**
 * Primary release-confidence metric model.
 */
export interface ReleaseConfidenceMetric {
  /**
   * Label shown above or beside the value.
   */
  readonly label: string;

  /**
   * Primary value shown as the high-emphasis metric.
   *
   * Example:
   * - "92%"
   * - "Approved"
   */
  readonly value: string;

  /**
   * Optional semantic tone used by KPI display.
   */
  readonly tone?: "neutral" | "success" | "warning" | "danger";
}

/**
 * Canonical status item used in the dashboard preview.
 */
export interface DashboardStatusItem {
  /**
   * Stable identifier for rendering.
   */
  readonly id: string;

  /**
   * Short user-facing label.
   */
  readonly label: string;

  /**
   * Canonical semantic status value.
   */
  readonly status: CanonicalStatus;

  /**
   * Optional supporting value for the status chip.
   */
  readonly value?: string;
}

/**
 * Canonical KPI summary item used in the dashboard preview.
 */
export interface DashboardKpiItem {
  /**
   * Stable identifier for rendering.
   */
  readonly id: string;

  /**
   * User-facing KPI label.
   */
  readonly label: string;

  /**
   * KPI summary value.
   */
  readonly value: string;

  /**
   * Optional semantic tone for display emphasis.
   */
  readonly tone?: "neutral" | "success" | "warning" | "danger";
}

/**
 * Canonical dashboard preview model.
 */
export interface SystemDashboardData {
  /**
   * Primary release-confidence summary metric.
   */
  readonly releaseConfidence: ReleaseConfidenceMetric;

  /**
   * Bounded set of system status indicators.
   */
  readonly statuses: readonly DashboardStatusItem[];

  /**
   * Bounded set of KPI preview summaries.
   */
  readonly kpis: readonly DashboardKpiItem[];
}