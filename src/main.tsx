import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { Analytics } from "@vercel/analytics/react";

import "./styles/globals.css";

/**
 * Root application bootstrap.
 *
 * Responsibilities:
 * - Mount React application
 * - Initialize routing
 * - Initialize global providers (analytics, etc.)
 *
 * Design rules:
 * - Keep this file thin
 * - Do NOT place business logic here
 * - All side-effects must be delegated to providers
 *
 * Analytics:
 * - Injected as a provider to ensure:
 *   - production-only execution
 *   - non-blocking behavior
 *   - isolation from UI logic
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Global analytics lifecycle (non-blocking, production-only) */}
      <Analytics />
      {/* Application root */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);