/**
 * About page content. Narrative + principles, intentionally not a résumé.
 * No invented metrics, clients, or testimonials.
 */
import type { Accent, IconPaths } from "../lib/types";
import { icons } from "../lib/icons";

export const about = {
  eyebrow: "About",
  title: "I build automation that respects the work.",
  intro: [
    "I'm Cristen Joy Dimaguila, an AI Automation Specialist. I design practical workflows that connect the tools a business already uses, so repetitive work runs on its own and people stay focused on judgment, relationships, and the decisions automation should not make.",
    "Most of my work lives in n8n, Google Apps Script, and AI, tied together with webhooks, databases, and messaging channels. I care about systems that are clear, maintainable, and honest about where a human still needs to step in.",
  ],

  /** Small "control panel" of focus areas shown beside the intro. */
  focus: {
    label: "Focus areas",
    items: [
      { label: "AI chatbots & assistants", accent: "peri" as Accent },
      { label: "n8n workflow automation", accent: "sky" as Accent },
      { label: "Client onboarding systems", accent: "mint" as Accent },
      { label: "AI content automation", accent: "lilac" as Accent },
      { label: "Multi-client platforms", accent: "sky" as Accent },
      { label: "Integrations & Apps Script", accent: "peri" as Accent },
    ],
  },

  principles: {
    eyebrow: "How I work",
    title: "A few principles behind every build.",
    items: [
      { title: "Automate the repetitive", body: "Free people from copy-paste work so their time goes to decisions, relationships, and the exceptions that need a human.", accent: "peri" as Accent, icon: icons.refresh as IconPaths },
      { title: "Keep humans in the loop", body: "I don't claim a workflow is fully automatic when a person still needs to review or approve. The handoff points are part of the design.", accent: "mint" as Accent, icon: icons.users as IconPaths },
      { title: "Build for maintainability", body: "Clear, reusable structures that can adapt to a new client or industry instead of being rebuilt from scratch every time.", accent: "sky" as Accent, icon: icons.workflow as IconPaths },
      { title: "Connect existing tools", body: "I work with the tools a team already relies on, like Google Workspace, messaging channels, and databases, rather than forcing a new platform.", accent: "lilac" as Accent, icon: icons.plug as IconPaths },
    ],
  },

  servicesSection: {
    eyebrow: "What I can build",
    title: "Automation work I take on.",
    intro: "These are the kinds of systems I design and build. Every engagement starts with mapping your actual process first.",
  },

  cta: {
    eyebrow: "Consultation",
    title: "Have a process worth automating?",
    body: "Tell me what your team repeats every week, and let us map a system that takes it off their plate.",
    button: { label: "Request an Automation Consultation", href: "/contact" },
  },
};
