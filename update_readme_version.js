const fs = require("fs");
const { execSync } = require("child_process");

// Get the latest tag (release version) from GitHub
const latestVersion = execSync(
  "git describe --tags $(git rev-list --tags --max-count=1)"
)
  .toString()
  .trim();

// Read the README.md file
const readmePath = "./README.md";
let readmeContent = fs.readFileSync(readmePath, "utf8");

// Replace the placeholder with the latest version
const updatedContent = readmeContent.replace(
  /Current Version: `v[\d.]+`/,
  `Current Version: \`${latestVersion}\``
);

// Write back to the README.md file
fs.writeFileSync(readmePath, updatedContent);

console.log(`README.md updated to version ${latestVersion}`);
