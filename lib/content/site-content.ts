import type { EraRecord, ExhibitEpilogueContent, HomeContent } from "@/lib/content/types";

export const homeContent: HomeContent = {
  eyebrow: "Artist-run digital exhibition",
  title: "Algorithmic Aesthetics",
  lede:
    "How online culture reshaped graphic design from DIY chaos to platform polish, and how subcultures keep the remix alive.",
  heroCollage: [
    {
      title: "Early Web Aesthetics",
      eyebrow: "DIY pages and badges",
      href: "/eras/early-web-aesthetics",
      image: "/assets/y2k/webbadgearchive.webp",
      alt: "Collage of 88x31 web badges from early-web archives.",
    },
    {
      title: "Platform Standardization",
      eyebrow: "Systems and templates",
      href: "/eras/platform-standardization",
      image: "/assets/standardization/start81.png",
      alt: "Windows start screen showing Metro-style tile interface.",
    },
    {
      title: "Algorithmic Influence",
      eyebrow: "Feeds and metrics",
      href: "/eras/algorithmic-influence",
      image: "/assets/algorithmic influence/youtube-shorts-player.png",
      alt: "YouTube Shorts interface showing a vertically scrolling feed.",
    },
    {
      title: "Subcultures and Anti-Design",
      eyebrow: "Remix and refusal",
      href: "/eras/subcultures-and-anti-design",
      image: "/assets/subcultures/vaporwave-art-example.png",
      alt: "Vaporwave artwork example with retro-digital collage elements.",
    },
  ],
  authorityTitle: "Why this show can speak with authority",
  authorityText:
    "The authority of the exhibit comes from visible sourcing, object-level labels, and clear editorial choices. Visitors are told what each artifact is, why it matters, and how it supports the argument.",
  primaryAction: {
    href: "/eras/early-web-aesthetics",
    label: "Begin the guided tour",
  },
  secondaryAction: {
    href: "/sources",
    label: "View the source archive",
  },
  overviewTitle: "Exhibit Overview",
  overviewText:
    "Each era carries its own visual skin and short guided story. Follow the full chronology or jump directly to a chapter to compare how the web moved from handmade identity to optimized systems and renewed resistance.",
  highlightTitle: "Interactive Layer",
  highlightText:
    "The exhibit pairs image archives with short arguments, timeline signals, and design-impact callouts so every chapter reads like both a gallery wall and a critical essay.",
  highlightImage: "/assets/exhibit/interactive-layer.svg",
  highlightImageAlt: "Diagram showing the exhibit's interpretive devices, including labels, timelines, and source notes.",
  referenceIds: ["geocities", "flat-design", "attention-economy", "internet-meme"],
};

