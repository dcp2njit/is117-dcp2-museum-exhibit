import { FocalImage } from "@/components/media/focal-image";
import { getImageFocusData } from "@/lib/image-focus";
import { cn } from "@/lib/utils";

type NarrativeLink = {
  label: string;
  href: string;
};

type NarrativeCardProps = {
  title: string;
  subtitle: string;
  summary: string;
  story?: string;
  officialLink: NarrativeLink;
  sourceRecord: string;
  imageUrl?: string;
  imageAlt?: string;
  socialLinks?: NarrativeLink[];
  className?: string;
  imageFit?: "auto" | "cover" | "contain";
};

export function NarrativeCard({
  title,
  subtitle,
  summary,
  officialLink,
  imageUrl,
  imageAlt,
  socialLinks,
  className,
  imageFit = "auto",
}: NarrativeCardProps) {
  const focusData = imageUrl ? getImageFocusData(imageUrl) : undefined;
  const effectiveImageFit =
    imageFit === "auto" ? (focusData?.suggestedFit ?? "cover") : imageFit;

  return (
    <article
      className={cn(
        "content-card content-card--story narrative-card",
        !imageUrl && "narrative-card--textual",
        effectiveImageFit === "contain" && "narrative-card--contain",
        className
      )}
    >
      {imageUrl ? (
        <FocalImage
          src={imageUrl}
          alt={imageAlt ?? title}
          applySuggestedFit={imageFit === "auto"}
          className="narrative-card__image"
          width={1200}
          height={750}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <div className="narrative-card__placeholder" aria-hidden="true">
          <span className="narrative-card__placeholder-label">
            Documentary profile
          </span>
          <strong>{title}</strong>
        </div>
      )}

      <p className="content-card__meta">{subtitle}</p>
      <h3>{title}</h3>
      <p>{summary}</p>

      <div className="narrative-card__links">
        <a href={officialLink.href} target="_blank" rel="noreferrer">
          {officialLink.label}
        </a>
      </div>

      {socialLinks && socialLinks.length > 0 ? (
        <div
          className="narrative-card__socials"
          aria-label={`${title} social links`}
        >
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
