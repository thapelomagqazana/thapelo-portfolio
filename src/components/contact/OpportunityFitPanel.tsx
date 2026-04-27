import type {
  AvailabilityStatus,
  OpportunityFit,
  OpportunityType,
} from "./contact.types";

export interface OpportunityFitPanelProps {
  readonly fit: OpportunityFit;
}

/**
 * Opportunity fit panel.
 *
 * Responsibilities:
 * - Communicate availability clearly.
 * - Show preferred opportunity formats.
 * - Clarify best-fit collaboration areas.
 * - Reduce vague or unfocused outreach.
 *
 * Accessibility:
 * - Uses readable labels and text.
 * - Does not rely on color alone for availability.
 */
export function OpportunityFitPanel({ fit }: OpportunityFitPanelProps) {
  if (!isRenderableOpportunityFit(fit)) {
    return null;
  }

  return (
    <section
      aria-label="Opportunity fit"
      className="rounded-[var(--radius-panel-xl)] bg-bg-800/20 p-5 ring-1 ring-white/5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent-cyan">
            Opportunity Fit
          </p>

          <h3 className="mt-2 text-lg font-semibold text-text-primary">
            Reach out when the fit is strong.
          </h3>
        </div>

        <AvailabilityBadge status={fit.availability} />
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <SignalGroup
          label="Best Fit"
          items={fit.bestFitAreas.slice(0, 5)}
        />

        <SignalGroup
          label="Open To"
          items={fit.opportunityTypes.slice(0, 5).map(formatOpportunityType)}
        />
      </div>

      <div className="mt-5 rounded-[var(--radius-panel-lg)] bg-bg-900/30 p-4 ring-1 ring-white/5">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-text-muted">
          Mode
        </p>

        <p className="mt-2 text-sm font-medium text-text-secondary">
          {fit.workMode}
        </p>

        <p className="mt-3 text-sm leading-6 text-text-muted">{fit.note}</p>
      </div>
    </section>
  );
}

interface AvailabilityBadgeProps {
  readonly status: AvailabilityStatus;
}

/**
 * Availability status badge.
 *
 * Purpose:
 * - Make availability visible within 3 seconds.
 */
function AvailabilityBadge({ status }: AvailabilityBadgeProps) {
  return (
    <span className="w-fit rounded-full bg-accent-cyan/10 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-accent-cyan ring-1 ring-accent-cyan/25">
      Availability: {formatAvailabilityStatus(status)}
    </span>
  );
}

interface SignalGroupProps {
  readonly label: string;
  readonly items: readonly string[];
}

/**
 * Compact grouped signal list.
 *
 * Purpose:
 * - Keep opportunity details scannable.
 * - Avoid long paragraphs or unfocused role lists.
 */
function SignalGroup({ label, items }: SignalGroupProps) {
  return (
    <section>
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-text-muted">
        {label}
      </p>

      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full bg-bg-900/35 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-text-secondary ring-1 ring-white/10"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * Formats availability status for display.
 */
function formatAvailabilityStatus(status: AvailabilityStatus): string {
  const labels: Record<AvailabilityStatus, string> = {
    OPEN: "Open",
    SELECTIVE: "Selective",
    LIMITED: "Limited",
    NOT_AVAILABLE: "Not Available",
  };

  return labels[status];
}

/**
 * Formats opportunity type for display.
 */
function formatOpportunityType(type: OpportunityType): string {
  const labels: Record<OpportunityType, string> = {
    FULL_TIME: "Full-time",
    PART_TIME: "Part-time",
    CONTRACT: "Contract",
    COLLABORATION: "Collaboration",
    FOUNDING_BUILD: "Founding build",
    OPEN_SOURCE: "Open source",
  };

  return labels[type];
}

/**
 * Checks whether opportunity fit content is complete enough to render.
 */
function isRenderableOpportunityFit(fit: OpportunityFit): boolean {
  return (
    fit.bestFitAreas.length >= 2 &&
    fit.opportunityTypes.length > 0 &&
    fit.workMode.trim().length > 0 &&
    fit.note.trim().length > 0
  );
}