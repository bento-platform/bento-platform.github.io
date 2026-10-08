import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <main className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>
      <p className="mt-3 w-full text-foreground/70">{t("description")}</p>
      <Link href="/" className="mt-6 rounded-full bg-cta px-5 py-2.5 text-sm font-semibold text-on-cta hover:bg-cta-hover">
        {t("cta")}
      </Link>
    </main>
  );
}
