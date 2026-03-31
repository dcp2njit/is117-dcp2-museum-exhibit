import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ReadingEntry = {
  work: string;
  year: string;
  why: string;
  href: string;
  lineage: string;
};

export type ReadingCluster = {
  key: string;
  id?: string;
  eyebrow: string;
  title: string;
  description: ReactNode;
  routeHref: string;
  routeLabel?: string;
  imageUrl?: string;
  imageAlt?: string;
  readings: ReadingEntry[];
};

export function ReadingClusterGrid({
  items,
  className,
}: {
  items: ReadingCluster[];
  className?: string;
}) {
  return (
    <div className={cn("content-grid paper-cluster-grid", className)}>
      {items.map((item) => (
        <article
          key={item.key}
          id={item.id}
          className={cn(
            "content-card cluster-card",
            item.imageUrl && "content-card--visual"
          )}
        >
          {item.imageUrl ? (
            <div className="cluster-card__hero">
              <Image
                src={item.imageUrl}
                alt={item.imageAlt ?? ""}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ) : null}
          <div className="cluster-card__header">
            <p className="content-card__meta">{item.eyebrow}</p>
            <h3>{item.title}</h3>
            <div>{item.description}</div>
            <p className="cluster-card__route">
              <a href={item.routeHref}>
                {item.routeLabel ?? "Read the matching era chapter"}
              </a>
              <span className="cluster-card__count">
                {item.readings.length}{" "}
                {item.readings.length === 1 ? "paper" : "papers"}
              </span>
            </p>
          </div>
          <div className="reading-stack">
            {item.readings.map((reading, index) => (
              <div
                key={`${reading.year}-${reading.work}`}
                className="reading-entry"
              >
                <div className="reading-entry__head">
                  <span className="reading-entry__year">{reading.year}</span>
                  <span className="reading-entry__index">
                    {index + 1} of {item.readings.length}
                  </span>
                </div>
                <h4>
                  <a href={reading.href} target="_blank" rel="noreferrer">
                    {reading.work}
                  </a>
                </h4>
                <p className="reading-entry__why">{reading.why}</p>
                <p className="reading-entry__lineage">
                  <strong>Connects forward:</strong> {reading.lineage}
                </p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
