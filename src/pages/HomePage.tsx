import { HeroSystem } from "../components/hero/HeroSystem";
import { SiteNavigation } from "../components/navigation/SiteNavigation";
import { getSectionHeading } from "../content/sections/sectionHeadings";
import { RECRUITER_GUIDED_FLOW } from "../content/page-flow/recruiterFlow";
import { ActiveModulesSection } from "../components/sections/ActiveModulesSection";
import { OperationalHistorySection } from "../components/sections/OperationalHistorySection";
import { CredentialStackSection } from "../components/sections/CredentialStackSection";
import { OpenTransmissionSection } from "../components/sections/OpenTransmissionSection";
import { AboutMissionProfile } from "../components/about/AboutMissionProfile";

/**
 * Home page entry.
 *
 * Responsibilities:
 * - Compose the portfolio in a recruiter-first evaluation sequence
 * - Preserve stable DOM anchors for navigation and active-section tracking
 * - Ensure the page leads visitors from:
 *   identity -> proof -> trust -> action
 *
 * Design rules:
 * - Keep page composition thin
 * - Do not embed section business logic here
 * - Delegate rendering to dedicated section components
 */
export function HomePage() {
  /**
   * Explicit reference to the canonical recruiter flow.
   *
   * Purpose:
   * - Make the page order obvious in the composition layer
   * - Create a visible anchor for future tests and maintenance
   */
  void RECRUITER_GUIDED_FLOW;

  return (
    <>
      <SiteNavigation />

      <main>
        <section id="system" data-section-id="system">
          <HeroSystem />
        </section>

        <AboutMissionProfile />

        <ActiveModulesSection
          id="active-modules"
          sectionId="modules"
          title={getSectionHeading("modules")}
          summary="Proof of systems thinking, engineering depth, and release-confidence-oriented work appears early so the value is visible before deep trust content."
        />

        <OperationalHistorySection
          id="operational-history"
          sectionId="history"
          title={getSectionHeading("history")}
          summary="Practical work history follows proof to reinforce relevance and show the environments where these capabilities have been applied."
        />

        <CredentialStackSection
          id="credential-stack"
          sectionId="credentials"
          title={getSectionHeading("credentials")}
          summary="Education and training reinforce credibility after capability and practical exposure are already visible."
        />

        <OpenTransmissionSection
          id="open-transmission"
          sectionId="contact"
          title={getSectionHeading("contact")}
          summary="Once identity, proof, and trust are established, the portfolio closes with a clear action layer and next step."
        />
      </main>
    </>
  );
}