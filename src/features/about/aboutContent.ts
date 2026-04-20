import type { AboutSectionContent } from "./aboutTypes";

/**
 * Canonical default About section content used for layout validation.
 *
 * Purpose:
 * - Provide stable content for the layout shell
 * - Keep WBS 4.1.1 focused on composition rather than deep content authoring
 * - Allow later story/capabilities tasks to replace the defaults safely
 */
export const DEFAULT_ABOUT_SECTION_CONTENT: AboutSectionContent = {
  eyebrow: "mission profile",
  title: "Identity and capability in one structured view",
  intro:
    "The About section explains who I am, how I think, and where I create the most value in software and quality-driven systems.",
  story: {
    title: "Story",
    paragraphs: [
      "A transition from construction studies into software engineering shaped a practical, systems-oriented way of thinking.",
      "The goal is not just to build interfaces, but to design reliable, understandable systems that people can trust.",
    ],
  },
  capabilities: {
    title: "Capabilities",
    items: ["QA", "DevOps", "Frontend", "Systems thinking"],
  },
} as const;