# publishing/exports/website/ — Agent Guidelines

Part of the app repo's [DOX](https://github.com/agent0ai/dox) child index (see the app
repo's root `AGENTS.md` → `publishing/` entry), but this directory is itself a separate
git repository — read this file when working inside it even if you arrived without the
app repo's context.

## Purpose
The only **public**, Google-indexed artifact for GPS Logger: a hand-authored HTML site
(no generator — there is no `gen-site.mjs`; don't invent one). Its job is organic
Google/Bing/etc. search discovery, not just mirroring the Play Store listing.

## Ownership
Own git remote (`git@github-northforce:NorthforceApps/gpslogger.git`, branch `main`),
pushed independently of the app repo. The app repo's `publishing/` directory (recipes,
material, docs) is the private source that feeds images and copy here; this directory
is the deployed result.

## Local Contracts
- Never claim a capability the app doesn't have — every feature claim must trace to
  actual app behavior (mirrors the app repo's `publishing/AGENTS.md` rule #2).
- Edit HTML directly for copy changes; don't regenerate from a template that doesn't
  exist.
- New or changed pages: keep `sitemap.xml` and `robots.txt` current, and mirror the
  change across locale directories (`de/ es/ fr/ hi/ ja/ pt/`) or explicitly note it as
  English-only pending translation.
- After publishing (commit + push from inside this directory), run
  `./indexnow-submit.sh` so Bing/Yandex/Seznam re-crawl promptly.
- This repo's own git history doesn't carry the app-side reasoning for a change — log
  it in the app repo's `publishing/website_sync.md` (two directories up, `../../website_sync.md`
  from here), in the same pass.

## Work Guidance
Check `../../website_sync.md` (in the app repo) for open drift items before starting new
content work here.

## Verification
None automated. Spot-check locally before publish; there's no staging deploy.

## Child DOX Index
None — no further subtrees.
