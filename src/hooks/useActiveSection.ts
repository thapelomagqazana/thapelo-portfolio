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
    case "contact":
      return "open-transmission";
  }
}

/**
 * Track the currently active page section using IntersectionObserver.
 *
 * Responsibilities:
 * - Keep active navigation highlighting stable and efficient
 * - Avoid heavy scroll-listener math
 * - Support desktop and mobile navigation with one source of truth
 *
 * Stability rules:
 * - Prefer the most visible intersecting section
 * - Use threshold and rootMargin tuning to reduce flicker
 * - Always fall back to the first known section if nothing is intersecting
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

        /**
         * Guarantee a stable section id on the DOM node even if page composition
         * forgot to include it explicitly.
         */
        if (!element.dataset.sectionId) {
          element.dataset.sectionId = sectionId;
        }

        return element;
      })
      .filter((element): element is HTMLElement => element instanceof HTMLElement);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length === 0) {
          return;
        }

        const target = visibleEntries[0].target;

        if (!(target instanceof HTMLElement)) {
          return;
        }

        const nextId = target.dataset.sectionId as SiteSectionId | undefined;

        if (nextId && nextId !== activeSection) {
          setActiveSection(nextId);
        }
      },
      {
        root: null,
        rootMargin: "-18% 0px -52% 0px",
        threshold: [0.25, 0.4, 0.55, 0.7],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [activeSection, resolvedIds]);

  return activeSection;
}