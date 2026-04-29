import { track } from "@vercel/analytics";
import { ANALYTICS_CONFIG } from "./analytics.config";
import type {
  AnalyticsClient,
  AnalyticsEventName,
  AnalyticsEventPayload,
} from "./analytics.types";

/**
 * Safely track an analytics event through the configured provider.
 *
 * Responsibilities:
 * - Avoid analytics execution outside production
 * - Prevent provider failures from affecting UI
 * - Keep tracking payloads intentionally small and non-sensitive
 */
function safeTrack(
  eventName: AnalyticsEventName,
  payload: AnalyticsEventPayload = {},
): void {
  if (!ANALYTICS_CONFIG.enabled) {
    return;
  }

  try {
    track(eventName, payload);
  } catch {
    /**
     * Analytics must never break the portfolio.
     */
  }
}

export const analyticsClient: AnalyticsClient = {
  track: safeTrack,
};