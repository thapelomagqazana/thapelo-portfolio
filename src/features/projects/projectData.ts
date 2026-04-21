import type { ProjectModule } from "./projectTypes";

/**
 * Canonical example module fixtures.
 *
 * Purpose:
 * - Provide bounded data for validation and testing
 * - Keep module-card rendering driven by structured data
 * - Support early module-list/grid work without duplicating sample objects
 */
export const DEFAULT_PROJECT_MODULES: readonly ProjectModule[] = [
  {
    id: "brikbyteos",
    name: "BrikByteOS",
    status: "ACTIVE",
    description:
      "A release-intelligence operating system focused on quality orchestration, evidence-driven confidence, and structured certification workflows.",
    techStack: ["Go", "OPA", "JSON Schema", "CLI", "React"],
    href: "/projects/brikbyteos",
  },
  {
    id: "cargo-pulse",
    name: "Cargo Pulse",
    status: "DEPLOYED",
    description:
      "A marketing-focused cargo tracking experience that translates logistics visibility into a clean, engaging frontend system.",
    techStack: ["React", "Bootstrap", "Leaflet", "Docker", "Nginx"],
    href: "/projects/cargo-pulse",
  },
] as const;