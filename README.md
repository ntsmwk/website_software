# Weißenbek Software Website

Personal business site for Weißenbek Software e.U. — a bilingual (DE/EN)
CV, project portfolio, and technology showcase. Deployed at
[weissenbek.at](https://weissenbek.at).

## Development

```bash
pnpm install
pnpm dev
```

```bash
pnpm build    # static build to dist/
pnpm preview  # serve the production build locally
```

## Tech stack

- [Astro](https://astro.build) (static output)
- [Tailwind CSS](https://tailwindcss.com/) + [daisyUI](https://daisyui.com/)
  — two custom themes (`dark` default, `light`) defined in
  `tailwind.config.cjs`, no stock daisyUI themes
- Self-hosted variable fonts ([Inter](https://fontsource.org/fonts/inter),
  [JetBrains Mono](https://fontsource.org/fonts/jetbrains-mono)) via
  `@fontsource-variable/*`

## Content

Projects and technologies are **not** hardcoded into pages — they live in
typed data files:

- `src/data/projects.ts` — projects (optional `outcome` and `highlights` per project, shown on the detail page)
- `src/data/technologies.ts` — technology categories and the home-page core list
- `src/data/home.ts` — home page copy: hero, section labels, about, contact
- `src/data/services.ts` — the three service columns on the home page
- `src/data/clients.ts` — client logo row on the home page (linked via `projectId`)
- `src/data/cv.ts` — CV page: summary, experience, education, skills
- `src/data/legal.ts` — Impressum and Datenschutzerklärung sections, both languages

Each text field is a `{ de: string, en: string }` pair. To add or edit a
project or technology, edit these files; the Home, Projects, and
Technologies pages (in both languages) render from them automatically.

Chrome/UI strings (nav labels, section headings, footer) live in
`src/i18n/ui.ts`.

## Bilingual routing (DE/EN)

Uses Astro's native `i18n` config (see `astro.config.mjs`): German is the
default locale served at the root (`/`, `/projects`, ...), English is
served under `/en/` (`/en`, `/en/projects`, ...).

Each English route (`src/pages/en/*.astro`) is a thin re-export of its
German counterpart — the underlying page component reads
`Astro.currentLocale` itself (via `src/lib/i18n.ts`) and picks the right
language, so there's no duplicated markup to keep in sync.

The Impressum and Datenschutzerklärung exist in both languages; their copy
lives in `src/data/legal.ts` (German authoritative, English a convenience
translation with a note saying so), rendered by `LegalPage.astro`.

## Theming

One daisyUI theme, `light`, defined in `tailwind.config.cjs` (warm off-white
ground, ink text, teal accent). `<html data-theme="light">` is set statically
in `BaseLayout.astro`; there is no dark mode and no toggle. Headings use
Fraunces (serif), body Inter, stacks and tags JetBrains Mono, all self-hosted
via `@fontsource-variable/*` imports in `src/styles/global.css`.

## Project structure

```
src/
├── pages/                  # index, projects, technologies, cv, imprint, privacy, 404
│   ├── projects/[id].astro # one detail page per project (paths from src/lib/projectPaths.ts)
│   └── en/                 # thin re-exports for the English routes (incl. en/projects/[id].astro)
├── layouts/
│   └── BaseLayout.astro    # TopNav / main / Footer
├── components/
│   ├── HorizontalCard.astro, RoundIcon.astro, ProjectDetail.astro
│   ├── Logo.astro, LanguageToggle.astro
│   └── TopNav.astro, Footer.astro, BaseHead.astro, LegalPage.astro
├── data/
│   ├── projects.ts, technologies.ts   # bilingual content
├── i18n/
│   └── ui.ts                # chrome-string dictionary
├── lib/
│   └── i18n.ts               # locale helpers
├── styles/
│   └── global.css
└── config.ts                 # SITE_TITLE, SITE_DESCRIPTION, feature flags
```

## Deploy

Static site — `pnpm build` outputs to `dist/`, deployable to any static
host. `astro.config.mjs`'s `site` is set to `https://weissenbek.at`, used
for the generated sitemap and canonical/OG URLs.

**Pushing to this repo's remote triggers an automatic production
deploy** — treat `git push` on the deployed branch accordingly.

---

Originally based on the [Astrofy](https://github.com/manuelernestog/astrofy)
template; since substantially rewritten (custom theme, bilingual routing,
data-driven content, unused Blog/Store/Services scaffolding removed).
