import Image from "next/image";
import Link from "next/link";

import type { EraRecord, HomeCollageItem } from "@/lib/content/types";
import { withSiteBasePath } from "@/lib/site";

type EraMapGridProps = {
  eras: EraRecord[];
  previews: HomeCollageItem[];
  title: string;
  text: string;
};

export function EraMapGrid({ eras, previews, title, text }: EraMapGridProps) {
  const previewMap = new Map(previews.map((preview) => [preview.href, preview]));

  return (
    <section className="overview-block home-timeline" id="exhibit-map">
      <div className="section-heading">
        <p className="section-eyebrow">Exhibit map</p>
        <h2>{title}</h2>
        <p className="section-copy">{text}</p>
      </div>
      <div className="era-grid era-grid--timeline">
        {eras.map((era) => (
          <TimelineEraCard era={era} key={era.slug} preview={previewMap.get(`/eras/${era.slug}`)} />
        ))}
      </div>
    </section>
  );
}

type TimelineEraCardProps = {
  era: EraRecord;
  preview?: HomeCollageItem;
};

function TimelineEraCard({ era, preview }: TimelineEraCardProps) {
  return (
    <article className={`era-card era-card--timeline theme--${era.themeKey}`}>
      <p className="era-card__index">{String(era.order).padStart(2, "0")}</p>

      {preview ? (
        <div className="era-card__preview">
          <div className="era-card__preview-image-wrap">
            <Image
              className="era-card__preview-image"
              src={withSiteBasePath(preview.image)}
              alt={preview.alt}
              width={1200}
              height={900}
              sizes="(max-width: 760px) 100vw, 18rem"
            />
          </div>
        </div>
      ) : null}

      <div className="era-card__body">
        <p className="era-card__meta">{era.eyebrow}</p>
        <h2>
          {era.title} <span>{era.years}</span>
        </h2>
        {preview ? <p className="era-card__tagline">{preview.eyebrow}</p> : null}
        <p className="era-card__copy">{era.lede}</p>
        <p className="era-card__marker">Room marker: visual residue, interface politics, and surviving artifacts.</p>
      </div>

      <div className="hero-actions era-card__actions">
        <Link className="button-link button-link--secondary" href={`/eras/${era.slug}`}>
          Enter gallery
        </Link>
      </div>
    </article>
  );
}