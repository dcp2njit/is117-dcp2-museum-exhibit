import Link from "next/link";

import type { EraSlug, SourceRecord } from "@/lib/content/types";

type SourceArchiveGroup = {
  slug: EraSlug;
  title: string;
  sources: SourceRecord[];
};

type SourcesPreviewProps = {
  groups: SourceArchiveGroup[];
};

export function SourcesPreview({ groups }: SourcesPreviewProps) {
  return (
    <section className="source-preview" id="sources-preview">
      <div className="section-heading">
        <p className="section-eyebrow">Documentary archive</p>
        <h2>Sources are presented as part of the exhibition, not as fine print</h2>
        <p className="section-copy">
          A museum-grade reading experience depends on provenance. The full archive groups
          references, asset leads, and licensing notes by gallery so the evidence remains
          inspectable instead of buried beneath the narrative.
        </p>
      </div>
      <div className="source-preview__grid">
        {groups.map((group) => (
          <article className="source-preview__card" key={group.slug}>
            <p className="era-card__meta">{group.title}</p>
            <h3>{group.sources.length} records</h3>
            <p className="section-copy">
              Includes gallery references, archival captures, and image provenance relevant to
              this chapter.
            </p>
          </article>
        ))}
      </div>
      <div className="hero-actions">
        <Link className="button-link button-link--secondary" href="/sources">
          Open the full source archive
        </Link>
      </div>
    </section>
  );
}