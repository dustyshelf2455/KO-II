# Fidelity & accuracy audit

The goal: every device fact verifiable against the official Teenage Engineering
EP-133 guide, and a Map that mirrors the real unit. This file is the audit
trail — what was verified, what was corrected, and what still needs the
owner's eyes on the actual hardware.

**Content targets: EP-133 K.O. II, OS 2.5 (June 2026) · checked August 2026.**

> ⚠ Build-environment caveat: `teenage.engineering` (and mirror sites) are
> blocked by this sandbox's network egress policy, so verification was done
> through web-search excerpts of the official guide and reputable secondary
> sources — not the guide pages directly. Confidence is high on everything
> listed as verified below, but a final read-through against
> [the official guide](https://teenage.engineering/guides/ep-133) from a
> normal browser is worth doing.

## Corrections made in this pass

| Was | Now | Why |
|---|---|---|
| Overwrite recording: "RECORD, ERASE, +" | **RECORD + ERASE + PLAY** | Guide documents overwrite mode as record+erase+play. |
| Fader labels drawn *inside/below* pads (e.g. ATK on pad 4) | One label printed **above each pad**: 7/8/9 = LEVEL/PITCH/TIME, 4/5/6 = LPF/HPF/FX, 1/2/3 = ATK/REL/PAN, ·/0/ENTER = TUNE/VEL/MOD | Guide: "hold FADER and choose from the options above the pads" — 12 options, one per pad. Seed had the mapping shifted a row. |
| Velocity codes 301 on / 300 off | 301 = on **high**, **302 = on low**, 300 = off | Guide lists both sensitivities. |
| Lock mode "'LOK' flashes" | Softened — exact display text unverified | Behavior (hold MAIN at power-on, restart to clear) is verified; the screen text is not. |
| — | Added OS 2.5 items: arpeggiator (Keys: hold TIMING + pads), EQU auto-chop, sample reverse (Sound Edit), USB audio in/out, 40 s mono sampling | New in firmware 2.5. |

## Verified this pass (via guide excerpts / official-guide search results)

- Projects 1–5 factory demos, 6–9 empty; hold MAIN + pad to switch
- Song editor: hold MAIN + ENTER (added in OS 2.0); 99 song positions
- SHIFT + B / C / D = undo / copy / paste; group = 12 sounds + 99 patterns
- SAMPLE + TEMPO = tempo match on incoming audio
- System: SHIFT+ERASE; 301/302/300 velocity; 400 metronome (SEQ→MET→ON)
- Format: hold SHIFT + ERASE at power-on, "FMT" shows, erases sounds (fixes E.11 "LFS corrupt" / E.12 "other LFS error")
- Lock mode: hold MAIN at power-on
- Note-repeat latch: TIMING, then SHIFT + pad
- Fine knob control: SHIFT + turn
- Sample library numbering: kicks 1–99, snares 100–199, hats 200–299, perc 300–399, bass 400–499, melodic 500–599 (not yet surfaced in the app — Milestone 2)

## Still unverified — marked in the app with an `unverified` tag

- **Hold ERASE + MAIN (2 s)** → clear/delete scene
- **Hold SHIFT + SOUND (2 s)** → save sound edits

## Owner checklist — needs your unit (or a photo of it)

The Map is verified for layout, key colors by role, main labels, and
shift-box labels (EDIT / COMMIT / LOOP / CHOP / CORRECT / OUTPUT / SYSTEM).
These finer silkscreen details couldn't be confirmed from this environment:

1. **Group keys A–D** — the Map shows small symbols (✳ ↵ ↑ ↓) under the
   letters. What, if anything, is actually printed on yours?
2. **Knobs** — are the two right-hand knobs labeled X / Y (or anything) on
   the faceplate? Is the volume knob labeled?
3. **Display replica** — the on-screen segment display is stylized. A photo
   of yours mid-session would let us match the real segment layout
   (umbrella, BAR, Q, group tags, etc.).
4. **Key colors** — confirm: SAMPLE and RECORD orange, ERASE/–/+ white,
   PLAY grey, everything else dark — matches your 128 MB unit?
5. **Fader cap + slider** — color/shape right?
6. **E.10** — grouped with E.11/E.12 as a file-system error; E.11/E.12 are
   confirmed, E.10 is assumed. If your unit ever shows it, tell me what the
   guide's error table says.

Corrections land in `js/data.js` (facts) and `index.html` (Map markup) —
both are plain text, easy to patch.
