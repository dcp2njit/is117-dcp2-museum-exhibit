# Chapter Reading System

## Purpose

The site no longer behaves like a minimal set of exemplar routes. It now has
enough depth to act like a multimedia book, which means route composition needs
to be governed instead of improvised page by page.

This note defines how the shared chapter system should be used across the live
site.

## Shared Components

The shared reading layer lives under `components/content/chapter/`.

Current primitives:

- `ChapterHero`
  use for the page opener: eyebrow, period, title, lede, scene-setting line,
  optional return link, and major route-local navigation links
- `ChapterSection`
  use for standard chapter blocks with a consistent heading pattern and optional
  prose-first mode
- `EditorialAside`
  use for framing, contrast, reading advice, and interpretive support that
  should not dominate the main narrative like a `GuideCallout`
- `PullQuote`
  use for short highlighted language, source-backed quotations, or carefully
  chosen repository-authored emphasis lines
- `TransitionBlock`
  use for chapter handoffs, reading advice, and forward-link guidance

The chapter system complements existing components rather than replacing them.

## How To Assemble A Page

Recommended order for a strong long-form route:

1. `ChapterHero`
2. optional `GuideCallout` if the reader needs immediate interpretive framing
3. `ChapterSection` for chronology or anchor points
4. prose-first `ChapterSection` for the page's core argument
5. one documentary, visual, or artifact-rich section
6. one concept or cast section
7. `TransitionBlock` to hand readers into the next route or the next era

Not every route needs every step, but routes should avoid returning to a flat
pattern where every section has the same visual and rhetorical weight.

## When To Use Each Pattern

### `GuideCallout` versus `EditorialAside`

- use `GuideCallout` when the site needs explicit GPT-5.4 teaching commentary
  such as misconception correction or a strong explanation of why something
  matters
- use `EditorialAside` when the page needs lower-intensity framing, contrast,
  or scene support without interrupting the chapter as aggressively

### `NarrativeCard` versus `PullQuote`

- use `NarrativeCard` when the content is tied to a person, institution,
  documentary anchor, image, or source record
- use `PullQuote` when one sentence or short excerpt should slow the reader
  down and give the page a clearer reading rhythm

### `TransitionBlock`

- use at the end of chapters or major companion pages
- use when a route must redirect readers back into the chronology or into a
  related companion surface
- do not use multiple transition blocks in short pages unless the page has
  genuinely distinct reading phases

## Route Roles

- homepage:
  opening chapter and reading-orientation surface
- reading map:
  paper-based companion chapter
- people and institutions:
  cast-and-institutions companion chapter
- era pages:
  main body chapters of the chronology
- math guide:
  concept bridge chapter for the modern stack

## Composition Rules

- keep prose sections visually distinct from card grids
- do not let every page become chronology plus cards plus concepts in the same
  order without a scene or transition
- use at least one route-specific rhythm device on long pages:
  aside, quote, visual block, documentary strip, or transition
- keep adjacent-era navigation in the hero when the page belongs to the main
  chronology
- reserve the footer for recall and re-entry, not for first-time instruction

## Evidence And Integrity Rules

- source-backed quotations must only be used when wording and attribution are
  verified
- repository-authored pull lines are acceptable, but they should read as
  interpretive emphasis rather than as fake primary-source quotations
- documentary cards must continue to point at real media or source records
- stronger pacing is good; invented drama is not

## Current Working Model

The best current models after the refactor are:

- homepage for top-level narrative orientation
- Era 2 for chronology chapter structure
- Era 7 for synthesis chapter structure
- the reading map for a companion chapter driven by documents and lineage
- the math guide for concept-bridge teaching
