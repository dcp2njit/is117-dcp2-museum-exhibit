import Image from "next/image";
import Link from "next/link";

import type { HomeContent } from "@/lib/content/types";
import { withSiteBasePath } from "@/lib/site";

type HomeHeroProps = {
  content: HomeContent;
};

export function HomeHero({ content }: HomeHeroProps) {
  return (
    <section className="hero-block home-hero">
      <div className="hero-copy">
        <p className="section-eyebrow">{content.eyebrow}</p>
        <h1 className="display-title">{content.title}</h1>
        <p className="hero-lede">{content.lede}</p>
        <div className="hero-actions">
          <Link className="button-link button-link--primary" href={content.primaryAction.href}>
            {content.primaryAction.label}
          </Link>
          <Link className="button-link button-link--secondary" href={content.secondaryAction.href}>
            {content.secondaryAction.label}
          </Link>
        </div>
        <aside className="hero-note home-hero__note">
          <p className="section-eyebrow">Exhibit orientation</p>
          <h2>Read this as a sequence of rooms, not a feed of facts</h2>
          <p className="hero-lede">
            The exhibit is organized as four connected rooms. Each chapter pairs wall text,
            visual evidence, and documentary references so visitors can compare design change
            across time without losing the feel of each period.
          </p>
          <div className="authority-note">
            <p className="section-eyebrow">{content.authorityTitle}</p>
            <p className="section-copy">{content.authorityText}</p>
          </div>
        </aside>
      </div>
      <div className="hero-side home-hero__side">
        <section className="home-collage" aria-label="Exhibit collage">
          {content.heroCollage.map((item) => (
            <Link className="home-collage__tile" href={item.href} key={item.href}>
              <div className="home-collage__image-wrap">
                <Image
                  className="home-collage__image"
                  src={withSiteBasePath(item.image)}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 760px) 50vw, 14rem"
                />
              </div>
              <div className="home-collage__caption">
                <p className="home-collage__eyebrow">{item.eyebrow}</p>
                <h2>{item.title}</h2>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </section>
  );
}