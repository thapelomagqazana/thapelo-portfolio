import type { SiteNavigationItem, SiteSectionId } from "./navigation.types";
import { SiteNavLink } from "./SiteNavLink";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";

/**
 * Props for the mobile navigation sheet.
 */
export interface MobileNavSheetProps {
  readonly isOpen: boolean;
  readonly items: readonly SiteNavigationItem[];
  readonly activeSection: SiteSectionId;
  readonly onClose: () => void;
}

/**
 * Mobile navigation sheet for the portfolio.
 *
 * Responsibilities:
 * - Provide a touch-friendly navigation panel on small screens
 * - Preserve the same order and meaning as desktop navigation
 * - Keep the user focused on navigation choices while the sheet is open
 *
 * Accessibility:
 * - Exposes a named dialog-like overlay region
 * - Locks background scrolling while open
 * - Provides a clear close control
 */
export function MobileNavSheet({
  isOpen,
  items,
  activeSection,
  onClose,
}: MobileNavSheetProps) {
  useLockBodyScroll(isOpen);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 md:hidden"
      aria-label="Mobile navigation"
    >
      <button
        type="button"
        aria-label="Close mobile navigation"
        onClick={onClose}
        className="absolute inset-0 bg-[rgba(8,16,24,0.72)] backdrop-blur-sm"
      />

      <div className="absolute right-0 top-0 h-full w-[min(90vw,22rem)] border-l border-border-subtle bg-bg-850/95 p-6 shadow-[var(--shadow-panel-focus)]">
        <div className="mb-6 flex items-center justify-between gap-3">
          <p className="type-label text-accent-cyan">System Navigation</p>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-panel-md)] border border-border-subtle text-text-secondary transition-colors duration-200 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg-900"
            aria-label="Close navigation panel"
          >
            ✕
          </button>
        </div>

        <nav aria-label="Mobile navigation">
          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <SiteNavLink
                key={item.id}
                item={item}
                isActive={item.id === activeSection}
                onNavigate={onClose}
              />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}