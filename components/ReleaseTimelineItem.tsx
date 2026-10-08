import type { ReleaseVersion } from "@/content/types";

const statusStyles: Record<ReleaseVersion["status"], string> = {
  current: "bg-cta text-on-cta",
  released: "bg-border-soft text-foreground/70",
  upcoming: "border border-dashed border-brand text-brand",
};

export default function ReleaseTimelineItem({
  release,
  defaultOpen,
  labels,
}: {
  release: ReleaseVersion;
  defaultOpen: boolean;
  labels: { current: string; released: string; comingSoon: string; majorMilestones: string; otherFeatures: string };
}) {
  const statusLabel =
    release.status === "current" ? labels.current : release.status === "upcoming" ? labels.comingSoon : labels.released;

  return (
    <li className="relative pl-10">
      <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-brand bg-background">
        <span className="h-2 w-2 rounded-full bg-brand" />
      </span>

      <details open={defaultOpen} className="group rounded-2xl border border-border-soft bg-surface p-5 sm:p-6">
        <summary className="flex cursor-pointer list-none flex-wrap items-center gap-3">
          <h2 className="text-lg font-semibold sm:text-xl">Version {release.version}</h2>
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusStyles[release.status]}`}>
            {statusLabel}
          </span>
          {release.date && <span className="text-sm text-foreground/70">{release.date}</span>}
          <span aria-hidden className="ml-auto text-foreground/60 transition-transform group-open:rotate-180">⌄</span>
        </summary>

        <div className="mt-4 space-y-4">
          {release.majorMilestones.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
                {labels.majorMilestones}
              </h3>
              <ul className="prose-list mt-2 space-y-1.5 text-foreground/80">
                {release.majorMilestones.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {release.otherFeatures && release.otherFeatures.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
                {labels.otherFeatures}
              </h3>
              <ul className="prose-list mt-2 space-y-1.5 text-sm text-foreground/70">
                {release.otherFeatures.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </details>
    </li>
  );
}
