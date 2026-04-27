import { describe, expect, it } from "vitest";

import { MODE_SWITCH_GUARDRAILS, TERMINAL_COMMANDS } from "./terminal.content";

describe("terminal.content", () => {
  it("includes required guardrails", () => {
    expect(MODE_SWITCH_GUARDRAILS.length).toBeGreaterThanOrEqual(5);

    expect(
      MODE_SWITCH_GUARDRAILS.some((item) =>
        item.rule.toLowerCase().includes("ui mode remains"),
      ),
    ).toBe(true);

    expect(
      MODE_SWITCH_GUARDRAILS.some((item) =>
        item.rule.toLowerCase().includes("exit terminal"),
      ),
    ).toBe(true);
  });

  it("includes required terminal commands", () => {
    const names = TERMINAL_COMMANDS.map((command) => command.name);

    expect(names).toEqual(
      expect.arrayContaining([
        "help",
        "modules",
        "history",
        "credentials",
        "skills",
        "contact",
        "clear",
        "exit",
      ]),
    );
  });

  it("mirrors real portfolio anchors for recruiter-critical sections", () => {
    const linkedCommands = TERMINAL_COMMANDS.filter((command) => command.href);

    expect(linkedCommands.map((command) => command.href)).toEqual(
      expect.arrayContaining([
        "#active-modules",
        "#operational-history",
        "#credential-stack",
        "#skills",
        "#open-transmission",
      ]),
    );
  });
});