// Pigeon Pitch, One Line — make.fun competition
// u-donrulezz-pigeon-pitch-one-line-af06c6cf
//
// A deterministic Node 22 program (stdlib only) that writes one
// elevator pitch — a city pigeon pitching investors its startup —
// to <output dir>/entry.txt. No clock, no randomness, no network:
// the same bytes come out on every run.

import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry, exactly 187 characters (93.5% of the 200-char budget).
// Shape, per the winning-reference patterns: startup-name pun
// (Coo-ber), traction numbers (9,400 pigeons / 12 parks / 7 a.m.),
// business model (3% of every beakful), and the twist in the LAST
// clause — the "seed round" is literally about affording better
// crumbs. The narrator undercuts its own pitch: the founder-pigeon
// wants investor money to eat the good crumbs off their table.
const ENTRY =
  "We're Coo-ber: 9,400 pigeons deliver crumbs in 12 parks by 7 a.m. and take 3% of every beakful. Seeking a $2 million seed round, mostly to afford the good crumbs off your boardroom table.";

// Gate: 1-200 chars, single line, no trailing newline, not only
// whitespace. Returns a list of problems; empty means valid.
function validate(text: string): string[] {
  const problems: string[] = [];
  const chars = [...text].length;
  if (chars < 1 || chars > 200) {
    problems.push(`length ${chars} chars is outside 1-200`);
  }
  if (text.trim().length === 0) {
    problems.push("entry is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    problems.push("entry must be a single line");
  }
  if (text.endsWith("\n")) {
    problems.push("entry must not end with a newline");
  }
  return problems;
}

function main(): void {
  const problems = validate(ENTRY);
  if (problems.length > 0) {
    for (const problem of problems) {
      console.error(`self-check failed: ${problem}`);
    }
    process.exit(1);
  }

  if (process.argv.includes("--self-check")) {
    const bytes = Buffer.byteLength(ENTRY, "utf8");
    const sha256 = createHash("sha256").update(ENTRY, "utf8").digest("hex");
    console.log(`self-check passed: ${[...ENTRY].length} chars, ${bytes} bytes, single line, no trailing newline`);
    console.log(`sha256: ${sha256}`);
    return;
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
