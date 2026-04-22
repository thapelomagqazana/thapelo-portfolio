import { useEffect } from "react";

/**
 * Lock body scroll while an overlay or mobile navigation panel is open.
 *
 * Purpose:
 * - Prevent background scrolling when the mobile navigation sheet is active
 * - Keep overlay behavior predictable and comfortable on touch devices
 */
export function useLockBodyScroll(isLocked: boolean): void {
  useEffect(() => {
    if (!isLocked) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLocked]);
}