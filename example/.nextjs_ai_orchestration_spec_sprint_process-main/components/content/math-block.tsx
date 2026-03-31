import katex from "katex";

type MathBlockProps = {
  /** LaTeX expression string */
  tex: string;
  /** Render inline (default) or as a display block */
  display?: boolean;
  className?: string;
};

/**
 * Server-rendered KaTeX math expression.
 * Renders LaTeX to static HTML at build time — no client JS required.
 */
export function MathBlock({ tex, display = false, className }: MathBlockProps) {
  const html = katex.renderToString(tex, {
    displayMode: display,
    throwOnError: false,
    output: "html",
  });

  return (
    <span className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
