import type { ReactNode } from "react";

import { EditorialInsightCard } from "@/components/content/editorial/editorial-design-system";
import { cn } from "@/lib/utils";

export type EditorialSummaryItem = {
  eyebrow?: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  footer?: ReactNode;
};

export function EditorialSummaryGrid({
  items,
  className,
  dense = true,
  cardClassName,
  titleClassName,
  descriptionClassName,
  eyebrowScale,
}: {
  items: EditorialSummaryItem[];
  className?: string;
  dense?: boolean;
  cardClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  eyebrowScale?: "compact" | "default" | "section";
}) {
  return (
    <div
      className={cn("content-grid", dense && "content-grid--dense", className)}
    >
      {items.map((item) => (
        <article
          key={`${item.eyebrow ?? "item"}-${item.title}`}
          className={cn("content-card", cardClassName)}
        >
          <EditorialInsightCard
            eyebrow={item.eyebrow}
            title={item.title}
            description={item.description}
            titleClassName={titleClassName}
            descriptionClassName={descriptionClassName}
            eyebrowScale={eyebrowScale}
            footer={
              item.footer ??
              (item.href && item.linkLabel ? (
                <p className="artifact-note">
                  <a href={item.href}>{item.linkLabel}</a>
                </p>
              ) : null)
            }
          />
        </article>
      ))}
    </div>
  );
}
