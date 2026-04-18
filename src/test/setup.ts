/**
 * Test setup for Vitest + Testing Library.
 *
 * Purpose:
 * - Extend Vitest's `expect` with DOM matchers like:
 *   - toBeInTheDocument
 *   - toBeDisabled
 *   - toHaveTextContent
 *
 * Important:
 * - Use the `/vitest` entrypoint so matcher types and runtime wiring
 *   are applied correctly for Vitest.
 */
import "@testing-library/jest-dom/vitest";