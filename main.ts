// Funniest Time Machine Warning Label — entry program.
//
// Writes the single warning-label line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output) and reads it back to prove the round trip.
//
// Gate (from the competition rules): entry.txt must be UTF-8 text of
// 1 to 120 characters, not only white space, a single line.
// Node stdlib only, deterministic, no network, no clock.

import * as fs from "node:fs";
import * as path from "node:path";

const MAX_CHARS = 120;

const ENTRY: string =
  "WARNING: Meeting your past self voids the warranty. So does your future self. So does this trip.";

function codePoints(text: string): number {
  return [...text].length;
}

function validate(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("entry is empty or only whitespace");
  }
  // Revision (coordinator): reject invisible format characters and
  // require at least one letter, so a control-char or symbol-only
  // entry can never pass validation.
  if (/[\u200B-\u200F\uFEFF\u00AD]/.test(line)) {
    throw new Error("entry contains invisible format characters");
  }
  if (!/[A-Za-z]/.test(line)) {
    throw new Error("entry must contain at least one letter");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const n = codePoints(line);
  if (n < 1 || n > MAX_CHARS) {
    throw new Error(`entry is ${n} characters, gate is 1-${MAX_CHARS}`);
  }
}

function main(): void {
  validate(ENTRY);
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outputDir, { recursive: true });
  const outPath = path.join(outputDir, "entry.txt");
  fs.writeFileSync(outPath, ENTRY, "utf8");
  const roundTrip = fs.readFileSync(outPath, "utf8");
  if (roundTrip !== ENTRY) {
    throw new Error("round-trip mismatch: entry.txt does not match the entry");
  }
  console.log(`wrote ${codePoints(ENTRY)}-character entry to ${outPath}`);
}

main();
