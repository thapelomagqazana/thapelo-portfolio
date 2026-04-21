import type { ProjectModule } from "./projectModel";
import { assertProjectModule } from "./projectValidation";

/**
 * Canonical example project-module fixtures.
 *
 * Purpose:
 * - Provide bounded example data for rendering and testing
 * - Prove the canonical model is usable in real UI scenarios
 * - Create a stable source of truth for early project-module work
 */
const RAW_PROJECT_MODULES: readonly ProjectModule[] = [
  {
    id: "brikbyteos",
    name: "BrikByteOS",
    status: "ACTIVE",
    description:
      "A release-intelligence operating system focused on evidence-driven confidence, policy gates, and structured release orchestration.",
    techStack: ["Go", "OPA", "JSON Schema", "CLI", "React"],
    href: "/projects/brikbyteos",
  },
  {
    id: "cargo-pulse",
    name: "Cargo Pulse",
    status: "DEPLOYED",
    description:
      "A cargo-tracking web experience designed to translate logistics visibility into a clear, marketing-ready frontend system.",
    techStack: ["React", "Bootstrap", "Leaflet", "Docker", "Nginx"],
    href: "/projects/cargo-pulse",
  },
] as const;

/**
 * Runtime assertion pass for all canonical fixtures.
 *
 * Purpose:
 * - Catch invalid fixture drift immediately during module import in development/test
 * - Keep the dataset aligned with the canonical model
 */
RAW_PROJECT_MODULES.forEach(assertProjectModule);

/**
 * Canonical exported project-module fixture set.
 */
export const DEFAULT_PROJECT_MODULES: readonly ProjectModule[] = RAW_PROJECT_MODULES;