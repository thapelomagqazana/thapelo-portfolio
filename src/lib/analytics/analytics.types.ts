export type AnalyticsEventName =
  | "portfolio_page_viewed"
  | "portfolio_section_viewed"
  | "portfolio_contact_clicked"
  | "portfolio_resume_clicked"
  | "portfolio_github_clicked"
  | "portfolio_linkedin_clicked"
  | "portfolio_terminal_mode_used"
  | "portfolio_project_inspection_opened";

export type AnalyticsEventPayload = Record<
  string,
  string | number | boolean | null | undefined
> & {
  readonly sectionId?: string;
  readonly actionLabel?: string;
  readonly destination?: string;
  readonly source?: string;
};

export interface AnalyticsClient {
  readonly track: (
    eventName: AnalyticsEventName,
    payload?: AnalyticsEventPayload,
  ) => void;
}