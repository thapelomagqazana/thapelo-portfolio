import { analyticsClient } from "./analytics.client";
import type { AnalyticsEventPayload } from "./analytics.types";

/**
 * Track initial portfolio page view.
 */
export function trackPortfolioPageViewed(): void {
  analyticsClient.track("portfolio_page_viewed");
}

/**
 * Track section visibility.
 */
export function trackPortfolioSectionViewed(sectionId: string): void {
  analyticsClient.track("portfolio_section_viewed", { sectionId });
}

/**
 * Track safe conversion click events.
 *
 * Important:
 * - Do not pass form content
 * - Do not pass visitor identity
 */
export function trackPortfolioConversion(
  eventName:
    | "portfolio_contact_clicked"
    | "portfolio_resume_clicked"
    | "portfolio_github_clicked"
    | "portfolio_linkedin_clicked",
  payload: AnalyticsEventPayload,
): void {
  analyticsClient.track(eventName, payload);
}

/**
 * Track terminal mode usage.
 */
export function trackTerminalModeUsed(source: string): void {
  analyticsClient.track("portfolio_terminal_mode_used", { source });
}