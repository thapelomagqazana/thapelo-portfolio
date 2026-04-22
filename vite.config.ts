/// <reference types="vitest/config" />

/**
 * Vite configuration.
 *
 * Purpose:
 * - Keep the frontend build configuration explicit and minimal
 * - Register the React plugin
 * - Register the Tailwind Vite plugin as the canonical styling pipeline
 * - Register Vitest configuration in the same canonical config file
 *
 * Notes:
 * - This file intentionally avoids speculative configuration
 * - Do not add aliases, env shaping, or custom build overrides here
 *   until a WBS item explicitly requires them
 */

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * Canonical Vite + Vitest configuration for the portfolio repository.
 *
 * Current scope:
 * - React runtime support
 * - Tailwind CSS integration through the first-party Vite plugin
 * - Vitest browser-like test environment via jsdom
 */
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
  },
});