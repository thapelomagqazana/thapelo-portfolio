/**
 * Props for the MobileNavTrigger component.
 */
export interface MobileNavTriggerProps {
  /**
   * Whether the mobile navigation is currently open.
   */
  readonly isOpen: boolean;

  /**
   * Called when the trigger is activated.
   */
  readonly onOpen: () => void;
}

/**
 * Mobile navigation trigger.
 *
 * Responsibilities:
 * - Provide a clear, discoverable entry point for mobile navigation
 * - Preserve strong touch targets for one-handed use
 * - Communicate navigation state access without clutter
 *
 * Accessibility:
 * - Exposes a clear accessible name
 * - Uses aria-expanded to communicate open/closed state
 * - Uses aria-controls to point to the controlled panel
 */
export function MobileNavTrigger({
  isOpen,
  onOpen,
}: MobileNavTriggerProps) {
  return (
    <button
      type="button"
      aria-label="Open mobile navigation"
      aria-expanded={isOpen}
      aria-controls="mobile-navigation-panel"
      onClick={onOpen}
      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-panel-md)] border border-border-subtle bg-bg-850/70 text-text-primary transition-[color,background-color,border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-border-active hover:bg-bg-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg-900 md:hidden"
    >
      <span aria-hidden="true" className="text-base leading-none">
        ☰
      </span>
    </button>
  );
}