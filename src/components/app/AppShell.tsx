import type { ReactNode } from "react";

import { ModeToggle } from "../mode/ModeToggle";
import { TerminalOverlay } from "../terminal/TerminalOverlay";
import { useTheme } from "../../theme/useTheme";

export interface AppShellProps {
  readonly children: ReactNode;
}

/**
 * Application shell.
 *
 * Responsibilities:
 * - Own global UI mode state.
 * - Apply theme and mode attributes.
 * - Keep normal UI mode stable while Terminal mode is layered as an overlay.
 */
export function AppShell({ children }: AppShellProps) {
  const { preference, mode, setMode } = useTheme();

  return (
    <div
      data-theme={preference.theme}
      data-ui-mode={mode.toLowerCase()}
    >
      <div className="fixed bottom-4 right-4 z-40">
        <ModeToggle mode={mode} onChange={setMode} />
      </div>

      {children}

      <TerminalOverlay
        isOpen={mode === "TERMINAL"}
        onClose={() => setMode("UI")}
        onModeChange={setMode}
      />
    </div>
  );
}