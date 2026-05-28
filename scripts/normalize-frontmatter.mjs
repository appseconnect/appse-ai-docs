import fs from "node:fs";
import path from "node:path";

const DOCS_ROOT = path.join(process.cwd(), "docs");

const JSX_FILES = [
  "platform/appse-ai.md",
  "platform/key_concepts/run_a_node.md",
  "platform/key_concepts/nodes/built_in_nodes/merge_node.md",
  "platform/key_concepts/nodes/built_in_nodes/code.md",
  "platform/key_concepts/nodes/built_in_nodes/ai_processor_node.md",
  "platform/getting_started/create-ai-agent/intro.md",
];

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { frontmatter: null, body: content };
  return { frontmatter: match[1], body: match[2] };
}

function normalizeFrontmatterBlock(block) {
  const lines = block.split("\n");
  const kept = [];
  for (const line of lines) {
    const key = line.split(":")[0]?.trim();
    if (
      key === "sidebar_position" ||
      key === "sidebar_label" ||
      key === "slug"
    ) {
      continue;
    }
    kept.push(line);
  }
  return kept.join("\n").trimEnd();
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
    const { frontmatter, body } = parseFrontmatter(original);
    if (!frontmatter) continue;

    const normalized = normalizeFrontmatterBlock(frontmatter);
    const next = `---\n${normalized}\n---\n\n${body}`;
    if (next !== original) {
      fs.writeFileSync(fullPath, next);
      changed += 1;
    }
  }
  return changed;
}

let renamed = 0;
for (const rel of JSX_FILES) {
  const mdPath = path.join(DOCS_ROOT, rel);
  const mdxPath = mdPath.replace(/\.md$/, ".mdx");
  if (fs.existsSync(mdPath)) {
    fs.renameSync(mdPath, mdxPath);
    renamed += 1;
    console.log(`Renamed to MDX: ${rel} -> ${rel.replace(/\.md$/, ".mdx")}`);
  }
}

const count = walk(DOCS_ROOT);
console.log(`Normalized frontmatter in ${count} files`);
console.log(`Renamed ${renamed} JSX files to .mdx`);
