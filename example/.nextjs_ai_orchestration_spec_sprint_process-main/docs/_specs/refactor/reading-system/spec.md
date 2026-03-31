# Reading System Refactor Specification

> **Status:** In Progress

## Problem Statement

The site now has strong route coverage and meaningful historical substance, but
its long-form reading system is still underpowered.

Concrete problems visible in the current repository state:

1. Most long pages rely on the same surface pattern: chronology cards, prose,
   people cards, concepts, and institutions. That keeps the site orderly, but
   it also makes many routes feel like stacked sections instead of authored
   chapters.
2. The global styling in `app/globals.css` already provides an editorial tone,
   but it does not yet define enough reusable chapter furniture for long-form
   reading such as chapter openers, transition blocks, pull quotes, side notes,
   artifact strips, or scene-setting layouts.
3. `GuideCallout` and `NarrativeCard` are useful, but they do not yet form a
   complete long-form composition system. Pages still have to improvise how to
   transition between narrative, evidence, and explanation.
4. Stronger routes such as Era 2 and the math guide prove that mixed-mode pages
   work better when visual explanation, story, and concept teaching alternate.
   The repository does not yet formalize that pattern into reusable building
   blocks.
5. Without a shared reading system, the homepage and era-page refactors will
   likely duplicate layout ideas, CSS decisions, and narrative pacing rules.

The immediate need is to define a reusable chapter-reading system that can be
used by the homepage, learning surfaces, and the full chronology without
discarding the current visual language.

## Design Goals

1. **Make Pages Read Like Chapters**
   The system must help long routes feel authored and paced rather than merely
   assembled from cards.

2. **Separate Narrative From Reference Material**
   Prose, side commentary, artifacts, and cast/reference cards should feel like
   distinct reading modes rather than visually equivalent blocks.

3. **Preserve The Existing Editorial Aesthetic**
   The warm palette, Newsreader display type, and current glassy panel system
   should evolve rather than be replaced.

4. **Stay Reusable Across Routes**
   Shared chapter components should be portable enough to use on the homepage,
   learning routes, and era pages.

5. **Improve Reading Rhythm Without Heavy Frontend Complexity**
   The solution should rely on React components, semantic HTML, and CSS rather
   than animation-heavy or state-heavy interaction patterns.

6. **Support Multimedia Teaching**
   The chapter system must make room for diagrams, sourced images, story cards,
   quotes, and explanatory sidebars.

## Architecture

### Overview

This feature creates the shared long-form chapter system for the live site.

The expected implementation should introduce a reusable editorial component set
and the CSS needed to support it. The feature is intentionally foundational:
it does not finish every page, but it gives later refactors a governed way to
compose them.

### Shared Component Layer

The refactor should introduce a dedicated shared layer under a path such as:

```text
components/content/chapter/
```

The exact file names belong in sprint docs, but the system should cover at
least these roles:

1. **Chapter Hero**
   A stronger route opener that can pair the era or page title with a scene,
   thesis, and optional route-specific links.

2. **Narrative Section Block**
   A prose-first section variant that can visually distinguish chapter text
   from support grids.

3. **Editorial Aside / Side Note**
   A compact component for framing, reminders, misconceptions, or historical
   pivots that are not as prominent as `GuideCallout`.

4. **Pull Quote / Primary Source Quote**
   A presentation pattern for short quotations from historical figures or
   source documents.

5. **Artifact Or Documentary Strip**
   A layout pattern for presenting one or more historical objects, images,
   source anchors, or repository-authored story cards with more visual intent.

6. **Transition Block**
   A reusable divider that helps a page move from scene to chronology, from
   chronology to analysis, or from one era to the next.

The existing `GuideCallout` and `NarrativeCard` should remain part of the
system rather than being replaced.

### Styling Layer

The reading system should extend `app/globals.css` with reusable styles for:

- chapter openers
- scene-setting paragraphs
- pull quotes
- margin-like notes or inset notes
- artifact bands or documentary shelves
- section dividers and transition markers
- more distinct prose widths and card widths within long routes

The styling must continue to work responsively on mobile and desktop.

### Composition Rules

The chapter system should standardize a recommended reading arc:

1. chapter opener
2. framing scene or thesis
3. chronology or anchor points
4. primary narrative explanation
5. documentary or visual evidence block
6. concept bridge or guide commentary
7. forward link or transition

Not every route needs every element, but later page refactors should be able
to follow a shared rhythm rather than invent structure from scratch.

### Accessibility And Semantics

The system must use semantic HTML and preserve existing accessible structure:

- headings remain correctly nested
- asides use `<aside>` where appropriate
- quotes use `<blockquote>` or equivalent semantic structure
- decorative elements remain non-essential to comprehension

## Security

1. **Accessible Reading Surface**
   New editorial components must not reduce keyboard, heading, or screen-reader
   clarity.

2. **No False Documentary Authority**
   Pull quotes or artifact treatments must only use verified source text or
   clearly repository-authored summaries.

3. **Performance Discipline**
   The shared reading system must not introduce heavyweight client-side state,
   third-party embeds, or animation dependencies to solve layout problems.

4. **Visual Distinction Without Deception**
   Documentary treatments may feel more book-like, but they must not imply a
   media record or archival object exists when it does not.

## Testing Strategy

### Required Test Categories

1. Component-level tests for new shared chapter primitives where behavior or
   semantics are non-trivial.
2. Route-level smoke coverage for at least one page that adopts the new chapter
   system.
3. Regression checks to ensure existing guide callouts and narrative cards
   still render correctly after styling changes.
4. Full repository verification via lint, typecheck, tests, and build.

### Baseline

- Current repository baseline: `13 existing tests`
- Each sprint doc must state its expected additional test count.

## Sprint Plan

| Sprint   | Goal                                                                                                |
| -------- | --------------------------------------------------------------------------------------------------- |
| Sprint 0 | Create the shared chapter component kit and base editorial layout patterns                          |
| Sprint 1 | Extend the global reading rhythm with pull quotes, asides, transitions, and route adoption guidance |

## Future Considerations

The following items are explicitly deferred:

- scroll-driven progress indicators
- audio playback components
- interactive timeline widgets
- annotation systems or footnote popovers
- CMS-backed editorial composition
