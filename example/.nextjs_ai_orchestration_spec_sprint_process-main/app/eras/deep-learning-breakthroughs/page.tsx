import type { Metadata } from "next";

import {
  ChapterHero,
  ChapterSection,
  ChapterTimeline,
  ChapterVisualBreak,
  EditorialAside,
  PullQuote,
  TransitionBlock,
} from "@/components/content/chapter";
import { EditorialCardGrid } from "@/components/content/editorial/editorial-card-grid";
import { EditorialSplit } from "@/components/content/editorial/editorial-layout";
import {
  HistoricalAnchorGrid,
  NarrativeProfileGrid,
} from "@/components/content/editorial/narrative-card-grid";
import { EditorialSummaryGrid } from "@/components/content/editorial/editorial-summary-grid";
import { GuideCallout } from "@/components/content/guide-callout";
import { historicalAnchors, peopleProfiles } from "@/lib/narrative-data";

const era6People = peopleProfiles.filter((p) => p.era === "Era 6");
const era6Anchors = historicalAnchors.filter((a) => a.era === "Era 6");

const milestoneItems = [
  {
    year: "2012",
    title: "Deep networks transform benchmark expectations",
    detail:
      "Image-recognition breakthroughs make deep learning look like the field's strongest performance story rather than a niche approach.",
  },
  {
    year: "2012-2015",
    title: "Speech and vision systems improve at scale",
    detail:
      "Large datasets, GPUs, and layered models produce gains that reshape research and product priorities.",
  },
  {
    year: "2015",
    title: "Deep learning is consolidated as a field-defining frame",
    detail:
      "The LeCun-Bengio-Hinton review gives the era a durable language of multiple learned levels of abstraction.",
  },
  {
    year: "2017",
    title: "Attention Is All You Need introduces the transformer",
    detail:
      "Sequence modeling is reorganized around attention and parallelizable training rather than older recurrent defaults.",
  },
  {
    year: "2018-2019",
    title: "Transformers become the runway to foundation models",
    detail:
      "Language and representation work start pointing directly toward the next era of large-scale generative systems.",
  },
];

const peopleCards = [
  {
    name: "Geoffrey Hinton",
    summary:
      "Hinton remains central because the deep-learning era depends on work that kept multi-layer neural learning alive long enough to scale.",
    links: ["deep learning", "network revival"],
    imageUrl: "/media/wikimedia/geoffrey-hinton.webp",
    imageAlt: "Wikimedia Commons portrait of Geoffrey Hinton.",
  },
  {
    name: "Yann LeCun",
    summary:
      "LeCun represents the era through concrete vision and representation-learning gains rather than only abstract architectural talk.",
    links: ["representation learning", "vision systems"],
    imageUrl: "/media/wikimedia/yann-lecun.webp",
    imageAlt: "Wikimedia Commons portrait of Yann LeCun.",
  },
  {
    name: "Yoshua Bengio",
    summary:
      "Bengio gives the era its clearest conceptual language for deep models that learn multiple useful levels of abstraction.",
    links: ["representation learning", "deep architectures"],
    imageUrl: "/media/wikimedia/yoshua-bengio.webp",
    imageAlt: "Wikimedia Commons portrait of Yoshua Bengio.",
  },
];

const conceptCards = [
  {
    title: "Representation learning",
    summary:
      "Models increasingly learn useful features for themselves rather than depending on people to hand-engineer every important input.",
  },
  {
    title: "Deep learning",
    summary:
      "The decisive change is layered learning at scale, not merely the existence of neural networks in the abstract.",
  },
  {
    title: "Transformers",
    summary:
      "Attention-centered architectures make sequence modeling more parallel, more scalable, and historically decisive for the next era.",
  },
  {
    title: "Scale",
    summary:
      "Data, compute, and training regimes become part of the explanation for why the era's models outperform earlier alternatives.",
  },
];

