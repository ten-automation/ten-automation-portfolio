/**
 * Site-wide configuration: brand, navigation, footer, contact + social links,
 * Calendly / discovery booking config, and SEO defaults. Edit here — no layout
 * component hardcodes these.
 */

export const site = {
  /** Person the portfolio represents. */
  owner: "Cristen Joy Dimaguila",
  fullName: "Cristen Joy Omaña Dimaguila",
  role: "AI Automation Specialist",
  brand: "Cristen Joy",
  brandSub: "AI Automation",
  email: "cristen.automation@gmail.com",

  /** Used for <title> suffix and copyright. */
  siteName: "Cristen Joy Dimaguila | AI Automation Specialist",
  shortBio:
    "AI Automation Specialist building practical workflows with n8n, Apps Script, and AI. Systems that connect your tools, reduce manual work, and keep daily operations easier to manage.",
  availability: "Available for new automation projects",
  copyrightLine: "Built with automation in mind.",

  /**
   * Pre-call notes form endpoint. Paste a Formspree form ID (or any POST
   * endpoint). When left as the placeholder, the pre-call questionnaire becomes
   * a "pre-call notes" helper that opens the visitor's email client instead of
   * storing anything — so nothing breaks before setup.
   * Get one free at https://formspree.io.
   */
  formEndpoint: "https://formspree.io/f/your-form-id",
} as const;

/**
 * Social / professional profile links. Leave a value empty ("") to hide that
 * link everywhere on the site (footer, contact band, contact page). Only set a
 * real, complete profile URL here — a generic homepage like
 * "https://www.linkedin.com/" must never be shipped as if it were a profile, so
 * those links stay hidden until a real URL is provided.
 */
export const social = {
  linkedin: "", // e.g. "https://www.linkedin.com/in/your-handle"
  github: "",   // e.g. "https://github.com/your-username"
} as const;

/**
 * Discovery call + Calendly configuration. All booking wiring lives here so the
 * Discovery Call section stays editable without touching components.
 *
 *  - calendlyUrl ............ your Calendly event link (e.g. .../discovery-call)
 *  - calendlyRoutingFormUrl . optional Calendly Routing Form link. When set, it
 *                             becomes the PREFERRED booking flow (used for the
 *                             inline embed and the "Open Calendly" button).
 *  - calendlyEmbedMode ...... "inline" (embed in the page) or "popup" (button
 *                             opens the Calendly popup widget).
 *  - discoveryCallEnabled ... master switch for the booking section.
 *
 * To change the booking link, edit `calendlyUrl` below (or `calendlyRoutingFormUrl`).
 * The pre-call questions are managed inside Calendly as Invitee Questions, not on
 * the website (see README). Until a real URL is set, a placeholder renders.
 */
export const calendly = {
  discoveryCallEnabled: true,
  // Verified live event (loads a real scheduler). NOTE: ".../30min" does NOT
  // exist on this Calendly account — create that event in Calendly first if you
  // want to switch to it. Until then keep this working "discovery-meeting" URL.
  calendlyUrl: "https://calendly.com/cristen-automation/discovery-meeting",
  calendlyRoutingFormUrl: "",
  calendlyEmbedMode: "inline" as "inline" | "popup",
} as const;

/** True only when a real (non-placeholder) Calendly link has been configured. */
export function calendlyConfigured(): boolean {
  const url = calendly.calendlyRoutingFormUrl || calendly.calendlyUrl;
  return Boolean(url) && !url.includes("your-handle") && !url.includes("your-routing");
}

/** The booking URL the section should use (routing form wins when present). */
export function calendlyBookingUrl(): string {
  return calendly.calendlyRoutingFormUrl || calendly.calendlyUrl;
}

