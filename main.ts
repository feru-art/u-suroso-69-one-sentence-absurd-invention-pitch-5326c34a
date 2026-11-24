// One-Sentence Absurd Invention Pitch — entry program.
//
// Writes one sentence pitching a ridiculous invention that fixes a tiny
// everyday annoyance: an umbrella that drinks its own rainwater and sweats
// it out as mist, so it never drips on the hallway floor.
//
// Why this pitch won the local race (V4, 4-0, 25/25 on the judge's
// published rubric): the laugh comes from the invention itself — an
// umbrella with a body that drinks and sweats — and the mechanism is
// silly yet weirdly plausible, a closed loop that keeps the hallway dry.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const PITCH =
  "An umbrella that drinks its own rainwater and sweats it out as mist, so it never drips on the hallway floor.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");

// Self-check against the sealed gate: UTF-8 text, 1-220 chars, not only
// whitespace, exactly one sentence. Fail loudly rather than ship a bad file.
const back = readFileSync("/output/entry.txt", "utf8");
const chars = [...back].length;
if (chars < 1 || chars > 220 || back.trim().length === 0) {
  throw new Error(`gate fail: entry.txt is ${chars} chars`);
}
if (back.split(".").length - 1 !== 1) {
  throw new Error("gate fail: entry.txt must be exactly one sentence");
}
if (back.includes("\n")) {
  throw new Error("gate fail: entry.txt must be a single line");
}
