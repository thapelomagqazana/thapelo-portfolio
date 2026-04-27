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