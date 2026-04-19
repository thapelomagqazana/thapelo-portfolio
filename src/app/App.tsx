import { AppRouter } from "./router";
import { MotionProvider } from "./MotionProvider";
import type { JSX } from "react";

/**
 * Root application entry component.
 *
 * Responsibilities:
 * - Compose global providers required by the application baseline
 * - Delegate rendering to the canonical router
 *
 * Notes:
 * - Routing is intentionally centralized in AppRouter
 * - MotionProvider remains above the routed tree so all routes inherit
 *   consistent motion behavior
 */
export default function App(): JSX.Element {
  return (
    <MotionProvider>
      <AppRouter />
    </MotionProvider>
  );
}