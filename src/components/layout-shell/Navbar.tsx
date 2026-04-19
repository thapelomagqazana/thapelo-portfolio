import { useState } from "react";
import { NavLink } from "react-router";
import type { JSX } from "react";

import { Container } from "../layout";
import { SystemBadge } from "../system";
import { Text } from "../ui";
import { ROUTE_PATHS } from "../../app/routePaths";
import { classNames } from "../../lib/classNames";

/**
 * Global navigation item contract.
 *
 * Purpose:
 * - Keep navbar link structure explicit and centralized
 * - Prevent ad hoc link duplication inside the component body
 */
interface NavbarItem {
  /**
   * User-facing label for the navigation item.
   */
  readonly label: string;

  /**
   * Destination route path.
   */
  readonly to: string;
}

/**
 * Canonical navigation items for the global shell.
 *
 * Notes:
 * - Only approved top-level destinations belong here
 * - This is intentionally bounded for the current application phase
 */
const NAVBAR_ITEMS: readonly NavbarItem[] = [
  { label: "System", to: ROUTE_PATHS.home },
  { label: "Modules", to: ROUTE_PATHS.home },
  { label: "History", to: ROUTE_PATHS.home },
  { label: "Contact", to: ROUTE_PATHS.home },
] as const;

/**
 * Returns the canonical class list for navigation links.
 *
 * Purpose:
 * - Keep active/inactive state styling deterministic
 * - Avoid duplicating link styling logic inline
 */
function getNavLinkClassName(isActive: boolean): string {
  return classNames(
    "inline-flex items-center rounded-[var(--radius-panel-md)] px-3 py-2 text-sm transition",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-900",
    isActive
      ? "bg-bg-750 text-text-primary"
      : "text-text-secondary hover:bg-bg-800 hover:text-text-primary",
  );
}

/**
 * Canonical global navbar.
 *
 * Responsibilities:
 * - Provide persistent route access
 * - Remain sticky at the top of the viewport
 * - Support accessible desktop and mobile navigation
 *
 * Accessibility notes:
 * - Uses semantic header + nav structure
 * - Mobile toggle is keyboard accessible
 * - Toggle exposes expanded/collapsed state through ARIA
 */
export function Navbar(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * Toggles the mobile navigation state.
   */
  function handleToggleMobileMenu(): void {
    setIsMobileMenuOpen((previous) => !previous);
  }

  /**
   * Closes the mobile menu after navigation.
   *
   * This keeps the shell predictable on small screens.
   */
  function handleCloseMobileMenu(): void {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg-900/85 backdrop-blur">
      <Container width="wide">
        <div className="flex min-h-16 items-center justify-between gap-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <SystemBadge variant="info">control room</SystemBadge>
            <Text as="p" variant="label" className="hidden sm:block">
              mission control portfolio
            </Text>
          </div>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-2 md:flex"
          >
            {NAVBAR_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) => getNavLinkClassName(isActive)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-panel"
            onClick={handleToggleMobileMenu}
            className="inline-flex h-11 items-center justify-center rounded-[var(--radius-panel-md)] border border-border-strong px-4 text-sm font-medium text-text-primary transition hover:bg-bg-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-900 md:hidden"
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {isMobileMenuOpen ? (
          <nav
            id="mobile-navigation-panel"
            aria-label="Mobile navigation"
            className="border-t border-border-subtle py-3 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAVBAR_ITEMS.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onClick={handleCloseMobileMenu}
                  className={({ isActive }) => getNavLinkClassName(isActive)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}