export type ProjectModuleStatus =
  | "ACTIVE"
  | "DEPLOYED"
  | "IN_DEVELOPMENT"
  | "EXPERIMENTAL"
  | "ARCHIVED";

export interface ProjectSignal {
  readonly label: string;
  readonly value: string;
}

export interface ProjectAction {
  readonly label: string;
  readonly href: `#${string}` | `https://${string}`;
  readonly variant: "primary" | "secondary";
}

export interface ProjectModule {
  readonly id: string;
  readonly title: string;
  readonly tag?: string;
  readonly status: ProjectModuleStatus;
  readonly summary: string;
  readonly signals: readonly ProjectSignal[];
  readonly capabilities: readonly string[];
  readonly actions: readonly ProjectAction[];
}