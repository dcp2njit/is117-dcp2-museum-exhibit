import { NarrativeCard } from "@/components/content/narrative-card";
import type { HistoricalAnchor, NarrativeProfile } from "@/lib/narrative-data";
import { cn } from "@/lib/utils";

type NarrativeLink = {
  label: string;
  href: string;
};

type NarrativeCardGridItem = {
  key: string;
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

function NarrativeCardGrid({
  items,
  className,
}: {
  items: NarrativeCardGridItem[];
  className?: string;
}) {
  return (
    <div className={cn("documentary-grid", className)}>
      {items.map((item) => (
        <NarrativeCard
          key={item.key}
          title={item.title}
          subtitle={item.subtitle}
          summary={item.summary}
          story={item.story}
          officialLink={item.officialLink}
          sourceRecord={item.sourceRecord}
          imageUrl={item.imageUrl}
          imageAlt={item.imageAlt}
          socialLinks={item.socialLinks}
          className={item.className}
          imageFit={item.imageFit}
        />
      ))}
    </div>
  );
}

export function NarrativeProfileGrid({
  profiles,
  className,
  cardClassName,
  getSubtitle,
  getImageFit,
}: {
  profiles: NarrativeProfile[];
  className?: string;
  cardClassName?: string;
  getSubtitle?: (profile: NarrativeProfile) => string;
  getImageFit?: (profile: NarrativeProfile) => "auto" | "cover" | "contain";
}) {
  return (
    <NarrativeCardGrid
      className={className}
      items={profiles.map((profile) => ({
        key: profile.slug,
        title: profile.name,
        subtitle: getSubtitle
          ? getSubtitle(profile)
          : `${profile.era} · ${profile.role}`,
        summary: profile.summary,
        story: profile.story,
        officialLink: {
          href: profile.officialUrl,
          label: profile.officialLabel,
        },
        sourceRecord: profile.sourceRecord,
        imageUrl: profile.imageUrl,
        imageAlt: profile.imageAlt,
        socialLinks: profile.socialLinks,
        className: cardClassName,
        imageFit: getImageFit ? getImageFit(profile) : "auto",
      }))}
    />
  );
}

export function HistoricalAnchorGrid({
  anchors,
  story,
  className,
  cardClassName = "narrative-card--anchor",
  getSubtitle,
}: {
  anchors: HistoricalAnchor[];
  story?: string;
  className?: string;
  cardClassName?: string;
  getSubtitle?: (anchor: HistoricalAnchor) => string;
}) {
  return (
    <NarrativeCardGrid
      className={className}
      items={anchors.map((anchor) => ({
        key: anchor.slug,
        title: anchor.title,
        subtitle: getSubtitle
          ? getSubtitle(anchor)
          : `${anchor.era} · source anchor`,
        summary: anchor.summary,
        story,
        officialLink: {
          href: anchor.officialUrl,
          label: anchor.officialLabel,
        },
        sourceRecord: anchor.sourceRecord,
        imageUrl: anchor.imageUrl,
        imageAlt: anchor.imageAlt,
        className: cardClassName,
      }))}
    />
  );
}
