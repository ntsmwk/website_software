# STATE — weissenbek.at redesign

Rewritten in place. Read `CLAUDE.md` for the protocol. Markup: ✅ done · ⬜ open · ⏳ in progress ·
⛔ blocked on the user · ⚠️ trap.

## 1. Tips

| what | sha | branch | note |
|---|---|---|---|
| tip | `ec3a0ad` | `redesign` | HEAD when this file was last rewritten; the commit carrying that rewrite is one ahead |
| live | `fc0ffc9` | `master` | what weissenbek.at serves; nothing from `redesign` is pushed |

## 2. Where things stand (2026-09-20)

The redesign away from the stock Astrofy template is 5 of 6 phases done on `redesign`, built and
browser-checked on 2026-07-17. Nothing has been merged or pushed since. Build is green as of today
(10 pages). Details of the finished phases live in `docs/archive/handoff-2026-07.md` (frozen).

| phase | status |
|---|---|
| Dark-first design system, light toggle | ✅ `f9c0e78` |
| Content into typed bilingual data files | ✅ `f544d53` |
| Remove Blog/Store/Services scaffolding | ✅ `6cf8fcb` |
| DE/EN routing via Astro i18n | ✅ `52c0f88` |
| Housekeeping (photo, OG image, README) | ✅ `6ed3acb` |
| Dark-mode logo fix | ✅ `d35caae` |
| CV page | ⬜ not started, `src/pages/cv.astro` is 100 % Lorem ipsum |

## 3. Open work, in order

Move a row, don't add a second one for the same subject.

| # | subject | status | notes |
|---|---|---|---|
| 1 | Session setup: `CLAUDE.md`, `STATE.md`, agents | ✅ | 2026-09-20 |
| 2 | `/cv/` is built and publicly reachable with Lorem ipsum | ⬜ | on `master` too, so it is live today. Either build the real page or stop emitting the route until it exists. Quick win. |
| 3 | Data refresh: stale/wrong text (see §5) | ⬜ | cheap, do before merging |
| 4 | CV page content | ⛔ | needs dates per project/employer, and the timeline shape decision (per project vs per employer). Education is out of scope by decision. |
| 5 | Certifications on the CV page | ⛔ | list or drop the section |
| 6 | Legal pages in English | ⛔ | German-authoritative + EN disclaimer, German-only, or full translation. Legal call, don't invent wording. |
| 7 | Downloadable CV PDF | ⛔ | wanted or not |
| 8 | Sign-off on accent `#2de2e6` / Inter + JetBrains Mono | ⛔ | nothing pushed back yet |
| 9 | Merge `redesign` → `master`, push, verify live | ⬜ | deployer, only on explicit word. Deploy mechanism is outside this repo (no workflow file); first deploy should confirm what actually triggers it. |
| 10 | Remove `README_old.md` (original Astrofy README) | ⬜ | trivial, ask first |

## 4. Decisions made, don't re-litigate

- Scope: Home, Projects, Technologies, Contact, plus a real CV page. Services and Blog are gone.
- Visual: dark-first, cyan accent (`#2de2e6` dark / `#0e7c86` light), sharp 0.25rem corners, glow
  hover, Inter + JetBrains Mono. Light theme fully designed, toggle persists to `localStorage`.
- Language: real routes (`/` German, `/en/` English) for SEO, not a client-side swap.
- Data shape: per-field `{ de, en }` objects in `src/data/*.ts`, not content collections, not separate
  locale files.
- Education section: explicitly deferred by the user on 2026-07-17. Don't chase it, don't stub it.
- No test suite. Verification is build + eyes.

## 5. Stale-data audit (2026-09-20, from reading the source)

Things a refresh pass should touch. Confirm the facts with the user where marked.

| where | what | ask user? |
|---|---|---|
| `src/pages/index.astro` | "Seit mehr als 10 Jahren" — check the number is still right | yes |
| `src/data/projects.ts` | "Energieausweiß" ×2 → "Energieausweis" (typo) | no |
| `src/data/projects.ts` | "Photovoltaik-Systemen" → "Photovoltaik-Systeme" (grammar) | no |
| `src/data/projects.ts` | no dates on any project; `featuredProjectIds` may not be the latest work | yes |
| `src/data/technologies.ts` | "Frameworks" category mixes Jira/Confluence/UML/C4/Agile/Git/Docker; Git uses the GitLab logo | yes |
| `src/i18n/ui.ts` | "Letzten Projekte" → "Letzte Projekte" | no |
| `src/config.ts` | `SITE_DESCRIPTION` is the generic "Website of Weißenbek Software e.U." (used for OG/meta) | yes |
| `src/pages/imprint.astro` | "Zuletzt aktualisiert: 10.02.25"; verify address/phone/UID still current | yes |
| `src/pages/404.astro` | English only, no locale handling | no |
| `src/pages/cv.astro` | template placeholder, publicly served (see §3 #2) | — |
| `README_old.md` | leftover template README | yes |

## 6. Traps ⚠️

- `git push` = production deploy. No workflow file in the repo; the trigger lives at the host.
- `dist/` is gitignored and stale (July); rebuild before judging anything from it.
- New project logos: nothing to do, the white plate in `HorizontalCard.astro` handles contrast.
- `README.md` still says "no `/en/` legal pages exist yet" — keep it true or update it with #6.

## 7. How to verify

```bash
pnpm install
pnpm build && pnpm preview   # or pnpm dev
```

Check `/`, `/en/`, `/projects/`, `/en/projects/`, `/technologies/`, `/en/technologies/`,
`/imprint/`, `/privacy/`, both themes (toggle in sidebar footer / mobile header), and a phone-width
viewport for the drawer nav.

## 8. Who owns what

| document | owns |
|---|---|
| `CLAUDE.md` | protocol, hidden constraints, team |
| `STATE.md` | current state, open work, decisions, audit |
| `README.md` | how to run, where content lives |
| `docs/archive/handoff-2026-07.md` | July session detail, frozen |
| `.claude/agents/*.md` | agent roles |
