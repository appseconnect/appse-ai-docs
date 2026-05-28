// source.config.ts
import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { remarkDirectiveAdmonition } from "fumadocs-core/mdx-plugins";
import remarkDirective from "remark-directive";
var docs = defineDocs({
  dir: "docs",
  docs: {
    files: ["**/*.md", "**/*.mdx"]
  }
});
var source_config_default = defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkDirective, remarkDirectiveAdmonition]
  }
});
export {
  source_config_default as default,
  docs
};
