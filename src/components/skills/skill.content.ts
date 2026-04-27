import type { SkillCapabilityGroup } from "./skill.types";

/**
 * Canonical skill capability groups.
 *
 * Purpose:
 * - Keep skill content structured, credible, and easy to scan.
 * - Connect tools/practices to real capability areas.
 */
export const SKILL_CAPABILITIES: readonly SkillCapabilityGroup[] = [
  {
    label: "Frontend Engineering",
    items: ["React", "TypeScript", "Responsive UI", "Component Systems"],
    context:
      "Used to build structured, interactive interfaces for real-world applications.",
  },
  {
    label: "Quality Engineering",
    items: ["Test Analysis", "Defect Reporting", "Manual Testing", "Usability Testing"],
    context:
      "Used to validate system behavior and improve release confidence.",
  },
  {
    label: "Systems Thinking",
    items: ["Debugging", "System Analysis", "Problem Decomposition"],
    context:
      "Used to understand system behavior, constraints, and root causes.",
  },
  {
    label: "DevOps Foundations",
    items: ["Docker", "Nginx", "Deployment", "Environment Setup"],
    context:
      "Used to package, deploy, and stabilize applications in production-like environments.",
  },
  {
    label: "Tooling & Workflow",
    items: ["Git", "Issue Tracking", "Technical Documentation", "Collaboration"],
    context:
      "Used to support delivery, communication, and maintainable engineering workflows.",
  },
];