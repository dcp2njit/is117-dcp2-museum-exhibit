import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type {
  ChronologyLedgerItem,
  ChronologyPhase,
  CompanionRoute,
  EditorialEntry,
  EraLink,
  HeroVisual,
  HomeAction,
  HomeSectionHeading,
  OpeningHighlightCard,
  OpeningSignal,
  OpeningStartCard,
  PrimaryRoute,
  ReadingModelSignal,
  ReadingPromptBlock,
  MosaicVariant,
} from "@/lib/content/homepage";
import { FocalImage } from "@/components/media/focal-image";
import { Button, Panel, SectionHeading } from "@/components/ui";
import {
  HomeEyebrow,
  HomeInsightCard,
  HomeRouteAction,
  homePillStyles,
  homeTokens,
} from "@/components/content/home/home-design-system";
import { cn } from "@/lib/utils";

const mosaicVariantStyles: Record<
  MosaicVariant,
  {
    container: string;
    body: string;
    title: string;
    image: string;
    copy: string;
    actionWrap?: string;
  }
> = {
  feature: {
    container:
      "rounded-2xl border border-(--ink-10) bg-[linear-gradient(180deg,var(--surface-warm-98),rgba(247,241,234,0.9))] self-start hover:-translate-y-0.5 hover:border-(--ink-18)",
    body: "flex flex-col gap-4 p-5 sm:p-6 lg:p-7",
    title:
      "max-w-[10ch] text-[1.84rem] leading-[0.94] tracking-[-0.04em] sm:text-[2rem]",
    image: "aspect-16/11 sm:aspect-[16/10.2]",
    copy: "max-w-[34ch] text-(--ink-74) text-sm leading-7 sm:text-base",
  },
  support: {
    container:
      "rounded-2xl border border-(--ink-10) bg-[linear-gradient(180deg,var(--surface-warm-92),rgba(248,243,237,0.82))] self-start hover:-translate-y-0.5 hover:border-(--ink-18)",
    body: "flex flex-col gap-4 p-5 sm:p-6 lg:p-7",
    title:
      "max-w-[13ch] text-[1.3rem] leading-[0.98] tracking-[-0.03em] sm:text-[1.4rem]",
    image: "aspect-16/10",
    copy: "max-w-[34ch] text-(--ink-74) text-sm leading-7 sm:text-base",
  },
  strip: {
    container:
      "h-full rounded-2xl border border-(--ink-10) bg-[rgba(250,244,236,0.92)] hover:-translate-y-0.5 hover:border-(--ink-18)",
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

function HomeSectionSplit({
  className,
  left,
  right,
  leftClassName,
  rightClassName,
}: {
  className?: string;
  left: React.ReactNode;
  right: React.ReactNode;
  leftClassName?: string;
  rightClassName?: string;
}) {
  return (
    <div className={cn("grid gap-4 xl:items-start xl:gap-5", className)}>
      <div className={leftClassName}>{left}</div>
      <div className={rightClassName}>{right}</div>
    </div>
  );
}

function HomePanelSplit({
  className,
  left,
  right,
  leftClassName,
  rightClassName,
}: {
  className?: string;
  left: React.ReactNode;
  right: React.ReactNode;
  leftClassName?: string;
  rightClassName?: string;
}) {
  return (
    <div className={cn("grid gap-0", className)}>
      <div className={leftClassName}>{left}</div>
      <div className={rightClassName}>{right}</div>
    </div>
  );
}

function OpeningSignalCard({ eyebrow, title, description }: OpeningSignal) {
  return (
    <div className="rounded-[1.2rem] border border-(--ink-10) bg-(--surface-warm-70) p-4 sm:p-5">
      <HomeEyebrow className="text-[0.68rem]">{eyebrow}</HomeEyebrow>
      <h2
        className="mt-2 max-w-[12ch] font-(family-name:--font-display) leading-none tracking-[-0.028em] text-foreground"
        style={{ fontSize: "var(--opening-step-1)" }}
      >
        {title}
      </h2>
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
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      ) : (
        <FocalImage
          src={imageUrl ?? ""}
          alt={imageAlt ?? title}
          width={960}
          height={720}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 24vw"
          className="aspect-5/4 w-full object-cover transition duration-500 group-hover:scale-[1.02] xl:aspect-[5/3.45]"
        />
      )}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(17,12,8,0.88))] text-white",
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

