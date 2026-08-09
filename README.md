# K.O. II Coach

A phone-first, offline learning companion for the Teenage Engineering
**EP-133 K.O. II** sampler. Tap the device map to learn any control, search
every button combo, follow step-by-step recipes, and troubleshoot when
you're stuck.

**Content targets OS 2.5** (checked Aug 2026). Firmware updates can change
combos — see `FIDELITY.md` for the verification audit and open questions.

## Structure

Plain files, zero dependencies, no build step:

```
index.html            markup (incl. the 1:1 device map)
css/app.css           all styling — TE-derived dark/orange/amber look
js/data.js            the content layer: COMBOS, CTRL, RECIPES, FIXES, META
js/app.js             app logic + service-worker registration
manifest.webmanifest  PWA manifest
sw.js                 service worker — caches everything, fully offline
icons/                app icons (icon.svg is the source of truth)
.github/workflows/    GitHub Pages deploy
FIDELITY.md           accuracy audit — what's verified, what needs checking
PRD.md                product requirements + backlog
```

All device facts live in `js/data.js`. To edit or extend content, change the
data arrays there and bump `VERSION` in `sw.js` so installed phones refresh.

## Run locally

Any static server works (service worker needs http, not `file://`):

```
python3 -m http.server 8000
# → http://localhost:8000
```

Opening `index.html` directly also works — everything except offline caching.

## Deploy & install on your phone

Deploys to GitHub Pages automatically on push to `main` via
`.github/workflows/pages.yml`.

One-time setup: repo **Settings → Pages → Source: GitHub Actions**. After the
next push to `main`, the app is live at
`https://<user>.github.io/KO-II/`.

On the phone: open that URL → share sheet → **Add to Home Screen** (iOS
Safari) or the install prompt (Android Chrome). After the first visit it
works fully offline.

## Content & accuracy

Source of truth: the official
[teenage engineering EP-133 guide](https://teenage.engineering/guides/ep-133).
**Don't invent device behavior.** Anything that can't be verified gets an
`unverified` flag in `js/data.js` (rendered as a tag in the app) rather than
being stated as fact. `META` in `js/data.js` records the OS version the
content targets; re-verify when firmware updates land.

## Backlog

See `PRD.md`. Next up (Milestone 2): full content coverage — complete FX
list, sound-edit parameters, MIDI/sync, sample-library map — then tools
(metronome, BPM tap, scale reference), deep-linking combos ↔ map, and the
rest of the open questions.
