import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { githubOrgUrl } from "@/lib/site-config";
import Logo from "@/components/Logo";

const navItems = [
  { href: "/", key: "home" as const },
  { href: "/goals", key: "goals" as const },
  { href: "/features", key: "features" as const },
  { href: "/releases", key: "releases" as const },
];

export default function Footer() {
  const tNav = useTranslations("nav");
  const tFooter = useTranslations("footer");

  return (
    <footer className="border-t border-border-soft bg-brand-soft/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-foreground/70">{tFooter("tagline")}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground/70">{tFooter("sections")}</h2>
          <ul className="mt-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-foreground/80 hover:text-brand">
                  {tNav(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground/70">{tFooter("org")}</h2>
          <p className="mt-3">
            <a
              href={githubOrgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/80 hover:text-brand"
            >
              github.com/Bento-Platform
            </a>
          </p>
          <p className="mt-4 text-xs text-foreground/70">{tFooter("license")}</p>
        </div>
      </div>
    </footer>
  );
}