function ChronologyCard({ href, label, description }: EraLink) {
  const [eraNumber, eraTitle] = label.split(": ");

  return (
    <Link
      href={href}
      className="group min-w-68 snap-start rounded-[1.45rem] border border-(--ink-10) bg-[linear-gradient(180deg,var(--surface-warm-98),rgba(248,242,236,0.92))] p-5 transition hover:-translate-y-0.5 hover:border-(--ink-18) hover:bg-white sm:min-w-0 sm:p-6 xl:h-full xl:min-w-0 xl:rounded-none xl:border-0 xl:bg-(--surface-warm-97) xl:p-6 xl:hover:translate-y-0 xl:hover:bg-white"
    >
      <HomeEyebrow>{eraNumber}</HomeEyebrow>
      <h3 className="mt-3 text-balance font-(family-name:--font-display) text-[1.38rem] leading-[0.95] tracking-[-0.03em] text-foreground sm:text-[1.5rem] xl:text-[1.22rem]">
        {eraTitle}
      </h3>
      <p className="mt-3 max-w-[30ch] text-(--ink-74) text-sm leading-6.5 sm:text-[0.96rem] sm:leading-6.75 xl:max-w-none xl:text-[0.88rem] xl:leading-6">
        {description}
      </p>
    </Link>
  );
}

function CompanionRouteLink({
  href,
  eyebrow,
  title,
  description,
  icon: Icon,
}: CompanionRoute) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col justify-between bg-white/3 p-5 transition hover:bg-white/6 sm:p-6"
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <HomeEyebrow tone="inverse">{eyebrow}</HomeEyebrow>
          <Icon className="mt-0.5 size-4 shrink-0 text-white/54" />
        </div>
        <h3 className="max-w-[15ch] text-balance font-(family-name:--font-display) text-[1.32rem] leading-[0.96] tracking-[-0.032em] text-white transition group-hover:text-white/88 sm:text-[1.42rem]">
          {title}
        </h3>
      </div>
      <p className="mt-4 max-w-[28ch] text-sm leading-6.5 text-white/74 sm:text-[0.95rem] sm:leading-6.5">
        {description}
      </p>
    </Link>
  );
}

function MosaicEntry({
  href,
  eyebrow,
  title,
  description,
  imageUrl,
  imageAlt,
  variant,
}: EditorialEntry) {
  const styles = mosaicVariantStyles[variant];

  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col overflow-hidden transition",
        styles.container
      )}
    >
      {imageUrl ? (
        <FocalImage
          src={imageUrl}
          alt={imageAlt ?? title}
          width={1200}
          height={840}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className={cn("w-full object-cover", styles.image)}
        />
      ) : null}
      <div className={styles.body}>
        <div className="space-y-3">
          <HomeEyebrow>{eyebrow}</HomeEyebrow>
          <h3
            className={cn(
              "text-balance font-(family-name:--font-display) text-foreground",
              styles.title
            )}
          >
            {title}
          </h3>
        </div>
        <div className={cn("space-y-5", styles.actionWrap)}>
          <p className={styles.copy}>{description}</p>
          <HomeRouteAction />
        </div>
      </div>
    </Link>
  );
}

function getScenesEntrySpanClass(entry: EditorialEntry, index: number) {
  if (entry.variant === "strip") {
    return "xl:col-span-2";
  }

  return index === 0 ? "xl:col-span-2" : "xl:col-span-1";
}

