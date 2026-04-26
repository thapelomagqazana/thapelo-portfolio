import type { ProjectInspectionDetail } from "./project.types";

export interface ProjectInspectionPanelProps {
  readonly title: string;
  readonly inspection: ProjectInspectionDetail;
  readonly onClose: () => void;
}

/**
 * Inline project inspection panel.
 *
 * Responsibilities:
 * - Reveal deeper project detail without route navigation
 * - Preserve page context and scroll position
 * - Keep inspection content structured, concise, and scannable
 *
 * Accessibility:
 * - Uses a named region for expanded inspection content
 * - Provides an explicit close button
 * - Avoids hover-only disclosure patterns
 */
export function ProjectInspectionPanel({
  title,
  inspection,
  onClose,
}: ProjectInspectionPanelProps) {
  return (
    <section
      aria-label={`${title} inspection details`}
      className="rounded-[var(--radius-panel-xl)] border border-border-subtle bg-bg-800/45 p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-accent-cyan">
            Inspection Mode
          </p>
          <h4 className="mt-2 text-lg font-semibold text-text-primary">
            {title} Deep Inspection
          </h4>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-border-subtle px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-secondary hover:border-border-active hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
        >
          Close
        </button>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <InspectionBlock label="Overview" value={inspection.overview} />
        <InspectionBlock label="Architecture" value={inspection.architecture} />
        <InspectionBlock label="Problem Context" value={inspection.problemContext} />
        <InspectionBlock label="Impact" value={inspection.impact} />
      </div>

      {inspection.evidence?.length ? (
        <section aria-label="Inspection evidence" className="mt-5">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
            Evidence
          </p>

          <ul className="mt-3 flex flex-wrap gap-2">
            {inspection.evidence.slice(0, 4).map((item) => (
              <li
                key={item}
                className="rounded-full border border-border-subtle px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-secondary"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </section>
  );
}

interface InspectionBlockProps {
  readonly label: string;
  readonly value: string;
}

/**
 * Small labelled inspection content block.
 */
function InspectionBlock({ label, value }: InspectionBlockProps) {
  return (
    <section className="rounded-[var(--radius-panel-lg)] border border-border-subtle bg-bg-850/55 p-4">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
        {label}
      </p>
      <p className="mt-2 text-sm leading-6 text-text-secondary">{value}</p>
    </section>
  );
}