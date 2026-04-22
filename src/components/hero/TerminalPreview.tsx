import type { TerminalLine } from "./hero.types";
import { Panel } from "../ui/Panel";

/**
 * Props for the TerminalPreview component.
 */
export interface TerminalPreviewProps {
  readonly command: string;
  readonly lines: readonly TerminalLine[];
  readonly id?: string;
}

/**
 * Terminal-inspired preview panel.
 *
 * Responsibilities:
 * - Reinforce the engineering-console theme with a believable CLI surface.
 * - Provide deterministic, non-interactive hero feedback without JS complexity.
 * - Remain accessible and readable on all screen sizes.
 */
export function TerminalPreview({
  command,
  lines,
  id = "terminal-preview",
}: TerminalPreviewProps) {
  return (
    <Panel id={id} className="bg-bg-900/80">
      <div className="mb-4 flex items-center gap-2" aria-hidden="true">
        <span className="h-3 w-3 rounded-full bg-accent-red/80" />
        <span className="h-3 w-3 rounded-full bg-accent-amber/80" />
        <span className="h-3 w-3 rounded-full bg-accent-green/80" />
      </div>

      <p className="type-label">Terminal Preview</p>

      <div className="mt-4 font-mono text-sm leading-7 text-text-secondary">
        <p>
          <span className="text-accent-cyan">$</span>{" "}
          <span className="text-text-primary">{command}</span>
        </p>

        <div className="mt-3 space-y-1" aria-live="polite">
          {lines.map((line) => (
            <p key={line.id} className="type-mono-output">
              {line.content}
            </p>
          ))}
        </div>

        <p className="mt-3 text-accent-cyan">
          <span aria-hidden="true" className="terminal-cursor">▋</span>
          <span className="sr-only">Active terminal cursor</span>
        </p>
      </div>
    </Panel>
  );
}