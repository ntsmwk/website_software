# STATE — weissenbek.at redesign

Rewritten in place. Read `CLAUDE.md` for the protocol. Markup: ✅ done · ⬜ open · ⏳ in progress ·
⛔ blocked on the user · ⚠️ trap.

## 1. Tips

| what | sha | branch | note |
|---|---|---|---|
| tip | `b7e8d8b` | `master` | HEAD when this file was last rewritten; the commit carrying that rewrite is one ahead |
| live | `837f9a5` | `master` | deployed 2026-09-20, fifth deploy: dark-mode polish, Claude, dead link removed, WebP images |

## 2. Where things stand (2026-09-20)

The redesign away from the stock Astrofy template is 5 of 6 phases done and **live since 2026-09-20**
(`master` fast-forwarded to `redesign`). Work continues directly on `master`, one commit per feature;
the user pushes, and each push deploys. The `redesign` branch is deleted locally (2026-09-20); `origin/redesign` still exists. Details of the finished phases live in `docs/archive/handoff-2026-07.md` (frozen).

| phase | status |
|---|---|
| Dark-first design system, light toggle | ✅ `f9c0e78` |
| Content into typed bilingual data files | ✅ `f544d53` |
| Remove Blog/Store/Services scaffolding | ✅ `6cf8fcb` |
| DE/EN routing via Astro i18n | ✅ `52c0f88` |
| Housekeeping (photo, OG image, README) | ✅ `6ed3acb` |
| Dark-mode logo fix | ✅ `d35caae` |
| CV page | ⬜ not started, `src/pages/_cv.astro` is an unrouted Lorem-ipsum scaffold |

## 3. Open work, in order

Move a row, don't add a second one for the same subject.

| # | subject | status | notes |
|---|---|---|---|
| 1 | Session setup: `CLAUDE.md`, `STATE.md`, agents | ✅ | 2026-09-20 |
| 2 | `/cv/` is built and publicly reachable with Lorem ipsum | ✅ | 2026-09-20: route no longer emitted (`src/pages/_cv.astro` keeps the scaffold, underscore excludes it from routing); same pass fixed hreflang/toggle on German-only legal pages, localized `<title>`s and meta description, `/en` logo links, bilingual 404, footer gap |
| 3 | Data refresh: stale/wrong text (see §5) | ⏳ | typos fixed 2026-09-20; remaining rows need the user |
| 4 | CV page content | ⛔ | needs dates per project/employer, and the timeline shape decision (per project vs per employer). Education is out of scope by decision. |
| 5 | Certifications on the CV page | ⛔ | list or drop the section |
| 6 | Legal pages in English | ⛔ | German-authoritative + EN disclaimer, German-only, or full translation. Legal call, don't invent wording. |
| 7 | Downloadable CV PDF | ⛔ | wanted or not |
| 8 | Sign-off on accent `#2de2e6` / Inter + JetBrains Mono | ⛔ | nothing pushed back yet |
| 9 | Merge `redesign` → `master`, push, verify live | ✅ | 2026-09-20, fast-forward to `6943434`, live within ~16 s, all 8 routes 200 in both languages |
| 10 | Remove `README_old.md` (original Astrofy README) | ⬜ | trivial, ask first |
| 11 | Dark-mode polish: theme-aware logo, uniform icon tiles and logo plates, text contrast | ✅ | 2026-09-20. Portfolio Assistent link removed, site is down. Claude added under KI-Werkzeuge |
| 12 | Image compression: webp, icons ≤256 px, profile 300 px | ✅ | 2026-09-20 |
| 13 | Option A transformation, step 1: light-only theme, fonts, top-nav shell | ✅ | 2026-09-20 |
| 14 | Option A transformation, step 2: home page as one-pager (hero, logos, services, cases, about, contact) | ⬜ | needs positioning sentence + outcome lines from the user; ship with drafts, iron out after |

## 4. Decisions made, don't re-litigate

