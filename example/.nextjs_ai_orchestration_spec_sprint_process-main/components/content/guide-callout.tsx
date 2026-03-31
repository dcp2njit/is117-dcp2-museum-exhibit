import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type GuideCalloutVariant = "why-it-matters" | "misconception-watch";

type GuideCalloutProps = {
  variant: GuideCalloutVariant;
  title: string;
  children: ReactNode;
};

const guideCalloutConfig: Record<
  GuideCalloutVariant,
  { label: string; className: string }
> = {
  "why-it-matters": {
    label: "Why It Matters",
    className: "guide-callout--why",
  },
  "misconception-watch": {
    label: "Misconception Watch",
    className: "guide-callout--watch",
  },
};

export function GuideCallout({ variant, title, children }: GuideCalloutProps) {
  const config = guideCalloutConfig[variant];

  return (
    <aside className={cn("guide-callout callout-panel", config.className)}>
      <p className="guide-callout__label callout-panel__label">
        {config.label}
      </p>
      <h3 className="guide-callout__title callout-panel__title">{title}</h3>
      <div className="guide-callout__body callout-panel__body">{children}</div>
    </aside>
  );
}
