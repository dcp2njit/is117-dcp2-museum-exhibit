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
import { GuideCallout } from "@/components/content/guide-callout";
import { LogicToAiDiagram } from "@/components/content/visualizations/logic-to-ai-diagram";
import { historicalAnchors, peopleProfiles } from "@/lib/narrative-data";

const era2People = peopleProfiles.filter((p) => p.era === "Era 2");
const era2Anchors = historicalAnchors.filter((a) => a.era === "Era 2");

const milestoneItems = [
  {
    year: "1936",
    title: "Turing defines computability",
    detail:
      "The era begins with a rigorous account of what a machine can compute in principle.",
  },
  {
    year: "1938",
    title: "Shannon links logic to switching circuits",
    detail:
      "Logic starts to matter as machinery, not just as abstraction on paper.",
  },
  {
    year: "1943",
    title: "McCulloch and Pitts model threshold neurons",
    detail:
      "Neuron-inspired abstraction becomes part of the computational story.",
  },
  {
    year: "1948",
    title: "Information theory reshapes the technical vocabulary",
    detail:
      "Shannon gives the period a formal language for communication and signals.",
  },
  {
    year: "1955-1956",
    title: "Dartmouth names and consolidates the field",
    detail:
      "The era closes when a longer runway of ideas becomes a named research agenda.",
  },
];

const peopleCards = [
  {
    name: "Alan Turing",
    summary:
      "Turing gives the slice its strongest answer to what a machine can compute and later presses the question of machine intelligence directly.",
    links: ["Computability", "Machine intelligence as research agenda"],
    imageUrl: "/media/wikimedia/alan-turing.webp",
    imageAlt: "Wikimedia Commons portrait of Alan Turing.",
  },
  {
    name: "Claude Shannon",
    summary:
      "Shannon ties logic to circuitry, formalizes information, and helps make the Dartmouth moment legible as engineering as well as theory.",
    links: ["Information theory", "Bell Labs"],
    imageUrl: "/media/wikimedia/claude-shannon.webp",
    imageAlt: "Wikimedia Commons portrait of Claude Shannon.",
  },
  {
    name: "Warren McCulloch and Walter Pitts",
    summary:
      "Together they bring neuron-inspired abstraction into the era's story and keep the origin package from becoming purely symbolic.",
    links: ["Threshold-neuron model", "Cybernetics"],
  },
  {
    name: "John McCarthy",
    summary:
      "McCarthy stands at the field-formation end of the slice, where a scattered prehistory becomes a named research program.",
    links: ["Machine intelligence as research agenda", "Dartmouth"],
    imageUrl: "/media/wikimedia/john-mccarthy.webp",
    imageAlt: "Wikimedia Commons portrait of John McCarthy.",
  },
];

const conceptCards = [
  {
    title: "Computability",
    summary:
      "A machine needs a precise procedure before anyone can seriously ask whether it can think.",
  },
  {
    title: "Information theory",
    summary:
      "Communication becomes measurable and technically organized, shaping the surrounding engineering culture of AI.",
  },
  {
    title: "Threshold-neuron model",
    summary:
      "Simple neuron-like units make it possible to talk about logical behavior in networks.",
  },
  {
    title: "Cybernetics",
    summary:
      "Control, feedback, and system behavior keep the slice broader than a single symbolic tradition.",
  },
  {
    title: "Machine intelligence as research agenda",
    summary:
      "The period ends when questions about intelligent machinery become organized as a field, not just isolated speculation.",
  },
];

const storyCards = [
  {
    title: "Turing makes Dartmouth possible without causing it alone",
    summary:
      "Computability defines what a machine can do in principle, but that does not yet name AI as a field. Dartmouth becomes legible because Turing has already made procedure rigorous.",
    path: "docs/content/media/records/turing-to-dartmouth-story-card.md",
  },
  {
    title: "Shannon keeps the origin story inside engineering as well as logic",
    summary:
      "Bell Labs is part of the frame. Logic becomes circuitry, information becomes measurable, and the eventual AI field inherits a technical culture shaped by communication engineering as much as by philosophy.",
    path: "docs/content/media/records/shannon-bell-labs-story-card.md",
  },
];

export const metadata: Metadata = {
  title: "Computation, Information, And Field Formation",
  description:
    "Era 2 of the AI history site, covering computability, information theory, neural abstraction, and the Dartmouth field-formation moment.",
};

