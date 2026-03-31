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
import { NarrativeProfileGrid } from "@/components/content/editorial/narrative-card-grid";
import { EditorialSummaryGrid } from "@/components/content/editorial/editorial-summary-grid";
import { GuideCallout } from "@/components/content/guide-callout";
import { institutionProfiles, peopleProfiles } from "@/lib/narrative-data";

const era3People = peopleProfiles.filter((p) => p.era === "Era 3");
const era3Institutions = institutionProfiles.filter((i) => i.era === "Era 3");

const milestoneItems = [
  {
    year: "1956",
    title: "Dartmouth becomes an active research agenda",
    detail:
      "The field is no longer just named; researchers begin building programs that treat reasoning as symbol manipulation.",
  },
  {
    year: "1956-1959",
    title: "Logic Theorist and GPS define heuristic problem solving",
    detail:
      "Early AI systems show that search and means-end analysis can be programmed rather than merely theorized.",
  },
  {
    year: "1958-1960",
    title: "LISP gives AI a durable programming language",
    detail:
      "McCarthy's language becomes part of the symbolic era's working research infrastructure.",
  },
  {
    year: "1960-1965",
    title: "Automated reasoning becomes more explicit and powerful",
    detail:
      "Resolution, unification, and related methods deepen the theorem-proving side of symbolic AI.",
  },
  {
    year: "1966-1969",
    title: "Planning and robotics widen the symbolic project",
    detail:
      "Shakey, STRIPS, and related work show that symbolic AI is not only about proving theorems on paper.",
  },
];

const peopleCards = [
  {
    name: "John McCarthy",
    summary:
      "McCarthy carries Dartmouth forward into programming practice and the symbolic research culture that defines the era.",
    links: ["LISP", "symbolic AI", "MIT AI Lab"],
    imageUrl: "/media/wikimedia/john-mccarthy.webp",
    imageAlt: "Wikimedia Commons portrait of John McCarthy.",
  },
  {
    name: "Marvin Minsky",
    summary:
      "Minsky gives the era a lab-centered face, connecting symbolic ambition to robotics and knowledge representation.",
    links: ["MIT AI Lab", "robotics", "symbolic AI"],
    imageUrl: "/media/wikimedia/marvin-minsky.webp",
    imageAlt: "Wikimedia Commons portrait of Marvin Minsky.",
  },
  {
    name: "Allen Newell and Herbert Simon",
    summary:
      "Together they make heuristic problem solving a serious AI method rather than a philosophical slogan.",
    links: ["Logic Theorist", "GPS", "search and heuristics"],
  },
];

const conceptCards = [
  {
    title: "Symbolic AI",
    summary:
      "Intelligence is treated as explicit representation plus rule-guided manipulation of symbols.",
  },
  {
    title: "Search and heuristics",
    summary:
      "Programs narrow huge spaces of possibilities by using practical guidance rather than exhaustive brute force.",
  },
  {
    title: "Theorem proving",
    summary:
      "Formal reasoning becomes one of the era's clearest demonstrations that machines can perform intellectual work.",
  },
  {
    title: "Planning",
    summary:
      "Projects such as STRIPS and Shakey connect symbolic reasoning to action in an environment.",
  },
];

const minimumRouteCards = [
  {
    title: "The success",
    description:
      "Symbolic AI really could search, prove, plan, and make intelligence look programmable enough to justify lab-scale ambition.",
  },
  {
    title: "The limit",
    description:
      "The same methods still looked brittle once the field tried to scale from clean demonstrations to messier worlds and broader claims.",
  },
  {
    title: "The next stop",
    description:
      "Read Era 4 as the pressure test on ambitions that became credible here rather than as a rejection of everything this chapter built.",
  },
];

export const metadata: Metadata = {
  title: "Symbolic Optimism And Early AI Programs",
  description:
    "Era 3 of the AI history site, covering symbolic AI, heuristic search, theorem proving, and early labs after Dartmouth.",
};

