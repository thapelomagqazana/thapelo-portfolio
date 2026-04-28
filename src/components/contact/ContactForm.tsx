import { useMemo, useState } from "react";

import { getContactConfig } from "./contact.config";
import { submitContactMessage } from "./contact.service";
import type {
  ContactSubmissionFeedback,
  ContactSubmissionPayload,
} from "./contact.types";
import {
  buildFallbackMailtoUrl,
  validateContactPayload,
} from "./contact.validation";

const INITIAL_FEEDBACK: ContactSubmissionFeedback = {
  state: "IDLE",
  message: "",
};

export interface ContactFormProps {
  /**
   * Optional submission handler override.
   *
   * Purpose:
   * - Allows tests to force success/failure.
   * - Allows future replacement with Formspree, Netlify Forms, custom API, or server actions.
   */
  readonly onSubmitMessage?: (
    payload: ContactSubmissionPayload,
  ) => Promise<void>;
}

/**
 * Production contact form for the Portfolio Control Room System.
 *
 * Responsibilities:
 * - Collect visitor name, email, and short message.
 * - Validate required fields before submission.
 * - Reject invalid email format.
 * - Prevent double-submit while sending.
 * - Submit to a configured managed endpoint.
 * - Provide accessible success/error feedback.
 * - Always expose a fallback email path.
 *
 * Security:
 * - Does not include SMTP credentials.
 * - Does not include private API keys.
 * - Does not include backend secrets.
 */
export function ContactForm({ onSubmitMessage }: ContactFormProps) {
  const [feedback, setFeedback] =
    useState<ContactSubmissionFeedback>(INITIAL_FEEDBACK);

  const config = useMemo(() => getContactConfig(), []);
  const fallbackUrl = buildFallbackMailtoUrl(config.fallbackEmail);
  const isSubmitting = feedback.state === "SUBMITTING";

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    /**
     * Honeypot spam protection.
     *
     * Real users should never complete this hidden field.
     * If it contains a value, silently pretend success to avoid giving bots feedback.
     */
    const honeypot = String(formData.get("company") ?? "").trim();

    if (honeypot) {
      setFeedback({
        state: "SUCCESS",
        message: "Message sent successfully. I’ll respond as soon as possible.",
      });

      form.reset();
      return;
    }

    const payload: ContactSubmissionPayload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const validation = validateContactPayload(payload);

    if (!validation.valid) {
      setFeedback({
        state: "ERROR",
        message: validation.message ?? "Please check the form and try again.",
      });
      return;
    }

    const submitMessage =
      onSubmitMessage ??
      ((validPayload: ContactSubmissionPayload) =>
        submitContactMessage(config.endpoint, validPayload).then(() => undefined));

    setFeedback({
      state: "SUBMITTING",
      message: "Sending transmission...",
    });

    try {
      await submitMessage(payload);

      setFeedback({
        state: "SUCCESS",
        message: "Message sent successfully. I’ll respond as soon as possible.",
      });

      form.reset();
    } catch {
      setFeedback({
        state: "ERROR",
        message:
          "Message could not be sent. Please use the fallback email option below.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mt-6 rounded-[var(--radius-panel-xl)] bg-bg-800/20 p-5 ring-1 ring-white/5"
    >
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent-cyan">
        Short Message
      </p>

      <div className="mt-4 grid gap-4">
        <FormField id="contact-name" name="name" label="Name" type="text" />

        <FormField id="contact-email" name="email" label="Email" type="email" />

        <div>
          <label
            htmlFor="contact-message"
            className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted"
          >
            Message
          </label>

          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            minLength={10}
            maxLength={1500}
            placeholder="Tell me what you are building or hiring for..."
            className="mt-2 w-full resize-none rounded-[var(--radius-panel-md)] border border-border-subtle bg-bg-900/50 px-4 py-3 text-sm text-text-primary outline-none transition focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/30"
          />
        </div>

        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        className="mt-5 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-panel-md)] border border-accent-cyan/40 bg-accent-cyan/10 px-5 py-3 text-sm font-semibold text-accent-cyan transition hover:-translate-y-0.5 hover:bg-accent-cyan/15 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      <SubmissionFeedback feedback={feedback} />

      <p className="mt-4 text-sm leading-6 text-text-muted">
        Fallback path:{" "}
        <a
          href={fallbackUrl}
          className="font-semibold text-accent-cyan underline-offset-4 hover:underline"
        >
          email me directly
        </a>
      </p>
    </form>
  );
}

interface FormFieldProps {
  readonly id: string;
  readonly name: string;
  readonly label: string;
  readonly type: "text" | "email";
}

/**
 * Reusable labelled input field.
 *
 * Purpose:
 * - Centralizes styling.
 * - Preserves accessible label/input relationships.
 * - Keeps the main form easier to scan.
 */
function FormField({ id, name, label, type }: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-text-muted"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-[var(--radius-panel-md)] border border-border-subtle bg-bg-900/50 px-4 py-3 text-sm text-text-primary outline-none transition focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/30"
      />
    </div>
  );
}

interface SubmissionFeedbackProps {
  readonly feedback: ContactSubmissionFeedback;
}

/**
 * Accessible submission feedback.
 *
 * Purpose:
 * - Announces success/error/submitting states.
 * - Uses role="alert" for errors.
 * - Uses role="status" for non-error updates.
 */
function SubmissionFeedback({ feedback }: SubmissionFeedbackProps) {
  if (feedback.state === "IDLE") {
    return null;
  }

  const isError = feedback.state === "ERROR";

  return (
    <p
      role={isError ? "alert" : "status"}
      aria-live={isError ? "assertive" : "polite"}
      className={
        isError
          ? "mt-4 rounded-[var(--radius-panel-md)] bg-red-500/10 px-4 py-3 text-sm leading-6 text-red-200 ring-1 ring-red-400/20"
          : "mt-4 rounded-[var(--radius-panel-md)] bg-accent-green/10 px-4 py-3 text-sm leading-6 text-text-secondary ring-1 ring-accent-green/20"
      }
    >
      {feedback.message}
    </p>
  );
}