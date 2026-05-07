import type { HeroContent } from "./hero.types";

/**
 * Canonical hero copy for the landing page.
 *
 * Upgraded for:
 * - authority and conviction
 * - stronger differentiation
 * - realistic system behavior
 * - immediate recruiter signal clarity
 */
export const HERO_CONTENT: HeroContent = {
  status: {
    label: "System Status: Operational",
    tone: "pass",
  },

  modeLabel: "Mode: Release Analysis",

  kicker: "Mission Profile",

  title: "I design systems that determine whether software is safe to ship.",

  summary:
    "Release-focused software engineer specializing in reliability, quality validation, and production readiness. I build systems that move teams from pipeline success to real release confidence.",

  recruiterSignals: [
    { id: "software-engineer", label: "Software Engineer" },
    { id: "test-analyst", label: "Test Analyst" },
    { id: "release-engineering", label: "Release Engineering" },
    { id: "reliability-systems", label: "Reliability Systems" },
  ],

  managerSignals: [
    {
      id: "systems-thinking",
      label: "Systems Thinking",
      description:
        "Treats software as an interconnected system with dependencies, failure modes, and cascading impact.",
    },
    {
      id: "release-reliability",
      label: "Release Reliability",
      description:
        "Builds validation layers that ensure software is production-ready before release—not just passing CI.",
    },
    {
      id: "production-judgment",
      label: "Production Judgment",
      description:
        "Makes engineering decisions through the lens of risk, safety, and long-term system behavior.",
    },
    {
      id: "quality-critical-fit",
      label: "Quality-Critical Fit",
      description:
        "Best aligned with teams where correctness, validation, and release discipline are non-negotiable.",
    },
  ],

  actions: [
    {
      id: "run-inspection",
      label: "Run Inspection",
      href: "#terminal-preview",
      priority: "primary",
      outcome: "open_terminal_preview",
      ariaLabel: "Run portfolio inspection",
    },
    {
      id: "view-modules",
      label: "View Modules",
      href: "#active-modules",
      priority: "secondary",
      outcome: "navigate_to_modules",
      ariaLabel: "View portfolio modules",
    },
    {
      id: "inspect-brikbyteos",
      label: "Inspect BrikByteOS",
      href: "#active-modules",
      priority: "tertiary",
      outcome: "open_flagship_module",
      ariaLabel: "Inspect BrikByteOS flagship module",
    },
  ],

  primaryActionLabel: "Run Inspection",
  primaryActionHref: "#terminal-preview",

  secondaryActionLabel: "View Systems",
  secondaryActionHref: "#active-modules",

  /**
   * Operational dashboard metrics
   * Slight imperfection = realism = credibility
   */
  metrics: [
    { label: "Tests", value: "PASS", tone: "pass" },
    { label: "Security", value: "PASS", tone: "pass" },
    { label: "Performance", value: "DEGRADED", tone: "warn" },
    { label: "Release Confidence", value: "92%", tone: "info" },
    { label: "Verdict", value: "APPROVED", tone: "pass" },
  ],

  recruiterSummarySignals: [
    {
      label: "Engineering Style",
      value: "Systems & Reliability",
    },
    {
      label: "Primary Strength",
      value: "Release Validation",
    },
    {
      label: "Profile Fit",
      value: "Software / QA / Release Engineer",
    },
    {
      label: "Operational Lens",
      value: "Production Readiness",
    },
  ],

  infoSignals: [
    {
      label: "Current Focus",
      value: "BrikByteOS — Release Intelligence Infrastructure",
    },
    {
      label: "Core Stack",
      value: "Go, React, TypeScript, Docker",
    },
    {
      label: "Availability",
      value: "Open to Opportunities",
    },
  ],

  terminalCommand: "bb run --portfolio",

  terminalLines: [
    { id: "line-1", content: "Initializing release analysis..." },
    { id: "line-2", content: "✔ Systems thinking: DETECTED" },
    { id: "line-3", content: "✔ Quality discipline: HIGH" },
    { id: "line-4", content: "✔ Reliability signal: STRONG" },
    { id: "line-5", content: "⚠ Performance regression: MINOR" },
    { id: "line-6", content: "✔ Candidate classification: HIGH-CONFIDENCE FIT" },
  ],
};