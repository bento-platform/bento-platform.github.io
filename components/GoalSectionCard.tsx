import InlineText from "@/components/InlineText";
import type { GoalSection } from "@/content/types";

export default function GoalSectionCard({ goal, index }: { goal: GoalSection; index: number }) {
  return (
    <article className="rounded-2xl border border-border-soft bg-surface p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand">
          {index + 1}
        </span>
        <div className="flex-1">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            <InlineText text={goal.title} />
          </h2>
          {goal.body && (
            <p className="mt-3 text-foreground/80">
              <InlineText text={goal.body} />
            </p>
          )}
          {goal.bullets && goal.bullets.length > 0 && (
            <ul className="prose-list mt-4 space-y-2 text-foreground/80">
              {goal.bullets.map((bullet) => (
                <li key={bullet.text}>
                  <InlineText text={bullet.text} />
                  {bullet.children && bullet.children.length > 0 && (
                    <ul className="prose-list mt-2 space-y-1.5 text-sm text-foreground/70">
                      {bullet.children.map((child) => (
                        <li key={child}>
                          <InlineText text={child} />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}
