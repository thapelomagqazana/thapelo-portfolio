import type { ReactNode } from "react";
import { useRef } from "react";

import { useTheme } from "../../theme/useTheme";
import { ModeToggle } from "../mode/ModeToggle";
import { TerminalOverlay } from "../terminal/TerminalOverlay";

export interface AppShellProps {
  readonly children: ReactNode;
}

/**
 * Application shell.
 *
 * Responsibilities:
 * - Own global UI mode state.
 * - Apply theme and mode attributes.
 * - Keep Terminal Mode as an overlay, not a page replacement.
 * - Restore focus to the mode toggle after closing Terminal Mode.
 */
export function AppShell({ children }: AppShellProps) {
  const { preference, mode, setMode } = useTheme();
  const terminalToggleRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div data-theme={preference.theme} data-ui-mode={mode.toLowerCase()}>
      <div className="fixed bottom-4 right-4 z-40">
        <ModeToggle ref={terminalToggleRef} mode={mode} onChange={setMode} />
      </div>

      {children}

      <TerminalOverlay
        isOpen={mode === "TERMINAL"}
        onClose={() => setMode("UI")}
        onModeChange={setMode}
        restoreFocusRef={terminalToggleRef}
      />
    </div>
  );
}