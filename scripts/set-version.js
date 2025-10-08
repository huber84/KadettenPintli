// scripts/set-version.js
import { execSync } from "child_process";
import fs from "fs";

try {
  const tag = execSync("git describe --tags --abbrev=0").toString().trim();
  fs.writeFileSync("src/version.json", JSON.stringify({ version: tag }));
  console.log(`✅  Version set to ${tag}`);
} catch (err) {
  console.error("⚠️  Could not determine tag version, defaulting to v0.0.0");
  fs.writeFileSync("src/version.json", JSON.stringify({ version: "v0.0.0" }));
}
