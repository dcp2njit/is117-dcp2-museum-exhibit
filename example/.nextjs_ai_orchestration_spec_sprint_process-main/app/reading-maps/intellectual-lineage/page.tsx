import type { Metadata } from "next";

import {
  ChapterHero,
  ChapterSection,
  EditorialAside,
  PullQuote,
  TransitionBlock,
} from "@/components/content/chapter";
import { EditorialCardGrid } from "@/components/content/editorial/editorial-card-grid";
import { EditorialSummaryGrid } from "@/components/content/editorial/editorial-summary-grid";
import { GuideCallout } from "@/components/content/guide-callout";
import {
  ReadingClusterGrid,
  type ReadingEntry,
} from "@/components/content/reading/reading-cluster-grid";
import { FoundationModelTurningPointsDiagram } from "@/components/content/visualizations/foundation-model-turning-points-diagram";
import { InterpretabilityGapDiagram } from "@/components/content/visualizations/interpretability-gap-diagram";

const eraRouteByEra: Record<string, string> = {
  "Era 1": "/eras/precursors-to-machine-intelligence",
  "Era 2": "/eras/computation-information-field-formation",
  "Era 3": "/eras/symbolic-optimism-and-early-ai-programs",
  "Era 4": "/eras/knowledge-systems-critique-and-the-first-ai-winter",
  "Era 5": "/eras/statistical-learning-and-network-revival",
  "Era 6": "/eras/deep-learning-breakthroughs",
  "Era 7": "/eras/foundation-models-and-generative-ai",
};

const eraImageByEra: Record<string, { src: string; alt: string }> = {
  "Era 1": {
    src: "/media/generated/era-1-precursors.webp",
    alt: "Illustration of symbolic logic and early mechanical computation",
  },
  "Era 2": {
    src: "/media/generated/era-2-field-formation.webp",
    alt: "Illustration of computation, information theory, and field formation",
  },
  "Era 3": {
    src: "/media/generated/era-3-symbolic-programs.webp",
    alt: "Illustration of symbolic AI programs and heuristic search",
  },
  "Era 4": {
    src: "/media/generated/era-4-expert-systems.webp",
    alt: "Illustration of expert systems and the first AI winter",
  },
  "Era 5": {
    src: "/media/generated/era-5-statistical-revival.webp",
    alt: "Illustration of statistical learning and neural network revival",
  },
  "Era 6": {
    src: "/media/generated/era-6-deep-learning.webp",
    alt: "Illustration of deep learning breakthroughs",
  },
  "Era 7": {
    src: "/media/generated/era-7-foundation-models.webp",
    alt: "Illustration of foundation models and generative AI",
  },
};

