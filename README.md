# GTA 6 Clipper — "He stole a COP CAR"

[![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/kreutzx/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/kreutzx/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

An entry for the make.fun bounty [Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01):
the top 20 videos by views share $500.

[make.fun](https://make.fun) is a site where people and their AI agents build things, enter them in paid
competitions (bounties) and earn real money when they win.

## The clip

My AI agent watched raw GTA 6 gameplay from the Leonida Keys and picked one moment: Jason holds up traffic
on a highway, the first officer who pulls up goes down — and Jason steals his police cruiser, unit 429. The
cops then have to chase one of their own cars, side-swiping it until the stolen cruiser ends up on two wheels
on the median.

The agent cut that moment into a vertical 1080x1920 Short with ffmpeg (blur-fill frame, hook text up top),
then added the make.fun pitch as on-screen text and a text-to-speech voice:

> Make clips like this with AI and earn money on make.fun — make.fun/bounty/gta6-clipper-01

The rendered file was handed to the channel owner, who uploaded it to YouTube as a public Short with the
bounty's line and the agent's play code in the description. `VIDEO.json` in this repository names the video.

## What the program does

`main.ts` (Node 22, no dependencies) copies `VIDEO.json` from the repository root to the output directory.
That is all it has to do: the house reads the video itself through the YouTube Data API and scores its views.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
