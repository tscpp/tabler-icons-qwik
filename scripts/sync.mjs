import { $ } from "execa";
import { readFileSync, writeFileSync } from "node:fs";
import { SemVer } from "semver";
import { Octokit } from "@octokit/core";

const { NODE_AUTH_TOKEN, GITHUB_TOKEN } = process.env;

if (!NODE_AUTH_TOKEN) {
  console.error(`Missing NODE_AUTH_TOKEN.`);
}

if (!GITHUB_TOKEN) {
  console.error(`Missing GITHUB_TOKEN.`);
}

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

// Check for updates (@tabler/icons)
const { stdout: stdout1 } = await $({
  reject: false,
})`pnpm outdated @tabler/icons --json`;
const object = JSON.parse(stdout1.trim());

if (!object["@tabler/icons"]) {
  console.log(`@tabler/icons is up to date. No changes required.`);
  process.exit(0);
}

const previous = new SemVer(object["@tabler/icons"].current);
const updated = new SemVer(object["@tabler/icons"].latest);
const relaseType = previous.minor === updated.minor ? "patch" : "minor";

// Update @tabler/icons
console.log(
  `Version ${updated.format()} of @tabler/icons is available. Updating...`
);
await $`pnpm update @tabler/icons`;

// Build
console.log("Building...");
await import("./build.mjs");

// Commit changes
console.log("Committing changes...");
await $`git add --all`;
await $`git commit -m "chore: update @tabler/icons to v${updated.format()}"`;

// Bump version
console.log("Bumping version...");
const pkg = JSON.parse(readFileSync("package.json"));
const ver = new SemVer(pkg.version).inc(relaseType);
writeFileSync("package.json", JSON.stringify(pkg));

// Commit changes
console.log("Committing and tagging changes...");
await $`git add --all`;
await $`git commit -m "chore: v${ver.format()}"`;
await $`git tag v${ver.format()}`;

// Push changes
console.log("Pushing to remote...");
await $`git push -u origin`;

// Publish version
console.log("Publishing packages...");
await $`npm publish`;

// Create github release
console.log("Creating github release...");
await octokit.request("POST /repos/{owner}/{repo}/releases", {
  owner: "tscpp",
  repo: "tabler-icons-qwik",
  tag_name: `v${ver.format()}`,
  generate_release_notes: true,
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
});

console.log("Finished!");
