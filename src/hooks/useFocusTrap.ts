import { useEffect } from "react";

/**
 * Keyboard selectors for focusable elements inside the mobile navigation panel.
 */
const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(",");

/**
 * Trap keyboard focus inside a container while active.
 *
 * Responsibilities:
 * - Keep keyboard focus within the mobile navigation panel
 * - Improve accessibility for keyboard and assistive-technology users
 * - Restore a more dialog-like navigation experience on mobile overlays
 */
export function useFocusTrap(
  container: HTMLElement | null,
  isActive: boolean,
): void {
  useEffect(() => {
    if (!container || !isActive) {
      return;
    }

    const focusable = Array.from(
      container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
    ).filter((element) => !element.hasAttribute("disabled"));

    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Tab") {
        return;
      }

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }

        return;
      }

      if (document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    container.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("keydown", handleKeyDown);
    };
  }, [container, isActive]);
}