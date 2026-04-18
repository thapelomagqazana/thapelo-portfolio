import { Card, Panel, Text } from "../components/ui";
import { Container, Grid, Section } from "../components/layout";
import { KPIValue, StatusChip, SystemBadge } from "../components/system";
import type { JSX } from "react";

/**
 * Status and metric validation surface.
 *
 * Purpose:
 * - Prove that canonical status/metric primitives render correctly
 * - Demonstrate separation between status, metadata, and KPI display
 * - Validate normalized PASS/WARN/FAIL presentation
 *
 * Important:
 * - This is not the final homepage
 * - It is a bounded validation harness for WBS 1.4.1
 */
export default function App(): JSX.Element {
  return (
    <main className="min-h-screen bg-bg-900 text-text-primary">
      <Section space="hero">
        <Container width="wide">
          <Panel variant="focus">
            <SystemBadge variant="info">status system</SystemBadge>

            <Text as="h1" variant="display" className="mt-4">
              Canonical status and metric primitives are operational
            </Text>

            <Text variant="body-muted" className="mt-4 max-w-3xl">
              This validation surface confirms that operational state,
              metadata labeling, and KPI display are separated cleanly and
              rendered through a centralized semantic vocabulary.
            </Text>

            <div className="mt-8 flex flex-wrap gap-3">
              <StatusChip status="PASS" />
              <StatusChip status="WARN" />
              <StatusChip status="FAIL" />
            </div>
          </Panel>
        </Container>
      </Section>

      <Section space="standard" surface="subtle">
        <Container>
          <Grid columns={3} gap="lg">
            <Card>
              <Text variant="label">normalized statuses</Text>
              <div className="mt-4 flex flex-wrap gap-2">
                <StatusChip status="PASS" value="98%" />
                <StatusChip status="WARN" value="latency" />
                <StatusChip status="FAIL" value="blocked" />
              </div>
            </Card>

            <Card>
              <Text variant="label">metadata badges</Text>
              <div className="mt-4 flex flex-wrap gap-2">
                <SystemBadge>module</SystemBadge>
                <SystemBadge variant="info">production</SystemBadge>
                <SystemBadge variant="active">live</SystemBadge>
              </div>
            </Card>

            <Card>
              <Text variant="label">kpi display</Text>
              <div className="mt-4 grid gap-3">
                <KPIValue label="Release Confidence" value="92%" tone="success" />
                <KPIValue label="Risk Signal" value="Warning" tone="warning" />
              </div>
            </Card>
          </Grid>
        </Container>
      </Section>
    </main>
  );
}