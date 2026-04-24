import type { AboutMissionProfileContent } from "./about.types";

/**
 * Canonical About / Mission Profile content.
 *
 * Content goals:
 * - Explain the transition from construction to software clearly
 * - Stay concise and professionally relevant
 * - Reinforce the portfolio's systems, quality, and reliability direction
 */
// export const ABOUT_MISSION_PROFILE_CONTENT: AboutMissionProfileContent = {
//   kicker: "Mission Profile",
//   title: "From construction to software, with systems thinking intact.",
//   story:
//   "My background began in construction studies, where planning, coordination, sequencing, and disciplined execution were essential to delivering complex work reliably and safely. That environment required structured thinking, clear communication, and accountability across moving parts. I later transitioned into software development and testing, bringing that systems-oriented mindset into engineering environments. Today, I focus on software quality, release confidence, and building systems that are easier to understand, validate, and ship safely. That journey shaped how I approach delivery: not just writing code, but improving reliability, reducing uncertainty, strengthening feedback loops, and helping teams move toward consistent, production-ready software outcomes.",

//   valueSignals: [
//     { label: "Systems Thinking" },
//     { label: "Software Quality" },
//     { label: "Reliability Mindset" },
//     { label: "Release Confidence" },
//   ],

//   /**
//    * Reliability/quality framing signals for quick About-section scanning.
//    *
//    * Rules:
//    * - Must align with the hero and dashboard language
//    * - Must remain concrete and professionally grounded
//    */
//   reliabilitySignals: [
//     { label: "Software Quality" },
//     { label: "Reliability Mindset" },
//     { label: "Structured Delivery" },
//     { label: "Release Confidence" },
//   ],

//   /**
//    * Capability groups for fast engineering-manager scanning.
//    *
//    * Rules:
//    * - Keep the domains concrete and professionally legible
//    * - Avoid soft-skill dumping and raw tool-list framing
//    * - Reinforce the same positioning already present in the hero and story
//    */
//   capabilityGroups: [
//     {
//       title: "Systems Thinking",
//       summary: "Structured reasoning across moving parts and delivery context.",
//       items: [
//         { label: "End-to-end awareness" },
//         { label: "Dependency reasoning" },
//       ],
//     },
//     {
//       title: "Software Quality",
//       summary: "Confidence-building through validation and disciplined checking.",
//       items: [
//         { label: "Test design" },
//         { label: "Regression focus" },
//       ],
//     },
//     {
//       title: "Reliability / Release",
//       summary: "Engineering work framed around readiness and dependable outcomes.",
//       items: [
//         { label: "Release confidence" },
//         { label: "Validation mindset" },
//       ],
//     },
//     {
//       title: "Technical Execution",
//       summary: "Practical delivery across application and systems-facing work.",
//       items: [
//         { label: "Frontend delivery" },
//         { label: "DevOps foundations" },
//       ],
//     },
//   ],
// };
/**
 * Canonical About / Mission Profile content.
 *
 * Purpose:
 * - Break the story into readable modules
 * - Preserve construction → software → current value flow
 * - Reinforce reliability, quality, and systems positioning
 */
export const ABOUT_MISSION_PROFILE_CONTENT: AboutMissionProfileContent = {
  kicker: "Mission Profile",
  title: "From construction to software, with systems thinking intact.",
  storyModules: [
    {
      title: "Origin",
      body:
        "My background began in construction studies, where planning, coordination, sequencing, and disciplined execution were essential to delivering complex work reliably and safely.",
    },
    {
      title: "Transition",
      body:
        "I later transitioned into software development and testing, carrying that structured mindset into engineering environments where clarity, validation, and delivery discipline matter.",
    },
    {
      title: "Current Value",
      body:
        "Today, I focus on software quality, reliability, release confidence, and systems thinking so teams can reduce uncertainty and move toward dependable software outcomes.",
    },
  ],

  valueSignals: [
    { label: "Release Confidence", value: "High" },
    { label: "Reliability Focus", value: "Strong" },
    { label: "Systems Thinking", value: "End-to-end" },
  ],

  capabilityGroups: [
    {
      title: "Systems Thinking",
      items: [
        { label: "End-to-end awareness" },
        { label: "Dependency reasoning" },
      ],
    },
    {
      title: "Software Quality",
      items: [
        { label: "Test design" },
        { label: "Regression focus" },
      ],
    },
    {
      title: "Reliability / Release",
      items: [
        { label: "Release validation" },
        { label: "Failure awareness" },
      ],
    },
  ],
};