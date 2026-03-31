import type { Metadata } from "next";

import {
  ChapterHero,
  ChapterSection,
  ChapterTimeline,
  ChapterVisualBreak,
  EditorialAside,
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
import {
  historicalAnchors,
  institutionProfiles,
  peopleProfiles,
} from "@/lib/narrative-data";

const milestoneItems = [
  {
    year: "2020",
    title: "GPT-3 makes scale look like a new interface to capability",
    detail:
      "Very large transformer language models show strong few-shot behavior, changing expectations about what one pretrained system might do across tasks.",
  },
  {
    year: "2020",
    title: "AlphaFold broadens the era beyond chat",
    detail:
      "Modern AI is also shown as a tool for scientific discovery, not only a public language interface.",
  },
  {
    year: "2022",
    title: "ChatGPT makes foundation-model deployment public",
    detail:
      "Conversational AI becomes a daily experience for ordinary users, bringing education, labor, trust, and governance questions to the front.",
  },
  {
    year: "2023-2024",
    title:
      "Embeddings, retrieval, and multimodal systems become normal infrastructure",
    detail:
      "Modern AI stacks increasingly combine dense vector search, language models, and cross-media inputs rather than treating each piece as a separate novelty.",
  },
  {
    year: "2025-2026",
    title: "Capability debates merge with responsibility debates",
    detail:
      "The current horizon is defined as much by reliability, labor, policy, and institutional choice as by model performance alone.",
  },
];

const peopleCards = [
  {
    name: "Ilya Sutskever",
    summary:
      "Sutskever makes the research lineage from Hinton-era deep learning through Google Brain and OpenAI legible inside the foundation-model story.",
    links: ["transformers", "large language models"],
    imageUrl: "/media/wikimedia/ilya-sutskever.webp",
    imageAlt: "Wikimedia Commons portrait of Ilya Sutskever.",
  },
  {
    name: "Demis Hassabis",
    summary:
      "Hassabis keeps the current era broader than public chat by tying modern AI to DeepMind, AlphaFold, and the pursuit of general systems.",
    links: ["multimodality", "scientific discovery"],
    imageUrl: "/media/wikimedia/demis-hassabis.webp",
    imageAlt: "Wikimedia Commons portrait of Demis Hassabis.",
  },
  {
    name: "Andrej Karpathy",
    summary:
      "Karpathy helps explain the era's public technical culture by linking OpenAI's model work to widely used teaching and explanation around how LLM systems are built.",
    links: ["large language models", "public understanding"],
    imageUrl: "/media/wikimedia/andrej-karpathy.webp",
    imageAlt: "Wikimedia Commons portrait of Andrej Karpathy.",
  },
  {
    name: "Sam Altman",
    summary:
      "Altman makes the deployment era legible by tying frontier-model progress to mass public interfaces, infrastructure expansion, and explicit AGI governance claims.",
    links: ["public deployment", "institutional strategy"],
    imageUrl: "/media/wikimedia/sam-altman.webp",
    imageAlt: "Wikimedia Commons portrait of Sam Altman.",
  },
  {
    name: "Dario Amodei",
    summary:
      "Amodei anchors the safety-first institutional path of Era 7 by linking frontier-model scaling to reliability, interpretability, and responsible-scaling language.",
    links: ["AI safety", "responsible scaling"],
    imageUrl: "/media/wikimedia/dario-amodei.webp",
    imageAlt: "Wikimedia Commons portrait of Dario Amodei.",
  },
  {
    name: "Eliezer Yudkowsky",
    summary:
      "Yudkowsky keeps the current era connected to the pre-LLM alignment tradition that shaped paperclip, instrumental-convergence, and existential-risk arguments.",
    links: ["instrumental convergence", "alignment"],
    imageUrl: "/media/wikimedia/eliezer-yudkowsky.webp",
    imageAlt: "Wikimedia Commons portrait of Eliezer Yudkowsky.",
  },
];

const conceptCards = [
  {
    title: "Foundation models",
    summary:
      "The decisive modern shift is that one pretrained model can support many downstream tasks, products, and interfaces.",
  },
  {
    title: "Large language models",
    summary:
      "LLMs turn transformer scaling into the public face of modern AI, especially once conversational deployment reaches ordinary users.",
  },
  {
    title: "Vector embeddings",
    summary:
      "Dense vectors make semantic similarity and retrieval practical enough to become part of everyday AI infrastructure.",
  },
  {
    title: "Latent space",
    summary:
      "Latent space gives a plain-language way to explain how modern systems organize internal structure without relying on handwritten symbolic rules.",
  },
  {
    title: "Multimodality",
    summary:
      "The current era increasingly links text, images, audio, video, and action rather than treating them as separate AI subfields.",
  },
  {
    title: "Mechanistic interpretability",
    summary:
      "Modern labs can deploy strong LLMs before they can fully reverse engineer the internal circuits producing those behaviors.",
  },
  {
    title: "Instrumental convergence",
    summary:
      "The paperclip-maximizer lineage matters because it argues that many goals can push powerful systems toward similar power-seeking subgoals.",
  },
];

const synthesisCards = [
  {
    title: "What changes here",
    description:
      "One pretrained system stops being a single demonstration and starts acting like reusable infrastructure across many tasks, tools, and interfaces.",
  },
  {
    title: "What does not change",
    description:
      "Fluency is still not the same thing as understanding, and public usefulness still arrives before the field can fully explain every internal mechanism.",
  },
  {
    title: "How to stay oriented",
    description:
      "Read chronology for the public timeline, concepts for the technical stack, and institutions for the governance and deployment choices that make the era historical.",
  },
];

const readingLaneCards = [
  {
    title: "Public deployment",
    description:
      "Start here if your question is how models became part of work, education, search, and everyday public interfaces.",
    href: "#era-7-chronology",
    linkLabel: "Start with chronology",
  },
  {
    title: "Technical stack",
    description:
      "Use this lane if you want embeddings, retrieval, multimodality, and transformers to stay connected as one system story.",
    href: "#era-7-concepts",
    linkLabel: "Go to concepts",
  },
  {
    title: "Safety and governance",
    description:
      "Follow this lane if reliability, institutional posture, and alignment debates are the reason you are on the page.",
    href: "#era-7-institutions",
    linkLabel: "Go to institutions",
  },
];

const institutionCards = [
  {
    title: "OpenAI",
    description:
      "OpenAI helps define Era 7 because it turns large language models into a widely used public interface and makes iterative deployment part of the modern AI story.",
  },
  {
    title: "DeepMind",
    description:
      "DeepMind keeps the current era broader than chat by tying modern AI to AlphaFold, scientific discovery, multimodal work, and the institutional merger that becomes Google DeepMind.",
  },
  {
    title: "Anthropic",
    description:
      "Anthropic gives Era 7 a distinct safety-and-interpretability institution, where reliability, steerability, and responsible scaling are treated as central parts of frontier-model work.",
  },
  {
    title: "Foundation model deployment and public use",
    description:
      "The real turning point is not only stronger models. It is the decision to place them into public workflows, where capability claims immediately collide with questions of trust, education, labor, and governance.",
  },
];

const featuredPeople = peopleProfiles.filter((p) => p.era === "Era 7");
const featuredInstitutions = institutionProfiles.filter(
  (i) => i.era === "Era 7"
);
const era7Anchors = historicalAnchors.filter((a) => a.era === "Era 7");

export const metadata: Metadata = {
  title: "Foundation Models And Generative AI",
  description:
    "Era 7 of the AI history site, covering foundation models, large language models, embeddings, latent space, multimodality, and the public AI period through 2026.",
};

export default function FoundationModelsAndGenerativeAiPage() {
  return (
    <article className="hero-panel exemplar-panel chapter-theme chapter-theme--foundation">
      <ChapterHero
        eyebrow="Era 7"
        period="2020–2026"
        title="Foundation Models and Generative AI"
        lede="The current era begins when transformer-based systems become reusable foundation models, large language models move into public life, and embeddings, multimodality, and deployment debates reshape what AI means in work, education, search, and science."
        featureImage={{
          src: "/media/generated/era-7-foundation-models.webp",
          alt: "Illustration of foundation models, large language models, and the public AI era.",
        }}
        links={[
          {
            href: "/eras/deep-learning-breakthroughs",
            label: "Back to Era 6: Deep Learning Breakthroughs",
          },
          {
            href: "/people-and-institutions",
            label: "Browse people and institutions",
          },
        ]}
      >
        <div className="prose-block">
          <p>
            Architecture, infrastructure, retrieval, multimodality, public
            deployment, and safety all converge on the same surface. The result
            is that capability debates and responsibility debates can no longer
            be separated.
          </p>
        </div>
        <EditorialAside
          label="Synthesis"
          title="This is the first chapter where capability and responsibility debates fully merge"
          tone="contrast"
        >
          <p>
            That merger is what makes Era 7 feel historically different from a
            simple continuation of benchmark progress.
          </p>
        </EditorialAside>
      </ChapterHero>

      <GuideCallout
        variant="why-it-matters"
        title="LLM fluency is not the same thing as settled understanding"
      >
        <p>
          Modern systems can sound authoritative, helpful, and impressively
          general. That does not mean historians or engineers should treat
          fluent output as proof that the underlying problem of machine
          understanding is solved. Era 7 is partly about how public deployment
          made that distinction much harder to ignore.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-7-reading-lanes"
        eyebrow="Reading Lanes"
        title="Choose the lane that matches what you need from the modern era"
      >
        <EditorialSummaryGrid items={readingLaneCards} />
      </ChapterSection>

      <ChapterSection
        id="era-7-chronology"
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

      <ChapterSection
        id="era-7-synthesis"
        eyebrow="Keep These Three Claims"
        title="If the modern stack starts to sprawl, compress it back to three ideas"
      >
        <EditorialSummaryGrid items={synthesisCards} />
      </ChapterSection>

      <ChapterSection
        id="era-7-narrative"
        eyebrow="Core Narrative"
        title="Why modern AI becomes public and infrastructural"
        prose
      >
        <EditorialSplit
          className="chapter-split"
          leftClassName="prose-block"
          left={
            <>
              <p>
                Era 7 is not best understood as a generic victory lap for bigger
                models. The stronger historical claim is that pretrained
                transformer systems become reusable bases for many downstream
                tasks, which turns a research architecture into a platform
                model. That is why the concept of a foundation model matters
                more than a simple list of brand names.
              </p>
              <p>
                Public deployment changes the era just as much as scaling does.
                Once conversational systems, coding tools, retrieval pipelines,
                and multimodal assistants enter ordinary workflows, debates over
                trust, labor, governance, and educational use move from the edge
                of AI history into the center of it. This repository therefore
                teaches the current period through its 2026 horizon, not as an
                unlimited present.
              </p>
            </>
          }
          right={
            <EditorialAside
              label="System View"
              title="Think of Era 7 as one stack, not a list of disconnected novelties"
            >
              <p>
                Transformers make LLMs possible, embeddings support retrieval,
                latent space explains learned internal structure, multimodality
                extends that structure across media, and deployment turns the
                whole system into public infrastructure.
              </p>
            </EditorialAside>
          }
        />
      </ChapterSection>

      <ChapterSection
        id="era-7-people"
        eyebrow="Key Figures"
        title="Who makes the modern turn legible"
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

      <ChapterSection
        id="era-7-documentary-visuals"
        eyebrow="Documentary Visuals"
        title="Portraits and institutions in the public AI era"
      >
        <NarrativeProfileGrid
          profiles={featuredPeople}
          cardClassName="narrative-card--person"
          getSubtitle={(profile) => profile.role}
        />
        <NarrativeProfileGrid
          profiles={featuredInstitutions}
          cardClassName="narrative-card--institution"
          getSubtitle={(profile) => profile.role}
          getImageFit={(profile) =>
            profile.slug === "openai" ? "cover" : "contain"
          }
        />
      </ChapterSection>

      <GuideCallout
        variant="why-it-matters"
        title="Embeddings and latent space are the modern bridge from data to meaning"
      >
        <p>
          In plain language, embeddings let systems turn words, documents,
          images, or other items into dense vectors so similar things can be
          found near each other. Latent space is the teaching idea that names
          this internal representational neighborhood. That is why retrieval and
          semantic similarity matter so much in modern AI stacks. If this is the
          point where the chapter becomes too technical, step into the{" "}
          <a href="/guides/embeddings-latent-space-and-llm-math">
            math bridge guide
          </a>{" "}
          and then come back.
        </p>
      </GuideCallout>

      <GuideCallout
        variant="why-it-matters"
        title="Why researchers still say we do not fully understand how LLMs work"
      >
        <p>
          Modern LLMs are not mysterious in every sense. Researchers know a
          great deal about their training setup, scaling behavior, and many
          regularities in what they can do. But that is not the same as a clean
          mechanistic account of the internal circuits producing each behavior.
          Era 7 therefore includes a real interpretability gap: systems are
          useful and deployable before they are deeply understood.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-7-concepts"
        eyebrow="Core Concepts"
        title="The ideas that define the current horizon"
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
        src="/media/generated/era-7-visual-break.webp"
        alt="Attention matrix heat map visualization with transformer architecture query-key-value arrows floating above."
        caption="Foundation models turn research architecture into public infrastructure."
      />

      <ChapterSection
        id="era-7-institutions"
        eyebrow="Institutions"
        title="Deployment choices become historical facts"
      >
        <EditorialSummaryGrid
          className="institution-grid"
          items={institutionCards}
        />
      </ChapterSection>

      <ChapterSection
        id="era-7-source-anchors"
        eyebrow="Primary Sources"
        title="The architecture paper that made this era possible"
      >
        <HistoricalAnchorGrid
          anchors={era7Anchors}
          className="documentary-grid--anchors"
        />
      </ChapterSection>

      <TransitionBlock
        eyebrow="Chronology Complete"
        title="The current horizon is strongest when read back through the whole sequence"
        description="Era 7 closes the current chronology, but it makes the most sense when readers move back through the cast page, paper lineage, and earlier chapters that prepared the public AI era."
        href="/people-and-institutions"
        linkLabel="Use the cast and institutions page"
      />
    </article>
  );
}
