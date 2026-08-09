# K.O. II Coach

A phone-first learning companion for the Teenage Engineering **EP-133 K.O. II** sampler. Tap the device map to learn any control, search every button combo, follow step-by-step recipes, and troubleshoot when you're stuck.

## Current state
`index.html` is a complete, self-contained single-file prototype — HTML + CSS + JS in one file, with the content in structured data arrays (`COMBOS`, `CTRL`, `RECIPES`, `FIXES`). Open it in any browser to run. No build step, no dependencies.

## Not done yet (early tasks)
- PWA scaffolding — manifest, service worker, icons — for offline use and home-screen install.
- See `PRD.md` for the full backlog and the open questions to work through with the owner.

## Content & accuracy
All device information comes from the official Teenage Engineering EP-133 guide (reflects ~v2.5). Firmware updates can change combos — re-verify against the current guide when editing. **Don't invent device behavior; flag uncertainty.**

## For the coding agent
Read `PRD.md`, then `index.html`, then **interview the owner** using the open questions at the bottom of the PRD before building. Keep it accurate, offline-first, phone-first, and true to the Teenage Engineering aesthetic.
