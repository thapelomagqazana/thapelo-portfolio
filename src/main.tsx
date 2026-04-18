/**
 * Application entry point.
 *
 * Responsibilities:
 * - Bootstraps the React application
 * - Loads the canonical stylesheet entry point
 * - Mounts the app inside BrowserRouter for dependency smoke validation
 *
 * Why BrowserRouter now?
 * - WBS 0.2.1 requires React Router import validation
 * - We validate router compatibility without creating actual route definitions
 *
 * Out of scope:
 * - route trees
 * - data routers
 * - navigation flows
 * - state providers beyond smoke validation
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./app/App";
import "./styles/index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Application bootstrap failed: missing DOM node with id "root".');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);