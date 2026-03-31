import Link from "next/link";

import type { EraRecord } from "@/lib/content/types";

type EraMapGridProps = {
  eras: EraRecord[];
  title: string;
  text: string;
};

export function EraMapGrid({ eras, title, text }: EraMapGridProps) {
  return (
    <section className="overview-block" id="exhibit-map">
      <div className="section-heading">
        <p className="section-eyebrow">Exhibit map</p>
        <h2>{title}</h2>
        <p className="section-copy">{text}</p>
      </div>
      <div className="era-grid">
        {eras.map((era) => (
          <article className={`era-card theme--${era.themeKey}`} key={era.slug}>
            <p className="era-card__meta">{era.eyebrow}</p>
            <h2>
              {era.title} <span>{era.years}</span>
            </h2>
            <p className="era-card__copy">{era.lede}</p>
            <p className="era-card__marker">Room marker: visual residue, interface politics, and surviving artifacts.</p>
            <div className="hero-actions">
              <Link className="button-link button-link--secondary" href={`/eras/${era.slug}`}>
                Enter gallery
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}