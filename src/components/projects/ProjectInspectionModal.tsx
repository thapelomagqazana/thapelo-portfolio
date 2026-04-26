import { useEffect, useId, useRef } from "react";

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
 * - Present deep project inspection in a focused overlay.
 * - Keep project cards clean and compact.
 * - Provide accessible modal behavior for keyboard and screen reader users.
 *
 * Accessibility:
 * - Uses role="dialog" and aria-modal="true".
 * - Supports Escape to close.
 * - Moves focus into the modal when opened.
 * - Restores focus to the previously focused element when closed.
 */
export function ProjectInspectionModal({
  title,
  inspection,
  isOpen,
  onClose,
}: ProjectInspectionModalProps) {
  const titleId = useId();
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

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-4 py-6 backdrop-blur-sm"
      onMouseDown={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[var(--radius-panel-xl)] border border-accent-cyan/20 bg-bg-900/95 shadow-[0_0_70px_rgba(61,220,255,0.12)] focus-visible:outline-none"
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