const chronologyCards = [
  {
    era: "Era 1",
    title: "Precursors to Machine Intelligence",
    readings: [
      {
        work: "Ada Lovelace, Notes on the Analytical Engine",
        year: "1843",
        why: "Clarifies the distinction between executing procedure and making stronger claims about machine thought.",
        href: "https://www.fourmilab.ch/babbage/sketch.html",
        lineage:
          "Keeps later AI history honest by separating rule-following machinery from claims about genuine intelligence.",
      },
      {
        work: "George Boole, An Investigation of the Laws of Thought",
        year: "1854",
        why: "Shows the deep symbolic lineage behind later attempts to mechanize reasoning.",
        href: "https://archive.org/details/investigationofl00bool",
        lineage:
          "Turns reasoning into symbolic structure, which Turing later recasts as computable procedure.",
      },
    ] satisfies ReadingEntry[],
  },
  {
    era: "Era 2",
    title: "Computation, Information, and Field Formation",
    readings: [
      {
        work: "Alan Turing, On Computable Numbers",
        year: "1936",
        why: "Provides the precise theory of computation that later AI work depends on.",
        href: "https://doi.org/10.1112/plms/s2-42.1.230",
        lineage:
          "Defines what a machine can compute before the field can argue about machine intelligence.",
      },
      {
        work: "Claude Shannon, A Mathematical Theory of Communication",
        year: "1948",
        why: "Makes information part of the technical vocabulary that later AI inherits.",
        href: "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x",
        lineage:
          "Gives AI a durable language for signals, encoding, and communication rather than logic alone.",
      },
      {
        work: "McCulloch and Pitts, A Logical Calculus of the Ideas Immanent in Nervous Activity",
        year: "1943",
        why: "Introduces a neuron-inspired model that keeps the origin story broader than formal logic and circuitry.",
        href: "https://doi.org/10.1007/BF02478259",
        lineage:
          "Opens the line from symbolic reasoning toward computational models of neural systems.",
      },
      {
        work: "Dartmouth proposal",
        year: "1955",
        why: "Names and consolidates artificial intelligence as a field.",
        href: "http://jmc.stanford.edu/articles/dartmouth/dartmouth.pdf",
        lineage:
          "Acts as a convergence point: computability, information, and neural abstraction become a named research agenda.",
      },
    ] satisfies ReadingEntry[],
  },
  {
    era: "Era 3",
    title: "Symbolic Optimism and Early AI Programs",
    readings: [
      {
        work: "Newell and Simon, The Logic Theory Machine",
        year: "1956",
        why: "Shows that formal reasoning can become a working program, not just a philosophical ambition.",
        href: "https://doi.org/10.1109/TIT.1956.1056797",
        lineage:
          "Turns formal reasoning into software, which makes symbolic AI feel like an executable research program.",
      },
      {
        work: "John McCarthy, Recursive Functions of Symbolic Expressions",
        year: "1960",
        why: "Helps establish symbolic AI as real research infrastructure.",
        href: "https://doi.org/10.1145/367177.367199",
        lineage:
          "Provides the language and symbolic machinery that support the next wave of theorem proving and knowledge systems.",
      },
      {
        work: "J. A. Robinson, A Machine-Oriented Logic Based on the Resolution Principle",
        year: "1965",
        why: "Sharpens the logic toolkit that later symbolic systems and proof procedures rely on.",
        href: "https://doi.org/10.1145/321250.321253",
        lineage:
          "Pushes symbolic AI from ambition toward formal methods that can scale into specialized systems.",
      },
    ] satisfies ReadingEntry[],
  },
  {
    era: "Era 4",
    title: "Knowledge Systems, Critique, and the First AI Winter",
    readings: [
      {
        work: "Buchanan, Sutherland, and Feigenbaum, The Heuristic DENDRAL Project",
        year: "1973",
        why: "Make knowledge-based systems look genuinely useful in bounded domains.",
        href: "https://doi.org/10.1145/1045154.1045159",
        lineage:
          "Shows that symbolic AI works best when it is narrow, expert, and densely supplied with domain knowledge.",
      },
      {
        work: "Shortliffe et al., Computer-Based Consultations in Clinical Therapeutics: Explanation and Rule Acquisition Capabilities of the MYCIN System",
        year: "1975",
        why: "Turns expert systems into a concrete model of how knowledge engineering can perform useful reasoning.",
        href: "https://doi.org/10.1016/0010-4809(75)90009-9",
        lineage:
          "Extends the DENDRAL lesson: progress is real, but it depends on hand-built expertise and narrow domains.",
      },
      {
        work: "James Lighthill, Artificial Intelligence: A General Survey",
        year: "1973",
        why: "Captures the strongest durable critique of broad symbolic ambitions.",
        href: "https://www.chilton-computing.org.uk/inf/literature/reports/lighthill_report/p001.htm",
        lineage:
          "Names the gap between local success and general intelligence claims, setting up the conditions for the first AI winter.",
      },
    ] satisfies ReadingEntry[],
  },
  {
    era: "Era 5",
    title: "Statistical Learning and Network Revival",
    readings: [
      {
        work: "Rumelhart, Hinton, and Williams, Learning Representations by Back-Propagating Errors",
        year: "1986",
        why: "Reopens serious multi-layer representation learning.",
        href: "https://doi.org/10.1038/323533a0",
        lineage:
          "Reintroduces trainable multi-layer networks and makes representation learning plausible again.",
      },
      {
        work: "Bengio et al., A Neural Probabilistic Language Model",
        year: "2003",
        why: "Connects language modeling to learned distributed representations and sets up the embeddings story.",
        href: "https://www.jmlr.org/papers/v3/bengio03a.html",
        lineage:
          "Builds the bridge from backprop-enabled representation learning to modern neural language modeling.",
      },
      {
        work: "Hinton, Osindero, and Teh, A Fast Learning Algorithm for Deep Belief Nets",
        year: "2006",
        why: "Marks the revival period when deep architectures stop looking historically exhausted.",
        href: "https://doi.org/10.1162/neco.2006.18.7.1527",
        lineage:
          "Helps turn neural networks from a remembered alternative into a renewed research frontier.",
      },
    ] satisfies ReadingEntry[],
  },
  {
    era: "Era 6",
    title: "Deep Learning Breakthroughs",
    readings: [
      {
        work: "Krizhevsky, Sutskever, and Hinton, ImageNet Classification with Deep Convolutional Neural Networks",
        year: "2012",
        why: "Makes deep learning look benchmark-dominant rather than speculative.",
        href: "https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html",
        lineage:
          "Turns deep learning into the leading empirical program and resets expectations for what scale plus data can do.",
      },
      {
        work: "Vaswani et al., Attention Is All You Need",
        year: "2017",
        why: "Provides the decisive transformer turning point.",
        href: "https://arxiv.org/abs/1706.03762",
        lineage:
          "Replaces recurrent sequence modeling with an architecture that scales far better into general-purpose language systems.",
      },
      {
        work: "Radford et al., Language Models are Unsupervised Multitask Learners",
        year: "2019",
        why: "Shows the immediate runway from transformers to general-purpose language-model behavior.",
        href: "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf",
        lineage:
          "Makes the jump from strong language modeling toward broadly reusable pretrained behavior.",
      },
      {
        work: "Jumper et al., Highly Accurate Protein Structure Prediction with AlphaFold",
        year: "2021",
        why: "Shows that the deep-learning era is not only about language and vision but about scientific modeling too.",
        href: "https://www.nature.com/articles/s41586-021-03819-2",
        lineage:
          "Expands the deep-learning story beyond benchmarks into scientific discovery, which broadens the meaning of general AI capability.",
      },
    ] satisfies ReadingEntry[],
  },
  {
    era: "Era 7",
    title: "Foundation Models and Generative AI",
    readings: [
      {
        work: "Brown et al., Language Models are Few-Shot Learners",
        year: "2020",
        why: "Makes scale look like a new interface to capability.",
        href: "https://arxiv.org/abs/2005.14165",
        lineage:
          "Shows that larger pretrained transformers can acquire surprisingly general behavior without task-specific retraining.",
      },
      {
        work: "Bommasani et al., On the Opportunities and Risks of Foundation Models",
        year: "2021",
        why: "Gives the period its strongest early name and scope.",
        href: "https://arxiv.org/abs/2108.07258",
        lineage:
          "Changes the story from one model release to an ecosystem of reusable base systems with shared risks.",
      },
      {
        work: "Ouyang et al., Training Language Models to Follow Instructions with Human Feedback",
        year: "2022",
        why: "Explains the instruction-following path behind public assistants.",
        href: "https://arxiv.org/abs/2203.02155",
        lineage:
          "Connects large pretrained models to the assistant interface ordinary users actually meet.",
      },
      {
        work: "Bai et al., Constitutional AI: Harmlessness from AI Feedback",
        year: "2022",
        why: "Shows that alignment becomes an explicit design layer inside the foundation-model pipeline.",
        href: "https://arxiv.org/abs/2212.08073",
        lineage:
          "Extends the era from capability and interface into governance, safety, and model behavior shaping.",
      },
    ] satisfies ReadingEntry[],
  },
];

