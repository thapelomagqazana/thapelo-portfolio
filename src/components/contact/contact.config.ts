/**
 * Public contact configuration.
 *
 * Important:
 * - Vite only exposes variables prefixed with VITE_.
 * - Do not place SMTP credentials, private API keys, or backend secrets here.
 */
export interface ContactConfig {
  readonly endpoint: string;
  readonly fallbackEmail: string;
}

/**
 * Reads public runtime configuration from Vite environment variables.
 *
 * Required:
 * - VITE_CONTACT_ENDPOINT: Managed provider endpoint, e.g. Formspree/Netlify/custom public endpoint.
 * - VITE_CONTACT_EMAIL: Fallback public email address.
 */
export function getContactConfig(): ContactConfig {
  return {
    endpoint: import.meta.env.VITE_CONTACT_ENDPOINT ?? "",
    fallbackEmail: import.meta.env.VITE_CONTACT_EMAIL ?? "",
  };
}