import { getVisibleLines, isActiveLine } from "../features/terminal";
import type { TerminalLine } from "../features/terminal";

/**
 * Terminal utility tests.
 *
 * These tests validate deterministic reveal behavior.
 */
describe("terminal utils", () => {
  const lines: readonly TerminalLine[] = [
    { type: "command", text: "bb run --portfolio" },
    { type: "output", text: "Loading..." },
    { type: "status", text: "Approved", status: "PASS" },
  ] as const;

  it("returns no lines for negative step", () => {
    expect(getVisibleLines(lines, -1)).toEqual([]);
  });

  it("returns lines progressively", () => {
    expect(getVisibleLines(lines, 0)).toHaveLength(1);
    expect(getVisibleLines(lines, 1)).toHaveLength(2);
    expect(getVisibleLines(lines, 2)).toHaveLength(3);
  });

  it("clamps to full script length", () => {
    expect(getVisibleLines(lines, 99)).toHaveLength(3);
  });

  it("identifies the active line correctly", () => {
    expect(isActiveLine(1, 2)).toBe(true);
    expect(isActiveLine(0, 2)).toBe(false);
  });
});