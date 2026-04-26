import type {
  ProjectVerificationLink,
  ProjectVerificationLinkType,
} from "./project.types";

export interface ProjectVerificationLinksProps {
  readonly links?: readonly ProjectVerificationLink[];
}

/**
 * Project verification links layer.
 *
 * Responsibilities:
 * - Show optional evidence paths for a project.
 * - Help visitors verify claims through code, demos, docs, screenshots, or writeups.
 * - Avoid empty placeholders and misleading unavailable links.
 *
 * Security:
 * - External links open in a new tab.
 * - External links always use rel="noopener noreferrer".
 *
 * Accessibility:
 * - Link text clearly explains what opens.
 * - New-tab behavior is included in aria-label.
 * - Icons are not required to understand the link.
 */
export function ProjectVerificationLinks({
  links = [],
}: ProjectVerificationLinksProps) {
  const visibleLinks = links.filter(isUsableVerificationLink);

  if (visibleLinks.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="project-verification-links-heading"
      className="rounded-[var(--radius-panel-xl)] bg-bg-800/20 p-5 ring-1 ring-white/5"
    >
      <header>
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent-cyan">
          Verification
        </p>

        <h5
          id="project-verification-links-heading"
          className="mt-2 text-base font-semibold text-text-primary"
        >
          Inspect supporting evidence
        </h5>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary">
          Optional links for validating implementation, documentation, demos, or
          supporting project artifacts.
        </p>
      </header>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {visibleLinks.map((link) => (
          <VerificationLinkCard key={`${link.type}-${link.href}`} link={link} />
        ))}
      </div>
    </section>
  );
}

interface VerificationLinkCardProps {
  readonly link: ProjectVerificationLink;
}

/**
 * Single verification link card.
 *
 * Purpose:
 * - Keep each evidence path clear and tappable.
 * - Distinguish link type, destination, and expected content.
 */
function VerificationLinkCard({ link }: VerificationLinkCardProps) {
  const isExternal = isExternalHref(link.href);
  const typeLabel = getVerificationTypeLabel(link.type);

  return (
    <a
      href={link.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={
        isExternal
          ? `${link.label}. Opens ${typeLabel.toLowerCase()} in a new tab.`
          : `${link.label}. Opens ${typeLabel.toLowerCase()}.`
      }
      className="group rounded-[var(--radius-panel-lg)] bg-bg-850/45 p-4 ring-1 ring-white/5 transition hover:bg-bg-850/70 hover:ring-accent-cyan/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
    >
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-accent-cyan/80">
        {typeLabel}
      </p>

      <p className="mt-2 text-sm font-semibold text-text-primary">
        {link.label}
        {isExternal ? (
          <span aria-hidden="true" className="ml-1 text-text-muted">
            ↗
          </span>
        ) : null}
      </p>

      {link.description ? (
        <p className="mt-2 text-sm leading-6 text-text-secondary">
          {link.description}
        </p>
      ) : null}
    </a>
  );
}

/**
 * Validates whether a verification link is safe and useful to render.
 *
 * Purpose:
 * - Prevent empty placeholders.
 * - Prevent vague or broken-looking links.
 */
function isUsableVerificationLink(link: ProjectVerificationLink): boolean {
  return link.label.trim().length > 0 && link.href.trim().length > 0;
}

/**
 * Determines whether a link is external.
 */
function isExternalHref(href: ProjectVerificationLink["href"]): boolean {
  return href.startsWith("https://");
}

/**
 * Converts link type into a readable display label.
 */
function getVerificationTypeLabel(type: ProjectVerificationLinkType): string {
  const labels: Record<ProjectVerificationLinkType, string> = {
    code: "Code",
    demo: "Demo",
    screenshot: "Screenshot",
    writeup: "Writeup",
    docs: "Docs",
    architecture: "Architecture",
  };

  return labels[type];
}