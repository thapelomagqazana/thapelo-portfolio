import { useEffect, useMemo, useState } from "react";
import type { SiteSectionId } from "../components/navigation/navigation.types";

/**
 * Resolve a navigation section id to its corresponding DOM section id.
 *
 * Purpose:
 * - Keep the mapping centralized
 * - Prevent string duplication across hooks and page composition
 */
function resolveSectionElementId(sectionId: SiteSectionId): string {
  switch (sectionId) {
    case "system":
      return "system";
    case "modules":
      return "active-modules";
    case "history":
      return "operational-history";
    case "credentials":
      return "credential-stack";
    case "skills":
      return "skills";
    case "contact":
      return "open-transmission";
    default: {
      // Exhaustive check (future-proof)
      const _exhaustive: never = sectionId;
      throw new Error(`Unhandled section id: ${_exhaustive}`);
    }
  }
}

/**
 * Track the currently active page section using IntersectionObserver
 * with hardened top-of-page and bottom-of-page handling.
 *
 * Responsibilities:
 * - Keep active navigation highlighting stable and efficient
 * - Avoid heavy scroll-listener math for general section tracking
 * - Correctly handle first and last section edge cases
 *
 * Stability rules:
 * - At the very top of the page, force the first section active
 * - At the very bottom of the page, force the last section active
 * - Otherwise prefer the most visible intersecting section
 */
export function useActiveSection(
  sectionIds: readonly SiteSectionId[],
): SiteSectionId {
  const [activeSection, setActiveSection] = useState<SiteSectionId>(
    sectionIds[0],
  );

  const resolvedIds = useMemo(
    () =>
      sectionIds.map((sectionId) => ({
        sectionId,
        elementId: resolveSectionElementId(sectionId),
      })),
    [sectionIds],
  );

  useEffect(() => {
    const elements = resolvedIds
      .map(({ sectionId, elementId }) => {
        const element = document.getElementById(elementId);

        if (!(element instanceof HTMLElement)) {
          return null;
        }

        if (!element.dataset.sectionId) {
          element.dataset.sectionId = sectionId;
        }

        return element;
      })
      .filter((element): element is HTMLElement => element instanceof HTMLElement);

    if (elements.length === 0) {
      return;
    }

    const firstSection = resolvedIds[0]?.sectionId;
    const lastSection = resolvedIds[resolvedIds.length - 1]?.sectionId;

    /**
     * Tracks the latest visible ratios per section so we can make stable decisions.
     */
    const visibilityMap = new Map<SiteSectionId, number>();

    function updateEdgeSections() {
      const scrollTop = window.scrollY;
      const viewportBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      /**
       * Top-of-page override:
       * ensure the first section is active when the user is effectively at the top.
       */
      if (firstSection && scrollTop <= 24) {
        setActiveSection(firstSection);
        return true;
      }

      /**
       * Bottom-of-page override:
       * ensure the last section becomes active even if it cannot satisfy
       * the normal intersection threshold near the document end.
       */
      if (lastSection && viewportBottom >= documentHeight - 24) {
        setActiveSection(lastSection);
        return true;
      }

      return false;
    }

    /**
     * Run once immediately so the first section is highlighted correctly
     * on initial page load.
     */
    updateEdgeSections();

    const observer = new IntersectionObserver(
      (entries) => {
        /**
         * First handle top/bottom edge cases.
         */
        if (updateEdgeSections()) {
          return;
        }

        for (const entry of entries) {
          const target = entry.target;

          if (!(target instanceof HTMLElement)) {
            continue;
          }

          const sectionId = target.dataset.sectionId as SiteSectionId | undefined;

          if (!sectionId) {
            continue;
          }

          visibilityMap.set(
            sectionId,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        }

        const nextSection = [...visibilityMap.entries()]
          .sort((a, b) => b[1] - a[1])[0]?.[0];

        if (nextSection && nextSection !== activeSection) {
          setActiveSection(nextSection);
        }
      },
      {
        root: null,
        /**
         * Bias toward the upper-middle viewport so the active section reflects
         * what the user is actually reading.
         */
        rootMargin: "-18% 0px -52% 0px",
        threshold: [0, 0.2, 0.35, 0.5, 0.7],
      },
    );

    elements.forEach((element) => observer.observe(element));

    /**
     * Scroll listener is used only for top/bottom edge correction.
     * It is passive and lightweight.
     */
    function handleScroll() {
      updateEdgeSections();
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, resolvedIds, sectionIds]);

  return activeSection;
}