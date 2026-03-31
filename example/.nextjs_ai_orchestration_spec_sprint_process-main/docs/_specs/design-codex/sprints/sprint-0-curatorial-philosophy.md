# Sprint 0 — Curatorial Philosophy Document

## Header

- Goal: audit the existing site and write a student-facing document that
  explains why the site looks the way it does, how curatorial intent shapes the
  design, and how students should think about their own projects.
- Spec sections:
  - Problem Statement
  - Design Goals 1, 2, 4, 5, 7
  - Architecture: Required Durable Documents, Site Design Philosophy,
    Extraction Model, Site Patterns That Must Be Documented, Adaptation Rules
  - Security: No Copying Guidance, Repository Accuracy
  - Testing Strategy: Artifact Accuracy, Concept Coverage, Consistency Review
- Prerequisite: none
- Expected test count: `0 existing + 0 new = 0 total`

## Available Assets

| Asset                                     | Verified details                                                                                                            | How this sprint uses it                                                                              |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `app/` routes                             | Era pages, reading map, people-and-institutions, and math guide all use a chapter-style editorial page structure            | Grounds the explanation of the site as an exhibition sequence rather than a generic multipage app    |
| `components/content/chapter/`             | Contains `ChapterHero`, `ChapterSection`, `ChapterVisualBreak`, `EditorialAside`, `TransitionBlock`, and related primitives | Supports explanation of recurring narrative surfaces and why they create coherence                   |
| `app/globals.css`                         | Contains warm surface tokens, chapter accent themes, phi spacing tokens, hero/layout classes, and editorial grids           | Provides evidence for claims about visual hierarchy, spacing discipline, and atmospheric consistency |
| `lib/site-navigation.ts`                  | Encodes main navigation, home section navigation, and per-page section navigation                                           | Supports the explanation of site structure as guided reading rather than flat browsing               |
| `lib/narrative-data.ts`                   | Centralizes people, institutions, and historical anchors                                                                    | Supports the explanation of the site’s curatorial emphasis on actors and evidence                    |
| existing workstreams under `docs/_specs/` | Show how the site was actually evolved through specs and sprints                                                            | Lets the philosophy document connect visual quality to process discipline                            |

## Tasks

### 1. Audit the site as an editorial object

Study the repository and identify the repeatable curatorial logic of the site.

Required topics to extract:

- the museum / exhibition framing
- why the chronology is broken into eras rather than one long article
- why companion pages exist and what role they play
- how type, color, rhythm, and spacing support seriousness and readability
- how images behave as evidence, atmosphere, and explanatory bridges
- why the site balances narrative, cards, diagrams, and source anchors

Key implementation details:

- The document must describe real repository patterns, not abstract design
  advice.
- The tone must be instructional and rigorous, not promotional.
- The explanation must help a student understand that this is a curated
  argument, not merely a pretty layout.

Verify:

```bash
npm run format:check
```

### 2. Write `docs/foundation/site-design-philosophy.md`

Create the durable student-facing document.

Required sections:

- what the site is trying to feel like
- why it uses a museum/editorial visual language
- what gives the layout its sense of order
- how the curator thinks about pages, chapters, evidence, and actors
- what students should carry into their own projects
- what students should not copy directly

Required outcomes:

- students can explain why the site feels coherent
- students can identify the difference between metaphor and decoration
- students are encouraged to derive their own concept rather than repeat this
  one verbatim

Verify:

```bash
npm run format:check
```

### 3. Connect design quality to process quality

Make the philosophy document explicit that the site’s coherence is not only a
visual matter. It comes from scope control, repeated component patterns,
verification, and spec-driven evolution.

Required outcomes:

- explain that strong design here is the result of disciplined iteration
- connect the visual system to the repository’s spec/sprint process without
  turning the document into a process manual
- prepare students to see design and engineering as linked practices

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [x] the site has been audited as a coherent editorial system
- [x] `docs/foundation/site-design-philosophy.md` exists
- [x] the document explains why the site looks the way it does
- [x] the document explains curatorial intent clearly
- [x] the document helps students think about their own projects
- [x] the document discourages superficial copying
- [x] `npm run format:check` passes

## QA Summary

- QA target: `docs/foundation/site-design-philosophy.md` reviewed against
  `docs/_specs/design-codex/spec.md`
- Spec coverage confirmed:
  - Problem Statement: the document explains why the site feels coherent as a
    curated teaching artifact rather than a generic web app
  - Design Goals 1, 2, 4, 5, 7: visual logic, curatorial intent, anti-copying
    guidance, process discipline, and repository-grounded claims are all
    present
  - Architecture: the document covers the museum/editorial metaphor,
    chronology, companion pages, evidence surfaces, image roles, restraint,
    and what students should adapt rather than copy
  - Security: the document discourages literal reuse and stays grounded in real
    repository patterns
- Verification result: `npm run format:check` passed
- Findings: none

## QA Deviations

None.
