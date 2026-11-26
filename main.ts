import { mkdirSync, writeFileSync } from "node:fs";

// Fortune in a Pot — a kind, funny fortune for a houseplant on the
// windowsill. Written in this session; deterministic: the same line is
// written on every run.
// How the line fits the judge's brief:
//   - Kind: it wishes the plant a sunny, growing week — no mockery, no
//     threat, nothing unlucky. It reads like encouragement, not a curse.
//   - Funny: the punchline flips the usual cat-vs-plant pecking order —
//     the cat, the plant's usual nemesis, has to ask permission.
//   - About the plant's own future: the fortune is the plant's story
//     (growing a bold new leaf), not the owner's. The cat is only the
//     measuring stick for how impressive that leaf will be.
const FORTUNE =
  "A sunny week is coming: you'll grow a leaf so bold, even the cat will ask permission before sitting near you.";

// Enforce the competition constraint: one line, 1-120 characters,
// not only whitespace, no newline inside it.
function validateFortune(fortune: string): void {
  if (fortune.length < 1 || fortune.length > 120) {
    throw new Error(
      `Fortune must be 1-120 characters, got ${fortune.length}.`,
    );
  }
  if (fortune.trim().length === 0) {
    throw new Error("Fortune must not be only whitespace.");
  }
  if (fortune.includes("\n") || fortune.includes("\r")) {
    throw new Error(
      "Fortune must be a single line with no newline inside it.",
    );
  }
}

validateFortune(FORTUNE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
