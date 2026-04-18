import { Badge, Card, Panel, Text } from "../components/ui";
import { Container, Grid, Section } from "../components/layout";
import type { JSX } from "react";

/**
 * Layout primitive smoke-validation surface.
 *
 * Purpose:
 * - Prove that Container, Grid, and Section render correctly
 * - Demonstrate clear structural role boundaries
 * - Validate that the layout system composes cleanly with the UI primitive layer
 *
 * Important:
 * - This is not the final homepage
 * - It is a temporary validation harness for WBS 1.2.1 only
 */
export default function App(): JSX.Element {
  return (
    <main className="min-h-screen bg-bg-900 text-text-primary">
      <Section space="hero" surface="transparent">
        <Container width="wide">
          <Panel variant="focus">
            <Badge variant="info">layout system</Badge>

            <Text as="h1" variant="display" className="mt-4">
              Canonical layout primitives are operational
            </Text>

            <Text variant="bodyMuted" className="mt-4 max-w-3xl">
              This validation screen confirms that the layout layer provides
              reusable width constraints, grid composition, and section rhythm
              without feature-specific layout duplication.
            </Text>
          </Panel>
        </Container>
      </Section>

      <Section space="standard" surface="subtle">
        <Container>
          <Grid columns={3} gap="lg">
            <Card>
              <Text variant="label">container</Text>
              <Text as="h2" variant="h2" className="mt-3">
                Width control
              </Text>
              <Text variant="bodyMuted" className="mt-3">
                Constrains horizontal content width and centers page content.
              </Text>
            </Card>

            <Card>
              <Text variant="label">grid</Text>
              <Text as="h2" variant="h2" className="mt-3">
                Composition
              </Text>
              <Text variant="bodyMuted" className="mt-3">
                Arranges child content using bounded responsive column presets.
              </Text>
            </Card>

            <Card>
              <Text variant="label">section</Text>
              <Text as="h2" variant="h2" className="mt-3">
                Vertical rhythm
              </Text>
              <Text variant="bodyMuted" className="mt-3">
                Defines canonical spacing for major content blocks.
              </Text>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section space="compact" surface="transparent" as="section" aria-labelledby="layout-checks">
        <Container width="narrow">
          <Text as="h2" variant="h2" id="layout-checks">
            Layout composition checks
          </Text>

          <Grid columns={2} gap="xl" className="mt-6">
            <Panel>
              <Text variant="label">pairing rule</Text>
              <Text variant="body" className="mt-3">
                Section controls vertical rhythm. Container controls width.
              </Text>
            </Panel>

            <Panel>
              <Text variant="label">reuse rule</Text>
              <Text variant="body" className="mt-3">
                Grid handles arrangement without introducing page-specific layout logic.
              </Text>
            </Panel>
          </Grid>
        </Container>
      </Section>
    </main>
  );
}