import { PRIMARY_SITE_NAV_ITEMS } from "../../components/navigation/navigation.content";
import type { SiteSectionId } from "../../components/navigation/navigation.types";

/**
 * Resolve the canonical section heading for a given section id.
 *
 * Responsibilities:
 * - Keep section headings aligned with navigation naming
 * - Prevent drift between navigation labels and destination headings
 * - Provide a stable lookup for page composition code
 */
export function getSectionHeading(sectionId: SiteSectionId): string {
  const item = PRIMARY_SITE_NAV_ITEMS.find((entry) => entry.id === sectionId);

  if (!item) {
    throw new Error(`Unknown section heading for section id: ${sectionId}`);
  }

  return item.sectionHeading;
}