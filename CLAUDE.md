# weissenbek.at

Personal business site for Weißenbek Software e.U. Astro 4 static site, Tailwind + daisyUI,
bilingual DE/EN. Deployed at https://weissenbek.at.

## Reading protocol

**Read `STATE.md` first, then run `git log --oneline <tip>..HEAD`** where `<tip>` is the sha in
`STATE.md`'s `| tip |` row. Anything that prints beyond the commit that carried the `STATE.md` change itself is work `STATE.md` does not know about yet; ask about
it before briefing anything as current. `STATE.md` is tracked in git, so `git diff STATE.md` and
`git log -1 -- STATE.md` say when it last moved.

Then, on demand only:

- `README.md` for how to run and where things live
- `docs/archive/**` only to answer *why is it this way?* — frozen, never appended to

## Facts that are not derivable from the code

- **`git push origin master` deploys to production** (Netlify, production branch `master`; other branches deploy nothing). It triggers an automatic deploy of
  weissenbek.at. Never push without the user's explicit word in that moment, even in auto mode. The
  `deployer` agent is the only one that pushes. Local commits are fine.
- `redesign` is the working branch. `master` is what is live.
- Content is data, not markup: `src/data/projects.ts`, `src/data/technologies.ts`, chrome strings in
  `src/i18n/ui.ts`. Every text field is `{ de, en }`. German is authoritative for legal pages.
- English routes under `src/pages/en/` are thin re-exports; the page component reads
  `Astro.currentLocale`. Do not duplicate markup.
- Project logos are dark wordmarks on transparent background; `HorizontalCard.astro` puts every one on
  a white plate. New logos need no per-image fix.
- Verification is `pnpm build` plus a look at the built pages in both languages and both themes. There
  is no test suite by decision; do not add one.

## Writing protocol

- New **state** (something landed, a decision, an open question) → rewrite the relevant row or section
  of `STATE.md` in place, in the same pass as the change. Never append a second result beside an older
  one. Update the `| tip |` row on every commit.
- New **content** → the data file, both languages, same pass.
- One fact, one home. `README.md` owns how-to, `CLAUDE.md` owns protocol and hidden constraints,
  `STATE.md` owns current state and open work.

## Team

Three agents in `.claude/agents/`: `project-manager` (talks to the user, breaks work down, reviews,
commits), `developer` (the only editor of `src/` and `public/`), `deployer` (builds, verifies,
merges to `master` and pushes on the user's explicit word, records what is live). Start a session by
addressing the project manager; it briefs from `STATE.md`.

## Style

- Small targeted diffs. No refactors that were not asked for.
- No code comments except for a non-obvious *why*.
- Match the existing dark-first design system in `tailwind.config.cjs`; do not add stock daisyUI themes.
