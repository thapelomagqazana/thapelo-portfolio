/**
 * Global test setup.
 *
 * Responsibilities:
 * - Register Testing Library DOM matchers with Vitest
 * - Keep test environment setup in one canonical place
 */

import "@testing-library/jest-dom/vitest";

/**
 * Global IntersectionObserver mock for jsdom-based tests.
 *
 * Purpose:
 * - Support components that rely on viewport observation
 * - Keep unit tests deterministic in a non-browser environment
 */
class MockIntersectionObserver {
  constructor(_: IntersectionObserverCallback) {}

  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

Object.defineProperty(globalThis, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});