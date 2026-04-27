import { BriefcaseBusiness, FileText, Mail, Send } from "lucide-react";

export type ContactIconName = "email" | "linkedin" | "github" | "resume";

export interface ContactIconProps {
  readonly name: ContactIconName;
}

/**
 * Contact icon renderer.
 *
 * Purpose:
 * - Centralize icon usage.
 * - Avoid unstable brand-icon imports.
 * - Keep icons decorative and non-essential.
 */
export function ContactIcon({ name }: ContactIconProps) {
  const className = "size-4";

  switch (name) {
    case "email":
      return <Mail className={className} aria-hidden="true" />;
    case "linkedin":
      return <BriefcaseBusiness className={className} aria-hidden="true" />;
    case "github":
      return <Send className={className} aria-hidden="true" />;
    case "resume":
      return <FileText className={className} aria-hidden="true" />;
  }
}