const safetyThread = [
  {
    work: "Eliezer Yudkowsky, Artificial Intelligence as a Positive and Negative Factor in Global Risk",
    year: "2008",
    why: "One of the clearest early statements of advanced-AI risk that later Era 7 readers still inherit.",
    href: "https://doi.org/10.1093/oso/9780198570509.003.0021",
    lineage:
      "Moves the story from technical progress alone to the question of what more capable systems might do at civilizational scale.",
  },
  {
    work: "Stephen Omohundro, The Basic AI Drives",
    year: "2008",
    why: "Crystallizes the instrumental-convergence argument behind later paperclip teaching.",
    href: "https://doi.org/10.1201/9781351251389-3",
    lineage:
      "Explains why apparently different advanced systems might converge on similar strategic pressures.",
  },
  {
    work: "Elhage et al., A Mathematical Framework for Transformer Circuits",
    year: "2021",
    why: "Starts a concrete mechanistic-interpretability program for transformer systems.",
    href: "https://transformer-circuits.pub/2021/framework/index.html",
    lineage:
      "Shifts interpretability from general concern toward a concrete reverse-engineering research program.",
  },
  {
    work: "Olsson et al., In-Context Learning and Induction Heads",
    year: "2022",
    why: "Shows that specific transformer mechanisms can be investigated rather than treated as pure black boxes.",
    href: "https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html",
    lineage:
      "Demonstrates that at least some surprising model behaviors can be tied to identifiable circuit-level mechanisms.",
  },
  {
    work: "Anthropic, Towards Monosemanticity",
    year: "2023",
    why: "Pushes the feature-level interpretability program further into the question of whether model representations can become legible.",
    href: "https://transformer-circuits.pub/2023/monosemantic-features/index.html",
    lineage:
      "Extends the circuits line from finding isolated heads to asking whether broader internal features can be named and tracked.",
  },
] satisfies ReadingEntry[];

