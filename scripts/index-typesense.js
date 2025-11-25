const Typesense = require("typesense");
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// Initialize Typesense client
const client = new Typesense.Client({
  nodes: [
    {
      host: "localhost",
      port: 8108,
      protocol: "http",
    },
  ],
  apiKey: "xyz123secureapikey",
  connectionTimeoutSeconds: 2,
});

const collectionName = "docs";

async function createCollection() {
  try {
    await client.collections(collectionName).delete();
    console.log("Deleted existing collection");
  } catch (error) {
    // Collection doesn't exist, that's fine
  }

  // Schema that matches docusaurus-theme-search-typesense expectations
  const schema = {
    name: collectionName,
    enable_nested_fields: true,
    fields: [
      { name: "id", type: "string" },
      { name: "content", type: "string" },
      { name: "url", type: "string" },
      { name: "type", type: "string", facet: true },
      { name: "hierarchy.lvl0", type: "string", facet: true, optional: true },
      { name: "hierarchy.lvl1", type: "string", facet: true, optional: true },
      { name: "hierarchy.lvl2", type: "string", facet: true, optional: true },
      { name: "hierarchy.lvl3", type: "string", facet: true, optional: true },
      { name: "hierarchy.lvl4", type: "string", facet: true, optional: true },
      { name: "hierarchy.lvl5", type: "string", facet: true, optional: true },
      { name: "anchor", type: "string", optional: true },
    ],
  };

  await client.collections().create(schema);
  console.log("Created collection with proper schema");
}

function getAllMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllMarkdownFiles(filePath, fileList);
    } else if (file.endsWith(".md") || file.endsWith(".mdx")) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function extractHeadings(markdown) {
  const headings = [];
  const lines = markdown.split("\n");

  lines.forEach((line) => {
    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      headings.push({ level, text });
    }
  });

  return headings;
}

async function indexDocuments() {
  const docsDir = path.join(__dirname, "..", "docs");
  const files = getAllMarkdownFiles(docsDir);
  const documents = [];

  files.forEach((filePath) => {
    const content = fs.readFileSync(filePath, "utf8");
    const { data, content: markdown } = matter(content);

    const relativePath = path.relative(docsDir, filePath);
    const urlPath = relativePath
      .replace(/\\/g, "/")
      .replace(/\.mdx?$/, "")
      .replace(/\/index$/, "")
      .replace(/^index$/, "");

    const url = urlPath ? `/${urlPath}` : "/";

    // Extract title
    let title = data.title || data.sidebar_label || "";
    if (!title) {
      const headingMatch = markdown.match(/^#\s+(.+)$/m);
      if (headingMatch) {
        title = headingMatch[1];
      }
    }

    // Extract headings
    const headings = extractHeadings(markdown);

    // Clean content
    const cleanContent = markdown
      .replace(/```[\s\S]*?```/g, "")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/#{1,6}\s+/g, "")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[*_~]/g, "")
      .replace(/^\s*[-*+]\s+/gm, "")
      .replace(/^\s*\d+\.\s+/gm, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim();

    // Main document (page level)
    const mainDoc = {
      id: `${url.replace(/\//g, "-") || "home"}-main`,
      content: `${title} ${cleanContent}`.substring(0, 8000),
      url: url,
      type: "lvl0",
      "hierarchy.lvl0": title || "Documentation",
    };

    documents.push(mainDoc);

    // Create separate documents for each section (heading)
    headings.forEach((heading, idx) => {
      if (heading.level === 2 || heading.level === 3) {
        const anchor = heading.text.toLowerCase().replace(/[^\w]+/g, "-");
        const sectionDoc = {
          id: `${url.replace(/\//g, "-") || "home"}-section-${idx}`,
          content: heading.text,
          url: url,
          type: `lvl${heading.level - 1}`,
          anchor: anchor,
          "hierarchy.lvl0": title || "Documentation",
          "hierarchy.lvl1":
            heading.level === 2
              ? heading.text
              : headings.find((h) => h.level === 2)?.text || title,
        };

        if (heading.level === 3) {
          sectionDoc["hierarchy.lvl2"] = heading.text;
        }

        documents.push(sectionDoc);
      }
    });
  });

  console.log(`Indexing ${documents.length} documents...`);

  // Index documents in batches
  const batchSize = 100;
  for (let i = 0; i < documents.length; i += batchSize) {
    const batch = documents.slice(i, i + batchSize);
    try {
      await client.collections(collectionName).documents().import(batch, {
        action: "upsert",
      });
      console.log(
        `Indexed ${Math.min(i + batchSize, documents.length)}/${
          documents.length
        } documents`
      );
    } catch (error) {
      console.error(`Error indexing batch:`, error);
    }
  }

  console.log("Indexing complete!");
}

async function main() {
  try {
    await createCollection();
    await indexDocuments();

    // Test search
    console.log("\nTesting search...");
    const searchResults = await client
      .collections(collectionName)
      .documents()
      .search({
        q: "*",
        query_by: "content,hierarchy.lvl0,hierarchy.lvl1,hierarchy.lvl2",
        per_page: 5,
      });

    console.log(`Collection has ${searchResults.found} total documents`);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

main();
