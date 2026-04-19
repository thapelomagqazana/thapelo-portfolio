import {
  useEffect,
  useMemo,
  useState,
  type HTMLAttributes,
  type JSX,
} from "react";

import { StatusChip } from "../../components/system";
import { Text } from "../../components/ui";
import { classNames } from "../../lib/classNames";
import { useMotionPreference } from "../../motion/useMotionPreference";
import { DEFAULT_TERMINAL_SCRIPT } from "./terminalScript";
import { DEFAULT_TERMINAL_TIMING, getVisibleLines, isActiveLine } from "./terminalUtils";
import type { TerminalLine, TerminalScript, TerminalTiming } from "./terminalTypes";

/**
 * Props for the canonical TerminalSimulator.
 *
 * Responsibilities:
 * - Render a bounded terminal-style simulation
 * - Reveal lines in deterministic sequence
 * - Provide a readable static fallback for reduced motion
 *
 * Notes:
 * - This is not a real terminal
 * - It does not parse, execute, or evaluate commands
 */
export interface TerminalSimulatorProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /**
   * Structured script to render.
   *
   * Defaults to the canonical hero boot sequence.
   */
  readonly script?: TerminalScript;

  /**
   * Optional timing override.
   *
   * Use sparingly. Defaults to canonical timing constants.
   */
  readonly timing?: TerminalTiming;

  /**
   * Whether to loop the simulation.
   *
   * Defaults to false.
   */
  readonly loop?: boolean;

  /**
   * Optional title shown in the terminal header.
   */
  readonly title?: string;
}

/**
 * Renders a single terminal line using canonical visual rules.
 */
function renderTerminalLine(
  line: TerminalLine,
  active: boolean,
): JSX.Element {
  if (line.type === "command") {
    return (
      <div className="flex items-start gap-2">
        <span aria-hidden="true" className="type-mono-output text-accent-cyan">
          &gt;
        </span>
        <Text as="span" variant="mono-output" className="break-words text-text-primary">
          {line.text}
        </Text>
        {active ? (
          <span
            aria-hidden="true"
            className="terminal-cursor ml-1 inline-block h-5 w-[2px] bg-accent-cyan"
          />
        ) : null}
      </div>
    );
  }

  if (line.type === "output") {
    return (
      <div className="flex items-start gap-2">
        <Text as="span" variant="body-muted" className="break-words">
          {line.text}
        </Text>
        {active ? (
          <span
            aria-hidden="true"
            className="terminal-cursor ml-1 inline-block h-5 w-[2px] bg-accent-cyan"
          />
        ) : null}
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3">
      <StatusChip status={line.status} size="sm" />
      <Text as="span" variant="body-muted" className="break-words">
        {line.text}
      </Text>
      {active ? (
        <span
          aria-hidden="true"
          className="terminal-cursor ml-1 inline-block h-5 w-[2px] bg-accent-cyan"
        />
      ) : null}
    </div>
  );
}

/**
 * Canonical TerminalSimulator component.
 *
 * Design goals:
 * - Simulate a deterministic “system boot” sequence
 * - Stay accessible when motion is reduced
 * - Keep script rendering data-driven and reusable
 */
export function TerminalSimulator({
  script = DEFAULT_TERMINAL_SCRIPT,
  timing = DEFAULT_TERMINAL_TIMING,
  loop = false,
  title = "System Execution",
  className,
  ...props
}: TerminalSimulatorProps): JSX.Element {
  const reduceMotion = useMotionPreference();
  const [step, setStep] = useState<number>(reduceMotion ? script.lines.length - 1 : -1);

  /**
   * Visible lines are derived from the current animation step.
   *
   * Using useMemo keeps the render path deterministic and avoids needless
   * recalculation for larger future scripts.
   */
  const visibleLines = useMemo(
    () =>
      reduceMotion
        ? script.lines
        : getVisibleLines(script.lines, step),
    [reduceMotion, script.lines, step],
  );

  useEffect(() => {
    if (reduceMotion) {
      setStep(script.lines.length - 1);
      return;
    }

    let cancelled = false;
    let timeoutId: number | undefined;

    /**
     * Schedules the next reveal step.
     *
     * This uses bounded timers and deterministic timing only.
     */
    function schedule(nextStep: number, delay: number): void {
      timeoutId = window.setTimeout(() => {
        if (cancelled) {
          return;
        }

        setStep(nextStep);
      }, delay);
    }

    if (step < 0) {
      schedule(0, timing.initialDelayMs);
      return () => {
        cancelled = true;
        if (timeoutId !== undefined) {
          window.clearTimeout(timeoutId);
        }
      };
    }

    if (step < script.lines.length - 1) {
      schedule(step + 1, timing.lineDelayMs);
      return () => {
        cancelled = true;
        if (timeoutId !== undefined) {
          window.clearTimeout(timeoutId);
        }
      };
    }

    if (loop) {
      schedule(-1, timing.lineDelayMs * 3);
      return () => {
        cancelled = true;
        if (timeoutId !== undefined) {
          window.clearTimeout(timeoutId);
        }
      };
    }

    return () => {
      cancelled = true;
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [loop, reduceMotion, script.lines.length, step, timing.initialDelayMs, timing.lineDelayMs]);

  return (
    <div
      className={classNames(
        "rounded-[var(--radius-panel-xl)] border border-border-subtle bg-bg-850/90 shadow-[var(--shadow-panel-elevated)] backdrop-blur",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between border-b border-border-subtle px-4 py-3">
        <Text variant="label">{title}</Text>

        <div aria-hidden="true" className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-red/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-amber/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-green/70" />
        </div>
      </div>

      <div
        className="space-y-4 p-4"
        aria-live={reduceMotion ? "off" : "polite"}
        aria-atomic="false"
      >
        {visibleLines.map((line, index) => (
          <div key={`${script.id}-${index}`}>
            {renderTerminalLine(line, !reduceMotion && isActiveLine(index, visibleLines.length))}
          </div>
        ))}
      </div>
    </div>
  );
}