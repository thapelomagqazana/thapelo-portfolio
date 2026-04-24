import type { AboutStoryModule } from "./about.types";

/**
 * Props for AboutStoryModules.
 */
export interface AboutStoryModulesProps {
  /**
   * Ordered story modules.
   *
   * Expected sequence:
   * - Origin
   * - Transition
   * - Current Value
   */
  readonly modules: readonly AboutStoryModule[];
}

/**
 * Modular About story renderer.
 *
 * Responsibilities:
 * - Present the About narrative as structured story phases
 * - Improve scan speed compared to one dense paragraph
 * - Keep each module concise, readable, and professionally grounded
 *
 * Accessibility:
 * - Uses a list because the modules form an ordered narrative sequence
 * - Each module has a clear heading for screen-reader navigation
 */
export function AboutStoryModules({ modules }: AboutStoryModulesProps) {
  return (
    <ol className="mt-8 grid gap-4" aria-label="Mission profile story modules">
      {modules.map((module, index) => (
        <li
          key={module.title}
          className="rounded-[var(--radius-panel-xl)] border border-border-subtle bg-bg-850/60 p-5"
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="font-mono text-xs text-accent-cyan"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-text-primary">
              {module.title}
            </h3>
          </div>

          <p className="mt-4 text-sm leading-7 text-text-secondary sm:text-base">
            {module.body}
          </p>
        </li>
      ))}
    </ol>
  );
}