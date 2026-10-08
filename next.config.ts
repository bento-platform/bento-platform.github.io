import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Only set for deployments that aren't served from a domain root (e.g. a
// personal fork's project-page preview at <user>.github.io/<repo>/). Left
// unset for the real bento-platform.github.io root site.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(nextConfig);
