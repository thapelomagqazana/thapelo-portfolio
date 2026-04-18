/**
 * Root application shell for WBS 0.3.1 token validation.
 *
 * Responsibilities:
 * - Provide a temporary surface that proves the token layer is working
 * - Validate custom colors, typography, shadows, borders, and semantic states
 * - Keep token verification isolated from future product features
 *
 * Important:
 * - This is not the final homepage.
 * - It should be replaced or absorbed once real feature modules exist.
 * - No production content or navigation flows belong here yet.
 */

import { Palette, ShieldCheck, Type, ScanSearch } from "lucide-react";

import {
  TOKEN_ACCENT_PREVIEWS,
  TOKEN_PREVIEW_ITEMS,
} from "./smoke/tokenSmokeData";

/**
 * Maps semantic preview status to a text utility class.
 */
function getStatusClass(status?: "pass" | "warn" | "fail"): string {
  switch (status) {
    case "pass":
      return "token-smoke-status-pass";
    case "warn":
      return "token-smoke-status-warn";
    case "fail":
      return "token-smoke-status-fail";
    default:
      return "text-text-primary";
  }
}

/**
 * Root token validation screen.
 */
export default function App(): JSX.Element {
  return (
    <main className="token-smoke-shell" aria-labelledby="token-smoke-title">
      <div className="token-smoke-grid">
        <section className="token-smoke-panel">
          <p className="token-smoke-kicker">DESIGN TOKEN VALIDATION</p>

          <h1 id="token-smoke-title" className="token-smoke-title">
            Canonical portfolio tokens are registered and ready
          </h1>

          <p className="token-smoke-copy">
            This temporary validation surface confirms that the Control Room /
            Mission Control token vocabulary is working through Tailwind theme
            variables and can be consumed consistently across the codebase.
          </p>

          <div className="token-smoke-grid-cards" role="list" aria-label="Token validation summary">
            <article className="token-smoke-card" role="listitem">
              <div className="flex items-center gap-3">
                <Palette aria-hidden="true" className="h-5 w-5 text-accent-cyan" />
                <div>
                  <p className="token-smoke-label">Color system</p>
                  <p className="token-smoke-value">Semantic utilities generated</p>
                </div>
              </div>
            </article>

            <article className="token-smoke-card" role="listitem">
              <div className="flex items-center gap-3">
                <Type aria-hidden="true" className="h-5 w-5 text-accent-cyan" />
                <div>
                  <p className="token-smoke-label">Typography</p>
                  <p className="token-smoke-value">Sans + mono families mapped</p>
                </div>
              </div>
            </article>

            <article className="token-smoke-card" role="listitem">
              <div className="flex items-center gap-3">
                <ShieldCheck aria-hidden="true" className="h-5 w-5 text-accent-cyan" />
                <div>
                  <p className="token-smoke-label">Consistency</p>
                  <p className="token-smoke-value">Single styling vocabulary active</p>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {TOKEN_PREVIEW_ITEMS.map((item) => (
              <article key={item.label} className="token-smoke-card">
                <p className="token-smoke-label">{item.label}</p>
                <p className={`token-smoke-value ${getStatusClass(item.status)}`}>
                  {item.value}
                </p>
              </article>
            ))}
          </div>

          <div className="token-smoke-accent-bar" aria-label="Accent token previews">
            {TOKEN_ACCENT_PREVIEWS.map((item) => (
              <div
                key={item.label}
                className={`token-chip border-border-strong ${item.className}`}
              >
                {item.label}
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <article className="token-smoke-card">
              <p className="token-smoke-label">Primary UI sample</p>
              <p className="token-smoke-value">
                The interface uses <span className="font-sans">Inter</span> through{" "}
                <code className="token-smoke-mono">font-sans</code>.
              </p>
            </article>

            <article className="token-smoke-card">
              <p className="token-smoke-label">System text sample</p>
              <p className="token-smoke-value">
                <span className="font-mono text-accent-green">
                  RUN_ID=TOKEN-BASELINE-READY
                </span>
              </p>
            </article>
          </div>

          <div className="mt-10 flex items-center gap-3 text-text-secondary">
            <ScanSearch aria-hidden="true" className="h-5 w-5 text-accent-cyan" />
            <p className="m-0">
              Next phase: consume these tokens through reusable primitives instead
              of introducing one-off styles.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}