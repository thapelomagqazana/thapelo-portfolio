import type { 
    SkillCapabilityPanel,
    DifferentiatorSignal
 } from "./skill.types";


/**
 * Canonical differentiator signals.
 *
 * Purpose:
 * - Make the strongest portfolio positioning obvious.
 * - Ensure visitors remember quality, systems, reliability, and release confidence.
 *
 * Rules:
 * - Exactly one PRIMARY differentiator.
 * - Secondary differentiators must support the primary signal.
 */
export const DIFFERENTIATOR_SIGNALS: readonly DifferentiatorSignal[] = [
  {
    label: "Release Intelligence",
    summary:
      "I design systems that determine whether software is safe to ship by turning fragmented quality signals into clear, evidence-backed release decisions.",
    capabilities: [
      "Release Validation",
      "Policy-Based Gating",
      "Evidence Capture",
      "Risk Scoring",
      "Quality Signal Aggregation",
    ],
    evidence:
      "Built through BrikByteOS and reinforced by enterprise QA experience focused on production readiness.",
    emphasis: "PRIMARY",
  },
  {
    label: "Quality & Reliability Engineering",
    summary:
      "I connect testing, defects, performance, and system behavior to strengthen reliability before software reaches production.",
    capabilities: [
      "Test Analysis",
      "Defect Investigation",
      "Regression Thinking",
      "Performance Awareness",
      "Security Signal Interpretation",
    ],
    evidence:
      "Applied across Test Analyst and Software Tester roles and formalized in BrikByteOS quality orchestration.",
    emphasis: "SECONDARY",
  },
  {
    label: "Systems Engineering Thinking",
    summary:
      "I reason about systems through dependencies, constraints, and failure paths rather than isolated features.",
    capabilities: [
      "System Decomposition",
      "Failure Path Analysis",
      "Dependency Reasoning",
      "Architecture Thinking",
    ],
    evidence:
      "Developed through construction systems, QA workflows, and building end-to-end software systems.",
    emphasis: "SECONDARY",
  },
];

/**
 * Evidence-backed skill capability panels.
 *
 * Upgraded:
 * - integrates project capabilities (BrikByteOS, StackCraft, etc.)
 * - shifts from “skills” → “engineering capability systems”
 * - increases authority and differentiation
 */
export const SKILL_CAPABILITY_PANELS: readonly SkillCapabilityPanel[] = [
  {
    category: "QUALITY_ENGINEERING",
    title: "Quality & Release Engineering",
    summary:
      "Designing validation systems that improve release confidence by turning testing and signals into actionable decisions.",
    items: [
      "Release Validation",
      "Test Analysis",
      "Defect Investigation",
      "Evidence-Based QA",
      "Risk Identification",
    ],
    evidence: [
      {
        type: "WORK_EXPERIENCE",
        source: "Test Analyst @ Alula Technologies",
        proof:
          "Applied structured QA processes across enterprise systems to reduce release ambiguity and improve readiness.",
        href: "#operational-history",
      },
      {
        type: "PROJECT",
        source: "BrikByteOS",
        proof:
          "Implements quality orchestration, scoring, and policy-based release gating.",
        href: "#brikbyteos",
      },
    ],
  },

  {
    category: "SYSTEMS_THINKING",
    title: "Systems Engineering",
    summary:
      "Understanding how systems behave under real conditions through dependencies, constraints, and execution flow.",
    items: [
      "System Decomposition",
      "Dependency Mapping",
      "Failure Analysis",
      "Workflow Modeling",
    ],
    evidence: [
      {
        type: "PROJECT",
        source: "BrikByteOS",
        proof:
          "Designed a deterministic execution pipeline from adapters → evidence → scoring → policy gate.",
        href: "#brikbyteos",
      },
      {
        type: "PROJECT",
        source: "StackCraft",
        proof:
          "Built a system generator that encodes architecture, CI/CD, and validation into reproducible templates.",
        href: "#stackcraft",
      },
    ],
  },

  {
    category: "DEVOPS_FOUNDATIONS",
    title: "DevOps & Release Systems",
    summary:
      "Building and supporting workflows that package, validate, and deliver software reliably.",
    items: [
      "CI/CD Thinking",
      "Dockerized Environments",
      "Release Pipelines",
      "Deployment Stability",
    ],
    evidence: [
      {
        type: "WORK_EXPERIENCE",
        source: "C. Steinweg Bridge Ltd",
        proof:
          "Used Docker and Nginx to deploy and serve a production-facing React application.",
        href: "#operational-history",
      },
      {
        type: "PROJECT",
        source: "StackCraft",
        proof:
          "Generates backend systems with CI/CD workflows, Docker setup, and testing built in.",
        href: "#stackcraft",
      },
    ],
  },

  {
    category: "FRONTEND_ENGINEERING",
    title: "Frontend Systems Engineering",
    summary:
      "Designing structured interfaces that translate system behavior into clear, usable workflows.",
    items: [
      "React Systems",
      "Component Architecture",
      "Responsive UI",
      "State Management",
    ],
    evidence: [
      {
        type: "WORK_EXPERIENCE",
        source: "Web Developer @ C. Steinweg Bridge Ltd",
        proof:
          "Delivered a cargo tracking interface with real-time map workflows for logistics visibility.",
        href: "#operational-history",
      },
      {
        type: "PROJECT",
        source: "Portfolio Control Room",
        proof:
          "Designed a mission-control style interface presenting engineering work as system signals.",
        href: "#portfolio-control-room",
      },
    ],
  },

  {
    category: "DATA",
    title: "Applied AI & Data Systems",
    summary:
      "Applying AI and data workflows to reduce user effort and improve real-world task efficiency.",
    items: [
      "Image Recognition Workflows",
      "Data Integration",
      "User Workflow Automation",
    ],
    evidence: [
      {
        type: "PROJECT",
        source: "CaloriSee",
        proof:
          "Built an AI-assisted food tracking system using image recognition and nutrition workflows.",
        href: "#calorisee",
      },
    ],
  },

  {
    category: "TOOLING_WORKFLOW",
    title: "Engineering Workflow & Tooling",
    summary:
      "Using structured workflows and tooling discipline to support maintainable, traceable delivery.",
    items: [
      "Git Workflows",
      "Technical Documentation",
      "Issue Tracking",
      "Collaboration Systems",
    ],
    evidence: [
      {
        type: "PROJECT",
        source: "StackCraft",
        proof:
          "Encodes best-practice project structure, tooling, and workflows into generated systems.",
        href: "#stackcraft",
      },
      {
        type: "WORK_EXPERIENCE",
        source: "QA & Development Roles",
        proof:
          "Used structured reporting and collaboration workflows to improve traceability and delivery clarity.",
        href: "#operational-history",
      },
    ],
  },
];