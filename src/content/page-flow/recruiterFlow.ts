import type { SiteSectionId } from "../../components/navigation/navigation.types";

/**
 * Canonical recruiter-first portfolio flow.
 *
 * Purpose:
 * - Preserve the intended evaluation sequence across navigation, composition,
 *   and tests
 * - Prevent accidental section reordering that weakens recruiter scanning
 * - Keep page-level mission flow explicit and easy to verify
 */
export const RECRUITER_GUIDED_FLOW: readonly SiteSectionId[] = [
  "system",
  "modules",
  "history",
  "credentials",
  "contact",
];

/**
 * Recruiter question prompts mapped to each section.
 *
 * Purpose:
 * - Keep the intent of each section explicit
 * - Make it easier to validate whether each section answers the right question
 */
export const RECRUITER_SECTION_QUESTIONS: Readonly<Record<SiteSectionId, string>> = {
  system: "Who is this candidate and what makes him different?",
  modules: "What has he built and how does he think?",
  history: "What practical experience supports the proof?",
  credentials: "What signals reinforce trust and credibility?",
  contact: "What is the next step if I want to follow up?",
};