import type { TerminalScript } from "./terminalTypes";

/**
 * Canonical default terminal script used for hero validation.
 *
 * Purpose:
 * - Provide a reusable, deterministic default script
 * - Reinforce the “system boot experience” metaphor
 */
export const DEFAULT_TERMINAL_SCRIPT: TerminalScript = {
  id: "portfolio-boot-sequence",
  lines: [
    { type: "command", text: "bb run --portfolio" },
    { type: "status", text: "Identity Verified", status: "PASS" },
    { type: "status", text: "Projects Loaded", status: "PASS" },
    { type: "status", text: "Verdict: APPROVED", status: "PASS" },
  ],
} as const;