import type { ReactNode } from "react";

import { FocalImage } from "@/components/media/focal-image";
import { cn } from "@/lib/utils";

export type EditorialCardItem = {
  key?: string;
  title: ReactNode;
  description: ReactNode;
  meta?: ReactNode;
  footer?: ReactNode;
  imageUrl?: string;
  imageAlt?: string;
};

export function EditorialCardGrid({
  items,
  className,
  dense = false,
  cardClassName,
}: {
  items: EditorialCardItem[];
  className?: string;
  dense?: boolean;
  cardClassName?: string;
}) {
  return (
    <div
      className={cn("content-grid", dense && "content-grid--dense", className)}
    >
      {items.map((item) => (
        <article
          key={
            item.key ??
            (typeof item.title === "string" ? item.title : String(item.title))
          }
          className={cn(
            "content-card",
            item.imageUrl && "content-card--visual",
            cardClassName
          )}
        >
          {item.imageUrl ? (
            <div className="content-card__media">
              <FocalImage
                src={item.imageUrl}
                alt={item.imageAlt ?? String(item.title)}
                width={600}
                height={450}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="content-card__image"
              />
            </div>
          ) : null}
          <h3>{item.title}</h3>
          {item.meta ? <p className="content-card__meta">{item.meta}</p> : null}
          <div>{item.description}</div>
          {item.footer ? <div>{item.footer}</div> : null}
        </article>
      ))}
    </div>
  );
}
