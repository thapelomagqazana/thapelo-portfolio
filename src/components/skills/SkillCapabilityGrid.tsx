import type {
  SkillCapabilityPanel,
  SkillEvidenceSignal,
  SkillEvidenceType,
} from "./skill.types";

export interface SkillCapabilityGridProps {
  readonly panels: readonly SkillCapabilityPanel[];
}

/**
 * Skill capability grid.
 *
 * Responsibilities:
 * - Render skills as evidence-backed capability panels.
 * - Keep every skill area tied to real proof.
 * - Prevent unsupported or vague capability claims.
 *
 * Accessibility:
 * - Uses list semantics.
 * - Evidence links are readable without icons.
 * - External links use safe attributes.
 */
export function SkillCapabilityGrid({ panels }: SkillCapabilityGridProps) {
  const visiblePanels = panels.filter(isRenderableSkillPanel).slice(0, 5);

  if (visiblePanels.length === 0) {
    return null;
  }

  return (
    <ul className="grid gap-5 lg:grid-cols-2" aria-label="Skill capability panels">
      {visiblePanels.map((panel) => (
        <li key={panel.category}>
          <SkillCapabilityCard panel={panel} />
        </li>
      ))}
    </ul>
  );
}

interface SkillCapabilityCardProps {
  readonly panel: SkillCapabilityPanel;
}

/**
 * Single evidence-backed skill capability card.
 *
 * Purpose:
 * - Show a capability area.
 * - Show supporting skills.
 * - Show where the capability was actually applied.
 */
function SkillCapabilityCard({ panel }: SkillCapabilityCardProps) {
  return (
    <article className="h-full rounded-[var(--radius-panel-xl)] bg-bg-800/15 p-5 ring-1 ring-white/5 transition hover:bg-bg-800/25 hover:ring-accent-cyan/20">
      <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-accent-cyan">
        Capability Panel
      </p>

      <h3 className="mt-3 text-lg font-semibold text-text-primary">
        {panel.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-text-secondary">
        {panel.summary}
      </p>

      <p className="mt-4 text-sm leading-6 text-text-muted">
        {panel.items.slice(0, 6).join(" • ")}
      </p>

      <SkillEvidenceSignals evidence={panel.evidence} />
    </article>
  );
}

interface SkillEvidenceSignalsProps {
  readonly evidence: readonly SkillEvidenceSignal[];
}

/**
 * Evidence rows for a skill capability.
 *
 * Purpose:
 * - Connect skills to project, work, credential, or learning proof.
 * - Keep evidence compact and trustworthy.
 */
function SkillEvidenceSignals({ evidence }: SkillEvidenceSignalsProps) {
  const visibleEvidence = evidence.filter(isRenderableEvidenceSignal).slice(0, 3);

  if (visibleEvidence.length === 0) {
    return null;
  }

  return (
    <section aria-label="Capability evidence" className="mt-5">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
        Evidence
      </p>

      <div className="mt-3 grid gap-3">
        {visibleEvidence.map((signal) => (
          <SkillEvidenceRow key={`${signal.type}-${signal.source}`} signal={signal} />
        ))}
      </div>
    </section>
  );
}

interface SkillEvidenceRowProps {
  readonly signal: SkillEvidenceSignal;
}

/**
 * Single evidence row.
 *
 * Security:
 * - HTTPS links open in a new tab with noopener/noreferrer.
 * - Internal anchors remain same-page links.
 */
function SkillEvidenceRow({ signal }: SkillEvidenceRowProps) {
  const isExternal = signal.href?.startsWith("https://") ?? false;

  const content = (
    <>
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-accent-cyan/80">
        {formatEvidenceType(signal.type)}
      </p>

      <p className="mt-1 text-sm font-semibold text-text-primary">
        {signal.source}
      </p>

      <p className="mt-1 text-sm leading-6 text-text-muted">{signal.proof}</p>
    </>
  );

  if (!signal.href) {
    return (
      <article className="rounded-[var(--radius-panel-lg)] bg-bg-900/25 p-4 ring-1 ring-white/5">
        {content}
      </article>
    );
  }

  return (
    <a
      href={signal.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={
        isExternal
          ? `${signal.source}. Opens evidence in a new tab.`
          : `${signal.source}. Opens evidence section.`
      }
      className="block rounded-[var(--radius-panel-lg)] bg-bg-900/25 p-4 ring-1 ring-white/5 transition hover:bg-bg-900/40 hover:ring-accent-cyan/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
    >
      {content}
    </a>
  );
}

/**
 * Formats evidence type for display.
 */
function formatEvidenceType(type: SkillEvidenceType): string {
  const labels: Record<SkillEvidenceType, string> = {
    PROJECT: "Project",
    WORK_EXPERIENCE: "Work Experience",
    CREDENTIAL: "Credential",
    OPEN_SOURCE: "Open Source",
    LEARNING: "Learning",
  };

  return labels[type];
}

/**
 * Validates whether a skill panel is complete enough to render.
 *
 * Purpose:
 * - Prevent unsupported skill panels.
 * - Ensure each capability has at least one evidence signal.
 */
function isRenderableSkillPanel(panel: SkillCapabilityPanel): boolean {
  return (
    panel.title.trim().length > 0 &&
    panel.summary.trim().length > 0 &&
    panel.items.length >= 2 &&
    panel.evidence.some(isRenderableEvidenceSignal)
  );
}

/**
 * Validates whether evidence is concrete enough to render.
 */
function isRenderableEvidenceSignal(signal: SkillEvidenceSignal): boolean {
  return (
    signal.source.trim().length > 0 &&
    signal.proof.trim().length > 0 &&
    signal.type.trim().length > 0
  );
}