/**
 * Certifications gallery. Certificate images live in a Google Drive folder and
 * render as custom, portfolio-styled cards (no Drive UI is ever shown to
 * visitors). When you upload a new image to the folder it appears automatically;
 * each card title is derived from the file name.
 *
 * The browser reads the folder via the Google Drive API. Provide a PUBLIC,
 * restricted browser key as `PUBLIC_GOOGLE_DRIVE_API_KEY` in a `.env` file
 * (see README). The key is safe to ship (like a Maps key) ONLY because you
 * restrict it in Google Cloud to the Drive API + your site's HTTP referrers.
 * Without the key, a polished "being connected" empty state shows instead.
 *
 * The Drive folder must be shared "Anyone with the link" -> Viewer (README).
 */
export const certifications = {
  enabled: true,
  source: "google-drive" as const,
  driveFolderId: "1lVu9j32XvV-2mt4PNYbHVMw6hcNA4fnH",
  driveFolderUrl: "https://drive.google.com/drive/folders/1lVu9j32XvV-2mt4PNYbHVMw6hcNA4fnH",
  /** Section copy (client-facing). */
  id: "certifications",
  eyebrow: "Credentials",
  title: "Certifications",
  intro:
    "Selected training and certifications related to automation, AI tools, process improvement, and quality-focused operations.",
} as const;

export interface NavItem {
  label: string;
  /** Same-page scroll target on the homepage; works from other pages too. */
  href: string;
  /** Stable key used to highlight the active link. */
  key: "automate" | "systems" | "process" | "contact";
}

/**
 * Primary navigation. The homepage is a single scroll-driven page, so links
 * point at on-page section anchors (prefixed with "/" so they also work from
 * the standalone project / system pages — they route home, then scroll).
 */
export const navItems: NavItem[] = [
  { label: "What I Automate", href: "/#work-i-automate", key: "automate" },
  { label: "Systems", href: "/#systems", key: "systems" },
  { label: "Process", href: "/#process", key: "process" },
  { label: "Contact", href: "/#contact", key: "contact" },
];

export const navCta = { label: "Book a Discovery Call", href: "/#discovery-call" };

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

/** "Connect" column — LinkedIn only appears when a real URL is set (see `social`). */
const connectLinks: FooterLink[] = [
  { label: "Book a Discovery Call", href: "/#discovery-call" },
  ...(social.linkedin ? [{ label: "LinkedIn", href: social.linkedin, external: true }] : []),
  { label: "Email", href: `mailto:${site.email}` },
];

export const footer = {
  columns: [
    {
      title: "Explore",
      links: [
        { label: "What I Automate", href: "/#work-i-automate" },
        { label: "Automation Systems", href: "/#systems" },
        { label: "Discovery Process", href: "/#process" },
      ] as FooterLink[],
    },
    {
      title: "Connect",
      links: connectLinks,
    },
  ],
};

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  accent: "peri" | "sky" | "lilac";
  icon: "mail" | "share" | "calendar" | "code";
  external?: boolean;
}

/** Direct contact channels surfaced in the contact footer band. LinkedIn only
 *  appears when a real URL is set (see `social`). */
export const contactLinks: ContactLink[] = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, accent: "peri", icon: "mail" },
  ...(social.linkedin
    ? [{ label: "LinkedIn", value: "Connect on LinkedIn", href: social.linkedin, accent: "sky", icon: "share", external: true } as ContactLink]
    : []),
  { label: "Book a call", value: "Discovery call", href: "/#discovery-call", accent: "lilac", icon: "calendar" },
];

/** Default SEO metadata; pages override per-page. */
export const seoDefaults = {
  titleSuffix: site.siteName,
  description:
    "AI Automation Specialist building n8n, Apps Script, AI chatbot, client onboarding, reporting, and workflow automation systems for businesses that want to reduce manual work.",
  keywords: [
    "AI automation",
    "n8n",
    "workflow automation",
    "Apps Script",
    "chatbot automation",
    "client onboarding automation",
  ],
  ogImage: "/og-default.png",
  locale: "en_US",
};
