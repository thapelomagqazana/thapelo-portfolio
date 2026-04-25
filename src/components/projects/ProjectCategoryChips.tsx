import type { ProjectCategory } from "./project.types";
import { formatProjectCategory } from "./projectCategories";

export interface ProjectCategoryChipsProps {
  readonly categories: readonly ProjectCategory[];
}

/**
 * Project category scan chips.
 *
 * Responsibilities:
 * - Make category classification visible even before filtering
 * - Keep categories domain-based, not tool-based
 * - Support fast recruiter scanning
 */
export function ProjectCategoryChips({ categories }: ProjectCategoryChipsProps) {
  return (
    <div
      aria-label="Project categories"
      className="flex flex-wrap gap-2"
    >
      {categories.slice(0, 2).map((category) => (
        <span
          key={category}
          className="rounded-full border border-border-subtle bg-bg-800/45 px-3 py-1 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-text-muted"
        >
          {formatProjectCategory(category)}
        </span>
      ))}
    </div>
  );
}