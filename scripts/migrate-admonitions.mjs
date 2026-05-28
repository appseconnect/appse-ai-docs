import fs from "node:fs";
import path from "node:path";

const DOCS_ROOT = path.join(process.cwd(), "docs");

const ADMONITION_TYPES = [
  "note",
  "tip",
  "info",
  "warning",
  "danger",
  "caution",
];

function convertAdmonitions(content) {
  const lines = content.split(/\r?\n/);
  const output = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const openMatch = line.match(/^:::(\w+)(?:\s+(.+))?$/);
    if (openMatch) {
      const type = openMatch[1];
      const title = openMatch[2]?.trim();
      if (ADMONITION_TYPES.includes(type)) {
        const body = [];
        i += 1;
        while (i < lines.length && !/^:::$/.test(lines[i])) {
          body.push(lines[i]);
          i += 1;
        }
        if (i < lines.length && /^:::$/.test(lines[i])) {
          const directiveType = type === "danger" ? "warn" : type;
          if (title) {
            output.push(`::${directiveType}[${title}]`);
          } else {
            output.push(`::${directiveType}`);
          }
          output.push(...body);
          output.push("::");
          i += 1;
          continue;
        }
      }
    }
    output.push(line);
    i += 1;
  }

  return output.join("\n");
}

function walk(dir) {
  let changed = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      changed += walk(fullPath);
      continue;
    }
    if (!/\.(md|mdx)$/.test(entry.name)) continue;
    const original = fs.readFileSync(fullPath, "utf8");
    if (!original.includes(":::")) continue;
    const converted = convertAdmonitions(original);
    if (converted !== original) {
      fs.writeFileSync(fullPath, converted);
      changed += 1;
      console.log(
        `Updated admonitions: ${path.relative(DOCS_ROOT, fullPath)}`,
      );
    }
  }
  return changed;
}

const count = walk(DOCS_ROOT);
console.log(`Converted admonitions in ${count} files`);
