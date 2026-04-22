import type { HeroStatus } from "./hero.types";
import { classNames } from "../../lib/classNames";

/**
 * Props for the SystemStatus component.
 */
export interface SystemStatusProps {
  /**
   * Current hero status state.
   */
  readonly status: HeroStatus;

  /**
   * Current hero operating mode label.
   *
   * Example:
   * - "Mode: Release Analysis"
   * - "Mode: Inspection Running"
   */
  readonly modeLabel: string;

  /**
   * Optional secondary microcopy to reinforce the current system state.
   */
  readonly description?: string;

  /**
   * Optional external class override.
   */
  readonly className?: string;

  /**
   * Whether the status indicator should render with a subtle pulse.
   *
   * Defaults to true. The actual animation remains controlled by CSS and
   * should respect reduced-motion preferences.
   */
  readonly isAnimated?: boolean;
}

/**
 * Canonical hero system-status block.
 *
 * Responsibilities:
 * - Render a visible, meaningful status signal above the fold
 * - Render the operating mode using compact system-oriented microcopy
 * - Reinforce that the hero behaves like a live engineering interface
 * - Preserve accessibility by using readable text labels and non-color cues
 *
 * Accessibility:
 * - Status is expressed in text, not color alone
 * - Operating mode is readable in plain language
 * - Animation remains optional and should respect reduced-motion settings
 */
export function SystemStatus({
  status,
  modeLabel,
  description,
  className,
  isAnimated = true,
}: SystemStatusProps) {
  const toneClasses =
    status.tone === "pass"
      ? {
          chip: "text-accent-green border-[rgba(53,230,161,0.24)] bg-[rgba(53,230,161,0.08)]",
          dot: "bg-accent-green",
        }
      : status.tone === "warn"
        ? {
            chip: "text-accent-amber border-[rgba(255,184,77,0.24)] bg-[rgba(255,184,77,0.08)]",
            dot: "bg-accent-amber",
          }
        : {
            chip: "text-accent-cyan border-[rgba(61,220,255,0.24)] bg-[rgba(61,220,255,0.08)]",
            dot: "bg-accent-cyan",
          };

  return (
    <div
      className={classNames("flex flex-wrap items-start gap-3", className)}
      aria-label="Hero system status"
    >
      <span
        className={classNames(
          "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.08em]",
          toneClasses.chip,
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            "inline-block h-2 w-2 rounded-full",
            toneClasses.dot,
            isAnimated && "hero-status-pulse",
          )}
        />
        {status.label}
      </span>

      <div className="min-w-0">
        <p className="type-label text-accent-cyan">{modeLabel}</p>
        {description ? (
          <p className="mt-1 text-xs text-text-muted">{description}</p>
        ) : null}
      </div>
    </div>
  );
}