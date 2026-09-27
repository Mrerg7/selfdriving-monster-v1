# selfdriving.monster

Static Astro site for [selfdriving.monster](https://selfdriving.monster) — pro-Tesla guide to Full Self-Driving, Cybercab, and autonomy timelines. Deployed on **Cloudflare Workers Static Assets** with a thin Worker for canonical host redirects + security headers.

## Stack

- Astro 7 (`output: 'static'`)
- Tailwind CSS 4 + TypeScript
- Content Collections (FAQ, timeline, stats)
- Cloudflare Images CDN for hero / OG
- `@astrojs/sitemap` + `robots.txt` + `llms.txt`
- Open Graph + JSON-LD (WebSite, FAQ, Article, Product/Offer for domain sale)
- Acquisition CTA → `sales@desertrich.com`

## Pages

| Path | Purpose |
|------|---------|
| `/` | Landing — SAE levels, Tesla FSD/Cybercab, industrial autonomy, timeline, FAQ |
| `/tesla-fsd/` | FSD deep dive (SEO) |
| `/cybercab/` | Cybercab specs & status (SEO) |
| `/why-tesla/` | Pro-Tesla autonomy thesis (SEO) |
| `/domain/` | Domain acquisition / conversion |

## Develop

```bash
npm install
npm run dev -- --port 4321 --host 127.0.0.1
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

Pushing to `main` on GitHub triggers **Cloudflare Workers Builds** for `selfdriving-monster-v1`.

## Domain acquisition

CTAs and `/domain/` point to:

`mailto:sales@desertrich.com`
