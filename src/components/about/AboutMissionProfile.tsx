import type { HTMLAttributes } from "react";
import { classNames } from "../../lib/classNames";
import { ABOUT_MISSION_PROFILE_CONTENT } from "./about.content";
import { AboutStoryModules } from "./AboutStoryModules";

/**
 * Props for the AboutMissionProfile component.
 */
export interface AboutMissionProfileProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {}

/**
 * About / Mission Profile section.
 *
 * Responsibilities:
 * - Present a concise background story without becoming a biography
 * - Explain the transition from construction to software
 * - Connect the journey to current engineering value
 * - Support the hero positioning without duplicating it
 *
 * Accessibility:
 * - Uses a semantic section with a heading
 * - Keeps copy readable and structured for fast scanning
 *
 * Design goals:
 * - Strong but secondary hierarchy relative to the hero
 * - Readable line length
 * - Clear spacing on desktop and mobile
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
      className={classNames("px-6 py-20 sm:px-8 lg:px-10", className)}
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="type-label text-accent-cyan">
            {ABOUT_MISSION_PROFILE_CONTENT.kicker}
          </p>

          <h2
            id="about-mission-profile-title"
            className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-text-primary sm:text-4xl"
          >
            {ABOUT_MISSION_PROFILE_CONTENT.title}
          </h2>

          <AboutStoryModules
            modules={ABOUT_MISSION_PROFILE_CONTENT.storyModules}
          />
        </div>
      </div>
    </section>
  );
}