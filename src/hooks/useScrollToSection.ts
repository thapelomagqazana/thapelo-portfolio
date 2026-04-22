import { useCallback } from "react";
import { scrollToAnchor, scrollToSection } from "../lib/scrollToSection";

/**
 * Stable API returned by the section-scroll hook.
 */
export interface UseScrollToSectionResult {
  /**
   * Scroll to a raw section id.
   */
  readonly scrollToSectionId: (sectionId: string) => boolean;

  /**
   * Scroll to an anchor-style href.
   */
  readonly scrollToAnchorHref: (href: `#${string}`) => boolean;
}

/**
 * Hook for section navigation and guided movement.
 *
 * Responsibilities:
 * - Provide stable callbacks for in-page section scrolling
 * - Prevent repeated inline scroll logic across components
 * - Keep navigation behavior easy to test and evolve
 */
export function useScrollToSection(): UseScrollToSectionResult {
  const scrollToSectionId = useCallback((sectionId: string) => {
    return scrollToSection(sectionId);
  }, []);

  const scrollToAnchorHref = useCallback((href: `#${string}`) => {
    return scrollToAnchor(href);
  }, []);

  return {
    scrollToSectionId,
    scrollToAnchorHref,
  };
}