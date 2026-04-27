import { forwardRef } from "react";

import type { PortfolioUIMode } from "../../theme/theme.types";

export interface ModeToggleProps {
  readonly mode: PortfolioUIMode;
  readonly onChange: (mode: PortfolioUIMode) => void;
}

/**
 * UI / Terminal mode toggle.
 */
export const ModeToggle = forwardRef<HTMLButtonElement, ModeToggleProps>(
  function ModeToggle({ mode, onChange }, ref) {
    return (
      <div
        role="group"
        aria-label="Portfolio viewing mode"
        className="inline-flex rounded-[var(--radius-panel-md)] bg-bg-900/40 p-1 ring-1 ring-white/10"
      >
        <ModeButton
          label="UI Mode"
          isActive={mode === "UI"}
          onClick={() => onChange("UI")}
        />

        <ModeButton
          ref={ref}
          label="Terminal Mode"
          isActive={mode === "TERMINAL"}
          onClick={() => onChange("TERMINAL")}
        />
      </div>
    );
  },
);

interface ModeButtonProps {
  readonly label: string;
  readonly isActive: boolean;
  readonly onClick: () => void;
}

const ModeButton = forwardRef<HTMLButtonElement, ModeButtonProps>(
  function ModeButton({ label, isActive, onClick }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={isActive}
        onClick={onClick}
        className={
          isActive
            ? "rounded-[var(--radius-panel-sm)] bg-accent-cyan/10 px-3 py-2 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-accent-cyan ring-1 ring-accent-cyan/25"
            : "rounded-[var(--radius-panel-sm)] px-3 py-2 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-text-muted transition hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
        }
      >
        {label}
      </button>
    );
  },
);