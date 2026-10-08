import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { getGoals } from "@/content";
import PageHero from "@/components/PageHero";
import GoalSectionCard from "@/components/GoalSectionCard";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/goals">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "goals" });
  return buildMetadata({ locale, path: "goals", title: t("title"), description: t("description") });
}

export default async function GoalsPage({ params }: PageProps<"/[locale]/goals">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return null;
  setRequestLocale(locale);

  const t = await getTranslations("goals");
  const goals = getGoals(locale);

  return (
    <main>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <div className="mx-auto max-w-4xl space-y-6 px-4 py-14 sm:px-6">
        {goals.map((goal, index) => (
          <GoalSectionCard key={goal.slug} goal={goal} index={index} />
        ))}
      </div>
    </main>
  );
}
