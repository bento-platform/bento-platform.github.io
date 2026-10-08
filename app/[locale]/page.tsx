import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";
import { githubOrgUrl, siteUrl, withBasePath } from "@/lib/site-config";
import QuickLinkCard from "@/components/QuickLinkCard";
import TrustedBy from "@/components/TrustedBy";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return buildMetadata({ locale, path: "", title: t("title"), description: t("tagline") });
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return null;
  setRequestLocale(locale);

  const t = await getTranslations("home");

  const cards = [
    { href: "/goals", title: t("goalsCardTitle"), description: t("goalsCardDescription") },
    { href: "/features", title: t("featuresCardTitle"), description: t("featuresCardDescription") },
    { href: "/releases", title: t("releasesCardTitle"), description: t("releasesCardDescription") },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Bento Platform",
    applicationCategory: "Data management platform",
    operatingSystem: "Any",
    description: t("tagline"),
    url: `${siteUrl}/${locale}/`,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    codeRepository: githubOrgUrl,
    license: "https://www.gnu.org/licenses/lgpl-3.0.html",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-brand text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:py-20">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl">{t("tagline")}</h1>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={githubOrgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand-soft"
              >
                {t("heroCta")}
              </a>
              <a
                href="#explore"
                className="border-b border-white/50 pb-0.5 text-sm font-semibold text-white transition-colors hover:border-white"
              >
                {t("exploreHeading")} &rarr;
              </a>
            </div>
          </div>
          <Image
            src={withBasePath("/images/bento-hero-v2.png")}
            alt={t("heroImageAlt")}
            width={1995}
            height={1828}
            sizes="(min-width: 1024px) 640px, 100vw"
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      <TrustedBy />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">{t("introEyebrow")}</p>
        <h2 className="mt-2 max-w-3xl text-2xl font-bold tracking-tight sm:text-3xl">{t("introHeading")}</h2>
        <div className="mt-8 grid gap-8 text-base leading-relaxed text-foreground/80 lg:grid-cols-3 lg:gap-12">
          <p>
            {t.rich("intro2", {
              ga4gh: (chunks) => (
                <a
                  href="https://www.ga4gh.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand underline decoration-brand/40 underline-offset-2 hover:decoration-brand"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
          <p>{t("intro1")}</p>
          <p>{t("intro3")}</p>
        </div>
      </section>

      <section id="explore" className="scroll-mt-20 border-t border-border-soft bg-brand-soft/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{t("exploreHeading")}</h2>
          <p className="mt-2 max-w-2xl text-foreground/70">{t("exploreDescription")}</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {cards.map((card) => (
              <QuickLinkCard key={card.href} {...card} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
