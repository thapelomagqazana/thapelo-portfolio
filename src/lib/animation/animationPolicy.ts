/**
 * Approved animation zone identifiers.
 *
 * Purpose:
 * - Prevent random animation usage across the portfolio
 * - Keep advanced motion tied to product purpose
 */
export type AnimationZoneId =
  | "hero-scan-layer"
  | "system-signal-pulse"
  | "inspection-transition"
  | "terminal-effects"
  | "filter-feedback";

export interface AnimationZonePolicy {
  readonly id: AnimationZoneId;
  readonly component: string;
  readonly purpose: string;
  readonly allowedProperties: readonly AnimationProperty[];
  readonly maxDurationMs: number;
}

export type AnimationProperty = "opacity" | "transform";

/**
 * Single authoritative animation governance map.
 */
export const APPROVED_ANIMATION_ZONES: readonly AnimationZonePolicy[] = [
  {
    id: "hero-scan-layer",
    component: "HeroSystem / HeroScanLayer",
    purpose: "Reinforces control-room system initialization feel.",
    allowedProperties: ["opacity", "transform"],
    maxDurationMs: 2000,
  },
  {
    id: "system-signal-pulse",
    component: "SystemDashboard / SystemSignalPulse",
    purpose: "Communicates subtle live system feedback.",
    allowedProperties: ["opacity", "transform"],
    maxDurationMs: 2000,
  },
  {
    id: "inspection-transition",
    component: "ProjectInspectionModal",
    purpose: "Provides context-preserving focus transition.",
    allowedProperties: ["opacity", "transform"],
    maxDurationMs: 260,
  },
  {
    id: "terminal-effects",
    component: "TerminalPreview / TerminalMode",
    purpose: "Supports developer-tool realism.",
    allowedProperties: ["opacity", "transform"],
    maxDurationMs: 2000,
  },
  {
    id: "filter-feedback",
    component: "ActiveModulesSection / ProjectFilterScanFeedback",
    purpose: "Clarifies category filter state transition.",
    allowedProperties: ["opacity", "transform"],
    maxDurationMs: 420,
  },
];

export const FORBIDDEN_ANIMATION_TARGETS = [
  "long paragraphs",
  "article body text",
  "SiteNavigation",
  "ContactForm",
  "AboutMissionProfile",
  "CredentialStackSection",
  "OperationalHistorySection",
] as const;

export const FORBIDDEN_ANIMATION_PROPERTIES = [
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "margin",
  "padding",
  "font-size",
  "line-height",
  "grid-template",
  "display",
  "position",
] as const;