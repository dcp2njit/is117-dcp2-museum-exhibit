import type { Metadata } from "next";

import {
  ChapterHero,
  ChapterSection,
  ChapterVisualBreak,
  EditorialAside,
  TransitionBlock,
} from "@/components/content/chapter";
import { EditorialCardGrid } from "@/components/content/editorial/editorial-card-grid";
import { EditorialSplit } from "@/components/content/editorial/editorial-layout";
import { HistoricalAnchorGrid } from "@/components/content/editorial/narrative-card-grid";
import { EditorialSummaryGrid } from "@/components/content/editorial/editorial-summary-grid";
import { GuideCallout } from "@/components/content/guide-callout";
import { historicalAnchors } from "@/lib/narrative-data";

const precursorMilestones = [
  {
    label: "Logic",
    title: "George Boole formalizes symbolic reasoning",
    detail:
      "Reasoning starts to look like a structure that can be represented and manipulated explicitly.",
  },
  {
    label: "Machinery",
    title: "Charles Babbage makes mechanized calculation concrete",
    detail:
      "Calculation becomes a machine-design problem rather than only a human mental task.",
  },
  {
    label: "Interpretation",
    title: "Ada Lovelace sharpens the question of what machines can do",
    detail:
      "The precursor story begins separating rule-following execution from stronger claims about intelligence.",
  },
];

const lineageCards = [
  {
    title: "Formal logic to computability",
    summary:
      "The symbolic structure introduced in Era 1 becomes much sharper in Era 2, where Turing turns questions about rule-governed procedure into a theory of computation.",
  },
  {
    title: "Mechanized calculation to machine intelligence",
    summary:
      "Babbage and Lovelace do not build AI, but they make it easier to see why later researchers would ask whether symbolic procedure can scale into intelligence claims.",
  },
];

const readingFrameCards = [
  {
    title: "Logic",
    description:
      "Boole formalizes symbolic reasoning into a structure that can be represented and manipulated explicitly.",
  },
  {
    title: "Machinery",
    description:
      "Babbage makes calculation a machine-design problem, turning procedure into something engineerable.",
  },
  {
    title: "Caution",
    description:
      "Lovelace keeps execution and intelligence from collapsing into the same claim too early.",
  },
];

const peopleCards = [
  {
    title: "Ada Lovelace",
    description:
      "She frames the difference between following rules and proving intelligence before AI exists as a field. Her notes on the Analytical Engine establish the conceptual standard the rest of the chronology keeps testing.",
    meta: "Interpretation · feature figure",
    imageUrl: "/media/wikimedia/ada-lovelace.webp",
    imageAlt: "Wikimedia Commons portrait of Ada Lovelace.",
  },
  {
    title: "George Boole",
    description:
      "Boole turns reasoning into symbolic form. That makes later computability legible as an extension rather than a rupture.",
    meta: "Logic · symbolic structure",
    imageUrl: "/media/wikimedia/george-boole.webp",
    imageAlt: "Wikimedia Commons portrait of George Boole.",
  },
  {
    title: "Charles Babbage",
    description:
      "Babbage makes mechanized procedure feel concrete. The precursor era stops being an abstract prologue once there is a machine to point at.",
    meta: "Machinery · engineered object",
    imageUrl: "/media/wikimedia/charles-babbage.webp",
    imageAlt: "Wikimedia Commons portrait of Charles Babbage.",
  },
];

const era1Anchors = historicalAnchors.filter(
  (anchor) => anchor.era === "Era 1"
);

export const metadata: Metadata = {
  title: "Precursors To Machine Intelligence",
  description:
    "Era 1 of the AI history site, covering symbolic logic, mechanized calculation, and the conceptual runway that leads into formal computation.",
};

