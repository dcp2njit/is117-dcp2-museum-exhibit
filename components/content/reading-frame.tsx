const readingFrameNotes = [
  {
    title: "How to move through the exhibit",
    body:
      "Begin with the guided sequence if you want the full exhibit arc. Jump directly to a gallery if you want to compare a single period against the others.",
  },
  {
    title: "What counts as evidence here",
    body:
      "Screenshots, badges, archived interfaces, and reference texts are treated as objects in a collection. Captions and source records matter as much as the surrounding prose.",
  },
  {
    title: "What to look for",
    body:
      "Watch how authorship, control, readability, and participation shift from one era to the next. The exhibit is less about style trends than about the systems that made those styles possible.",
  },
];

export function ReadingFrame() {
  return (
    <section className="reading-frame" id="reading-frame">
      <div className="section-heading">
        <p className="section-eyebrow">Visitor guide</p>
        <h2>How to use this exhibition</h2>
        <p className="section-copy">
          The experience is designed to feel like a digital gallery guide with visible wear:
          evidence-first, slightly noisy, and deliberately uneven. Read the wall text, inspect
          the objects, then follow the route sequence forward to see what each era keeps and
          what it rejects.
        </p>
      </div>
      <div className="frame-grid">
        {readingFrameNotes.map((note) => (
          <article className="frame-card" key={note.title}>
            <p className="section-eyebrow">Guide note</p>
            <h3>{note.title}</h3>
            <p className="section-copy">{note.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}