import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";
import { legacyRedirects } from "./redirects.generated";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  redirects: async () => legacyRedirects,
};

const withMDX = createMDX();

export default withMDX(nextConfig);
