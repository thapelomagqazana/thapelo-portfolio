import { useEffect, useState } from "react";
import type { SiteSectionId } from "../components/navigation/navigation.types";

/**
 * Track the currently active page section using IntersectionObserver.
 *
 * Purpose:
 * - Keep active navigation highlighting stable and efficient
 * - Avoid scroll-event-heavy implementations
 * - Support desktop and mobile navigation with one source of truth
 */
export function useActiveSection(
  sectionIds: readonly SiteSectionId[],
): SiteSectionId {
  const [activeSection, setActiveSection] = useState<SiteSectionId>(
    sectionIds[0],
  );

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(resolveSectionElementId(id)))
      .filter((element): element is HTMLElement => element instanceof HTMLElement);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio,
          );

        if (visibleEntries.length === 0) {
          return;
        }

        const nextId = visibleEntries[0].target.getAttribute("data-section-id") as
          | SiteSectionId
          | null;

        if (nextId) {
          setActiveSection(nextId);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5, 0.75],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}

/**
 * Map a navigation section id to its concrete DOM section id.
 *
 * Purpose:
 * - Keep section naming stable even if labels evolve
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