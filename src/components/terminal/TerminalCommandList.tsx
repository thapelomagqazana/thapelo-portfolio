import type { TerminalCommand } from "./terminal.types";

export interface TerminalCommandListProps {
  readonly commands: readonly TerminalCommand[];
  readonly onNavigate: (href: `#${string}`) => void;
}

/**
 * Terminal command list.
 *
 * Responsibilities:
 * - Explain available commands immediately.
 * - Mirror real portfolio sections through anchors.
 * - Keep Terminal Mode readable and useful without command guessing.
 *
 * Accessibility:
 * - Uses a labelled list.
 * - Links are real buttons for keyboard access.
 */
export function TerminalCommandList({
  commands,
  onNavigate,
}: TerminalCommandListProps) {
  const visibleCommands = commands.filter(isRenderableCommand);

  return (
    <section aria-labelledby="terminal-commands-heading">
      <h4
        id="terminal-commands-heading"
        className="mt-4 text-sm font-semibold text-text-primary"
      >
        Available commands
      </h4>

      <ul
        aria-labelledby="terminal-commands-heading"
        className="mt-3 grid gap-2 text-text-secondary sm:grid-cols-2"
      >
        {visibleCommands.map((command) => (
          <li key={command.name}>
            <TerminalCommandRow command={command} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
    </section>
  );
}

interface TerminalCommandRowProps {
  readonly command: TerminalCommand;
  readonly onNavigate: (href: `#${string}`) => void;
}

/**
 * Single terminal command row.
 *
 * Purpose:
 * - Keep terminal commands readable.
 * - Make real section navigation obvious when available.
 */
function TerminalCommandRow({ command, onNavigate }: TerminalCommandRowProps) {
  const content = (
    <>
      <span className="text-accent-green">{command.name}</span>
      <span className="text-text-muted"> — {command.description}</span>
    </>
  );

  if (!command.href) {
    return <span>{content}</span>;
  }

  return (
    <button
      type="button"
      onClick={() => onNavigate(command.href!)}
      className="text-left transition hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
    >
      {content}
    </button>
  );
}

/**
 * Prevents incomplete commands from rendering.
 */
function isRenderableCommand(command: TerminalCommand): boolean {
  return command.name.trim().length > 0 && command.description.trim().length > 0;
}