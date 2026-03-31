import Link from "next/link";

import type {
  EditorialEntry,
  HomeSectionHeading,
} from "@/lib/content/homepage";
import { FocalImage } from "@/components/media/focal-image";
import { SectionHeading } from "@/components/ui";
import {
  HomeEyebrow,
  HomeRouteAction,
  mosaicVariantStyles,
} from "@/components/content/home/home-design-system";
import { HomeSectionSplit } from "@/components/content/home/home-shared";
import { cn } from "@/lib/utils";

function getScenesEntrySpanClass(entry: EditorialEntry, index: number) {
  if (entry.variant === "strip") {
    return "xl:col-span-2";
  }

  return index === 0 ? "xl:col-span-2" : "xl:col-span-1";
}

function MosaicEntry({
  href,
  eyebrow,
  title,
  description,
  imageUrl,
  imageAlt,
  variant,
}: EditorialEntry) {
  const styles = mosaicVariantStyles[variant];

  return (
    <Link
      href={href}
      className={cn(
        "@container/mosaic-cell group flex flex-col overflow-hidden transition",
        styles.container
      )}
    >
      {imageUrl ? (
        <FocalImage
          src={imageUrl}
          alt={imageAlt ?? title}
          width={1200}
          height={840}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className={cn("w-full object-cover", styles.image)}
        />
      ) : null}
      <div className={styles.body}>
        <div className="space-y-3">
          <HomeEyebrow>{eyebrow}</HomeEyebrow>
          <h3
            className={cn(
              "font-(family-name:--font-display) text-foreground",
              styles.title
            )}
          >
            {title}
          </h3>
        </div>
        <div className={cn("space-y-5", styles.actionWrap)}>
          <p className={styles.copy}>{description}</p>
          <HomeRouteAction />
        </div>
      </div>
    </Link>
  );
}

export function ScenesSection({
  heading,
  scenesFeature,
  scenesGridEntries,
}: {
  heading: HomeSectionHeading;
  scenesFeature: EditorialEntry;
  scenesGridEntries: EditorialEntry[];
}) {
  return (
    <section id="home-scenes" className="space-y-6 sm:space-y-8">
      <div>
        <SectionHeading
          className="max-w-4xl"
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
        />
      </div>

      <HomeSectionSplit
        className="xl:grid-cols-[minmax(24rem,0.68fr)_minmax(0,1fr)]"
        leftClassName="self-start"
        rightClassName="grid gap-4 self-start sm:grid-cols-2 xl:grid-cols-3"
        left={<MosaicEntry {...scenesFeature} />}
        right={
          <>
            {scenesGridEntries.map((entry, index) => (
              <div
                key={entry.title}
                className={cn(
                  entry.variant === "strip" && "sm:col-span-2",
                  getScenesEntrySpanClass(entry, index)
                )}
              >
                <MosaicEntry {...entry} />
              </div>
            ))}
          </>
        }
      />
    </section>
  );
}
