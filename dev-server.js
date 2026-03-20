const path = require("path");
const { spawn } = require("child_process");

process.chdir(__dirname);

const args = process.argv.slice(2);
const child = spawn("npx", ["next", ...args], {
  cwd: __dirname,
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => process.exit(code));
