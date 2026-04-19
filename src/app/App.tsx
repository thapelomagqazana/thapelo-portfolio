import { Container, Grid, Section } from "../components/layout";
import { KPIValue, StatusChip, SystemBadge } from "../components/system";
import { Card, Panel, Text } from "../components/ui";
import { FadeIn, GlowPulse, SlideUp } from "../components/motion";
import { MotionProvider } from "./MotionProvider";
import type { JSX } from "react";

/**
 * Motion system validation surface.
 *
 * Purpose:
 * - Demonstrate the canonical motion presets
 * - Validate reduced-motion-safe composition
 * - Prove helper reuse across different UI primitives
 *
 * Important:
 * - This is not the final product screen
 * - It is a bounded WBS 1.5.1 validation harness
 */
export default function App(): JSX.Element {
  return (
    <MotionProvider>
      <main className="min-h-screen bg-bg-900 text-text-primary">
        <Section space="hero">
          <Container width="wide">
            <SlideUp>
              <Panel variant="focus">
                <SystemBadge variant="info">motion system</SystemBadge>

                <Text as="h1" variant="display" className="mt-4">
                  Canonical motion helpers are operational
                </Text>

                <Text variant="body-muted" className="mt-4 max-w-3xl">
                  This validation surface confirms that fade, slide, and glow
                  emphasis behaviors are centralized, reusable, and reduced-motion aware.
                </Text>
              </Panel>
            </SlideUp>
          </Container>
        </Section>

        <Section space="standard" surface="subtle">
          <Container>
            <Grid columns={3} gap="lg">
              <FadeIn>
                <Card>
                  <Text variant="label">fade in</Text>
                  <Text as="h2" variant="h2" className="mt-4">
                    Content appearance
                  </Text>
                  <Text variant="body-muted" className="mt-3">
                    Opacity-only entrance for calm, readable reveal.
                  </Text>
                </Card>
              </FadeIn>

              <SlideUp>
                <Card>
                  <Text variant="label">slide up</Text>
                  <Text as="h2" variant="h2" className="mt-4">
                    Entrance motion
                  </Text>
                  <Text variant="body-muted" className="mt-3">
                    Subtle vertical entry using opacity and transform.
                  </Text>
                </Card>
              </SlideUp>

              <GlowPulse>
                <KPIValue label="Release Confidence" value="92%" tone="success" />
              </GlowPulse>
            </Grid>

            <div className="mt-8 flex flex-wrap gap-3">
              <GlowPulse>
                <StatusChip status="PASS" value="ready" />
              </GlowPulse>

              <FadeIn>
                <StatusChip status="WARN" value="latency" />
              </FadeIn>

              <SlideUp>
                <StatusChip status="FAIL" value="blocked" />
              </SlideUp>
            </div>
          </Container>
        </Section>
      </main>
    </MotionProvider>
  );
}