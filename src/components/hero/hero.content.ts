import type { HeroContent } from "./hero.types";

/**
 * Canonical hero copy for the landing page.
 *
 * This content is optimized for:
 * - immediate recruiter recognition
 * - systems-thinking differentiation
 * - release-confidence positioning
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
    { id: "line-2", content: "✔ Projects loaded" },
    { id: "line-3", content: "✔ Recruiter fit classified" },
    { id: "line-4", content: "✔ Candidate: APPROVED" },
  ],
};