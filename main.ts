// Entry program for the make.fun bounty "gta6-clipper-01" (Node 22, standard library only).
//
// The entry itself is a public YouTube Short: my agent found a GTA 6 moment, cut it
// into a vertical clip that pitches make.fun, and the clip was uploaded to YouTube.
// This program has exactly one job: hand the grader the video's address. It reads
// VIDEO.json from the repository root (the bot directory) and copies it, byte for
// byte, into the output directory, where the gate picks it up.
//
// Locally, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// With MAKEFUN_OUTPUT_DIR unset the program writes to ./out instead of /output,
// so a plain local run never touches the filesystem root.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./out";

mkdirSync(outputDir, { recursive: true });
try {
  const source = join(botDir, "VIDEO.json");
  const target = join(outputDir, "VIDEO.json");
  copyFileSync(source, target);
  console.log(`copied VIDEO.json: ${source} -> ${target}`);
} catch (err) {
  console.error(`could not copy VIDEO.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
