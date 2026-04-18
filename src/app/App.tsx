/**
 * Root application shell for dependency validation.
 *
 * Purpose:
 * - Confirms that Tailwind utilities render
 * - Confirms Motion resolves in the React runtime
 * - Confirms Lucide React icons render
 * - Confirms React Router primitives resolve
 * - Confirms Zustand resolves and can update local validation state
 *
 * This is intentionally NOT product UI.
 * It is a bounded validation shell for WBS 0.2.1 only.
 */

import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Activity, Route, ShieldCheck } from "lucide-react";

import { useDependencySmokeStore } from "./smoke/dependencySmokeStore";

/**
 * Root application shell.
 */
export default function App() {
  const validated = useDependencySmokeStore((state) => state.validated);
  const markValidated = useDependencySmokeStore((state) => state.markValidated);

  /**
   * Mark the smoke store as validated on first render.
   *
   * This proves Zustand is operational without introducing real application state.
   */
  useEffect(() => {
    markValidated();
  }, [markValidated]);

  return (
    <main className="smoke-shell">
      <div className="smoke-grid">
        <motion.section
          className="smoke-panel"
          aria-labelledby="dependency-smoke-title"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="smoke-eyebrow">DEPENDENCY VALIDATION</p>

          <h1 id="dependency-smoke-title" className="smoke-title">
            Core frontend dependencies are wired and ready
          </h1>

          <p className="smoke-copy">
            This temporary validation screen confirms the repository baseline for
            Tailwind CSS, Motion, Zustand, React Router, and Lucide React before
            feature implementation begins.
          </p>

          <div className="smoke-status-list" role="list" aria-label="Dependency smoke checks">
            <article className="smoke-status-card" role="listitem">
              <div className="flex items-center gap-3">
                <ShieldCheck aria-hidden="true" className="h-5 w-5 text-cyan-300" />
                <div>
                  <p className="smoke-status-label">Tailwind CSS</p>
                  <p className="smoke-status-value">Compiled via Vite plugin</p>
                </div>
              </div>
            </article>

            <article className="smoke-status-card" role="listitem">
              <div className="flex items-center gap-3">
                <Activity aria-hidden="true" className="h-5 w-5 text-cyan-300" />
                <div>
                  <p className="smoke-status-label">Motion</p>
                  <p className="smoke-status-value">Animated shell rendered</p>
                </div>
              </div>
            </article>

            <article className="smoke-status-card" role="listitem">
              <div className="flex items-center gap-3">
                <Route aria-hidden="true" className="h-5 w-5 text-cyan-300" />
                <div>
                  <p className="smoke-status-label">React Router</p>
                  <p className="smoke-status-value">BrowserRouter + Link resolved</p>
                </div>
              </div>
            </article>

            <article className="smoke-status-card" role="listitem">
              <p className="smoke-status-label">Zustand</p>
              <p className="smoke-status-value">
                {validated ? "Smoke store updated successfully" : "Pending validation"}
              </p>
            </article>
          </div>

          <div className="mt-8">
            <Link to="/" className="smoke-link">
              Re-run dependency validation
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}