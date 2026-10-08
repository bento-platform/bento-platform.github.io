import Image from "next/image";
import { useTranslations } from "next-intl";
import { withBasePath } from "@/lib/site-config";

const partners: { src?: string; alt: string; width?: number; height?: number; label?: string; href?: string }[] = [
  {
    src: "/images/trusted-by/pan-canadian-genome-library.png",
    alt: "Pan-Canadian Genome Library",
    width: 378,
    height: 140,
    href: "https://pcgl.bento.sd4h.ca",
  },
  { src: "/images/trusted-by/bqc19.png", alt: "BQC19", width: 382, height: 128, href: "https://bqc19.bento.sd4h.ca" },
  { src: "/images/trusted-by/ichange.png", alt: "ICHANGE", width: 518, height: 128, href: "https://ichange.bento.sd4h.ca" },
  {
    src: "/images/trusted-by/renata.png",
    alt: "",
    width: 256,
    height: 256,
    label: "RENATA",
    href: "https://renata.bento.sd4h.ca",
  },
  {
    src: "/images/trusted-by/rsrq.png",
    alt: "RSRQ — Réseau de recherche en santé respiratoire du Québec",
    width: 600,
    height: 168,
    href: "https://rsrq.bento.sd4h.ca",
  },
  {
    alt: "",
    label: "BearWatch NanuqKS",
    href: "https://bento.sclougheed.ca",
  },
];

function PartnerLogo({ partner: p }: { partner: (typeof partners)[number] }) {
  return (
    <>
      {p.src && (
        <Image
          src={withBasePath(p.src)}
          alt={p.alt}
          width={p.width}
          height={p.height}
          className="h-14 w-auto mix-blend-multiply"
        />
      )}
      {p.label && <span className="font-display text-2xl font-bold tracking-wide text-foreground">{p.label}</span>}
    </>
  );
}

export default function TrustedBy() {
  const t = useTranslations("home");

  return (
    <section className="border-b border-border-soft">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-foreground/60">
          {t("trustedBy")}
        </h2>
        <ul className="mt-8 grid grid-cols-1 items-center justify-items-center gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p) => (
            <li key={p.src ?? p.label}>
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-opacity hover:opacity-70"
                >
                  <PartnerLogo partner={p} />
                </a>
              ) : (
                <div className="flex items-center gap-3">
                  <PartnerLogo partner={p} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