- Scope: Home, Projects, Technologies, Contact, plus a real CV page. Services and Blog are gone.
- Visual (decided 2026-09-20, supersedes the July dark-first call): **Option A "Editorial one-pager"**,
  light only, no dark mode. Warm off-white ground, ink text, teal accent `#0e7c86`, Fraunces serif for
  headings, Inter body, JetBrains Mono for stacks. Top nav instead of the sidebar. Home carries the
  whole story (positioning hero, client logos, services, 3 case studies, about, contact); Projekte and
  Technologien stay as secondary pages. Options page: https://claude.ai/artifact/4xXgWzKcypqwbye9nQBvuu
  hover, Inter + JetBrains Mono. Light theme fully designed, toggle persists to `localStorage`.
- Language: real routes (`/` German, `/en/` English) for SEO, not a client-side swap.
- Data shape: per-field `{ de, en }` objects in `src/data/*.ts`, not content collections, not separate
  locale files.
- Education section: explicitly deferred by the user on 2026-07-17. Don't chase it, don't stub it.
- No test suite. Verification is build + eyes.
- Dark mode removed (2026-09-20, user decision). Do not re-add a theme toggle.

## 5. Stale-data audit (2026-09-20, from reading the source)

Things a refresh pass should touch. Confirm the facts with the user where marked. Fixed 2026-09-20: Energieausweiß ×2, Photovoltaik-Systemen, Datenautausch, "Letzten Projekte".

| where | what | ask user? |
|---|---|---|
| `src/pages/index.astro` | "Seit mehr als 10 Jahren" — check the number is still right | yes |
| `src/data/projects.ts` | no dates on any project; `featuredProjectIds` may not be the latest work | yes |
| `src/data/technologies.ts` | "Frameworks" category mixes Jira/Confluence/UML/C4/Agile/Git/Docker; Git uses the GitLab logo | yes |
| `src/pages/imprint.astro` | "Zuletzt aktualisiert: 10.02.25"; verify address/phone/UID still current | yes |
| `README_old.md` | leftover template README | yes |

## 6. Traps ⚠️

- **pnpm version.** The lockfile is v9 but the PATH `pnpm` is 8.15.4. `pnpm install`/`pnpm add` with v8
  rewrites the lockfile to v6 and re-resolves everything (bumped `@astrojs/sitemap` to an Astro-5 release,
  broke the build). Use `npx pnpm@9 add …` for dependency changes; `pnpm build`/`pnpm preview` are fine.
- Host is **Netlify**, production branch `master`. Pushing `redesign` (2026-09-20, `73db9ae`) deployed
  nothing: live site unchanged after 3 min, no GitHub status or deployment posted (Netlify posts none
  for this repo, not even on `master`). Only a push to `master` deploys, and it is live within ~20 s.
  Branch-deploy URL unknown.
- `dist/` is gitignored and stale (July); rebuild before judging anything from it.
- New project logos: nothing to do, the white plate in `HorizontalCard.astro` handles contrast.
- `README.md` still says "no `/en/` legal pages exist yet" — keep it true or update it with #6.
- No dark mode; `data-theme="light"` is static in `BaseLayout.astro`.

## 7. How to verify

```bash
npx pnpm@9 install           # only if node_modules is missing; see §6 pnpm trap
pnpm build && pnpm preview   # or pnpm dev
```

Check `/`, `/en/`, `/projects/`, `/en/projects/`, `/technologies/`, `/en/technologies/`, `/imprint/`,
`/privacy/`, and a phone-width viewport for the collapsed top nav. Screenshots via the playwright setup
in the scratchpad (`shots.js`, `@playwright/test` from the ebu-testing-kit's node_modules).

## 8. Who owns what

| document | owns |
|---|---|
| `CLAUDE.md` | protocol, hidden constraints, team |
| `STATE.md` | current state, open work, decisions, audit |
| `README.md` | how to run, where content lives |
| `docs/archive/handoff-2026-07.md` | July session detail, frozen |
| `.claude/agents/*.md` | agent roles |
