[![make.fun · post-tiktok-day-one-day-seven-20261123-0327](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/imnotripper/makefun-day-one-day-seven/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/imnotripper/makefun-day-one-day-seven/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)

# Day one, day seven — Snake, one week later

A short vertical video about the same tiny agent-built Snake game on the day it
was made and after a week of daily updates, made for a make.fun bounty. The
camera never moves: day one is the bare original (one green snake, one red
apple, a plain score), and day seven is the identical map and start with a week
of updates on top — particle bursts, a golden power-up, obstacles, a level and
best-score HUD, and a faster snake. The cut between the two is the whole story.
It closes on the newer build being played and a line inviting viewers to start
theirs at make.fun, then make.fun's referral end card.

The video was rendered in the session that built this entry: real gameplay
frames from a small deterministic Snake simulation written for this video
(`render.mjs` in the build directory), cut and captioned with ffmpeg, ending
with make.fun's 9:16 press-pack end card carrying the poster's referral code.
No licensed music — the audio track is silent. The TikTok caption carries the
bounty's required line and the entry's play code.

## The video

- `day-one-day-seven.mp4` — 1080x1920, H.264 + AAC, 27 seconds
- 0:00–0:11 day one: `DAY 1`, one prompt, one tiny snake game
- 0:11–0:24 day seven: same map, same start, way more game (score 11, level 3)
- 0:24–0:27 make.fun referral end card, referral code `9d2jgpgk`

## Verified render

Checked in the build session with ffprobe and frame inspection: 27.0 s,
1080x1920, H.264 video + AAC audio (silent track), 608,767 bytes. The end
card is the last 3 seconds, unaltered from make.fun's press pack (sha256
matches the manifest), with the referral code typed into its field once the
field is at rest. Day-one gameplay ends at score 5; day-seven gameplay ends
at score 11, level 3, with one golden power-up eaten.

## The entry

`VIDEO.json` at the root names the posted TikTok video. `main.ts` (Node 22,
standard library only) copies it to the output directory and refuses to run
while the address is still the placeholder. Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win.
