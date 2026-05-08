import { useEffect, useId, useRef } from "react";

import { loadGsapIfAllowed } from "../../lib/animation/gsapLoader";
import type { ProjectInspectionDetail } from "./project.types";
import { ProjectInspectionPanel } from "./ProjectInspectionPanel";

export interface ProjectInspectionModalProps {
  readonly title: string;
  readonly inspection: ProjectInspectionDetail;
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

/**
 * Project inspection modal.
 *
 * Responsibilities:
 * - Present deep project inspection in a focused overlay
 * - Preserve accessible modal behavior
 * - Add a restrained opacity/translate transition when motion is allowed
 *
 * Accessibility:
 * - Uses role="dialog" and aria-modal="true"
 * - Supports Escape to close
 * - Moves focus into the modal immediately when opened
 * - Restores focus to the previously focused element when closed
 *
 * Motion:
 * - Animates opacity and transform only
 * - Does not delay content availability or focus
 * - Respects reduced motion through loadGsapIfAllowed()
 */
export function ProjectInspectionModal({
  title,
  inspection,
  isOpen,
  onClose,
}: ProjectInspectionModalProps) {
  const titleId = useId();
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    let cleanup: (() => void) | undefined;

    async function animateOpen() {
      const gsap = await loadGsapIfAllowed();

      if (!gsap || !overlayRef.current || !dialogRef.current) {
        return;
      }

      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set(dialogRef.current, { opacity: 0, y: 8 });

      const timeline = gsap.timeline({
        defaults: {
          duration: 0.22,
          ease: "power2.out",
        },
      });

      timeline.to(overlayRef.current, { opacity: 1 }, 0);
      timeline.to(dialogRef.current, { opacity: 1, y: 0 }, 0);

      cleanup = () => {
        timeline.kill();
      };
    }

    void animateOpen();

    return () => {
      cleanup?.();
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-4 py-6 opacity-100 backdrop-blur-sm"
      onMouseDown={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[var(--radius-panel-xl)] border border-accent-cyan/20 bg-bg-900/95 opacity-100 shadow-[0_0_70px_rgba(61,220,255,0.12)] focus-visible:outline-none"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <ProjectInspectionPanel
          title={title}
          titleId={titleId}
          inspection={inspection}
          onClose={onClose}
        />
      </div>
    </div>
  );
}