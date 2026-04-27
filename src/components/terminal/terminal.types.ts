/**
 * Guardrail that keeps Terminal Mode useful rather than gimmicky.
 */
export interface ModeSwitchGuardrail {
  /**
   * Rule that keeps the mode switch usable.
   */
  readonly rule: string;

  /**
   * Risk this rule prevents.
   */
  readonly prevents: string;
}

/**
 * Terminal command shown in the overlay.
 */
export interface TerminalCommand {
  readonly name: string;
  readonly description: string;

  /**
   * Optional section anchor connected to real portfolio content.
   */
  readonly href?: `#${string}`;
}