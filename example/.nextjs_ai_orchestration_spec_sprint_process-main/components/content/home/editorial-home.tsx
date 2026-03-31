import type { CSSProperties } from "react";

import { ChronologySection } from "@/components/content/home/chronology-section";
import { OpeningSection } from "@/components/content/home/opening-section";
import { ReadingModelSection } from "@/components/content/home/reading-model-section";
import { ScenesSection } from "@/components/content/home/scenes-section";
import {
  HomeSectionDivider,
  homeTokens,
} from "@/components/content/home/home-design-system";
import { getHomePageContent } from "@/lib/content/homepage";
import { cn } from "@/lib/utils";

const GOLDEN_RATIO = 1.61803398875;

// Golden-ratio type scale passed as CSS custom properties to OpeningSection.
// Cast required because CSSProperties doesn't include arbitrary --custom-property keys.
const openingTypeScale = {
  "--opening-step-negative-1": `${(1 / GOLDEN_RATIO).toFixed(3)}rem`,
  "--opening-step-0": "1rem",
  "--opening-step-1": `${Math.sqrt(GOLDEN_RATIO).toFixed(3)}rem`,
  "--opening-step-2": `${GOLDEN_RATIO.toFixed(3)}rem`,
  "--opening-step-3": `${(GOLDEN_RATIO ** 2).toFixed(3)}rem`,
  "--opening-step-4": `${(GOLDEN_RATIO ** 3).toFixed(3)}rem`,
  "--opening-body-leading": GOLDEN_RATIO.toFixed(3),
} as CSSProperties;

export function EditorialHome() {
  const homepage = getHomePageContent();

  return (
    <main className="px-4 pb-10 pt-5 sm:px-6 sm:pb-12 lg:px-8 lg:pt-6">
      <div className={cn(homeTokens.frame, homeTokens.stack)}>
        <OpeningSection
          {...homepage.opening}
          openingTypeScale={openingTypeScale}
        />
        <div className="content-auto">
          <ChronologySection
            heading={homepage.chronology.heading}
            chronologyLedger={homepage.chronology.ledger}
            macroArcEyebrow={homepage.chronology.macroArcEyebrow}
            macroArcDescription={homepage.chronology.macroArcDescription}
            chronologyPhases={homepage.chronology.phases}
            eraLinks={homepage.chronology.eras}
          />
        </div>
        <HomeSectionDivider
          imageUrl="/media/generated/section-divider-chronology.webp"
          imageAlt="Visual transition between the chronology and reading model sections."
        />
        <div className="content-auto">
          <ReadingModelSection
            heading={homepage.readingModel.heading}
            readingModelSignals={homepage.readingModel.signals}
            primaryCta={homepage.readingModel.primaryCta}
            promptBlock={homepage.readingModel.promptBlock}
            companionRoutes={homepage.readingModel.companionRoutes}
          />
        </div>
        <div className="content-auto">
          <ScenesSection
            heading={homepage.scenes.heading}
            scenesFeature={homepage.scenes.featureEntry}
            scenesGridEntries={homepage.scenes.supportEntries}
          />
        </div>
      </div>
    </main>
  );
}
