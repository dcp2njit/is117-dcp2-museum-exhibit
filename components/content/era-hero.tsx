import Link from "next/link";

import { SectionNav } from "@/components/site/section-nav";
import type { EraRecord } from "@/lib/content/types";

type EraHeroProps = {
  era: EraRecord;
  sections: Array<{ id: string; label: string }>;
};

export function EraHero({ era, sections }: EraHeroProps) {
  return (
    <section className="era-hero-block" id="overview">
      <div className="era-hero-block__copy">
        <p className="era-shell__meta">
          {era.eyebrow} · {era.years}
        </p>
        <h1 className="display-title">{era.title}</h1>
        <p className="era-shell__lede">{era.lede}</p>
      </div>
      <div className="era-hero-block__nav">
        <p className="era-chip">{era.order} of 4</p>
        <div className="era-shell__nav" aria-label="Chapter sequence">
          <Link href="/">Back to overview</Link>
          {era.previous ? <Link href={era.previous.href}>{era.previous.label}</Link> : null}
          {era.next ? <Link href={era.next.href}>{era.next.label}</Link> : null}
        </div>
        <SectionNav items={sections} label="In this gallery" />
      </div>
    </section>
  );
}