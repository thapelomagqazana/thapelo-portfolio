import type { JSX, ReactNode } from "react";

import { FadeIn, SlideUp } from "../../components/motion";
import { Container, Grid, Section } from "../../components/layout";
import { SystemBadge } from "../../components/system";
import { Button, Panel, Text } from "../../components/ui";
import { classNames } from "../../lib/classNames";
import { DEFAULT_HERO_CONTENT, type HeroContent } from "./heroContent";

/**
 * Props for the canonical HeroSystem component.
 *
 * Responsibilities:
 * - Render the primary above-the-fold entry experience
 * - Deliver the core positioning message
 * - Present one clear primary CTA and one clear secondary CTA
 * - Integrate with shared primitives, layout, typography, and motion systems
 * - Support an optional preview slot for bounded system-facing content
 *
 * Notes:
 * - This component is intentionally presentation-first.
 * - It does not own route orchestration.
 * - It may host preview content, but does not own the internal logic of
 *   terminal simulation, dashboard rendering, or other preview modules.
 */
export interface HeroSystemProps {
  /**
   * Optional hero content override.
   *
   * Defaults to the canonical hero content.
   */
  readonly content?: HeroContent;

  /**
   * Optional preview node rendered in the hero preview area.
   *
   * Intended examples:
   * - TerminalSimulator
   * - SystemDashboard
   * - a bounded stack of both
   *
   * This keeps HeroSystem reusable while avoiding tight coupling to
   * specific preview implementations.
   */
  readonly preview?: ReactNode;

  /**
   * Optional additional class names for the outer hero section.
   */
  readonly className?: string;
}

/**
 * Maps hero CTA intent to the canonical button variant.
 */
function getButtonVariant(
  intent: "primary" | "secondary",
): "primary" | "secondary" {
  return intent === "primary" ? "primary" : "secondary";
}

/**
 * Canonical HeroSystem component.
 *
 * Design goals:
 * - Present a strong “System Boot Experience”
 * - Use a split hero layout that remains responsive
 * - Keep messaging hierarchy clear and immediately scannable
 * - Allow a bounded preview surface on the right without coupling
 *   the hero to specific feature implementations
 *
 * Accessibility notes:
 * - Uses semantic heading structure
 * - Uses semantic anchor rendering for navigation-oriented CTAs
 * - Motion is bounded through the canonical motion system
 */
export function HeroSystem({
  content = DEFAULT_HERO_CONTENT,
  preview,
  className,
}: HeroSystemProps): JSX.Element {
  return (
    <Section
      space="hero"
      surface="transparent"
      className={classNames("overflow-hidden", className)}
      aria-labelledby="hero-system-title"
      data-component="hero-system"
    >
      <Container width="wide">
        <Grid columns={2} gap="xl" align="center">
          <SlideUp>
            <div className="max-w-3xl">
              <SystemBadge variant="info">system entry</SystemBadge>

              <Text
                as="h1"
                variant="display"
                id="hero-system-title"
                className="mt-6 max-w-4xl"
              >
                {content.headline}
              </Text>

              <Text variant="body-muted" className="mt-6 max-w-2xl">
                {content.subheadline}
              </Text>

              <div
                className="mt-8 flex flex-wrap gap-3"
                aria-label="Hero calls to action"
              >
                {content.ctas.map((cta) => (
                  <Button
                    key={cta.id}
                    href={cta.href}
                    variant={getButtonVariant(cta.intent)}
                  >
                    {cta.label}
                  </Button>
                ))}
              </div>
            </div>
          </SlideUp>

          <FadeIn>
            <div className="w-full max-w-xl xl:ml-auto">
              {preview ? (
                <div className="space-y-4">
                  <div className="mb-2">
                    <Text variant="label">live system preview</Text>
                  </div>
                  {preview}
                </div>
              ) : (
                <Panel
                  variant="focus"
                  className="relative min-h-[280px] border-border-active/60"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-[var(--radius-panel-xl)] bg-[radial-gradient(circle_at_top_right,rgba(61,220,255,0.14),transparent_35%)]"
                  />

                  <Text variant="label">boot state</Text>

                  <Text as="h2" variant="h2" className="mt-4">
                    Entry sequence initialized
                  </Text>

                  <Text variant="body-muted" className="mt-4">
                    The portfolio opens like a release command center: clear
                    identity, visible intent, and structured paths into
                    projects, experience, and systems thinking.
                  </Text>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[var(--radius-panel-lg)] border border-border-subtle bg-bg-800/80 p-4">
                      <Text variant="label">focus</Text>
                      <Text variant="mono-output" className="mt-3">
                        RELEASE CONFIDENCE
                      </Text>
                    </div>

                    <div className="rounded-[var(--radius-panel-lg)] border border-border-subtle bg-bg-800/80 p-4">
                      <Text variant="label">mode</Text>
                      <Text variant="mono-output" className="mt-3">
                        SYSTEM READY
                      </Text>
                    </div>
                  </div>
                </Panel>
              )}
            </div>
          </FadeIn>
        </Grid>
      </Container>
    </Section>
  );
}