const eraGuideposts: Record<string, string> = {
  "Era 1":
    "Start here if you want the prehistory that keeps later AI claims disciplined.",
  "Era 2":
    "This cluster is the origin package: computation, information, neurons, and Dartmouth field formation.",
  "Era 3":
    "Read this cluster when you want symbolic AI to feel like a serious technical program rather than a historical caricature.",
  "Era 4":
    "This cluster shows why narrow success and broader disappointment can coexist in the same chapter.",
  "Era 5":
    "This is the methodological bridge: probability, benchmarks, and learned representations change what counts as progress.",
  "Era 6":
    "Use this cluster to see the transformer runway form before foundation models make it public.",
  "Era 7":
    "This cluster is the shortest path from large pretrained models to deployment, alignment, and infrastructure debates.",
};

const minimumRoute = [
  {
    eyebrow: "Era 1",
    work: "Ada Lovelace, Notes on the Analytical Engine",
    description:
      "Keeps the origin story disciplined by separating programmable machinery from stronger claims about intelligence.",
  },
  {
    eyebrow: "Era 2",
    work: "Dartmouth proposal",
    description:
      "Shows where the field is named and where multiple strands become one research agenda.",
  },
  {
    eyebrow: "Era 4",
    work: "James Lighthill, Artificial Intelligence: A General Survey",
    description:
      "Prevents the middle of the chronology from reading like uninterrupted success.",
  },
  {
    eyebrow: "Era 5",
    work: "Rumelhart, Hinton, and Williams, Learning Representations by Back-Propagating Errors",
    description:
      "Marks the methodological turn that reopens learned representation as the field's strongest path.",
  },
  {
    eyebrow: "Era 6",
    work: "Vaswani et al., Attention Is All You Need",
    description:
      "Provides the architecture handoff into large-scale modern language systems.",
  },
  {
    eyebrow: "Era 7",
    work: "Bommasani et al., On the Opportunities and Risks of Foundation Models",
    description:
      "Names the current era as a reusable-system ecosystem rather than a single model release.",
  },
];

const readingPathCards = [
  {
    title: "15-minute chronology",
    description:
      "Read one era cluster at a time if you want the shortest paper-based route from precursors to foundation models.",
    href: "#reading-map-main",
    linkLabel: "Start the main chronology",
  },
  {
    title: "Turning-point scan",
    description:
      "Jump to the hinge documents if you need the decisive moments without committing to every reading entry on the page.",
    href: "#reading-map-turning-points",
    linkLabel: "Go to turning points",
  },
  {
    title: "Follow the safety thread",
    description:
      "Use the companion thread when your question is less about the whole chronology and more about how alignment vocabulary forms.",
    href: "#reading-map-safety",
    linkLabel: "Go to the safety thread",
  },
];

export const metadata: Metadata = {
  title: "Intellectual Lineage Reading Map",
  description:
    "A live reading map that traces AI history through key papers and texts from early precursors to foundation models, plus the safety and interpretability thread.",
};

