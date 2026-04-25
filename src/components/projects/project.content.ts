import type { ProjectModule } from "./project.types";

/**
 * Canonical project module data.
 *
 * Purpose:
 * - Present projects as system modules instead of generic portfolio cards
 * - Keep project copy structured, testable, and easy to evolve
 * - Align project presentation with systems, reliability, and release-confidence positioning
 */
export const PROJECT_MODULES: readonly ProjectModule[] = [
  {
    id: "brikbyteos",
    title: "BrikByteOS",
    tag: "FLAGSHIP SYSTEM",
    status: "ACTIVE",
    summary:
      "Release intelligence system that evaluates software readiness through quality, security, performance, and policy signals.",
    signals: [
      { label: "Focus", value: "Release Intelligence" },
      { label: "System Type", value: "CLI / Platform" },
      { label: "Quality Signal", value: "Policy-Gated" },
    ],
    capabilities: [
      "Release validation",
      "Quality orchestration",
      "Policy gates",
      "Evidence capture",
      "Risk scoring",
    ],
    actions: [
      { label: "View Module", href: "#brikbyteos", variant: "primary" },
      { label: "Inspect System", href: "#brikbyteos", variant: "secondary" },
    ],
  },
  {
    id: "portfolio-control-room",
    title: "Portfolio Control Room",
    tag: "ACTIVE MODULE",
    status: "IN_DEVELOPMENT",
    summary:
      "System-styled portfolio interface that turns career proof into scannable operational signals.",
    signals: [
      { label: "Focus", value: "Recruiter Scanning" },
      { label: "System Type", value: "Frontend System" },
      { label: "Quality Signal", value: "Tested UI" },
    ],
    capabilities: [
      "Design systems",
      "Responsive layout",
      "Accessibility checks",
      "Component testing",
    ],
    actions: [
      { label: "View Module", href: "#portfolio-control-room", variant: "primary" },
      { label: "Inspect UI", href: "#portfolio-control-room", variant: "secondary" },
    ],
  },
];