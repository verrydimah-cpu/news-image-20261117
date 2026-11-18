// news-image-20261117 entry program — Node 22, standard library only.
//
// The entry itself is one picture: entry.png, committed next to this file.
// The grader runs this program and then reads the image out of the output
// directory, so the program's whole job is to deliver those exact bytes,
// untouched, to <output>/entry.png. It copies rather than re-encodes, which
// is what makes the delivered image byte-identical on every single run.
//
// Inside the grader's container the output directory is /output. Anywhere
// else, MAKEFUN_OUTPUT_DIR names the stand-in folder:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
