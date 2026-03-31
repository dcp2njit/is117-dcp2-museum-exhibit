import { FocalImage } from "@/components/media/focal-image";
import { cn } from "@/lib/utils";

type ChapterVisualBreakProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
};

export function ChapterVisualBreak({
  src,
  alt,
  caption,
  className,
}: ChapterVisualBreakProps) {
  return (
    <figure className={cn("chapter-visual-break", className)}>
      <div className="chapter-visual-break__media">
        <FocalImage
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 80vw"
          className="object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="chapter-visual-break__caption">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
