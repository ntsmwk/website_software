import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://weissenbek.at',
  prefetch: true,
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap(), tailwind({ applyBaseStyles: false })],
  // never inline fonts as data: URIs; the CSP's font-src 'self' would block them
  vite: { build: { assetsInlineLimit: 0 } },
});