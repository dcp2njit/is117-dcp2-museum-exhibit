import type { VoiceFragment } from "@/lib/content/types";

type PullQuoteProps = {
  id: string;
  fragment: VoiceFragment;
};

export function PullQuote({ id, fragment }: PullQuoteProps) {
  return (
    <aside className="pull-quote" id={id}>
      <p className="section-eyebrow">{fragment.eyebrow}</p>
      <h2>{fragment.title}</h2>
      <blockquote>
        <p>{fragment.quote}</p>
      </blockquote>
      <p className="pull-quote__attribution">{fragment.attribution}</p>
      <p className="section-copy">{fragment.context}</p>
    </aside>
  );
}
