import { HeroSystem } from "../components/hero/HeroSystem";
import { SiteNavigation } from "../components/navigation/SiteNavigation";
import { getSectionHeading } from "../content/sections/sectionHeadings";

/**
 * Home page entry.
 *
 * Responsibilities:
 * - Compose the full mission flow of the portfolio
 * - Preserve a strict section order for recruiter evaluation
 * - Provide stable DOM anchors for navigation, smooth scrolling,
 *   and active section tracking
 * - Keep visible section headings aligned with navigation naming
 */
export function HomePage() {
  return (
    <>
      <SiteNavigation />

      <main>
        <section id="system" data-section-id="system">
          <HeroSystem />
        </section>

        <section
          id="active-modules"
          data-section-id="modules"
          className="px-6 py-20 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="type-h2">{getSectionHeading("modules")}</h2>
            <p className="mt-4 max-w-2xl text-text-secondary">
              Systems and projects that demonstrate release confidence,
              reliability thinking, and production-ready engineering.
            </p>
          </div>
        </section>

        <section
          id="operational-history"
          data-section-id="history"
          className="px-6 py-20 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="type-h2">{getSectionHeading("history")}</h2>
            <p className="mt-4 max-w-2xl text-text-secondary">
              Timeline of engineering experience, test analysis work,
              and system-building exposure across real environments.
            </p>
          </div>
        </section>

        <section
          id="credential-stack"
          data-section-id="credentials"
          className="px-6 py-20 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="type-h2">{getSectionHeading("credentials")}</h2>
            <p className="mt-4 max-w-2xl text-text-secondary">
              Education, certifications, and foundational training that
              reinforce technical capability and discipline.
            </p>
          </div>
        </section>

        <section
          id="open-transmission"
          data-section-id="contact"
          className="px-6 py-20 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="type-h2">{getSectionHeading("contact")}</h2>
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