import { HERO_CONTENT } from "./hero.content";
import { HeroPositioning } from "./HeroPositioning";
import { HeroPositioningSignals } from "./HeroPositioningSignals";
import { HeroSystemActions } from "./HeroSystemActions";
import { SystemDashboard } from "./SystemDashboard";
import { TerminalPreview } from "./TerminalPreview";
import { HeroSystemHeader } from "./HeroSystemHeader";
import { useHeroSystemStatus } from "./useHeroSystemStatus";
import { HeroSystemMotion } from "./HeroSystemMotion";

/**
 * Hero section for the landing page.
 *
 * Responsibilities:
 * - Deliver immediate identity clarity in the first viewport
 * - Differentiate the portfolio as a release-confidence / systems-thinking experience
 * - Present recruiter-facing positioning with strong visual hierarchy
 * - Provide clear next actions and supporting proof without overwhelming the visitor
 *
 * Accessibility:
 * - Uses a semantic section and heading structure
 * - Keeps core content visible without depending on animation
 * - Ensures the status signal is conveyed by text and color together
 * - Keeps recruiter-facing supporting signals in named, structured UI
 */
export function HeroSystem() {
  const { state } = useHeroSystemStatus({
    status: HERO_CONTENT.status,
    modeLabel: HERO_CONTENT.modeLabel,
    description: "Live release-readiness posture for portfolio inspection.",
  });

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden px-6 py-16 sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
        <HeroSystemMotion>
          <div>
            <HeroSystemHeader
              status={state.status}
              modeLabel={state.modeLabel}
              description={state.description}
            />

            <HeroPositioning
              kicker={HERO_CONTENT.kicker}
              title={HERO_CONTENT.title}
              summary={HERO_CONTENT.summary}
              recruiterSignals={HERO_CONTENT.recruiterSignals}
              className="mt-6"
            />

            <div className="mt-8">
              <HeroSystemActions actions={HERO_CONTENT.actions} />
            </div>
          </div>
        </HeroSystemMotion>
        
        <HeroSystemMotion>
          <div className="grid gap-5">
            <HeroPositioningSignals
              items={[
                "Release-focused engineering signal",
                "QA and reliability relevance",
                "Production-ready delivery mindset",
                "Systems-thinking differentiation",
              ]}
            />

            <SystemDashboard metrics={HERO_CONTENT.metrics} />

            <TerminalPreview
              id="terminal-preview"
              command={HERO_CONTENT.terminalCommand}
              lines={HERO_CONTENT.terminalLines}
            />
          </div>
        </HeroSystemMotion>
      </div>
    </section>
  );
}