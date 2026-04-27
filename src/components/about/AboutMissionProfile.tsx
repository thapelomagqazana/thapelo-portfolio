import type { HTMLAttributes } from "react";
import { classNames } from "../../lib/classNames";
import { ABOUT_MISSION_PROFILE_CONTENT } from "./about.content";
import { AboutStoryModules } from "./AboutStoryModules";
import { AboutValueSignals } from "./AboutValueSignals";
import { AboutCapabilityPanel } from "./AboutCapabilityPanel";

/**
 * Props for the AboutMissionProfile component.
 */
export interface AboutMissionProfileProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {}

/**
 * About / Mission Profile section.
 *
 * Responsibilities:
 * - Present the candidate story as readable modules
 * - Add recruiter-facing value signals
 * - Add engineering-manager-facing capability panels
 * - Preserve story → signal → capability flow
 */
export function AboutMissionProfile({
  className,
  ...rest
}: AboutMissionProfileProps) {
  return (
    <section
      {...rest}
      id="mission-profile"
      aria-labelledby="about-mission-profile-title"
      className={classNames("px-6 py-24 sm:px-8 lg:px-10", className)}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
          <div>
            <p className="type-label text-accent-cyan">
              {ABOUT_MISSION_PROFILE_CONTENT.kicker}
            </p>

            <h2
              id="about-mission-profile-title"
              className="mt-6 text-4xl font-semibold tracking-[-0.035em] text-text-primary sm:text-5xl"
            >
              {ABOUT_MISSION_PROFILE_CONTENT.title}
            </h2>

            <AboutStoryModules
              modules={ABOUT_MISSION_PROFILE_CONTENT.storyModules}
            />

            <AboutValueSignals
              signals={ABOUT_MISSION_PROFILE_CONTENT.valueSignals}
            />
          </div>

          <AboutCapabilityPanel
            groups={ABOUT_MISSION_PROFILE_CONTENT.capabilityGroups}
          />
        </div>
      </div>
    </section>
  );
}