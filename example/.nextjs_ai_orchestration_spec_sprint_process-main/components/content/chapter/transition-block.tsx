import Link from "next/link";

type TransitionBlockProps = {
  eyebrow: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export function TransitionBlock({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
}: TransitionBlockProps) {
  return (
    <section
      className="transition-block callout-panel callout-panel--transition"
      aria-label={title}
    >
      <p className="eyebrow callout-panel__label">{eyebrow}</p>
      <h3 className="callout-panel__title">{title}</h3>
      <div className="callout-panel__body">
        <p>{description}</p>
      </div>
      {href && linkLabel ? (
        <Link href={href} className="transition-block__link">
          {linkLabel}
        </Link>
      ) : null}
    </section>
  );
}
