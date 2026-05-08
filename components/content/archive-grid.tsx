import { MediaFigure } from "@/components/content/media-figure";
import type { ArchiveItem, SourceRecord } from "@/lib/content/types";

type ArchiveGridProps = {
  id: string;
  title: string;
  intro: string;
  items: ArchiveItem[];
  references: SourceRecord[];
};

export function ArchiveGrid({ id, title, intro, items, references }: ArchiveGridProps) {
  const sourceMap = new Map(references.map((source) => [source.id, source]));

  return (
    <section className="era-section" data-scrolly id={id}>
      <div className="section-heading">
        <p className="section-eyebrow">Visual archive</p>
        <h2>{title}</h2>
        <p className="section-copy">{intro}</p>
      </div>
      <div className="archive-grid">
        {items.map((item) => (
          <MediaFigure key={item.id} item={item} source={sourceMap.get(item.sourceId)} />
        ))}
      </div>
    </section>
  );
}