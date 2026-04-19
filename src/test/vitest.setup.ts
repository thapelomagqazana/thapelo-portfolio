import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

/**
 * Default test mock for reduced motion.
 *
 * Purpose:
 * - Keep motion-heavy components deterministic in tests
 * - Prefer immediate static rendering unless a test explicitly opts out
 */
vi.mock("motion/react", async () => {
  const actual = await vi.importActual<typeof import("motion/react")>("motion/react");

  return {
    ...actual,
    useReducedMotion: () => true,
  };
});