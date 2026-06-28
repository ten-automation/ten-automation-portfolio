/**
 * Homepage content — the single, scroll-driven client conversion page.
 * Section order mirrors the page:
 *   1. Hero (role label, headline, portrait)
 *   2. Pain points  (#work-i-automate)
 *   3. Introduction (name card + intro card, revealed on scroll)
 *   4. Tools & Stack
 *   5. Capabilities
 *   6. Featured automation systems  (#systems)
 *   7. Discovery process  (#process)
 *   8. Discovery call + Calendly + pre-call questions  (#discovery-call)
 *   9. Contact footer  (#contact)
 * All visible copy lives here. No em dashes in visible copy (per brief).
 */
import type { Accent } from "../lib/types";
import { icons } from "../lib/icons";

export const home = {
  /* 1 — HERO ------------------------------------------------------------- */
  hero: {
    roleLabel: "AI Automation Specialist",
    /** Dominant headline (the client's pain). */
    headline: "Your team should not be stuck chasing forms, messages, reports, and follow-ups.",
    /** Outcome line (the strongest, most memorable part). Emphasized words use
     *  the accent colors via <strong>. */
    answerHtml:
      "Let <strong>automation</strong> handle the <strong>repeat work</strong> while people handle the <strong>decisions</strong>.",
    primaryCta: { label: "Book a Discovery Call", href: "#discovery-call" },
    secondaryCta: { label: "See Automation Systems", href: "#systems" },
    photoAlt: "Cristen Joy Dimaguila, AI Automation Specialist",
    scrollHint: "Scroll to explore",
  },

  /* 3 — INTRODUCTION ----------------------------------------------------- */
  intro: {
    name: "Cristen Joy Dimaguila",
    location: "Philippines",
    /** Emphasized phrases wrapped in <strong>; rendered with set:html. */
    copyHtml:
      "I build <strong>AI automation systems</strong> that connect business tools, messages, forms, spreadsheets, and reports into <strong>reliable workflows</strong>. My goal is to <strong>reduce manual work</strong>, <strong>save time</strong>, and make everyday operations easier to manage. I also have a background in <strong>customer service and operations quality assurance</strong>, which helps me understand <strong>real business processes</strong>, spot <strong>recurring issues</strong>, and build automations with <strong>clear logic</strong>, <strong>practical checks</strong>, and <strong>useful documentation</strong>.",
  },

  /* 2 — PAIN POINTS ------------------------------------------------------ */
  painPoints: {
    id: "work-i-automate",
    eyebrow: "Where automation helps",
    title: "Manual work I help turn into automation",
    intro: "If these slow your team down, they are good candidates for an automation workflow.",
    cards: [
      {
        accent: "peri" as Accent,
        icon: icons.messageCircle,
        pain: "Customer inquiries get buried while the team is busy.",
        outcome: "Capture the message, answer what can be answered, and notify a human when the conversation is ready.",
      },
      {
        accent: "sky" as Accent,
        icon: icons.messageHelp,
        pain: "The same questions are answered again and again.",
        outcome: "Use saved answers and guided intake so the team only steps in when judgment is needed.",
      },
      {
        accent: "lilac" as Accent,
        icon: icons.folder,
        pain: "Client setup starts from scratch every time.",
        outcome: "Prepare folders, forms, sheets, calendars, routing, and review steps in a repeatable flow.",
      },
      {
        accent: "mint" as Accent,
        icon: icons.lineChart,
        pain: "Reports take too long to prepare manually.",
        outcome: "Turn raw files into structured insights, summaries, and review-ready reports.",
      },
      {
        accent: "sky" as Accent,
        icon: icons.share,
        pain: "Data is copied between forms, sheets, messages, and tools.",
        outcome: "Move information between systems with fewer manual handoffs.",
      },
      {
        accent: "peri" as Accent,
        icon: icons.bell,
        pain: "Someone has to remember the next step.",
        outcome: "Trigger notifications, status updates, and follow-ups automatically.",
      },
    ],
  },

  /* 4 — TOOLS & STACK ---------------------------------------------------- */
  tools: {
    eyebrow: "Tools & Stack",
    title: "Tools I use to build connected automation systems",
    intro:
      "A practical stack for building workflows, connecting tools, organizing data, and using AI where it actually helps.",
    items: [
      { name: "n8n", accent: "peri" as Accent, icon: icons.workflow, primary: true, note: "Primary automation platform" },
      { name: "Google Apps Script", accent: "sky" as Accent, icon: icons.code },
      { name: "Google Sheets", accent: "mint" as Accent, icon: icons.table },
      { name: "Google Forms", accent: "lilac" as Accent, icon: icons.clipboardCheck },
      { name: "Google Workspace", accent: "peri" as Accent, icon: icons.grid },
      { name: "Supabase", accent: "mint" as Accent, icon: icons.database },
      { name: "REST APIs", accent: "sky" as Accent, icon: icons.braces },
      { name: "Webhooks", accent: "lilac" as Accent, icon: icons.plug },
      { name: "Gmail", accent: "mint" as Accent, icon: icons.mail },
      { name: "Claude", accent: "peri" as Accent, icon: icons.sparkles },
      { name: "OpenAI", accent: "sky" as Accent, icon: icons.zap },
    ],
  },

  /* 5 — CAPABILITIES ----------------------------------------------------- */
  capabilities: {
    eyebrow: "Capabilities",
    title: "Automation support for real operational work",
    intro:
      "These are the types of workflows I focus on, from customer intake and reporting to routing, documentation, and handoff.",
    cards: [
      { title: "Workflow Automation", desc: "Connect scattered tools into one flow that runs without manual steps.", accent: "peri" as Accent, icon: icons.workflow },
      { title: "n8n Workflow Development", desc: "Design, build, test, and maintain automation workflows in n8n.", accent: "sky" as Accent, icon: icons.gitBranch },
      { title: "Google Apps Script Automation", desc: "Custom scripts that automate Sheets, Forms, Gmail, and Drive.", accent: "mint" as Accent, icon: icons.code },
      { title: "API and Webhook Integrations", desc: "Wire services together with REST APIs and real-time webhooks.", accent: "lilac" as Accent, icon: icons.plug },
      { title: "Client Onboarding Systems", desc: "Repeatable setup flows that get new clients running faster.", accent: "sky" as Accent, icon: icons.userCheck },
      { title: "Reporting and Dashboard Automation", desc: "Pull data into clean, auto-updating reports and dashboards.", accent: "mint" as Accent, icon: icons.lineChart },
      { title: "QA / Operations Automation", desc: "Validation and routing that keep operations consistent.", accent: "lilac" as Accent, icon: icons.shieldCheck },
      { title: "Documentation and Handover", desc: "Clear documentation so a system is easy to run and hand off.", accent: "peri" as Accent, icon: icons.fileText },
    ],
  },

  /* 6 — FEATURED AUTOMATION SYSTEMS -------------------------------------- */
  featured: {
    id: "systems",
    eyebrow: "Featured automation systems",
    title: "Automation systems I am building",
    intro:
      "Scroll through each system to see how I approach customer messages, client onboarding, file transformation, and reusable workflow logic.",

    /**
     * Each system is its own showcase block (alternating sides, revealed one by
     * one on scroll) with an animated flow preview. `slug` links to the full
     * case-study route. `flow` nodes reveal one by one; connectors flow.
     */
    systems: [
      {
        slug: "ai-catering-chatbot",
        title: "AI Catering Chatbot",
        category: "AI Chatbot",
        accent: "peri" as Accent,
        icon: icons.messageCircle,
        demoVideoUrl: "", // YouTube, Vimeo, Loom, or direct .mp4 URL. Empty = "Demo coming soon".
        description:
          "A multi-client chatbot flow for catering inquiries that answers customer questions, collects event details one step at a time, detects booking intent, and brings in human support when the conversation is ready to move forward.",
        problem:
          "Catering inquiries pile up faster than a small team can answer, so good leads get buried while staff are busy.",
        approach:
          "The chatbot answers common questions, collects event details, checks booking intent, and hands off to a person when it matters.",
        tags: ["n8n", "AI", "Messenger", "Human handoff"],
        flowTitle: "AI Chatbot Flow Preview",
        flow: [
          { label: "Customer inquiry", tag: "IN", accent: "sky" as Accent },
          { label: "Chatbot answers and guides", tag: "AI", accent: "peri" as Accent },
          { label: "Collects event details", tag: "FORM", accent: "mint" as Accent },
          { label: "Checks booking intent", tag: "LOGIC", accent: "lilac" as Accent },
          { label: "Human support handoff", tag: "HUMAN", accent: "sky" as Accent },
          { label: "Lead captured", tag: "DONE", accent: "mint" as Accent },
        ],
      },
      {
        slug: "automated-client-onboarding",
        title: "Automated Client Onboarding",
        category: "Client Onboarding",
        accent: "mint" as Accent,
        icon: icons.userCheck,
        demoVideoUrl: "", // YouTube, Vimeo, Loom, or direct .mp4 URL. Empty = "Demo coming soon".
        description:
          "A reusable onboarding automation that prepares a new client's setup by creating or reusing Supabase resources, database tables, Google Drive folders, Sheets, Forms, booking calendar, Apps Script setup, sync settings, and routing. It includes validation and recovery logic so onboarding can be rerun safely without duplicating setup, while keeping each client's data and routing separated before live testing.",
        problem:
          "Setting up a new client by hand is scattered and easy to duplicate, miss a step, or lose track of what belongs to whom.",
        approach:
          "One reusable workflow prepares or reuses each client's setup, with validation and recovery so it can be rerun safely.",
        tags: ["n8n", "Supabase", "Google Workspace", "Reusable"],
        flowTitle: "Onboarding Flow Preview",
        flow: [
          { label: "Client details received", tag: "IN", accent: "mint" as Accent },
          { label: "Preview and validate", tag: "CHECK", accent: "sky" as Accent },
          { label: "Create or reuse setup", tag: "BUILD", accent: "peri" as Accent },
          { label: "Connect forms and sheets", tag: "SYNC", accent: "lilac" as Accent },
          { label: "Prepare routing", tag: "ROUTE", accent: "mint" as Accent },
          { label: "Ready for review", tag: "REVIEW", accent: "sky" as Accent },
        ],
      },
      {
        slug: "project-peacock",
        title: "Project Peacock",
        category: "Content Automation",
        accent: "lilac" as Accent,
        icon: icons.sparkles,
        demoVideoUrl: "", // YouTube, Vimeo, Loom, or direct .mp4 URL. Empty = "Demo coming soon".
        description:
          "A WhatsApp-based AI content transformation workflow where a user sends a file plus instructions, and the system processes it into the requested output such as a promotional magazine, presentation, summary, or business document before returning the result.",
        problem:
          "Content requests arrive as messy files and vague instructions that take hours to rewrite, format, and export.",
        approach:
          "A WhatsApp workflow turns a file plus an instruction into a polished output, keeping human review before final delivery.",
        tags: ["WhatsApp", "AI", "Document output", "Human review"],
        flowTitle: "Content Flow Preview",
        flow: [
          { label: "File sent via WhatsApp", tag: "IN", accent: "mint" as Accent },
          { label: "Read the instruction", tag: "READ", accent: "sky" as Accent },
          { label: "Analyze the content", tag: "AI", accent: "peri" as Accent },
          { label: "Transform the output", tag: "BUILD", accent: "lilac" as Accent },
          { label: "Human review", tag: "REVIEW", accent: "mint" as Accent },
          { label: "Deliver result", tag: "DONE", accent: "sky" as Accent },
        ],
      },
      {
        slug: "project-chameleon",
        title: "Project Chameleon",
        category: "Multi-industry n8n",
        accent: "sky" as Accent,
        icon: icons.refresh,
        demoVideoUrl: "", // YouTube, Vimeo, Loom, or direct .mp4 URL. Empty = "Demo coming soon".
        description:
          "A reusable multi-client automation framework inspired by the catering system, designed to adapt inquiry handling, intake questions, routing, and handoff logic for different industries.",
        problem:
          "Different industries need different customer flows, so automations get rebuilt from scratch for every new business type.",
        approach:
          "One reusable framework adapts intake questions, routing, and handoff logic per client and industry.",
        tags: ["Multi-client", "n8n", "Industry-adaptable", "Human handoff"],
        flowTitle: "Adaptive Flow Preview",
        flow: [
          { label: "Customer inquiry", tag: "IN", accent: "mint" as Accent },
          { label: "Detect client and industry", tag: "MATCH", accent: "sky" as Accent },
          { label: "Load business rules", tag: "RULES", accent: "peri" as Accent },
          { label: "Guided intake", tag: "FORM", accent: "lilac" as Accent },
          { label: "Handoff decision", tag: "LOGIC", accent: "mint" as Accent },
          { label: "Record and notify", tag: "DONE", accent: "sky" as Accent },
        ],
      },
    ],
  },

  /* 7 — DISCOVERY PROCESS ------------------------------------------------ */
  discoveryProcess: {
    id: "process",
    eyebrow: "Discovery process",
    title: "What happens in the discovery call",
    intro:
      "The call is a short workflow review. We look at what is manual, what tools are involved, and what can realistically be automated first.",
    steps: [
      {
        accent: "peri" as Accent,
        icon: icons.search,
        title: "Map the current process",
        copy: "We look at what your team is doing manually, where the data starts, and where it needs to go.",
      },
      {
        accent: "lilac" as Accent,
        icon: icons.workflow,
        title: "Find automation opportunities",
        copy: "We identify repeated steps, handoffs, reports, messages, approvals, or updates that can become a workflow.",
      },
      {
        accent: "mint" as Accent,
        icon: icons.shieldCheck,
        title: "Choose a practical starting point",
        copy: "We decide what to automate first so the solution is useful, manageable, and easy to review.",
      },
    ],
    trustNote:
      "If a step still needs human judgment, the automation should support that handoff instead of hiding it.",
  },

  /* 8 — DISCOVERY CALL --------------------------------------------------- */
  discoveryCall: {
    id: "discovery-call",
    eyebrow: "Discovery call",
    title: "Book a Discovery Call",
    statement:
      "Tell me what your team is still doing manually, and we'll map the best automation starting point.",
    supporting:
      "Choose a time through Calendly and answer the built-in questions there so the call can focus on your current process, tools, bottlenecks, and automation goals.",
    cta: "Book a Discovery Call",
    formHeading: "Pre-call questions",
    /**
     * Pre-call questionnaire — the canonical list to add to your Calendly event
     * as Invitee Questions (see README), so it appears inside the scheduler
     * after a time is picked. Grouped + typed: "single" (radio), "multi"
     * (checkbox / dropdown), or "longtext" (one paragraph). Edit freely.
     */
    questionGroups: [
      {
        title: "Business context",
        questions: [
          {
            name: "business_type",
            label: "What best describes your business?",
            type: "single" as const,
            required: true,
            options: [
              "B2B Service Company",
              "Local Service Business",
              "Catering or Events Business",
              "Coaching, Consulting, or Online Education",
              "E-commerce or Retail Brand",
              "Real Estate or Property Services",
              "Financial Services or Insurance",
              "Medical, Dental, or Health Clinic",
              "Internal Operations Team",
              "Other Service-Based Business",
            ],
          },
          {
            name: "biggest_challenge",
            label: "What is your biggest challenge right now?",
            type: "single" as const,
            required: true,
            options: [
              "We are doing too many repetitive manual tasks",
              "Customer inquiries or leads are hard to track",
              "We keep answering the same questions repeatedly",
              "Client onboarding takes too much manual setup",
              "Reports take too long to prepare",
              "Data is scattered across forms, sheets, messages, and tools",
              "Handoffs are unclear or easy to miss",
              "We have no clear system yet and want to start from scratch",
            ],
          },
        ],
      },
      {
        title: "Current process",
        questions: [
          {
            name: "current_setup",
            label: "What is your current process or tool setup?",
            type: "single" as const,
            options: [
              "We use spreadsheets and manual tracking",
              "We use Google Workspace tools",
              "We use a CRM or project management tool",
              "We use Messenger, WhatsApp, Telegram, email, or chat tools",
              "We use several tools but they are not connected",
              "We already have some automation but it is not working well",
              "We do not have a system yet",
            ],
          },
          {
            name: "current_tools",
            label: "Which tools are currently involved?",
            type: "multi" as const,
            options: [
              "Google Sheets",
              "Google Forms",
              "Google Drive",
              "Gmail",
              "Messenger",
              "WhatsApp",
              "Telegram",
              "CRM",
              "Website form",
              "Supabase or database",
              "n8n",
              "Zapier",
              "Power Automate",
              "Other",
            ],
          },
          {
            name: "process_start",
            label: "Where does the process usually start?",
            type: "single" as const,
            options: [
              "Customer message",
              "Website or landing page form",
              "Google Form",
              "Spreadsheet",
              "Email",
              "Uploaded file or document",
              "Internal team request",
              "Manual task assigned by a team member",
              "Not sure",
            ],
          },
          {
            name: "information_destination",
            label: "Where should the information go?",
            type: "multi" as const,
            options: [
              "Google Sheet",
              "CRM",
              "Email notification",
              "Messenger or chat notification",
              "Telegram notification",
              "Database",
              "Dashboard or report",
              "Calendar",
              "Project management tool",
              "Client folder or workspace",
              "Not sure yet",
            ],
          },
          {
            name: "existing_examples",
            label: "Do you already have examples or files I can review?",
            type: "multi" as const,
            options: [
              "Screenshots of the current process",
              "Workflow notes or SOPs",
              "Google Sheets or reports",
              "Sample messages or inquiries",
              "Forms or intake questions",
              "A file or document that needs automation",
              "No examples yet",
            ],
          },
        ],
      },
      {
        title: "Automation goal",
        questions: [
          {
            name: "automation_goals",
            label: "What do you want your automation to do?",
            type: "multi" as const,
            required: true,
            options: [
              "Capture and organize customer inquiries",
              "Answer common questions automatically",
              "Collect details from clients or customers",
              "Route qualified leads or booking requests to a human",
              "Prepare client onboarding setup",
              "Move data between forms, sheets, messages, and tools",
              "Generate reports or dashboards",
              "Send reminders, alerts, or follow-ups",
              "Transform uploaded files into polished outputs",
              "Reduce repetitive admin work",
              "Improve visibility into operations",
              "I am not sure yet and need help mapping it",
            ],
          },
        ],
      },
      {
        title: "Budget and timeline",
        questions: [
          {
            name: "budget",
            label: "What is your budget range?",
            type: "single" as const,
            required: true,
            options: [
              "$2,000 to $3,000",
              "$3,000 to $5,000",
              "$5,000 to $8,000",
              "$8,000+",
              "Not sure yet",
            ],
          },
          {
            name: "timeline",
            label: "What is your preferred timeline?",
            type: "single" as const,
            required: true,
            options: [
              "Ready to start immediately",
              "Within the next 2 to 4 weeks",
              "Within the next 1 to 3 months",
              "Just exploring for now",
            ],
          },
          {
            name: "anything_else",
            label: "Anything else I should know before the call?",
            type: "longtext" as const,
            placeholder:
              "Tell me what is currently taking too much time, where the process gets messy, or what result you want from automation.",
          },
        ],
      },
    ],
  },

  /* 9 — CONTACT FOOTER BAND ---------------------------------------------- */
  contact: {
    id: "contact",
    eyebrow: "Contact",
    title: "Let us talk about what to automate first",
    body: "Prefer to reach out directly? Send a note about your process and I will reply by email.",
  },
};