export default function SymbolicOptimismAndEarlyAiProgramsPage() {
  return (
    <article className="hero-panel exemplar-panel chapter-theme chapter-theme--symbolic">
      <ChapterHero
        eyebrow="Era 3"
        period="1956–1969"
        title="Symbolic Optimism and Early AI Programs"
        lede="After Dartmouth, AI becomes a working research program. The period is defined by symbolic systems, search, heuristics, theorem proving, early planning, and laboratory cultures that make intelligence look programmable even before the field understands how hard scaling will be."
        featureImage={{
          src: "/media/generated/era-3-symbolic-programs.webp",
          alt: "Illustration of symbolic AI programs and heuristic search in the optimism era.",
        }}
        links={[
          {
            href: "/eras/computation-information-field-formation",
            label:
              "Back to Era 2: Computation, Information, and Field Formation",
          },
          {
            href: "/eras/knowledge-systems-critique-and-the-first-ai-winter",
            label:
              "Continue to Era 4: Knowledge Systems, Critique, and the First AI Winter",
          },
        ]}
      >
        <div className="prose-block">
          <p>
            The symbolic era is often reduced to a punchline, but it was the
            field&apos;s first serious attempt to operationalize reasoning at
            laboratory scale.
          </p>
        </div>
        <EditorialAside
          label="Lab Mood"
          title="This is the chapter where AI starts to feel buildable"
        >
          <p>
            Programs, languages, heuristics, and robotics make intelligence look
            programmable enough to justify large institutional ambition.
          </p>
        </EditorialAside>
      </ChapterHero>

      <GuideCallout
        variant="why-it-matters"
        title="Symbolic AI was a real technical program, not a historical punchline"
      >
        <p>
          It is easy to look backward and treat the symbolic era as naive. That
          misses the point. Researchers in this period built concrete methods
          for search, reasoning, planning, and programming that still shape
          later AI and computer science.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-3-minimum-route"
        eyebrow="Shortest Route"
        title="One success and one limit define the era"
      >
        <EditorialSummaryGrid items={minimumRouteCards} />
      </ChapterSection>

      <ChapterSection
        id="era-3-chronology"
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
        quote="In Era 3, intelligence looks programmable because reasoning can be written as search over symbolic structure, explicit rules, and formal procedures."
        attribution="Era 3 framing"
      />

      <ChapterSection
        id="era-3-narrative"
        eyebrow="Core Narrative"
        title="The field after Dartmouth"
        prose
      >
        <EditorialSplit
          className="chapter-split"
          leftClassName="prose-block"
          left={
            <>
              <p>
                Logic Theorist and GPS made symbolic problem solving look
                programmable. Search and heuristics gave the period a way to act
                intelligently without examining every possible move.
              </p>
              <p>
                The era broadened quickly. LISP made AI easier to build, theorem
                proving deepened the formal side of the field, and planning plus
                robotics showed that symbolic systems could connect internal
                representations to action. Symbolic AI did enough real work that
                its limitations only became visible once its ambitions widened.
              </p>
            </>
          }
          right={
            <EditorialAside
              label="What They Thought Intelligence Was"
              title="Explicit representation plus symbolic manipulation"
            >
              <p>
                Symbolic AI treated intelligence as rule-based manipulation of
                structured representations — a premise that later eras would
                challenge directly.
              </p>
            </EditorialAside>
          }
        />
      </ChapterSection>

      <ChapterSection
        id="era-3-people"
        eyebrow="Key Figures"
        title="Who carries the symbolic era"
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
        variant="misconception-watch"
        title="Early AI was not only theorem proving"
      >
        <p>
          Theorem proving is the cleanest classroom example, but the era also
          includes planning, robotics, languages, and heuristic search. If the
          story stays only in logic puzzles, students miss why the period felt
          so expansive.
        </p>
      </GuideCallout>

      <ChapterSection
        id="era-3-concepts"
        eyebrow="Core Concepts"
        title="The ideas behind the optimism"
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
        src="/media/generated/era-3-visual-break.webp"
        alt="Chalkboard covered in formal logic notation, decision trees, and flowchart diagrams with chalk dust visible."
        caption="Logic Theorist, LISP, and laboratory ambition define the symbolic era."
      />

      <ChapterSection
        id="era-3-institutions"
        eyebrow="Institutions And Pressure"
        title="Labs and funding shape the research style"
      >
        <EditorialCardGrid
          className="institution-grid"
          items={[
            {
              title: "MIT Artificial Intelligence Laboratory",
              description:
                "MIT gives the symbolic era a visible home where programming, robotics, and ambitious views of machine intelligence reinforce one another.",
            },
            {
              title: "DARPA",
              description:
                "DARPA helps make large early AI projects possible, which matters because the era's optimism is not only intellectual. It is also institutional and strategic.",
            },
          ]}
        />
      </ChapterSection>

      <ChapterSection
        id="era-3-documentary-profiles"
        eyebrow="Profiles"
        title="Portraits of the symbolic era"
      >
        <NarrativeProfileGrid
          profiles={era3People}
          cardClassName="narrative-card--person"
        />
        <NarrativeProfileGrid
          profiles={era3Institutions}
          className="documentary-grid--institutions"
          cardClassName="narrative-card--institution"
        />
      </ChapterSection>

      <TransitionBlock
        eyebrow="Next Chapter"
        title="Symbolic confidence creates the disappointment that follows"
        description="The winter chapter only makes sense if the optimism chapter feels real first. Era 4 inherits the ambitions, institutions, and expectations built here."
        href="/eras/knowledge-systems-critique-and-the-first-ai-winter"
        linkLabel="Continue to Era 4"
      />
    </article>
  );
}
