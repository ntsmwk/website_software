# Redesign handoff

Status as of 2026-07-17. Everything below is on the local `redesign`
branch, **not merged to `master` and not pushed** — pushing to this
repo's remote triggers an automatic production deploy, so don't push
without asking first.

## Where things stand

5 of 6 planned phases are done and verified (built, and driven headless
in a real browser across both themes/both languages/mobile — not just
"it builds"). Commits, oldest first:

1. `f9c0e78` — Design system: two custom daisyUI themes (`dark` default,
   `light`) replacing the stock `lofi` theme, cyan/magenta accent, sharp
   edges, self-hosted Inter/JetBrains Mono, persisted FOUC-safe toggle.
2. `f544d53` — Content moved out of hardcoded markup into
   `src/data/projects.ts` / `src/data/technologies.ts`, each field
   shaped `{ de, en }`.
3. `6cf8fcb` — Removed the unused Blog/Store/Services template
   scaffolding (was never finished or linked in nav), fixed the wrong
   `site` URL in `astro.config.mjs`, fixed a bug where project tags
   linked to broken URLs.
4. `52c0f88` — Bilingual routing: Astro's native `i18n` config, German
   at root, English under `/en/` (real crawlable URLs + hreflang, not a
   client-side text swap). Bumped Astro 4.0.2 → 4.16.19 for this.
5. `6ed3acb` — Housekeeping: profile photo 7.1MB → 270KB, added the
   missing default OG/share image, fixed a broken alt-text bug,
   rewrote `package.json`/README to describe this project instead of
   the original "Astrofy" template.
6. `d35caae` — Fixed illegible project logos in dark mode (see below).

**Not started:** the CV/education page (`src/pages/cv.astro` is still
100% Lorem-ipsum template placeholder, not linked in nav).

## Decisions already made (don't re-litigate)

- **Scope**: keep/polish Home, Projects, Technologies, Contact; add a
  real CV page later; Services and Blog are gone for good.
- **Visual direction**: "Modern Tech / dark-first" — dark background,
  cyan accent (`#2de2e6` dark / `#0e7c86` light), sharp edges, glow
  effects, Inter + JetBrains Mono. Both a dark and light theme exist,
  dark is default, toggle persists to `localStorage`.
- **Language**: bilingual DE/EN via real routing (`/` vs `/en/`), not a
  client-side toggle — chosen for SEO.
- **Data shape**: bilingual content lives as typed `.ts` data files
  under `src/data/`, not Astro content collections — per-field
  `{ de, en }` objects, not separate locale files.
- **Education**: explicitly deferred by the user (2026-07-17) — don't
  chase this content, don't build a placeholder education section.

## Known bug fixed, worth remembering the pattern

Project logos in `src/data/projects.ts` are mostly wordmark PNGs/SVGs
with dark text on a transparent background, meant for a white page. In
dark mode they were unreadable. Fix: `HorizontalCard.astro` now wraps
every project image in a fixed white plate (`bg-white`) regardless of
theme. If you add new project logos, this is handled automatically —
no per-image fix needed. (Technology icons on `/technologies` didn't
need this — most of those PNGs already have their own baked-in light
background.)

## Open items — need Markus's input before continuing

1. **CV page**: still needs real project/employment **dates** (none
   exist anywhere today — `src/data/projects.ts` has no date fields)
   and a decision on whether "Experience" should be one timeline entry
   per project (11 entries) or per employer/engagement referencing
   projects. Education is intentionally out of scope per above.
2. **Certifications**: any real ones to list on a future CV page, or
   skip that section entirely.
3. **Imprint/Datenschutz translation posture**: German-authoritative +
   English disclaimer, German-only, or full parallel translation. This
   is a legal call — don't invent wording. Currently `/imprint` and
   `/privacy` are German-only, no `/en/` versions exist.
4. **Sign-off on my own creative calls**: accent color (`#2de2e6`),
   fonts (Inter/JetBrains Mono). Nothing has pushed back on these yet.
5. **Downloadable CV PDF** — wanted or not, still unanswered.

## How to verify locally

```bash
pnpm install
pnpm build && pnpm preview   # or: pnpm dev
```

Check `/`, `/en/`, `/projects/`, `/en/projects/`, `/technologies/`,
`/en/technologies/`, `/imprint/`, `/privacy/` — both themes (toggle in
the sidebar footer / mobile header), and a mobile viewport for the
drawer nav.

A full-repo memory/plan trail also exists outside this repo at
`/home/markus/.claude/projects/-home-markus-git-website-software/memory/`
(see `weissenbek_redesign_plan.md` and `deploy_no_push.md`) — this file
is the self-contained version so a fresh session doesn't depend on that
external state being present.
