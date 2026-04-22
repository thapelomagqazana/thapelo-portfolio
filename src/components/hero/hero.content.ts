import type { HeroContent } from "./hero.types";

/**
 * Canonical hero copy for the landing page.
 *
 * This content intentionally prioritizes:
 * - immediate identity clarity
 * - differentiation from generic developer portfolios
 * - concise, high-signal messaging
 */
export const HERO_CONTENT: HeroContent = {
  status: {
    label: "System Status: Operational",
    tone: "pass",
  },
  modeLabel: "Mode: Release Analysis",
  kicker: "Control Room / Mission Control",
  title: "I build systems that decide whether software is safe to release.",
  summary:
    "Software engineer focused on release confidence, quality systems, and production-ready delivery.",
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
    { id: "line-3", content: "✔ Skills validated" },
    { id: "line-4", content: "✔ Candidate: APPROVED" },
  ],
};