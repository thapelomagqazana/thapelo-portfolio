/**
 * Dependency smoke-validation store.
 *
 * Purpose:
 * - Proves that Zustand resolves and operates correctly in this repository
 * - Provides a tiny, isolated validation surface for WBS 0.2.1
 *
 * Important:
 * - This is NOT production domain state.
 * - This file exists only to validate dependency wiring.
 * - Replace or remove it once real application state is introduced.
 */

import { create } from "zustand";

/**
 * State contract for dependency smoke validation.
 */
export interface DependencySmokeState {
  /**
   * Marks whether the temporary validation state has been observed.
   */
  readonly validated: boolean;

  /**
   * Sets the validated flag to true.
   */
  markValidated: () => void;
}

/**
 * Minimal Zustand hook for smoke validation only.
 */
export const useDependencySmokeStore = create<DependencySmokeState>((set) => ({
  validated: false,
  markValidated: () => {
    set({ validated: true });
  },
}));