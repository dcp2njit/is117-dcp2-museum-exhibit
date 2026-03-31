import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type {
  HeroVisual,
  HomePageContent,
  OpeningSignal,
  PrimaryRoute,
} from "@/lib/content/homepage";
import { FocalImage } from "@/components/media/focal-image";
import { Button, Panel } from "@/components/ui";
import {
  HomeEyebrow,
  homeTokens,
} from "@/components/content/home/home-design-system";
import { HomePanelSplit } from "@/components/content/home/home-shared";
import { cn } from "@/lib/utils";

function OpeningSignalCard({ eyebrow, title, description }: OpeningSignal) {
  return (
    <div className="rounded-[1.2rem] border border-(--ink-10) bg-(--surface-warm-70) p-4 sm:p-5">
      <HomeEyebrow className="text-[0.68rem]">{eyebrow}</HomeEyebrow>
      <p
        className="mt-2 max-w-[12ch] font-(family-name:--font-display) leading-none tracking-[-0.028em] text-foreground"
        style={{ fontSize: "var(--opening-step-1)" }}
      >
        {title}
      </p>
      <p
        className="mt-2.5 max-w-[26ch] text-(--ink-72)"
        style={{
          fontSize: "calc(var(--opening-step-0) * 0.92)",
          lineHeight: "1.5",
        }}
      >
        {description}
      </p>
    </div>
  );
}

function HeroVisualLink({
  href,
  eyebrow,
  title,
  imageUrl,
  imageAlt,
  variant,
}: HeroVisual) {
  const isFeature = variant === "feature";

  return (
    <Link
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-(--ink-12)",
        isFeature
          ? "bg-(--surface-warm-94) min-h-84 sm:min-h-100 xl:h-full xl:min-h-0"
          : "bg-(--surface-warm-92) self-start"
      )}
    >
      {isFeature ? (
        <FocalImage
          src={imageUrl ?? ""}
          alt={imageAlt ?? title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 42vw"
          priority
          loading="eager"
          className="object-cover transition duration-500 group-hover:scale-[1.02] hover-scale-guard"
        />
      ) : (
        <FocalImage
          src={imageUrl ?? ""}
          alt={imageAlt ?? title}
          width={960}
          height={720}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 24vw"
          className="aspect-5/4 w-full object-cover transition duration-500 group-hover:scale-[1.02] hover-scale-guard xl:aspect-[5/3.45]"
        />
      )}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 bg-[image:var(--gradient-image-overlay)] text-white",
          isFeature ? "p-5 sm:p-6" : "p-4 sm:p-5"
        )}
      >
        <p
          className={cn(
            "font-semibold uppercase text-white/76",
            isFeature
              ? "text-[0.72rem] tracking-[0.22em] text-white/78"
              : "text-[0.68rem] tracking-[0.22em]"
          )}
        >
          {eyebrow}
        </p>
        <h2
          className={cn(
            "font-(family-name:--font-display) tracking-[-0.03em]",
            isFeature
              ? "mt-2 max-w-[10ch] text-[1.95rem] leading-[0.98] sm:text-[2.1rem]"
              : "mt-1.5 max-w-[11ch] text-[1.35rem] leading-[0.99] sm:text-[1.48rem]"
          )}
        >
          {title}
        </h2>
      </div>
    </Link>
  );
}

function EditorialRouteLink({
  href,
  eyebrow,
  title,
  description,
  icon: Icon,
}: PrimaryRoute) {
  return (
    <Link
      href={href}
      className="group border-t border-(--ink-12) px-0 py-4 transition first:border-t-0 sm:py-4.5 xl:border-t-0 xl:border-l xl:px-5 xl:first:border-l-0 xl:first:pl-0 xl:py-0"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <HomeEyebrow>{eyebrow}</HomeEyebrow>
          <h3 className="max-w-[15ch] font-(family-name:--font-display) text-[1.38rem] leading-[0.98] tracking-[-0.03em] text-foreground transition group-hover:text-(--accent-strong) sm:text-[1.5rem] xl:max-w-[14ch] xl:text-[1.34rem]">
            {title}
          </h3>
        </div>
        <span className="mt-1 text-(--accent-strong)">
          <Icon className="size-4" />
        </span>
      </div>
      <p className="mt-3 max-w-[28ch] text-(--ink-72) text-sm leading-6.5 sm:text-[0.94rem] xl:max-w-none xl:text-[0.88rem] xl:leading-6">
        {description}
      </p>
    </Link>
  );
}

type OpeningSectionProps = HomePageContent["opening"] & {
  openingTypeScale: CSSProperties;
};

