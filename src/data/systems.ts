/**
 * Automation Systems listing page (doubles as the Demo Lab listing).
 * Filters are matched against each project's `cats` array in projects.ts.
 */

export const systems = {
  eyebrow: "Automation systems",
  title: "Automation systems built for",
  titleHighlight: "real business workflows.",
  intro:
    "Explore AI chatbots, onboarding flows, content workflows, and multi-industry systems designed to reduce manual work and make operations easier to manage.",
  /** Decorative live workflow strip under the hero. */
  strip: [
    { label: "Trigger", accent: "peri" as const },
    { label: "Process", accent: "mint" as const },
    { label: "Route", accent: "lilac" as const },
    { label: "Deliver", accent: "sky" as const },
  ],
  /** Filter chips. `key` "all" matches everything; others match `cats`. */
  filters: [
    { key: "all", label: "All" },
    { key: "ai-chatbots", label: "AI Chatbots" },
    { key: "n8n", label: "n8n Workflows" },
    { key: "onboarding", label: "Client Onboarding" },
    { key: "content", label: "Content Automation" },
    { key: "multi-client", label: "Multi-client Systems" },
    { key: "multi-industry", label: "Multi-industry Systems" },
  ],
  cta: {
    eyebrow: "Consultation",
    title: "Have a workflow that should not stay manual?",
    body: "Tell me what your team is doing repeatedly, and let us explore how automation can take it off their plate.",
    button: { label: "Request an Automation Consultation", href: "/contact" },
  },
};
