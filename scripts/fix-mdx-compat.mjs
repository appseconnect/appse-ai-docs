import fs from "node:fs";
import path from "node:path";

const DOCS_ROOT = path.join(process.cwd(), "docs");

function walk(dir) {
  let changed = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      changed += walk(fullPath);
      continue;
    }
    if (!/\.(md|mdx)$/.test(entry.name)) continue;

    let content = fs.readFileSync(fullPath, "utf8");
    const original = content;

    content = content.replace(/^```JSON\{/gm, "```json");
    content = content.replace(/^```JSON$/gm, "```json");
    content = content.replace(/^```Text$/gm, "```text");
    content = content.replace(/\\img\\/g, "/img/");

    content = content.replace(
      /<img\s+src="([^"]+)"\s*\n\s*alt="([^"]*)"\s*\n\s*width="[^"]*"\s*\/>/g,
      "![$2]($1)\n",
    );
    content = content.replace(
      /<img\s+src="([^"]+)"(?:\s+alt="([^"]*)")?\s*width="[^"]*"\s*\/>/g,
      (_, src, alt) => (alt ? `![${alt}](${src})` : `![](${src})`),
    );
    content = content.replace(
      /(<img[^>]+src=")([^"]+)(")/g,
      (_, pre, src, post) => `${pre}${src.replace(/\\/g, "/")}${post}`,
    );

    content = content.replace(/(\n- [^\n]+)\n(!\[)/g, "$1\n\n$2");
    content = content.replace(/(\n\d+\. [^\n]+)\n(!\[)/g, "$1\n\n$2");
    content = content.replace(
      /<a id="([^"]+)"><\/a>\s*\n?/g,
      "",
    );
    content = content.replace(
      /^import Tabs from '@theme\/Tabs';\s*\n?/gm,
      "",
    );
    content = content.replace(
      /^import TabItem from '@theme\/TabItem';\s*\n?/gm,
      "",
    );

    if (content !== original) {
      fs.writeFileSync(fullPath, content);
      changed += 1;
      console.log(`Fixed: ${path.relative(DOCS_ROOT, fullPath)}`);
    }
  }
  return changed;
}

const count = walk(DOCS_ROOT);
console.log(`Fixed ${count} files`);
