import type { ProjectDetail } from "./projectDetailModel";

/**
 * Canonical project-detail fixtures.
 *
 * Purpose:
 * - Provide stable structured data for project-detail routing and rendering
 * - Keep detail-page content data-driven
 * - Support deterministic lookup for `/projects/:id`
 */
export const PROJECT_DETAIL_FIXTURES: readonly ProjectDetail[] = [
  {
    id: "brikbyteos",
    name: "BrikByteOS",
    status: "ACTIVE",
    description:
      "A release-intelligence operating system focused on evidence-driven confidence, policy gates, and structured release orchestration.",
    summary:
      "A systems-first release platform designed to unify quality evidence, policy evaluation, and operational confidence before software ships.",
    techStack: ["Go", "OPA", "JSON Schema", "CLI", "React"],
    href: "/projects/brikbyteos",
    problem: {
      title: "Problem",
      paragraphs: [
        "Software teams often rely on fragmented evidence spread across tests, checks, and release workflows, which makes confidence difficult to communicate clearly.",
        "The challenge was to design a system that could turn scattered quality signals into one structured release-intelligence view.",
      ],
    },
    approach: {
      title: "Approach",
      paragraphs: [
        "The solution was approached as a control layer with explicit contracts, deterministic evidence flow, and bounded policy evaluation.",
        "The design focused on making release readiness visible, explainable, and repeatable rather than leaving it implicit in disconnected tool outputs.",
      ],
    },
    architecture: {
      title: "Architecture",
      paragraphs: [
        "The architecture uses a modular model with a CLI-centered orchestration layer, structured schemas, policy gates, and normalized evidence inputs.",
        "Each subsystem is intentionally separated so that validation, scoring, and decision-support can evolve without collapsing into one monolithic workflow.",
      ],
    },
    outcome: {
      title: "Outcome",
      paragraphs: [
        "The result is a clearer release-intelligence concept that frames software delivery as a system of confidence rather than a loose collection of checks.",
        "It also provides a strong foundation for future expansion into dashboards, policy packs, and operational decision surfaces.",
      ],
    },
  },
  {
    id: "cargo-pulse",
    name: "Cargo Pulse",
    status: "DEPLOYED",
    description:
      "A cargo-tracking web experience designed to translate logistics visibility into a clear, marketing-ready frontend system.",
    summary:
      "A frontend-led product experience that communicates cargo visibility clearly while aligning with business-facing marketing and usability goals.",
    techStack: ["React", "Bootstrap", "Leaflet", "Docker", "Nginx"],
    href: "/projects/cargo-pulse",
    problem: {
      title: "Problem",
      paragraphs: [
        "Cargo tracking products can feel technically dense and visually unclear to external users who need immediate understanding.",
        "The challenge was to make visibility feel useful, readable, and commercially credible without losing operational substance.",
      ],
    },
    approach: {
      title: "Approach",
      paragraphs: [
        "The project was approached through a marketing-focused frontend experience with a strong emphasis on clarity, trust, and scannable structure.",
        "Interactive maps and clear information layout were used to connect system capability with user understanding.",
      ],
    },
    architecture: {
      title: "Architecture",
      paragraphs: [
        "The implementation used a React-based frontend, mapping integration with Leaflet, and deployment through Docker and Nginx.",
        "The architecture remained intentionally lightweight while still supporting a polished client-facing experience.",
      ],
    },
    outcome: {
      title: "Outcome",
      paragraphs: [
        "The result was a deployed cargo-tracking experience that translated operational visibility into a cleaner user-facing system.",
        "It demonstrated the ability to bridge frontend presentation, business communication, and technical implementation.",
      ],
    },
  },
] as const;