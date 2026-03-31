import Image from "next/image";

import type { ContextBlock, SourceRecord } from "@/lib/content/types";
import { withSiteBasePath } from "@/lib/site";

type ContextModuleProps = {
  id: string;
  block: ContextBlock;
  source?: SourceRecord;
};

export function ContextModule({ id, block, source }: ContextModuleProps) {
  return (
    <section className="context-card" id={id}>
      <div className="context-card__copy">
        <p className="section-eyebrow">Context module</p>
        <h2>{block.title}</h2>
        <p className="section-copy">{block.body}</p>
        <ul className="bullet-list">
          {block.listItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <figure className="support-figure">
        <div className="support-figure__image-wrap">
          <Image
            className="support-figure__image"
            src={withSiteBasePath(block.supportImage)}
            alt={block.supportAlt}
            width={1200}
            height={900}
            sizes="(max-width: 760px) 100vw, 40vw"
          />
        </div>
        <figcaption className="support-figure__caption">
          {block.supportCaption}
          {source ? (
            <>
              {" "}
              <a href={source.url} target="_blank" rel="noreferrer">
                Source
              </a>
            </>
          ) : null}
        </figcaption>
      </figure>
    </section>
  );
}