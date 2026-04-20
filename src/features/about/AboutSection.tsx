import type { HTMLAttributes, JSX } from "react";

import { Container, Grid, Section } from "../../components/layout";
import { SystemBadge } from "../../components/system";
import { Card, Panel, Text } from "../../components/ui";
import { classNames } from "../../lib/classNames";
import { DEFAULT_ABOUT_SECTION_CONTENT } from "./aboutContent";
import type { AboutSectionContent, AboutSectionSlots } from "./aboutTypes";

/**
 * Props for the canonical AboutSection component.
 *
 * Responsibilities:
 * - Render the About section shell
 * - Compose the story and capabilities regions
 * - Keep layout logic separate from future content-depth tasks
 *
 * Notes:
 * - This component is a layout shell first
 * - It intentionally stays bounded and avoids timeline/project-detail logic
 */
export interface AboutSectionProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  /**
   * Optional content override for the section shell.
   *
   * Defaults to the canonical About section content.
   */
  readonly content?: AboutSectionContent;

  /**
   * Optional bounded slot overrides for story/capabilities regions.
   *
   * Use these only when later tasks need to replace the default region content
   * without rewriting the About layout shell.
   */
  readonly slots?: AboutSectionSlots;
}

/**
 * Default story region renderer.
 *
 * Purpose:
 * - Provide a bounded story surface for layout validation
 * - Keep the story region clearly distinct from capabilities
 */
function DefaultStoryRegion({
  title,
  paragraphs,
}: AboutSectionContent["story"]): JSX.Element {
  return (
    <Panel variant="default" className="h-full">
      <Text variant="label">story</Text>
      <Text as="h3" variant="h3" className="mt-4">
        {title}
      </Text>

      <div className="mt-4 space-y-4">
        {paragraphs.map((paragraph, index) => (
          <Text key={`story-paragraph-${index}`} variant="body-muted">
            {paragraph}
          </Text>
        ))}
      </div>
    </Panel>
  );
}

/**
 * Default capabilities region renderer.
 *
 * Purpose:
 * - Provide a concise, scannable capability surface
 * - Preserve clear separation from the narrative story region
 */
function DefaultCapabilitiesRegion({
  title,
  items,
}: AboutSectionContent["capabilities"]): JSX.Element {
  return (
    <Panel variant="focus" className="h-full">
      <Text variant="label">capabilities</Text>
      <Text as="h3" variant="h3" className="mt-4">
        {title}
      </Text>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <Card key={item} className="bg-bg-800/80">
            <Text variant="body">{item}</Text>
          </Card>
        ))}
      </div>
    </Panel>
  );
}

/**
 * Canonical AboutSection layout shell.
 *
 * Design goals:
 * - Communicate identity and capability clearly
 * - Use a two-column desktop layout with deterministic mobile stacking
 * - Reuse canonical layout and surface systems
 *
 * Accessibility notes:
 * - Uses semantic section and heading structure
 * - Keeps both content regions readable on smaller screens
 */
export function AboutSection({
  content = DEFAULT_ABOUT_SECTION_CONTENT,
  slots,
  className,
  ...props
}: AboutSectionProps): JSX.Element {
  return (
    <Section
      as="section"
      space="standard"
      surface="transparent"
      className={classNames(className)}
      aria-labelledby="about-section-title"
      data-section="about"
      {...props}
    >
      <Container width="wide">
        <div className="max-w-3xl">
          {content.eyebrow ? (
            <SystemBadge variant="info">{content.eyebrow}</SystemBadge>
          ) : null}

          <Text as="h2" variant="h1" id="about-section-title" className="mt-4">
            {content.title}
          </Text>

          {content.intro ? (
            <Text variant="body-muted" className="mt-4">
              {content.intro}
            </Text>
          ) : null}
        </div>

        <Grid columns={2} gap="xl" className="mt-10">
          <div data-region="story">
            {slots?.story ?? <DefaultStoryRegion {...content.story} />}
          </div>

          <div data-region="capabilities">
            {slots?.capabilities ?? (
              <DefaultCapabilitiesRegion {...content.capabilities} />
            )}
          </div>
        </Grid>
      </Container>
    </Section>
  );
}