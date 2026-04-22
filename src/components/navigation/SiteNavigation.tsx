import { useMemo, useState } from "react";
import { PRIMARY_SITE_NAV_ITEMS } from "./navigation.content";
import { SiteNavLink } from "./SiteNavLink";
import { MobileNavSheet } from "./MobileNavSheet";
import { useActiveSection } from "../../hooks/useActiveSection";

/**
 * Sticky primary site navigation.
 *
 * Responsibilities:
 * - Keep section navigation available while scrolling
 * - Reflect the active section clearly
 * - Support both desktop and mobile navigation experiences
 * - Preserve the intended mission flow from identity to action
 *
 * Accessibility:
 * - Exposes a named primary navigation region
 * - Preserves keyboard access and strong focus indicators
 */
export function SiteNavigation() {
  const sectionIds = useMemo(
    () => PRIMARY_SITE_NAV_ITEMS.map((item) => item.id),
    [],
  );

  const activeSection = useActiveSection(sectionIds);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border-subtle bg-bg-900/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 sm:px-8 lg:px-10">
          <div className="flex min-w-0 items-center gap-3">
            <span
              className="hero-status-pulse inline-block h-2.5 w-2.5 rounded-full bg-accent-green"
              aria-hidden="true"
            />
            <div className="min-w-0">
              <p className="type-label text-accent-cyan">System Navigation</p>
              <p className="truncate text-xs text-text-muted">
                Guided portfolio discovery
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
              />
            ))}
          </nav>

          <button
            type="button"
            aria-label="Open mobile navigation"
            onClick={() => setIsMobileOpen(true)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-panel-md)] border border-border-subtle text-text-secondary transition-colors duration-200 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg-900 md:hidden"
          >
            ☰
          </button>
        </div>
      </header>

      <MobileNavSheet
        isOpen={isMobileOpen}
        items={PRIMARY_SITE_NAV_ITEMS}
        activeSection={activeSection}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}