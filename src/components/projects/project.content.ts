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
    variant: "flagship",
    status: "ACTIVE",
    categories: ["SYSTEMS", "QUALITY"],
    purpose:
      "Release intelligence system that unifies quality signals to determine whether software is safe to ship.",
    summary:
      "Release intelligence system that evaluates software readiness through quality, security, performance, and policy signals.",
    techStack: [
      { label: "Runtime", items: ["Go"] },
      { label: "Policy", items: ["OPA"] },
      { label: "Quality", items: ["Playwright", "k6", "Trivy"] },
    ],
    capabilities: [
      "Release validation",
      "Quality orchestration",
      "Policy gates",
      "Evidence capture",
      "Risk scoring",
    ],
    actions: [
      { label: "View BrikByteOS", href: "#brikbyteos", variant: "primary" },
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

    inspection: {
      overview:
        "BrikByteOS evaluates release readiness by collecting quality, security, performance, and policy signals into one inspection flow.",
      architecture:
        "CLI core → static adapters → normalized evidence → scoring → policy gate → inspectable run output.",
      problemContext:
        "Modern pipelines often pass while important quality, security, or performance risks remain fragmented across separate tools.",
      impact:
        "BrikByteOS turns fragmented signals into a clearer release decision so teams can reason about readiness before shipping.",
      evidence: [
        "Adapter-based execution model",
        "Normalized evidence artifacts",
        "Policy-gated release verdict",
      ],
    },
  },
  {
    id: "portfolio-control-room",
    title: "Portfolio Control Room",
    tag: "ACTIVE MODULE",
    variant: "standard",
    status: "IN_DEVELOPMENT",
    categories: ["FRONTEND", "SYSTEMS"],
    purpose:
      "System-styled portfolio interface for turning career proof into operational signals.",
    summary:
      "Control-room portfolio interface that presents identity, projects, and proof as structured system signals.",
    techStack: [
      { label: "Frontend", items: ["React", "TypeScript"] },
      { label: "UI", items: ["Tailwind"] },
      { label: "Quality", items: ["Vitest"] },
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

    inspection: {
      overview:
        "Portfolio Control Room presents identity, projects, and proof as structured operational signals instead of a generic portfolio layout.",
      architecture:
        "Page shell → navigation flow → hero system → mission profile → active modules → trust and contact sections.",
      problemContext:
        "Traditional portfolios often bury relevant evidence behind long text, inconsistent cards, and weak project hierarchy.",
      impact:
        "The interface makes career value easier to scan by exposing purpose, maturity, outcomes, and capabilities upfront.",
      evidence: [
        "System-module project cards",
        "Recruiter-focused navigation flow",
        "Tested responsive section structure",
      ],
    },
  },
];