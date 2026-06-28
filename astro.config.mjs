// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Production site URL. Used for canonical URLs, the sitemap, robots.txt, and
 * absolute OG/Twitter image URLs. Resolution order:
 *
 *   1. PUBLIC_SITE_URL / SITE_URL  — set this in your deploy environment
 *      (e.g. Vercel project settings) to your real domain.
 *   2. VERCEL_PROJECT_PRODUCTION_URL — Vercel injects this at build time, so a
 *      production deploy gets the correct .vercel.app URL automatically even
 *      before a custom domain is added.
 *   3. http://localhost:4321 — local dev/build fallback only. This must never
 *      be the canonical host of a real deployment.
 *
 * See README ("Environment variables" and "Deployment").
 */
const SITE_URL =
  process.env.PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined) ||
  'http://localhost:4321';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
