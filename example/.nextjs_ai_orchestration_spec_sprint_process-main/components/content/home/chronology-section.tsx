import Link from "next/link";

import type {
  ChronologyLedgerItem,
  ChronologyPhase,
  EraLink,
  HomeSectionHeading,
} from "@/lib/content/homepage";
import {
  HomeEyebrow,
  HomeInsightCard,
  homeTokens,
} from "@/components/content/home/home-design-system";
import {
  HomePanelSplit,
  HomeSectionSplit,
} from "@/components/content/home/home-shared";
import { FocalImage } from "@/components/media/focal-image";
import { cn } from "@/lib/utils";

function ChronologyCard({
  href,
  label,
  description,
  imageUrl,
  imageAlt,
}: EraLink) {
  const [eraNumber, eraTitle] = label.split(": ");

  return (
    <Link
      href={href}
      className={cn(
        "@container/era-card group min-w-68 snap-start overflow-hidden rounded-[1.45rem] border border-(--ink-10) bg-[image:var(--gradient-warm-card)] p-0 hover:bg-white sm:min-w-0 xl:h-full xl:min-w-0 xl:rounded-none xl:border-0 xl:bg-(--surface-warm-97) xl:p-0 xl:hover:translate-y-0 xl:hover:bg-white",
        homeTokens.hoverLift
      )}
    >
      {imageUrl && imageAlt && (
        <div className="relative aspect-[3/2] w-full overflow-hidden">
          <FocalImage
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="p-5 sm:p-6 xl:p-6">
        <HomeEyebrow>{eraNumber}</HomeEyebrow>
        <h3 className="mt-3 font-(family-name:--font-display) text-[1.38rem] leading-[0.95] tracking-[-0.03em] text-foreground sm:text-[1.5rem] xl:text-[1.22rem]">
          {eraTitle}
        </h3>
        <p className="mt-3 max-w-[30ch] text-(--ink-74) text-sm leading-6.5 sm:text-[0.96rem] sm:leading-6.75 xl:max-w-none xl:text-[0.88rem] xl:leading-6">
          {description}
        </p>
      </div>
    </Link>
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
      <div className="overflow-hidden rounded-2xl border border-(--ink-12) bg-[image:var(--gradient-warm-panel)] shadow-[0_14px_40px_rgba(56,38,24,0.05)]">
        <HomePanelSplit
          className="border-b border-(--ink-10) px-6 py-6 sm:px-7 sm:py-7 xl:grid-cols-12 xl:items-stretch xl:px-8"
          leftClassName="space-y-4 xl:col-span-5 xl:pr-5"
          rightClassName="grid gap-px overflow-hidden rounded-[1.45rem] border border-(--ink-10) bg-(--ink-08) xl:col-span-7 xl:grid-cols-3"
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

        <div className="relative sm:contents">
          {/* Fade edges to signal horizontal scrollability — mobile only */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-4 bg-gradient-to-r from-[rgba(251,246,240,0.98)] to-transparent sm:hidden"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-[rgba(251,246,240,0.98)] to-transparent sm:hidden"
            aria-hidden="true"
          />

          <div className="-mx-4 flex snap-x gap-3 overflow-x-auto scroll-smooth px-4 pb-4 pt-4 scrollbar-thin carousel-touch sm:mx-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:px-4 sm:pb-4 xl:grid-cols-7 xl:gap-px xl:bg-(--ink-08) xl:px-0 xl:py-0">
            {eraLinks.map((era) => (
              <ChronologyCard key={era.href} {...era} />
            ))}
            <div className="carousel-progress" />
          </div>
        </div>
      </div>
    </section>
  );
}
