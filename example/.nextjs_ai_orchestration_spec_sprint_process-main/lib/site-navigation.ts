export type SiteNavigationLink = {
  href: string;
  label: string;
};

export type HeaderNavigationItem = SiteNavigationLink & {
  match: {
    exactPathnames?: string[];
    pathnamePrefixes?: string[];
    homeHashes?: string[];
  };
};

export type FooterNavigationSection = {
  title: string;
  description: string;
  links: SiteNavigationLink[];
};

export type FooterReturnSignal = {
  eyebrow: string;
  description: string;
};

export const mainNavigation: HeaderNavigationItem[] = [
  {
    href: "/",
    label: "Overview",
    match: {
      exactPathnames: ["/"],
      homeHashes: ["", "#home-opening", "#home-reading-model", "#home-scenes"],
    },
  },
  {
    href: "/eras/precursors-to-machine-intelligence",
    label: "Seven Eras",
    match: {
      pathnamePrefixes: ["/eras/"],
      homeHashes: ["#home-chronology"],
    },
  },
  {
    href: "/reading-maps/intellectual-lineage",
    label: "Reading Map",
    match: {
      exactPathnames: ["/reading-maps/intellectual-lineage"],
      pathnamePrefixes: ["/reading-maps/"],
    },
  },
  {
    href: "/people-and-institutions",
    label: "People & Institutions",
    match: {
      exactPathnames: ["/people-and-institutions"],
      pathnamePrefixes: ["/people-and-institutions/"],
    },
  },
  {
    href: "/guides/embeddings-latent-space-and-llm-math",
    label: "Math Guide",
    match: {
      exactPathnames: ["/guides/embeddings-latent-space-and-llm-math"],
      pathnamePrefixes: ["/guides/"],
    },
  },
];

export const homeSectionNavigation: HeaderNavigationItem[] = [
  {
    href: "/#home-opening",
    label: "Opening",
    match: {
      exactPathnames: ["/"],
      homeHashes: ["", "#home-opening"],
    },
  },
  {
    href: "/#home-chronology",
    label: "Timeline",
    match: {
      exactPathnames: ["/"],
      homeHashes: ["#home-chronology"],
    },
  },
  {
    href: "/#home-reading-model",
    label: "Reading model",
    match: {
      exactPathnames: ["/"],
      homeHashes: ["#home-reading-model"],
    },
  },
  {
    href: "/#home-scenes",
    label: "Scenes",
    match: {
      exactPathnames: ["/"],
      homeHashes: ["#home-scenes"],
    },
  },
];

/* ─── Per-page "On this page" section navigation ───────────── */

type SectionNavItem = { href: string; label: string };

function sections(
  pathname: string,
  items: { id: string; label: string }[]
): SectionNavItem[] {
  return items.map(({ id, label }) => ({
    href: `${pathname}#${id}`,
    label,
  }));
}

