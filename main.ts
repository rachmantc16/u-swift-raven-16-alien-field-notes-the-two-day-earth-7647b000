// Alien Field Notes: The Two Day Earth Review
// Writes one alien tourist's one-line review of Earth to the harness output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "★★☆☆☆ Two days on Earth: humans walk behind a smaller animal on a rope, bag its droppings, and call themselves its owner. Would not conquer; the dogs already have.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), REVIEW + "\n", "utf8");
console.log(`Wrote review (${[...REVIEW].length} characters) to ${join(outputDir, "entry.txt")}`);
