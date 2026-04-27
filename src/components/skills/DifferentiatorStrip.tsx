import { Bug, Layers, Radar, ShieldCheck } from "lucide-react";

import type { DifferentiatorSignal } from "./skill.types";

export interface DifferentiatorStripProps {
  readonly signals: readonly DifferentiatorSignal[];
}

/**
 * Differentiator emphasis strip.
 *
 * Responsibilities:
 * - Highlight the strongest market positioning before detailed skills.
 * - Make the primary differentiator visually dominant.
 * - Keep secondary differentiators supportive and quieter.
 *
 * Accessibility:
 * - Uses list semantics.
 * - Icons are decorative only and hidden from assistive tech.
 * - Keeps labels, evidence, and capabilities readable as text.
 */
export function DifferentiatorStrip({ signals }: DifferentiatorStripProps) {
  const visibleSignals = normalizeDifferentiatorSignals(signals);

  if (visibleSignals.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="key-differentiators-heading"
      className="rounded-[var(--radius-panel-xl)] bg-bg-900/25 p-6 ring-1 ring-white/5"
    >
      <header>
        <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-accent-cyan">
          Key Differentiators
        </p>

        <h3
          id="key-differentiators-heading"
          className="mt-2 text-xl font-semibold tracking-tight text-text-primary"
        >
          Quality, systems, reliability, and release confidence.
        </h3>
      </header>

      <ul className="mt-6 grid gap-4 lg:grid-cols-3">
        {visibleSignals.map((signal) => (
          <li
            key={signal.label}
            className={
              signal.emphasis === "PRIMARY" ? "lg:col-span-2" : undefined
            }
          >
            <DifferentiatorCard signal={signal} />
          </li>
        ))}
      </ul>
    </section>
  );
}

interface DifferentiatorCardProps {
  readonly signal: DifferentiatorSignal;
}

/**
 * Single differentiator card.
 *
 * Purpose:
 * - Present one memorable positioning signal.
 * - Keep evidence close to the claim.
 * - Use icons only as subtle visual signals, never as the main meaning.
 */
function DifferentiatorCard({ signal }: DifferentiatorCardProps) {
  const isPrimary = signal.emphasis === "PRIMARY";
  const Icon = getDifferentiatorIcon(signal.label);

  return (
    <article
      data-emphasis={signal.emphasis}
      className={
        isPrimary
          ? "h-full rounded-[var(--radius-panel-xl)] border border-accent-cyan/35 bg-gradient-to-br from-accent-cyan/10 via-bg-850/45 to-bg-900/40 p-6 shadow-[0_0_48px_rgba(61,220,255,0.10)]"
          : "h-full rounded-[var(--radius-panel-xl)] bg-bg-800/15 p-5 ring-1 ring-white/5 transition hover:bg-bg-800/25 hover:ring-accent-cyan/20"
      }
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className={
            isPrimary
              ? "grid size-10 shrink-0 place-items-center rounded-[var(--radius-panel-md)] bg-accent-cyan/10 text-accent-cyan ring-1 ring-accent-cyan/25"
              : "grid size-9 shrink-0 place-items-center rounded-[var(--radius-panel-md)] bg-bg-900/35 text-accent-cyan/80 ring-1 ring-white/10"
          }
        >
          <Icon className={isPrimary ? "size-5" : "size-4"} />
        </span>

        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-accent-cyan">
            {isPrimary ? "Primary Signal" : "Supporting Signal"}
          </p>

          <h4 className="mt-2 text-lg font-semibold text-text-primary">
            {signal.label}
          </h4>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-text-secondary">
        {signal.summary}
      </p>

      <ul
        className="mt-4 flex flex-wrap gap-2"
        aria-label={`${signal.label} capabilities`}
      >
        {signal.capabilities.slice(0, 5).map((capability) => (
          <li
            key={capability}
            className="rounded-full bg-bg-900/35 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-text-muted ring-1 ring-white/10"
          >
            {capability}
          </li>
        ))}
      </ul>

      <p className="mt-5 border-t border-white/5 pt-4 text-sm leading-6 text-text-muted">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-accent-cyan/80">
          Evidence:{" "}
        </span>
        {signal.evidence}
      </p>
    </article>
  );
}

/**
 * Maps differentiator labels to subtle visual signal icons.
 *
 * Notes:
 * - Icons are decorative only.
 * - Unknown labels fall back to Radar to avoid runtime crashes.
 */
function getDifferentiatorIcon(label: string) {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel.includes("release")) {
    return ShieldCheck;
  }

  if (normalizedLabel.includes("quality")) {
    return Bug;
  }

  if (normalizedLabel.includes("system")) {
    return Layers;
  }

  return Radar;
}

/**
 * Normalizes differentiator signals before rendering.
 *
 * Purpose:
 * - Prevent empty signals.
 * - Limit visual noise.
 * - Enforce one primary differentiator.
 */
function normalizeDifferentiatorSignals(
  signals: readonly DifferentiatorSignal[],
): readonly DifferentiatorSignal[] {
  const completeSignals = signals.filter(isRenderableDifferentiatorSignal);
  const primary = completeSignals.find((signal) => signal.emphasis === "PRIMARY");
  const secondary = completeSignals
    .filter((signal) => signal.emphasis === "SECONDARY")
    .slice(0, 2);

  return primary ? [primary, ...secondary] : secondary;
}

/**
 * Checks whether a differentiator has enough concrete content to render.
 */
function isRenderableDifferentiatorSignal(signal: DifferentiatorSignal): boolean {
  return (
    signal.label.trim().length > 0 &&
    signal.summary.trim().length > 0 &&
    signal.capabilities.length >= 2 &&
    signal.evidence.trim().length > 0
  );
}