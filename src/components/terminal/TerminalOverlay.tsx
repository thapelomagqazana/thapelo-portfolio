import { useEffect, useRef } from "react";

import type { PortfolioUIMode } from "../../theme/theme.types";
import { TERMINAL_COMMANDS } from "./terminal.content";
import { TerminalCommandList } from "./TerminalCommandList";

export interface TerminalOverlayProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly onModeChange: (mode: PortfolioUIMode) => void;
}

/**
 * Terminal exploration overlay.
 *
 * Responsibilities:
 * - Provide optional terminal-style portfolio exploration.
 * - Keep UI Mode as the primary recruiter experience.
 * - Preserve contact and navigation access.
 * - Make exit obvious at all times.
 *
 * Accessibility:
 * - Escape closes overlay.
 * - Focus moves to the terminal shell on open.
 * - Content remains readable text.
 */
export function TerminalOverlay({
  isOpen,
  onClose,
  onModeChange,
}: TerminalOverlayProps) {
  const shellRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    shellRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleExit();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  function handleExit() {
    onModeChange("UI");
    onClose();
  }

  function handleNavigate(href: `#${string}`) {
    const target = document.querySelector(href);

    if (target instanceof HTMLElement) {
      handleExit();
      window.setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Terminal portfolio mode"
      className="fixed inset-0 z-50 bg-bg-950/80 p-4 backdrop-blur-md sm:p-8"
    >
      <div
        ref={shellRef}
        tabIndex={-1}
        className="mx-auto flex max-h-[calc(100vh-4rem)] max-w-5xl flex-col overflow-hidden rounded-[var(--radius-panel-xl)] border border-accent-cyan/25 bg-bg-900/95 shadow-[0_0_60px_rgba(61,220,255,0.12)] focus-visible:outline-none"
      >
        <header className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent-cyan">
              Terminal Mode
            </p>
            <p className="mt-1 text-xs text-text-muted">
              Optional exploration layer. UI mode remains available underneath.
            </p>
          </div>

          <button
            type="button"
            onClick={handleExit}
            className="rounded-[var(--radius-panel-md)] bg-bg-800/60 px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-secondary ring-1 ring-white/10 transition hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
          >
            Exit Terminal
          </button>
        </header>

        <div className="overflow-y-auto p-5 font-mono text-sm leading-7 text-text-secondary">
          <p className="text-accent-green">portfolio@control-room:~$ help</p>

          <TerminalCommandList
            commands={TERMINAL_COMMANDS}
            onNavigate={handleNavigate}
          />

          <div className="mt-6 rounded-[var(--radius-panel-lg)] bg-bg-800/25 p-4 ring-1 ring-white/5">
            <p className="text-accent-cyan">
              Terminal mode is intentionally lightweight.
            </p>
            <p className="mt-2 text-text-muted">
              It mirrors real portfolio sections and keeps recruiter-critical
              content in UI mode. You can exit anytime.
            </p>
          </div>

          <p className="mt-6 text-accent-green">portfolio@control-room:~$ _</p>
        </div>
      </div>
    </div>
  );
}