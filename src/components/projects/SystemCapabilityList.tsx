export interface SystemCapabilityListProps {
  readonly capabilities: readonly string[];
}

/**
 * Compact capability snapshot.
 *
 * Purpose:
 * - Show what the project demonstrates
 * - Keep capabilities secondary to purpose and outcome
 */
export function SystemCapabilityList({
  capabilities,
}: SystemCapabilityListProps) {
  return (
    <section aria-label="Capability snapshot">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
        Capabilities
      </p>

      <ul className="mt-3 flex flex-wrap gap-2">
        {capabilities.slice(0, 5).map((capability) => (
          <li
            key={capability}
            className="rounded-full border border-border-subtle px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-secondary"
          >
            {capability}
          </li>
        ))}
      </ul>
    </section>
  );
}