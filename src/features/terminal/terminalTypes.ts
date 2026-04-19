/**
 * Canonical terminal simulation contracts.
 *
 * Purpose:
 * - Keep terminal simulation data structured and deterministic
 * - Prevent hardcoded terminal content logic from leaking into the component
 * - Enable reuse of the same component with different scripts later
 */

/**
 * Allowed terminal line types.
 */
export type TerminalLine =
  | {
      /**
       * Command line displayed with a terminal prompt.
       */
      readonly type: "command";
      readonly text: string;
    }
  | {
      /**
       * Plain output line displayed after a command.
       */
      readonly type: "output";
      readonly text: string;
    }
  | {
      /**
       * Status line displayed with canonical semantic status.
       */
      readonly type: "status";
      readonly text: string;
      readonly status: "PASS" | "WARN" | "FAIL";
    };

/**
 * Canonical terminal script model.
 */
export interface TerminalScript {
  /**
   * Stable script identifier.
   */
  readonly id: string;

  /**
   * Ordered terminal lines rendered sequentially.
   */
  readonly lines: readonly TerminalLine[];
}

/**
 * Terminal simulator timing configuration.
 *
 * Purpose:
 * - Keep typing behavior deterministic
 * - Avoid ad hoc timing spread across components
 */
export interface TerminalTiming {
  /**
   * Delay in milliseconds before revealing the next line.
   */
  readonly lineDelayMs: number;

  /**
   * Delay in milliseconds before the simulation starts.
   */
  readonly initialDelayMs: number;
}