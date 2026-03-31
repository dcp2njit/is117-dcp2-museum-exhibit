import type { Metadata } from "next";

import {
  ChapterHero,
  ChapterSection,
  EditorialAside,
  PullQuote,
  TransitionBlock,
} from "@/components/content/chapter";
import {
  HistoricalAnchorGrid,
  NarrativeProfileGrid,
} from "@/components/content/editorial/narrative-card-grid";
import { EditorialSummaryGrid } from "@/components/content/editorial/editorial-summary-grid";
import { cn } from "@/lib/utils";
import { GuideCallout } from "@/components/content/guide-callout";
import {
  historicalAnchors,
  institutionProfiles,
  peopleProfiles,
} from "@/lib/narrative-data";

const castGroups = [
  {
    key: "precursors",
    title: "Precursors and field formation",
    eraHref: "/eras/computation-information-field-formation",
    description:
      "The cast begins before anyone says 'artificial intelligence.' These figures build the mathematical, mechanical, and informational substrate the field inherits.",
    members: peopleProfiles.filter((profile) =>
      ["charles-babbage", "alan-turing"].includes(profile.slug)
    ),
  },
  {
    key: "symbolic",
    title: "The symbolic generation",
    eraHref: "/eras/symbolic-optimism-and-early-ai-programs",
    description:
      "After Dartmouth, these researchers turn AI into a working research program built on symbolic logic, heuristic search, and institutional ambition.",
    members: peopleProfiles.filter((profile) =>
      ["john-mccarthy", "marvin-minsky", "herbert-simon"].includes(profile.slug)
    ),
  },
  {
    key: "knowledge-systems",
    title: "Knowledge systems and critique",
    eraHref: "/eras/knowledge-systems-critique-and-the-first-ai-winter",
    description:
      "Expert systems narrow AI into commercially viable tools, but the pivot also reveals the limits of hand-coded knowledge.",
    members: peopleProfiles.filter((profile) =>
      ["edward-feigenbaum"].includes(profile.slug)
    ),
  },
  {
    key: "revival",
    title: "Statistical revival and neural pioneers",
    eraHref: "/eras/statistical-learning-and-network-revival",
    description:
      "These figures bridge the gap between the symbolic era and the deep learning revolution, proving that learning from data can outperform handcrafted rules.",
    members: peopleProfiles.filter((profile) =>
      [
        "frank-rosenblatt",
        "geoffrey-hinton",
        "yann-lecun",
        "yoshua-bengio",
      ].includes(profile.slug)
    ),
  },
  {
    key: "builders",
    title: "Builders and deployers",
    eraHref: "/eras/foundation-models-and-generative-ai",
    description:
      "These figures make the current era legible as institution-building, scale, and public release strategy rather than pure research abstraction.",
    members: peopleProfiles.filter((profile) =>
      ["ilya-sutskever", "demis-hassabis", "sam-altman"].includes(profile.slug)
    ),
  },
  {
    key: "interpreters",
    title: "Public interpreters of the stack",
    eraHref: "/eras/foundation-models-and-generative-ai",
    description:
      "The modern era is remembered through explanation as well as invention. These figures teach the public how to see the systems they are using.",
    members: peopleProfiles.filter(
      (profile) => profile.slug === "andrej-karpathy"
    ),
  },
  {
    key: "safety",
    title: "Safety and alignment voices",
    eraHref: "/eras/foundation-models-and-generative-ai",
    description:
      "This group keeps the public AI era tied to reliability, existential risk, and the question of what frontier systems should be allowed to become.",
    members: peopleProfiles.filter((profile) =>
      ["dario-amodei", "eliezer-yudkowsky"].includes(profile.slug)
    ),
  },
];

