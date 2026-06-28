/**
 * Service cards (shown on the About page). Editable here — no component
 * hardcodes service copy. These describe the kinds of automation work on
 * offer, not specific guaranteed results.
 */
import type { Service } from "../lib/types";
import { icons } from "../lib/icons";

export const services: Service[] = [
  {
    title: "AI chatbots & assistants",
    body: "Customer-facing assistants that answer common questions with saved responses, use AI for the harder ones, qualify leads, and hand off to a person when it matters.",
    accent: "peri",
    icon: icons.messageCircle,
    points: ["One-question-at-a-time intake", "Memory-aware follow-up", "Human support handoff"],
  },
  {
    title: "n8n workflow automation",
    body: "Connected workflows that move data between your tools, with triggers, validation, routing, and notifications wired into one system that runs on its own.",
    accent: "sky",
    icon: icons.workflow,
    points: ["Webhook & API integration", "Data validation and routing", "Notifications and reporting"],
  },
  {
    title: "Client onboarding systems",
    body: "Repeatable setup flows that prepare a new client's workspace, files, forms, calendar, and message routing, with human review before going live.",
    accent: "mint",
    icon: icons.userCheck,
    points: ["Workspace & records setup", "Reusable across clients", "Recovery if a run stops"],
  },
  {
    title: "AI content automation",
    body: "Workflows that take a file and an instruction and prepare a polished output, such as a cleaner document, summary, or presentation, ready for human review.",
    accent: "lilac",
    icon: icons.sparkles,
    points: ["File & instruction intake", "Structured, polished output", "Quality review checkpoints"],
  },
  {
    title: "Multi-client & multi-industry platforms",
    body: "One reusable workflow structure configured per client and industry, so the same logic adapts to different business types without rebuilding it.",
    accent: "sky",
    icon: icons.sliders,
    points: ["Configurable business rules", "Separated client records", "Adaptable inquiry flows"],
  },
  {
    title: "Integrations & Apps Script",
    body: "Glue between Google Workspace, messaging channels, databases, and APIs, using Apps Script and webhooks that keep your existing tools talking to each other.",
    accent: "peri",
    icon: icons.plug,
    points: ["Google Workspace automation", "Webhook integration", "Custom Apps Script"],
  },
];
