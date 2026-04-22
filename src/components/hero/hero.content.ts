import type { HeroContent } from "./hero.types";

/**
 * Canonical hero copy for the landing page.
 *
 * This content is optimized for:
 * - immediate niche recognition
 * - systems and reliability positioning
 * - realistic, non-gimmicky dashboard proof
 * - fast recruiter and engineering-manager scanning
 */
export const HERO_CONTENT: HeroContent = {
  status: {
    label: "System Status: Operational",
    tone: "pass",
  },
  modeLabel: "Mode: Release Analysis",
  kicker: "Mission Profile",
  title: "I build systems that decide whether software is safe to release.",
  summary:
    "Software engineer focused on release confidence, software quality, and production-ready delivery.",

  recruiterSignals: [
    { id: "software-engineer", label: "Software Engineer" },
    { id: "test-analyst", label: "Test Analyst" },
    { id: "reliability-mindset", label: "Reliability Mindset" },
    { id: "release-confidence", label: "Release Confidence" },
  ],

  managerSignals: [
    {
      id: "systems-thinking",
      label: "Systems Thinking",
      description:
        "Approaches software as an operational system with dependencies, risk, and downstream impact.",
    },
    {
      id: "release-reliability",
      label: "Release Reliability",
      description:
        "Uses quality, telemetry, and readiness signals to strengthen production confidence before release.",
    },
    {
      id: "production-judgment",
      label: "Production Judgment",
      description:
        "Frames engineering work in terms of safety, discipline, trade-offs, and delivery confidence.",
    },
    {
      id: "quality-critical-fit",
      label: "Quality-Critical Fit",
      description:
        "Aligned with teams that care about QA-heavy workflows, platform thinking, and operational correctness.",
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
  secondaryActionLabel: "View Modules",
  secondaryActionHref: "#active-modules",

  /**
   * Core engineering-style dashboard metrics.
   *
   * Rules:
   * - Must feel operational, not decorative
   * - Must imply a believable release-readiness model
   * - Must remain understandable in a few seconds
   * - Must support engineering-manager scanning
   */
  metrics: [
    { label: "Tests", value: "PASS", tone: "pass" },
    { label: "Security", value: "PASS", tone: "pass" },
    { label: "Performance", value: "WARNING", tone: "warn" },
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
      value: "Quality-Driven Delivery",
    },
    {
      label: "Profile Fit",
      value: "Software Engineer / Test Analyst",
    },
    {
      label: "Operational Lens",
      value: "Release Confidence",
    },
  ],

  infoSignals: [
    {
      label: "Current Focus",
      value: "BrikByteOS — Release Intelligence",
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
    { id: "line-1", content: "Running analysis..." },
    { id: "line-2", content: "✔ Systems thinking detected" },
    { id: "line-3", content: "✔ Release reliability signal: HIGH" },
    { id: "line-4", content: "✔ Candidate: STRATEGIC FIT" },
  ],
};