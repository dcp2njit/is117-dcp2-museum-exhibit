import Link from "next/link";

import type { EraRecord } from "@/lib/content/types";

type EraHeroProps = {
  era: EraRecord;
};

export function EraHero({ era }: EraHeroProps) {
  return (
    <section className="era-hero-block" data-scrolly id="overview">
      <div className="era-hero-block__copy">
        <p className="era-shell__meta">
          {era.eyebrow} · {era.years}
        </p>
        <Link className="era-hero-block__back-link" href="/">
          Back to overview
        </Link>
        <h1 className="display-title">{era.title}</h1>
        <p className="era-shell__lede">{era.lede}</p>
      </div>
      <div className="era-hero-block__nav">
        <p className="era-chip">{era.order} of 4</p>
        <div className="era-shell__nav" aria-label="Adjacent chapters">
          {era.previous ? <Link href={era.previous.href}>{era.previous.label}</Link> : null}
          {era.next ? <Link href={era.next.href}>{era.next.label}</Link> : null}
        </div>
      </div>
    </section>
  );
}