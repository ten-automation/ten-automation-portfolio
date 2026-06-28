/**
 * Project case studies — the single source of truth for every project page
 * and the Automation Systems listing. Edit titles, copy, workflow steps,
 * tools, tags, and demo placeholders here without touching any component.
 *
 * Each project renders at /projects/<slug>. Optional sections (sample
 * conversations, output types, industries, etc.) only render when present.
 */
import type { Project } from "../lib/types";
import { icons } from "../lib/icons";

export const projects: Project[] = [
  /* ========================================================================
     1 — AI Catering Chatbot
     ===================================================================== */
  {
    slug: "ai-catering-chatbot",
    title: "AI Catering Chatbot",
    category: "AI Chatbot",
    accent: "peri",
    icon: icons.messageCircle,
    featured: true,
    statusLabel: "Featured System",

    cardDescription:
      "A multi-client catering chatbot that answers customer inquiries, collects event details, guides clients through the booking flow, and brings in human support when a conversation is ready to move forward.",
    cardFlow: [
      { label: "Inquiry", accent: "sky" },
      { label: "AI reply", accent: "peri" },
      { label: "Booking", accent: "mint" },
    ],
    cats: ["ai-chatbots", "multi-client"],

    subtitle:
      "A multi-client catering chatbot that answers customer inquiries, collects event details, guides potential clients through the booking flow, and brings in human support when the conversation is ready to move forward.",
    tags: [
      { label: "AI chatbot", accent: "peri" },
      { label: "Saved responses", accent: "mint" },
      { label: "Memory-aware follow-up", accent: "sky" },
      { label: "Catering inquiries", accent: "lilac" },
      { label: "Human support", accent: "peri" },
      { label: "Connected workflow", accent: "mint" },
    ],

    problem: {
      title: "Inquiries pile up faster than a small team can answer.",
      body: "Catering inquiries often come through Facebook Messenger while the team is busy preparing events, answering repeat questions, and checking booking details. Important leads can get buried when every conversation has to be handled manually.",
    },
    solution: {
      title: "A chatbot that qualifies, then hands off.",
      body: "The chatbot helps manage Facebook Messenger inquiries by answering customers with saved responses, using AI only for more complex questions, collecting event details one step at a time, identifying booking intent, and notifying human support when a conversation is ready for personal follow-up.",
    },

    workflowTitle: "How the conversation flows.",
    workflowIntro:
      "Every step runs in order, from the first Facebook Messenger reply to a captured booking lead. Here is the full flow at a glance.",
    workflow: [
      { n: 1, accent: "sky", icon: icons.messageCircle, title: "Customer inquiry", desc: "A customer sends a message through Facebook Messenger asking about packages, availability, pricing, or booking details.", benefit: "New inquiries are captured as soon as they come in." },
      { n: 2, accent: "peri", icon: icons.messageCheck, title: "Chatbot answers and guides", desc: "Common questions are answered with saved responses, and AI handles more complex ones, guiding the conversation one step at a time without asking too much in a single message.", benefit: "Customers get clear replies without being overwhelmed." },
      { n: 3, accent: "mint", icon: icons.clipboard, title: "Collects event details", desc: "The system gathers event date, location, guest count, and inquiry type in a structured way, remembering earlier answers as it goes.", benefit: "Important details stay organized before human review." },
      { n: 4, accent: "lilac", icon: icons.search, title: "Checks booking intent", desc: "The workflow identifies whether the customer is only asking or already ready to book.", benefit: "Serious booking inquiries can be prioritized." },
      { n: 5, accent: "sky", icon: icons.users, title: "Human support handoff", desc: "When confirmation, judgment, or personal follow-up is needed, the system alerts human support.", benefit: "People stay involved at the right moment." },
      { n: 6, accent: "mint", icon: icons.fileCheck, title: "Lead or booking request captured", desc: "The conversation details are saved so the team can continue with full context.", benefit: "Messenger chats become trackable booking opportunities." },
    ],

    sampleConversations: {
      eyebrow: "Sample conversations",
      title: "How real chats play out.",
      intro:
        "Every conversation runs through Facebook Messenger, answering one question at a time and handing off to a person when it counts.",
      cards: [
        {
          tag: "Common inquiry",
          accent: "sky",
          channel: "Facebook Messenger",
          channelSub: "Catering Assistant",
          bubbles: [
            { from: "customer", text: "Hi, do you cater corporate lunches for around 60 people?" },
            { from: "system", text: "Yes, we can help with corporate lunches. What date are you planning for the event?" },
          ],
          note: "Collecting event details",
          noteAccent: "lilac",
        },
        {
          tag: "Human support handoff",
          accent: "mint",
          channel: "Facebook Messenger",
          channelSub: "Catering Assistant",
          bubbles: [
            { from: "customer", text: "This looks perfect. I would like to book for July 18, can we finalize today?" },
            { from: "system", text: "Wonderful! I am connecting you with our events team now so they can confirm the details with you." },
          ],
          note: "Routed to human support",
          noteAccent: "mint",
        },
        {
          tag: "Optional upsell",
          accent: "lilac",
          channel: "Facebook Messenger",
          channelSub: "Catering Assistant",
          bubbles: [
            { from: "customer", text: "We will go with the lunch buffet for 60 guests." },
            { from: "system", text: "Great choice! Many corporate lunches this size add a dessert table to round things out. Would you like me to include one in your quote?" },
            { from: "customer", text: "Oh that sounds nice, yes add it." },
          ],
        },
      ],
    },

    behaviors: [
      "Answers common questions with saved responses",
      "Remembers earlier answers for memory-aware follow-up",
      "Asks one question at a time",
      "Hands off to a person when ready or sensitive",
      "Optional tier-based upsell suggestions",
    ],

    humanReview: {
      intro:
        "The chatbot handles the first layer of customer inquiries, then brings in human support when a conversation needs confirmation, judgment, or personal follow-up.",
      automation: { title: "Chatbot handles", items: ["Common questions", "Event details", "Booking intent", "Lead capture"] },
      human: { title: "Human support handles", items: ["Final confirmation", "Sensitive requests", "Custom arrangements", "Personal follow-up"] },
    },

    outcomes: {
      title: "What this is built to deliver.",
      items: [
        "Faster first responses, even outside business hours",
        "Consistent answers to the questions that come up most",
        "Structured event details ready for a quote",
        "Human time focused on confirmation and judgment",
      ],
    },

    connectedPlatform: {
      eyebrow: "Connected platform",
      title: "Part of a larger catering automation platform.",
      body: "The chatbot can connect to onboarding, client records, booking intake, notifications, and operations workflows, making it part of a larger multi-client catering automation platform.",
      items: [
        { label: "Onboarding", dot: "#9db4f5" },
        { label: "Client records", dot: "#8fe2c6" },
        { label: "Booking intake", dot: "#c9aef2" },
        { label: "Notifications", dot: "#7cc4f7" },
        { label: "Operations workflows", dot: "#8fe2c6" },
      ],
    },

    demo: {
      intro: "Walkthrough video and screenshots will live here. These slots are ready to be filled.",
      videoLabel: "Demo video",
      videoHint: "[ add walkthrough video ]",
      slots: [
        { label: "Chat conversation preview", accent: "peri", icon: icons.messageCircle },
        { label: "Workflow screenshot", accent: "mint", icon: icons.workflow },
        { label: "Booking request output", accent: "sky", icon: icons.fileText },
        { label: "Human handoff notification", accent: "lilac", icon: icons.bell },
      ],
    },

    tools: [
      { label: "n8n", accent: "peri" },
      { label: "AI", accent: "lilac" },
      { label: "Apps Script", accent: "sky" },
      { label: "Webhooks", accent: "sky" },
      { label: "Facebook Messenger", accent: "mint" },
      { label: "Telegram", accent: "lilac" },
      { label: "Google Sheets", accent: "mint" },
      { label: "Supabase", accent: "sky" },
    ],
    toolsNote:
      "Facebook Messenger is the customer-facing channel. Telegram runs internal notifications and human support alerts only.",

    cta: {
      title: "Want a chatbot that supports real operations, not just conversations?",
      body: "Tell me how your team handles inquiries today, and let us map a flow that fits the way you actually work.",
    },
  },

  /* ========================================================================
     2 — Automated Client Onboarding
     ===================================================================== */
  {
    slug: "automated-client-onboarding",
    title: "Automated Client Onboarding",
    category: "Client Onboarding",
    accent: "mint",
    icon: icons.userCheck,
    completed: true,
    statusLabel: "Completed Workflow",

    cardDescription:
      "A reusable onboarding automation that prepares a new client's technical workspace by creating or reusing Supabase resources, database tables, Google Drive folders, Sheets, Forms, booking calendar, Apps Script setup, sync settings, and tenant routing. It includes validation and recovery logic so onboarding can be safely rerun without duplicating setup, while keeping each client's data and routing separated before live testing.",
    cardFlow: [
      { label: "Collect", accent: "mint" },
      { label: "Validate", accent: "sky" },
      { label: "Set up", accent: "peri" },
    ],
    cats: ["onboarding", "multi-client"],

    subtitle:
      "A repeatable setup workflow that prepares a new client's workspace, files, forms, calendar, message routing, and review steps so new clients can be launched faster and more consistently.",
    tags: [
      { label: "Client onboarding", accent: "mint" },
      { label: "Multi-client setup", accent: "lilac" },
      { label: "Google Workspace", accent: "peri" },
      { label: "Booking setup", accent: "sky" },
      { label: "Message routing", accent: "mint" },
      { label: "Human review", accent: "lilac" },
      { label: "Reusable workflow", accent: "sky" },
    ],

    problem: {
      title: "New client setup can get scattered quickly.",
      body: "Setting up a new client can involve folders, forms, sheets, calendars, message routes, tracking records, and review steps. When each part is handled manually, it becomes easy to miss something, duplicate work, or lose track of what belongs to which client.",
    },
    solution: {
      title: "One workflow prepares the client setup checklist.",
      body: "The onboarding workflow prepares or reuses the pieces a new client needs, organizes them in the right places, and flags anything that still needs human review before the client goes live.",
    },

    workflowTitle: "How the onboarding setup runs.",
    workflowIntro:
      "The workflow moves through each setup stage in order, from collecting the first client details to preparing a workspace that is ready for review.",
    workflow: [
      { n: 1, accent: "mint", icon: icons.user, title: "Client details received", desc: "Basic client information is collected so the setup starts from one clear source.", benefit: "Keeps client setup details organized from the beginning." },
      { n: 2, accent: "sky", icon: icons.eye, title: "Setup preview", desc: "The operator can preview what the workflow will create or reuse before applying changes.", benefit: "Reduces surprises before anything is changed." },
      { n: 3, accent: "peri", icon: icons.database, title: "Client space prepared", desc: "A separate, organized space for the client's records is created or reused.", benefit: "Keeps each client's records separated and easier to manage." },
      { n: 4, accent: "lilac", icon: icons.folder, title: "Workspace prepared", desc: "The workflow creates or reuses the client's Drive folder, subfolders, Sheet, Form, and calendar.", benefit: "Gives each client an organized workspace from day one." },
      { n: 5, accent: "sky", icon: icons.code, title: "Forms and sheets connected", desc: "The workflow links Google Sheets and Forms to the automation system so activity flows back automatically.", benefit: "Connects form activity and client records back into the workflow." },
      { n: 6, accent: "mint", icon: icons.gitBranch, title: "Message routing prepared", desc: "Messenger and Telegram routing details are saved when the required account details are already provided.", benefit: "Customer messages and business alerts can route to the correct client." },
      { n: 7, accent: "lilac", icon: icons.share, title: "Platform record updated", desc: "The client is added to the platform record so shared workflows know where that client's data and messages belong.", benefit: "Supports a multi-client setup without mixing client records." },
      { n: 8, accent: "peri", icon: icons.refresh, title: "Review and recovery", desc: "If setup stops halfway, the workflow can reuse what already exists and continue from the missing step.", benefit: "Avoids duplicate folders, forms, sheets, or projects." },
    ],

    prepare: {
      eyebrow: "What it can prepare",
      title: "Setup pieces the workflow can prepare.",
      intro: "Depending on the client setup, the workflow can create or reuse these items. Not every item is needed on every run.",
      items: [
        { label: "Client setup file", accent: "mint" },
        { label: "Client records space", accent: "sky" },
        { label: "Secure client database", accent: "peri" },
        { label: "Google Drive folder", accent: "lilac" },
        { label: "Organized subfolders", accent: "sky" },
        { label: "Google Sheet", accent: "mint" },
        { label: "Google Form", accent: "lilac" },
        { label: "Booking calendar", accent: "peri" },
        { label: "Forms & Sheets connection", accent: "sky" },
        { label: "Messenger routing details", accent: "mint" },
        { label: "Telegram alert route", accent: "lilac" },
        { label: "Client platform record", accent: "sky" },
        { label: "Service tier or status", accent: "peri" },
        { label: "Setup status checklist", accent: "mint" },
      ],
    },

    recovery: {
      eyebrow: "Recovery",
      title: "Built to continue after a stopped setup.",
      body: "If onboarding stops halfway, the workflow checks what already exists and continues from the missing step instead of creating duplicates. This helps keep setup clean even when an external approval or connection is still needed.",
      items: [
        "Reuses an existing client space if it is already there",
        "Reuses existing Drive folder, Sheet, Form, and calendar",
        "Reuses the existing connection when it already exists",
        "Pauses unfinished clients instead of marking them ready",
        "Continues from the missing step on the next run",
      ],
    },

    humanReview: {
      intro:
        "The workflow prepares the setup, but final review still matters before a client goes live. Human approval protects account access, message routing, live testing, and client-specific business details.",
      automation: {
        title: "Automation handles",
        items: ["Client detail intake", "Setup preview", "Workspace creation or reuse", "Forms, sheets, and calendar setup", "Connection preparation", "Message routing preparation", "Setup status tracking", "Operator alerts"],
      },
      human: {
        title: "Human handles",
        items: ["Client business details", "Real menus, packages, policies, and service areas", "Facebook Page and Meta permissions for Messenger", "Messenger access details", "Telegram bot or chat creation", "Google authorization if requested", "Final live testing", "Launch approval"],
      },
    },

    connectedPlatform: {
      eyebrow: "Multi-client platform",
      title: "Onboarding feeds the wider automation system.",
      body: "Each new client setup connects to the larger automation platform, including client records, booking intake, message routing, notifications, and operations workflows. This makes onboarding the starting point for a repeatable multi-client system.",
      items: [
        { label: "Client records", dot: "#9db4f5" },
        { label: "Booking intake", dot: "#8fe2c6" },
        { label: "Message routing", dot: "#c9aef2" },
        { label: "Notifications", dot: "#7cc4f7" },
        { label: "Operations workflows", dot: "#8fe2c6" },
        { label: "Service tiers", dot: "#9db4f5" },
      ],
    },

    demo: {
      intro: "Walkthrough video and screenshots can be added here once the demo assets are ready.",
      videoLabel: "Walkthrough video",
      videoHint: "[ add walkthrough video ]",
      slots: [
        { label: "Client setup form", accent: "mint", icon: icons.fileText },
        { label: "Generated client workspace", accent: "sky", icon: icons.folder },
        { label: "Workflow map", accent: "peri", icon: icons.workflow },
        { label: "Setup checklist", accent: "lilac", icon: icons.clipboardCheck },
        { label: "Notification preview", accent: "mint", icon: icons.bell },
      ],
    },

    tools: [
      { label: "n8n", accent: "peri" },
      { label: "Supabase", accent: "mint" },
      { label: "Google Drive", accent: "sky" },
      { label: "Google Sheets", accent: "mint" },
      { label: "Google Forms", accent: "lilac" },
      { label: "Google Calendar", accent: "peri" },
      { label: "Google Apps Script", accent: "sky" },
      { label: "Messenger", accent: "peri" },
      { label: "Telegram", accent: "lilac" },
      { label: "Webhooks", accent: "sky" },
    ],

    cta: {
      title: "Want client onboarding that does not start from scratch every time?",
      body: "Tell me how you bring new clients on today, and let us map a setup flow that keeps every client consistent and trackable.",
    },
  },

  /* ========================================================================
     3 — Project Peacock
     ===================================================================== */
  {
    slug: "project-peacock",
    title: "Project Peacock",
    category: "Content Automation",
    accent: "lilac",
    icon: icons.sparkles,
    statusLabel: "AI Content Workflow",

    cardDescription:
      "An AI-powered content transformation workflow where you send a file through WhatsApp with clear instructions on what you want it to become. The system analyzes the file, follows your requested direction, and turns it into a polished output such as a magazine-style document, enhanced presentation, or executive summary.",
    cardFlow: [
      { label: "WhatsApp", accent: "mint" },
      { label: "Transform", accent: "lilac" },
      { label: "Output", accent: "sky" },
    ],
    cats: ["content"],

    subtitle:
      "An AI-powered content transformation workflow that turns files and instructions into polished, ready-to-use outputs.",
    description:
      "Send a PDF, document, or file through WhatsApp, add a clear instruction, and the workflow prepares a refined output such as a magazine-style document, enhanced presentation, executive summary, or structured report.",
    tags: [
      { label: "File automation", accent: "mint" },
      { label: "WhatsApp intake", accent: "sky" },
      { label: "AI content workflow", accent: "peri" },
      { label: "Document processing", accent: "lilac" },
      { label: "Presentation enhancement", accent: "mint" },
      { label: "Human review", accent: "sky" },
      { label: "Output generation", accent: "lilac" },
    ],

    problem: {
      title: "Content requests often arrive messy and manual.",
      body: "Teams often receive files, notes, PDFs, screenshots, and vague instructions through chat. Turning those inputs into a polished presentation, report, summary, or branded document can take hours of manual rewriting, formatting, checking, and exporting.",
    },
    solution: {
      title: "One workflow turns raw files into usable outputs.",
      body: "Project Peacock collects the file and instruction, reviews the content, plans the output, improves the structure, prepares the design direction, and produces a cleaner final version for review or delivery.",
    },

    workflowTitle: "How the file transformation runs.",
    workflowIntro:
      "The workflow moves in one clear direction, from the moment a file arrives to the moment a polished output is ready to send.",
    workflow: [
      { n: 1, accent: "mint", icon: icons.file, title: "File received", desc: "The user sends a PDF, document, image, or file through WhatsApp with a clear instruction.", benefit: "Keeps the request and source file in one place." },
      { n: 2, accent: "sky", icon: icons.messageCheck, title: "Instruction checked", desc: "The workflow reads what the user wants the file to become.", benefit: "Reduces back-and-forth and gives the system a clear output goal." },
      { n: 3, accent: "peri", icon: icons.search, title: "Content analyzed", desc: "The system reviews the file structure, important details, and content quality.", benefit: "Finds what needs to be cleaned, summarized, redesigned, or reorganized." },
      { n: 4, accent: "lilac", icon: icons.clipboardCheck, title: "Output plan created", desc: "The workflow decides the best structure for the requested result.", benefit: "Turns scattered content into a clearer format before design starts." },
      { n: 5, accent: "sky", icon: icons.pen, title: "Content refined", desc: "The text is cleaned, rewritten, summarized, or expanded based on the instruction.", benefit: "Makes the output easier to read and more useful." },
      { n: 6, accent: "mint", icon: icons.layout, title: "Layout prepared", desc: "The system prepares the output layout, sections, visual hierarchy, and formatting direction.", benefit: "Helps the final result look more polished and presentation-ready." },
      { n: 7, accent: "lilac", icon: icons.shieldCheck, title: "Review checkpoint", desc: "The workflow can flag unclear instructions, missing details, or content that needs human review.", benefit: "Prevents low-quality or inaccurate output from being sent automatically." },
      { n: 8, accent: "peri", icon: icons.send, title: "Output delivered", desc: "The final file or preview is prepared and sent back through the delivery flow.", benefit: "Saves time and gives the user a usable output faster." },
    ],

    outputTypes: {
      eyebrow: "Output types",
      title: "Possible outputs from one file request.",
      intro: "Depending on the file and the instruction, the workflow can prepare a range of finished formats.",
      items: [
        { label: "Magazine-style document", accent: "peri", icon: icons.book },
        { label: "Enhanced presentation", accent: "sky", icon: icons.presentation },
        { label: "Executive summary", accent: "mint", icon: icons.fileText },
        { label: "Clean report", accent: "lilac", icon: icons.lineChart },
        { label: "Content brief", accent: "sky", icon: icons.textLines },
        { label: "Social media content draft", accent: "peri", icon: icons.columns },
        { label: "Client-ready document", accent: "mint", icon: icons.fileCheck },
        { label: "Visual content outline", accent: "lilac", icon: icons.image },
        { label: "Slide-by-slide structure", accent: "sky", icon: icons.slides },
        { label: "Rewritten and polished copy", accent: "peri", icon: icons.pen },
      ],
      caution: {
        text: "Outputs are prepared by automation and are not guaranteed to be perfect on every run. Sensitive, unclear, or high-stakes content should always be reviewed by a person before final use.",
      },
    },

    sampleRequest: {
      eyebrow: "Sample request",
      title: "Example WhatsApp instruction.",
      intro: "A simple message and a file are all it takes to start a transformation.",
      chat: {
        accent: "mint",
        headerStyle: "whatsapp",
        channel: "Project Peacock",
        channelSub: "WhatsApp intake",
        bubbles: [
          { from: "customer", text: "Please turn this PDF into a magazine-style document with a cleaner layout and more professional wording." },
        ],
        attachment: { name: "Company_Profile.pdf", size: "1.2 MB" },
      },
      statuses: [
        { label: "File received", state: "done" },
        { label: "Instruction detected", state: "done" },
        { label: "Content analysis running", state: "active" },
        { label: "Output draft preparing", state: "pending" },
      ],
    },

    resultPreview: {
      eyebrow: "Result preview",
      title: "From raw file to polished output.",
      intro: "The same content, reworked into something ready to share.",
      pipeline: [
        { label: "Analyze", dot: "#7cc4f7" },
        { label: "Rewrite", dot: "#9db4f5" },
        { label: "Structure", dot: "#c9aef2" },
        { label: "Design", dot: "#8fe2c6" },
        { label: "Review", dot: "#f0b450" },
        { label: "Export", dot: "#8fe2c6" },
      ],
    },

    humanReview: {
      intro:
        "Project Peacock can speed up the content transformation process, but final review still matters. Human review is useful when the source file has missing context, sensitive information, branding rules, or content that must be fact-checked.",
      automation: {
        title: "Automation handles",
        items: ["File intake", "Instruction reading", "Content analysis", "Copy cleanup", "Summary or rewrite draft", "Layout planning", "Output preparation", "Delivery preparation"],
      },
      human: {
        title: "Human handles",
        items: ["Final approval", "Brand judgment", "Sensitive content review", "Missing context", "Fact-checking", "Client-specific edits", "Final publishing decision"],
      },
    },

    demo: {
      intro: "Walkthrough video and screenshots can be added here once the demo assets are ready.",
      videoLabel: "Walkthrough video",
      videoHint: "[ add demo video ]",
      slots: [
        { label: "WhatsApp intake", accent: "mint", icon: icons.whatsapp },
        { label: "Original file sample", accent: "sky", icon: icons.file },
        { label: "Output preview", accent: "peri", icon: icons.book },
        { label: "Before and after comparison", accent: "lilac", icon: icons.compare },
        { label: "Final document export", accent: "mint", icon: icons.download },
      ],
    },

    tools: [
      { label: "WhatsApp", accent: "mint" },
      { label: "n8n", accent: "peri" },
      { label: "OpenAI", accent: "mint" },
      { label: "PDF processing", accent: "sky" },
      { label: "Document rendering", accent: "lilac" },
      { label: "Puppeteer", accent: "peri" },
      { label: "Supabase", accent: "mint" },
      { label: "Webhooks", accent: "sky" },
      { label: "Google Drive", accent: "lilac" },
      { label: "File export", accent: "peri" },
    ],

    cta: {
      title: "Want to turn messy files into polished outputs on demand?",
      body: "Tell me what kinds of files and outputs your team handles, and let us map a transformation flow that fits the way you already work.",
    },
  },

  /* ========================================================================
     4 — Project Chameleon
     ===================================================================== */
  {
    slug: "project-chameleon",
    title: "Project Chameleon",
    category: "Multi-industry n8n",
    accent: "sky",
    icon: icons.refresh,
    completed: true,
    statusLabel: "Completed Workflow",

    cardDescription:
      "A multi-industry n8n workflow inspired by the catering platform, designed to adapt onboarding, routing, and process handling across different business types.",
    cardFlow: [
      { label: "Intake", accent: "mint" },
      { label: "Route", accent: "peri" },
      { label: "Onboard", accent: "sky" },
    ],
    cats: ["n8n", "onboarding", "multi-industry"],

    subtitle:
      "A flexible multi-client automation workflow that adapts to different industries, business rules, and customer inquiry flows.",
    tags: [
      { label: "Multi-client workflow", accent: "peri" },
      { label: "Industry-adaptable", accent: "lilac" },
      { label: "Customer inquiry automation", accent: "sky" },
      { label: "Saved responses", accent: "mint" },
      { label: "Lead qualification", accent: "peri" },
      { label: "Human handoff", accent: "sky" },
      { label: "Workflow logic", accent: "lilac" },
    ],

    problem: {
      title: "Different businesses need different customer flows.",
      body: "A catering business, clinic, salon, repair service, rental company, and consulting business do not ask customers the same questions. Each one has different services, policies, booking steps, customer details, and handoff rules. When automations are built from scratch every time, setup becomes slower and harder to maintain.",
    },
    solution: {
      title: "One workflow adapts to the client's business rules.",
      body: "Project Chameleon uses a reusable workflow structure that changes based on the client and industry. It can load the right business details, ask the right intake questions, use saved responses, collect customer information, and send the conversation to a human when the request is ready or sensitive.",
    },

    workflowTitle: "How the adaptive workflow runs.",
    workflowIntro:
      "The workflow moves in one clear direction, from the first customer message to a recorded inquiry routed to the right next action.",
    workflow: [
      { n: 1, accent: "mint", icon: icons.messageSquare, title: "Customer inquiry received", desc: "A customer sends a message through the connected channel.", benefit: "Starts the workflow from the actual customer request." },
      { n: 2, accent: "sky", icon: icons.userCheck, title: "Client profile detected", desc: "The workflow identifies which client the message belongs to.", benefit: "Keeps each client's conversations, rules, and records separated." },
      { n: 3, accent: "peri", icon: icons.sliders, title: "Industry rules loaded", desc: "The workflow loads the client's business type, services, FAQs, and intake rules.", benefit: "Allows one system to work across different industries." },
      { n: 4, accent: "lilac", icon: icons.filter, title: "Inquiry type checked", desc: "The message is checked to understand whether it is a common question, booking request, support concern, or special inquiry.", benefit: "Routes the conversation correctly from the beginning." },
      { n: 5, accent: "sky", icon: icons.messageHelp, title: "Saved response or guided intake", desc: "The workflow answers common questions or asks one relevant follow-up question at a time.", benefit: "Keeps conversations clear and avoids overwhelming the customer." },
      { n: 6, accent: "mint", icon: icons.clipboard, title: "Lead details collected", desc: "The workflow collects the details needed for that client's service.", benefit: "Turns inquiries into organized leads or booking requests." },
      { n: 7, accent: "lilac", icon: icons.gitBranch, title: "Handoff decision", desc: "The workflow checks if the request should continue automatically or be sent to a human.", benefit: "Keeps sensitive, qualified, or high-value requests from being mishandled." },
      { n: 8, accent: "peri", icon: icons.save, title: "Record and notify", desc: "The customer details, inquiry status, and next action are saved and sent to the right team.", benefit: "Keeps follow-ups trackable and easier to manage." },
    ],

    industries: {
      eyebrow: "Industry adaptation",
      title: "Built to adapt to different business types.",
      intro: "The same workflow can be configured for many kinds of service businesses. These are example use cases, not real clients.",
      items: [
        { label: "Catering and events", accent: "mint", icon: icons.chefHat },
        { label: "Clinics and appointment services", accent: "sky", icon: icons.plusSquare },
        { label: "Salons and beauty services", accent: "lilac", icon: icons.scissors },
        { label: "Repair and maintenance services", accent: "peri", icon: icons.wrench },
        { label: "Rental businesses", accent: "mint", icon: icons.ticket },
        { label: "Coaching or consulting services", accent: "lilac", icon: icons.lightbulb },
        { label: "Local service providers", accent: "sky", icon: icons.mapPin },
        { label: "Operations teams", accent: "peri", icon: icons.grid },
      ],
    },

    configurables: {
      eyebrow: "Configurable parts",
      title: "Each client can have its own workflow rules.",
      intro: "These settings shape how the workflow behaves for a given client, without rebuilding it from scratch.",
      items: [
        { label: "Business profile", accent: "mint" },
        { label: "Service list", accent: "sky" },
        { label: "FAQs", accent: "peri" },
        { label: "Policies", accent: "lilac" },
        { label: "Intake questions", accent: "sky" },
        { label: "Booking rules", accent: "mint" },
        { label: "Lead qualification rules", accent: "lilac" },
        { label: "Human handoff rules", accent: "peri" },
        { label: "Notification routing", accent: "sky" },
        { label: "Support status labels", accent: "mint" },
        { label: "Follow-up steps", accent: "lilac" },
        { label: "Tier-based features", accent: "peri" },
      ],
    },

    sampleConversations: {
      eyebrow: "Sample conversations",
      title: "One workflow, different business logic.",
      intro: "The same assistant adjusts its replies to the client's services and rules.",
      cards: [
        {
          tag: "Common inquiry",
          accent: "sky",
          bubbles: [
            { from: "customer", text: "Do you offer packages for small events?" },
            { from: "system", text: "Yes. We can help with small event packages. What date are you planning for?" },
          ],
        },
        {
          tag: "Service inquiry",
          accent: "mint",
          bubbles: [
            { from: "customer", text: "Do you offer home service appointments?" },
            { from: "system", text: "Yes. What service do you need help with?" },
          ],
        },
        {
          tag: "Human handoff",
          accent: "lilac",
          bubbles: [
            { from: "customer", text: "I'm ready to book. Can someone confirm my request?" },
            { from: "system", text: "I can help route this to the team. What is the best contact number for confirmation?" },
          ],
        },
      ],
    },

    behaviors: [
      "Asks one question at a time",
      "Never invents prices or availability",
      "Uses saved client information",
      "Hands off when ready or sensitive",
    ],

    humanReview: {
      intro:
        "The workflow handles the repeatable flow, but people stay in charge of judgment calls. Sensitive, high-value, or unusual requests are routed to a person before anything is finalized.",
      automation: {
        title: "Automation handles",
        items: ["Common inquiries", "Saved responses", "Basic intake questions", "Lead details", "Routing logic", "Status tracking", "Team notifications"],
      },
      human: {
        title: "Human handles",
        items: ["Final booking confirmation", "Special requests", "Sensitive customer concerns", "Pricing exceptions", "Policy exceptions", "Manual approval", "Relationship-based follow-up"],
      },
    },

    demo: {
      intro: "Walkthrough video and screenshots can be added here once the demo assets are ready.",
      videoLabel: "Walkthrough video",
      videoHint: "[ add demo video ]",
      slots: [
        { label: "Sample client profile", accent: "mint", icon: icons.user2 },
        { label: "Industry rules preview", accent: "sky", icon: icons.sliders },
        { label: "Chat sample", accent: "peri", icon: icons.messageSquare },
        { label: "Lead record preview", accent: "lilac", icon: icons.clipboard },
        { label: "Handoff notification", accent: "mint", icon: icons.bell },
      ],
    },

    tools: [
      { label: "n8n", accent: "peri" },
      { label: "Supabase", accent: "mint" },
      { label: "Google Sheets", accent: "sky" },
      { label: "Messenger", accent: "peri" },
      { label: "Telegram", accent: "lilac" },
      { label: "OpenAI", accent: "mint" },
      { label: "Webhooks", accent: "sky" },
      { label: "Google Drive", accent: "lilac" },
      { label: "Apps Script", accent: "peri" },
    ],

    cta: {
      title: "Want one automation that adapts to every client you take on?",
      body: "Tell me the industries and inquiry types you handle, and let us map a workflow that reuses the same structure across every client.",
    },
  },
];

/** Lookup + ordering helpers used by pages. */
export const projectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const projectSlugs = projects.map((p) => p.slug);
