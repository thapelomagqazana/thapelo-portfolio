/**
 * Vite configuration.
 *
 * Purpose:
 * - Keeps the frontend build configuration explicit and minimal
 * - Registers the React plugin
 * - Registers the Tailwind Vite plugin as the canonical styling pipeline
 *
 * Notes:
 * - This file intentionally avoids speculative configuration.
 * - Do not add aliases, env shaping, or custom build overrides here
 *   until a WBS item explicitly requires them.
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
 */
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});