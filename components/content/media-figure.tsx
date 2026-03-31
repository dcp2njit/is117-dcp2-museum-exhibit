import Image from "next/image";

import { ObjectLabel } from "@/components/content/object-label";
import type { ArchiveItem, SourceRecord } from "@/lib/content/types";

type MediaFigureProps = {
  item: ArchiveItem;
  source?: SourceRecord;
};

export function MediaFigure({ item, source }: MediaFigureProps) {
  const isDiagram = item.image.endsWith(".svg");

  return (
    <figure className="media-figure">
      <div className={isDiagram ? "media-figure__image-wrap media-figure__image-wrap--diagram" : "media-figure__image-wrap"}>
        <Image
          className={isDiagram ? "media-figure__image media-figure__image--diagram" : "media-figure__image"}
          src={item.image}
          alt={item.alt}
          width={1200}
          height={900}
          sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 25rem"
        />
      </div>
      <figcaption className="media-figure__caption">
        <ObjectLabel title={item.title} data={item.objectLabel} sourceUrl={source?.url} />
        <p>
          <strong>{item.title}.</strong> {item.caption} <span>{item.credit}</span>
        </p>
      </figcaption>
    </figure>
  );
}