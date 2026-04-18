import { Badge, Card, Panel, Text } from "../components/ui";
import { Container, Grid, Section } from "../components/layout";
import type { JSX } from "react";

/**
 * Typography system validation surface.
 *
 * Purpose:
 * - Prove that the canonical typography hierarchy is working
 * - Verify semantic rendering with the Text primitive
 * - Demonstrate heading, body, caption, label, and mono-output usage
 *
 * Important:
 * - This is not the final homepage
 * - It is a bounded validation harness for WBS 1.3.1
 */
export default function App(): JSX.Element {
  return (
    <main className="min-h-screen bg-bg-900 text-text-primary">
      <Section space="hero">
        <Container width="wide">
          <Panel variant="focus">
            <Badge variant="info">typography system</Badge>

            <Text as="h1" variant="display" className="mt-4">
              Software should earn the right to ship
            </Text>

            <Text variant="body-muted" className="mt-4 max-w-3xl">
              This validation surface confirms that the typography system is
              token-driven, semantically correct, and reusable across the
              Control Room / Mission Control portfolio.
            </Text>
          </Panel>
        </Container>
      </Section>

      <Section space="standard" surface="subtle">
        <Container>
          <Grid columns={2} gap="xl">
            <Card>
              <Text variant="label">heading hierarchy</Text>
              <Text as="h1" variant="h1" className="mt-4">
                H1 — Page title
              </Text>
              <Text as="h2" variant="h2" className="mt-6">
                H2 — Section title
              </Text>
              <Text as="h3" variant="h3" className="mt-6">
                H3 — Subsection title
              </Text>
            </Card>

            <Card>
              <Text variant="label">body hierarchy</Text>
              <Text variant="body" className="mt-4">
                Body text is used for primary readable content and explanatory
                interface copy.
              </Text>
              <Text variant="body-muted" className="mt-4">
                Muted body text is used for supporting content, secondary
                explanation, and lower-emphasis messaging.
              </Text>
              <Text variant="caption" className="mt-4">
                Caption text is reserved for compact supporting information.
              </Text>
            </Card>

            <Panel>
              <Text variant="label">system labels</Text>
              <Text variant="mono-output" className="mt-4">
                RUN_ID=TYPOGRAPHY-SYSTEM-READY
              </Text>
              <Text variant="caption" className="mt-4">
                Mono output is intentionally limited to system-like text,
                technical indicators, and terminal-style readouts.
              </Text>
            </Panel>

            <Card variant="elevated">
              <Text variant="label">semantic composition</Text>
              <Text as="h2" variant="h2" className="mt-4">
                Mission Profile
              </Text>
              <Text variant="body-muted" className="mt-4">
                The Text primitive separates semantics from visual styling while
                still encouraging correct heading usage.
              </Text>
            </Card>
          </Grid>
        </Container>
      </Section>
    </main>
  );
}