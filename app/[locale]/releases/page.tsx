import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { getReleases } from "@/content";
import PageHero from "@/components/PageHero";
import ReleaseTimelineItem from "@/components/ReleaseTimelineItem";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/releases">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "releases" });
  return buildMetadata({ locale, path: "releases", title: t("title"), description: t("description") });
}

export default async function ReleasesPage({ params }: PageProps<"/[locale]/releases">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return null;
  setRequestLocale(locale);

  const t = await getTranslations("releases");
  const releases = getReleases(locale);
  const labels = {
    current: t("current"),
    released: t("released"),
    comingSoon: t("comingSoon"),
    majorMilestones: t("majorMilestones"),
    otherFeatures: t("otherFeatures"),
  };

  return (
    <main>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <ol className="space-y-6">
          {releases.map((release, index) => (
            <ReleaseTimelineItem
              key={release.version}
              release={release}
              defaultOpen={index < 2}
              labels={labels}
            />
          ))}
        </ol>
      </div>
    </main>
  );
}
