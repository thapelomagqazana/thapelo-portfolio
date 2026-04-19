import type { TerminalLine, TerminalTiming } from "./terminalTypes";

/**
 * Canonical terminal timing constants.
 *
 * These values are intentionally bounded and subtle.
 */
export const DEFAULT_TERMINAL_TIMING: TerminalTiming = {
  initialDelayMs: 120,
  lineDelayMs: 220,
} as const;

/**
 * Returns the set of lines visible at a given zero-based step index.
 *
 * Example:
 * - step = 0 -> first line visible
 * - step = 1 -> first two lines visible
 *
 * Safety:
 * - clamps negative values to an empty result
 * - clamps oversize values to the full script length
 */
export function getVisibleLines(
  lines: readonly TerminalLine[],
  step: number,
): readonly TerminalLine[] {
  if (step < 0) {
    return [];
  }

  const safeCount = Math.min(step + 1, lines.length);
  return lines.slice(0, safeCount);
}

/**
 * Returns true when the line being rendered is the most recently revealed line.
 *
 * Purpose:
 * - allows the cursor to appear only on the active line
 * - keeps cursor behavior bounded and predictable
 */
export function isActiveLine(
  lineIndex: number,
  visibleLineCount: number,
): boolean {
  return visibleLineCount > 0 && lineIndex === visibleLineCount - 1;
}