export default function PrecursorsToMachineIntelligencePage() {
  return (
    <article className="hero-panel exemplar-panel chapter-theme chapter-theme--precursor">
      <ChapterHero
        eyebrow="Era 1"
        period="Before 1936"
        title="Precursors to Machine Intelligence"
        lede="AI does not begin with electronics or Dartmouth. It begins earlier, when logic becomes symbolic, calculation becomes mechanizable, and the difference between execution and intelligence first becomes historically visible."
        featureImage={{
          src: "/media/generated/era-1-precursors.webp",
          alt: "Illustration of the conceptual runway before formal computation: symbolic logic, mechanical engines, and the earliest abstraction of intelligence.",
        }}
        links={[
          {
            href: "/eras/computation-information-field-formation",
            label:
              "Continue to Era 2: Computation, Information, and Field Formation",
          },
        ]}
      />

      <GuideCallout
        variant="why-it-matters"
        title="AI history is weaker when its prehistory disappears"
      >
        <p>
          Students understand Era 2 more clearly when it arrives from an older
          world of symbolic reasoning and machine procedure. Without that
          runway, Turing and Dartmouth look more sudden and more mysterious than
          they really were.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-1-reading-frame"
        eyebrow="Reading Frame"
        title="Three ideas to hold while you read"
      >
        <EditorialSummaryGrid items={readingFrameCards} />
      </ChapterSection>

      <ChapterVisualBreak
        src="/media/generated/era-1-visual-break.webp"
        alt="Close-up of brass gears, cam mechanisms, and engraved mathematical notation from a Difference Engine."
        caption="Symbolic structure, engineered procedure, and the still-open question of what execution means."
      />

      <ChapterSection
        id="era-1-precursors"
        eyebrow="Runway"
        title="Three anchor precursors"
      >
        <EditorialCardGrid
          items={precursorMilestones.map((item) => ({
            title: item.title,
            description: item.detail,
            meta: item.label,
          }))}
        />
      </ChapterSection>

      <ChapterSection
        id="era-1-narrative"
        eyebrow="Core Narrative"
        title="Why this period belongs in the history"
        prose
      >
        <EditorialSplit
          className="chapter-split"
          leftClassName="prose-block"
          left={
            <>
              <p>
                Boole, Babbage, and Lovelace were not doing AI in the modern
                sense. But they established the conceptual runway: symbolic
                logic, mechanized procedure, and a clear separation between
                execution and intelligence that later researchers inherited.
              </p>
              <p>
                Boole gives the story symbolic logic. Babbage gives it
                machinery. Lovelace gives it a disciplined hesitation about what
                procedure and execution do or do not prove. Together they make
                Era 2 readable as a continuation, not a miracle.
              </p>
            </>
          }
          right={
            <EditorialAside
              label="Key Insight"
              title="Lovelace gives the chapter its first conceptual brake"
            >
              <p>
                Her role keeps the site from racing from mechanism to
                intelligence before readers understand how different those
                claims can be.
              </p>
            </EditorialAside>
          }
        />
      </ChapterSection>

      <ChapterSection
        id="era-1-people"
        eyebrow="Key Figures"
        title="Boole, Babbage, and Lovelace"
      >
        <EditorialCardGrid items={peopleCards} />
      </ChapterSection>

      <GuideCallout
        variant="why-it-matters"
        title="Use Era 1 as a runway, then move quickly into Era 2"
      >
        <p>
          This chapter does its job once logic, machinery, and caution are in
          place. The next stop is{" "}
          <a href="/eras/computation-information-field-formation">Era 2</a>,
          where those precursor lines become computability, information theory,
          and a named research agenda. If you want the document trail instead,
          move straight to the{" "}
          <a href="/reading-maps/intellectual-lineage">reading map</a>.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-1-lineage"
        eyebrow="Connections"
        title="How these ideas carry forward"
      >
        <EditorialCardGrid
          items={lineageCards.map((item) => ({
            title: item.title,
            description: item.summary,
          }))}
        />
      </ChapterSection>

      <ChapterSection
        id="era-1-source-anchors"
        eyebrow="Primary Sources"
        title="Key texts and archives"
      >
        <HistoricalAnchorGrid
          anchors={era1Anchors}
          className="source-anchor-grid"
          story="Grounding the precursor era in primary texts and named archives."
          getSubtitle={() => "Era 1 · primary text and source anchor"}
        />
      </ChapterSection>

      <TransitionBlock
        eyebrow="Next Chapter"
        title="The runway narrows into formal computation in Era 2"
        description="Once symbolic reasoning, machinery, and skepticism are established, the next chapter can make computation, information, and field formation feel like the continuation they are."
        href="/eras/computation-information-field-formation"
        linkLabel="Continue to Era 2"
      />
    </article>
  );
}
