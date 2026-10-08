import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

const pagePaths = ["", "goals", "features", "releases"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pagePaths.map((path) => {
    const suffix = path ? `${path}/` : "";
    const languages: Record<string, string> = {};
    for (const locale of routing.locales) {
      languages[locale] = `${siteUrl}/${locale}/${suffix}`;
    }

    return {
      url: `${siteUrl}/${routing.defaultLocale}/${suffix}`,
      lastModified: new Date(),
      alternates: { languages },
    };
  });
}
