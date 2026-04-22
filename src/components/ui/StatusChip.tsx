import type { HTMLAttributes } from "react";
import { classNames } from "../../lib/classNames";

/**
 * Supported status tones for system-facing badges and chips.
 *
 * Purpose:
 * - Keep visual signal styling consistent across the portfolio
 * - Map operational states to a restrained, readable accent system
 */
export type StatusChipTone = "pass" | "warn" | "info";

/**
 * Props for the StatusChip component.
 */
export interface StatusChipProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  /**
   * Visible status text.
   *
   * Examples:
   * - PASS
   * - WARNING
   * - APPROVED
   * - OPERATIONAL
   * - 92%
   */
  readonly label: string;

  /**
   * Tone used to reinforce the meaning visually.
   *
   * Important:
   * - Tone is a visual reinforcement only
   * - Meaning must remain understandable from text alone
   */
  readonly tone: StatusChipTone;

  /**
   * Optional contextual label for accessibility and richer semantics.
   *
   * Examples:
   * - Security
   * - Performance
   * - Verdict
   * - System Status
   *
   * When provided, screen readers will interpret the chip as:
   * - "Security status: pass"
   * - "Performance status: warning"
   */
  readonly contextLabel?: string;

  /**
   * Whether to show a small decorative icon-like marker.
   *
   * Purpose:
   * - Reinforce quick scanning visually
   * - Never replace the text meaning
   *
   * Default:
   * - true
   */
  readonly showIndicator?: boolean;
}

/**
 * Accessible status chip for the portfolio's control-room UI.
 *
 * Responsibilities:
 * - Render compact, readable status states
 * - Reinforce meaning visually without relying on color alone
 * - Preserve a consistent status vocabulary across the system
 *
 * Accessibility:
 * - Uses explicit visible text as the primary meaning carrier
 * - Uses optional contextual ARIA labels for richer screen-reader output
 * - Treats the colored dot as decorative only
 */
export function StatusChip({
  label,
  tone,
  contextLabel,
  showIndicator = true,
  className,
  "aria-label": ariaLabel,
  ...rest
}: StatusChipProps) {
  const toneClasses =
    tone === "pass"
      ? "text-accent-green border-[rgba(53,230,161,0.24)] bg-[rgba(53,230,161,0.08)]"
      : tone === "warn"
        ? "text-accent-amber border-[rgba(255,184,77,0.24)] bg-[rgba(255,184,77,0.08)]"
        : "text-accent-cyan border-[rgba(61,220,255,0.24)] bg-[rgba(61,220,255,0.08)]";

  const indicatorClasses =
    tone === "pass"
      ? "bg-accent-green"
      : tone === "warn"
        ? "bg-accent-amber"
        : "bg-accent-cyan";

  /**
   * Prefer a caller-provided aria-label when present.
   * Otherwise, synthesize one from the contextual label and the visible state.
   */
  const resolvedAriaLabel =
    ariaLabel ??
    (contextLabel ? `${contextLabel} status: ${label}` : undefined);

  return (
    <span
      {...rest}
      aria-label={resolvedAriaLabel}
      className={classNames(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.08em]",
        toneClasses,
        className,
      )}
    >
      {showIndicator ? (
        <span
          aria-hidden="true"
          className={classNames(
            "hero-status-pulse inline-block h-2 w-2 rounded-full",
            indicatorClasses,
          )}
        />
      ) : null}

      {label}
    </span>
  );
}