import type { ContactAction, OpportunityFit } from "./contact.types";

/**
 * Canonical contact actions.
 *
 * Purpose:
 * - Keep contact paths real, visible, and low-friction.
 * - Avoid fake placeholders or broken recruiter conversion paths.
 */
export const CONTACT_ACTIONS: readonly ContactAction[] = [
  {
    label: "Start a Conversation",
    href: "mailto:tapsmcgzee8@gmail.com",
    type: "EMAIL",
    priority: "PRIMARY",
    ariaLabel: "Email Thapelo Magqazana to discuss opportunities or collaboration",
    icon: "email",
  },
  {
    label: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/thapelo-magqazana-90632a174/",
    type: "LINKEDIN",
    priority: "SECONDARY",
    ariaLabel: "View Thapelo Magqazana LinkedIn profile",
    icon: "linkedin",
  },
  {
    label: "GitHub Systems",
    href: "https://github.com/thapelomagqazana",
    type: "GITHUB",
    priority: "SECONDARY",
    ariaLabel: "View Thapelo Magqazana GitHub projects and systems",
    icon: "github",
  },
  {
    label: "View Resume",
    href: "/resume.pdf",
    type: "RESUME",
    priority: "SECONDARY",
    ariaLabel: "View Thapelo Magqazana resume",
    icon: "resume",
  },
];

export const OPPORTUNITY_FIT: OpportunityFit = {
  availability: "SELECTIVE",

  opportunityTypes: [
    "CONTRACT",
    "COLLABORATION",
    "FOUNDING_BUILD",
    "OPEN_SOURCE",
  ],

  bestFitAreas: [
    "Release intelligence systems",
    "Quality & reliability engineering",
    "Developer tooling & platforms",
    "Frontend system interfaces",
    "Production-ready software delivery",
  ],

  workMode: "Remote-first · Hybrid (Johannesburg/Pretoria)",

  note:
    "Best aligned with teams building systems where release confidence, reliability, and engineering discipline are critical. Particularly interested in QA-heavy environments, developer tooling, and products that require strong validation, risk awareness, and production-ready delivery.",
};