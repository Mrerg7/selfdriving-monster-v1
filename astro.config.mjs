// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Pure static output — no adapter.
// Deploy with Workers Static Assets (assets-only) via wrangler.toml.
export default defineConfig({
  site: 'https://selfdriving.monster',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Cloudflare Images CDN handles optimization at the edge
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
      },
    ],
  },
});
