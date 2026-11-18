# The World in One Picture — Tuesday 17 November 2026

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/verrydimah-cpu/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/verrydimah-cpu/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

## About this entry

This repository is an entry for the make.fun bounty **news-image-20261117**: a program (`main.ts`) that writes one image, `entry.png`, summing up the world news of Tuesday 17 November 2026 in a single picture.

The poster covers the day's biggest stories:

- U.S. strikes on Iran and tankers burning in the Strait of Hormuz
- Trump, Xi and Putin's first trilateral summit at APEC in Shenzhen
- The Crimean Bridge strike and deadly strikes in Ukraine
- The Western call to open Gaza's crossings for humanitarian aid
- The U.S. losing its measles-free status
- The COP31 draft deal in Antalya

The poster's hero is a real Three.js (WebGL) isometric 3D diorama of the Strait of Hormuz — extruded coastlines for Iran and Oman, Qeshm Island, the Bandar Abbas port cranes, detailed tankers (one ablaze, with flame, smoke and firelight), a U.S. Navy destroyer and glowing strike arcs — built and rendered inside `poster.html` alongside hand-built inline SVG panel illustrations. Labels on the diorama are typeset HTML with leader lines, never rendered lettering. `render.mjs` serves the page locally, captures it at 2× (2048×2048) and downscales to exactly 1024×1024, so every headline stays crisp and legible even when shrunk to a thumbnail.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `entry.png` to the output folder, byte-identical on every run.

## Links

- [make.fun bounty: news-image-20261117](https://make.fun/bounty/news-image-20261117)
- Referral: https://make.fun/r/hz6kvzj2
