# GPS Logger — GitHub Pages website

A world-class landing page for [GPS Logger: Private Tracker](https://play.google.com/store/apps/details?id=com.northforceapps.gpslogger),
in the app's warm "explorer atlas" identity (bone parchment, forest green, amber).

- **Live site (target):** https://northforceapps.github.io/gpslogger/
- **GitHub repo (target):** https://github.com/NorthforceApps/gpslogger

Pure HTML/CSS/JS, no framework or build step. Sections: hero · value strip · "vibe"
use-case gallery · YouTube tour · how-it-works comic · features · screenshots · SEO guide
hub · Free/Pro/Lifetime pricing · privacy & reliability · FAQ · CTA. Scroll-reveal
animations, sticky nav, mobile menu, click-to-load YouTube (fast first paint), full
OG/Twitter/JSON-LD metadata, sitemap, localized mini landing pages, accessible (skip link,
focus rings, reduced-motion support).

## Files
| File | Purpose |
|------|---------|
| `index.html` | Landing page |
| `guides.html` | SEO guide hub for GPS logging topics |
| `how-to-record-export-gpx-android.html` | Tutorial targeting GPX recording/export searches |
| `gps-logger-vs-strava.html` | Comparison article for private logger vs social fitness intent |
| `offline-gps-logging-privacy.html` | Privacy-focused informational article |
| `gpx-openstreetmap-qgis.html` | GPX mapping workflow article |
| `de.html`, `es.html`, `fr.html`, `pt.html`, `ja.html`, `hi.html` | Legacy locale redirects to directory URLs |
| `en/`, `de/`, `es/`, `fr/`, `pt/`, `ja/`, `hi/` | Full locale directory structure; every locale has the same pages |
| `privacy.html` | Privacy policy (from `playstore/privacy_policy.md`) |
| `styles.css` | Stylesheet |
| `app.js` | Play-link config, scroll-reveal, YouTube facade, mobile nav, email |
| `robots.txt`, `sitemap.xml` | SEO |
| `downloads/sample-gpslogger-city-walk.gpx` | Synthetic GPX example for tutorials |
| `assets/` | Icon, feature graphic, motif, video poster, comic, vibe gallery, screenshots |

## Localization structure
Canonical content now lives under language directories:

- `en/` — source English copy
- `de/` — German translation target
- `es/` — Spanish translation target
- `fr/` — French translation target
- `pt/` — Portuguese translation target
- `ja/` — Japanese translation target
- `hi/` — Hindi translation target, added for India / large Android market reach

Every locale directory has the same file names and URL slugs. Translate copy in place, but keep
the slugs, asset paths, Play links, canonical URLs, and reciprocal `hreflang` blocks intact.
The root-level pages remain for compatibility and canonicalize to `en/`; the sitemap lists the
locale directory URLs only.

## Two values to confirm (both in `app.js`, top of file)
```js
const PLAY_URL = "https://play.google.com/store/apps/details?id=com.northforceapps.gpslogger";
const YT_ID    = "NSOkPpQ0TaY";   // the promo video
```
- **`PLAY_URL`** is GPS Logger's own (app-specific) Play link. Every CTA button is wired to it,
  so when the listing is live you confirm/replace this **one line**. (Each button also has the
  same URL hard-coded as its `href`, so links work even with JS disabled.)
- **`YT_ID`** is your uploaded tour video (https://youtu.be/NSOkPpQ0TaY). The page shows a
  branded poster and only loads the YouTube player on click.

## Assets are generated — don't hand-edit `assets/`
`marketing/render/build.sh` (step 6) produces and copies everything in:
| Web file | Source |
|----------|--------|
| `icon.png` | `playstore/assets/icon/icon.png` |
| `feature_graphic.png` | `marketing/out/feature_graphic_1024x500.png` |
| `atlas-motif.svg` | `marketing/design-system/atlas-motif.svg` |
| `usecase-0X-*.jpg` | `marketing/out/usecase-*.png` → optimized JPG |
| `comic.jpg` | `marketing/out/comic-how-to.png` → optimized JPG |
| `video-poster.jpg` | a promo montage frame |
| `ss-*.png` | curated screenshots from `playstore/assets/screenshots/` |

Rebuild any time: `bash playstore/marketing/render/build.sh`. The promo MP4 is **not** shipped
here (the site streams it from YouTube); it stays in `marketing/out/` as the deliverable.

## Deploy to GitHub Pages
1. Create a public repo **`NorthforceApps/gpslogger`**.
2. Copy the entire contents of this `website/` folder (including `assets/`) into the repo root.
3. Repo **Settings → Pages → Deploy from a branch**, branch **`main`**, folder **`/` (root)**.
4. Live at `https://northforceapps.github.io/gpslogger/` within a minute.

> Quick local preview: `python3 -m http.server -d playstore/website 8000` → http://localhost:8000

## Before publishing — checklist
- [x] Promo video uploaded to YouTube (`NSOkPpQ0TaY`) and embedded.
- [ ] Confirm/replace `PLAY_URL` in `app.js` once the Play listing is live.
- [ ] Confirm the support email (currently `northforceapps@protonmail.com`, set in `app.js`).
- [ ] Fill the developer name / contact `TODO:` placeholders in `playstore/privacy_policy.md`
      and keep `privacy.html` in sync.
