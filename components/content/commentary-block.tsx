type CommentaryBlockProps = {
  id: string;
  paragraphs: string[];
};

export function CommentaryBlock({ id, paragraphs }: CommentaryBlockProps) {
  return (
    <article className="essay-card" id={id}>
      <p className="section-eyebrow">Era commentary</p>
      <h2>What changed visually</h2>
      {paragraphs.map((paragraph) => (
        <p className="section-copy" key={paragraph}>
          {paragraph}
        </p>
      ))}
    </article>
  );
}