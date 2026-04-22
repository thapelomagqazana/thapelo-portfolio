import type { HeroContent } from "./hero.types";

/**
 * Canonical hero copy for the landing page.
 *
 * This content is optimized for:
 * - immediate visitor guidance
 * - systems-thinking differentiation
 * - clear status and operating-mode visibility
 */
export const HERO_CONTENT: HeroContent = {
  status: {
    label: "System Status: Operational",
    tone: "pass",
  },

  /**
   * Visible operating mode shown near the hero status.
   *
   * The label should remain concise, system-like, and readable in under
   * a few seconds.
   */
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
      href: "#flagship-module",
      priority: "tertiary",
      outcome: "open_flagship_module",
      ariaLabel: "Inspect BrikByteOS flagship module",
    },
  ],

  /**
   * Legacy compatibility fields preserved for older rendering paths.
   */
  primaryActionLabel: "Run Inspection",
  primaryActionHref: "#terminal-preview",
  secondaryActionLabel: "View Modules",
  secondaryActionHref: "#active-modules",

  metrics: [
    { label: "Release Confidence", value: "92%", tone: "info" },
    { label: "Security", value: "PASS", tone: "pass" },
    { label: "Performance", value: "WARNING", tone: "warn" },
    { label: "Verdict", value: "APPROVED", tone: "pass" },
  ],

  terminalCommand: "bb run --portfolio",
  terminalLines: [
    { id: "line-1", content: "Running analysis..." },
    { id: "line-2", content: "✔ Systems thinking detected" },
    { id: "line-3", content: "✔ Release reliability signal: HIGH" },
    { id: "line-4", content: "✔ Candidate: STRATEGIC FIT" },
  ],
};