import type { ProjectCategoryFilter as ProjectCategoryFilterValue } from "./project.types";
import { PROJECT_CATEGORY_OPTIONS } from "./projectCategories";

export interface ProjectCategoryFilterProps {
  /**
   * Currently selected category filter.
   */
  readonly activeFilter: ProjectCategoryFilterValue;

  /**
   * Called when the visitor selects a filter.
   */
  readonly onChange: (filter: ProjectCategoryFilterValue) => void;
}

/**
 * Project category filter control.
 *
 * Responsibilities:
 * - Let recruiters narrow project modules by engineering domain
 * - Keep filtering lightweight, fast, and obvious
 * - Avoid complex filter panels or dropdowns
 *
 * Accessibility:
 * - Uses a tablist because one filter is active at a time
 * - Exposes selected state via aria-selected
 * - Buttons remain keyboard accessible by default
 */
export function ProjectCategoryFilter({
  activeFilter,
  onChange,
}: ProjectCategoryFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Project category filters"
      className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2"
    >
      {PROJECT_CATEGORY_OPTIONS.map((option) => {
        const isActive = option.value === activeFilter;

        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.value)}
            className={[
              "min-h-11 shrink-0 rounded-full border px-4 py-2",
              "font-mono text-[0.72rem] font-semibold uppercase tracking-[0.08em]",
              "transition-[border-color,background-color,color,box-shadow] duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg-900",
              isActive
                ? "border-accent-cyan bg-accent-cyan/10 text-text-primary shadow-[0_0_20px_rgba(34,211,238,0.12)]"
                : "border-border-subtle bg-bg-850/60 text-text-secondary hover:border-border-active hover:text-text-primary",
            ].join(" ")}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}