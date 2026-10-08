import Image from "next/image";
import { withBasePath } from "@/lib/site-config";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image src={withBasePath("/images/bento-icon.png")} alt="" width={48} height={48} className="h-8 w-8" />
      <span className="flex items-baseline gap-1.5 uppercase tracking-wide">
        <span className="font-display text-base font-bold text-foreground">Bento</span>
        <span className="text-xs text-foreground/70">Platform</span>
      </span>
    </span>
  );
}
