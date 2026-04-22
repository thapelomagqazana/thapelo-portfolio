import { HERO_CONTENT } from "./hero.content";
import { HeroSystemActions } from "./HeroSystemActions";
import { SystemDashboard } from "./SystemDashboard";
import { TerminalPreview } from "./TerminalPreview";
import { StatusChip } from "../ui/StatusChip";

/**
 * Hero section for the landing page.
 *
 * Responsibilities:
 * - Deliver immediate identity clarity in the first viewport.
 * - Differentiate the portfolio as a release-confidence / systems-thinking experience.
 * - Provide clear next actions and supporting proof without overwhelming the visitor.
 *
 * Accessibility:
 * - Uses a semantic section and heading structure.
 * - Keeps core content visible without depending on animation.
 * - Ensures the status signal is conveyed by text and color together.
 */
export function HeroSystem() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden px-6 py-16 sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <StatusChip
              label={HERO_CONTENT.status.label}
              tone={HERO_CONTENT.status.tone}
            />
            <p className="type-label text-accent-cyan">{HERO_CONTENT.modeLabel}</p>
          </div>

          <p className="mt-6 type-label text-accent-cyan">{HERO_CONTENT.kicker}</p>

          <h1
            id="hero-title"
            className="type-display mt-4 max-w-4xl text-balance"
          >
            {HERO_CONTENT.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary sm:text-body-lg">
            {HERO_CONTENT.summary}
          </p>

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