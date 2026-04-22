import type {
  NavigationLabelStyle,
  SiteNavigationItem,
  SiteSectionId,
} from "./navigation.types";
import { MobileNavPanel } from "./MobileNavPanel";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";

/**
 * Props for the MobileNavSheet component.
 */
export interface MobileNavSheetProps {
  readonly isOpen: boolean;
  readonly items: readonly SiteNavigationItem[];
  readonly activeSection: SiteSectionId;
  readonly labelStyle: NavigationLabelStyle;
  readonly onClose: () => void;
}

/**
 * Mobile navigation sheet.
 *
 * Responsibilities:
 * - Render backdrop + mobile panel as one overlay system
 * - Prevent background interaction while open
 * - Preserve the same label system as desktop navigation
 */
export function MobileNavSheet({
  isOpen,
  items,
  activeSection,
  labelStyle,
  onClose,
}: MobileNavSheetProps) {
  useLockBodyScroll(isOpen);

  return (
    <div
      className={[
        "fixed inset-0 z-50 md:hidden",
        isOpen ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        aria-label="Close mobile navigation"
        onClick={onClose}
        className={[
          "absolute inset-0 transition-opacity duration-200 ease-out",
          "bg-[rgba(8,16,24,0.72)] backdrop-blur-sm",
          isOpen ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />

      <MobileNavPanel
        isOpen={isOpen}
        items={items}
        activeSection={activeSection}
        labelStyle={labelStyle}
        onClose={onClose}
      />
    </div>
  );
}