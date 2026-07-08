# selfdriving.monster

Static Astro site for [selfdriving.monster](https://selfdriving.monster) — data-backed guide to autonomous vehicles, deployed on **Cloudflare Workers Static Assets** (assets-only, no Worker script / no adapter).

## Stack

- Astro 7 (`output: 'static'`) — no `@astrojs/cloudflare` adapter
- Tailwind CSS 4 + TypeScript
- Content Collections (FAQ, timeline, stats)
- Cloudflare Images CDN for hero / OG
- `@astrojs/sitemap` + `public/robots.txt`
- Full Open Graph + JSON-LD structured data
- Acquisition CTA → `sales@desertrich.com`

## Develop

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build
npx wrangler deploy
```

Or:

```bash
npm run deploy
```

`wrangler.toml` points `[assets].directory` at `./dist` with no `main` Worker entry — pure static hosting on the global edge.

## Domain acquisition

Footer CTA and nav point to:

`mailto:sales@desertrich.com`
