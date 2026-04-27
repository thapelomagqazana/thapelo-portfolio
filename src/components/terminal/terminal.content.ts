import type { ModeSwitchGuardrail, TerminalCommand } from "./terminal.types";

/**
 * Guardrails for Terminal Mode.
 *
 * Purpose:
 * - Keep Terminal Mode useful.
 * - Prevent novelty UI from harming clarity, accessibility, or conversion.
 */
export const MODE_SWITCH_GUARDRAILS: readonly ModeSwitchGuardrail[] = [
  {
    rule: "UI mode remains the default experience.",
    prevents: "Visitors being forced into a novelty interface.",
  },
  {
    rule: "Terminal mode appears as an overlay or optional shell.",
    prevents: "Breaking normal portfolio navigation.",
  },
  {
    rule: "Exit Terminal action is always visible.",
    prevents: "Visitors feeling trapped.",
  },
  {
    rule: "Contact links remain available in both modes.",
    prevents: "Conversion loss.",
  },
  {
    rule: "Terminal commands mirror existing sections.",
    prevents: "Information mismatch between modes.",
  },
];

/**
 * Minimum useful command set.
 *
 * Purpose:
 * - Mirror real portfolio sections.
 * - Avoid requiring visitors to guess commands.
 */
export const TERMINAL_COMMANDS: readonly TerminalCommand[] = [
  {
    name: "help",
    description: "Show available commands.",
  },
  {
    name: "modules",
    description: "Inspect active project modules.",
    href: "#active-modules",
  },
  {
    name: "history",
    description: "Show operational history.",
    href: "#operational-history",
  },
  {
    name: "credentials",
    description: "Show credential stack.",
    href: "#credential-stack",
  },
  {
    name: "skills",
    description: "Show capability panels.",
    href: "#skills",
  },
  {
    name: "contact",
    description: "Open transmission section.",
    href: "#open-transmission",
  },
  {
    name: "clear",
    description: "Clear terminal output.",
  },
  {
    name: "exit",
    description: "Return to UI mode.",
  },
];