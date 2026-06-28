/**
 * Shared content types. Components consume these; all real copy lives in
 * the files under `src/data/`. Keeping the shapes here means the editable
 * data files get full type-checking and autocomplete.
 */

/** The four approved accent families. */
export type Accent = "peri" | "sky" | "lilac" | "mint";

/** An icon is a list of SVG path `d` attributes (Lucide-style, 24x24 grid). */
export type IconPaths = readonly string[];

export interface Tag {
  label: string;
  accent: Accent;
}

/** A node in a compact left-to-right workflow strip (listing cards / hero). */
export interface FlowNode {
  label: string;
  accent: Accent;
}

/** One step in the signature single-rail workflow pipeline. */
export interface WorkflowStep {
  /** 1-based step number; rendered as "Step 01". */
  n: number;
  title: string;
  desc: string;
  /** Mint "business value" benefit pill text. */
  benefit: string;
  accent: Accent;
  icon: IconPaths;
}

export interface IconCard {
  label: string;
  accent: Accent;
  icon: IconPaths;
}

export interface AccentCard {
  label: string;
  accent: Accent;
}

/** Two-column "automation vs human" split. */
export interface HumanReview {
  intro: string;
  automation: { title: string; items: string[] };
  human: { title: string; items: string[] };
}

/** Demo-media section: one hero video slot + a grid of smaller slots. */
export interface DemoMedia {
  intro: string;
  /** Optional real video embed URL; when omitted a placeholder renders. */
  videoUrl?: string;
  videoLabel: string;
  videoHint: string;
  slots: IconCard[];
}

/** A single chat-style sample card. */
export interface ChatSample {
  tag?: string;
  accent: Accent;
  /** Header label, e.g. "Facebook Messenger". */
  channel?: string;
  channelSub?: string;
  /** Header/bubble theme. "whatsapp" → green; default → neutral/messenger. */
  headerStyle?: "whatsapp" | "default";
  /** Ordered bubbles; `from` controls alignment + styling. */
  bubbles: { from: "customer" | "system"; text: string }[];
  /** Optional file attachment chip (shown as an outgoing bubble). */
  attachment?: { name: string; size: string };
  /** Optional footer status note (e.g. "Routed to human support"). */
  note?: string;
  /** Accent for the footer note pill (defaults to the card accent). */
  noteAccent?: Accent;
}

/** Dark "connected platform" feature panel. */
export interface ConnectedPlatform {
  eyebrow: string;
  title: string;
  body: string;
  items: { label: string; dot: string }[];
}

/** Caution callout (amber). */
export interface Caution {
  text: string;
}

export interface Project {
  /** URL slug → /projects/<slug> */
  slug: string;
  title: string;
  /** Short type label, e.g. "AI Chatbot". */
  category: string;
  accent: Accent;
  icon: IconPaths;
  featured?: boolean;
  completed?: boolean;
  /** Pill text shown next to the hero icon, e.g. "Featured System". */
  statusLabel: string;

  /** Listing-card copy + filter wiring. */
  cardDescription: string;
  cardFlow: FlowNode[];
  cats: string[];

  /** Hero. */
  subtitle: string;
  /** Optional secondary supporting paragraph under the subtitle. */
  description?: string;
  tags: Tag[];

  /** Problem / solution pair. */
  problem: { title: string; body: string };
  solution: { title: string; body: string };

  /** Signature workflow. */
  workflowTitle: string;
  workflowIntro: string;
  workflow: WorkflowStep[];

  humanReview: HumanReview;
  demo: DemoMedia;
  tools: Tag[];
  /** Optional note under the tools list. */
  toolsNote?: string;

  cta: { title: string; body: string };

  /* ---- Optional, page-specific sections (rendered when present) ---- */

  /** Chatbot + Chameleon style chat samples. */
  sampleConversations?: { eyebrow: string; title: string; intro: string; cards: ChatSample[] };
  /** Chameleon "how the assistant behaves" chip row. */
  behaviors?: string[];
  /** Chatbot "expected outcome" list. */
  outcomes?: { title: string; items: string[] };

  /** Onboarding "what it can prepare" grid. */
  prepare?: { eyebrow: string; title: string; intro: string; items: AccentCard[] };
  /** Onboarding recovery section. */
  recovery?: { eyebrow: string; title: string; body: string; items: string[] };

  /** Peacock "output types" grid + caution. */
  outputTypes?: { eyebrow: string; title: string; intro: string; items: IconCard[]; caution: Caution };
  /** Peacock sample request (chat + system status). */
  sampleRequest?: {
    eyebrow: string;
    title: string;
    intro: string;
    chat: ChatSample;
    statuses: { label: string; state: "done" | "active" | "pending" }[];
  };
  /** Peacock result preview (raw → pipeline → output). */
  resultPreview?: { eyebrow: string; title: string; intro: string; pipeline: { label: string; dot: string }[] };

  /** Chameleon industry-adaptation grid. */
  industries?: { eyebrow: string; title: string; intro: string; items: IconCard[] };
  /** Chameleon configurable-parts chips. */
  configurables?: { eyebrow: string; title: string; intro: string; items: AccentCard[] };

  /** Shared dark "connected platform" panel. */
  connectedPlatform?: ConnectedPlatform;
}

export interface Service {
  title: string;
  body: string;
  accent: Accent;
  icon: IconPaths;
  points: string[];
}
