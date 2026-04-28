import type { ContactSubmissionPayload } from "./contact.types";

export interface ContactValidationResult {
  readonly valid: boolean;
  readonly message?: string;
}

/**
 * Basic email pattern.
 *
 * Purpose:
 * - Reject obviously invalid email input before submission.
 * - Avoid pretending to fully validate deliverability on the frontend.
 */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Maximum message length.
 *
 * Purpose:
 * - Reduces abuse.
 * - Keeps provider payloads small.
 * - Protects UI from extreme input.
 */
const MAX_MESSAGE_LENGTH = 1500;

/**
 * Minimum message length.
 *
 * Purpose:
 * - Blocks accidental empty/near-empty submissions.
 */
const MIN_MESSAGE_LENGTH = 10;

/**
 * Validates the contact payload before submission.
 *
 * Security:
 * - Performs client-side validation for UX.
 * - Must not be treated as the only validation layer if a backend is added later.
 */
export function validateContactPayload(
  payload: ContactSubmissionPayload,
): ContactValidationResult {
  const name = payload.name.trim();
  const email = payload.email.trim();
  const message = payload.message.trim();

  if (!name) {
    return { valid: false, message: "Please enter your name." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { valid: false, message: "Please enter a valid email address." };
  }

  if (message.length < MIN_MESSAGE_LENGTH) {
    return {
      valid: false,
      message: "Please enter a message with at least 10 characters.",
    };
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return {
      valid: false,
      message: "Please keep your message under 1500 characters.",
    };
  }

  return { valid: true };
}

/**
 * Builds a safe mailto fallback URL.
 *
 * Purpose:
 * - Keeps contact availability at 100%.
 * - Gives visitors a recovery path if provider submission fails.
 */
export function buildFallbackMailtoUrl(email: string): string {
  const subject = encodeURIComponent("Portfolio contact request");
  const body = encodeURIComponent(
    "Hi Thapelo,\n\nI tried using the portfolio contact form and would like to connect.\n\n",
  );

  return `mailto:${email}?subject=${subject}&body=${body}`;
}