export default function IntellectualLineageReadingMapPage() {
  return (
    <main className="page-shell exemplar-shell">
      <article className="hero-panel exemplar-panel chapter-theme chapter-theme--papers">
        <ChapterHero
          eyebrow="Companion chapter"
          period="Reading map"
          title="Intellectual Lineage and Key Papers"
          lede="This route turns the repository's paper lineage into a paced companion chapter. It is not a full bibliography. It is a reading map for seeing how one era hands its problems, methods, and vocabulary to the next."
          links={[
            {
              href: "/eras/precursors-to-machine-intelligence",
              label: "Start with Era 1",
            },
            {
              href: "/eras/foundation-models-and-generative-ai",
              label: "Jump to Era 7",
            },
            {
              href: "/guides/embeddings-latent-space-and-llm-math",
              label: "Use the math guide",
            },
          ]}
        >
          <div className="prose-block">
            <p>
              Read straight through if you want the shortest paper-based path
              across the whole site. Dip into a single era cluster if you want
              to understand why one moment changed the next decade rather than
              just which paper arrived first.
            </p>
          </div>
          <EditorialAside
            label="How To Use This"
            title="Read for the handoff from one era to the next"
          >
            <p>
              Each entry keeps one question in view: what did this paper make
              easier, sharper, or more plausible for the era that followed?
            </p>
          </EditorialAside>
        </ChapterHero>

        <GuideCallout
          variant="why-it-matters"
          title="A reading map is for lineage, not for ranking winners"
        >
          <p>
            Each text here matters because it helps explain why the next phase
            of AI looked the way it did, not because it deserves a timeless
            greatest-hits badge.
          </p>
        </GuideCallout>

        <ChapterSection
          id="era-timeline"
          eyebrow="Timeline"
          title="Seven eras at a glance"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/generated/era-timeline.svg"
            alt="Timeline showing the seven eras of AI history from Precursors (pre-1940) through Foundation Models (2017–present)"
            width={1200}
            height={180}
            className="era-timeline-diagram"
            style={{ width: "100%", height: "auto" }}
          />
        </ChapterSection>

        <ChapterSection
          id="reading-paths"
          eyebrow="Reading Paths"
          title="Choose the path that matches the time and focus you have"
        >
          <EditorialSummaryGrid items={readingPathCards} />
        </ChapterSection>

        <ChapterSection
          id="reading-map-minimum-route"
          eyebrow="Shortest Route"
          title="If you only read six items, read these handoff documents"
        >
          <EditorialSummaryGrid
            items={minimumRoute.map((entry) => ({
              eyebrow: entry.eyebrow,
              title: entry.work,
              description: entry.description,
              href: eraRouteByEra[entry.eyebrow],
              linkLabel: "Read the matching era chapter",
            }))}
          />
        </ChapterSection>

        <PullQuote
          quote="The right question for every paper here is not whether it won, but what it made thinkable for the era that followed."
          attribution="Reading principle"
          source="Intellectual Lineage map"
        />

        <ChapterSection
          id="reading-map-main"
          eyebrow="Main Chronology"
          title="Seven eras through their decisive texts"
        >
          <ReadingClusterGrid
            items={chronologyCards.map((card) => ({
              key: card.era,
              id: `reading-map-${card.era.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
              eyebrow: card.era,
              title: card.title,
              description: eraGuideposts[card.era],
              routeHref: eraRouteByEra[card.era],
              imageUrl: eraImageByEra[card.era]?.src,
              imageAlt: eraImageByEra[card.era]?.alt,
              readings: card.readings,
            }))}
          />
        </ChapterSection>

        <ChapterSection
          id="reading-map-turning-points"
          eyebrow="Visual Lineage"
          title="One modern thread through six turning points"
        >
          <FoundationModelTurningPointsDiagram />
        </ChapterSection>

        <GuideCallout
          variant="why-it-matters"
          title="Why the current era still includes an interpretability gap"
        >
          <p>
            Era 7 is unusual because deployment, social consequence, and public
            fluency advanced faster than a full mechanistic account of model
            internals. That is why the reading map needs a parallel thread for
            safety and interpretability rather than treating those debates as an
            afterthought.
          </p>
        </GuideCallout>

        <ChapterSection
          id="reading-map-gap-diagram"
          eyebrow="Visual Summary"
          title="Capability, deployment, and understanding do not move together"
        >
          <InterpretabilityGapDiagram />
        </ChapterSection>

        <TransitionBlock
          eyebrow="Parallel Reading Track"
          title="The safety thread belongs beside the main chronology, not after it"
          description="Public AI becomes harder to teach if capability papers are remembered but risk, alignment, and interpretability work are treated as optional commentary. This thread keeps those arguments visible as part of the same historical arc."
        />

        <PullQuote
          quote="Capability, deployment, and understanding do not move in lockstep, which is why the safety and interpretability thread has to sit inside the same chronology."
          attribution="Parallel thread"
          source="Reading map framing"
        />

        <ChapterSection
          id="reading-map-safety"
          eyebrow="Parallel Thread"
          title="Safety And Interpretability Thread"
        >
          <EditorialCardGrid
            items={safetyThread.map((item) => ({
              key: `${item.year}-${item.work}`,
              title: (
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.work}
                </a>
              ),
              description: item.why,
              meta: item.year,
              footer: (
                <p className="artifact-note">
                  Connects forward: {item.lineage}
                </p>
              ),
            }))}
          />
        </ChapterSection>
      </article>
    </main>
  );
}
