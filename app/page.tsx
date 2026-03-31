import type { Metadata } from "next";

import { EraMapGrid } from "@/components/content/era-map-grid";
import { HomeHero } from "@/components/content/home-hero";
import { ReadingFrame } from "@/components/content/reading-frame";
import { SectionDivider } from "@/components/content/section-divider";
import { SourcesPreview } from "@/components/content/sources-preview";
import { getAllEras, getHomeContent, getSourceArchiveGroups } from "@/lib/content/queries";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata(siteConfig.title, siteConfig.description);

export default function HomePage() {
  const homeContent = getHomeContent();
  const eraRecords = getAllEras();
  const sourceGroups = getSourceArchiveGroups();

  return (
    <main id="main-content" className="shell page-stack">
      <HomeHero content={homeContent} />
      <SectionDivider label="Orientation" />
      <EraMapGrid eras={eraRecords} title={homeContent.overviewTitle} text={homeContent.overviewText} />
      <SectionDivider label="How to read this show" />
      <ReadingFrame />
      <SectionDivider label="Continue into the dossier" />
      <SourcesPreview groups={sourceGroups} />
    </main>
  );
}