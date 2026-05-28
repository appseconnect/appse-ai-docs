import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { remarkDirectiveAdmonition } from "fumadocs-core/mdx-plugins";
import remarkDirective from "remark-directive";

export const docs = defineDocs({
  dir: "docs",
  docs: {
    files: ["**/*.md", "**/*.mdx"],
  },
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkDirective, remarkDirectiveAdmonition],
    // rehypeToc cannot compile heading trees inside legacy Docusaurus TabItem blocks (http.md).
    rehypePlugins: (plugins) => plugins.slice(0, -1),
  },
});
