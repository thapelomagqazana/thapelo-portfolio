/**
 * Canonical ESLint flat configuration for the portfolio repository.
 *
 * Responsibilities:
 * - Enforce consistent linting rules across the React + TypeScript codebase
 * - Use ESLint's flat config model as the single lint configuration source
 * - Keep linting focused on correctness and maintainability
 * - Avoid overlapping with Prettier's formatting responsibilities
 *
 * Design decisions:
 * - ESLint owns code-quality and correctness rules
 * - Prettier owns code formatting
 * - Generated artifacts and build outputs are excluded from linting
 *
 * Notes:
 * - This configuration is intentionally minimal and stable.
 * - Do not add stylistic rules here that duplicate Prettier behavior.
 * - Expand this config only when a WBS item explicitly requires it.
 */

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default tseslint.config(
  /**
   * Global ignore configuration.
   *
   * These paths should never be linted because they are either generated,
   * external, or not part of the canonical application source.
   */
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "coverage/**",
      "*.config.js",
      "*.config.ts",
    ],
  },

  /**
   * Base JavaScript recommended rules.
   */
  js.configs.recommended,

  /**
   * TypeScript recommended rules.
   *
   * This uses the official TypeScript ESLint flat config baseline.
   */
  ...tseslint.configs.recommended,

  /**
   * Application-specific linting rules for browser-based React source files.
   */
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      /**
       * React Hooks safety rules.
       *
       * These rules protect against invalid hook usage and missing dependency
       * mistakes that commonly lead to subtle runtime bugs.
       */
      ...reactHooks.configs.recommended.rules,

      /**
       * Vite + React refresh safety.
       *
       * Warn if exports are structured in ways that can break fast refresh.
       */
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      /**
       * Repository quality rules.
       *
       * These rules prioritize maintainability without becoming noisy.
       */
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "warn",
    },
  },
);