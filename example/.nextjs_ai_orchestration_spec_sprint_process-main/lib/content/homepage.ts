import { cache } from "react";
import {
  BookOpenText,
  BrainCircuit,
  Landmark,
  Network,
  ScrollText,
  Users,
  type LucideIcon,
} from "lucide-react";

import { readMarkdownDocument } from "@/lib/content/markdown";
import {
  generatedIllustrations,
  historicalAnchors,
  institutionProfiles,
  peopleProfiles,
} from "@/lib/narrative-data";

type RecordValue = Record<string, unknown>;

export type PrimaryRoute = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type OpeningSignal = {
  eyebrow: string;
  title: string;
  description: string;
};

export type EraLink = {
  href: string;
  label: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
};

export type ChronologyPhase = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ChronologyLedgerItem = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ReadingModelSignal = {
  eyebrow: string;
  description: string;
};

export type HeroVisual = {
  href: string;
  eyebrow: string;
  title: string;
  imageUrl?: string;
  imageAlt?: string;
  variant: "feature" | "support";
};

export type CompanionRoute = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type MosaicVariant = "feature" | "support" | "strip" | "rail";

export type EditorialEntry = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  variant: MosaicVariant;
};

export type HomeSectionHeading = {
  eyebrow: string;
  title: string;
  description: string;
};

export type HomeAction = {
  href: string;
  label: string;
};

export type OpeningHighlightCard = {
  eyebrow: string;
  title: string;
  description: string;
  themes: string[];
  href: string;
  cta: string;
};

export type OpeningStartCard = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
};

export type ReadingPromptBlock = {
  eyebrow: string;
  title: string;
  prompts: string[];
};

export type HomePageContent = {
  editorialNotesMarkdown: string;
  opening: {
    eyebrow: string;
    titleLines: string[];
    deck: string;
    signals: OpeningSignal[];
    heroFeature: HeroVisual;
    heroSupports: HeroVisual[];
    publicAiCard: OpeningHighlightCard;
    primaryRoutes: PrimaryRoute[];
    startCard: OpeningStartCard;
  };
  chronology: {
    heading: HomeSectionHeading;
    ledger: ChronologyLedgerItem[];
    macroArcEyebrow: string;
    macroArcDescription: string;
    phases: ChronologyPhase[];
    eras: EraLink[];
  };
  readingModel: {
    heading: HomeSectionHeading;
    signals: ReadingModelSignal[];
    primaryCta: HomeAction;
    promptBlock: ReadingPromptBlock;
    companionRoutes: CompanionRoute[];
  };
  scenes: {
    heading: HomeSectionHeading;
    featureEntry: EditorialEntry;
    supportEntries: EditorialEntry[];
  };
};

const HOMEPAGE_CONTENT_PATH = "docs/content/site/homepage.md";

const iconRegistry = {
  BookOpenText,
  BrainCircuit,
  Landmark,
  Network,
  ScrollText,
  Users,
} as const;

const narrativeRegistry = {
  generated: generatedIllustrations,
  historical: historicalAnchors,
  institution: institutionProfiles,
  person: peopleProfiles,
} as const;

function expectRecord(value: unknown, label: string): RecordValue {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`Expected ${label} to be an object.`);
  }

  return value as RecordValue;
}

