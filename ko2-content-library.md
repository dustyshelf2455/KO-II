# K.O. II Coach — Content Library (for the STUCK and LEARN tabs)

> **What this is:** ready-to-integrate content for the app. Part 1 populates the **Stuck** tab (questions, issues, fixes, tips). Part 2 populates the **Learn** tab (guided, step-by-step lessons). Written to slot into the app's existing data model.

---

## How to use this file (notes for the coding agent)

The app already stores content in two JS arrays in `index.html`:

- `FIXES` → the **Stuck** tab. Current shape: `{ p: problem, c: cause, d: fix }`.
- `RECIPES` → the **Learn** tab. Current shape: `{ t: title, s: subtitle, steps: [ [html] ], tip: html }`.

**Please do the following:**

1. **Extend both schemas with a `cat` (category) field**, using the category headings below, and add a lightweight **category filter + text search** to both tabs (mirror the pattern already used on the Combos tab so it feels native). Categories make ~70 items and ~30 lessons navigable.
2. **Convert every item below into the array shape**, preserving the existing look and the inline-command styling (the app wraps key presses in a monospace/`.cmd` style — keep doing that for anything in `[BRACKETS]` here; render `[SHIFT]+[MAIN]` etc. as styled key chips).
3. **Keep the existing items** that are already in the app (don't duplicate — a few basics below overlap intentionally as the canonical version; de-dupe in favor of these).
4. Preserve the Teenage Engineering aesthetic already established.

**Accuracy rules (important):**

- Device facts here are drawn from the official Teenage Engineering EP-133 guide and corroborating manuals as of ~firmware 2.x (2026). **Firmware updates can add or change combos** — where you touch a combo, sanity-check it against the current official guide, and don't invent specifics.
- Items tagged **(concept)** are general music-making best practice, not device documentation — keep them framed as guidance, not as device behavior.
- If you're ever unsure whether a detail is current, flag it in the item rather than stating it as fact. Honesty over the appearance of completeness.

**Formatting key used below:**
`[BUTTON]` = a physical control. `[A]+[B]` = hold A and press B. `→` = then. Numbers like `301` are system-setting codes typed on the pads.

---

# PART 1 — STUCK TAB  (questions · issues · fixes · tips)

## Category: First steps & getting around

**Q: How do I start a brand-new, empty project?**
Hold `[MAIN]` + a pad `6`–`9`. Those four projects ship empty (1–5 hold factory demos). Your other projects stay untouched.

**Q: How do I switch between whole projects (songs)?**
Hold `[MAIN]` + tap a number pad `1`–`9`. Note: holding `[MAIN]` and using `[–]`/`[+]` moves through *scenes*, not projects — the number pad is what changes the project.

**Q: What's the difference between a project, group, pattern, scene, and song?**
Project = one song (9 slots). Group = one of four instruments, `[A]`–`[D]`, each with 12 pads. Pattern = a sequence for one group (up to 99 bars; up to 99 patterns per group). Scene = a snapshot of every group's current pattern playing together = one *section*. Song = scenes chained into an order.

**Q: Where's the save button? Do I need to save?**
There isn't one — the K.O. II auto-saves constantly. "Commit" (`[SHIFT]+[MAIN]`) is *not* save; it snapshots the current scene and hands you a fresh copy to keep building on.

**Q: How do I put a sound on a pad?**
`[SOUND]` → pick a group → tap a pad → scroll samples with `[–]`/`[+]`. Or hold `[SOUND]` and type a sample number to jump straight to it.

**Q: I hit pads in project 6 and nothing happens.**
Projects 6–9 are empty from the factory. Load sounds first: `[SOUND]` → group → pad → `[–]`/`[+]`.

**Q: What do the four groups mean — do I have to use them a certain way?**
No rules, but the suggested layout is A = drums, B = bass, C = melody, D = your own samples. Each group is independent, with its own 12 pads and its own patterns.

## Category: Recording & editing notes

**Q: How do I record live?**
Tap `[RECORD]` then `[PLAY]` for a 4-beat count-in, or hit `[RECORD]`+`[PLAY]` together to start instantly. Play the pads; press `[PLAY]` to stop.

**Q: How do I place hits one step at a time (no timing skill needed)?**
Stop playback, use `[–]`/`[+]` to move to a step, then hold `[RECORD]` + a pad to drop that sound on the step.

**Q: How do I make my pattern longer than four bars?**
Hold `[RECORD]` + `[+]` to add bars (up to 99); `[RECORD]`+`[–]` removes them. To double a loop you already made, press `[RECORD]` then `[SHIFT]+[+]` — it duplicates the pattern into the new length so you can vary the second half.

**Q: How do I erase one wrong note?**
Hold `[ERASE]` + the pad — works even while playing. Hold several pads to clear several at once.

**Q: How do I wipe an entire pattern?**
Hold `[ERASE]` + the group pad.

**Q: How do I clear a whole scene?**
Hold `[ERASE]` + `[MAIN]` for about two seconds.

**Q: I made a mistake — how do I undo?**
`[SHIFT]+[GROUP B]`. There's a single level of undo; the umbrella icon on screen lights when one is available.

**Q: My new recording is layering on top of the old one. How do I overwrite instead?**
Recording overdubs by default. To replace as you go: `[RECORD]` → `[ERASE]` → `[+]`, then record the new take.

**Q: How do I set how hard or soft a step hits?**
On the selected step, hold `[SHIFT]` + turn `[KNOB X]` for velocity. `[SHIFT]` + `[KNOB Y]` sets the note's length.

**Q: How do I nudge a note slightly off the grid for feel?**
Hold `[SHIFT]` + the pad, then `[–]`/`[+]` to move that note's timing.

**Q: My pads ignore how hard I hit them.**
Velocity sensitivity is OFF from the factory. `[SHIFT]+[ERASE]`, type `301`, `[ENTER]`. (`300` turns it back off.)

**Q: How do I copy and paste a pattern or a bar?**
`[SHIFT]+[GROUP C]` copies (once = one bar, twice = the whole pattern); `[SHIFT]+[GROUP D]` pastes.

**Q: I want a fresh pattern to try an idea without losing this one.**
`[SHIFT]+[GROUP A]` jumps to the next empty pattern for that group.

## Category: Scenes, patterns & building a song

**Q: I've made a bunch of loops — now what? How do these become a song?**
Commit them into sections. `[SHIFT]+[MAIN]` snapshots the current scene and gives you a duplicate; change something (add a fill, mute a part), then commit again. Stack scenes this way, then hold `[MAIN]+[ENTER]` for song mode and chain them in order.

**Q: What exactly does "commit" do, and why does everyone talk about it?**
It saves the current scene *and* duplicates it, so you can freely change the next section's patterns without losing what you had. Think of it as version control for your arrangement — and you never have to stop the music.

**Q: How do I move between scenes?**
Hold `[MAIN]`, then `[–]`/`[+]` (or type a scene number).

**Q: How do I use a different pattern for one group inside a scene?**
Hold that group's pad + `[–]`/`[+]` to select its pattern.

**Q: My pattern numbers jump around unpredictably as I commit scenes.**
That's normal — committing spins up new patterns and the numbering isn't strictly sequential. Don't chase pattern numbers; think in scenes (sections) instead. The pad settings and sequences are what matter.

**Q: How do I set the actual song order / arrangement?**
Hold `[MAIN]+[ENTER]` to enter song mode. Add scene slots and set which scene plays at each position; `[SHIFT]+[PLAY]` plays the song from the top. Song position is independent of scenes, so you can reorder freely.

## Category: Sounds, samples & the library

**Q: Where do my recorded samples live? Are they stuck to one project?**
They go into one global sample library (up to 999 slots / 128 MB). A sample you record is available to *any* project — only the pad *assignments* are saved per project.

**Q: How are the built-in sounds organized?**
By type and number: kicks `1–99`, snares `100–199`, hi-hats `200–299`, percussion `300–399`, bass `400–499`, melodic `500–599`.

**Q: How do I delete a sample I don't want?**
In `[SOUND]` mode select it, then hold `[ERASE]+[SOUND]`. This removes it from the device permanently.

**Q: How do I see a sample's name?**
In `[SOUND]` mode, hold the pad. Names only exist for samples you imported or renamed with the EP Sample Tool; factory/recorded ones may just show a number.

**Q: How do I get my own WAVs onto the device?**
Connect over USB-C and use the EP Sample Tool (teenage.engineering/apps/ep-sample-tool) to upload, name, and organize samples.

**Q: Can I run out of space?**
Yes — 999 samples or 128 MB, whichever comes first. Delete unused samples to make room. Lower-sample-rate files take less space.

## Category: Sampling

**Q: How do I sample something?**
Press `[SAMPLE]`, use `[–]`/`[+]` to pick the input (mic, line-in, resample, USB), hold a pad to record, release to stop. `[MAIN]` exits.

**Q: How do I sample when I need both hands (guitar, singing)?**
Hands-free sampling: in sample mode hold `[SHIFT]` + a pad to start, play/sing, then press `[SAMPLE]` to stop. Set your gain and threshold first so it captures cleanly.

**Q: How do I sample my whole beat down to one pad (resample)?**
Set the input to "resample," or just jump into sampling while the pattern is playing — it samples the current pattern. Great for freeing up voices or mangling the full mix as one sound.

**Q: How do I sample an exact number of bars?**
With hands-free sampling engaged, press `[–]`/`[+]` to choose the number of bars, then press `[PLAY]`.

**Q: How do I choose which slot a new sample lands on?**
Hold `[SOUND]`, type a number on the pads (e.g., 3·0·3), press `[ENTER]`, then hit `[SAMPLE]`.

**Q: How do I match a sampled loop to my project's tempo?**
Hold `[SAMPLE]+[TEMPO]` to detect the incoming tempo, or use TIME (time-stretch) in sound edit to conform it.

## Category: Shaping sounds (sound edit)

**Q: How do I cut the silence or junk off the front/back of a sample?**
`[SHIFT]+[SOUND]` → Trim. `[KNOB X]` sets the start point, `[KNOB Y]` sets the length. Hold `[SHIFT]` while turning to zoom into a ~1-second window for precision.

**Q: How do I make a trim permanent (and save space)?**
In the Trim page, hold `[SHIFT]+[SOUND]` to crop the file on disk. This is destructive and can't be undone, so trim a copy if you're unsure.

**Q: How do I make a sound snappier, or give it a fade-in or a tail?**
Envelope in sound edit: `[KNOB X]` = attack (fade-in), `[KNOB Y]` = release (let it ring vs. cut off hard). Snappy snares, soft pads — all here.

**Q: How do I change a sample's pitch or pan?**
In sound edit each sound has its own pitch/tune and pan (plus level and envelope), independent of the others.

**Q: What are play modes — one-shot, key, legato?**
One-shot plays the whole sample per tap (good for drums). Key/gated plays only while you hold the pad. Legato is smooth note-to-note (good for melodic lines). Set per sound in sound edit.

**Q: My open and closed hi-hats ring over each other. How do I make them cut each other off?**
Put them in the same mute (choke) group in sound edit — triggering one silences the other, like a real hi-hat.

**Q: How do I stretch a sample to fit the tempo without changing its pitch?**
TIME (time-stretch) in sound edit matches the sample's BPM to the project. The time-stretch indicator lights when it's active. Heavily stretched material sounds cleaner on recent firmware.

## Category: Timing & groove

**Q: How do I snap notes to the grid (quantize) — or turn it off?**
`[TIMING]`, then `[–]`/`[+]` toggles quantize vs. free time. `[SHIFT]+[TIMING]` quantizes just one pad and leaves the rest.

**Q: How do I change the step resolution (1/8, 1/16, triplets)?**
`[TIMING]` + turn `[KNOB X]`.

**Q: How do I add swing / groove?**
`[TIMING]` + turn `[KNOB Y]` (affects 1/8 and 1/16 notes).

**Q: How do I get fast hi-hat rolls?**
Hold `[TIMING]` + a pad for note repeat. `[TIMING]` then `[SHIFT]`+pad latches it so you don't have to hold.

**Q: How do I set the tempo precisely?**
`[TEMPO]` + turn `[KNOB X]`, or hold `[TEMPO]` and type the BPM (40–399; use `·` for decimals). Tap `[TEMPO]` in rhythm for tap tempo.

**Q: How do I change the time signature?**
`[MAIN]+[TEMPO]`.

## Category: FX, mixing & performance

**Q: How do I add reverb or delay to a part?**
`[FX]`, `[–]`/`[+]` to choose the effect (delay, reverb, distortion, chorus, filter, or compressor), then raise the `[FADER]` to send the current group into it. One send effect per group.

**Q: What are the punch-in effects and how do I use them?**
While playing, hold `[FX]` and the 12 pads become momentary, pressure-sensitive performance effects you can layer for live mangling. Hold `[RECORD]` while you perform them to bake the moves into the track.

**Q: How do I solo one group to hear it on its own?**
Hold `[FX]` + that group pad (hold several to solo several). On recent firmware this also makes it the active edit group.

**Q: My kick and bass are fighting / the low end is muddy.**
Set up sidechain so the bass ducks when the kick hits: `[SHIFT]+[FX]` → `[+]` for sidechain; pick the source by holding a group pad and choosing a sound, then pick the destination groups with `[SHIFT]` + group pads.

**Q: How do I make the whole track louder and more "glued"?**
`[SHIFT]+[FX]` opens the output / master compressor.

**Q: How do I record a filter sweep or a fader move?**
Assign what the fader controls (hold `[FADER]` + a pad — e.g., a filter or level), then hold `[RECORD]` while you move it. Undo just that automation with `[ERASE]+[FADER]`.

**Q: How do I loop / stutter a section live?**
`[SHIFT]+[TEMPO]` drops a loop on the fly; hold `[SHIFT]+[TEMPO]` and release to set the loop length.

## Category: Hardware, I/O, sync & troubleshooting

**Q: Where do headphones / speakers plug in?**
The 3.5 mm output jack carries line/headphone out. The separate input jack is for sampling instruments or other gear.

**Q: How do I sync the K.O. II to other gear?**
Over SYNC (PO-style pulse) or MIDI in/out, including BLE (wireless) MIDI. It can be the clock leader or follow an external clock.

**Q: How do I power it? What batteries?**
USB-C, or 4× AAA batteries. Don't mix battery types (alkaline / rechargeable / carbon-zinc).

**Q: The screen shows E.10, E.11 or E.12.**
File-system error. Power off, then hold `[SHIFT]+[ERASE]` while powering on to format the drive (this erases your sounds). Update the firmware afterward.

**Q: The screen shows E.01, E.02 or E.03.**
A hardware fault (memory/codec). This isn't a settings fix — the unit needs servicing by Teenage Engineering.

**Q: Nothing I press does anything.**
You're probably in Lock mode (it engages if `[MAIN]` is held at power-up; "LOK" flashes). Restart the unit to clear it.

**Q: How do I update the firmware?**
Connect over USB-C and go to teenage.engineering/apps/update. Updates have added real features (arpeggiator, better time-stretch, sidechain tweaks), so it's worth staying current.

**Q: How do I back up my projects?**
Connect over USB-C and use TE's tools to manage and back up your content. *(Backup/restore has evolved across firmware — confirm the current method in the official guide before relying on it.)*

## Category: Beatmaking concepts (general — not device-specific)

**Q: What does "quantize" actually mean, and when should I turn it off? (concept)**
Quantize snaps your notes onto the timing grid so everything lands "on time." It's great for tight electronic drums, but turning it off (free time) keeps the natural push-pull of a live performance — useful for swung hats, ghost notes, and anything that should feel human.

**Q: What's a dead-simple drum pattern to start with? (concept)**
Four-on-the-floor: kick on every beat (1, 2, 3, 4). Add a snare or clap on beats 2 and 4 (the backbeat) and steady hats on the off-beats. That skeleton underlies most dance and pop music — build from there.

**Q: Why does swing make a beat feel good? (concept)**
Swing delays every other subdivision slightly, so pairs of notes fall long-short instead of evenly. That tiny lag is what gives hip-hop and house their groove instead of a stiff, robotic feel. A little goes a long way.

**Q: My loop feels repetitive after a few bars. How do I fix it? (concept)**
Introduce change: mute a part for a bar, add a fill at the end of every 4 or 8 bars, vary velocity, drop the bass out before a chorus, or bring an element in gradually. On the K.O. II, commit variations as new scenes and arrange them so the track evolves.

**Q: How do I layer sounds for a bigger drum? (concept)**
Stack complementary samples on different pads and trigger them together — e.g., a deep kick for weight plus a clicky one for attack, or a snare plus a clap for body and snap. Trim and tune them so they hit as one.

**Q: Why is my mix muddy, and how do I clean up the low end? (concept + device)**
Usually too much overlapping low frequency. Give the kick and bass their own space (sidechain the bass to the kick), keep only one main low-end element at a time, and pan mid/high sounds apart for width. On the K.O. II, sidechain lives under `[SHIFT]+[FX]`.

**Q: What is gain staging, and how do I avoid clipping/distortion? (concept)**
Keep levels healthy but not maxed at every stage — sampling input, individual sounds, and the master. Leave a little headroom so peaks don't crackle. If a sample distorts, lower its level or the input gain rather than turning everything else down.

**Q: How should I pan things for a wider mix? (concept)**
Keep the core (kick, snare, bass, lead vocal) centered, and spread supporting elements (hats, percussion, doubles) left and right. Small, tasteful moves usually beat hard extremes.

**Q: How do I structure a whole song? (concept)**
Think in sections — intro, verse, build, chorus/drop, breakdown, outro — and create tension and release by adding and removing elements. On the K.O. II each section is a scene; chain them in song mode.

**Q: What are ghost notes, and how do I use velocity for feel? (concept)**
Ghost notes are quiet hits between the main ones (soft snares/hats) that add groove. Vary velocity so accents land hard and in-betweens sit back — this is what separates a lifelike beat from a flat one. Turn on velocity (`301`) first.

**Q: How do I actually finish a track instead of tweaking forever? (concept)**
Set a stopping point: arrange a full intro-to-outro pass, do one cleanup pass (levels, mutes, a fill or two), then export/record it and move on. Comparing to a reference track you love helps you decide when it's "done" rather than chasing perfection.

---

# PART 2 — LEARN TAB  (guided lessons)

> Each lesson = `{ cat, level, t (title), s (subtitle), steps[], tip }`. Levels: **Basics**, **Core**, **Advanced**. Keep the existing "make your first beat" lesson (see Basics #2 as the canonical version).

## Basics

**1. Understand the structure** — *Basics · Concepts*
How the K.O. II thinks, in one minute.
1. A **project** is one song — you have 9 slots.
2. Inside it are four **groups** (`[A]`–`[D]`) — think drums, bass, melody, your samples — each with 12 pads.
3. A **pattern** is a sequence for one group (up to 99 bars).
4. A **scene** is all four groups' current patterns playing together — one section.
5. A **song** chains scenes into an order.
*Tip: When you feel lost, press `[MAIN]` — that's home, where projects, scenes and recording live.*

**2. Make your first beat, live** — *Basics · Drums*
New project to a committed loop in a minute.
1. Hold `[MAIN]+[pad 6]` for a clean, empty project.
2. `[SOUND]` → `[GROUP A]` → tap a pad → dial in a kick with `[–]`/`[+]`. Fill a few pads with drums.
3. `[MAIN]`, then tap `[RECORD]` then `[PLAY]` — you'll hear a 4-beat count-in.
4. Play the pads to punch out a beat. `[PLAY]` stops.
5. Like it? `[SHIFT]+[MAIN]` to commit it as a scene.
*Tip: Pads feel flat? Velocity ships off — `[SHIFT]+[ERASE]`, type `301`, `[ENTER]`.*

**3. Load and audition sounds** — *Basics · Sounds*
Get the right sounds under your fingers.
1. `[SOUND]` → pick a group → tap the pad you want to fill.
2. Scroll with `[–]`/`[+]`; hold `[SHIFT]+[–]`/`[+]` to jump ten at a time.
3. Remember the map: kicks `1–99`, snares `100–199`, hats `200–299`, perc `300–399`, bass `400–499`, melodic `500–599`.
4. Hold a pad to preview a sample's name.
*Tip: Build a kit across the pads before you sequence — it's faster than swapping sounds mid-flow.*

**4. Set tempo and time signature** — *Basics · Timing*
Get the clock right first.
1. `[TEMPO]`, then turn `[KNOB X]` for a rough BPM.
2. For an exact value, hold `[TEMPO]` and type it (40–399; `·` for decimals).
3. Tap `[TEMPO]` in rhythm to set it by feel.
4. Need 3/4 or 6/8? `[MAIN]+[TEMPO]` changes the time signature.
*Tip: Set tempo before you record — changing it later is fine, but starting right saves re-feel.*

**5. Turn on velocity and play with dynamics** — *Basics · Feel*
Make the pads respond to your touch.
1. `[SHIFT]+[ERASE]` to open system settings.
2. Type `301`, `[ENTER]` (that's velocity ON; `300` is off).
3. Now record and vary how hard you hit — accents land loud, ghost notes sit soft.
*Tip: Per-step control too: on a step, `[SHIFT]+[KNOB X]` sets velocity, `[SHIFT]+[KNOB Y]` sets length.*

## Core

**6. Program a house beat by step** — *Core · Drums*
Exact placement, no timing skills required.
1. `[MAIN]`, hold `[SHIFT]+[–]` to reach step `1.1.1`.
2. Hold `[RECORD]` + kick pad on `1.1.1`, `1.2.1`, `1.3.1`, `1.4.1` (four-on-the-floor).
3. Add a clap/snare on `1.2.1` and `1.4.1` (backbeat).
4. Add hats on the off-beats.
*Tip: Set the grid first — `[TIMING]+[KNOB X]` for 1/16, then place.*

**7. Program a boom-bap hip-hop beat** — *Core · Drums*
Laid-back and swung.
1. Kick on 1 and the "and" of 2-ish; snare hard on 2 and 4.
2. Steady 1/8 hats.
3. `[TIMING]+[KNOB Y]` to add swing so it leans back.
4. Vary hat velocity for a human feel.
*Tip: Nudge a snare slightly late (`[SHIFT]+pad`, then `[–]`/`[+]`) for that behind-the-beat pocket.*

**8. Program a trap beat with rolling hats** — *Core · Drums*
Fast hats without the finger cramp.
1. Lay a slow kick pattern and a snare/clap on beat 3.
2. Put hats on a pad; hold `[TIMING]` + that pad for note repeat.
3. Change the repeat rate with `[KNOB X]` mid-roll for triplet bursts.
4. `[TIMING]` then `[SHIFT]`+pad latches the roll hands-free.
*Tip: Ride the fader on the hats' volume while rolling for classic trap dynamics.*

**9. Add swing and groove** — *Core · Feel*
Get the beat to breathe.
1. `[TIMING]` + turn `[KNOB Y]` to add swing (1/8 and 1/16).
2. A little pushes the groove; too much drags — dial to taste.
3. Toggle quantize off (`[TIMING]` → `[+]`) for even looser feel.
*Tip: Swing the hats more than the kick/snare for a natural bounce.*

**10. Add ghost notes and dynamics** — *Core · Feel*
The difference between a demo and a groove.
1. With velocity on, record your main hits hard.
2. Add quiet in-between snare/hat hits (ghost notes) at low velocity.
3. Nudge a few notes slightly off-grid for life.
*Tip: Fix any that land too loud per-step with `[SHIFT]+[KNOB X]`.*

**11. Build a fill** — *Core · Arrangement*
End your 4 or 8 bars with a moment.
1. Duplicate/extend the pattern so you have a spare bar (`[RECORD]+[+]`).
2. On the last bar, add a snare roll or tom run (note repeat helps).
3. Drop an element out just before the fill for contrast.
*Tip: Commit the fill version as its own scene so you can drop it in only when you want it.*

**12. Play a bassline in Keys mode** — *Core · Bass & melody*
Turn one sample into an instrument.
1. Select a bass pad, press `[KEYS]` — the pads become a chromatic keyboard.
2. `[KEYS]+[–]`/`[+]` changes octave; `[KEYS]`+pad sets the root note.
3. Record it live or by step.
*Tip: Keep basslines simple and locked to the kick; space is your friend.*

**13. Write a melody or chords in Keys mode** — *Core · Bass & melody*
Get a hook going.
1. Put a melodic sample on a pad, press `[KEYS]`.
2. Find a short motif — 3–5 notes is plenty.
3. Set the sample's play mode to legato in sound edit for smooth lines.
*Tip: Match the melody's key to your bass root so they agree.*

**14. Use the arpeggiator** — *Core · Bass & melody*
Instant motion from held notes.
1. Enter `[KEYS]` mode.
2. Hold `[TIMING]` and press multiple pads — they arpeggiate.
3. Works when the sample's play mode is one-shot or legato.
*Tip: Change step rate with the timing knob to reshape the arp on the fly.*

**15. Sample your guitar (or any instrument)** — *Core · Sampling*
Get real playing into the box.
1. Plug into the 3.5 mm input (or use the built-in mic).
2. `[GROUP D]` → `[SAMPLE]` → `[–]`/`[+]` to choose line-in. Set level with `[KNOB X]`.
3. Hold an empty pad and play your riff; release to stop. Tap the pad to audition.
4. `[MAIN]` to exit and sequence it.
*Tip: Hold `[SAMPLE]+[TEMPO]` while playing so the project matches your riff's tempo.*

**16. Sample from your phone or another source (line-in)** — *Core · Sampling*
Grab a loop, a vocal, anything.
1. Cable your source into the input; `[SAMPLE]` → `[–]`/`[+]` → line-in.
2. Set gain with `[KNOB X]` so it's strong but not clipping.
3. Hold a pad to capture; release to stop.
*Tip: Sample a couple of extra seconds — you can always trim tight afterward.*

**17. Hands-free sample yourself** — *Core · Sampling*
When you need both hands.
1. In sample mode, set input, gain and threshold.
2. Hold `[SHIFT]` + a pad to start hands-free — the K.O. II holds the button.
3. Sing/play/strum; press `[SAMPLE]` to stop.
*Tip: The threshold lets recording trigger on the first sound so you don't capture silence.*

**18. Resample your whole beat to one pad** — *Core · Sampling*
Free up voices or mangle the mix.
1. Get your pattern playing.
2. Jump into `[SAMPLE]` and choose the resample source (or start sampling while it plays).
3. Capture the pattern to a new pad, then chop or FX it as one sound.
*Tip: Use `[–]`/`[+]` in hands-free to grab an exact number of bars.*

**19. Chop a breakbeat** — *Core · Sampling*
Turn a loop into playable slices.
1. Get a loop onto a pad; `[SHIFT]+[SAMPLE]` to enter Chop.
2. Pick an empty group for the slices (it overwrites that group's pads).
3. Auto-chop: `[–]`/`[+]` sets slice count. Or LIVE chop: tap pads in time to place cuts.
4. Refine each slice's in/out with `[KNOB X]`/`[KNOB Y]`.
*Tip: Re-order the slices across the pads to invent a brand-new groove.*

**20. Choose where a sample lands** — *Core · Sampling*
Stay organized.
1. Hold `[SOUND]`, type a slot number on the pads (e.g., 3·0·3), `[ENTER]`.
2. Now hit `[SAMPLE]` and record — it goes to that slot.
*Tip: Reserve slots by type so your kits stay tidy across projects.*

**21. Trim a sample tight** — *Core · Sound edit*
Cut straight to the good part.
1. `[SHIFT]+[SOUND]` → Trim.
2. `[KNOB X]` = start point, `[KNOB Y]` = length.
3. Hold `[SHIFT]` while turning to zoom in for fine edits.
*Tip: To make the cut permanent and save space, hold `[SHIFT]+[SOUND]` in the Trim page — but it's destructive.*

**22. Shape a sound with the envelope** — *Core · Sound edit*
Snappy or soft, your call.
1. `[SHIFT]+[SOUND]` → Envelope.
2. `[KNOB X]` = attack (fade-in), `[KNOB Y]` = release (tail vs. hard cut).
3. Short attack + short release = punchy; slow attack = pad-like swell.
*Tip: A touch of release on drums glues them; too much makes them wash out.*

**23. Set play mode and choke your hats** — *Core · Sound edit*
Make hats behave like real ones.
1. Select a sound, `[SHIFT]+[SOUND]`.
2. Set play mode: one-shot (drums), key/gated (hold to sustain), legato (smooth melodic).
3. Put open + closed hats in the same mute (choke) group so one cuts the other.
*Tip: Choke groups also work for anything that shouldn't overlap — like alternate vocal chops.*

**24. Time-stretch a sample to your tempo** — *Core · Sound edit*
Fit a loop to the project.
1. `[SHIFT]+[SOUND]` → TIME.
2. Match the sample's BPM to the project; the time-stretch indicator lights when active.
*Tip: For big tempo changes, expect some character change — sometimes that's the sound you want.*

## Advanced

**25. Build a song with commit + scenes** — *Advanced · Arrangement*
Stack sections without stopping.
1. Get a loop you like.
2. `[SHIFT]+[MAIN]` — commit. It freezes the scene and hands you a copy.
3. Change the copy (fill, mute, new sound); commit again.
4. Repeat to stack intro → verse → chorus as scenes.
*Tip: Commit is not "save to disk" (that's automatic) — it's "snapshot this and give me a fresh copy."*

**26. Arrange scenes in song mode** — *Advanced · Arrangement*
Turn sections into a track.
1. Hold `[MAIN]+[ENTER]` to open song mode.
2. Add scene slots and set which scene plays at each position.
3. `[SHIFT]+[PLAY]` plays the song from the top.
*Tip: Song position is independent of scenes, so you can reuse a chorus scene many times.*

**27. Copy and paste patterns and bars** — *Advanced · Workflow*
Reuse without redoing.
1. `[SHIFT]+[GROUP C]` copies (once = a bar, twice = the pattern).
2. Move to the destination and `[SHIFT]+[GROUP D]` to paste.
*Tip: Copy a solid 1-bar groove, paste it across bars, then vary just the last one.*

**28. Record fader automation** — *Advanced · Performance*
Movement that plays itself back.
1. Assign the fader: hold `[FADER]` + a pad (filter, level, FX send…).
2. Hold `[RECORD]` and move the fader as it plays.
3. Erase just that automation with `[ERASE]+[FADER]`.
*Tip: A slow filter open across 8 bars is an easy, satisfying build.*

**29. Add send effects per group** — *Advanced · FX & mixing*
Space and color.
1. `[FX]` → `[–]`/`[+]` to pick delay, reverb, distortion, chorus, filter, or compressor.
2. Raise the `[FADER]` to send the current group in.
3. One send per group — choose what each part needs most.
*Tip: A short delay on a lead and a little reverb on the snare go a long way; don't drown everything.*

**30. Perform with punch-in FX** — *Advanced · Performance*
The K.O. II's signature party trick.
1. Start playback.
2. Hold `[FX]` — the 12 pads become momentary, pressure-sensitive effects.
3. Stack them for stutters, filters, tape-stops and glitches.
4. Hold `[RECORD]` while you perform to keep the moves.
*Tip: Practice one effect at a time; muscle memory here is what makes live sets feel alive.*

**31. Set up sidechain (kick ducks bass)** — *Advanced · FX & mixing*
Make room in the low end.
1. `[SHIFT]+[FX]` → `[+]` to reach sidechain.
2. Choose the source: hold a group pad, pick the sound (usually the kick).
3. Choose the destination groups: `[SHIFT]` + the group pads (usually the bass).
*Tip: A subtle duck cleans up mud; a heavy one becomes an audible pump — both are valid looks.*

**32. Sync the K.O. II to other gear** — *Advanced · Setup*
Play in time with the rest of your rig.
1. Connect via SYNC (pulse) or MIDI in/out (including BLE).
2. Decide who's the clock leader and set the other to follow.
3. Start the leader; the follower locks to its tempo.
*Tip: If timing drifts over BLE, a wired connection is rock-solid.*
