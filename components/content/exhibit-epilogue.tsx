import Link from "next/link";

import type { ExhibitEpilogueContent } from "@/lib/content/types";

type ExhibitEpilogueProps = {
  id?: string;
  content: ExhibitEpilogueContent;
};

export function ExhibitEpilogue({ id = "epilogue", content }: ExhibitEpilogueProps) {
  return (
    <section className="exhibit-epilogue" id={id}>
      <div className="section-heading">
        <p className="section-eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
      </div>
      <div className="exhibit-epilogue__grid">
        <div className="exhibit-epilogue__body">
          {content.body.map((paragraph) => (
            <p className="section-copy" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <aside className="exhibit-epilogue__prompt">
          <p className="section-eyebrow">Takeaway</p>
          <p className="section-copy">{content.prompt}</p>
          <div className="hero-actions">
            <Link className="button-link button-link--primary" href={content.primaryAction.href}>
              {content.primaryAction.label}
            </Link>
            <Link className="button-link button-link--secondary" href={content.secondaryAction.href}>
              {content.secondaryAction.label}
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
