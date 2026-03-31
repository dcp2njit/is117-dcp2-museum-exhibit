import type { ReactNode } from "react";

import { SectionHeading } from "@/components/ui";
import { cn } from "@/lib/utils";

type ChapterSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  prose?: boolean;
};

export function ChapterSection({
  id,
  eyebrow,
  title,
  children,
  prose = false,
}: ChapterSectionProps) {
  return (
    <section
      className={cn(
        "exemplar-section chapter-section",
        prose && "chapter-section--prose"
      )}
      aria-labelledby={id}
    >
      <SectionHeading
        className="section-heading"
        eyebrow={eyebrow}
        title={title}
        titleId={id}
      />
      {children}
    </section>
  );
}
