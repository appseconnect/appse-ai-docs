import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            src="/img/brand-logo-appse-ai.svg"
            alt="appse ai"
            width={28}
            height={28}
            className="mr-2 inline-block"
          />
          appse ai docs
        </>
      ),
    },
    links: [
      {
        type: "custom",
        secondary: true,
        children: (
          <a
            href="https://workflow.appse.ai/"
            target="_blank"
            rel="noreferrer noopener"
            className="ml-2 rounded-md bg-fd-primary px-3 py-1.5 text-sm font-semibold text-fd-primary-foreground transition hover:opacity-90"
          >
            Try appse ai now!
          </a>
        ),
      },
    ],
  };
}
