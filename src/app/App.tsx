import { Badge, Button, Card, Panel, Text } from "../components/ui";
import type { JSX } from "react";

/**
 * Primitive smoke-validation surface.
 *
 * Purpose:
 * - Prove that canonical primitives compile and render correctly
 * - Provide a bounded validation harness for WBS 1.1.1
 * - Demonstrate role boundaries between Card, Panel, Badge, Button, and Text
 *
 * Important:
 * - This is not the final homepage.
 * - It should be replaced or absorbed by real feature screens later.
 */
export default function App(): JSX.Element {
  return (
    <main className="min-h-screen bg-bg-900 px-6 py-12 text-text-primary">
      <div className="mx-auto max-w-6xl">
        <Panel variant="focus" className="mb-10">
          <Badge variant="info">primitive layer</Badge>

          <Text as="h1" variant="display" className="mt-4">
            Canonical UI primitives are operational
          </Text>

          <Text variant="bodyMuted" className="mt-4 max-w-3xl">
            This validation surface confirms that the base primitive layer is
            token-driven, accessible by default, and ready for reuse across the
            Control Room / Mission Control portfolio.
          </Text>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="primary">Run Inspection</Button>
            <Button variant="secondary">Open Module</Button>
            <Button variant="ghost">View History</Button>
            <Button variant="status">Approved</Button>
          </div>
        </Panel>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <Badge variant="success">active</Badge>
            <Text as="h2" variant="h2" className="mt-4">
              Card primitive
            </Text>
            <Text variant="bodyMuted" className="mt-3">
              Structured content container for grouped information and lighter
              surface hierarchy.
            </Text>
          </Card>

          <Card variant="elevated">
            <Badge variant="warning">warning</Badge>
            <Text as="h2" variant="h2" className="mt-4">
              Elevated card
            </Text>
            <Text variant="bodyMuted" className="mt-3">
              Stronger grouping for content that needs more surface separation.
            </Text>
          </Card>

          <Panel>
            <Badge variant="neutral">system panel</Badge>
            <Text as="h3" variant="h3" className="mt-4">
              Panel primitive
            </Text>
            <Text variant="bodyMuted" className="mt-3">
              Higher-emphasis surface intended for hero zones, overlays, and key
              command areas.
            </Text>
          </Panel>

          <Card>
            <Text variant="label">run_id</Text>
            <Text as="p" variant="body" className="mt-3">
              TOKEN-LAYER-READY
            </Text>
            <Text variant="caption" className="mt-3">
              Text primitive supports semantic rendering with consistent
              token-driven styling.
            </Text>
          </Card>
        </div>
      </div>
    </main>
  );
}