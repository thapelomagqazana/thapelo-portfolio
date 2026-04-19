import type { SystemDashboardData } from "./dashboardTypes";

/**
 * Canonical dashboard preview fixture.
 *
 * Purpose:
 * - Provide a stable default dataset for WBS 3.3.1 validation
 * - Keep the component prop-driven without requiring external data sources
 */
export const DEFAULT_SYSTEM_DASHBOARD_DATA: SystemDashboardData = {
  releaseConfidence: {
    label: "Release Confidence",
    value: "92%",
    tone: "success",
  },
  statuses: [
    {
      id: "identity",
      label: "Identity",
      status: "PASS",
    },
    {
      id: "modules",
      label: "Modules",
      status: "PASS",
    },
    {
      id: "readiness",
      label: "Readiness",
      status: "WARN",
      value: "Review",
    },
  ],
  kpis: [
    {
      id: "systems-built",
      label: "Systems Built",
      value: "12+",
      tone: "neutral",
    },
    {
      id: "quality-focus",
      label: "Quality Focus",
      value: "High",
      tone: "success",
    },
    {
      id: "domains",
      label: "Domains Worked In",
      value: "4",
      tone: "neutral",
    },
  ],
} as const;