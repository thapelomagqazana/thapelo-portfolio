/**
 * Analytics runtime configuration.
 *
 * Rules:
 * - Analytics must only run in production
 * - Provider failure must never break UI
 * - No personal identity or form content may be tracked
 */
export const ANALYTICS_CONFIG = {
  enabled: import.meta.env.PROD,
  provider: "vercel",
} as const;