export interface SystemCapabilityListProps {
  readonly capabilities: readonly string[];
}

/**
 * System capability snapshot.
 *
 * Responsibilities:
 * - Show what the module demonstrates
 * - Avoid raw tool-list presentation
 * - Keep the list short enough for fast scanning
 */
export function SystemCapabilityList({
  capabilities,
}: SystemCapabilityListProps) {
  return (
    <section aria-label="Capability snapshot">
      <p className="type-label text-text-muted">Capability Snapshot</p>

      <ul className="mt-3 grid gap-2">
        {capabilities.slice(0, 5).map((capability) => (
          <li
            key={capability}
            className="rounded-[var(--radius-panel-md)] border border-border-subtle bg-bg-800/55 px-3 py-2 font-mono text-[0.75rem] uppercase tracking-[0.08em] text-text-secondary"
          >
            {capability}
          </li>
        ))}
      </ul>
    </section>
  );
}