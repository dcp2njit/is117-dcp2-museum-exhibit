import type { ObjectLabelData } from "@/lib/content/types";

type ObjectLabelProps = {
  title: string;
  data: ObjectLabelData;
  sourceUrl?: string;
};

export function ObjectLabel({ title, data, sourceUrl }: ObjectLabelProps) {
  return (
    <div className="object-label">
      <div className="object-label__header">
        <p className="object-label__title">{data.label}</p>
        <p className={`object-label__status object-label__status--${data.assetStatus}`}>
          {data.assetStatus === "localized" ? "Collection file" : "External reference"}
        </p>
      </div>
      <h3 className="object-label__name">{title}</h3>
      <dl className="object-label__meta">
        <div>
          <dt>Date</dt>
          <dd>{data.date}</dd>
        </div>
        <div>
          <dt>Maker</dt>
          <dd>{data.maker}</dd>
        </div>
        <div>
          <dt>Medium</dt>
          <dd>{data.medium}</dd>
        </div>
        <div>
          <dt>Provenance</dt>
          <dd>{data.provenance}</dd>
        </div>
      </dl>
      <p className="object-label__text">{data.significance}</p>
      <p className="object-label__authority">{data.authorityNote}</p>
      {sourceUrl ? (
        <p className="object-label__source-link">
          <a href={sourceUrl} target="_blank" rel="noreferrer">
            View source record
          </a>
        </p>
      ) : null}
    </div>
  );
}
