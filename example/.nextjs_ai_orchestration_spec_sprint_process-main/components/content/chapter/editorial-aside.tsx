import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type EditorialAsideTone = "note" | "contrast";

type EditorialAsideProps = {
  label?: string;
  title: string;
  tone?: EditorialAsideTone;
  children: ReactNode;
};

export function EditorialAside({
  label = "Editorial Note",
  title,
  tone = "note",
  children,
}: EditorialAsideProps) {
  return (
    <aside
      className={cn(
        "editorial-aside callout-panel callout-panel--aside",
        `editorial-aside--${tone}`
      )}
    >
      <p className="editorial-aside__label callout-panel__label">{label}</p>
      <h3 className="editorial-aside__title callout-panel__title">{title}</h3>
      <div className="editorial-aside__body callout-panel__body">
        {children}
      </div>
    </aside>
  );
}
