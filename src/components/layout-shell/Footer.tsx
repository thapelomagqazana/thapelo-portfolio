import type { JSX } from "react";
import { Link } from "react-router";

import { Container } from "../layout";
import { Text } from "../ui";
import { ROUTE_PATHS } from "../../app/routePaths";

/**
 * Canonical footer.
 *
 * Responsibilities:
 * - Provide persistent closing-page structure
 * - Expose bounded secondary links and summary information
 * - Remain route-agnostic and non-interactive beyond simple links
 *
 * Design notes:
 * - Footer must stay lightweight
 * - It must not absorb page-specific logic
 */
export function Footer(): JSX.Element {
  return (
    <footer className="border-t border-border-subtle bg-bg-900">
      <Container width="wide">
        <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <Text variant="label">transmission channel</Text>
            <Text variant="body-muted" className="mt-3">
              Built as a Control Room / Mission Control portfolio focused on
              systems thinking, software quality, and production readiness.
            </Text>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to={ROUTE_PATHS.home}
              className="text-sm text-text-secondary transition hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-900"
            >
              Home
            </Link>

            <Link
              to={ROUTE_PATHS.home}
              className="text-sm text-text-secondary transition hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-900"
            >
              Projects
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}