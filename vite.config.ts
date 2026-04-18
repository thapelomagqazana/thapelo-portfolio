/// <reference types="vitest/config" />

/**
 * Vite configuration.
 *
 * Purpose:
 * - Keeps the frontend build configuration explicit and minimal
 * - Registers the React plugin
 * - Registers the Tailwind Vite plugin as the canonical styling pipeline
 * - Provides the canonical Vitest configuration for local component tests
 *
 * Notes:
 * - This file intentionally avoids speculative configuration.
 * - Do not add aliases, env shaping, or custom build overrides here
 *   until a WBS item explicitly requires them.
 * - Vitest reads vite.config.* by default, so colocating the `test`
 *   configuration here keeps the repo simple and deterministic.
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * Canonical Vite configuration for the portfolio repository.
 *
 * Current scope:
 * - React runtime support
 * - Tailwind CSS integration through the first-party Vite plugin
 * - Vitest test runner configuration for jsdom-based component tests
 */
export default defineConfig({
  plugins: [react(), tailwindcss()],

  test: {
    /**
     * Enables global test APIs like:
     * - describe
     * - it
     * - expect
     *
     * This keeps test files concise.
     */
    globals: true,

    /**
     * Uses a browser-like DOM environment for React component tests.
     */
    environment: "jsdom",

    /**
     * Optional but recommended setup file for extending assertions,
     * e.g. @testing-library/jest-dom.
     */
    setupFiles: "./src/test/setup.ts",
  },
});