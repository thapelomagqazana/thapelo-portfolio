import type {
  ContactSubmissionPayload,
  ContactSubmissionResult,
} from "./contact.types";

/**
 * Submits a contact message to a managed form/email provider.
 *
 * Security:
 * - Uses only a public endpoint configured through environment variables.
 * - Does not expose SMTP credentials.
 * - Does not expose private provider API keys.
 * - Does not include backend secrets in the frontend bundle.
 *
 * Reliability:
 * - Uses AbortSignal so future callers can add timeout/cancellation behavior.
 */
export async function submitContactMessage(
  endpoint: string,
  payload: ContactSubmissionPayload,
  signal?: AbortSignal,
): Promise<ContactSubmissionResult> {
  if (!endpoint) {
    throw new Error("Contact endpoint is not configured.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: payload.name.trim(),
      email: payload.email.trim(),
      message: payload.message.trim(),

      /**
       * Honeypot field.
       *
       * Managed providers commonly support this style of spam protection.
       * Real users never fill it because the field is visually hidden.
       */
      company: "",
    }),
    signal,
  });

  if (!response.ok) {
    throw new Error(`Contact submission failed with status ${response.status}.`);
  }

  return { ok: true };
}