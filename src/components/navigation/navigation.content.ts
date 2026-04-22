import type {
  NavigationLabelStyle,
  SiteNavigationItem,
} from "./navigation.types";

/**
 * Canonical primary navigation items.
 *
 * Rules:
 * - Keep labels short and scannable
 * - Preserve the intended mission flow:
 *   1. identity
 *   2. proof
 *   3. history
 *   4. trust
 *   5. action
 * - Ensure labels remain coherent across desktop, mobile, and section headings
 */
export const PRIMARY_SITE_NAV_ITEMS: readonly SiteNavigationItem[] = [
  {
    id: "system",
    shortLabel: "System",
    fullLabel: "System",
    ariaLabel: "Navigate to system section",
    href: "#system",
    sectionHeading: "System",
  },
  {
    id: "modules",
    shortLabel: "Modules",
    fullLabel: "Active Modules",
    ariaLabel: "Navigate to active modules section",
    href: "#active-modules",
    sectionHeading: "Active Modules",
  },
  {
    id: "history",
    shortLabel: "History",
    fullLabel: "Operational History",
    ariaLabel: "Navigate to operational history section",
    href: "#operational-history",
    sectionHeading: "Operational History",
  },
  {
    id: "credentials",
    shortLabel: "Credentials",
    fullLabel: "Credential Stack",
    ariaLabel: "Navigate to credential stack section",
    href: "#credential-stack",
    sectionHeading: "Credential Stack",
  },
  {
    id: "contact",
    shortLabel: "Contact",
    fullLabel: "Open Transmission",
    ariaLabel: "Navigate to open transmission section",
    href: "#open-transmission",
    sectionHeading: "Open Transmission",
  },
];

/**
 * Resolve the visible navigation label for a given style.
 *
 * Purpose:
 * - Keep label-style switching centralized
 * - Prevent components from duplicating style selection logic
 */
export function getNavigationLabel(
  item: SiteNavigationItem,
  style: NavigationLabelStyle,
): string {
  return style === "enhanced" ? item.fullLabel : item.shortLabel;
}