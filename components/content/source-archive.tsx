import { ReferenceList } from "@/components/content/reference-list";
import { SectionNav } from "@/components/site/section-nav";
import type { EraSlug, SourceRecord } from "@/lib/content/types";

type SourceArchiveGroup = {
  slug: EraSlug;
  title: string;
  sources: SourceRecord[];
};

type SourceArchiveProps = {
  groups: SourceArchiveGroup[];
  checklist: string[];
};

const themeClassBySlug: Record<EraSlug, string> = {
  "early-web-aesthetics": "theme--early",
  "platform-standardization": "theme--platform",
  "algorithmic-influence": "theme--algorithmic",
  "subcultures-and-anti-design": "theme--subcultures",
};

export function SourceArchive({ groups, checklist }: SourceArchiveProps) {
  const sectionItems = [
    { id: "source-dossier", label: "Dossier intro" },
    ...groups.map((group) => ({
      id: `sources-${group.slug}`,
      label: group.title,
    })),
  ];

  return (
    <div className="source-archive">
      <section className="source-archive__intro hero-block" data-scrolly id="source-dossier">
        <div className="hero-copy source-archive__lead">
          <p className="section-eyebrow">Source archive</p>
          <h1 className="display-title">Documentary sources, asset leads, and rights notes</h1>
          <p className="hero-lede">
            This archive is intended to read like a museum dossier rather than a loose bibliography.
            References are grouped by gallery so provenance, reuse notes, and evidentiary purpose
            remain visible beside the exhibit narrative.
          </p>
        </div>
        <aside className="hero-note source-archive__note">
          <p className="section-eyebrow">Collections care</p>
          <h2>Rights and licensing checklist</h2>
          <ul className="bullet-list">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <div className="story-rail">
        <SectionNav className="story-rail__nav" items={sectionItems} label="Browse the archive by gallery" />
      </div>

      <div className="source-groups">
        {groups.map((group) => (
          <section
            className={`source-group ${themeClassBySlug[group.slug]}`}
            data-scrolly
            id={`sources-${group.slug}`}
            key={group.slug}
          >
            <div className="section-heading">
              <p className="section-eyebrow">{group.sources.length} records</p>
              <h2>{group.title}</h2>
            </div>
            <ReferenceList showLicenseNotes sources={group.sources} />
          </section>
        ))}
      </div>
    </div>
  );
}