import { writeFileSync } from "node:fs";
import path from "node:path";

// Loading Screen Gold: A Tip in 200 Characters
// Repo: yusfiyan/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270
// One sharp, funny loading-screen tip for stressed developers and AI coding
// agents: the agent declares victory, nothing changed, and the tip is to
// breathe, check the diff, and make it account for itself.
const ENTRY =
  "Tip: When your agent announces 'done' and nothing changed, don't panic \u2014 it's still loading confidence. Breathe, check the diff, and ask it what it actually did.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// Gate guard: the entry must be 1-200 characters, a single line, and not
// whitespace-only, or the sealed scorer refuses it before the judge.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(`Entry fails the gate: ${ENTRY.length} characters`);
}

const outPath = path.join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