export default function ComputationInformationFieldFormationPage() {
  return (
    <article className="hero-panel exemplar-panel chapter-theme chapter-theme--formation">
      <ChapterHero
        eyebrow="Era 2"
        period="1936–1956"
        title="Computation, Information, and Field Formation"
        lede="Modern AI became thinkable before Dartmouth named the field. Turing, Shannon, McCulloch, Pitts, and McCarthy matter here because they connect formal computation, information theory, neural abstraction, and field formation into one teachable sequence."
        featureImage={{
          src: "/media/generated/era-2-field-formation.webp",
          alt: "Illustration of computation, information theory, and field formation converging toward Dartmouth.",
        }}
        links={[
          {
            href: "/eras/precursors-to-machine-intelligence",
            label: "Back to Era 1: Precursors to Machine Intelligence",
          },
          {
            href: "/eras/symbolic-optimism-and-early-ai-programs",
            label: "Continue to Era 3: Symbolic Optimism and Early AI Programs",
          },
        ]}
      >
        <div className="prose-block">
          <p>
            Turing, Shannon, McCulloch, Pitts, and Dartmouth each contribute a
            distinct strand to the origin of AI. The field did not emerge from a
            single breakthrough but from the convergence of computation,
            engineering, neural abstraction, and institutional organization.
          </p>
        </div>
        <EditorialAside
          label="Convergence"
          title="Dartmouth is the naming moment, not the whole origin story"
        >
          <p>
            The chapter becomes stronger when each precursor line keeps its own
            role instead of being compressed into a single heroic origin.
          </p>
        </EditorialAside>
      </ChapterHero>

      <GuideCallout
        variant="why-it-matters"
        title="This origin story is about convergence, not a single invention"
      >
        <p>
          Dartmouth did not appear from nowhere. The naming moment only makes
          sense as the end of a buildup in computation, engineering,
          information, and neural abstraction.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-2-convergence-map"
        eyebrow="Orientation"
        title="Four strands become one field"
      >
        <EditorialCardGrid
          dense
          items={[
            {
              title: "Computability",
              description:
                "Turing defines what a machine can do in principle and gives the chapter its formal backbone.",
            },
            {
              title: "Engineering",
              description:
                "Shannon and Bell Labs keep the origin story inside circuitry, signals, and communication infrastructure.",
            },
            {
              title: "Neural abstraction",
              description:
                "McCulloch and Pitts keep the slice broader than one symbolic line by linking logic to simple neuron-like units.",
            },
            {
              title: "Field formation",
              description:
                "Dartmouth names the field only after the other strands make that naming moment historically possible.",
            },
          ]}
        />
      </ChapterSection>

      <ChapterSection
        id="era-2-chronology"
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
        id="era-2-narrative"
        eyebrow="Core Narrative"
        title="Why convergence matters more than any single strand"
        prose
      >
        <EditorialSplit
          className="chapter-split"
          leftClassName="prose-block"
          left={
            <>
              <p>
                The period begins with Turing because computation had to be made
                rigorous before anyone could seriously ask whether machines
                might think. Shannon then shifts the ground by making logic
                matter in electrical machinery and by formalizing information
                itself.
              </p>
              <p>
                McCulloch and Pitts prevent the origin story from becoming
                purely symbolic by showing how neuron-inspired units can be
                modeled computationally. By the mid-1950s, the era has four
                distinct threads to follow: a Turing paper, Bell Labs
                engineering work, neuron-style abstraction, and the Dartmouth
                proposal itself.
              </p>
            </>
          }
          right={
            <EditorialAside
              label="Convergence Logic"
              title="Each strand does a different job in the origin package"
            >
              <p>
                Computation defines procedure, Shannon adds engineering and
                information, McCulloch-Pitts broaden the origin beyond pure
                symbolism, and Dartmouth is the institutional moment where those
                strands converge under a single name.
              </p>
            </EditorialAside>
          }
        />
      </ChapterSection>

      <ChapterSection
        id="era-2-visual"
        eyebrow="Visual Convergence"
        title="Why Dartmouth is a meeting point, not a lone origin"
      >
        <LogicToAiDiagram />
      </ChapterSection>

      <ChapterSection
        id="era-2-story-layer"
        eyebrow="Convergence Stories"
        title="Two paths to field formation"
      >
        <EditorialCardGrid
          items={storyCards.map((card) => ({
            title: card.title,
            description: card.summary,
          }))}
        />
      </ChapterSection>

      <ChapterVisualBreak
        src="/media/generated/era-2-visual-break.webp"
        alt="Vacuum tubes, relay switches, and paper tape from an early mainframe computer with faint circuit diagrams."
        caption="Computation, information, neural abstraction, and Dartmouth converge into a formally named field."
      />

      <ChapterSection
        id="era-2-source-anchors"
        eyebrow="Primary Sources"
        title="Key documents and archives"
      >
        <HistoricalAnchorGrid
          anchors={era2Anchors}
          className="documentary-grid--anchors"
          story="Linking the convergence story to primary sources and institutional records."
          getSubtitle={() => "Era 2 · source anchor"}
        />
      </ChapterSection>

      <ChapterSection
        id="era-2-people"
        eyebrow="Key Figures"
        title="Who carries the convergence story"
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
        title={'Turing belongs in AI history before anyone says "AI"'}
      >
        <p>
          Computability matters here because the field later inherits a basic
          question from Turing: what kinds of processes can be made precise
          enough for machinery to carry out at all? That is part of the runway
          to AI, even before the field has its name.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-2-concepts"
        eyebrow="Core Concepts"
        title="The technical ideas behind field formation"
      >
        <EditorialCardGrid
          dense
          items={conceptCards.map((concept) => ({
            title: concept.title,
            description: concept.summary,
          }))}
        />
      </ChapterSection>

      <ChapterSection
        id="era-2-turning-point"
        eyebrow="Institutions And Turning Point"
        title="Bell Labs and Dartmouth do different jobs"
      >
        <EditorialCardGrid
          className="institution-grid"
          items={[
            {
              title: "Bell Labs",
              description:
                "Bell Labs gives the era an institutional setting for Shannon's engineering work, which helps explain why logic and information are not just philosophical ideas in this story.",
            },
            {
              title:
                "Dartmouth Summer Research Project on Artificial Intelligence",
              description:
                "Dartmouth closes Era 2 by naming and consolidating a field that the earlier decades had already made possible.",
            },
          ]}
        />
      </ChapterSection>

      <ChapterSection
        id="era-2-documentary-profiles"
        eyebrow="Profiles"
        title="Portraits of the field-formation era"
      >
        <NarrativeProfileGrid
          profiles={era2People}
          cardClassName="narrative-card--person"
        />
      </ChapterSection>

      <TransitionBlock
        eyebrow="Next Chapter"
        title="Field formation leads directly into symbolic confidence"
        description="Once the field has a name and a technical identity, the next chapter can show what happens when symbolic reasoning, search, and programming become active research programs."
        href="/eras/symbolic-optimism-and-early-ai-programs"
        linkLabel="Continue to Era 3"
      />
    </article>
  );
}
