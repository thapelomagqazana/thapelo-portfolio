import { classNames } from "../../lib/classNames";

/**
 * Supported system states for status display.
 */
export type StatusTone = "pass" | "warn" | "info";

/**
 * Props for the StatusChip component.
 */
export interface StatusChipProps {
  readonly label: string;
  readonly tone?: StatusTone;
  readonly className?: string;
}

/**
 * Compact state indicator used for the hero dashboard and system labels.
 *
 * Responsibilities:
 * - Communicate operational state with both text and color.
 * - Remain accessible by not relying on color alone.
 * - Keep the UI consistent across panels.
 */
export function StatusChip({
  label,
  tone = "info",
  className,
}: StatusChipProps) {
  const toneClasses =
    tone === "pass"
      ? "text-accent-green border-[rgba(53,230,161,0.24)] bg-[rgba(53,230,161,0.08)]"
      : tone === "warn"
        ? "text-accent-amber border-[rgba(255,184,77,0.24)] bg-[rgba(255,184,77,0.08)]"
        : "text-accent-cyan border-[rgba(61,220,255,0.24)] bg-[rgba(61,220,255,0.08)]";

  const dotClasses =
    tone === "pass"
      ? "bg-accent-green"
      : tone === "warn"
        ? "bg-accent-amber"
        : "bg-accent-cyan";

  return (
    <span
      className={classNames(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.08em]",
        toneClasses,
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={classNames(
          "hero-status-pulse inline-block h-2 w-2 rounded-full",
          dotClasses,
        )}
      />
      {label}
    </span>
  );
}