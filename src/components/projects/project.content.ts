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

      decisions: [
        {
          title: "CLI-first execution",
          reason:
            "Release checks need to run close to developer and CI workflows before a dashboard exists.",
          benefit:
            "Keeps Phase 0 fast, scriptable, portable, and easier to validate with tests.",
        },
        {
          title: "Static adapter registry",
          reason:
            "Dynamic plugin loading would increase runtime uncertainty and security risk.",
          benefit:
            "Preserves deterministic adapter selection and safer execution boundaries.",
        },
        {
          title: "Normalized evidence model",
          reason:
            "Different tools produce incompatible outputs that are difficult to compare directly.",
          benefit:
            "Creates one inspection surface for scoring, gating, and later reporting.",
        },
      ],
      tradeOffs: [
        {
          title: "CLI before full dashboard",
          gain:
            "Faster validation loop and lower implementation complexity for the MVP.",
          cost:
            "Less visual onboarding for non-technical reviewers in the first release.",
        },
        {
          title: "Four adapters only",
          gain:
            "Keeps scope focused around unit, UI, performance, and security signals.",
          cost:
            "Limits early ecosystem coverage until the core contract proves stable.",
        },
      ],
      constraints: [
        "Deterministic execution",
        "No dynamic plugin loading",
        "Local artifact-first evidence",
        "Phase 0 scope control",
      ],

      lessons: [
        {
          title: "Determinism beats flexibility early",
          insight:
            "Release tooling becomes harder to trust when adapter behavior, ordering, or outputs are unpredictable.",
          futureUse:
            "Future BrikByteOS features should preserve stable contracts before expanding plugin flexibility.",
        },
        {
          title: "Small CLIs can create strong confidence signals",
          insight:
            "A focused command-line workflow can expose release readiness before a full dashboard exists.",
          futureUse:
            "Future work can add UI layers without weakening the CLI-first evidence model.",
        },
        {
          title: "Evidence matters more than claims",
          insight:
            "Release confidence is stronger when decisions are backed by artifacts, scores, and policy results.",
          futureUse:
            "Future modules should keep evidence capture visible, inspectable, and easy to verify.",
        },
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

      decisions: [
        {
          title: "System modules over cards",
          reason:
            "Generic portfolio cards hide engineering value and make projects harder to compare.",
          benefit:
            "Projects become scannable operational units with purpose, maturity, and outcomes visible.",
        },
        {
          title: "Inline inspection mode",
          reason:
            "Visitors should inspect deeper details without losing page context.",
          benefit:
            "Keeps discovery fast while still allowing technical depth when needed.",
        },
      ],
      tradeOffs: [
        {
          title: "Structured signals over screenshots",
          gain:
            "Improves recruiter scanning and keeps project value visible without visual clutter.",
          cost:
            "Less immediate visual showcase until screenshot evidence is added later.",
        },
        {
          title: "Single-page flow",
          gain:
            "Preserves guided discovery from identity to proof to trust.",
          cost:
            "Requires careful content hierarchy to avoid long-page fatigue.",
        },
      ],
      constraints: [
        "Recruiter-first scan speed",
        "Mobile readability",
        "Consistent section structure",
        "Avoiding generic portfolio patterns",
      ],
    },
  },
];