import type { ProjectLesson } from "./project.types";

export interface ProjectLessonsInspectionProps {
  readonly lessons?: readonly ProjectLesson[];
}

/**
 * Lessons inspection layer.
 *
 * Responsibilities:
 * - Show practical engineering reflection.
 * - Communicate growth without overclaiming success.
 * - Connect project experience to future engineering work.
 *
 * Accessibility:
 * - Uses a named semantic section.
 * - Renders lessons as readable articles.
 * - Does not rely on color alone to communicate hierarchy.
 */
export function ProjectLessonsInspection({
  lessons = [],
}: ProjectLessonsInspectionProps) {
  const visibleLessons = lessons.slice(0, 3);

  if (visibleLessons.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="Project lessons"
      className="rounded-[var(--radius-panel-xl)] bg-bg-800/20 p-5 ring-1 ring-white/5"
    >
      <header>
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent-cyan">
          Lessons
        </p>

        <h5 className="mt-2 text-base font-semibold text-text-primary">
          What this project improved in my engineering judgment
        </h5>
      </header>

      <div className="mt-4 grid gap-3">
        {visibleLessons.map((lesson) => (
          <LessonRow key={lesson.title} lesson={lesson} />
        ))}
      </div>
    </section>
  );
}

interface LessonRowProps {
  readonly lesson: ProjectLesson;
}

/**
 * Single project lesson row.
 *
 * Purpose:
 * - Keep lesson structure consistent.
 * - Separate insight from future application.
 */
function LessonRow({ lesson }: LessonRowProps) {
  return (
    <article className="rounded-[var(--radius-panel-lg)] bg-bg-850/45 p-4 ring-1 ring-white/5">
      <h6 className="text-sm font-semibold text-text-primary">
        {lesson.title}
      </h6>

      <div className="mt-3 grid gap-3 text-sm leading-6 sm:grid-cols-2">
        <p className="text-text-secondary">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-accent-cyan/80">
            Insight:{" "}
          </span>
          {lesson.insight}
        </p>

        <p className="text-text-secondary">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-accent-cyan/80">
            Future Use:{" "}
          </span>
          {lesson.futureUse}
        </p>
      </div>
    </article>
  );
}