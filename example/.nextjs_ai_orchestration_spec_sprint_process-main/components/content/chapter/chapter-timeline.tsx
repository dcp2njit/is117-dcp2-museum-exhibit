import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ChapterTimelineItem = {
  key: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  description: ReactNode;
  footer?: ReactNode;
};

export function ChapterTimeline({
  items,
  className,
  itemClassName,
}: {
  items: ChapterTimelineItem[];
  className?: string;
  itemClassName?: string;
}) {
  return (
    <ol className={cn("timeline-list", className)}>
      {items.map((item) => (
        <li key={item.key} className={cn("timeline-card", itemClassName)}>
          {item.eyebrow ? (
            <p className="timeline-year">{item.eyebrow}</p>
          ) : null}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.footer}
        </li>
      ))}
    </ol>
  );
}
