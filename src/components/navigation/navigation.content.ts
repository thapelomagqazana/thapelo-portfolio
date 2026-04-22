import type { SiteNavigationItem } from "./navigation.types";

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
 */
export const PRIMARY_SITE_NAV_ITEMS: readonly SiteNavigationItem[] = [
  { id: "system", label: "System", href: "#system" },
  { id: "modules", label: "Modules", href: "#active-modules" },
  { id: "history", label: "History", href: "#operational-history" },
  { id: "credentials", label: "Credentials", href: "#credential-stack" },
  { id: "contact", label: "Contact", href: "#open-transmission" },
];