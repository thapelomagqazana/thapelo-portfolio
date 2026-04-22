import { HERO_CONTENT } from "./hero.content";
import { HeroPositioning } from "./HeroPositioning";
import { HeroPositioningSignals } from "./HeroPositioningSignals";
import { HeroSystemActions } from "./HeroSystemActions";
import { SystemDashboard } from "./SystemDashboard";
import { TerminalPreview } from "./TerminalPreview";
import { StatusChip } from "../ui/StatusChip";

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
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden px-6 py-16 sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <StatusChip
              label={HERO_CONTENT.status.label}
              tone={HERO_CONTENT.status.tone}
            />
            <p className="type-label text-accent-cyan">
              {HERO_CONTENT.modeLabel}
            </p>
          </div>

          <HeroPositioning
            kicker={HERO_CONTENT.kicker}
            title={HERO_CONTENT.title}
            summary={HERO_CONTENT.summary}
            recruiterSignals={HERO_CONTENT.recruiterSignals}
            className="mt-6"
          />

          <div className="mt-8">
            <HeroSystemActions
              primaryLabel={HERO_CONTENT.primaryActionLabel}
              primaryHref={HERO_CONTENT.primaryActionHref}
              secondaryLabel={HERO_CONTENT.secondaryActionLabel}
              secondaryHref={HERO_CONTENT.secondaryActionHref}
            />
          </div>
        </div>

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
      </div>
    </section>
  );
}