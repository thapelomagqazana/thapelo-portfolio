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
    label: "Release Confidence",
    summary:
      "I focus on systems that help teams understand whether software is safe to ship.",
    capabilities: ["QA", "Policy Thinking", "Evidence Capture", "Risk Signals"],
    evidence: "Supported by BrikByteOS and QA-focused work experience.",
    emphasis: "PRIMARY",
  },
  {
    label: "Quality Engineering",
    summary:
      "I connect testing, defect analysis, and system behavior to better release decisions.",
    capabilities: ["Test Analysis", "Defect Reporting", "Validation"],
    evidence: "Applied across Test Analyst and Software Tester roles.",
    emphasis: "SECONDARY",
  },
  {
    label: "Systems Thinking",
    summary:
      "I break down workflows, constraints, and interactions to reason about real system behavior.",
    capabilities: ["Debugging", "Requirements", "Architecture Thinking"],
    evidence:
      "Strengthened through construction, QA, and software delivery work.",
    emphasis: "SECONDARY",
  },
];

/**
 * Evidence-backed skill capability panels.
 *
 * Purpose:
 * - Present skills as earned capability signals.
 * - Connect every skill group to real project, work, or learning evidence.
 */
export const SKILL_CAPABILITY_PANELS: readonly SkillCapabilityPanel[] = [
  {
    category: "QUALITY_ENGINEERING",
    title: "Quality Engineering",
    summary:
      "Validating system behavior, identifying defects, and improving release confidence.",
    items: ["Test Analysis", "Manual Testing", "Defect Reporting", "Usability Testing"],
    evidence: [
      {
        type: "WORK_EXPERIENCE",
        source: "Test Analyst @ Alula Technologies",
        proof:
          "Applied structured QA processes across enterprise systems to improve release readiness.",
        href: "#operational-history",
      },
      {
        type: "PROJECT",
        source: "BrikByteOS",
        proof:
          "Designed around release evidence, quality signals, scoring, and policy gates.",
        href: "#brikbyteos",
      },
    ],
  },
  {
    category: "FRONTEND_ENGINEERING",
    title: "Frontend Engineering",
    summary:
      "Building structured, responsive interfaces for real-world systems.",
    items: ["React", "TypeScript", "Responsive UI", "Component Systems"],
    evidence: [
      {
        type: "WORK_EXPERIENCE",
        source: "Web Developer @ C. Steinweg Bridge Ltd",
        proof:
          "Built a responsive cargo tracking interface with interactive map-based workflows.",
        href: "#operational-history",
      },
      {
        type: "PROJECT",
        source: "Portfolio Control Room",
        proof:
          "Designed a system-style interface using reusable components and structured content.",
        href: "#portfolio-control-room",
      },
    ],
  },
  {
    category: "SYSTEMS_THINKING",
    title: "Systems Thinking",
    summary:
      "Understanding system behavior, constraints, and interactions across workflows.",
    items: ["Debugging", "Requirement Analysis", "Problem Decomposition"],
    evidence: [
      {
        type: "WORK_EXPERIENCE",
        source: "Software Tester @ C. Steinweg Bridge Ltd",
        proof:
          "Connected requirements, defects, database impacts, and usability concerns during testing.",
        href: "#operational-history",
      },
      {
        type: "CREDENTIAL",
        source: "BSc Construction Studies @ Wits",
        proof:
          "Built structured problem-solving habits through planning, constraints, and project reasoning.",
        href: "#credential-stack",
      },
    ],
  },
  {
    category: "DEVOPS_FOUNDATIONS",
    title: "DevOps Foundations",
    summary:
      "Packaging and serving applications with stable deployment basics.",
    items: ["Docker", "Nginx", "Deployment Workflows", "Environment Setup"],
    evidence: [
      {
        type: "WORK_EXPERIENCE",
        source: "C. Steinweg Bridge Ltd",
        proof:
          "Used Docker and Nginx to deploy a client-facing React application.",
        href: "#operational-history",
      },
      {
        type: "PROJECT",
        source: "BrikByteOS",
        proof:
          "Built around CLI-first release workflows and CI/CD-aligned inspection concepts.",
        href: "#brikbyteos",
      },
    ],
  },
  {
    category: "TOOLING_WORKFLOW",
    title: "Tooling & Workflow",
    summary:
      "Using tools and workflow discipline to support maintainable delivery.",
    items: ["Git", "Issue Tracking", "Technical Documentation", "Collaboration"],
    evidence: [
      {
        type: "WORK_EXPERIENCE",
        source: "QA and development roles",
        proof:
          "Used structured reporting, collaboration, and documentation to make work traceable.",
        href: "#operational-history",
      },
    ],
  },
];