const quickRoutes = [
  {
    title: "Need the shortest cast route?",
    description:
      "Read symbolic generation, then statistical revival, then the modern deployment group. That path gets you from field naming to public AI with the fewest stops.",
    href: "#people-index",
    label: "Start with the cast groups",
  },
  {
    title: "Need the institutions first?",
    description:
      "Jump to Bell Labs, MIT AI Lab, DARPA, and then the modern frontier-model labs if you want the story told through organizations rather than personalities.",
    href: "#institution-index",
    label: "Go to institutions",
  },
  {
    title: "Need the documents to keep you honest?",
    description:
      "Use the anchors when the story starts sounding too smooth. Reports, proposals, and papers keep the chronology tied to named historical objects.",
    href: "#source-anchors",
    label: "Go to source anchors",
  },
];

const useThisPageCards = [
  {
    title: "Meet the cast",
    description:
      "Start with the grouped figures if you need the chronology to feel human before it feels institutional.",
    href: "#people-index",
    linkLabel: "Go to people groups",
  },
  {
    title: "Follow the labs and companies",
    description:
      "Use the institution section when you want the story told through Bell Labs, MIT, DARPA, and the modern frontier-model labs.",
    href: "#institution-index",
    linkLabel: "Go to institutions",
  },
  {
    title: "Check the documents",
    description:
      "Move to the source anchors when you want named reports, papers, and documentary objects to keep the story honest.",
    href: "#source-anchors",
    linkLabel: "Go to source anchors",
  },
];

const earlierInstitutions = institutionProfiles.filter(
  (profile) => profile.era !== "Era 7"
);

const modernInstitutions = institutionProfiles.filter(
  (profile) => profile.era === "Era 7"
);

export const metadata: Metadata = {
  title: "People and Institutions",
  description:
    "A narrative index of the people, institutions, and source anchors that make the AI history site feel grounded and inhabited.",
};