function expectString(record: RecordValue, key: string, label: string): string {
  const value = record[key];

  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Expected ${label}.${key} to be a non-empty string.`);
  }

  return value;
}

function expectStringArray(
  record: RecordValue,
  key: string,
  label: string
): string[] {
  const value = record[key];

  if (
    !Array.isArray(value) ||
    value.some(
      (entry) => typeof entry !== "string" || entry.trim().length === 0
    )
  ) {
    throw new Error(
      `Expected ${label}.${key} to be an array of non-empty strings.`
    );
  }

  return value;
}

function expectRecordArray(
  record: RecordValue,
  key: string,
  label: string
): RecordValue[] {
  const value = record[key];

  if (!Array.isArray(value)) {
    throw new Error(`Expected ${label}.${key} to be an array.`);
  }

  return value.map((entry, index) =>
    expectRecord(entry, `${label}.${key}[${index}]`)
  );
}

function resolveIcon(name: string, label: string): LucideIcon {
  const icon = iconRegistry[name as keyof typeof iconRegistry];

  if (!icon) {
    throw new Error(`Unsupported icon '${name}' in ${label}.`);
  }

  return icon;
}

function resolveImageRef(reference: string, label: string) {
  const [collection, slug] = reference.split(":");

  if (!collection || !slug) {
    throw new Error(
      `Invalid imageRef '${reference}' in ${label}. Expected '<collection>:<slug>'.`
    );
  }

  const source =
    narrativeRegistry[collection as keyof typeof narrativeRegistry];

  if (!source) {
    throw new Error(
      `Unsupported image collection '${collection}' in ${label}.`
    );
  }

  const item = source.find((entry) => entry.slug === slug);

  if (!item) {
    throw new Error(`Missing narrative asset '${reference}' in ${label}.`);
  }

  return {
    imageAlt: item.imageAlt,
    imageUrl: item.imageUrl,
  };
}

function parseSectionHeading(
  record: RecordValue,
  label: string
): HomeSectionHeading {
  return {
    eyebrow: expectString(record, "eyebrow", label),
    title: expectString(record, "title", label),
    description: expectString(record, "description", label),
  };
}

function parseOpeningSignal(record: RecordValue, label: string): OpeningSignal {
  return {
    eyebrow: expectString(record, "eyebrow", label),
    title: expectString(record, "title", label),
    description: expectString(record, "description", label),
  };
}

function parsePrimaryRoute(record: RecordValue, label: string): PrimaryRoute {
  return {
    href: expectString(record, "href", label),
    eyebrow: expectString(record, "eyebrow", label),
    title: expectString(record, "title", label),
    description: expectString(record, "description", label),
    icon: resolveIcon(expectString(record, "icon", label), label),
  };
}

function parseHeroVisual(record: RecordValue, label: string): HeroVisual {
  const variant = expectString(record, "variant", label);

  if (variant !== "feature" && variant !== "support") {
    throw new Error(`Expected ${label}.variant to be 'feature' or 'support'.`);
  }

  return {
    href: expectString(record, "href", label),
    eyebrow: expectString(record, "eyebrow", label),
    title: expectString(record, "title", label),
    variant,
    ...resolveImageRef(expectString(record, "imageRef", label), label),
  };
}

function parseChronologyLedgerItem(
  record: RecordValue,
  label: string
): ChronologyLedgerItem {
  return {
    eyebrow: expectString(record, "eyebrow", label),
    title: expectString(record, "title", label),
    description: expectString(record, "description", label),
  };
}

function parseChronologyPhase(
  record: RecordValue,
  label: string
): ChronologyPhase {
  return {
    eyebrow: expectString(record, "eyebrow", label),
    title: expectString(record, "title", label),
    description: expectString(record, "description", label),
  };
}

function parseEraLink(record: RecordValue, label: string): EraLink {
  const imageRef = record.imageRef;
  const imageFields =
    typeof imageRef === "string" ? resolveImageRef(imageRef, label) : {};

  return {
    href: expectString(record, "href", label),
    label: expectString(record, "label", label),
    description: expectString(record, "description", label),
    ...imageFields,
  };
}

function parseReadingModelSignal(
  record: RecordValue,
  label: string
): ReadingModelSignal {
  return {
    eyebrow: expectString(record, "eyebrow", label),
    description: expectString(record, "description", label),
  };
}

function parseCompanionRoute(
  record: RecordValue,
  label: string
): CompanionRoute {
  return {
    href: expectString(record, "href", label),
    eyebrow: expectString(record, "eyebrow", label),
    title: expectString(record, "title", label),
    description: expectString(record, "description", label),
    icon: resolveIcon(expectString(record, "icon", label), label),
  };
}

function parseEditorialEntry(
  record: RecordValue,
  label: string
): EditorialEntry {
  const variant = expectString(record, "variant", label);

  if (
    variant !== "feature" &&
    variant !== "support" &&
    variant !== "strip" &&
    variant !== "rail"
  ) {
    throw new Error(`Unsupported ${label}.variant '${variant}'.`);
  }

  const imageRef = record.imageRef;

  return {
    href: expectString(record, "href", label),
    eyebrow: expectString(record, "eyebrow", label),
    title: expectString(record, "title", label),
    description: expectString(record, "description", label),
    variant,
    ...(typeof imageRef === "string" ? resolveImageRef(imageRef, label) : {}),
  };
}

function selectFeatureEntry<T extends { variant: string }>(
  items: T[],
  label: string
) {
  const features = items.filter((item) => item.variant === "feature");

  if (features.length !== 1) {
    throw new Error(`Expected exactly one feature item for ${label}.`);
  }

  return {
    feature: features[0],
    supports: items.filter((item) => item.variant !== "feature"),
  };
}

export const getHomePageContent = cache((): HomePageContent => {
  const document = readMarkdownDocument<RecordValue>(HOMEPAGE_CONTENT_PATH);
  const frontmatter = expectRecord(document.data, "homepage frontmatter");

  const openingRecord = expectRecord(frontmatter.opening, "opening");
  const chronologyRecord = expectRecord(frontmatter.chronology, "chronology");
  const readingModelRecord = expectRecord(
    frontmatter.readingModel,
    "readingModel"
  );
  const scenesRecord = expectRecord(frontmatter.scenes, "scenes");

  const parsedHeroVisuals = expectRecordArray(
    openingRecord,
    "heroVisuals",
    "opening"
  ).map((entry, index) =>
    parseHeroVisual(entry, `opening.heroVisuals[${index}]`)
  );
  const openingVisuals = selectFeatureEntry(
    parsedHeroVisuals,
    "opening.heroVisuals"
  );

  const parsedSceneEntries = expectRecordArray(
    scenesRecord,
    "entries",
    "scenes"
  ).map((entry, index) =>
    parseEditorialEntry(entry, `scenes.entries[${index}]`)
  );
  const sceneEntries = selectFeatureEntry(parsedSceneEntries, "scenes.entries");

  const macroArcRecord = expectRecord(
    chronologyRecord.macroArc,
    "chronology.macroArc"
  );
  const promptBlockRecord = expectRecord(
    readingModelRecord.promptBlock,
    "readingModel.promptBlock"
  );
  const openingHighlightRecord = expectRecord(
    openingRecord.publicAiCard,
    "opening.publicAiCard"
  );
  const startCardRecord = expectRecord(
    openingRecord.startCard,
    "opening.startCard"
  );
  const primaryCtaRecord = expectRecord(
    readingModelRecord.primaryCta,
    "readingModel.primaryCta"
  );

  return {
    editorialNotesMarkdown: document.content,
    opening: {
      eyebrow: expectString(openingRecord, "eyebrow", "opening"),
      titleLines: expectStringArray(openingRecord, "titleLines", "opening"),
      deck: expectString(openingRecord, "deck", "opening"),
      signals: expectRecordArray(openingRecord, "signals", "opening").map(
        (entry, index) => parseOpeningSignal(entry, `opening.signals[${index}]`)
      ),
      heroFeature: openingVisuals.feature,
      heroSupports: openingVisuals.supports,
      publicAiCard: {
        eyebrow: expectString(
          openingHighlightRecord,
          "eyebrow",
          "opening.publicAiCard"
        ),
        title: expectString(
          openingHighlightRecord,
          "title",
          "opening.publicAiCard"
        ),
        description: expectString(
          openingHighlightRecord,
          "description",
          "opening.publicAiCard"
        ),
        themes: expectStringArray(
          openingHighlightRecord,
          "themes",
          "opening.publicAiCard"
        ),
        href: expectString(
          openingHighlightRecord,
          "href",
          "opening.publicAiCard"
        ),
        cta: expectString(
          openingHighlightRecord,
          "cta",
          "opening.publicAiCard"
        ),
      },
      primaryRoutes: expectRecordArray(
        openingRecord,
        "primaryRoutes",
        "opening"
      ).map((entry, index) =>
        parsePrimaryRoute(entry, `opening.primaryRoutes[${index}]`)
      ),
      startCard: {
        eyebrow: expectString(startCardRecord, "eyebrow", "opening.startCard"),
        title: expectString(startCardRecord, "title", "opening.startCard"),
        description: expectString(
          startCardRecord,
          "description",
          "opening.startCard"
        ),
        href: expectString(startCardRecord, "href", "opening.startCard"),
        cta: expectString(startCardRecord, "cta", "opening.startCard"),
      },
    },
    chronology: {
      heading: parseSectionHeading(
        expectRecord(chronologyRecord.heading, "chronology.heading"),
        "chronology.heading"
      ),
      ledger: expectRecordArray(chronologyRecord, "ledger", "chronology").map(
        (entry, index) =>
          parseChronologyLedgerItem(entry, `chronology.ledger[${index}]`)
      ),
      macroArcEyebrow: expectString(
        macroArcRecord,
        "eyebrow",
        "chronology.macroArc"
      ),
      macroArcDescription: expectString(
        macroArcRecord,
        "description",
        "chronology.macroArc"
      ),
      phases: expectRecordArray(
        macroArcRecord,
        "phases",
        "chronology.macroArc"
      ).map((entry, index) =>
        parseChronologyPhase(entry, `chronology.macroArc.phases[${index}]`)
      ),
      eras: expectRecordArray(chronologyRecord, "eras", "chronology").map(
        (entry, index) => parseEraLink(entry, `chronology.eras[${index}]`)
      ),
    },
    readingModel: {
      heading: parseSectionHeading(
        expectRecord(readingModelRecord.heading, "readingModel.heading"),
        "readingModel.heading"
      ),
      signals: expectRecordArray(
        readingModelRecord,
        "signals",
        "readingModel"
      ).map((entry, index) =>
        parseReadingModelSignal(entry, `readingModel.signals[${index}]`)
      ),
      primaryCta: {
        href: expectString(primaryCtaRecord, "href", "readingModel.primaryCta"),
        label: expectString(
          primaryCtaRecord,
          "label",
          "readingModel.primaryCta"
        ),
      },
      promptBlock: {
        eyebrow: expectString(
          promptBlockRecord,
          "eyebrow",
          "readingModel.promptBlock"
        ),
        title: expectString(
          promptBlockRecord,
          "title",
          "readingModel.promptBlock"
        ),
        prompts: expectStringArray(
          promptBlockRecord,
          "prompts",
          "readingModel.promptBlock"
        ),
      },
      companionRoutes: expectRecordArray(
        readingModelRecord,
        "companionRoutes",
        "readingModel"
      ).map((entry, index) =>
        parseCompanionRoute(entry, `readingModel.companionRoutes[${index}]`)
      ),
    },
    scenes: {
      heading: parseSectionHeading(
        expectRecord(scenesRecord.heading, "scenes.heading"),
        "scenes.heading"
      ),
      featureEntry: sceneEntries.feature,
      supportEntries: sceneEntries.supports,
    },
  };
});
