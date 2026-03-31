export type EraSlug =
  | "early-web-aesthetics"
  | "platform-standardization"
  | "algorithmic-influence"
  | "subcultures-and-anti-design";

export type ThemeKey = "early" | "platform" | "algorithmic" | "subcultures";

export type RouteLink = {
  href: string;
  label: string;
};

export type HomeCollageItem = {
  title: string;
  eyebrow: string;
  href: string;
  image: string;
  alt: string;
};

export type ObjectLabelData = {
  label: string;
  date: string;
  maker: string;
  medium: string;
  provenance: string;
  significance: string;
  authorityNote: string;
  assetStatus: "localized" | "external";
};

export type VoiceFragment = {
  eyebrow: string;
  title: string;
  quote: string;
  attribution: string;
  context: string;
};

export type ExhibitEpilogueContent = {
  eyebrow: string;
  title: string;
  body: string[];
  prompt: string;
  primaryAction: RouteLink;
  secondaryAction: RouteLink;
};

export type ArchiveItem = {
  id: string;
  title: string;
  image: string;
  alt: string;
  caption: string;
  credit: string;
  sourceId: string;
  objectLabel: ObjectLabelData;
};

export type ContextBlock = {
  id: string;
  title: string;
  body: string;
  listItems: string[];
  supportImage: string;
  supportAlt: string;
  supportCaption: string;
  supportSourceId: string;
};

export type TimelineItem = {
  year: string;
  label: string;
};

export type SourceRecord = {
  id: string;
  title: string;
  url: string;
  type: "secondary" | "primary" | "image-asset" | "archive" | "directory";
  use: string;
  licenseNotes: string;
  eras: EraSlug[];
};

export type EraRecord = {
  slug: EraSlug;
  order: number;
  eyebrow: string;
  title: string;
  years: string;
  lede: string;
  themeKey: ThemeKey;
  archiveTitle: string;
  archiveIntro: string;
  archiveItems: ArchiveItem[];
  contextBlocks: ContextBlock[];
  voiceFragment: VoiceFragment;
  commentary: string[];
  designImpact: string;
  timelineTitle: string;
  timelineItems: TimelineItem[];
  referenceIds: string[];
  previous?: RouteLink;
  next?: RouteLink;
};

export type HomeContent = {
  eyebrow: string;
  title: string;
  lede: string;
  heroCollage: HomeCollageItem[];
  authorityTitle: string;
  authorityText: string;
  primaryAction: RouteLink;
  secondaryAction: RouteLink;
  overviewTitle: string;
  overviewText: string;
  highlightTitle: string;
  highlightText: string;
  highlightImage: string;
  highlightImageAlt: string;
  referenceIds: string[];
};