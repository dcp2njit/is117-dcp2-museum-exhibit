import Link from "next/link";

export function SiteFooter() {
  return (
    <footer aria-label="Exhibit utilities" className="site-footer">
      <div className="site-footer__stack">
        <section className="site-footer__panel site-footer__panel--intro">
          <p className="site-footer__eyebrow">Exit wall text</p>
          <p className="site-footer__title">Algorithmic Aesthetics</p>
          <p className="site-footer__copy">
            An artist-run digital exhibition tracing how the web changed graphic design,
            assembled through object labels, exhibit notes, and a documentary source dossier.
          </p>
        </section>

        <section className="site-footer__panel">
          <p className="site-footer__eyebrow">Curatorial method</p>
          <p className="site-footer__signal">
            Authority here comes from selection, provenance, and interpretation, not institutional costume.
          </p>
        </section>

        <nav aria-label="Footer navigation" className="site-footer__panel site-footer__panel--links">
          <p className="site-footer__eyebrow">Continue exploring</p>
          <div className="site-footer__links">
            <Link href="/">Overview</Link>
            <Link href="/eras/early-web-aesthetics">Guided tour</Link>
            <Link href="/sources">Sources</Link>
          </div>
        </nav>

        <section className="site-footer__panel site-footer__panel--meta">
          <p className="site-footer__eyebrow">Collection scope</p>
          <p className="site-footer__stat">4 eras // 1 source archive</p>
          <p className="site-footer__copy">
            Overview, gallery sequence, and citation dossier stay visible as one continuous interface.
          </p>
        </section>
      </div>
    </footer>
  );
}