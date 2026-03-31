import Link from "next/link";

import type {
  CompanionRoute,
  HomeAction,
  HomeSectionHeading,
  ReadingModelSignal,
  ReadingPromptBlock,
} from "@/lib/content/homepage";
import { Button, Panel } from "@/components/ui";
import {
  HomeEyebrow,
  homePillStyles,
  homeTokens,
} from "@/components/content/home/home-design-system";
import { HomePanelSplit } from "@/components/content/home/home-shared";
import { cn } from "@/lib/utils";

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
      className="@container/reading-card group flex h-full flex-col justify-between bg-white/3 p-5 transition hover:bg-white/6 sm:p-6"
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <HomeEyebrow tone="inverse">{eyebrow}</HomeEyebrow>
          <Icon className="mt-0.5 size-4 shrink-0 text-white/54" />
        </div>
        <h3 className="max-w-[15ch] font-(family-name:--font-display) text-[1.32rem] leading-[0.96] tracking-[-0.032em] text-white transition group-hover:text-white/88 sm:text-[1.42rem]">
          {title}
        </h3>
      </div>
      <p className="mt-4 max-w-[28ch] text-sm leading-6.5 text-white/74 sm:text-[0.95rem] sm:leading-6.5">
        {description}
      </p>
    </Link>
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
      className="overflow-hidden border-(--ink-18) bg-[image:var(--gradient-dark-reading)] text-white shadow-[0_20px_68px_rgba(27,18,15,0.16)]"
    >
      <HomePanelSplit
        className="xl:grid-cols-[minmax(20rem,0.54fr)_minmax(0,1fr)] xl:items-stretch"
        leftClassName="flex h-full flex-col justify-between gap-7 p-6 sm:p-7 xl:p-8 xl:pr-7"
        rightClassName="grid border-t border-white/12 xl:border-l xl:border-t-0"
        left={
          <>
            <div className="space-y-5">
              <HomeEyebrow tone="inverse" scale="section">
                {heading.eyebrow}
              </HomeEyebrow>
              <h2 className="max-w-[10ch] font-(family-name:--font-display) text-[2.45rem] leading-[0.93] tracking-[-0.04em] text-white sm:text-[2.8rem] xl:text-[3.02rem]">
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
                <h3 className="max-w-[14ch] font-(family-name:--font-display) text-[1.55rem] leading-[0.97] tracking-[-0.03em] text-white sm:text-[1.7rem]">
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
