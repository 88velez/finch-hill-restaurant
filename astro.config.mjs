import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

// Update `site` to your production URL before deploying — required for sitemap & RSS.
export default defineConfig({
  site: "https://finchhillrestaurant.com",
  // "server" = every route is on-demand (SSR) by default. The admin panel and
  // API routes need this.
  output: "server",
  adapter: vercel(),
  integrations: [sitemap()],
  compressHTML: true,
});
