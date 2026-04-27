import { useState } from "react";

import type { ContactSubmissionFeedback } from "./contact.types";

const INITIAL_FEEDBACK: ContactSubmissionFeedback = {
  state: "IDLE",
  message: "",
};

export interface ContactFormProps {
  /**
   * Submission handler.
   *
   * Purpose:
   * - Allows tests to control success and failure.
   * - Allows future integration with Formspree, Netlify Forms, or a custom API.
   */
  readonly onSubmitMessage?: () => Promise<void>;
}

/**
 * Lightweight contact form.
 *
 * Responsibilities:
 * - Collect a short visitor message.
 * - Prevent double-submission while sending.
 * - Provide immediate accessible success/error feedback.
 *
 * Accessibility:
 * - Uses labelled fields.
 * - Uses role="status" for non-error feedback.
 * - Uses role="alert" for error feedback.
 */
export function ContactForm({ onSubmitMessage }: ContactFormProps) {
  const [feedback, setFeedback] =
    useState<ContactSubmissionFeedback>(INITIAL_FEEDBACK);

  const isSubmitting = feedback.state === "SUBMITTING";

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;
    const submitMessage = onSubmitMessage ?? simulateSubmit;

    setFeedback({
      state: "SUBMITTING",
      message: "Sending transmission...",
    });

    try {
      await submitMessage();

      setFeedback({
        state: "SUCCESS",
        message: "Message sent successfully. I’ll respond as soon as possible.",
      });

      form.reset();
    } catch {
      setFeedback({
        state: "ERROR",
        message:
          "Message could not be sent. Please try again or email me directly.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 rounded-[var(--radius-panel-xl)] bg-bg-800/20 p-5 ring-1 ring-white/5"
    >
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent-cyan">
        Short Message
      </p>

      <div className="mt-4 grid gap-4">
        <FormField id="contact-name" label="Name" type="text" required />

        <FormField id="contact-email" label="Email" type="email" required />

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
            placeholder="Tell me what you are building or hiring for..."
            className="mt-2 w-full resize-none rounded-[var(--radius-panel-md)] border border-border-subtle bg-bg-900/50 px-4 py-3 text-sm text-text-primary outline-none transition focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/30"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-panel-md)] border border-accent-cyan/40 bg-accent-cyan/10 px-5 py-3 text-sm font-semibold text-accent-cyan transition hover:-translate-y-0.5 hover:bg-accent-cyan/15 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      <SubmissionFeedback feedback={feedback} />
    </form>
  );
}

interface FormFieldProps {
  readonly id: string;
  readonly label: string;
  readonly type: "text" | "email";
  readonly required?: boolean;
}

/**
 * Reusable labelled input field.
 */
function FormField({ id, label, type, required = false }: FormFieldProps) {
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
        name={id}
        type={type}
        required={required}
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
 * - Confirm success immediately.
 * - Communicate failure with recovery guidance.
 * - Announce submitting/success/error states to assistive technology.
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

/**
 * Temporary submit simulator.
 *
 * Replace with:
 * - Formspree
 * - Netlify Forms
 * - custom API endpoint
 * - server action
 */
async function simulateSubmit(): Promise<void> {
  await new Promise((resolve) => window.setTimeout(resolve, 700));
}