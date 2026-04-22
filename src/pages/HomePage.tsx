import { HeroSystem } from "../components/hero/HeroSystem";
import { SiteNavigation } from "../components/navigation/SiteNavigation";

/**
 * Home page entry.
 *
 * Responsibilities:
 * - Compose the full mission flow of the portfolio
 * - Preserve a strict section order for recruiter evaluation:
 *   1. Identity (System / Hero)
 *   2. Proof (Modules)
 *   3. Experience (History)
 *   4. Trust (Credentials)
 *   5. Action (Contact)
 * - Provide stable DOM anchors for:
 *   - navigation
 *   - smooth scrolling
 *   - active section tracking
 *
 * Design Rules:
 * - Keep this file thin (composition only)
 * - Do not embed business logic here
 * - Delegate rendering to section-level components
 *
 * Accessibility:
 * - Uses semantic section structure
 * - Each section exposes a stable id + data-section-id
 * - Enables screen readers and navigation systems to track location
 */
export function HomePage() {
  return (
    <>
      {/* Sticky Navigation (global system control layer) */}
      <SiteNavigation />

      <main>
        {/* 1. Identity / System */}
        <section id="system" data-section-id="system">
          <HeroSystem />
        </section>

        {/* 2. Proof / Modules */}
        <section
          id="active-modules"
          data-section-id="modules"
          className="px-6 py-20 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="type-h2">Active Modules</h2>

            {/* Placeholder – will be replaced with real module cards */}
            <p className="mt-4 max-w-2xl text-text-secondary">
              Systems and projects that demonstrate release confidence,
              reliability thinking, and production-ready engineering.
            </p>
          </div>
        </section>

        {/* 3. Experience / History */}
        <section
          id="operational-history"
          data-section-id="history"
          className="px-6 py-20 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="type-h2">Operational History</h2>

            <p className="mt-4 max-w-2xl text-text-secondary">
              Timeline of engineering experience, test analysis work,
              and system-building exposure across real environments.
            </p>
          </div>
        </section>

        {/* 4. Trust / Credentials */}
        <section
          id="credential-stack"
          data-section-id="credentials"
          className="px-6 py-20 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="type-h2">Credential Stack</h2>

            <p className="mt-4 max-w-2xl text-text-secondary">
              Education, certifications, and foundational training that
              reinforce technical capability and discipline.
            </p>
          </div>
        </section>

        {/* 5. Action / Contact */}
        <section
          id="open-transmission"
          data-section-id="contact"
          className="px-6 py-20 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="type-h2">Open Transmission</h2>

            <p className="mt-4 max-w-2xl text-text-secondary">
              Ready to collaborate on systems that improve software
              reliability and release confidence.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}