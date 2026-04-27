import type { ContactAction } from "./contact.types";

/**
 * Canonical contact actions.
 *
 * Purpose:
 * - Keep contact paths real, visible, and low-friction.
 * - Avoid fake placeholders or broken recruiter conversion paths.
 */
export const CONTACT_ACTIONS: readonly ContactAction[] = [
  {
    label: "Email Me",
    href: "mailto:tapsmcgzee8@gmail.com",
    type: "EMAIL",
    priority: "PRIMARY",
    ariaLabel: "Email Thapelo Magqazana",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thapelo-magqazana-90632a174/",
    type: "LINKEDIN",
    priority: "SECONDARY",
    ariaLabel: "Open Thapelo Magqazana LinkedIn profile",
  },
  {
    label: "GitHub",
    href: "https://github.com/thapelomagqazana",
    type: "GITHUB",
    priority: "SECONDARY",
    ariaLabel: "Open Thapelo Magqazana GitHub profile",
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    type: "RESUME",
    priority: "SECONDARY",
    ariaLabel: "Open Thapelo Magqazana resume",
  },
];