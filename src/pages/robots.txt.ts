import type { APIRoute } from "astro";

/**
 * robots.txt — allows all indexing and points crawlers to the sitemap.
 * The sitemap URL is derived from the configured `site` (astro.config.mjs), so
 * it always matches the real production domain in any environment.
 */
export const GET: APIRoute = ({ site }) => {
  const sitemap = site ? new URL("sitemap-index.xml", site).href : "/sitemap-index.xml";
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
