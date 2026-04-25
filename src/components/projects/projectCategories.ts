import type { ProjectCategory, ProjectCategoryFilter } from "./project.types";

/**
 * Canonical project category options.
 *
 * Purpose:
 * - Keep filter labels centralized
 * - Prevent inconsistent category wording
 * - Support recruiter-focused scanning by engineering domain
 */
export const PROJECT_CATEGORY_OPTIONS: readonly {
  readonly value: ProjectCategoryFilter;
  readonly label: string;
}[] = [
  { value: "ALL", label: "All" },
  { value: "SYSTEMS", label: "Systems" },
  { value: "QUALITY", label: "Quality" },
  { value: "FRONTEND", label: "Frontend" },
  { value: "DEVOPS", label: "DevOps" },
  { value: "DATA", label: "Data / AI" },
];

/**
 * Resolve a category enum into a readable label.
 */
export function formatProjectCategory(category: ProjectCategory): string {
  const option = PROJECT_CATEGORY_OPTIONS.find(
    (item) => item.value === category,
  );

  return option?.label ?? category;
}