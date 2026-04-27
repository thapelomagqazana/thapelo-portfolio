import { useMemo, useState } from "react";

import { useActiveSection } from "../../hooks/useActiveSection";
import { MobileNavSheet } from "./MobileNavSheet";
import { MobileNavTrigger } from "./MobileNavTrigger";
import { PRIMARY_SITE_NAV_ITEMS } from "./navigation.content";
import type { NavigationLabelStyle } from "./navigation.types";
import { SiteNavLink } from "./SiteNavLink";
import { QuickContactLink } from "../contact/QuickContactLink";

/**
 * Sticky primary site navigation.
 *
 * Responsibilities:
 * - Keep section navigation available while scrolling.
 * - Reflect the active section clearly and persistently.
 * - Support both desktop and mobile navigation experiences.
 * - Preserve the intended mission flow from identity to action.
 * - Add human identity without breaking the system aesthetic.
 *
 * Accessibility:
 * - Exposes a named primary navigation region.
 * - Preserves keyboard access through normal links/buttons.
 * - Uses active-state semantics through `aria-current` inside SiteNavLink.
 */
export function SiteNavigation() {
  const sectionIds = useMemo(
    () => PRIMARY_SITE_NAV_ITEMS.map((item) => item.id),
    [],
  );

  const activeSection = useActiveSection(sectionIds);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const labelStyle: NavigationLabelStyle = "balanced";

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border-subtle bg-bg-900/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 sm:px-8 lg:px-10">
          <div className="flex min-w-0 items-center gap-3">
            <div
              aria-hidden="true"
              className="grid size-9 shrink-0 place-items-center rounded-full bg-accent-cyan/10 font-mono text-xs font-semibold text-accent-cyan ring-1 ring-accent-cyan/25"
            >
              TM
            </div>

            <div className="min-w-0">
              <p className="type-label text-accent-cyan">
                Thapelo Magqazana
              </p>
              <p className="truncate text-xs text-text-muted">
                Release confidence · QA · Systems
              </p>
            </div>
          </div>

          <nav
            aria-label="Primary site navigation"
            className="hidden items-center gap-2 md:flex"
          >
            {PRIMARY_SITE_NAV_ITEMS.map((item) => (
              <SiteNavLink
                key={item.id}
                item={item}
                isActive={item.id === activeSection}
                labelStyle={labelStyle}
              />
            ))}
          </nav>

          <div className="hidden lg:block">
            <QuickContactLink />
          </div>

          <MobileNavTrigger
            isOpen={isMobileOpen}
            onOpen={() => setIsMobileOpen(true)}
          />
        </div>
      </header>

      <MobileNavSheet
        isOpen={isMobileOpen}
        items={PRIMARY_SITE_NAV_ITEMS}
        activeSection={activeSection}
        labelStyle={labelStyle}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}