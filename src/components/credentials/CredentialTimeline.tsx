import type { CredentialEntry } from "./credential.types";

export interface CredentialTimelineProps {
  readonly credentials: readonly CredentialEntry[];
}

/**
 * Credential timeline.
 *
 * Responsibilities:
 * - Render education, programs, and certifications as one credential stack.
 * - Keep institution, title, period, status, and relevance visible.
 * - Render credential IDs and verification links only when real data exists.
 *
 * Accessibility:
 * - Uses ordered list semantics.
 * - Keeps all trust signals readable as text.
 * - External verification links use safe new-tab behavior.
 */
export function CredentialTimeline({ credentials }: CredentialTimelineProps) {
  return (
    <ol className="relative grid gap-5 border-l border-border-subtle/80 pl-5">
      {credentials.map((credential) => (
        <CredentialLogEntry key={credential.id} credential={credential} />
      ))}
    </ol>
  );
}

interface CredentialLogEntryProps {
  readonly credential: CredentialEntry;
}

/**
 * Single credential record.
 */
function CredentialLogEntry({ credential }: CredentialLogEntryProps) {
  return (
    <li className="relative">
      <span
        aria-hidden="true"
        className="absolute -left-[1.72rem] top-6 size-2.5 rounded-full bg-accent-cyan shadow-[0_0_18px_rgba(61,220,255,0.45)]"
      />

      <article className="rounded-[var(--radius-panel-xl)] bg-bg-900/30 p-5 ring-1 ring-white/5 transition hover:bg-bg-900/40 hover:ring-accent-cyan/20">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-accent-cyan">
              [{credential.period}]
              <span className="text-text-muted">
                {" "}
                • {formatCredentialType(credential.type)}
              </span>
            </p>

            <h3 className="mt-2 text-lg font-semibold text-text-primary">
              {credential.institution}
            </h3>

            <p className="mt-1 text-sm font-medium text-text-secondary">
              {credential.title}
            </p>

            {credential.location ? (
              <p className="mt-1 text-sm text-text-muted">
                {credential.location}
              </p>
            ) : null}
          </div>

          <CredentialStatusBadge status={credential.status} />
        </header>

        {credential.description ? (
          <section aria-label={`${credential.title} credential context`}>
            <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-text-muted">
              Technical Relevance
            </p>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-text-secondary">
              {credential.description}
            </p>
          </section>
        ) : null}

        {credential.credentialId || credential.verificationHref ? (
          <CredentialVerification credential={credential} />
        ) : null}
      </article>
    </li>
  );
}

interface CredentialStatusBadgeProps {
  readonly status: CredentialEntry["status"];
}

/**
 * Credential status badge.
 */
function CredentialStatusBadge({ status }: CredentialStatusBadgeProps) {
  return (
    <span className="w-fit rounded-full bg-bg-850/60 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-text-secondary ring-1 ring-white/10">
      {formatCredentialStatus(status)}
    </span>
  );
}

interface CredentialVerificationProps {
  readonly credential: CredentialEntry;
}

/**
 * Optional credential verification layer.
 */
function CredentialVerification({ credential }: CredentialVerificationProps) {
  return (
    <section
      aria-label={`${credential.title} verification details`}
      className="mt-4 flex flex-col gap-3 rounded-[var(--radius-panel-lg)] bg-bg-800/20 p-4 ring-1 ring-white/5 sm:flex-row sm:items-center sm:justify-between"
    >
      {credential.credentialId ? (
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
          Credential ID:{" "}
          <span className="text-text-secondary">
            {credential.credentialId}
          </span>
        </p>
      ) : null}

      {credential.verificationHref ? (
        <a
          href={credential.verificationHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Verify ${credential.title}. Opens in a new tab.`}
          className="w-fit rounded-full bg-bg-850/70 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-accent-cyan ring-1 ring-white/10 transition hover:ring-accent-cyan/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
        >
          Verify Credential ↗
        </a>
      ) : null}
    </section>
  );
}

function formatCredentialStatus(status: CredentialEntry["status"]): string {
  const labels: Record<CredentialEntry["status"], string> = {
    IN_PROGRESS: "In Progress",
    COMPLETED: "Completed",
    CERTIFIED: "Certified",
  };

  return labels[status];
}

function formatCredentialType(type: CredentialEntry["type"]): string {
  const labels: Record<CredentialEntry["type"], string> = {
    DEGREE: "Degree",
    PROGRAM: "Program",
    CERTIFICATION: "Certification",
    DIPLOMA: "Diploma",
  };

  return labels[type];
}