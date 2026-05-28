// source.config.ts
import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { remarkDirectiveAdmonition } from "fumadocs-core/mdx-plugins";
import remarkDirective from "remark-directive";
import rehypeRaw from "rehype-raw";
var docs = defineDocs({
  dir: "docs",
  docs: {
    files: ["**/*.md", "**/*.mdx"]
  }
});
var source_config_default = defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkDirective, remarkDirectiveAdmonition],
    // rehype-raw turns legacy raw HTML (Docusaurus <Tabs>/<TabItem> in .md files)
    // into proper HAST elements so rehype-toc can walk the tree and emit a TOC.
    // Pass-through list preserves MDX-native nodes from .mdx files.
    rehypePlugins: (plugins) => [
      [
        rehypeRaw,
        {
          passThrough: [
            "mdxFlowExpression",
            "mdxJsxFlowElement",
            "mdxJsxTextElement",
            "mdxTextExpression",
            "mdxjsEsm"
          ]
        }
      ],
      ...plugins
    ]
  }
});
export {
  source_config_default as default,
  docs
};
