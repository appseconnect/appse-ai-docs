import defaultMdxComponents from "fumadocs-ui/mdx";
import { TabItem, Tabs } from "@/components/docusaurus-tabs";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Tabs,
    TabItem,
    ...components,
  };
}

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
