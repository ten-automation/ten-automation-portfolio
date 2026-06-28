/**
 * Contact page content + form schema. Add, remove, or reorder fields here;
 * the form component renders whatever this array describes.
 */
import { site, social, type ContactLink } from "./site";

export type FieldType = "text" | "email" | "textarea" | "select";

export interface FormField {
  /** Submitted field name (also used for the input id). */
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  /** For type "select". */
  options?: string[];
  /** Span the full grid width (textarea / wide fields). */
  full?: boolean;
}

export const contact = {
  eyebrow: "Contact",
  title: "Tell me what should not be manual anymore.",
  intro:
    "Share a little about your process and what you'd like to automate. The more concrete the example, the easier it is to map a workflow that fits.",

  /** Direct channels (rendered as cards). Accent + icon names map to the icon
   *  registry. LinkedIn / GitHub only appear when a real URL is set (see `social`). */
  channels: [
    { label: "Email", value: site.email, href: `mailto:${site.email}`, accent: "peri", icon: "mail" },
    ...(social.linkedin
      ? [{ label: "LinkedIn", value: "Connect on LinkedIn", href: social.linkedin, accent: "sky", icon: "share", external: true } as ContactLink]
      : []),
    ...(social.github
      ? [{ label: "GitHub", value: "View on GitHub", href: social.github, accent: "lilac", icon: "code", external: true } as ContactLink]
      : []),
  ] as ContactLink[],

  form: {
    heading: "Project inquiry",
    note: "No commitment. This is a consultation request, and I'll reply by email to talk through whether automation is a good fit.",
    submitLabel: "Send project inquiry",
    /** Shown after a successful Formspree submission (when configured). */
    successMessage: "Thanks, your inquiry was sent. I'll get back to you by email soon.",
    fields: [
      { name: "name", label: "Name", type: "text", required: true, placeholder: "Your full name" },
      { name: "email", label: "Email", type: "email", required: true, placeholder: "you@company.com" },
      { name: "company", label: "Company", type: "text", placeholder: "Company or business name" },
      {
        name: "current_process",
        label: "Current manual process",
        type: "textarea",
        required: true,
        full: true,
        placeholder: "What does your team do by hand today that you'd like to improve?",
      },
      {
        name: "current_tools",
        label: "Tools currently used",
        type: "text",
        full: true,
        placeholder: "e.g. Google Sheets, Messenger, Gmail, a CRM…",
      },
      {
        name: "automation_goal",
        label: "What you want automated",
        type: "textarea",
        required: true,
        full: true,
        placeholder: "Describe the outcome you're hoping for.",
      },
      {
        name: "timeline",
        label: "Estimated project timeline",
        type: "select",
        options: ["Just exploring", "Not sure yet", "Within 1 month", "1–3 months", "3+ months"],
      },
    ] as FormField[],
  },
};
