/**
 * Default sticky navigation offset used when aligning sections after scroll.
 *
 * This should approximately match the rendered sticky header height plus a
 * small breathing room so section headings are not clipped.
 */
const DEFAULT_STICKY_OFFSET_PX = 88;

/**
 * Resolve whether the user prefers reduced motion.
 *
 * Purpose:
 * - Keep scroll transitions accessible
 * - Allow the system to switch to instant positioning when appropriate
 */
function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Scroll to a section by DOM id with sticky-navigation offset support.
 *
 * Responsibilities:
 * - Provide one canonical in-page scrolling behavior
 * - Account for sticky navigation height
 * - Keep transitions fast, smooth, and predictable
 * - Respect reduced-motion preferences
 *
 * Returns:
 * - `true` if the target section was found and a scroll was attempted
 * - `false` if the target section could not be found
 */
export function scrollToSection(
  sectionId: string,
  offset = DEFAULT_STICKY_OFFSET_PX,
): boolean {
  const target = document.getElementById(sectionId);

  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top,
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });

  return true;
}

/**
 * Scroll to a section by href-style anchor.
 *
 * Supported inputs:
 * - "#active-modules"
 * - "#credential-stack"
 *
 * Returns:
 * - `true` if the target section was found
 * - `false` otherwise
 */
export function scrollToAnchor(
  href: `#${string}`,
  offset = DEFAULT_STICKY_OFFSET_PX,
): boolean {
  return scrollToSection(href.replace(/^#/, ""), offset);
}