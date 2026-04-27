import { CONTACT_ACTIONS } from "./contact.content";
import { ContactActions } from "./ContactActions";

/**
 * Persistent compact contact surface.
 *
 * Purpose:
 * - Keep Email reachable from navigation-level UI.
 * - Avoid forcing visitors to scroll to the final contact section.
 */
export function QuickContactLink() {
  return <ContactActions actions={CONTACT_ACTIONS} variant="compact" />;
}