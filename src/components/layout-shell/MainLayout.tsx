import type { JSX, ReactNode } from "react";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

/**
 * Props for the canonical MainLayout.
 *
 * Responsibilities:
 * - Compose the global shell once
 * - Provide a single route-content slot
 * - Keep shell structure separate from page business logic
 */
export interface MainLayoutProps {
  /**
   * Routed page content rendered inside the main landmark.
   */
  readonly children: ReactNode;
}

/**
 * Canonical global layout shell.
 *
 * Responsibilities:
 * - Render Navbar at the top
 * - Render routed content in the main landmark
 * - Render Footer at the bottom
 *
 * Accessibility notes:
 * - Uses semantic landmarks: header (inside Navbar), main, footer
 * - Main content remains the only primary content slot
 */
export function MainLayout({ children }: MainLayoutProps): JSX.Element {
  return (
    <div className="min-h-screen bg-bg-900 text-text-primary">
      <Navbar />

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}