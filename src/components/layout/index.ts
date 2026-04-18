/**
 * Shared export boundary for canonical layout primitives.
 *
 * Purpose:
 * - Provide a stable import path for all shared layout building blocks
 * - Reduce path churn and duplication across feature modules
 */
export * from "./Container";
export * from "./Grid";
export * from "./Section";