import type { Metadata } from "next";
import { routing } from "../i18n/routing";
import { siteName, siteUrl } from "./site-config";

interface BuildMetadataArgs {
  locale: string;
  path: string; // e.g. "" for home, "goals", "features", ...
  title: string;
  description: string;
}

function urlFor(locale: string, path: string): string {
  const suffix = path ? `${path}/` : "";
  return `${siteUrl}/${locale}/${suffix}`;
}

export function buildMetadata({ locale, path, title, description }: BuildMetadataArgs): Metadata {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = urlFor(l, path);
  }
  languages["x-default"] = urlFor(routing.defaultLocale, path);

  const url = urlFor(locale, path);
  // Home page sets an absolute title (bypasses the root layout's "%s — Bento Platform"
  // template); sub-pages pass their own plain title through so the template applies once.
  const fullTitle = path ? `${title} — ${siteName}` : title;

  return {
    title: path ? title : { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      locale,
      type: "website",
      images: [{ url: `${siteUrl}/images/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${siteUrl}/images/og-image.png`],
    },
  };
}