const minimumRouteCards = [
  {
    title: "Deep models start winning broadly",
    description:
      "Performance gains in vision, speech, and language make deep learning the field&apos;s main empirical regime rather than one promising option among several.",
  },
  {
    title: "Scale becomes explanatory",
    description:
      "Data, compute, and training practice are no longer background details. They help explain why the systems work.",
  },
  {
    title: "Transformers make the next era immediate",
    description:
      "Attention-centered architecture turns the chapter from a breakthrough story into a direct runway for foundation models.",
  },
];

const beforeAfterCards = [
  {
    title: "Era 5: plausible methods",
    description:
      "Statistical learning and revived networks matter because they reopen the path, but they do not yet dominate the field.",
  },
  {
    title: "Era 6: dominant regime",
    description:
      "Deep learning becomes the main performance story once scale, representation learning, and transformers move from promising to decisive.",
  },
];

export const metadata: Metadata = {
  title: "Deep Learning Breakthroughs",
  description:
    "Era 6 of the AI history site, covering representation learning, deep learning, the transformer shift, and the runway into foundation models.",
};

export default function DeepLearningBreakthroughsPage() {
  return (
    <article className="hero-panel exemplar-panel chapter-theme chapter-theme--breakthrough">
      <ChapterHero
        eyebrow="Era 6"
        period="2012–2019"
        title="Deep Learning Breakthroughs"
        lede="Deep learning becomes the field's dominant performance regime in this era. Learned multi-layer representations, large-scale training, and finally transformers reshape what AI systems can do in vision, speech, and language."
        featureImage={{
          src: "/media/generated/era-6-deep-learning.webp",
          alt: "Illustration of deep learning breakthroughs, representation learning, and the transformer shift.",
        }}
        links={[
          {
            href: "/eras/statistical-learning-and-network-revival",
            label: "Back to Era 5: Statistical Learning and Network Revival",
          },
          {
            href: "/eras/foundation-models-and-generative-ai",
            label: "Continue to Era 7: Foundation Models and Generative AI",
          },
        ]}
      >
        <div className="prose-block">
          <p>
            What changes here is not only that neural networks return, but that
            layered systems, data, hardware, and training practice begin to move
            together as one dominant performance story.
          </p>
        </div>
        <EditorialAside
          label="Acceleration"
          title="Scale and representation become part of the explanation, not just the outcome"
        >
          <p>
            That shift is what makes the transformer runway historically
            decisive rather than technically incidental.
          </p>
        </EditorialAside>
      </ChapterHero>

      <GuideCallout
        variant="why-it-matters"
        title="Deep learning is not just neural networks again"
      >
        <p>
          Neural networks already existed before this era. What changes here is
          that layered models, larger datasets, better hardware, and improved
          training make learned representations powerful enough to dominate the
          field&apos;s benchmark and product expectations.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-6-before-after"
        eyebrow="Before And After"
        title="What changes between Era 5 and Era 6"
      >
        <EditorialSummaryGrid items={beforeAfterCards} />
      </ChapterSection>

      <ChapterSection
        id="era-6-minimum-route"
        eyebrow="Shortest Route"
        title="If you only need the handoff to Era 7, keep these three moves"
      >
        <EditorialSummaryGrid items={minimumRouteCards} />
      </ChapterSection>

      <ChapterSection
        id="era-6-chronology"
        eyebrow="Chronology"
        title="Five anchor points"
      >
        <ChapterTimeline
          items={milestoneItems.map((item) => ({
            key: `${item.year}-${item.title}`,
            eyebrow: item.year,
            title: item.title,
            description: item.detail,
          }))}
        />
      </ChapterSection>

      <PullQuote
        quote="Transformers matter because they turn scale from a performance tactic into an architectural principle that can carry the field directly into foundation models."
        attribution="Era 6 framing"
      />

      <ChapterSection
        id="era-6-narrative"
        eyebrow="Core Narrative"
        title="Why scale and representation matter here"
        prose
      >
        <EditorialSplit
          className="chapter-split"
          leftClassName="prose-block"
          left={
            <>
              <p>
                Deep learning is not simple hype around larger models. The
                stronger historical claim is that deep systems increasingly
                learn intermediate structure for themselves and do so well
                enough to change the research agenda. Vision, speech, and
                language systems all benefit from the same general logic:
                large-scale layered models can discover useful representations
                from data rather than depending entirely on handcrafted
                features.
              </p>
              <p>
                The transformer is the era&apos;s decisive late turn. Attention
                Is All You Need showed that sequence models do not have to
                inherit older recurrent assumptions. Once attention-centered
                architectures proved stronger and more parallelizable, the field
                had the immediate architectural runway for foundation models and
                large language models.
              </p>
            </>
          }
          right={
            <EditorialAside
              label="Runway"
              title="Transformers reorganize what scale can do"
            >
              <p>
                The handoff into Era 7 is immediate, not a separate product
                story detached from research.
              </p>
            </EditorialAside>
          }
        />
      </ChapterSection>

      <ChapterSection
        id="era-6-people"
        eyebrow="Key Figures"
        title="Who makes the breakthrough legible"
      >
        <EditorialCardGrid
          items={peopleCards.map((person) => ({
            title: person.name,
            description: person.summary,
            meta: `Linked ideas: ${person.links.join("; ")}`,
            imageUrl: person.imageUrl,
            imageAlt: person.imageAlt,
          }))}
        />
      </ChapterSection>

      <GuideCallout
        variant="why-it-matters"
        title="Follow the transformer handoff through the paper trail"
      >
        <p>
          The transformer shift is the clearest direct bridge into the next era,
          but you do not need to hold every repetition in your head here. If you
          want the cleanest documentary handoff, jump from this chapter to{" "}
          <a href="/reading-maps/intellectual-lineage#reading-map-main">
            the reading map&apos;s Era 6 cluster
          </a>{" "}
          or use the{" "}
          <a href="/guides/embeddings-latent-space-and-llm-math">math guide</a>{" "}
          for the embeddings and representation layer.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-6-concepts"
        eyebrow="Core Concepts"
        title="The ideas that define the breakthrough"
      >
        <EditorialCardGrid
          dense
          items={conceptCards.map((concept) => ({
            title: concept.title,
            description: concept.summary,
          }))}
        />
      </ChapterSection>

      <ChapterVisualBreak
        src="/media/generated/era-6-visual-break.webp"
        alt="GPU server racks with green indicator lights layered with convolutional neural network feature map visualizations."
        caption="Scale, learned representations, and transformers turn deep learning into the dominant AI regime."
      />

      <ChapterSection
        id="era-6-institutions"
        eyebrow="Institutions"
        title="Industrial labs and the transformer inflection"
      >
        <EditorialCardGrid
          className="institution-grid"
          items={[
            {
              title: "Google Brain",
              description:
                "Google Brain represents the era's large-scale research setting, where attention, compute, and deployment ambitions start to move together.",
            },
            {
              title: "Attention Is All You Need",
              description:
                "The 2017 transformer paper marks the historical pivot where attention-centered architecture becomes the clearest direct runway into foundation models and large language models.",
            },
          ]}
        />
      </ChapterSection>

      <ChapterSection
        id="era-6-documentary-profiles"
        eyebrow="Profiles"
        title="Portraits and source anchors for the deep learning era"
      >
        <NarrativeProfileGrid
          profiles={era6People}
          cardClassName="narrative-card--person"
        />
        <HistoricalAnchorGrid
          anchors={era6Anchors}
          className="documentary-grid--anchors"
        />
      </ChapterSection>

      <TransitionBlock
        eyebrow="Next Chapter"
        title="The transformer handoff becomes the public AI era"
        description="Era 7 inherits the architecture, scaling logic, and representation story of this chapter, then turns them into foundation models, assistants, multimodality, and governance debates."
        href="/eras/foundation-models-and-generative-ai"
        linkLabel="Continue to Era 7"
      />
    </article>
  );
}
