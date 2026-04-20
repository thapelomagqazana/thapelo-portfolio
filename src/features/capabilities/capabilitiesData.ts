import type { CapabilitiesPanelContent } from "./capabilitiesTypes";

/**
 * Canonical capability panel fixture.
 *
 * Purpose:
 * - Provide stable default content for WBS 4.2.1
 * - Ensure the panel is prop-driven rather than hard-coded inline in JSX
 * - Keep the required capability categories centralized and testable
 */
export const DEFAULT_CAPABILITIES_PANEL_CONTENT: CapabilitiesPanelContent = {
  title: "Capabilities",
  intro:
    "A concise view of the technical strengths that shape how systems are designed, tested, and delivered.",
  items: [
    {
      id: "qa",
      title: "QA",
      summary:
        "Focused on structured testing, defect prevention, and confidence in software behavior before release.",
    },
    {
      id: "devops",
      title: "DevOps",
      summary:
        "Interested in reliable delivery pipelines, deployment discipline, and operational visibility across environments.",
    },
    {
      id: "frontend",
      title: "Frontend",
      summary:
        "Builds clean, usable interfaces that translate system complexity into understandable experiences.",
    },
    {
      id: "systems-thinking",
      title: "Systems thinking",
      summary:
        "Approaches software as an interconnected system where architecture, quality, flow, and trust all matter.",
    },
  ],
} as const;