"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { githubOrgUrl } from "@/lib/site-config";
import Logo from "@/components/Logo";
import GithubIcon from "@/components/GithubIcon";

const navItems = [
  { href: "/", key: "home" as const },
  { href: "/goals", key: "goals" as const },
  { href: "/features", key: "features" as const },
  { href: "/releases", key: "releases" as const },
];

const localeLabels: Record<string, string> = { en: "EN", fr: "FR" };

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const activeLocale = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border-soft bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand ${
                  active ? "text-brand" : "text-foreground/80"
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-1 rounded-full border border-border-soft p-0.5 text-xs font-semibold">
            {routing.locales.map((loc) => (
              <Link
                key={loc}
                href={pathname}
                locale={loc}
                aria-current={loc === activeLocale ? "true" : undefined}
                className={`rounded-full px-2 py-1 hover:bg-brand-soft hover:text-brand ${
                  loc === activeLocale ? "bg-cta text-on-cta" : "text-foreground/70"
                }`}
              >
                {localeLabels[loc] ?? loc.toUpperCase()}
              </Link>
            ))}
          </div>
          <a
            href={githubOrgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cta px-4 py-1.5 text-sm font-semibold text-on-cta transition-colors hover:bg-cta-hover"
          >
            <GithubIcon className="h-4 w-4" />
            {t("github")}
          </a>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-md border border-border-soft p-2 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex h-4 w-5 flex-col justify-between">
            <span className="h-0.5 w-full bg-foreground" />
            <span className="h-0.5 w-full bg-foreground" />
            <span className="h-0.5 w-full bg-foreground" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border-soft px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm font-medium ${
                    pathname === item.href ? "bg-brand-soft text-brand" : "text-foreground/80"
                  }`}
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center justify-between border-t border-border-soft pt-3">
            <div className="flex gap-2 text-sm font-semibold">
              {routing.locales.map((loc) => (
                <Link
                  key={loc}
                  href={pathname}
                  locale={loc}
                  className={`rounded-full border border-border-soft px-3 py-1 ${
                    loc === activeLocale ? "bg-cta text-on-cta" : ""
                  }`}
                >
                  {localeLabels[loc] ?? loc.toUpperCase()}
                </Link>
              ))}
            </div>
            <a
              href={githubOrgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cta px-4 py-1.5 text-sm font-semibold text-on-cta"
            >
              <GithubIcon className="h-4 w-4" />
              {t("github")}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
