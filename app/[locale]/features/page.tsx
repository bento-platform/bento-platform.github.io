import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { getFeatures } from "@/content";
import PageHero from "@/components/PageHero";
import FeatureShowcase from "@/components/FeatureShowcase";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/features">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "features" });
  return buildMetadata({ locale, path: "features", title: t("title"), description: t("description") });
}

export default async function FeaturesPage({ params }: PageProps<"/[locale]/features">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return null;
  setRequestLocale(locale);

  const t = await getTranslations("features");
  const features = getFeatures(locale);

  return (
    <main>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6">
        {features.map((feature, index) => (
          <FeatureShowcase key={feature.slug} feature={feature} index={index} />
        ))}
      </div>
    </main>
  );
}
