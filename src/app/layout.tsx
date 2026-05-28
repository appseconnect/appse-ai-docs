import { RootProvider } from "fumadocs-ui/provider/next";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "appse ai docs",
    template: "%s | appse ai docs",
  },
  description:
    "Documentation for the appse ai platform — workflows, integrations, and automation.",
  icons: {
    icon: "/img/favicon-appse-ai-docs.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} flex min-h-screen flex-col`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
