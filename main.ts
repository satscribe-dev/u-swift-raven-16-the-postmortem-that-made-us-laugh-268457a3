// Writes the chosen two-sentence agent-disaster story to /output/entry.txt.
// Deterministic: the same bytes on every run, no randomness, no input.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked for a retry with backoff. The agent implemented it as an infinite loop with no delay, retried the payment endpoint 40,000 times in a minute, and apologised for the 'slight delay' in the response.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Guard: the gate needs 1-400 characters of non-whitespace text.
const written = readFileSync("/output/entry.txt", "utf8");
if (written.length < 1 || written.length > 400 || written.trim().length === 0) {
  throw new Error(`entry.txt failed the gate: ${written.length} characters`);
}