export const pageSectionNavigation: Record<string, SectionNavItem[]> = {
  "/eras/precursors-to-machine-intelligence": sections(
    "/eras/precursors-to-machine-intelligence",
    [
      { id: "era-1-reading-frame", label: "Reading Frame" },
      { id: "era-1-precursors", label: "Runway" },
      { id: "era-1-narrative", label: "Core Narrative" },
      { id: "era-1-people", label: "Key Figures" },
      { id: "era-1-lineage", label: "Connections" },
      { id: "era-1-source-anchors", label: "Primary Sources" },
    ]
  ),
  "/eras/computation-information-field-formation": sections(
    "/eras/computation-information-field-formation",
    [
      { id: "era-2-convergence-map", label: "Orientation" },
      { id: "era-2-chronology", label: "Chronology" },
      { id: "era-2-narrative", label: "Core Narrative" },
      { id: "era-2-visual", label: "Visual Convergence" },
      { id: "era-2-story-layer", label: "Convergence Stories" },
      { id: "era-2-source-anchors", label: "Primary Sources" },
      { id: "era-2-people", label: "Key Figures" },
      { id: "era-2-concepts", label: "Core Concepts" },
      { id: "era-2-turning-point", label: "Institutions" },
      { id: "era-2-documentary-profiles", label: "Profiles" },
    ]
  ),
  "/eras/symbolic-optimism-and-early-ai-programs": sections(
    "/eras/symbolic-optimism-and-early-ai-programs",
    [
      { id: "era-3-minimum-route", label: "Shortest Route" },
      { id: "era-3-chronology", label: "Chronology" },
      { id: "era-3-narrative", label: "Core Narrative" },
      { id: "era-3-people", label: "Key Figures" },
      { id: "era-3-concepts", label: "Core Concepts" },
      { id: "era-3-institutions", label: "Institutions" },
      { id: "era-3-documentary-profiles", label: "Profiles" },
    ]
  ),
  "/eras/knowledge-systems-critique-and-the-first-ai-winter": sections(
    "/eras/knowledge-systems-critique-and-the-first-ai-winter",
    [
      { id: "era-4-minimum-route", label: "Shortest Route" },
      { id: "era-4-chronology", label: "Chronology" },
      { id: "era-4-narrative", label: "Core Narrative" },
      { id: "era-4-people", label: "Key Figures" },
      { id: "era-4-concepts", label: "Core Concepts" },
      { id: "era-4-institutions", label: "Institutions" },
      { id: "era-4-documentary-profiles", label: "Profiles" },
    ]
  ),
  "/eras/statistical-learning-and-network-revival": sections(
    "/eras/statistical-learning-and-network-revival",
    [
      { id: "era-5-two-strands", label: "Organizing Lens" },
      { id: "era-5-minimum-route", label: "Shortest Route" },
      { id: "era-5-chronology", label: "Chronology" },
      { id: "era-5-narrative", label: "Core Narrative" },
      { id: "era-5-people", label: "Key Figures" },
      { id: "era-5-concepts", label: "Core Concepts" },
      { id: "era-5-institutions", label: "Institutions" },
      { id: "era-5-documentary-profiles", label: "Profiles" },
    ]
  ),
  "/eras/deep-learning-breakthroughs": sections(
    "/eras/deep-learning-breakthroughs",
    [
      { id: "era-6-before-after", label: "Before And After" },
      { id: "era-6-minimum-route", label: "Shortest Route" },
      { id: "era-6-chronology", label: "Chronology" },
      { id: "era-6-narrative", label: "Core Narrative" },
      { id: "era-6-people", label: "Key Figures" },
      { id: "era-6-concepts", label: "Core Concepts" },
      { id: "era-6-institutions", label: "Institutions" },
      { id: "era-6-documentary-profiles", label: "Profiles" },
    ]
  ),
  "/eras/foundation-models-and-generative-ai": sections(
    "/eras/foundation-models-and-generative-ai",
    [
      { id: "era-7-reading-lanes", label: "Reading Lanes" },
      { id: "era-7-chronology", label: "Chronology" },
      { id: "era-7-synthesis", label: "Key Claims" },
      { id: "era-7-narrative", label: "Core Narrative" },
      { id: "era-7-people", label: "Key Figures" },
      { id: "era-7-documentary-visuals", label: "Documentary Visuals" },
      { id: "era-7-concepts", label: "Core Concepts" },
      { id: "era-7-institutions", label: "Institutions" },
      { id: "era-7-source-anchors", label: "Source Anchors" },
    ]
  ),
  "/reading-maps/intellectual-lineage": sections(
    "/reading-maps/intellectual-lineage",
    [
      { id: "era-timeline", label: "Timeline" },
      { id: "reading-paths", label: "Reading Paths" },
      { id: "reading-map-minimum-route", label: "Shortest Route" },
      { id: "reading-map-main", label: "Main Chronology" },
      { id: "reading-map-turning-points", label: "Visual Lineage" },
      { id: "reading-map-gap-diagram", label: "Visual Summary" },
      { id: "reading-map-safety", label: "Parallel Thread" },
    ]
  ),
  "/people-and-institutions": sections("/people-and-institutions", [
    { id: "use-this-page", label: "How To Use This Page" },
    { id: "five-minute-route", label: "Five-Minute Route" },
    { id: "people-index", label: "Cast" },
    { id: "institution-index", label: "Institutions" },
    { id: "source-anchors", label: "Source Anchors" },
  ]),
  "/guides/embeddings-latent-space-and-llm-math": sections(
    "/guides/embeddings-latent-space-and-llm-math",
    [
      { id: "math-bridge-core", label: "Minimum Math" },
      { id: "math-bridge-pipeline", label: "Pipeline" },
      { id: "math-bridge-stop-point", label: "Stop Here If Needed" },
      { id: "math-bridge-example", label: "Worked Example" },
      { id: "math-bridge-visual", label: "Visual Bridge" },
      { id: "math-bridge-history", label: "Historical Continuity" },
    ]
  ),
};

export const footerQuickLinks: SiteNavigationLink[] = [
  {
    href: "/eras/precursors-to-machine-intelligence",
    label: "Read the seven-era run",
  },
  {
    href: "/reading-maps/intellectual-lineage",
    label: "Trace the paper lineage",
  },
  {
    href: "/people-and-institutions",
    label: "Meet the cast and institutions",
  },
];

export const footerReturnSignals: FooterReturnSignal[] = [
  {
    eyebrow: "Sequence",
    description:
      "Seven eras carry the argument from machine logic to public AI.",
  },
  {
    eyebrow: "Evidence",
    description:
      "Papers and reading maps show which documents made each turn stick.",
  },
  {
    eyebrow: "Cast",
    description:
      "People, labs, and institutions keep the history tied to actors and power.",
  },
];

export const footerNavigation: FooterNavigationSection[] = [
  {
    title: "Main Line",
    description:
      "Use the overview, era sequence, and current horizon to keep the central argument intact.",
    links: [
      { href: "/", label: "Overview" },
      {
        href: "/eras/precursors-to-machine-intelligence",
        label: "Seven eras",
      },
      {
        href: "/eras/foundation-models-and-generative-ai",
        label: "Current era",
      },
    ],
  },
  {
    title: "Companion Proof",
    description:
      "Use papers, cast, and guides when the sequence needs evidence, actors, or translation.",
    links: [
      { href: "/reading-maps/intellectual-lineage", label: "Reading map" },
      {
        href: "/people-and-institutions",
        label: "People and institutions",
      },
      {
        href: "/guides/embeddings-latent-space-and-llm-math",
        label: "Math bridge",
      },
    ],
  },
  {
    title: "Return Points",
    description:
      "These hinge chapters restore the plot quickly when you come back later.",
    links: [
      {
        href: "/eras/precursors-to-machine-intelligence",
        label: "Runway before AI",
      },
      {
        href: "/eras/computation-information-field-formation",
        label: "Dartmouth as convergence",
      },
      {
        href: "/eras/foundation-models-and-generative-ai",
        label: "Public AI era",
      },
    ],
  },
];
