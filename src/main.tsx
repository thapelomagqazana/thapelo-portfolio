/**
 * Application entry point.
 *
 * Responsibilities:
 * - Bootstraps React into the root DOM node
 * - Loads the global stylesheet
 * - Mounts the top-level application shell
 *
 * Notes:
 * - This file should stay intentionally small.
 * - Cross-cutting providers can be added here later
 *   (e.g. router, state, theme, error boundaries).
 */

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app/App";
import "./styles/index.css";

/**
 * Defensive root lookup.
 *
 * Vite's default entry HTML provides a root element with id="root".
 * This explicit check fails early with a clear message if the HTML
 * contract is broken in the future.
 */
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Application bootstrap failed: missing DOM node with id "root".');
}

/**
 * Create and render the React application root.
 *
 * StrictMode is enabled for development-time checks and safer React code.
 */
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);