export function OpeningSection({
  openingTypeScale,
  eyebrow,
  titleLines,
  deck,
  signals,
  heroFeature,
  heroSupports,
  publicAiCard,
  primaryRoutes,
  startCard,
}: OpeningSectionProps) {
  return (
    <Panel
      asChild
      variant="warm"
      size={null}
      className={cn(
        "overflow-hidden p-0",
        homeTokens.border,
        homeTokens.warmShadow
      )}
    >
      <section id="home-opening" className="grid gap-0">
        <HomePanelSplit
          className="lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] xl:grid-cols-12 xl:items-start"
          leftClassName="border-b border-(--ink-12) p-6 sm:p-8 lg:border-b-0 lg:border-r xl:col-span-5 xl:p-9"
          rightClassName="p-3 sm:p-4 xl:col-span-7 xl:p-5"
          left={
            <div className="space-y-6 sm:space-y-7" style={openingTypeScale}>
              <HomeEyebrow
                scale="section"
                style={{ fontSize: "var(--opening-step-negative-1)" }}
              >
                {eyebrow}
              </HomeEyebrow>
              <h1
                aria-label={titleLines.join(" ")}
                className="font-(family-name:--font-display) tracking-[-0.045em] text-foreground"
                style={{
                  fontSize:
                    "clamp(3.2rem, 2.4rem + 2.4vw, var(--opening-step-4))",
                  lineHeight: "0.89",
                  maxWidth: "9.4ch",
                }}
              >
                {titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p
                className="text-(--ink-84)"
                style={{
                  fontSize:
                    "clamp(1.04rem, 0.98rem + 0.35vw, var(--opening-step-1))",
                  lineHeight: "var(--opening-body-leading)",
                  maxWidth: "100%",
                  width: "100%",
                }}
              >
                {deck}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {signals.map((signal) => (
                  <OpeningSignalCard key={signal.title} {...signal} />
                ))}
              </div>
            </div>
          }
          right={
            <div className="grid auto-rows-min gap-3 sm:grid-cols-[minmax(0,1.08fr)_minmax(15rem,0.92fr)] xl:grid-cols-[minmax(0,1.04fr)_minmax(15rem,0.96fr)]">
              <HeroVisualLink {...heroFeature} />
              <div className="grid auto-rows-min gap-3 self-start xl:content-start">
                {heroSupports.map((item) => (
                  <HeroVisualLink key={item.title} {...item} />
                ))}
                <Link
                  href={publicAiCard.href}
                  className="self-start overflow-hidden rounded-2xl border border-(--ink-12) bg-[linear-gradient(180deg,var(--dark-card-from),var(--dark-card-to))] text-white"
                >
                  <div className="grid gap-3 p-5 sm:p-5.5">
                    <div>
                      <HomeEyebrow tone="inverse" className="text-white/68">
                        {publicAiCard.eyebrow}
                      </HomeEyebrow>
                      <p className="mt-2 max-w-[8ch] font-(family-name:--font-display) text-[1.34rem] leading-[0.97] tracking-[-0.03em] text-white sm:text-[1.46rem]">
                        {publicAiCard.title}
                      </p>
                      <p className="mt-2.5 max-w-[25ch] text-[0.88rem] leading-6 text-white/82 sm:text-[0.9rem]">
                        {publicAiCard.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {publicAiCard.themes.map((theme) => (
                        <span
                          key={theme}
                          className="rounded-full border border-white/16 bg-white/8 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/82"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between border-t border-white/12 pt-3 text-[0.84rem] font-semibold tracking-[0.01em] text-white/86">
                      <span>{publicAiCard.cta}</span>
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          }
        />

        <div className="border-t border-(--ink-12) px-6 py-5 sm:px-8 sm:py-6 xl:px-9 xl:py-6">
          <div className="grid gap-0 md:grid-cols-2 md:gap-x-8 md:gap-y-5 xl:grid-cols-4 xl:gap-0">
            {primaryRoutes.map((route) => (
              <EditorialRouteLink key={route.title} {...route} />
            ))}

            <div className="border-t border-(--ink-12) pt-4 md:pt-0 xl:border-l xl:border-t-0 xl:pl-5">
              <div className="space-y-3">
                <HomeEyebrow>{startCard.eyebrow}</HomeEyebrow>
                <h3 className="max-w-[12ch] font-(family-name:--font-display) text-[1.34rem] leading-[0.98] tracking-[-0.03em] text-foreground sm:text-[1.46rem]">
                  {startCard.title}
                </h3>
                <p className="max-w-[24ch] text-(--ink-72) text-sm leading-6.5 sm:text-[0.92rem] sm:leading-6.5">
                  {startCard.description}
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="mt-4 w-full justify-between px-5 xl:max-w-52"
              >
                <Link href={startCard.href}>
                  {startCard.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Panel>
  );
}
