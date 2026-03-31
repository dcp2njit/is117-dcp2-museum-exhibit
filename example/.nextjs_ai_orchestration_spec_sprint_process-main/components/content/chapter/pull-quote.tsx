type PullQuoteProps = {
  quote: string;
  attribution?: string;
  source?: string;
};

export function PullQuote({ quote, attribution, source }: PullQuoteProps) {
  return (
    <figure className="pull-quote">
      <blockquote>
        <p>{quote}</p>
      </blockquote>
      {attribution || source ? (
        <figcaption>
          {attribution ? <span>{attribution}</span> : null}
          {attribution && source ? <span> · </span> : null}
          {source ? <span>{source}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
