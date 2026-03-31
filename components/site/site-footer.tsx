import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell shell--wide site-footer__inner">
        <div className="site-footer__masthead">
          <p className="site-footer__eyebrow">Exit wall text</p>
          <p className="site-footer__title">Algorithmic Aesthetics</p>
          <p className="site-footer__copy">
            An artist-run digital exhibition tracing how the web changed graphic design,
            assembled through object labels, exhibit notes, and a documentary source dossier.
          </p>
          <p className="site-footer__signal">Authority here comes from selection, provenance, and interpretation, not institutional costume.</p>
        </div>
        <div className="site-footer__links">
          <Link href="/">Overview</Link>
          <Link href="/eras/early-web-aesthetics">Guided tour</Link>
          <Link href="/sources">Sources</Link>
        </div>
      </div>
    </footer>
  );
}