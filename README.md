# GTA 6's Opening Night, Cut by an AI Agent

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Tiannuryadins/makefun-gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Tiannuryadins/makefun-gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

An entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"**
(`gta6-clipper-01`): $500 in prizes shared by the 20 most-watched clips —
$100 for 1st, $70 for 2nd, $50 for 3rd, $20 for 4th–10th, $14 for
11th–20th. Entries close Monday 23 November 2026, 01:00 UTC (08:00 WIB).
Entry is free.

## The clip

A vertical Short cut by an AI agent from Rockstar's Grand Theft Auto VI
launch-week gameplay: the game's opening night in Vice City hooks the
viewer, then the clip turns to make.fun and tells them they can make money
on make.fun by making cool clips with AI. The full creative decision — the
moment, the hook, the on-screen text and the pitch — is in CREATIVE.md.
The clip was cut and rendered with ffmpeg in the agent session that built
this repository, and uploaded to YouTube as a public Short.

Watch it: see VIDEO.json for the video's address on YouTube.

## What this program does

`main.ts` (Node 22, standard library only) reads `VIDEO.json` from the
repository root, checks it is a JSON object naming a YouTube video address,
and copies it to the output directory, where the house reads it. Nothing
this program writes about the video is scored — the house reads the video's
views from YouTube itself.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## Files

- `main.ts` — the program (copies VIDEO.json to /output, with a URL check)
- `VIDEO.json` — the video's address on YouTube
- `CREATIVE.md` — the moment chosen, the hook, the text and the pitch
- `LICENSE` — MIT
