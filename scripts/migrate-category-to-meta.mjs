import fs from "node:fs";
import path from "node:path";

const DOCS_ROOT = path.join(process.cwd(), "docs");

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const data = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (/^\d+$/.test(value)) data[key] = Number(value);
    else data[key] = value;
  }
  return data;
}

function listEntries(dir) {
  return fs.readdirSync(dir, { withFileTypes: true });
}

function getMarkdownPages(dir) {
  return listEntries(dir)
    .filter(
      (entry) =>
        entry.isFile() &&
        (entry.name.endsWith(".md") || entry.name.endsWith(".mdx")) &&
        !entry.name.startsWith("_") &&
        entry.name !== "index.md",
    )
    .map((entry) => {
      const fullPath = path.join(dir, entry.name);
      const frontmatter = parseFrontmatter(fs.readFileSync(fullPath, "utf8"));
      const baseName = entry.name.replace(/\.(md|mdx)$/, "");
      return {
        baseName,
        position: frontmatter.sidebar_position ?? 999,
      };
    })
    .sort(
      (a, b) => a.position - b.position || a.baseName.localeCompare(b.baseName),
    );
}

function getSubfolders(dir) {
  return listEntries(dir)
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
    .map((entry) => {
      const categoryPath = path.join(dir, entry.name, "_category_.json");
      let position = 999;
      if (fs.existsSync(categoryPath)) {
        const category = JSON.parse(fs.readFileSync(categoryPath, "utf8"));
        position = category.position ?? position;
      }
      return { name: entry.name, position };
    })
    .sort((a, b) => a.position - b.position || a.name.localeCompare(b.name));
}

function ensureGeneratedIndex(dir, category) {
  if (category.link?.type !== "generated-index") return;
  const indexPath = path.join(dir, "index.md");
  if (fs.existsSync(indexPath)) return;

  const title = category.link.title ?? category.label ?? "Overview";
  const description = category.link.description ?? "";
  const body = description
    ? `${description}\n\nBrowse the topics in the sidebar to learn more.`
    : "Browse the topics in the sidebar to learn more.";

  const content = `---\ntitle: "${title.replace(/"/g, '\\"')}"\n---\n\n${body}\n`;
  fs.writeFileSync(indexPath, content);
  console.log(`Created index: ${path.relative(DOCS_ROOT, indexPath)}`);
}

function convertCategory(dir) {
  const categoryPath = path.join(dir, "_category_.json");
  if (!fs.existsSync(categoryPath)) return null;

  const category = JSON.parse(fs.readFileSync(categoryPath, "utf8"));
  ensureGeneratedIndex(dir, category);

  const meta = { title: category.label };

  if (category.link?.type === "doc" && category.link.id) {
    const indexName = path.basename(category.link.id);
    meta.pagesIndex = indexName;
  }

  if (category.link?.type === "generated-index") {
    meta.pagesIndex = "index";
  }

  const pages = [];
  const markdownPages = getMarkdownPages(dir);
  for (const page of markdownPages) {
    if (meta.pagesIndex && page.baseName === meta.pagesIndex) continue;
    pages.push(page.baseName);
  }

  const subfolders = getSubfolders(dir);
  for (const folder of subfolders) {
    pages.push(folder.name);
  }

  if (pages.length > 0) {
    meta.pages = pages;
  } else {
    meta.pages = ["..."];
  }

  return { meta, categoryPath };
}

function walk(dir) {
  const converted = [];
  const result = convertCategory(dir);
  if (result) {
    const metaPath = path.join(dir, "meta.json");
    fs.writeFileSync(metaPath, `${JSON.stringify(result.meta, null, 2)}\n`);
    fs.unlinkSync(result.categoryPath);
    converted.push(metaPath);
  }

  for (const entry of listEntries(dir)) {
    if (entry.isDirectory() && !entry.name.startsWith("_")) {
      converted.push(...walk(path.join(dir, entry.name)));
    }
  }

  return converted;
}

const rootMeta = {
  title: "appse ai docs",
  pages: ["platform", "app_integrations"],
};

fs.writeFileSync(
  path.join(DOCS_ROOT, "meta.json"),
  `${JSON.stringify(rootMeta, null, 2)}\n`,
);

const platformMeta = {
  title: "Platform",
  pagesIndex: "appse-ai",
  pages: [
    "appse-ai",
    "key_concepts",
    "additional_options",
    "billing",
    "release_notes",
    "workflow-designer",
    "settings",
    "ai_agent",
    "getting_started",
  ],
};

fs.writeFileSync(
  path.join(DOCS_ROOT, "platform", "meta.json"),
  `${JSON.stringify(platformMeta, null, 2)}\n`,
);

const appIntegrationsMeta = {
  title: "App Integrations",
  pagesIndex: "intro",
  pages: ["...", "intro"],
};

fs.writeFileSync(
  path.join(DOCS_ROOT, "app_integrations", "meta.json"),
  `${JSON.stringify(appIntegrationsMeta, null, 2)}\n`,
);

const converted = walk(DOCS_ROOT);
console.log(`Converted ${converted.length} _category_.json files to meta.json`);
