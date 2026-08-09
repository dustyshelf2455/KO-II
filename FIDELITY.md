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
- ~~Hold SHIFT + SOUND (2 s) → save sound edits~~ **Resolved**: the real
  behavior is *crop-to-file*, done by holding SHIFT + SOUND on the Trim
  page (permanent). Sound-edit changes are otherwise per-project and
  automatic. Combos entry corrected and unflagged.

## The display replica — traced from the owner's unit

The owner supplied two photos of the real 128 MB unit: one at boot with
**every segment lit**, one mid-session in Main mode. The replica's icon
inventory, positions, and row structure are now traced from those photos
(~55 elements across 4 rows). The mid-session photo also validated the
default lit state (pad grids, group A, 1.1.1 digits with BAR/TIC, MAIN).

**Meanings verified** (guide text or unambiguous): group tags · pad grids'
existence · SYNC · MIDI · BAR/TIC position readout · digits · BPM · level
meter · STEREO/MONO input modes · metronome · scissors/chop · umbrella ·
REC · PLAY · FX · Q + FREE · COPY/PASTE · SOUND/MAIN/TEMPO/ERASE/SYSTEM
mode labels · CLIP · SWING · keys keyboard.

**Traced but meaning flagged `unverified` in-app:** tape, whistle and
pixel-art corner illustrations · battery/power capsule · floppy (save) ·
stopwatch · four-color wheel · right-side dot grids · note/trim/envelope/
stretch cluster · loop arrow · big arrow · tube · fader glyph · headphones ·
burst ✳ · MUTE bubble's exact trigger. The guide's screen page (66 icons,
egress-blocked here) or simply using the unit will settle these — owner:
when one of them lights, say so and it gets verified.

## Control-surface corrections made from the photos

- The seven shift functions are **separate lower keycaps** (SOUND/EDIT,
  MAIN/COMMIT-red, TEMPO/LOOP-grey, SAMPLE/CHOP, TIMING/CORRECT,
  FX/OUTPUT, ERASE/SYSTEM-both-white) — now rendered as two-cap keys.
- SHIFT is a **light key**, not black. SAMPLE and RECORD are white-on-red.
- Knob silkscreen: BPM over X, METRONOME over Y, boxed x/y tags under the
  dials; VOLUME spelled out. (GAIN/SWING bracket text lives in the sheets.)
- Fader-label LED dots and per-group LEDs added (A lit red as in Main).
- Pad 6's label corrected to **→FX**; the full above-pad mapping
  (LEVEL/PITCH/TIME · LPF/HPF/→FX · ATK/REL/PAN · TUNE/VEL/MOD) is
  photo-confirmed.
- Group key symbols photo-confirmed: A ✳ · B undo-hook · C ↑ · D ↓.
- Added the top-edge port tabs (OUTPUT/INPUT/SYNC·MIDI/USB/POWER), the
  K.O. II / サンプラー / "128 MB SAMPLER COMPOSER" label panel, and the
  speaker grille.

## Content library integration (ko2-content-library.md)

All 77 Stuck entries and 32 Learn lessons integrated. Two corrections were
made against the current official guide during integration:

- **Overwrite recording**: the library said `RECORD → ERASE → +`; the
  guide documents overwrite mode as **RECORD + ERASE + PLAY** — the
  guide's version is used throughout.
- **BLE / Bluetooth MIDI**: the library implied built-in wireless MIDI.
  The EP-133 has **no built-in Bluetooth** — BLE MIDI requires a
  third-party adapter (e.g. CME WIDI K.O.II). Sync entries corrected.

Carried through with the library's own caveat intact: the backup/restore
entry notes the method has evolved across firmware and should be confirmed
in the official guide. Items tagged as concepts are grouped under a
"Concepts · general guidance" header, framed as practice, not device docs.

**Deep verification pass** (owner asked for library claims to be resolved
against the real device): confirmed correct — exact-bars hands-free
sampling (– / + then PLAY), trim knob mapping + SHIFT 1-second zoom +
destructive crop, the full sidechain procedure, play modes (one-shot /
key / legato), sampling threshold on KNOB Y. Verified enrichments added —
resample shows **RSP** on screen; sidechain duck is shaped with KNOB X
(length) / KNOB Y (shape); Sound Edit's six pages (play mode, trim,
envelope, time stretch, per-pad MIDI channel, mute groups) with edits
per-project except crop.

## Still open

- **E.10** — grouped with E.11/E.12 as a file-system error; E.11/E.12 are
  confirmed, E.10 is assumed.
- The unverified icon meanings listed above.

Corrections land in `js/data.js` (facts) and `index.html` (Map markup) —
both are plain text, easy to patch.
