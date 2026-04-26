import type { ProjectInspectionDetail } from "./project.types";
import { ProjectTechnicalInspection } from "./ProjectTechnicalInspection";
import { SystemProblemImpactInspection } from "./SystemProblemImpactInspection";
import { ProjectLessonsInspection } from "./ProjectLessonsInspection";
import { ProjectVerificationLinks } from "./ProjectVerificationLinks";

export interface ProjectInspectionPanelProps {
  readonly title: string;
  readonly titleId?: string;
  readonly inspection: ProjectInspectionDetail;
  readonly onClose: () => void;
}

/**
 * Project inspection panel.
 *
 * Responsibilities:
 * - Render structured project inspection content.
 * - Keep the modal body organized, readable, and low-noise.
 * - Avoid duplicating project-card content unnecessarily.
 */
export function ProjectInspectionPanel({
  title,
  titleId,
  inspection,
  onClose,
}: ProjectInspectionPanelProps) {
  return (
    <section
      aria-label={`${title} inspection details`}
      className="rounded-[var(--radius-panel-xl)] bg-bg-900/75 p-6 sm:p-7"
    >
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent-cyan">
            Inspection Mode
          </p>

          <h4
            id={titleId}
            className="mt-2 text-xl font-semibold tracking-tight text-text-primary"
          >
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

        <ProjectVerificationLinks links={inspection.verificationLinks} />

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
 */
function InspectionBlock({ label, value }: InspectionBlockProps) {
  return (
    <section className="rounded-[var(--radius-panel-xl)] bg-bg-800/20 p-5 ring-1 ring-white/5">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
        {label}
      </p>

      <p className="mt-2 max-w-3xl text-sm leading-6 text-text-secondary">
        {value}
      </p>
    </section>
  );
}