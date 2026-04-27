export type ContactActionType = "EMAIL" | "LINKEDIN" | "GITHUB" | "RESUME";

export type ContactActionPriority = "PRIMARY" | "SECONDARY";

export interface ContactAction {
  /**
   * Visible action label.
   */
  readonly label: string;

  /**
   * Destination link.
   */
  readonly href: `mailto:${string}` | `https://${string}` | `/${string}`;

  /**
   * Contact channel type.
   */
  readonly type: ContactActionType;

  /**
   * Visual priority.
   */
  readonly priority: ContactActionPriority;

  /**
   * Accessible action label.
   */
  readonly ariaLabel: string;
}

export type AvailabilityStatus =
  | "OPEN"
  | "SELECTIVE"
  | "LIMITED"
  | "NOT_AVAILABLE";

export type OpportunityType =
  | "FULL_TIME"
  | "PART_TIME"
  | "CONTRACT"
  | "COLLABORATION"
  | "FOUNDING_BUILD"
  | "OPEN_SOURCE";

export interface OpportunityFit {
  /**
   * Current availability state.
   */
  readonly availability: AvailabilityStatus;

  /**
   * Preferred opportunity formats.
   */
  readonly opportunityTypes: readonly OpportunityType[];

  /**
   * Best-fit collaboration areas.
   *
   * Rules:
   * - 2–5 areas max.
   * - Must align with portfolio positioning.
   */
  readonly bestFitAreas: readonly string[];

  /**
   * Preferred work mode or collaboration style.
   */
  readonly workMode: string;

  /**
   * Short clarification for relevant outreach.
   */
  readonly note: string;
}