export function OpeningSection({
  openingTypeScale,
  openingEyebrow,
  heroTitleLines,
  openingDeck,
  openingSignals,
  heroFeature,
  heroSupports,
  publicAiCard,
  primaryRoutes,
  startCard,
}: {
  openingTypeScale: CSSProperties;
  openingEyebrow: string;
  heroTitleLines: string[];
  openingDeck: string;
  openingSignals: OpeningSignal[];
  heroFeature: HeroVisual;
  heroSupports: HeroVisual[];
  publicAiCard: OpeningHighlightCard;
  primaryRoutes: PrimaryRoute[];
  startCard: OpeningStartCard;
}) {
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
              <p
                className="text-(--accent-strong) font-semibold uppercase tracking-[0.28em]"
                style={{ fontSize: "var(--opening-step-negative-1)" }}
              >
                {openingEyebrow}
              </p>
              <h1
                aria-label={heroTitleLines.join(" ")}
                className="font-(family-name:--font-display) tracking-[-0.045em] text-foreground"
                style={{
                  fontSize:
                    "clamp(3.2rem, 2.4rem + 2.4vw, var(--opening-step-4))",
                  lineHeight: "0.89",
                  maxWidth: "9.4ch",
                }}
              >
                {heroTitleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p
                className="text-[rgba(27,23,19,0.84)]"
                style={{
                  fontSize:
                    "clamp(1.04rem, 0.98rem + 0.35vw, var(--opening-step-1))",
                  lineHeight: "var(--opening-body-leading)",
                  maxWidth: "100%",
                  width: "100%",
                }}
              >
                {openingDeck}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {openingSignals.map((signal) => (
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
                      <p className="text-[0.69rem] font-semibold uppercase tracking-[0.24em] text-white/68">
                        {publicAiCard.eyebrow}
                      </p>
                      <h2 className="mt-2 max-w-[8ch] font-(family-name:--font-display) text-[1.34rem] leading-[0.97] tracking-[-0.03em] text-white sm:text-[1.46rem]">
                        {publicAiCard.title}
                      </h2>
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

export function ChronologySection({
  heading,
  chronologyLedger,
  macroArcEyebrow,
  macroArcDescription,
  chronologyPhases,
  eraLinks,
}: {
  heading: HomeSectionHeading;
  chronologyLedger: ChronologyLedgerItem[];
  macroArcEyebrow: string;
  macroArcDescription: string;
  chronologyPhases: ChronologyPhase[];
  eraLinks: EraLink[];
}) {
  return (
    <section id="home-chronology" className="space-y-5 sm:space-y-6">
      <div className="overflow-hidden rounded-2xl border border-(--ink-12) bg-[linear-gradient(180deg,rgba(251,246,240,0.98),rgba(244,236,228,0.94))] shadow-[0_14px_40px_rgba(56,38,24,0.05)]">
        <HomePanelSplit
          className="border-b border-(--ink-10) px-6 py-6 sm:px-7 sm:py-7 xl:grid-cols-12 xl:items-stretch xl:px-8"
          leftClassName="space-y-4 xl:col-span-5 xl:pr-5"
          rightClassName="grid gap-px overflow-hidden rounded-[1.45rem] border border-(--ink-10) bg-[rgba(43,31,22,0.08)] xl:col-span-7 xl:grid-cols-3"
          left={
            <>
              <HomeEyebrow scale="section">{heading.eyebrow}</HomeEyebrow>
              <h2 className="max-w-[11ch] font-(family-name:--font-display) text-[2.45rem] leading-[0.93] tracking-[-0.04em] text-foreground sm:text-[2.8rem] xl:text-[3.05rem]">
                {heading.title}
              </h2>
              <p className="max-w-[34ch] text-(--ink-82) text-[1rem] leading-7.5 sm:text-[1.05rem] sm:leading-7.75 xl:max-w-[30ch]">
                {heading.description}
              </p>
            </>
          }
          right={
            <>
              {chronologyLedger.map((item) => (
                <HomeInsightCard
                  key={item.eyebrow}
                  eyebrow={item.eyebrow}
                  title={item.title}
                  description={item.description}
                  className="flex min-h-44 flex-col justify-between bg-(--surface-warm-82) p-4 sm:p-5"
                  titleClassName="max-w-[13ch] text-[1.28rem] leading-[0.96] tracking-[-0.032em] sm:text-[1.42rem]"
                  descriptionClassName="mt-4 max-w-[26ch] text-(--muted-72)"
                />
              ))}
            </>
          }
        />

        <HomeSectionSplit
          className="border-t border-(--ink-10) px-6 py-4 sm:px-7 xl:grid-cols-[minmax(12rem,0.34fr)_minmax(0,1fr)] xl:items-center xl:py-4.5"
          leftClassName="space-y-1"
          rightClassName={cn(
            homeTokens.compactCardGrid,
            "xl:justify-self-end xl:min-w-176"
          )}
          left={
            <>
              <HomeEyebrow>{macroArcEyebrow}</HomeEyebrow>
              <p className="text-[0.84rem] leading-6 text-(--muted-72) sm:text-[0.92rem]">
                {macroArcDescription}
              </p>
            </>
          }
          right={
            <>
              {chronologyPhases.map((phase) => (
                <HomeInsightCard
                  key={phase.title}
                  eyebrow={phase.eyebrow}
                  title={phase.title}
                  description={phase.description}
                  className="rounded-[1.2rem] border border-(--ink-10) bg-(--surface-warm-72) px-4 py-3"
                  eyebrowScale="compact"
                  titleClassName="mt-1.5 text-[1.06rem] leading-[0.98] tracking-[-0.025em] sm:text-[1.14rem]"
                  descriptionClassName="mt-1.5 text-[0.8rem] leading-5.5 text-(--muted-70) sm:text-[0.84rem]"
                />
              ))}
            </>
          }
        />

        <div className="-mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-4 pt-4 sm:mx-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:px-4 sm:pb-4 xl:grid-cols-7 xl:gap-px xl:bg-[rgba(43,31,22,0.08)] xl:px-0 xl:py-0">
          {eraLinks.map((era) => (
            <ChronologyCard key={era.href} {...era} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReadingModelSection({
  heading,
  readingModelSignals,
  primaryCta,
  promptBlock,
  companionRoutes,
}: {
  heading: HomeSectionHeading;
  readingModelSignals: ReadingModelSignal[];
  primaryCta: HomeAction;
  promptBlock: ReadingPromptBlock;
  companionRoutes: CompanionRoute[];
}) {
  return (
    <Panel
      id="home-reading-model"
      className="overflow-hidden border-(--ink-18) bg-[linear-gradient(180deg,rgba(69,31,24,0.99),rgba(28,19,15,0.99))] text-white shadow-[0_20px_68px_rgba(27,18,15,0.16)]"
    >
      <HomePanelSplit
        className="xl:grid-cols-[minmax(20rem,0.54fr)_minmax(0,1fr)] xl:items-stretch"
        leftClassName="flex h-full flex-col justify-between gap-7 p-6 sm:p-7 xl:p-8 xl:pr-7"
        rightClassName="grid border-t border-white/12 xl:border-l xl:border-t-0"
        left={
          <>
            <div className="space-y-5">
              <p className="text-white/62 text-[0.72rem] font-semibold uppercase tracking-[0.28em]">
                {heading.eyebrow}
              </p>
              <h2 className="max-w-[10ch] text-balance font-(family-name:--font-display) text-[2.45rem] leading-[0.93] tracking-[-0.04em] text-white sm:text-[2.8rem] xl:text-[3.02rem]">
                {heading.title}
              </h2>
              <p className="max-w-[30ch] text-[1rem] leading-7.25 text-white/80 sm:text-[1.02rem] sm:leading-7.5">
                {heading.description}
              </p>
            </div>
            <div className="space-y-4 border-t border-white/12 pt-4">
              <div className="grid gap-3 sm:grid-cols-2">
                {readingModelSignals.map((signal) => (
                  <div key={signal.eyebrow} className="space-y-1.5">
                    <HomeEyebrow tone="inverse" className="text-white/58">
                      {signal.eyebrow}
                    </HomeEyebrow>
                    <p className="max-w-[28ch] text-sm leading-6.5 text-white/72 sm:text-[0.94rem] sm:leading-6.5">
                      {signal.description}
                    </p>
                  </div>
                ))}
              </div>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/18 bg-white/3 px-5 text-white hover:bg-white/8 xl:max-w-64"
              >
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
            </div>
          </>
        }
        right={
          <>
            <div className="grid gap-4 border-b border-white/12 p-6 sm:p-7 xl:grid-cols-[minmax(17rem,0.58fr)_minmax(0,1fr)] xl:items-center xl:p-8">
              <div className="space-y-2">
                <HomeEyebrow tone="inverse" className="text-white/56">
                  {promptBlock.eyebrow}
                </HomeEyebrow>
                <h3 className="max-w-[14ch] text-balance font-(family-name:--font-display) text-[1.55rem] leading-[0.97] tracking-[-0.03em] text-white sm:text-[1.7rem]">
                  {promptBlock.title}
                </h3>
              </div>
              <div
                className={cn(
                  homeTokens.promptGrid,
                  "xl:min-w-88 xl:justify-self-end"
                )}
              >
                {promptBlock.prompts.map((prompt) => (
                  <div
                    key={prompt}
                    className={homePillStyles({ tone: "inverse" })}
                  >
                    {prompt}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-px bg-white/10 md:auto-rows-fr md:grid-cols-2 xl:grid-rows-2">
              {companionRoutes.map((route) => (
                <CompanionRouteLink key={route.title} {...route} />
              ))}
            </div>
          </>
        }
      />
    </Panel>
  );
}

export function ScenesSection({
  heading,
  scenesFeature,
  scenesGridEntries,
}: {
  heading: HomeSectionHeading;
  scenesFeature: EditorialEntry;
  scenesGridEntries: EditorialEntry[];
}) {
  return (
    <section id="home-scenes" className="space-y-6 sm:space-y-8">
      <div>
        <SectionHeading
          className="max-w-4xl"
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
        />
      </div>

      <HomeSectionSplit
        className="xl:grid-cols-[minmax(24rem,0.68fr)_minmax(0,1fr)]"
        leftClassName="self-start"
        rightClassName="grid gap-4 self-start sm:grid-cols-2 xl:grid-cols-3"
        left={<MosaicEntry {...scenesFeature} />}
        right={
          <>
            {scenesGridEntries.map((entry, index) => (
              <div
                key={entry.title}
                className={cn(
                  entry.variant === "strip" && "sm:col-span-2",
                  getScenesEntrySpanClass(entry, index)
                )}
              >
                <MosaicEntry {...entry} />
              </div>
            ))}
          </>
        }
      />
    </section>
  );
}
