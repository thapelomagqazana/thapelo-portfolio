/**
 * Canonical typography contracts and helpers.
 *
 * Purpose:
 * - Define the supported typography hierarchy in one place
 * - Keep semantic heading rules explicit
 * - Prevent ad hoc text-role expansion across the codebase
 *
 * Design notes:
 * - This file is intentionally small and stable.
 * - It represents the typography vocabulary, not rendering logic.
 */

/**
 * Supported semantic heading tags for structured content.
 */
export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

/**
 * Supported typography variants.
 *
 * These variants map to the canonical text hierarchy for the portfolio.
 */
export type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "body-muted"
  | "caption"
  | "label"
  | "mono-output";

/**
 * Ordered heading levels used for semantic validation rules and future checks.
 */
export const HEADING_LEVEL_ORDER: readonly HeadingTag[] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
] as const;

/**
 * Returns true when a typography variant is heading-like.
 */
export function isHeadingVariant(variant: TypographyVariant): boolean {
  return variant === "h1" || variant === "h2" || variant === "h3";
}

/**
 * Returns true when the supplied element is a semantic heading.
 */
export function isHeadingTag(value: string): value is HeadingTag {
  return HEADING_LEVEL_ORDER.includes(value as HeadingTag);
}