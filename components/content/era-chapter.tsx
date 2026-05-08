import { ArchiveGrid } from "@/components/content/archive-grid";
import { CommentaryBlock } from "@/components/content/commentary-block";
import { ContextModule } from "@/components/content/context-module";
import { EraHero } from "@/components/content/era-hero";
import { ExhibitEpilogue } from "@/components/content/exhibit-epilogue";
import { ImpactCallout } from "@/components/content/impact-callout";
import { MilestoneStrip } from "@/components/content/milestone-strip";
import { PullQuote } from "@/components/content/pull-quote";
import { ReferenceList } from "@/components/content/reference-list";
import { exhibitEpilogue } from "@/lib/content/site-content";
import type { EraRecord, SourceRecord } from "@/lib/content/types";

type EraChapterProps = {
  era: EraRecord;
  references: SourceRecord[];
};

export function EraChapter({ era, references }: EraChapterProps) {
  const sourceMap = new Map(references.map((source) => [source.id, source]));

  return (
    <article className={`era-chapter theme--${era.themeKey}`}>
      <EraHero era={era} />

      <ArchiveGrid
        id="visual-archive"
        title={era.archiveTitle}
        intro={era.archiveIntro}
        items={era.archiveItems}
        references={references}
      />

      <section className="context-grid">
        {era.contextBlocks.map((block) => {
          const supportSource = sourceMap.get(block.supportSourceId);

          return (
            <ContextModule id={block.id} key={block.id} block={block} source={supportSource} />
          );
        })}
      </section>

      <PullQuote id="voice-fragment" fragment={era.voiceFragment} />

      <section className="commentary-grid">
        <CommentaryBlock id="commentary" paragraphs={era.commentary} />
        <ImpactCallout id="design-impact" statement={era.designImpact} />
      </section>

      <MilestoneStrip id="chronology" title={era.timelineTitle} items={era.timelineItems} />

      <section className="era-section" id="references">
        <div className="section-heading">
          <p className="section-eyebrow">References</p>
          <h2>Selected source records</h2>
        </div>
        <ReferenceList sources={references} />
      </section>

      {!era.next ? <ExhibitEpilogue content={exhibitEpilogue} /> : null}
    </article>
  );
}