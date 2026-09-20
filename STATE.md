# STATE — weissenbek.at redesign

Rewritten in place. Read `CLAUDE.md` for the protocol. Markup: ✅ done · ⬜ open · ⏳ in progress ·
⛔ blocked on the user · ⚠️ trap.

## 1. Tips

| what | sha | branch | note |
|---|---|---|---|
| tip | `bc4299e` | `redesign` | HEAD when this file was last rewritten; the commit carrying that rewrite is one ahead |
| live | `792287b` | `master` | deployed 2026-09-20, third deploy: theme persists across navigation |

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

Things a refresh pass should touch. Confirm the facts with the user where marked. Fixed 2026-09-20: Energieausweiß ×2, Photovoltaik-Systemen, Datenautausch, "Letzten Projekte".

| where | what | ask user? |
|---|---|---|
| `src/pages/index.astro` | "Seit mehr als 10 Jahren" — check the number is still right | yes |
| `src/data/projects.ts` | no dates on any project; `featuredProjectIds` may not be the latest work | yes |
| `src/data/technologies.ts` | "Frameworks" category mixes Jira/Confluence/UML/C4/Agile/Git/Docker; Git uses the GitLab logo | yes |
| `src/pages/imprint.astro` | "Zuletzt aktualisiert: 10.02.25"; verify address/phone/UID still current | yes |
| `README_old.md` | leftover template README | yes |

## 6. Traps ⚠️

- Host is **Netlify**, production branch `master`. Pushing `redesign` (2026-09-20, `73db9ae`) deployed
  nothing: live site unchanged after 3 min, no GitHub status or deployment posted (Netlify posts none
  for this repo, not even on `master`). Only a push to `master` deploys, and it is live within ~20 s.
  Branch-deploy URL unknown.
- `dist/` is gitignored and stale (July); rebuild before judging anything from it.
- New project logos: nothing to do, the white plate in `HorizontalCard.astro` handles contrast.
- `README.md` still says "no `/en/` legal pages exist yet" — keep it true or update it with #6.
- View transitions drop `<html data-theme>` on navigation; `BaseHead.astro` re-applies it in an
  `astro:before-swap` listener. Any future attribute set on `<html>` by JS needs the same treatment.

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
