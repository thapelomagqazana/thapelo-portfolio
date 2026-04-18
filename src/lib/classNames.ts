/**
 * Utility for composing CSS class names safely.
 *
 * Purpose:
 * - Avoid repetitive string concatenation in UI primitives
 * - Ignore falsy values gracefully
 * - Keep primitive components readable and maintainable
 *
 * Design notes:
 * - This is intentionally tiny and framework-agnostic.
 * - It avoids adding a dependency for a trivial concern.
 */
export function classNames(
  ...values: Array<string | false | null | undefined>
): string {
  return values.filter(Boolean).join(" ");
}