export default function PeopleAndInstitutionsPage() {
  return (
    <main className="page-shell exemplar-shell people-index-shell">
      <article className="hero-panel exemplar-panel chapter-theme chapter-theme--cast people-index-panel">
        <ChapterHero
          eyebrow="Companion chapter"
          period="People & institutions"
          title="Who Carries the Story"
          lede="This page is the site's cast sheet and institutional companion chapter. It treats AI history as something built by named people, labs, companies, critics, and documentary anchors instead of as a blur of anonymous breakthroughs."
          featureImage={{
            src: "/media/generated/people-institutions-hero.webp",
            alt: "Overlapping portrait silhouettes of scientists across decades connected by faint geometric lines, evoking intellectual lineage",
          }}
          links={[
            {
              href: "/eras/foundation-models-and-generative-ai",
              label: "See the current era in context",
            },
            {
              href: "/reading-maps/intellectual-lineage",
              label: "Trace the paper lineage",
            },
            {
              href: "/guides/embeddings-latent-space-and-llm-math",
              label: "Use the math bridge",
            },
          ]}
        >
          <div className="prose-block">
            <p>
              The cast is still concentrated in Era 7, but this page now does
              real historical work. It shows who builds frontier systems, who
              interprets them in public, and which institutions turn research
              into public infrastructure.
            </p>
          </div>
          <EditorialAside
            label="Companion Surface"
            title="Use this page when the chronology starts to feel too abstract"
          >
            <p>
              The era routes carry the main argument. This page helps you see
              the people, institutions, and source anchors that keep those
              chapters grounded in real actors and documents.
            </p>
          </EditorialAside>
        </ChapterHero>

        <GuideCallout
          variant="why-it-matters"
          title="The chronology works better once the cast and documents sit beside it"
        >
          <p>
            Readers rarely remember history as a list of dates alone. They tend
            to remember people, organizations, documents, and turning points.
            This page is where the site starts making that structure explicit.
          </p>
        </GuideCallout>

        <ChapterSection
          id="use-this-page"
          eyebrow="How To Use This Page"
          title="Choose the route that matches the question you have"
        >
          <EditorialSummaryGrid items={useThisPageCards} />
        </ChapterSection>

        <ChapterSection
          id="five-minute-route"
          eyebrow="Five-Minute Route"
          title="If this page feels too wide, use the minimum path"
        >
          <EditorialSummaryGrid
            items={quickRoutes.map((route) => ({
              title: route.title,
              description: route.description,
              href: route.href,
              linkLabel: route.label,
            }))}
          />
        </ChapterSection>

        <PullQuote
          quote="Chronology becomes easier to remember once readers can attach each turn in the story to people, institutions, and documents that keep those abstractions grounded."
          attribution="Companion surface"
          source="People and institutions"
        />

        <ChapterSection
          id="people-index"
          eyebrow="Cast"
          title="Grouped figures, not one flat roster"
        >
          <div className="cast-group-list">
            {castGroups.map((group) => (
              <section
                key={group.key}
                className={cn(
                  "cast-group",
                  `cast-group--${group.key}`,
                  group.members.length === 1 && "cast-group--single"
                )}
              >
                <div className="cast-group__intro">
                  <p className="eyebrow">Cast group</p>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <p className="artifact-note">
                    <a href={group.eraHref}>
                      Read the chapter behind this cast
                    </a>
                  </p>
                </div>
                <div
                  className={cn(
                    "cast-group__cards",
                    group.members.length === 1 && "cast-group__cards--single"
                  )}
                >
                  <NarrativeProfileGrid
                    profiles={group.members}
                    className={cn(
                      group.members.length === 1 && "cast-group__cards--single"
                    )}
                    cardClassName="narrative-card--person"
                  />
                </div>
              </section>
            ))}
          </div>
        </ChapterSection>

        <TransitionBlock
          eyebrow="Institutional Turn"
          title="Deployment becomes history when institutions choose to make systems public"
          description="The modern AI story does not live only in labs or models. It lives in organizations that decide how research becomes interface, infrastructure, and governance language."
        />

        <ChapterSection
          id="era-timeline"
          eyebrow="Timeline"
          title="Where these people and institutions sit across seven eras"
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
          id="institution-index"
          eyebrow="Institutions"
          title="Where the public era becomes organizational"
        >
          <p className="artifact-note">
            Read these in two passes instead of one sweep: first the labs and
            funders that make the field possible, then the frontier-model
            organizations that make the systems public.
          </p>
          <div className="cast-group-list">
            <section className="cast-group">
              <div className="cast-group__intro">
                <p className="eyebrow">Institutional groundwork</p>
                <h3>Before the public AI era</h3>
                <p>
                  Bell Labs, MIT AI Lab, and DARPA explain how the field gets
                  its technical substrate, symbolic confidence, and long-term
                  funding support before modern deployment becomes the story.
                </p>
              </div>
              <NarrativeProfileGrid
                profiles={earlierInstitutions}
                className="documentary-grid--institutions"
                cardClassName="narrative-card--institution"
                getImageFit={(profile) =>
                  profile.slug === "openai" ? "cover" : "contain"
                }
              />
            </section>
            <section className="cast-group cast-group--builders">
              <div className="cast-group__intro">
                <p className="eyebrow">Frontier-model institutions</p>
                <h3>The organizations that make the systems public</h3>
                <p>
                  OpenAI, Google DeepMind, and Anthropic matter because they do
                  not only build models. They decide how capability, scientific
                  ambition, safety language, and public interface get bundled
                  together.
                </p>
              </div>
              <NarrativeProfileGrid
                profiles={modernInstitutions}
                className="documentary-grid--institutions"
                cardClassName="narrative-card--institution"
                getImageFit={(profile) =>
                  profile.slug === "openai" ? "cover" : "contain"
                }
              />
            </section>
          </div>
        </ChapterSection>

        <ChapterSection
          id="source-anchors"
          eyebrow="Historical Source Anchors"
          title="Earlier source anchors kept in view"
        >
          <HistoricalAnchorGrid
            anchors={historicalAnchors}
            className="documentary-grid--anchors"
            story="These cards keep the early chronology tied to named documents and source pages, even when the live route is still text-first."
          />
        </ChapterSection>

        <GuideCallout
          variant="misconception-watch"
          title="Official links are durable; live feeds are optional"
        >
          <p>
            The site now exposes official profiles and social links where they
            are verified and useful. Live X feeds are intentionally not embedded
            yet, because they add moderation, performance, and platform-risk
            overhead that a history site does not need by default.
          </p>
        </GuideCallout>
      </article>
    </main>
  );
}
