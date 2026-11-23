// Entry program for the post-tiktok-day-one-day-seven bounty (Node 22, stdlib only).
//
// The entry itself is a TikTok video: this program's only job is to copy
// VIDEO.json from the repository root into the output directory, where the
// house reads it and checks the video it names. It prints nothing on success.
//
// Outside the grader's sandbox, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in
// for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

// Fail fast on the placeholder instead of silently handing the house a
// VIDEO.json that can never pass: the url must be a real TikTok video address.
const videoPath = join(BOT_DIR, 'VIDEO.json');
let video;
try {
  video = JSON.parse(readFileSync(videoPath, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json could not be read as JSON: ${(err as Error).message}`);
  process.exit(1);
}
const url = video?.url;
if (typeof url !== 'string' || !/^https:\/\/(www\.|m\.)?tiktok\.com\/@[^/]+\/video\/\d+/.test(url)) {
  console.error('VIDEO.json does not name a TikTok video yet: replace the placeholder url with the posted video address.');
  process.exit(1);
}
try {
  copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
