/**
 * Compose CSS class names safely.
 *
 * Purpose:
 * - Keep component markup readable.
 * - Centralize common className joining behavior.
 * - Avoid ad hoc string concatenation inside JSX.
 */
export function classNames(
  ...values: Array<string | false | null | undefined>
): string {
  return values.filter(Boolean).join(" ");
}