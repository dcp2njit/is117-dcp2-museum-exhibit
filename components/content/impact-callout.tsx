type ImpactCalloutProps = {
  id: string;
  statement: string;
};

export function ImpactCallout({ id, statement }: ImpactCalloutProps) {
  return (
    <aside className="impact-card" data-scrolly id={id}>
      <p className="section-eyebrow">Design impact</p>
      <h2>Why this gallery matters</h2>
      <p className="section-copy">{statement}</p>
    </aside>
  );
}