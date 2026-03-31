import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const sectionHeadingVariants = cva("space-y-3", {
  variants: {
    align: {
      left: "text-left",
      center: "text-center",
    },
    tone: {
      default: "text-[color:var(--foreground)]",
      inverse: "text-white",
    },
  },
  defaultVariants: {
    align: "left",
    tone: "default",
  },
});

type SectionHeadingProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof sectionHeadingVariants> & {
    eyebrow: string;
    title: string;
    description?: string;
    titleId?: string;
  };

function SectionHeading({
  className,
  eyebrow,
  title,
  description,
  titleId,
  align,
  tone,
  ...props
}: SectionHeadingProps) {
  const eyebrowTone =
    tone === "inverse" ? "text-white/68" : "text-[color:var(--accent-strong)]";
  const descriptionTone =
    tone === "inverse" ? "text-white/80" : "text-(--ink-74)";

  return (
    <div
      className={cn(sectionHeadingVariants({ align, tone, className }))}
      {...props}
    >
      <p
        className={cn(
          "text-[0.72rem] font-semibold uppercase tracking-[0.26em]",
          eyebrowTone
        )}
      >
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className="max-w-4xl font-(family-name:--font-display) text-[1.85rem] leading-[1.02] tracking-[-0.035em] sm:text-[2.35rem] sm:leading-[0.98]"
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-176 text-base leading-7 sm:text-[1.05rem] sm:leading-8",
            descriptionTone
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export { SectionHeading };
