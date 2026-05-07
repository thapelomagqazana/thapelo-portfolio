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

  title: "From construction systems to software reliability engineering.",

  storyModules: [
    {
      title: "Origin",
      body:
        "I started in construction studies, where failure is not theoretical. Delivering complex projects required precision in planning, sequencing, coordination, and execution under real-world constraints. Every decision had downstream impact, and reliability was non-negotiable.",
    },
    {
      title: "Transition",
      body:
        "I transitioned into software development and testing, bringing that same systems mindset into engineering. While many systems pass pipelines, they still fail in production. I became focused on understanding why—studying dependencies, failure paths, and the gap between ‘working’ and ‘reliable’.",
    },
    {
      title: "Current Value",
      body:
        "Today, I build systems that improve release confidence. My work focuses on validating software before it reaches production, reducing uncertainty, and helping teams move from pipeline success to true system reliability. This thinking drives the development of BrikByteOS and StackCraft—tools designed to make software trustworthy at scale.",
    },
  ],

  valueSignals: [
    { label: "Release Confidence", value: "Engineered" },
    { label: "Reliability Focus", value: "Production-first" },
    { label: "Systems Thinking", value: "End-to-end" },
  ],

  capabilityGroups: [
    {
      title: "Systems Thinking",
      items: [
        { label: "End-to-end system awareness" },
        { label: "Dependency & failure-path reasoning" },
      ],
    },
    {
      title: "Software Quality",
      items: [
        { label: "Structured test design" },
        { label: "Regression and edge-case focus" },
      ],
    },
    {
      title: "Reliability / Release",
      items: [
        { label: "Release validation systems" },
        { label: "Risk reduction before production" },
      ],
    },
    {
      title: "Technical Execution",
      items: [
        { label: "Full-stack development" },
        { label: "DevOps & deployment workflows" },
      ],
    },
  ],
};