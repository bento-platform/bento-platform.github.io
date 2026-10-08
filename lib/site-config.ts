export const siteUrl = "https://bento-platform.github.io";
export const githubOrgUrl = "https://github.com/Bento-Platform";
export const siteName = "Bento Platform";

// Mirrors next.config.ts's basePath. next/link and next-intl's Link prefix
// basePath automatically, but next/image's `src` and metadata `icons` do not
// (confirmed against the built output) — use withBasePath for those, and for
// any other raw root-relative path built by hand instead of via next/link.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}

export const pagePaths = ["", "goals", "features", "releases"] as const;
export type PagePath = (typeof pagePaths)[number];
