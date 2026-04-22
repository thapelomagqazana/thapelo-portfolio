import type { AboutMissionProfileContent } from "./about.types";

/**
 * Canonical About / Mission Profile content.
 *
 * Content goals:
 * - Explain the transition from construction to software clearly
 * - Stay concise and professionally relevant
 * - Reinforce the portfolio's systems, quality, and reliability direction
 */
export const ABOUT_MISSION_PROFILE_CONTENT: AboutMissionProfileContent = {
  kicker: "Mission Profile",
  title: "From construction to software, with systems thinking intact.",
  story:
  "My background began in construction studies, where planning, coordination, sequencing, and disciplined execution were essential to delivering complex work reliably and safely. That environment required structured thinking, clear communication, and accountability across moving parts. I later transitioned into software development and testing, bringing that systems-oriented mindset into engineering environments. Today, I focus on software quality, release confidence, and building systems that are easier to understand, validate, and ship safely. That journey shaped how I approach delivery: not just writing code, but improving reliability, reducing uncertainty, strengthening feedback loops, and helping teams move toward consistent, production-ready software outcomes.",

  valueSignals: [
    { label: "Systems Thinking" },
    { label: "Software Quality" },
    { label: "Reliability Mindset" },
    { label: "Release Confidence" },
  ],
};