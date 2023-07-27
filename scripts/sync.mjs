import { $ } from "execa";
import { SemVer } from "semver";

// Check for updates (@tabler/icons)
const { stdout: stdout1 } = await $`pnpm outdated @tabler/icons --json`;
const object = JSON.parse(stdout1.trim());

if (!object["@tabler/icons"]) {
  console.log(`@tabler/icons is up to date. No changes required.`);
  process.exit(0);
}

const previous = new SemVer(object["@tabler/icons"].current);
const updated = new SemVer(object["@tabler/icons"].wanted);
const relaseType = previous.minor === updated.minor ? "patch" : "minor";

// Update @tabler/icons
console.log(
  `Version ${updated.format()} of @tabler/icons is available. Updating...`
);
await $`pnpm update @tabler/icons`;

// Build
await import("./build.mjs");

// Commit changes
await $`git add --all`;
await $`git commit -m "chore: update @tabler/icons to v${updated.format()}"`;

// Bump version
const { stdout: stdout2 } = await $`pnpm version ${relaseType}`;
await $`git add --all`;
await $`git commit -m "chore: v${stdout2.trim()}"`;

// Push changes
await $`git push -u origin`;

// Publish version
await $`npm publish`
