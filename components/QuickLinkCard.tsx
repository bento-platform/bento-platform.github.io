import { Link } from "@/i18n/navigation";

export default function QuickLinkCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-border-soft bg-surface p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-foreground group-hover:text-brand">{title}</h3>
      <p className="mt-2 text-sm text-foreground/70">{description}</p>
      <span className="mt-4 text-sm font-semibold text-brand opacity-0 transition-opacity group-hover:opacity-100">
        →
      </span>
    </Link>
  );
}
