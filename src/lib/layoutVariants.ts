/**
 * Canonical layout variant maps.
 *
 * Purpose:
 * - Centralize bounded structural choices for layout primitives
 * - Prevent scattered, ad hoc layout decisions in feature code
 * - Keep layout responsibilities explicit and easy to evolve
 *
 * Important:
 * - These variants are intentionally limited.
 * - Add new layout variants only when they solve a real recurring need.
 * - Do not use this file to encode page-specific composition rules.
 */

export const containerVariants = {
  width: {
    standard: "max-w-[1200px]",
    wide: "max-w-[1320px]",
    narrow: "max-w-[960px]",
    full: "max-w-none",
  },
  gutter: {
    page: "px-6 md:px-8",
    compact: "px-4 md:px-6",
    none: "px-0",
  },
} as const;

export const gridVariants = {
  columns: {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
    6: "grid-cols-2 md:grid-cols-3 xl:grid-cols-6",
    12: "grid-cols-4 md:grid-cols-6 xl:grid-cols-12",
  },
  gap: {
    sm: "gap-3",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  },
  align: {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  },
} as const;

export const sectionVariants = {
  space: {
    compact: "py-12 md:py-16",
    standard: "py-20 md:py-24",
    hero: "py-28 md:py-32",
  },
  surface: {
    transparent: "",
    subtle: "bg-bg-850/35",
    elevated: "bg-bg-850/60",
  },
} as const;