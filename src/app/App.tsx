import type { JSX } from "react";

import { HeroSystem } from "../features/hero";
import { TerminalSimulator } from "../features/terminal";
import { SystemDashboard } from "../features/dashboard";
import { AboutSection } from "../features/about";
import { MotionProvider } from "./MotionProvider";
import { ThemeProvider } from "./ThemeProvider";
import { MainLayout } from "../components/layout-shell";

/**
 * Root application validation entry component.
 *
 * Responsibilities:
 * - Compose application-wide providers
 * - Use MainLayout as the canonical shell
 * - Render the final “Control Room Hero” experience
 *
 * Validation scope:
 * - Navbar (via MainLayout)
 * - HeroSystem (with preview slot)
 * - AboutSection
 * - Footer (via MainLayout)
 *
 * Notes:
 * - Terminal + Dashboard are now part of the Hero preview
 * - This represents the final Phase 3 composition
 */
export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <MotionProvider>
        <MainLayout>
          <HeroSystem
            preview={
              <div className="space-y-4">
                <TerminalSimulator />
                <SystemDashboard />
              </div>
            }
          />

          <AboutSection />
        </MainLayout>
      </MotionProvider>
    </ThemeProvider>
  );
}