import type { TimelineItem } from "@/lib/content/types";

type MilestoneStripProps = {
  id: string;
  title: string;
  items: TimelineItem[];
};

export function MilestoneStrip({ id, title, items }: MilestoneStripProps) {
  return (
    <section className="timeline-card era-section" id={id}>
      <div className="section-heading">
        <p className="section-eyebrow">Chronology</p>
        <h2>{title}</h2>
      </div>
      <ol className="timeline-list">
        {items.map((item) => (
          <li key={`${item.year}-${item.label}`}>
            <span>{item.year}</span>
            <p>{item.label}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}