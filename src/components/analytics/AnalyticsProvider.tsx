import { useEffect } from "react";
import { trackPortfolioPageViewed } from "../../lib/analytics/analytics.events";

/**
 * Portfolio analytics provider.
 *
 * Responsibilities:
 * - Track one production page-view event
 * - Avoid blocking initial render
 * - Keep analytics side effects out of UI components
 *
 * Guarantees:
 * - Non-blocking execution
 * - SSR-safe (no direct window usage)
 * - Lint-safe (no unsafe expressions or undefined globals)
 */
export function AnalyticsProvider() {
  useEffect(() => {
    const callback = () => trackPortfolioPageViewed();

    /**
     * Use globalThis to ensure compatibility across:
     * - Browser
     * - SSR environments
     * - Future runtime contexts
     */
    const globalScope = globalThis as typeof globalThis & {
      requestIdleCallback?: (cb: () => void) => void;
      setTimeout: (cb: () => void, delay?: number) => number;
    };

    if (typeof globalScope.requestIdleCallback === "function") {
      globalScope.requestIdleCallback(callback);
    } else {
      globalScope.setTimeout(callback, 0);
    }
  }, []);

  return null;
}