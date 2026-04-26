import type { ProjectInspectionDetail } from "./project.types";
import { ProjectTechnicalInspection } from "./ProjectTechnicalInspection";
import { SystemProblemImpactInspection } from "./SystemProblemImpactInspection";
import { ProjectLessonsInspection } from "./ProjectLessonsInspection";

export interface ProjectInspectionPanelProps {
  readonly title: string;
  readonly inspection: ProjectInspectionDetail;
  readonly onClose: () => void;
}

/**
 * Inline project inspection panel.
 *
 * Responsibilities:
 * - Reveal deeper project detail without route navigation.
 * - Preserve page context and scroll position.
 * - Present project depth in a premium, low-noise layout.
 *
 * Accessibility:
 * - Uses a named region for expanded inspection content.
 * - Provides an explicit close button.
 * - Avoids hover-only disclosure patterns.
 */
export function ProjectInspectionPanel({
  title,
  inspection,
  onClose,
}: ProjectInspectionPanelProps) {
  return (
    <section
      aria-label={`${title} inspection details`}
      className="rounded-[var(--radius-panel-xl)] border border-accent-cyan/25 bg-bg-900/70 p-6 shadow-[0_0_48px_rgba(61,220,255,0.08)] sm:p-7"
    >
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent-cyan">
            Inspection Mode
          </p>

          <h4 className="mt-2 text-xl font-semibold tracking-tight text-text-primary">
            {title} Deep Inspection
          </h4>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary">
            A structured view of the system problem, design reasoning,
            trade-offs, and evidence behind this module.
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="rounded-full bg-bg-850/80 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-secondary ring-1 ring-white/10 transition hover:text-text-primary hover:ring-accent-cyan/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
        >
          Close
        </button>
      </div>

      <div className="mt-6 grid gap-5">
        <InspectionBlock label="Overview" value={inspection.overview} />

        <SystemProblemImpactInspection
          problemContext={inspection.problemContext}
          impact={inspection.impact}
        />

        <ProjectTechnicalInspection
          architecture={inspection.architecture}
          decisions={inspection.decisions}
          tradeOffs={inspection.tradeOffs}
          constraints={inspection.constraints}
        />

        <ProjectLessonsInspection lessons={inspection.lessons} />

        {inspection.evidence?.length ? (
          <section aria-label="Inspection evidence">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
              Evidence
            </p>

            <ul className="mt-3 flex flex-wrap gap-2.5">
              {inspection.evidence.slice(0, 4).map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-bg-850/70 px-3.5 py-2 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-secondary ring-1 ring-white/10"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </section>
  );
}

interface InspectionBlockProps {
  readonly label: string;
  readonly value: string;
}

/**
 * Labelled inspection summary block.
 *
 * Purpose:
 * - Provide high-level context before deeper inspection layers.
 * - Avoid duplicating architecture, problem, or impact content.
 */
function InspectionBlock({ label, value }: InspectionBlockProps) {
  return (
    <section className="rounded-[var(--radius-panel-lg)] bg-bg-850/55 p-5 ring-1 ring-white/5">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
        {label}
      </p>

      <p className="mt-2 max-w-3xl text-sm leading-6 text-text-secondary">
        {value}
      </p>
    </section>
  );
}