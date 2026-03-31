import type { SourceRecord } from "@/lib/content/types";

type ReferenceListProps = {
  sources: SourceRecord[];
  showLicenseNotes?: boolean;
};

export function ReferenceList({ sources, showLicenseNotes = false }: ReferenceListProps) {
  return (
    <ul className="reference-list">
      {sources.map((source) => (
        <li key={source.id}>
          <p className="reference-list__eyebrow">{source.type.replace("-", " ")}</p>
          <a href={source.url} target="_blank" rel="noreferrer">
            {source.title}
          </a>
          <p>{source.use}</p>
          {showLicenseNotes ? <p>{source.licenseNotes}</p> : null}
        </li>
      ))}
    </ul>
  );
}