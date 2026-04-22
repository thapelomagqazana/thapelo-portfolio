/**
 * Scroll to a section by id with sticky-navigation offset support.
 *
 * Responsibilities:
 * - Provide one canonical section-scroll behavior
 * - Account for fixed/sticky navigation height
 * - Avoid duplicating anchor-scrolling logic across components
 */
export function scrollToSection(sectionId: string, offset = 88): void {
  const target = document.getElementById(sectionId);

  if (!target) {
    return;
  }

  const top =
    target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
}