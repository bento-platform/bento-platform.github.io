import Image from "next/image";
import type { FeatureItem } from "@/content/types";
import { withBasePath } from "@/lib/site-config";

export default function FeatureShowcase({ feature, index }: { feature: FeatureItem; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <article
      className={`flex flex-col items-center gap-8 lg:flex-row ${reversed ? "lg:flex-row-reverse" : ""}`}
    >
      <div className="w-full overflow-hidden rounded-2xl border border-border-soft bg-surface shadow-sm lg:w-3/5">
        <Image
          src={withBasePath(feature.image)}
          alt={feature.alt}
          width={800}
          height={500}
          className="h-auto w-full"
          sizes="(min-width: 1024px) 60vw, 100vw"
        />
      </div>
      <div className="w-full lg:w-2/5">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">{feature.eyebrow}</p>
        <p className="mt-3 text-lg text-foreground/80">{feature.caption}</p>
      </div>
    </article>
  );
}
