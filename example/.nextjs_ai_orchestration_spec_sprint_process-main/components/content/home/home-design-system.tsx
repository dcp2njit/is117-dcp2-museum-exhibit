import { ArrowRight } from "lucide-react";
import { cva } from "class-variance-authority";

import {
  EditorialEyebrow,
  EditorialInsightCard,
  editorialEyebrowStyles,
} from "@/components/content/editorial/editorial-design-system";
import { FocalImage } from "@/components/media/focal-image";
import { cn } from "@/lib/utils";

export const homeTokens = {
  frame: "mx-auto w-full max-w-(--frame-width)",
  stack: "flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-14",
  border: "border-(--ink-12)",
  softBorder: "border-(--ink-10)",
  warmShadow: "shadow-[0_18px_52px_rgba(56,38,24,0.05)]",
  compactCardGrid:
    "grid grid-cols-[repeat(auto-fit,minmax(min(100%,12rem),1fr))] gap-2.5",
  supportCardGrid:
    "grid grid-cols-[repeat(auto-fit,minmax(min(100%,15rem),1fr))] gap-4",
  promptGrid: "grid grid-cols-[repeat(auto-fit,minmax(7.25rem,1fr))] gap-2",
  hoverLift: "hover-lift",

  ink: {
    bg08: "bg-(--ink-08)",
    border: "border-(--ink-12)",
    border16: "border-(--ink-16)",
    softBorder: "border-(--ink-10)",
    hoverBorder: "hover:border-(--ink-18)",
    text72: "text-(--ink-72)",
    text74: "text-(--ink-74)",
    text82: "text-(--ink-82)",
    text84: "text-(--ink-84)",
    text90: "text-(--ink-90)",
  },
  muted: {
    text70: "text-(--muted-70)",
    text72: "text-(--muted-72)",
    text76: "text-(--muted-76)",
    text78: "text-(--muted-78)",
  },
  surface: {
    warm70: "bg-(--surface-warm-70)",
    warm72: "bg-(--surface-warm-72)",
    warm74: "bg-(--surface-warm-74)",
    warm82: "bg-(--surface-warm-82)",
    warm92: "bg-(--surface-warm-92)",
    warm94: "bg-(--surface-warm-94)",
    warm97: "bg-(--surface-warm-97)",
    warm98: "bg-(--surface-warm-98)",
  },
  radius: {
    sm: "rounded-[1.2rem]",
    md: "rounded-[1.45rem]",
    lg: "rounded-2xl",
    xl: "rounded-[1.75rem]",
  },
} as const;

export const homeEyebrowStyles = editorialEyebrowStyles;

export const homePillStyles = cva(
  "rounded-full border px-3 py-2 text-center text-[0.74rem] font-semibold uppercase tracking-[0.18em]",
  {
    variants: {
      tone: {
        light: "border-(--ink-10) bg-(--surface-warm-74) text-(--ink-72)",
        inverse: "border border-white/12 bg-white/4 text-white/74",
      },
    },
    defaultVariants: {
      tone: "light",
    },
  }
);

export const HomeEyebrow = EditorialEyebrow;
export const HomeInsightCard = EditorialInsightCard;

export type MosaicVariantStyleSet = {
  container: string;
  body: string;
  title: string;
  image: string;
  copy: string;
  actionWrap?: string;
};

export const mosaicVariantStyles: Record<
  "feature" | "support" | "strip" | "rail",
  MosaicVariantStyleSet
> = {
  feature: {
    container: `rounded-2xl border border-(--ink-10) bg-[image:var(--gradient-warm-feature)] self-start ${homeTokens.hoverLift}`,
    body: "flex flex-col gap-4 p-5 sm:p-6 lg:p-7",
    title:
      "max-w-[10ch] text-[1.84rem] leading-[0.94] tracking-[-0.04em] sm:text-[2rem]",
    image: "aspect-16/11 sm:aspect-[16/10.2]",
    copy: "max-w-[34ch] text-(--ink-74) text-sm leading-7 sm:text-base",
  },
  support: {
    container: `rounded-2xl border border-(--ink-10) bg-[image:var(--gradient-warm-support)] self-start ${homeTokens.hoverLift}`,
    body: "flex flex-col gap-4 p-5 sm:p-6 lg:p-7",
    title:
      "max-w-[13ch] text-[1.3rem] leading-[0.98] tracking-[-0.03em] sm:text-[1.4rem]",
    image: "aspect-16/10",
    copy: "max-w-[34ch] text-(--ink-74) text-sm leading-7 sm:text-base",
  },
  strip: {
    container: `h-full rounded-2xl border border-(--ink-10) bg-[rgba(250,244,236,0.92)] ${homeTokens.hoverLift}`,
    body: "flex flex-1 flex-col justify-between gap-5 p-5 sm:p-6 lg:p-7 xl:grid xl:grid-cols-[minmax(0,0.92fr)_minmax(18rem,1.08fr)] xl:items-end xl:gap-8",
    title:
      "max-w-[12ch] text-[1.72rem] leading-[0.96] tracking-[-0.035em] sm:text-[1.88rem]",
    image: "aspect-16/7 sm:aspect-[16/6.2] xl:aspect-[16/5.3]",
    copy: "max-w-[34ch] text-(--ink-74) text-sm leading-7 sm:text-base",
    actionWrap: "xl:max-w-88 xl:justify-self-end",
  },
  rail: {
    container:
      "border-t border-(--ink-10) first:border-t-0 hover:bg-[rgba(255,255,255,0.45)]",
    body: "flex flex-1 flex-col justify-between gap-4 p-5 sm:p-6",
    title:
      "max-w-[12ch] text-[1.26rem] leading-[0.98] tracking-[-0.03em] sm:text-[1.38rem]",
    image: "aspect-16/10",
    copy: "max-w-[34ch] text-(--ink-74) text-sm leading-7 sm:text-base",
  },
};

export function HomeRouteAction({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-sm font-semibold tracking-[0.01em] text-(--accent-strong)",
        className
      )}
    >
      Follow this route
      <ArrowRight className="size-4" />
    </span>
  );
}

export function HomeSectionDivider({
  imageUrl,
  imageAlt,
}: {
  imageUrl: string;
  imageAlt: string;
}) {
  return (
    <div className="-mx-4 sm:-mx-6 lg:-mx-8">
      <div className="relative aspect-[4/1] w-full overflow-hidden sm:aspect-[5/1]">
        <FocalImage
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
