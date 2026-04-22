import { useEffect, useRef } from "react";
import type { SiteNavigationItem, SiteSectionId } from "./navigation.types";
import { SiteNavLink } from "./SiteNavLink";
import { useFocusTrap } from "../../hooks/useFocusTrap";

/**
 * Props for the MobileNavPanel component.
 */
export interface MobileNavPanelProps {
  /**
   * Whether the panel is visible.
   */
  readonly isOpen: boolean;

  /**
   * Navigation items to render.
   */
  readonly items: readonly SiteNavigationItem[];

  /**
   * Currently active section id.
   */
  readonly activeSection: SiteSectionId;

  /**
   * Called when the panel should close.
   */
  readonly onClose: () => void;
}

/**
 * Mobile navigation panel.
 *
 * Responsibilities:
 * - Render a clean, vertically stacked touch-first navigation sheet
 * - Preserve the same navigation meaning and order as desktop
 * - Keep focus trapped while the panel is open
 * - Support Escape-to-close and explicit close control
 *
 * Accessibility:
 * - Exposes a named dialog-like region
 * - Traps focus while open
 * - Supports Escape to close
 */
export function MobileNavPanel({
  isOpen,
  items,
  activeSection,
  onClose,
}: MobileNavPanelProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useFocusTrap(panelRef.current, isOpen);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      id="mobile-navigation-panel"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className={[
        "absolute right-0 top-0 h-full w-[min(90vw,22rem)] border-l border-border-subtle bg-bg-850/95 p-6 shadow-[var(--shadow-panel-focus)] backdrop-blur-md transition-transform duration-250 ease-out",
        isOpen ? "translate-x-0" : "translate-x-full",
      ].join(" ")}
    >
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="type-label text-accent-cyan">System Interface</p>
          <p className="mt-1 text-xs text-text-muted">
            Guided portfolio navigation
          </p>
        </div>

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
  );
}