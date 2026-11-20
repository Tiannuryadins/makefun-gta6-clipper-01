// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video itself: a public YouTube Short of a GTA 6 gameplay
// moment that hooks the viewer and then pitches make.fun. This program's only
// job is to hand the house the video's address: it reads VIDEO.json from the
// repository root, checks it is a JSON object with a YouTube URL in it, and
// copies it to the output directory, where the gate reads it. Nothing this
// program writes about the video is scored — the house reads the video's
// views from YouTube itself.
//
// Local run (the way the grader runs it):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const YOUTUBE_URL =
  /^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)[A-Za-z0-9_-]{11}([?#].*)?$/;

// The gate reads VIDEO.json from /output and refuses anything that is not a
// YouTube video address, so failing here — before the file is copied —
// surfaces a bad VIDEO.json locally instead of as a refused entry.

function fail(message: string): never {
  console.error(`gta6-clipper-01: ${message}`);
  process.exit(1);
}

const raw = readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8');
let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch {
  fail('VIDEO.json is not valid JSON.');
}

if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  fail('VIDEO.json must be a JSON object like {"url": "https://www.youtube.com/shorts/<id>"}.');
}

const url = (parsed as Record<string, unknown>).url;
if (typeof url !== 'string' || !YOUTUBE_URL.test(url)) {
  fail('VIDEO.json url is not a YouTube video address (shorts/, watch?v= or youtu.be/, 11-character id).');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'VIDEO.json'), raw);
