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
    categories: ["SYSTEMS", "QUALITY", "DEVOPS"],
    purpose:
      "Determines whether software is safe to ship by unifying fragmented quality signals into one release decision.",
    summary:
      "Release intelligence infrastructure that evaluates production readiness across testing, security, performance, and policy enforcement.",
    techStack: [
      { label: "Runtime", items: ["Go"] },
      { label: "Policy", items: ["OPA / Rego"] },
      { label: "Quality Signals", items: ["Playwright", "k6", "Trivy", "Jest"] },
      { label: "Execution", items: ["CLI", "Artifacts", "Deterministic runs"] },
    ],
    problem:
      "Modern CI pipelines can pass while quality, security, and performance risks remain scattered across disconnected tools.",
    outcome:
      "Turns fragmented release signals into auditable evidence, risk scoring, and policy-based go/no-go decisions.",
    outcomeIndicators: [
      { label: "Deterministic release decisions" },
      { label: "Auditable evidence artifacts" },
      { label: "Reduced hidden production risk" },
    ],
    capabilities: [
      "Release validation",
      "Quality orchestration",
      "Policy-based gating",
      "Evidence capture",
      "Risk scoring",
      "Inspectable run output",
    ],
    actions: [
      {
        label: "Inspect BrikByteOS",
        href: "#brikbyteos",
        variant: "primary",
        kind: "inspect",
      },
      {
        label: "View Releases",
        href: "https://github.com/BrikByte-Studios/brikbyteos-cli-releases",
        variant: "secondary",
        kind: "docs",
      },
    ],
    inspection: {
      overview:
        "BrikByteOS inspects release readiness by collecting, normalizing, scoring, and gating quality signals in one deterministic flow.",
      architecture:
        "CLI execution → adapter orchestration → raw artifacts → normalized evidence → scoring → policy gate → inspectable verdict.",
      problemContext:
        "Engineering teams often rely on isolated tools for tests, UI checks, security scans, and performance validation. This creates fragmented evidence and weak release confidence.",
      impact:
        "BrikByteOS reframes release readiness from assumption-based confidence to evidence-driven decision-making.",
      evidence: [
        "Deterministic execution model",
        "Normalized evidence artifacts",
        "Policy-enforced release verdicts",
      ],
      decisions: [
        {
          title: "CLI-first execution",
          reason:
            "Release checks need to run close to developers, local workflows, and CI pipelines.",
          benefit:
            "Keeps the system portable, scriptable, fast to validate, and easy to automate.",
        },
        {
          title: "Static adapter registry",
          reason:
            "Dynamic plugin loading increases runtime uncertainty and security risk.",
          benefit:
            "Preserves deterministic adapter selection and safer execution boundaries.",
        },
        {
          title: "Normalized evidence model",
          reason:
            "Different tools produce incompatible outputs that are difficult to compare.",
          benefit:
            "Creates one inspection surface for scoring, gating, reporting, and future dashboards.",
        },
      ],
      tradeOffs: [
        {
          title: "CLI before dashboard",
          gain:
            "Faster MVP validation and stronger engineering foundations before visual expansion.",
          cost:
            "Less immediate visual onboarding for non-technical stakeholders.",
        },
        {
          title: "Focused adapter scope",
          gain:
            "Keeps Phase 0 concentrated on core release signals: unit, UI, performance, and security.",
          cost:
            "Limits early ecosystem coverage until the contract proves stable.",
        },
      ],
      constraints: [
        "Deterministic execution",
        "No dynamic plugin loading",
        "Artifact-first evidence",
        "Strict MVP scope control",
      ],
      lessons: [
        {
          title: "Evidence beats confidence claims",
          insight:
            "Release confidence is stronger when decisions are backed by artifacts, scores, and policy results.",
          futureUse:
            "Future modules should keep evidence visible, inspectable, and reproducible.",
        },
        {
          title: "Determinism builds trust",
          insight:
            "A release tool becomes harder to trust when outputs vary across runs.",
          futureUse:
            "Future adapter and dashboard features must preserve stable contracts first.",
        },
        {
          title: "Small CLIs can create strong release signals",
          insight:
            "A focused command-line workflow can expose release readiness before a full platform exists.",
          futureUse:
            "UI layers should enhance visibility without replacing the CLI evidence model.",
        },
      ],
      verificationLinks: [
        {
          label: "Release Artifacts",
          type: "docs",
          href: "https://github.com/BrikByte-Studios/brikbyteos-cli-releases",
          description: "Public release artifacts and distribution notes.",
        },
      ],
    },
  },

  {
    id: "stackcraft",
    title: "StackCraft",
    tag: "SYSTEM GENERATOR",
    variant: "standard",
    status: "ACTIVE",
    categories: ["SYSTEMS", "DEVOPS", "QUALITY"],
    purpose:
      "Generates production-ready software systems with built-in structure, validation, testing, and deployment foundations.",
    summary:
      "Deterministic software generation platform for scaffolding backend systems with quality gates, CI/CD, Docker, and project standards built in.",
    techStack: [
      { label: "Runtime", items: ["Node.js", "TypeScript"] },
      { label: "CLI", items: ["Commander.js", "Inquirer"] },
      { label: "Quality", items: ["Vitest", "TypeScript checks", "ESLint"] },
      { label: "Delivery", items: ["Docker", "GitHub Actions"] },
    ],
    problem:
      "Developers waste time rebuilding the same project foundations, often producing inconsistent architecture, weak validation, and fragile delivery workflows.",
    outcome:
      "Reduces setup friction by generating consistent, validated, production-aware systems from repeatable templates.",
    outcomeIndicators: [
      { label: "Faster project setup" },
      { label: "Consistent architecture" },
      { label: "Built-in quality workflow" },
    ],
    capabilities: [
      "Project scaffolding",
      "Template-driven generation",
      "Backend API foundations",
      "CI/CD workflow generation",
      "Docker environment setup",
      "Validation-ready structure",
    ],
    actions: [
      {
        label: "Inspect StackCraft",
        href: "#stackcraft",
        variant: "primary",
        kind: "inspect",
      },
      {
        label: "View Generator",
        href: "#stackcraft",
        variant: "secondary",
        kind: "link",
      },
    ],
    inspection: {
      overview:
        "StackCraft generates structured software systems from deterministic templates so new projects begin with quality, deployment, and maintainability already considered.",
      architecture:
        "CLI command → validated user input → template selection → file generation → project validation → ready-to-run system.",
      problemContext:
        "Project setup is often treated as disposable boilerplate, but weak foundations create long-term maintenance, testing, and deployment problems.",
      impact:
        "StackCraft turns project creation into a repeatable engineering workflow instead of a manual setup exercise.",
      evidence: [
        "Typed CLI command structure",
        "Template-driven project generation",
        "Validation-oriented generated output",
      ],
      decisions: [
        {
          title: "CLI-first generator",
          reason:
            "Developers need fast project generation directly from the terminal.",
          benefit:
            "Keeps StackCraft lightweight, scriptable, and easy to integrate into developer workflows.",
        },
        {
          title: "Deterministic templates",
          reason:
            "Generated systems should be predictable and reviewable.",
          benefit:
            "Improves trust, repeatability, and testability of generated output.",
        },
        {
          title: "Quality built into generation",
          reason:
            "Testing, linting, CI, and Docker should not be optional afterthoughts.",
          benefit:
            "Generated projects start closer to production-readiness from day one.",
        },
      ],
      tradeOffs: [
        {
          title: "Focused backend API MVP",
          gain:
            "Keeps the first version clear, useful, and easier to validate.",
          cost:
            "Delays support for frontend, mobile, and multi-service templates.",
        },
        {
          title: "Opinionated structure",
          gain:
            "Creates consistency and stronger defaults.",
          cost:
            "May require overrides later for teams with different conventions.",
        },
      ],
      constraints: [
        "Deterministic output",
        "Template consistency",
        "Beginner-friendly usage",
        "Production-aware defaults",
      ],
      lessons: [
        {
          title: "Scaffolding is architecture",
          insight:
            "The first generated files influence how maintainable the system becomes later.",
          futureUse:
            "Future templates should encode strong architectural decisions, not just folder structures.",
        },
        {
          title: "Defaults shape engineering behavior",
          insight:
            "When quality checks are generated by default, teams are more likely to keep them.",
          futureUse:
            "Future StackCraft templates should continue embedding quality workflows by default.",
        },
      ],
      verificationLinks: [
        {
          label: "StackCraft Module",
          type: "architecture",
          href: "#stackcraft",
          description: "Inspect the generation model and system structure.",
        },
      ],
    },
  },

  {
    id: "calorisee",
    title: "CaloriSee",
    tag: "AI APPLICATION",
    variant: "standard",
    status: "DEPLOYED",
    categories: ["DATA", "FRONTEND", "SYSTEMS"],
    purpose:
      "Helps users track food intake through AI-assisted image recognition, meal logging, and nutritional insight.",
    summary:
      "Full-stack AI application that supports food recognition, nutrition lookup, and daily meal tracking for better health awareness.",
    techStack: [
      { label: "Frontend", items: ["React"] },
      { label: "Backend", items: ["Node.js", "REST APIs"] },
      { label: "AI", items: ["Image recognition", "Nutrition data"] },
      { label: "Product", items: ["Meal logging", "User workflows"] },
    ],
    problem:
      "Manual food tracking is slow, repetitive, and easy to abandon, especially when users must search and enter every meal themselves.",
    outcome:
      "Simplifies nutrition tracking by reducing manual input and using AI-assisted recognition to speed up meal logging.",
    outcomeIndicators: [
      { label: "Reduced manual entry" },
      { label: "Faster meal logging" },
      { label: "AI-assisted nutrition workflow" },
    ],
    capabilities: [
      "Image-based food recognition",
      "Meal logging",
      "Nutrition lookup",
      "User workflow design",
      "Full-stack feature delivery",
    ],
    actions: [
      {
        label: "Inspect CaloriSee",
        href: "#calorisee",
        variant: "primary",
        kind: "inspect",
      },
      {
        label: "View App",
        href: "#calorisee",
        variant: "secondary",
        kind: "demo",
      },
    ],
    inspection: {
      overview:
        "CaloriSee applies AI-assisted food recognition to make daily nutrition tracking easier, faster, and more approachable for users.",
      architecture:
        "User image/input → recognition workflow → nutrition lookup → meal log → user-facing tracking history.",
      problemContext:
        "Health apps often fail when tracking becomes too manual. Reducing friction is essential for consistent user engagement.",
      impact:
        "CaloriSee demonstrates practical full-stack AI product thinking: user problem, workflow automation, and accessible data feedback.",
      evidence: [
        "Meal logging workflow",
        "AI-assisted recognition concept",
        "Nutrition-focused user experience",
      ],
      decisions: [
        {
          title: "Image-assisted tracking",
          reason:
            "Manual meal entry creates friction and reduces consistency.",
          benefit:
            "Makes food tracking faster and more engaging for users.",
        },
        {
          title: "Full-stack product flow",
          reason:
            "Nutrition tracking requires both user-facing interaction and reliable backend data handling.",
          benefit:
            "Demonstrates complete product delivery from interface to data workflow.",
        },
        {
          title: "Practical AI integration",
          reason:
            "AI is most useful when it removes user effort from a real workflow.",
          benefit:
            "Keeps the product grounded in utility rather than AI novelty.",
        },
      ],
      tradeOffs: [
        {
          title: "AI assistance over perfect automation",
          gain:
            "Creates a useful workflow even when recognition requires user confirmation.",
          cost:
            "May need manual correction for ambiguous foods.",
        },
        {
          title: "Simple user flow first",
          gain:
            "Keeps the product approachable and easier to test.",
          cost:
            "Advanced diet planning and personalization can come later.",
        },
      ],
      constraints: [
        "User input friction",
        "Recognition accuracy limits",
        "Nutrition data consistency",
        "Simple mobile-friendly workflow",
      ],
      lessons: [
        {
          title: "AI must reduce effort",
          insight:
            "Users benefit most when AI removes repetitive steps from a real task.",
          futureUse:
            "Future AI features should focus on workflow acceleration, not just model capability.",
        },
        {
          title: "Health workflows need trust",
          insight:
            "Nutrition outputs must be understandable and easy to verify.",
          futureUse:
            "Future versions should include clearer confidence indicators and correction flows.",
        },
      ],
      verificationLinks: [
        {
          label: "CaloriSee Module",
          type: "demo",
          href: "#calorisee",
          description: "Inspect the AI food tracking product workflow.",
        },
      ],
    },
  },

  {
    id: "portfolio-control-room",
    title: "Portfolio Control Room",
    tag: "INTERFACE SYSTEM",
    variant: "standard",
    status: "IN_DEVELOPMENT",
    categories: ["FRONTEND", "SYSTEMS", "QUALITY"],
    purpose:
      "Transforms a traditional portfolio into a mission-control interface that communicates engineering value through operational signals.",
    summary:
      "System-styled portfolio interface that presents identity, projects, experience, and proof as structured signals instead of generic portfolio cards.",
    techStack: [
      { label: "Frontend", items: ["React", "TypeScript"] },
      { label: "UI", items: ["Tailwind CSS", "Framer Motion"] },
      { label: "State", items: ["Zustand"] },
      { label: "Quality", items: ["Vitest", "Component testing"] },
    ],
    problem:
      "Traditional portfolios bury engineering value behind generic layouts, long text, and weak project hierarchy.",
    outcome:
      "Improves recruiter and engineering-manager scanning by presenting career proof as structured, inspectable system modules.",
    outcomeIndicators: [
      { label: "Faster profile scanning" },
      { label: "Clearer project hierarchy" },
      { label: "Stronger positioning signal" },
    ],
    capabilities: [
      "Design systems",
      "Interactive portfolio architecture",
      "Responsive UI",
      "Component composition",
      "Accessibility-aware structure",
      "Recruiter-focused UX",
    ],
    actions: [
      {
        label: "Inspect Interface",
        href: "#portfolio-control-room",
        variant: "primary",
        kind: "inspect",
      },
      {
        label: "View Modules",
        href: "#active-modules",
        variant: "secondary",
        kind: "link",
      },
    ],
    inspection: {
      overview:
        "Portfolio Control Room reframes the portfolio as an operational interface where every section acts like a system signal: identity, proof, capability, and trust.",
      architecture:
        "Page shell → mission-control navigation → hero system → mission profile → active modules → delivery record → credentials → transmission/contact.",
      problemContext:
        "Recruiters and engineering managers scan quickly. A portfolio must communicate fit, proof, and differentiation within seconds.",
      impact:
        "The interface makes career value easier to evaluate by turning projects into inspectable modules with purpose, outcomes, decisions, trade-offs, and evidence.",
      evidence: [
        "System-based navigation language",
        "Project inspection model",
        "Recruiter-focused content hierarchy",
      ],
      decisions: [
        {
          title: "System modules over generic cards",
          reason:
            "Generic project cards do not explain engineering judgment or project value quickly.",
          benefit:
            "Each module communicates purpose, problem, outcome, stack, and inspection detail.",
        },
        {
          title: "Mission-control theme",
          reason:
            "The visual language matches the user’s reliability, release confidence, and systems positioning.",
          benefit:
            "Creates a memorable portfolio identity aligned with BrikByteOS.",
        },
        {
          title: "Inline inspection model",
          reason:
            "Visitors should access deeper detail without losing page context.",
          benefit:
            "Supports both quick scanning and technical depth.",
        },
      ],
      tradeOffs: [
        {
          title: "Structured signals over visual noise",
          gain:
            "Improves clarity and reinforces the systems-engineer brand.",
          cost:
            "Requires disciplined copywriting to avoid feeling too abstract.",
        },
        {
          title: "Single-page flow",
          gain:
            "Guides visitors from identity to proof to contact without friction.",
          cost:
            "Requires careful section hierarchy to avoid long-page fatigue.",
        },
      ],
      constraints: [
        "Recruiter-first scan speed",
        "Mobile readability",
        "Consistent section structure",
        "Accessible interaction patterns",
        "Avoid generic portfolio clichés",
      ],
      lessons: [
        {
          title: "A portfolio is a product",
          insight:
            "The portfolio must sell engineering judgment, not merely list experience.",
          futureUse:
            "Future sections should continue translating work into proof, outcomes, and trust signals.",
        },
        {
          title: "Design must reinforce positioning",
          insight:
            "Visual style is strongest when it supports the core professional identity.",
          futureUse:
            "Future UI improvements should preserve the mission-control systems language.",
        },
        {
          title: "Recruiters need signal density",
          insight:
            "The best content is quickly scannable but still deep enough for engineering managers.",
          futureUse:
            "Future modules should keep summary, outcome, and inspection layers clearly separated.",
        },
      ],
      verificationLinks: [
        {
          label: "Portfolio Modules",
          type: "architecture",
          href: "#active-modules",
          description: "Inspect the active module structure used across the portfolio.",
        },
      ],
    },
  },
];