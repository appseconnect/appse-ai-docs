import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function DocsRootLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
      sidebar={{
        tabs: [
          {
            title: "Platform",
            url: "/platform/appse-ai",
          },
          {
            title: "App Integrations",
            url: "/app_integrations/intro",
          },
        ],
      }}
    >
      {children}
    </DocsLayout>
  );
}
