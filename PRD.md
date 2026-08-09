# KO II Coach — Product Requirements (rough draft)

> **Status: v0 sketch.** This is a starting point for Claude Code to refine, *not* a fixed spec. Read `index.html` (the working prototype) and this doc, then **interview the owner** using the Open Questions at the bottom before building anything.

## One-liner
A fast, offline, phone-first companion that helps a new owner of the Teenage Engineering **EP-133 K.O. II** learn the device and make beats — a pocket coach you glance at with the unit in your hands.

## Why this exists
- The owner just got a K.O. II and is learning from zero. The official guide is thorough but not *glanceable* mid-session, and the device's SHIFT-combos are hard to remember.
- The owner wants to ask quick questions — "what button does X," "I did Y and I'm stuck" — and get instant, correct answers, plus a visual reference that maps exactly to the hardware.
- Context worth designing for: the owner is a guitarist (may sample guitar via line-in), and their kids may get involved, so approachability matters.

## Who it's for
- **Primary:** the owner — an absolute-beginner beatmaker, technically comfortable, musically literate.
- **Secondary (later):** the owner's kids; other new K.O. II owners.

## Current state (the seed)
`index.html` is a working single-file prototype. Four tabs:
1. **Map** — a faithful 1:1 render of the device. Tap any control → a sheet with what it does and every combo it's part of.
2. **Combos** — searchable / filterable list of every button combo.
3. **Learn** — step-by-step recipes (first beat, step-programming drums, sampling guitar, chopping a loop, commit/song building, FX).
4. **Stuck** — troubleshooter (velocity off by default, undo, error codes, lock mode, the scene-vs-project gotcha…).

Aesthetic is derived from the device itself: dark "screen" background, TE orange + amber, monospace silkscreen labels, group colors on the on-screen tiles. Content lives in structured data arrays (`COMBOS`, `CTRL`, `RECIPES`, `FIXES`). No backend. All device facts sourced from the official TE EP-133 guide (reflects ~v2.5).

## Goals
- Instant answers, glanceable on a phone next to the unit.
- **Hardware fidelity** — the Map matches the real layout, labels, and colors.
- **Accuracy over completeness** — never invent device behavior; flag uncertainty; anchor to the guide.
- Works **offline** (installable PWA).

## Non-goals (for now)
- Not a DAW; does not play the device's audio.
- Not a MIDI controller.
- No accounts, no cloud, no analytics.
- Not a replacement for the official manual — a companion to it.

## Candidate features / backlog (to prioritize with the owner)
- **PWA install** — manifest + service worker + icons are not set up yet; add them early for offline use and home-screen install.
- **Deep-linking** — tap a combo → highlight that control on the Map, and vice-versa.
- **Tools** — a working metronome; a BPM tap pad; a Keys-mode scale / note-interval reference.
- **Practice / lesson mode** — guided, checkable lessons that walk the owner through building a first track.
- **Notes / idea stash** — lightweight per-project notes (the owner already keeps a personal PWA; consider whether to match that habit or stay separate).
- **"Ask" box** — type a plain-language question → jump to the right combo/recipe.
- **Firmware awareness** — surface which OS version the content targets; make updating content easy.
- **Kid mode** — a simplified, playful subset.
- **Content expansion** — full FX list, sound-edit parameters, MIDI/sync setup, sampling-input detail.

## Design principles
- Phone-first, thumb-reachable, fast; minimal chrome.
- The device is the design language — stay true to the TE look; avoid generic/templated UI.
- **Honesty** — distinguish sourced fact from inference; if unsure, say so. (Mirrors the owner's stated preference for accurate, source-honest information.)
- Low friction — no login, no setup, opens instantly.

## Technical notes
- Seed is vanilla HTML/CSS/JS in one file. Fine to keep vanilla or refactor into components — either way keep it lightweight and offline-first.
- No browser-storage APIs are used yet. If adding notes, plan local persistence and remember the target may be an installed PWA. (Note: browser storage does not work inside the Claude.ai artifact sandbox, but works fine once this is a hosted/installed PWA — which is the point of moving to Claude Code.)
- Keep content in the structured data layer so it's easy to extend and verify.

## Content accuracy
- **Source of truth:** the teenage.engineering guide for the EP-133 K.O. II (currently ~v2.5).
- Firmware updates can add or change combos — re-verify against the current guide when expanding, and surface the version the content targets.
- When a detail can't be confirmed, mark it rather than guessing.

## Open questions — Claude Code: ask the owner before building
1. **First milestone:** polish what's here, add tools (metronome / BPM tap / scale ref), or build lesson mode?
2. **Install & hosting:** keep it a single file, or set up a proper installable PWA — and host it where (local only, GitHub Pages, Netlify)?
3. **Notes / stash:** do you want to save ideas per project inside this app, or keep that in your existing one?
4. **Kids:** build a simplified mode now, or later?
5. **Content scope:** cover everything (MIDI, sync, every FX and parameter), or hold to the beginner core?
6. **Structure:** happy to keep it vanilla single-file, or would you like it restructured (small build, components)?
7. **Fidelity check:** does anything on the current Map — positions, labels, colors — not match your actual unit?