export const eraRecords: EraRecord[] = [
  {
    slug: "early-web-aesthetics",
    order: 1,
    eyebrow: "Era 1",
    title: "Early Web Aesthetics",
    years: "1995-2005",
    lede:
      "The early web was a vibrant, chaotic landscape where personal pages, animated buttons, and maximal DIY typography flourished before standardized layouts or mobile grids narrowed the field.",
    themeKey: "early",
    archiveTitle: "Visual Archive",
    archiveIntro:
      "Badges, buttons, Y2K motifs, and archival screenshots show how early pages treated decoration as identity, invitation, and proof of presence.",
    archiveItems: [
      {
        id: "under-construction",
        title: "Welcome GIF",
        image: "/assets/y2k/y2kwelcome.gif",
        alt: "Animated early-web welcome graphic from the project's localized asset archive.",
        caption:
          "Localized early-web welcome GIF used to show how personal pages announced arrival with motion, hospitality, and visual noise.",
        credit: "Project asset fallback; original GeoCities record retained in sources.",
        sourceId: "geocities-uc-gif",
        objectLabel: {
          label: "Collection object",
          date: "c. 1998",
          maker: "Unknown GeoCities page author",
          medium: "Animated welcome-page web graphic",
          provenance:
            "Localized fallback asset from the project's early-web archive, standing in for an unavailable GeoCities/Wayback image",
          significance:
            "The object preserves an important early-web pattern: pages announced themselves with movement, invitation, and visible self-presentation instead of seamless polish.",
          authorityNote:
            "Installed as a localized stand-in so the room can keep showing period-authentic motion graphics even when the original archive endpoint is unstable.",
          assetStatus: "localized",
        },
      },
      {
        id: "banner-gif",
        title: "Banner GIF",
        image: "/assets/y2k/truckgifstrip.gif",
        alt: "Animated decorative GIF strip from the project's localized early-web asset archive.",
        caption:
          "Localized decorative GIF fallback used in place of an unavailable GeoCities banner capture.",
        credit: "Project asset fallback; original GeoCities record retained in sources.",
        sourceId: "geocities-banner-gif",
        objectLabel: {
          label: "Collection object",
          date: "c. 2000",
          maker: "Unknown GeoCities page author",
          medium: "Animated banner graphic",
          provenance:
            "Localized fallback asset from the project's early-web archive, replacing an unavailable archived banner image",
          significance:
            "Moving banners helped transform static pages into theatrical surfaces. They worked as stage dressing for self-authored online identity.",
          authorityNote:
            "Selected as a local stand-in because the exhibit still needs period-authentic motion graphics to show how decoration signaled presence.",
          assetStatus: "localized",
        },
      },
      {
        id: "panic-button",
        title: "Animated Button",
        image: "/assets/y2k/y2knext.gif",
        alt: "Animated Y2K-style next button from the project's localized early-web asset archive.",
        caption:
          "Localized Y2K next-button graphic representing the compact navigational ornaments common to personal-page cultures.",
        credit: "Project asset fallback; original GeoCities record retained in sources.",
        sourceId: "geocities-panic-button",
        objectLabel: {
          label: "Collection object",
          date: "c. 2001",
          maker: "Unknown GeoCities page author",
          medium: "Animated navigational interface graphic",
          provenance:
            "Localized fallback asset from the project's early-web archive, used when the archived button image could not be mirrored",
          significance:
            "Compact animated graphics collapsed signage, interface cue, and decoration into the same visual object. Navigation and ornament were rarely cleanly separated.",
          authorityNote:
            "Used as a localized substitute so the exhibit can keep showing authored interface chrome even when the original archive file is unreachable.",
          assetStatus: "localized",
        },
      },
      {
        id: "geocities-screenshot",
        title: "GeoCities Screenshot",
        image: "/assets/y2k/geocities-1995.png",
        alt: "Archived screenshot of the GeoCities homepage from the mid-1990s.",
        caption:
          "An archived GeoCities homepage capture showing the neighborhood-directory logic and dense link structure of the early public web.",
        credit: "Localized project copy of the documented GeoCities homepage capture referenced in the source archive.",
        sourceId: "geocities-screenshot",
        objectLabel: {
          label: "Collection object",
          date: "1995",
          maker: "GeoCities / Yahoo",
          medium: "Homepage screenshot",
          provenance: "Localized copy of the documented GeoCities homepage capture referenced via Wikimedia",
          significance:
            "The screenshot makes clear that directory structures, dense lists, and visible categorization were core features of early personal publishing, not failures of taste.",
          authorityNote:
            "Placed beside handmade assets so visitors can compare personal page culture with the hosting infrastructure that made it visible.",
          assetStatus: "localized",
        },
      },
    ],
    contextBlocks: [
      {
        id: "badges",
        title: "Web Badges",
        body:
          "Small 88x31 graphics signaled identity, taste, and membership across the early web. They spread through copying and remixing rather than through formal design systems, which is exactly why they mattered.",
        listItems: [
          "Best Viewed in Netscape",
          "Made with Notepad",
          "Join My Webring",
          "Get Flash Player",
        ],
        supportImage: "/assets/y2k/webbadgearchive.webp",
        supportAlt: "Photographic collage of archived 88x31 web badges from the local asset collection.",
        supportCaption:
          "Archived 88x31 badge collage showing how tiny graphics became status markers, software allegiances, and social links across the early web.",
        supportSourceId: "jordaneldredge-badges",
      },
      {
        id: "guestbooks",
        title: "Guestbook Entries",
        body:
          "Guestbooks captured the social layer of personal pages before feeds. Visitors left public traces, jokes, and reciprocal invitations, turning every page into a lightly moderated commons instead of a private dashboard.",
        listItems: [
          "Love the glitter text!",
          "Signed your guestbook :)",
          "Come visit my webring",
          "Best viewed on CRT",
        ],
        supportImage: "/assets/y2k/guestbook.png",
        supportAlt: "Archived GeoCities guestbook interface page.",
        supportCaption:
          "An archived GeoCities guestbook page showing how public comments acted as hospitality, testimony, and social proof.",
        supportSourceId: "guestbook-archive",
      },
    ],
    voiceFragment: {
      eyebrow: "Voice fragment",
      title: "From the page-making crowd",
      quote:
        "You were not waiting for permission to publish. You built a page, decorated it until it felt like you, and then invited strangers to sign the guestbook.",
      attribution: "Composite curatorial paraphrase drawn from hobbyist page cultures",
      context:
        "The fragment stands in for the social energy of early personal publishing, where authorship was public, provisional, and visibly handmade.",
    },
    commentary: [
      "GeoCities and MySpace made visual identity both intensely personal and radically public. Users layered layouts, custom colors, badges, and animated graphics into online personas that behaved like both diaries and performances.",
      "The DIY graphic language of GIFs, custom HTML, and improvised collage prioritized experimentation over polish. That messy visual vocabulary never disappeared; it survives as a design memory later eras keep revisiting and remixing.",
    ],
    designImpact:
      "The early web normalized maximalism and user-controlled aesthetics, establishing a visual vocabulary of glitter, gradients, badges, and self-branding that still shapes nostalgia-driven design.",
    timelineTitle: "Era Signals",
    timelineItems: [
      {
        year: "1995",
        label: "GeoCities and personal hosting expand who can publish a homepage without institutional backing.",
      },
      {
        year: "1998",
        label: "Web badges, GIF buttons, and webring links become shorthand for belonging and technical identity.",
      },
      {
        year: "2003",
        label: "MySpace customization pushes profile pages closer to public self-branding and social performance.",
      },
      {
        year: "2005",
        label: "Y2K visual memory begins hardening into a recognizable style language for later revival.",
      },
    ],
    referenceIds: [
      "geocities",
      "myspace",
      "gif-history",
      "y2k-aesthetic",
      "web-badge",
      "gifcities",
      "jordaneldredge-badges",
    ],
    next: { href: "/eras/platform-standardization", label: "Next era" },
  },
  {
    slug: "platform-standardization",
    order: 2,
    eyebrow: "Era 2",
    title: "Platform Standardization",
    years: "2006-2014",
    lede:
      "The rise of social platforms shifted web design from user-shaped surfaces to standardized, systematized interfaces built for scale, clarity, and cross-device predictability.",
    themeKey: "platform",
    archiveTitle: "Visual Archive",
    archiveIntro:
      "Platform-era design systems treated interfaces as products to be rolled out, reused, and audited. These images trace the move toward flat color, grid discipline, and component logic.",
    archiveItems: [
      {
        id: "metro-ui",
        title: "Metro Tiles",
        image: "/assets/standardization/start81.png",
        alt: "Windows start screen showing Metro-style tile interface.",
        caption:
          "Metro tiles foreground color blocks, hierarchy, and content-first composition over decorative chrome.",
        credit: "Wikimedia Commons",
        sourceId: "start81",
        objectLabel: {
          label: "Collection object",
          date: "2012",
          maker: "Microsoft design teams",
          medium: "Operating system interface screenshot",
          provenance: "Wikimedia documentation image of the Windows start screen",
          significance:
            "Metro distilled interface design into large type, clean color blocks, and scalable tiles, demonstrating how platform thinking converted pages into systems.",
          authorityNote:
            "Included as a canonical example of platform-era confidence: the interface speaks in a unified voice and expects widespread adoption.",
          assetStatus: "localized",
        },
      },
      {
        id: "material-components",
        title: "Material Components",
        image: "/assets/standardization/material-you-light.png",
        alt: "Material Design component gallery in a light theme.",
        caption:
          "Material Design formalized reusable components, motion logic, and consistent visual behaviors across products.",
        credit: "Wikimedia Commons",
        sourceId: "material-you-light",
        objectLabel: {
          label: "Collection object",
          date: "2021",
          maker: "Google Material Design team",
          medium: "Design system component preview",
          provenance: "Wikimedia-hosted documentation image of Material You",
          significance:
            "The object turns interface design into a kit of repeatable parts. Authority now comes from consistency, documentation, and cross-product coherence.",
          authorityNote:
            "Placed here to show how standardization makes visual language portable, teachable, and governable.",
          assetStatus: "localized",
        },
      },
      {
        id: "flat-branding",
        title: "Flat Branding Example",
        image: "/assets/standardization/windows10abstract.png",
        alt: "Abstract Windows graphic showing flat design color fields.",
        caption:
          "Flat design reduced ornament, increased clarity, and made brand systems easier to scale across interfaces.",
        credit: "Wikimedia Commons",
        sourceId: "windows10abstract",
        objectLabel: {
          label: "Collection object",
          date: "2015",
          maker: "Microsoft brand system",
          medium: "Promotional interface graphic",
          provenance: "Wikimedia-hosted brand image associated with Windows design language",
          significance:
            "Flat branding shows how ornament was stripped back so interfaces could travel across devices and marketing surfaces with minimal friction.",
          authorityNote:
            "Included to mark the shift from expressive page aesthetics to enforceable visual systems.",
          assetStatus: "localized",
        },
      },
      {
        id: "wikipedia-app",
        title: "Windows App Layout",
        image: "/assets/standardization/windows8-wikipedia-app.png",
        alt: "Wikipedia app snapped to a Windows 8 desktop layout.",
        caption:
          "A platform-era app layout showing how modular panels and strict spacing scales standardized interface presentation.",
        credit: "Wikimedia Commons",
        sourceId: "windows8-wikipedia",
        objectLabel: {
          label: "Collection object",
          date: "2012",
          maker: "Wikipedia app team for Windows 8",
          medium: "Application interface screenshot",
          provenance: "Wikimedia-hosted app documentation image",
          significance:
            "The snapped layout makes interface standardization concrete: content is now staged inside predictable modules rather than improvised page zones.",
          authorityNote:
            "Used as an evidentiary object because it translates abstract system language into an everyday application surface.",
          assetStatus: "localized",
        },
      },
    ],
    contextBlocks: [
      {
        id: "tokens",
        title: "Design Tokens",
        body:
          "Tokenized rules for color, spacing, type, and elevation gave teams a shared implementation language. Design decisions became portable values instead of one-off visual judgments.",
        listItems: [
          "Primary color: Brand Blue",
          "Surface: Neutral 100",
          "Radius: 12px",
          "Typeface: System Sans",
        ],
        supportImage: "/assets/standardization/design-tokens-board.svg",
        supportAlt: "Exhibit-produced design tokens board showing color, radius, spacing, and type samples.",
        supportCaption:
          "Exhibit-produced token board translating platform-era system language into visible rules for color, spacing, and typography.",
        supportSourceId: "material-design",
      },
      {
        id: "grid-discipline",
        title: "Grid Discipline",
        body:
          "Strict grids and spacing scales made layouts predictable across devices. The point was not just elegance but operational consistency for teams shipping to phones, tablets, and desktops.",
        listItems: ["Gutter: 24px", "Column: 12", "Spacing: 8pt scale", "Icon weight: 2px"],
        supportImage: "/assets/standardization/grid-systems.png",
        supportAlt: "Diagram showing common grid layout systems in interface design.",
        supportCaption:
          "Grid logic and spacing discipline turned layout into a repeatable system instead of an improvised page composition.",
        supportSourceId: "mobile-first-grid",
      },
    ],
    voiceFragment: {
      eyebrow: "Voice fragment",
      title: "From the system builders",
      quote:
        "The interface had to scale. It had to look correct on every screen, in every product meeting, and in every release cycle.",
      attribution: "Composite curatorial paraphrase of platform-era product logic",
      context:
        "The quotation reframes standardization as a production necessity, not just a taste choice. Scale becomes both the rationale and the visual style.",
    },
    commentary: [
      "As platforms grew, reusable templates and component libraries turned design into an operational system. Metro and Material championed clarity, motion rules, and unified visual languages that could scale across products.",
      "Flat design reduced visual noise and made navigation predictable, but it also accelerated the homogenization of everyday interfaces by rewarding consistency over risk and local texture.",
    ],
    designImpact:
      "Standardization raised baseline usability expectations and accelerated product delivery, but it narrowed the range of mainstream interface aesthetics.",
    timelineTitle: "Milestones",
    timelineItems: [
      {
        year: "2006",
        label: "Social platforms scale standardized layouts, global navigation bars, and profile templates.",
      },
      {
        year: "2010",
        label: "Metro popularizes bold tiles, large typography, and content-first interface thinking.",
      },
      {
        year: "2013",
        label: "Flat design becomes the dominant brand aesthetic across major digital products.",
      },
      {
        year: "2014",
        label: "Material Design formalizes motion, depth, and responsive component behavior.",
      },
    ],
    referenceIds: ["flat-design", "metro-design", "material-design"],
    previous: { href: "/eras/early-web-aesthetics", label: "Previous era" },
    next: { href: "/eras/algorithmic-influence", label: "Next era" },
  },
  {
    slug: "algorithmic-influence",
    order: 3,
    eyebrow: "Era 3",
    title: "Algorithmic Influence",
    years: "2015-Present",
    lede:
      "The contemporary web is shaped by metrics, A/B testing, and ranking systems that influence hierarchy, typography, motion, and what design is allowed to optimize for.",
    themeKey: "algorithmic",
    archiveTitle: "Visual Archive",
    archiveIntro:
      "Feeds, dashboards, ranking diagrams, and responsive brand systems reveal how contemporary interfaces are tuned around measurable behavior rather than static composition.",
    archiveItems: [
      {
        id: "shorts-feed",
        title: "Infinite Scroll Feed",
        image: "/assets/algorithmic influence/youtube-shorts-player.png",
        alt: "YouTube Shorts interface showing a vertically scrolling feed.",
        caption:
          "Short-form feed layouts optimize for continuous attention and rapid interaction rather than bounded page visits.",
        credit: "Wikimedia Commons",
        sourceId: "youtube-shorts",
        objectLabel: {
          label: "Collection object",
          date: "2022",
          maker: "YouTube product interface",
          medium: "Mobile feed screenshot",
          provenance: "Wikimedia-hosted interface capture of YouTube Shorts",
          significance:
            "The feed is less a page than a ranking machine. Its design logic privileges continuity, rapid appraisal, and measurable attention.",
          authorityNote:
            "Selected because it makes optimization visible in a mainstream everyday interface rather than in abstract design theory.",
          assetStatus: "localized",
        },
      },
      {
        id: "analytics-dashboard",
        title: "Analytics Dashboard",
        image: "/assets/algorithmic influence/visitor-analytics-dashboard.jpg",
        alt: "Analytics dashboard with visitor metrics and charts.",
        caption:
          "Dashboard interfaces turn performance data into design pressure, translating visual choices into measurable outcomes.",
        credit: "Wikimedia Commons",
        sourceId: "analytics-dashboard",
        objectLabel: {
          label: "Collection object",
          date: "2019",
          maker: "Visitor Analytics",
          medium: "Metrics dashboard screenshot",
          provenance: "Wikimedia-hosted analytics interface image",
          significance:
            "Dashboards convert behavior into managerial evidence. They explain why clarity, bold type, and modular surfaces became operational imperatives.",
          authorityNote:
            "Placed beside feed interfaces to show that contemporary aesthetics are governed as much by measurement as by taste.",
          assetStatus: "localized",
        },
      },
      {
        id: "responsive-devices",
        title: "Responsive Brand System",
        image: "/assets/standardization/mobile-first-design.png",
        alt: "Mobile-first design diagram illustrating adaptable layout rules.",
        caption:
          "Localized fallback diagram used to represent responsive system thinking after the original responsive-devices image could not be mirrored automatically.",
        credit: "Project asset fallback based on the exhibit source archive.",
        sourceId: "mobile-first-grid",
        objectLabel: {
          label: "Collection object",
          date: "2016",
          maker: "Mobile-first design educators and pattern authors",
          medium: "Responsive layout diagram",
          provenance:
            "Localized fallback image from the project's standardization assets, used in place of a blocked responsive-design screenshot",
          significance:
            "The object shows how brand consistency and optimization depend on modular systems that can survive translation across screens.",
          authorityNote:
            "Included to keep the exhibit's responsive-systems argument visible even when the original Wikimedia file cannot be mirrored automatically.",
          assetStatus: "localized",
        },
      },
      {
        id: "internet-map",
        title: "Network Abstraction",
        image: "/assets/algorithmic influence/internet-map.png",
        alt: "Abstract network map representing interconnected digital systems.",
        caption:
          "Abstract system maps help visualize the hidden infrastructure behind ranking, targeting, and content distribution.",
        credit: "Wikimedia Commons",
        sourceId: "internet-map",
        objectLabel: {
          label: "Collection object",
          date: "c. 2011",
          maker: "Network visualization authors",
          medium: "Infrastructure map visualization",
          provenance: "Wikimedia-hosted abstract network diagram",
          significance:
            "This object does not depict a single product. It represents the infrastructural imagination behind platform governance and contemporary interface logic.",
          authorityNote:
            "Used as a conceptual hinge between what visitors see on screen and the systems that decide what surfaces there.",
          assetStatus: "localized",
        },
      },
    ],
    contextBlocks: [
      {
        id: "metrics-strip",
        title: "Metrics Strip",
        body:
          "Metrics such as click-through rate, retention, and scroll depth do not just describe performance. They shape layout, hierarchy, and what content is promoted inside the interface.",
        listItems: ["CTR Lift: +3.2%", "Retention: 7-day", "Scroll Depth: 68%", "Test Variant: B"],
        supportImage: "/assets/algorithmic influence/metrics-strip.svg",
        supportAlt: "Exhibit-produced metrics strip diagram showing retention, click-through rate, and test variants.",
        supportCaption:
          "Exhibit-produced metrics strip condensing the performance vocabulary that turns interface review into performance review.",
        supportSourceId: "analytics-dashboard",
      },
      {
        id: "signal-flow",
        title: "Signal Flow",
        body:
          "User actions become signals, signals feed ranking models, and those models reshape what visual patterns dominate the screen. The feed becomes both interface and governance system.",
        listItems: [
          "Input: Engagement signal",
          "Filter: Relevance model",
          "Rank: Predicted value",
          "Output: Feed order",
        ],
        supportImage: "/assets/algorithmic influence/signal-flow.svg",
        supportAlt: "Exhibit-produced signal-flow diagram tracing how engagement inputs become ranked outputs.",
        supportCaption:
          "Exhibit-produced routing diagram used to make the hidden sequence from user signal to feed order legible at a glance.",
        supportSourceId: "internet-map",
      },
    ],
    voiceFragment: {
      eyebrow: "Voice fragment",
      title: "From the dashboard era",
      quote:
        "If it cannot be measured, it struggles to stay on screen. Aesthetic decisions become operational only when they can survive the experiment.",
      attribution: "Composite curatorial paraphrase of optimization culture",
      context:
        "The statement captures the managerial tone of algorithmic design: decisions are persuasive only when they can be defended as performance outcomes.",
    },
    commentary: [
      "Engagement metrics and A/B testing have altered the visual language of the web. Bold typography, simplified logos, and continuous scroll interfaces are not neutral stylistic choices; they are responses to optimization pressure.",
      "Feeds prioritize readability at small sizes, modularity, and repeatable visual systems that support rapid iteration. That efficiency delivers clarity, but it can also produce sameness and fatigue.",
    ],
    designImpact:
      "Algorithmic visibility rewards clarity and speed, pushing design toward modular, testable, high-performing patterns that often feel efficient before they feel expressive.",
    timelineTitle: "Optimization Timeline",
    timelineItems: [
      {
        year: "2015",
        label: "Infinite scroll becomes a dominant social interface pattern and reshapes content consumption.",
      },
      {
        year: "2017",
        label: "Attention economy framing spreads through design discourse and product strategy.",
      },
      {
        year: "2020",
        label: "A/B testing influences visual decisions at every layer of interface construction.",
      },
      {
        year: "2024",
        label: "Algorithmic feeds dominate brand priorities and keep optimization at the center of design work.",
      },
    ],
    referenceIds: ["attention-economy", "ab-testing", "infinite-scroll"],
    previous: { href: "/eras/platform-standardization", label: "Previous era" },
    next: { href: "/eras/subcultures-and-anti-design", label: "Next era" },
  },
  {
    slug: "subcultures-and-anti-design",
    order: 4,
    eyebrow: "Era 4",
    title: "Subcultures and Anti-Design",
    years: "Ongoing",
    lede:
      "Memes, vaporwave, brutalist sites, and zine-like remix cultures reclaim the web's experimental spirit by rejecting polished uniformity and keeping visual friction visible.",
    themeKey: "subcultures",
    archiveTitle: "Visual Archive",
    archiveIntro:
      "Subculture image languages work through collage, distortion, inside jokes, and deliberate roughness. They critique the polished mainstream by refusing to disappear into seamless UI.",
    archiveItems: [
      {
        id: "doge",
        title: "Meme Format",
        image: "/assets/subcultures/doge-meme-example.jpg",
        alt: "Doge meme example with overlaid caption text, localized from a documented Wikimedia source.",
        caption:
          "A documented meme example showing how caption templates, shared reaction images, and playful text layering became a public authorship format descended from the early web's copy-and-remix culture.",
        credit: "Localized project copy of the documented Doge meme example from Wikimedia Commons.",
        sourceId: "doge-meme",
        objectLabel: {
          label: "Collection object",
          date: "2013",
          maker: "Distributed meme communities",
          medium: "Captioned meme image",
          provenance:
            "Localized project copy of the documented Doge meme example hosted on Wikimedia Commons",
          significance:
            "Meme templates turn authorship into a relay. Their authority comes from recognizability and circulation rather than from institutional approval, extending the early web's habits of copying, in-jokes, and visible self-expression.",
          authorityNote:
            "Included as a documented meme object because it shows how early-internet remix logic survived into platform-era image culture.",
          assetStatus: "localized",
        },
      },
      {
        id: "vaporwave",
        title: "Vaporwave Collage",
        image: "/assets/subcultures/vaporwave-art-example.png",
        alt: "Vaporwave artwork example with retro-digital collage elements, localized from a documented Wikimedia source.",
        caption:
          "A documented vaporwave artwork example showing how retro-digital surfaces, obsolete interface memory, and collage aesthetics recycle early-internet visual residue into a later countercultural style.",
        credit: "Localized project copy of the documented vaporwave artwork example from Wikimedia Commons.",
        sourceId: "vaporwave-art",
        objectLabel: {
          label: "Collection object",
          date: "2014",
          maker: "Vaporwave artist / remix culture",
          medium: "Digital collage artwork",
          provenance:
            "Localized project copy of the documented vaporwave artwork example hosted on Wikimedia Commons",
          significance:
            "Vaporwave demonstrates how nostalgia, consumer debris, and digital collage became a critical language for subcultural remix online, often by scavenging from the visual memory of early web and desktop culture.",
          authorityNote:
            "Placed here as a documented image object because it makes the line from early digital visual culture to later anti-design collage immediately visible.",
          assetStatus: "localized",
        },
      },
      {
        id: "brutalist-site",
        title: "Brutalist Web Screenshot",
        image: "/assets/subcultures/2chan-main-page.png",
        alt: "Screenshot of an imageboard-style community interface.",
        caption:
          "Imageboard interfaces foreground raw function, dense text, and anti-polish as deliberate visual positions.",
        credit: "Localized project copy of an imageboard community interface.",
        sourceId: "twochan",
        objectLabel: {
          label: "Collection object",
          date: "2009",
          maker: "Imageboard/forum interface culture",
          medium: "Forum interface screenshot",
          provenance: "Localized project copy of an imageboard-style interface screenshot",
          significance:
            "The stripped interface does not simply lack polish. It performs anti-polish as a stance against the managed smoothness of mainstream platforms.",
          authorityNote:
            "Included as a localized imageboard example because that raw, crowded interface grammar is central to the exhibit's anti-design argument.",
          assetStatus: "localized",
        },
      },
      {
        id: "deep-fried",
        title: "Deep-Fried Meme",
        image: "/assets/subcultures/deep-fried-meme.jpg",
        alt: "Overprocessed meme image with intentionally degraded visual quality.",
        caption:
          "Deep-fried aesthetics turn distortion into a cultural signal, rejecting smoothness and legibility as default design virtues.",
        credit: "Wikimedia Commons",
        sourceId: "deep-fried-meme",
        objectLabel: {
          label: "Collection object",
          date: "2018",
          maker: "Networked meme communities",
          medium: "Heavily processed meme image",
          provenance: "Wikimedia-hosted example of degraded meme processing",
          significance:
            "The image exaggerates compression, sharpening, and color damage until degradation itself becomes the joke and the aesthetic signal.",
          authorityNote:
            "Selected to show how communities can weaponize illegibility against dominant expectations of clarity and refinement.",
          assetStatus: "localized",
        },
      },
    ],
    contextBlocks: [
      {
        id: "manifesto-snippets",
        title: "Manifesto Snippets",
        body:
          "Community notes, zines, and slogans make anti-design legible as a method rather than a look. The point is to keep the seams visible and refuse the assumption that design must always feel resolved.",
        listItems: [
          "Reject polish, keep the seams visible.",
          "Remix is a method, not a style.",
          "Noise is a feature, not a bug.",
          "Community authorship over brand authorship.",
        ],
        supportImage: "/assets/subcultures/uk-us-zines.jpg",
        supportAlt: "Spread of printed zines and independent publications.",
        supportCaption:
          "Zines and manifesto fragments show how anti-design communities distribute ideas outside formal design institutions.",
        supportSourceId: "uk-us-zines",
      },
      {
        id: "remix-channels",
        title: "Remix Channels",
        body:
          "Discord servers, image boards, remix hubs, and swap cultures keep experimentation alive outside corporate standards. Distribution is decentralized, iterative, and rarely finished.",
        listItems: [
          "Discord servers and private invites",
          "Image boards and remix hubs",
          "Mixtape zines and digital bundles",
          "IRL meetups and swap tables",
        ],
        supportImage: "/assets/subcultures/remix-channels-map.svg",
        supportAlt: "Exhibit-produced map of remix channels linking boards, chats, zines, and swap tables.",
        supportCaption:
          "Exhibit-produced channel map showing how remix communities move artifacts across boards, chats, bundles, and in-person exchange.",
        supportSourceId: "brutalist-websites",
      },
    ],
    voiceFragment: {
      eyebrow: "Voice fragment",
      title: "From the refusal scene",
      quote:
        "We keep the seams visible on purpose. If the interface looks too resolved, it starts to feel like it belongs to the platform instead of to us.",
      attribution: "Composite curatorial paraphrase of anti-design and remix communities",
      context:
        "The fragment foregrounds refusal as a community tactic. Roughness becomes a way of preserving authorship and resisting standardization.",
    },
    commentary: [
      "Subcultures recycle early-web textures, glitch effects, and lo-fi design to critique the sanitized polish of mainstream platforms and signal in-group identity.",
      "Remix culture and community-led aesthetics keep experimentation alive outside corporate standards. By embracing imperfection and noise, they challenge the idea that design must always be smooth, efficient, or marketable.",
    ],
    designImpact:
      "Anti-design keeps experimentation visible and feeds contemporary design with new references, formats, and provocations that resist platform sameness.",
    timelineTitle: "Remix Timeline",
    timelineItems: [
      {
        year: "2011",
        label: "Vaporwave surfaces online as both retro-futurist style and critique of consumer culture.",
      },
      {
        year: "2014",
        label: "Meme formats stabilize into repeatable templates that enable rapid collective remixing.",
      },
      {
        year: "2016",
        label: "Brutalist web directories amplify raw design as a visual protest against polished sameness.",
      },
      {
        year: "2020",
        label: "Anti-design spreads through independent studios and keeps visual risk visible in contemporary practice.",
      },
    ],
    referenceIds: ["internet-meme", "vaporwave", "brutalist-websites"],
    previous: { href: "/eras/algorithmic-influence", label: "Previous era" },
  },
];

export const exhibitEpilogue: ExhibitEpilogueContent = {
  eyebrow: "Final room",
  title: "What carries forward is not one style, but a struggle over who gets to shape the screen",
  body: [
    "The exhibit begins with personal pages built from copied fragments and ends with communities using distortion, remix, and refusal to keep that fragmentary energy alive. Between those two points, platforms and metrics formalized design into systems that could scale, test, and govern behavior.",
    "What remains constant is the contest over authorship. Every era in the show asks who controls the interface, who gets to decorate it, and which visual languages are allowed to count as credible, usable, or desirable.",
  ],
  prompt:
    "Leave the show by asking not which era looked best, but which conditions made each aesthetic possible and whose interests those conditions served.",
  primaryAction: {
    href: "/sources",
    label: "Review the source dossier",
  },
  secondaryAction: {
    href: "/",
    label: "Return to the opening gallery",
  },
};
