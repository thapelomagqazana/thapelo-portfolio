import type {
  ProjectEngineeringDecision,
  ProjectTradeOff,
} from "./project.types";

export interface ProjectTechnicalInspectionProps {
  readonly architecture: string;
  readonly decisions: readonly ProjectEngineeringDecision[];
  readonly tradeOffs: readonly ProjectTradeOff[];
  readonly constraints?: readonly string[];
}

/**
 * Technical inspection layer for project detail views.
 *
 * Responsibilities:
 * - Present architecture, engineering decisions, trade-offs, and constraints.
 * - Show technical depth without visually overpowering the inspection panel.
 * - Keep the layout scannable for technical reviewers.
 *
 * Accessibility:
 * - Uses semantic sections with explicit labels.
 * - Keeps content readable without relying on color alone.
 * - Avoids hover-only disclosure patterns.
 */
export function ProjectTechnicalInspection({
  architecture,
  decisions,
  tradeOffs,
  constraints = [],
}: ProjectTechnicalInspectionProps) {
  return (
    <section
      aria-label="Technical inspection"
      className="grid gap-5 rounded-[var(--radius-panel-xl)] bg-bg-800/30 p-5 ring-1 ring-white/5"
    >
      <header>
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent-cyan">
          Technical Inspection
        </p>

        <h5 className="mt-2 text-base font-semibold text-text-primary">
          How the system was designed
        </h5>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary">
          Architecture, decisions, trade-offs, and constraints behind the
          module.
        </p>
      </header>

      <section aria-label="Architecture summary">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
          Architecture
        </p>

        <p className="mt-3 rounded-[var(--radius-panel-lg)] bg-bg-850/45 p-4 font-mono text-sm leading-6 text-text-primary ring-1 ring-white/5">
          {architecture}
        </p>
      </section>

      <section aria-label="Engineering decisions">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
          Engineering Decisions
        </p>

        <div className="mt-3 grid gap-3">
          {decisions.slice(0, 4).map((decision) => (
            <DecisionRow key={decision.title} decision={decision} />
          ))}
        </div>
      </section>

      <section aria-label="Trade-offs">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
          Trade-offs
        </p>

        <div className="mt-3 grid gap-3">
          {tradeOffs.slice(0, 3).map((tradeOff) => (
            <TradeOffRow key={tradeOff.title} tradeOff={tradeOff} />
          ))}
        </div>
      </section>

      {constraints.length > 0 ? (
        <section aria-label="Constraints">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
            Constraints
          </p>

          <ul className="mt-3 flex flex-wrap gap-2.5">
            {constraints.slice(0, 5).map((constraint) => (
              <li
                key={constraint}
                className="rounded-full bg-bg-850/55 px-3.5 py-2 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-secondary ring-1 ring-white/10"
              >
                {constraint}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </section>
  );
}

interface DecisionRowProps {
  readonly decision: ProjectEngineeringDecision;
}

/**
 * Single engineering decision row.
 *
 * Purpose:
 * - Explain why a technical choice was made.
 * - Connect the choice to a concrete engineering benefit.
 */
function DecisionRow({ decision }: DecisionRowProps) {
  return (
    <article className="rounded-[var(--radius-panel-lg)] bg-bg-850/45 p-4 ring-1 ring-white/5">
      <h6 className="text-sm font-semibold text-text-primary">
        {decision.title}
      </h6>

      <div className="mt-3 grid gap-3 text-sm leading-6 sm:grid-cols-2">
        <LabelledText label="Reason" value={decision.reason} />
        <LabelledText label="Benefit" value={decision.benefit} />
      </div>
    </article>
  );
}

interface TradeOffRowProps {
  readonly tradeOff: ProjectTradeOff;
}

/**
 * Single engineering trade-off row.
 *
 * Purpose:
 * - Show mature engineering judgment.
 * - Make both the gain and cost of a decision visible.
 */
function TradeOffRow({ tradeOff }: TradeOffRowProps) {
  return (
    <article className="rounded-[var(--radius-panel-lg)] bg-bg-850/45 p-4 ring-1 ring-white/5">
      <h6 className="text-sm font-semibold text-text-primary">
        {tradeOff.title}
      </h6>

      <div className="mt-3 grid gap-3 text-sm leading-6 sm:grid-cols-2">
        <LabelledText label="Gain" value={tradeOff.gain} />
        <LabelledText label="Cost" value={tradeOff.cost} />
      </div>
    </article>
  );
}

interface LabelledTextProps {
  readonly label: string;
  readonly value: string;
}

/**
 * Small labelled text unit.
 *
 * Purpose:
 * - Avoid repeated label/value markup.
 * - Keep decision and trade-off rows visually consistent.
 */
function LabelledText({ label, value }: LabelledTextProps) {
  return (
    <p className="text-text-secondary">
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-accent-cyan/80">
        {label}:{" "}
      </span>
      {value}
    </p>
  );
}