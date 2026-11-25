// Angry Judge: The Short Rant Contest — one short rant, at most 400 characters.
// Writes the rant to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const rant =
  "I have been on hold for 47 minutes listening to the same eight seconds of jazz while a robot keeps telling me my call is important to them. If it were important, a human would pick up. I know every note now. I hate every note. The robot just thanked me for my patience. I have none left. It took that too.";

// The bounty caps the rant at 400 characters; refuse to emit an over-long one.
if (rant.length > 400) {
  throw new Error(`rant is ${rant.length} characters, over the 400 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", rant, "utf8");
console.log(`rant (${rant.length} chars):`);
console.log(rant);
