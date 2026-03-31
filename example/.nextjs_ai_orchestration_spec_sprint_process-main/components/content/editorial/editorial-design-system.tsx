import type { CSSProperties, ElementType, ReactNode } from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const editorialEyebrowStyles = cva("font-semibold uppercase", {
  variants: {
    tone: {
      accent: "text-(--accent-strong)",
      inverse: "text-white/62",
    },
    scale: {
      compact: "text-[0.64rem] tracking-[0.2em]",
      default: "text-[0.69rem] tracking-[0.24em]",
      section: "text-[0.72rem] tracking-[0.28em]",
    },
  },
  defaultVariants: {
    tone: "accent",
    scale: "default",
  },
});

export function EditorialEyebrow({
  children,
  className,
  tone,
  scale,
  style,
}: {
  children: ReactNode;
  className?: string;
  tone?: "accent" | "inverse";
  scale?: "compact" | "default" | "section";
  style?: CSSProperties;
}) {
  return (
    <p
      className={cn(editorialEyebrowStyles({ tone, scale }), className)}
      style={style}
    >
      {children}
    </p>
  );
}

export function EditorialInsightCard({
  eyebrow,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  eyebrowScale,
  eyebrowTone,
  titleAs,
  footer,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  eyebrowScale?: "compact" | "default" | "section";
  eyebrowTone?: "accent" | "inverse";
  titleAs?: ElementType;
  footer?: ReactNode;
}) {
  const TitleTag = titleAs ?? "h3";

  return (
    <div className={className}>
      <div className="space-y-2.5">
        {eyebrow ? (
          <EditorialEyebrow tone={eyebrowTone} scale={eyebrowScale}>
            {eyebrow}
          </EditorialEyebrow>
        ) : null}
        <TitleTag
          className={cn(
            "font-(family-name:--font-display) text-foreground",
            titleClassName
          )}
        >
          {title}
        </TitleTag>
      </div>
      <div className="space-y-3">
        <p
          className={cn(
            "text-(--ink-72) text-sm leading-6.5 sm:text-[0.94rem] sm:leading-6.5",
            descriptionClassName
          )}
        >
          {description}
        </p>
        {footer}
      </div>
    </div>
  );
}
