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
    purpose:
      "Release intelligence system for validating software readiness before production deployment.",
    summary:
      "Release intelligence system that evaluates software readiness through quality, security, performance, and policy signals.",
    techStack: [
      { label: "Runtime", items: ["Go"] },
      { label: "Policy", items: ["OPA"] },
      { label: "Quality", items: ["Playwright", "k6", "Trivy"] },
    ],
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
    problem:
      "Fragmented quality tools can create false confidence before software reaches production.",
    outcome:
      "Unified release signals improve readiness decisions and reduce hidden delivery risk.",
    outcomeIndicators: [
      { label: "Clearer release evidence" },
      { label: "Reduced readiness ambiguity" },
      { label: "Policy-based go/no-go checks" },
    ],
  },
  {
    id: "portfolio-control-room",
    title: "Portfolio Control Room",
    tag: "ACTIVE MODULE",
    status: "IN_DEVELOPMENT",
    purpose:
      "System-styled portfolio interface for turning career proof into operational signals.",
    summary:
      "Control-room portfolio interface that presents identity, projects, and proof as structured system signals.",
    techStack: [
      { label: "Frontend", items: ["React", "TypeScript"] },
      { label: "UI", items: ["Tailwind"] },
      { label: "Quality", items: ["Vitest"] },
    ],
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
      {
        label: "View Module",
        href: "#portfolio-control-room",
        variant: "primary",
      },
      {
        label: "Inspect UI",
        href: "#portfolio-control-room",
        variant: "secondary",
      },
    ],
    problem:
      "Traditional portfolios make engineering value hard to scan under time pressure.",
    outcome:
      "Operational project modules help recruiters and managers evaluate relevance faster.",
    outcomeIndicators: [
      { label: "Faster profile scanning" },
      { label: "Clearer capability signals" },
      { label: "Consistent module structure" },
    ],
  },
];