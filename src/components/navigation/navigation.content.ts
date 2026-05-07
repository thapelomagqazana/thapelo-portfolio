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
    fullLabel: "Mission Control",
    ariaLabel: "Navigate to mission control section",
    href: "#system",
    sectionHeading: "Mission Control",
  },
  {
    id: "modules",
    shortLabel: "Modules",
    fullLabel: "Product Systems",
    ariaLabel: "Navigate to product systems section",
    href: "#active-modules",
    sectionHeading: "Product Systems",
  },
  {
    id: "history",
    shortLabel: "History",
    fullLabel: "Delivery Record",
    ariaLabel: "Navigate to delivery record section",
    href: "#operational-history",
    sectionHeading: "Delivery Record",
  },
  {
    id: "credentials",
    shortLabel: "Proof",
    fullLabel: "Credential Stack",
    ariaLabel: "Navigate to credential stack section",
    href: "#credential-stack",
    sectionHeading: "Credential Stack",
  },
  {
    id: "skills",
    shortLabel: "Capabilities",
    fullLabel: "Engineering Capabilities",
    ariaLabel: "Navigate to engineering capabilities section",
    href: "#skills",
    sectionHeading: "Engineering Capabilities",
  },
  {
    id: "contact",
    shortLabel: "Contact",
    fullLabel: "Start Transmission",
    ariaLabel: "Navigate to contact section",
    href: "#open-transmission",
    sectionHeading: "Start Transmission",
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