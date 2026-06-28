# Cristen Joy Dimaguila — AI Automation Portfolio

A clean, responsive, deployable portfolio for **Cristen Joy Dimaguila, AI Automation Specialist**, built with [Astro](https://astro.build/) + TypeScript. The homepage is a single, scroll-driven client conversion page (hero → pain points → introduction → tools → capabilities → featured systems → discovery process → discovery call → contact) with a light/dark theme and a Calendly-powered booking section. Standalone project case-study routes (`/projects/<slug>`) are kept for deep dives.

## Quick start

```bash
npm install      # install dependencies
npm run dev      # local dev server → http://localhost:4321
npm run build    # production build → ./dist
npm run preview  # preview the production build
npm run check    # TypeScript / Astro diagnostics
```

Requires Node 18+ (built and tested on Node 24).

## Project structure

```
src/
  data/            ← ALL editable content lives here (no copy in components)
    site.ts        brand, nav, footer, contact links, Calendly + form config, SEO
    home.ts        homepage: hero, pain points, intro, tools, capabilities,
                   featured systems, discovery process, discovery call, contact
    projects.ts    the 4 case studies (titles, workflow steps, tools, tags, demos…)
    systems.ts     Automation Systems listing: hero + filter definitions
    services.ts    service cards (About page)
    about.ts       About page narrative, principles, focus areas
    contact.ts     Contact page copy + form field schema
  lib/
    types.ts       content type definitions (shapes for the data above)
    icons.ts       named Lucide-style icon registry (referenced by data)
  components/       reusable, presentational components
  layouts/          BaseLayout (shell, SEO, nav/footer, scroll-reveal observer)
  pages/
    index.astro                 Home
    automation-systems.astro    Listing / Demo Lab (filterable)
    about.astro                 About
    contact.astro               Contact (with form)
    projects/[slug].astro       dynamic project pages (one per entry in projects.ts)
    404.astro
  styles/global.css  design tokens (colors, type, spacing, motion) + utility classes
public/              favicon, OG image (static assets)
```

## Editing content (no layout changes needed)

Everything the brief calls "editable" is plain data in `src/data/`:

- **Project titles, subtitles, tags, problem/solution copy, workflow steps, tools, demo placeholders, video links** → `src/data/projects.ts`
- **Service cards** → `src/data/services.ts`
- **Contact fields & details** → `src/data/contact.ts`
- **Homepage copy** → `src/data/home.ts`
- **SEO metadata** → per-page `title`/`description` props + defaults in `src/data/site.ts`

### Add a new project
Append an object to the `projects` array in `src/data/projects.ts` (TypeScript will tell you which fields are required). A page at `/projects/<slug>` is generated automatically, and it appears in the listing. Add its category to a filter in `src/data/systems.ts` if needed.

### Add a real demo video
In a project's `demo` block, set `videoUrl: "https://…"` (e.g. a YouTube/Vimeo embed URL). The dashed placeholder is replaced by the embedded player automatically.

### Swap the hero portrait
Drop an image at `public/portrait.jpg` (`.jpeg`, `.png`, and `.webp` are also auto-detected). The homepage picks it up automatically; with no image, a monogram avatar renders instead.

## Discovery call & Calendly

The Discovery Call section (`#discovery-call`) is built entirely around the **Calendly** scheduler. There is **no separate website form** — the pre-call questionnaire lives **inside Calendly** as Invitee Questions, so a visitor picks a time and then answers the questions right on the Calendly booking screen. All wiring is editable in `src/data/site.ts`.

### 1. Where to edit the Calendly link
The booking link lives in **`src/data/site.ts`** in the `calendly` config (this is the only place to change it):

```ts
export const calendly = {
  discoveryCallEnabled: true,                              // master switch for the section
  calendlyUrl: "https://calendly.com/cristen-automation/discovery-meeting", // ← your event link
  calendlyRoutingFormUrl: "",                              // optional, see step 3
  calendlyEmbedMode: "inline",                             // "inline" embed or "popup" button
};
```

**To replace the event link:** in Calendly go to **Event Types → your event → Share → Copy Link**, then paste that URL into `calendlyUrl`. That is the whole change — the inline scheduler updates automatically.

> Note: the embed shows exactly what Calendly returns for that URL. If Calendly says *"This Calendly URL is not valid,"* the event at that link is not published yet (or the slug differs) — publish/check the event in your Calendly account so the link resolves. Until a real URL is set (placeholder contains `your-handle`), a polished placeholder renders instead — no fake booking is ever shown.

> Current status (verified): `https://calendly.com/cristen-automation/discovery-meeting` loads a real scheduler and is the configured URL. `https://calendly.com/cristen-automation/30min` does **not** exist on the account yet, so do not switch to it until you create that event in Calendly first.

**Inline embed vs. fallback link:** `calendlyEmbedMode: "inline"` embeds the scheduler in the page (lazy-loaded as the section nears the viewport) and always shows an **Open Calendly** link beneath it as a fallback. Set `calendlyEmbedMode: "popup"` to instead render a button that opens Calendly in a popup. If you ever want to drop the embed entirely and rely only on the link, switch to `"popup"` (the button + fallback link remain).

### 2. Add the questionnaire as Calendly Invitee Questions (this is the questionnaire)
So the questions appear **after the visitor picks a time** (and stay part of the booking), add them to your event in Calendly: **Event Types → your event → Invitee Questions → Add New Question**. Recreate each question below, matching its type. The canonical, editable copy lives in `src/data/home.ts` under `discoveryCall.questionGroups`.

| Type in Calendly | Use for |
| --- | --- |
| Radio Buttons / Dropdown | single-choice questions (`type: "single"`) |
| Checkboxes | multi-choice questions (`type: "multi"`) |
| Multiple Lines | the long-text question (`type: "longtext"`) |

The questions (grouped):

- **Business context** — What best describes your business? (single) · What is your biggest challenge right now? (single)
- **Current process** — What is your current process or tool setup? (single) · Which tools are currently involved? (multi) · Where does the process usually start? (single) · Where should the information go? (multi) · Do you already have examples or files I can review? (multi)
- **Automation goal** — What do you want your automation to do? (multi)
- **Budget and timeline** — What is your budget range? (single, from $2,000) · What is your preferred timeline? (single) · Anything else I should know before the call? (long text)

Calendly's name and email fields are already part of the booking screen, so the questionnaire does not need to repeat them.

### 3. (Optional) Calendly Routing Form instead of a single event
If you prefer to qualify visitors with a few questions **before** showing times, build a **Routing Form** in Calendly (using the same questions above) and paste its share URL into `calendlyRoutingFormUrl`. When set, it becomes the **preferred** booking flow that the section embeds.

## Certifications (from Google Drive)

The **Certifications** section (`#certifications`) renders certificate images as custom, portfolio-styled cards. No Google Drive UI (folder iframe, toolbar, or sign-in box) is ever shown to visitors. When you upload a new image to the Drive folder it appears automatically, and each card's title is derived from the file name. Config lives in `src/data/site.ts` under `certifications`.

**Step 1 — where the folder is configured.** In `src/data/site.ts`, `certifications.driveFolderId` holds the folder ID and `driveFolderUrl` the folder link. Replace both to use a different folder.

**Step 2 — make the folder public (required).** In Google Drive: open the folder → **Share** → set **General access** to **"Anyone with the link" → Viewer**. Anonymous visitors can only see the certificates if the folder is shared this way.

**Step 3 — add a restricted Drive API key.** The browser lists the folder via the Google Drive API. Create a key in Google Cloud, then **restrict it** (this is what keeps it safe to ship):
- **API restriction:** allow only the **Google Drive API**.
- **Application restriction:** **HTTP referrers** = your production domain plus `http://localhost:4321/*` for local dev.

Put it in a `.env` file at the project root (gitignored):

```bash
PUBLIC_GOOGLE_DRIVE_API_KEY=your_restricted_drive_api_key
```

This key is **public by design** (like a Google Maps browser key); the referrer + API restrictions are what protect it. Do not put any private/secret key here. Without a key, the section shows a polished **"Certification gallery is being connected."** state and is ready to populate the moment the key is added.

**How titles are generated.** Each card title comes from the file name with the extension removed and underscores/hyphens turned into spaces. Example: `n8n_foundations_certificate.png` → **n8n foundations certificate**.

**How to add a certificate.** Upload a `.png`, `.jpg`/`.jpeg`, or `.webp` (PDFs are shown as document cards) to the Drive folder. It appears in the gallery automatically. Clicking a card opens a larger preview in an accessible modal (Escape or the close button dismisses it) — visitors never need to open Google Drive.

## Project demo videos

Each Featured Automation System card has an in-card **demo video area**. To add a video, edit that system's `demoVideoUrl` in `src/data/home.ts` (under `featured.systems`):

```ts
demoVideoUrl: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
```

- **Supported sources:** YouTube, Vimeo, Loom (paste the normal share/watch link — it is converted to an embed automatically), or a **direct video file** (`.mp4`, `.webm`, `.ogg`, `.mov`).
- **Lazy-loaded:** the player is only created when a visitor clicks the play facade or the **Watch Demo** button, so nothing heavy loads up front.
- **No video yet?** Leave `demoVideoUrl` empty (`""`). The card shows a polished **"Demo coming soon"** placeholder (never a broken embed), and the footer shows a "Demo coming soon" label instead of the Watch Demo button.

## Contact form (standalone /contact page)

The separate `/contact` page has a simple inquiry form that posts to `formEndpoint` in `src/data/site.ts`. Create a free form at [Formspree](https://formspree.io) (or any POST endpoint) and paste it in. Until configured, the form falls back to opening the visitor's email client (mailto to the address in `site.email`), so it never breaks. The homepage Discovery Call section does **not** use this form — it uses Calendly only.

## Social / profile links

LinkedIn and GitHub links in the footer, contact band, and `/contact` page are controlled by the `social` object in `src/data/site.ts`:

```ts
export const social = {
  linkedin: "", // e.g. "https://www.linkedin.com/in/your-handle"
  github: "",   // e.g. "https://github.com/your-username"
};
```

Leave a value empty (`""`) to hide that link everywhere. Generic homepages (e.g. `https://www.linkedin.com/`) are intentionally never shown to visitors — set a real, complete profile URL to surface the link. Email and the discovery-call CTA are always shown.

## Open Graph / social preview image

`public/og-default.png` (1200×630) is the social share image, referenced by `seoDefaults.ogImage` in `src/data/site.ts`. It is generated from `public/og-default.svg`. To regenerate after editing the SVG:

```bash
node -e "const s=require('sharp'),f=require('fs');s(f.readFileSync('public/og-default.svg'),{density:200}).resize(1200,630).png().toFile('public/og-default.png').then(()=>console.log('done'))"
```

## Theme (light / dark)

A theme toggle lives in the navigation. The initial theme follows the OS preference on first visit, is remembered in `localStorage`, and is applied before paint (inline script in `BaseHead.astro`) to avoid a flash of the wrong theme. Colors are CSS variables in `src/styles/global.css`; the dark palette lives under `:root[data-theme="dark"]`.

## Deployment

Static output (no SSR adapter needed) — build command `npm run build`, output dir `dist`.

### Production site URL (environment-based)

The site URL drives canonical links, the sitemap, `robots.txt`, and absolute OG/Twitter image URLs. It is no longer hardcoded. `astro.config.mjs` resolves it from, in order:

1. `PUBLIC_SITE_URL` (or `SITE_URL`) — set this to your real domain in production.
2. `VERCEL_PROJECT_PRODUCTION_URL` — Vercel injects this at build time, so a production deploy gets the correct `.vercel.app` URL automatically even before a custom domain exists.
3. `http://localhost:4321` — local dev/build fallback only.

Copy `.env.example` to `.env` for local overrides (`.env` is gitignored).

### Vercel (preferred)

1. Import the project; Vercel auto-detects Astro (build `npm run build`, output `dist`).
2. Optionally set `PUBLIC_SITE_URL` to your custom domain. If omitted, the `.vercel.app` production URL is used automatically.
3. Set `PUBLIC_GOOGLE_DRIVE_API_KEY` only when you're ready to enable certifications.
4. Deploy a Preview first, verify the URL, then promote to Production.

### Cloudflare Pages (alternative)

- Framework preset: Astro · Build command: `npm run build` · Output directory: `dist`
- Environment variables: `PUBLIC_SITE_URL` (your domain) and optionally `PUBLIC_GOOGLE_DRIVE_API_KEY`.

`robots.txt` is generated at `src/pages/robots.txt.ts` and automatically points at the sitemap using the resolved site URL, so it stays correct in every environment.

## Design system

Tokens (colors, typography, spacing, radii, shadows, motion) are centralized in `src/styles/global.css`. The four accent families — **peri / sky / lilac / mint** — are applied with `accent-*` helper classes. Animations (scroll reveal, node pulse, connector draw, spark sweep) all respect `prefers-reduced-motion`.

## Notes

- `_imported_export/` holds the original design-handoff reference files. It is **not** part of the build (excluded in `tsconfig.json`) and can be deleted once you're happy with the site.
- The reference export also contained two out-of-scope projects (Project Eagle, Project Lion); per the brief, only the four in-scope workflows are included.
