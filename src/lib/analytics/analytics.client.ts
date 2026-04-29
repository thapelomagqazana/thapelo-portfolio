import { ANALYTICS_CONFIG } from "./analytics.config";
import type {
  AnalyticsClient,
  AnalyticsEventName,
  AnalyticsEventPayload,
} from "./analytics.types";

type AnalyticsGlobalScope = typeof globalThis & {
  dispatchEvent?: (event: Event) => boolean;
  CustomEvent?: typeof CustomEvent;
};

/**
 * Safely track an analytics event.
 *
 * Responsibilities:
 * - Avoid analytics execution outside production
 * - Prevent provider failures from affecting UI
 * - Keep tracking payloads intentionally small and non-sensitive
 *
 * Privacy:
 * - Does not track identity
 * - Does not track form message content
 * - Does not fingerprint visitors
 */
function safeTrack(
  eventName: AnalyticsEventName,
  payload: AnalyticsEventPayload = {},
): void {
  if (!ANALYTICS_CONFIG.enabled) {
    return;
  }

  try {
    const globalScope = globalThis as AnalyticsGlobalScope;

    if (
      typeof globalScope.dispatchEvent !== "function" ||
      typeof globalScope.CustomEvent !== "function"
    ) {
      return;
    }

    globalScope.dispatchEvent(
      new globalScope.CustomEvent("portfolio:analytics", {
        detail: {
          eventName,
          payload,
        },
      }),
    );
  } catch {
    /**
     * Analytics must never break the portfolio.
     */
  }
}

/**
 * Production analytics client.
 *
 * Purpose:
 * - Provide one stable analytics API for the app
 * - Keep vendor implementation isolated
 */
export const analyticsClient: AnalyticsClient = {
  track: safeTrack,
};