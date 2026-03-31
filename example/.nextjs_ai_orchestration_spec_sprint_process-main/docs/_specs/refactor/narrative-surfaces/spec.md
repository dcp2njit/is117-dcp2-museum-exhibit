# Narrative Surfaces Refactor Specification

> **Status:** Planned

## Problem Statement

The site's main orientation surfaces are useful, but they still behave more
like an intelligent index than a clearly authored opening sequence.

Concrete problems in the current state:

1. `app/page.tsx` already offers Primary Paths, Chronology, Narrative Threads,
   Learning Bridges, and a Grounding Layer, but the homepage still reads as a
   high-quality overview page rather than a true opening chapter.
2. `app/reading-maps/intellectual-lineage/page.tsx` contains strong substance,
   paper links, and visual teaching aids, but the route remains dense and would
   benefit from more pacing, framing, and editorial segmentation.
3. `app/people-and-institutions/page.tsx` successfully exposes people,
   institutions, and source anchors, but it still reads more like a live
   directory than a deliberately grouped cast page.
4. `lib/site-navigation.ts`, `components/site/site-header.tsx`, and
   `components/site/site-footer.tsx` establish good orientation, but the top of
   the site still needs stronger narrative cues about what kind of reading
   journey the user is entering.
5. If the narrative surfaces remain index-like, the later era-page refactor
   will have to carry too much orientation work on its own.

The immediate need is to refactor the site's front-door and reference surfaces
so they act like the opening and companion chapters of a multimedia book.

## Design Goals

1. **Make The Homepage A Real Opening Chapter**
   The homepage should state the site's historical argument, not only list its
   routes.

2. **Turn Reference Pages Into Story Companions**
   The reading map and people page should feel like companion chapters that
   deepen the story rather than detached indexes.

3. **Strengthen Orientation Without Reducing Depth**
   The refactor should improve pacing and comprehension without flattening the
   scholarly or educational substance already present.

4. **Keep Navigation Coherent Across Surfaces**
   Header, footer, homepage pathways, and page-local links should reinforce the
   same story model.

5. **Leverage The Shared Reading System**
   These surfaces should become the first major consumers of the shared chapter
   patterns defined in the Reading System feature.

6. **Raise The Visual Standard**
   The interface should feel authored, spacious, and expensive rather than
   crowded, over-carded, or assembled from interchangeable panels.

7. **Design Responsively From The First Block**
   Mobile, tablet, laptop, and large desktop layouts must be intentional first-
   class compositions rather than desktop structures squeezed downward.

## Architecture

### Target Routes

This feature governs the refactor of:

- `app/page.tsx`
- `app/reading-maps/intellectual-lineage/page.tsx`
- `app/people-and-institutions/page.tsx`
- supporting navigation files where needed

### Homepage Model

The homepage should evolve from a route inventory into a structured opening
sequence with elements such as:

- a historical thesis or scene-setting opener
- a visible map of the site's major reading tracks
- stronger transitions from overview to chronology to companion surfaces
- one memorable visual or systems-style orientation block

The homepage should no longer be treated as a stack of styled cards. It should
be rebuilt as an editorial front page with a clear composition model:

1. one dominant opening field
2. one disciplined chronology band
3. one companion-routes band
4. one exploratory mosaic of linked entry points

Each zone should have a distinct job, scale, and visual density.

## Ultimate UI Direction

### Current Problems To Eliminate

The present direction still feels cheaper than the content because:

1. too many blocks share the same visual treatment, making everything feel
   equally important
2. borders, shadows, and rounded containers do too much of the work instead of
   hierarchy, spacing, and type
3. the page reads as crowded because local card density is high even when the
   macro layout is cleaner than before
4. mobile and tablet behavior is not yet the source layout; it is still largely
   derived from desktop structure
5. visual rhythm is inconsistent, so the page feels assembled rather than art
   directed

### The Target Feel

The homepage and its companion surfaces should feel like:

1. an editorial feature
2. a museum wall label system with stronger narrative clarity
3. a Swiss-informed teaching interface with restraint and precision
4. a modern publication, not a SaaS dashboard and not a gallery of generic cards

### Core UI Principles

1. **Fewer Containers, Stronger Hierarchy**
   Use fewer boxes. Let spacing, scale, typography, and alignment carry more of
   the visual structure.

2. **Distinct Section Temperatures**
   The hero, chronology, companion routes, and exploratory mosaic should not all
   use the same background, border weight, and card language.

3. **One Primary Action Per Zone**
   Every major band should have a dominant next move. Secondary links can exist,
   but they should not compete with the main action.

4. **Text Before Decoration**
   Typography, line length, rhythm, and spacing should define quality before any
   gradients, shadows, or ornaments are added.

5. **Images As Narrative Anchors**
   Images should punctuate and deepen the history, not merely decorate surfaces.
   Fewer images with stronger placement will feel more premium than many small
   competing images.

6. **Responsive Composition, Not Responsive Shrinking**
   Each breakpoint should have its own intended composition. The goal is not to
   preserve the same arrangement everywhere.

## Responsive-First Layout Rules

### Mobile

Mobile is the canonical reading mode, not a fallback.

Required behavior:

1. the first screen should establish thesis, title, and one obvious starting route
2. no masonry on mobile; use a clean narrative stack with deliberate section pacing
3. linked surfaces should stay thumb-reachable and avoid dense multi-column clusters
4. text blocks should shorten and tighten before cards multiply
5. images should either dominate a section or disappear; avoid tiny in-between thumbnails

### Tablet

Tablet is the transition from reading stack to composition.

Required behavior:

1. begin introducing two-column relationships only where hierarchy is clear
2. allow hero copy and key visual to share space
3. chronology can become a quilt or staggered grid if it remains readable in order
4. companion routes can move into paired modules rather than full mosaics

### Laptop And Desktop

Larger screens should add sophistication, not more clutter.

Required behavior:

1. increase whitespace before increasing card count
2. use asymmetry and scale contrast to create emphasis
3. let one or two large narrative surfaces dominate instead of filling every gap
4. reserve mosaic behavior for the exploratory section, not the entire page

## Component Strategy For The Rebuild

The UI framework should support a scratch rebuild through a small number of
high-leverage patterns:

1. `Panel` should become a structural wrapper, not the default visual answer to
   every section
2. `SectionHeading` should enforce hierarchy, spacing, and line-length discipline
3. `Card` should be reserved for true modular surfaces, not used as the default
   wrapper for every content block
4. new content compositions should be created for:
   - hero field
   - chronology quilt
   - companion route strip
   - editorial mosaic
   - documentary image callout
5. Radix primitives should support interaction and accessibility, not dictate
   the visual language

## Visual System Recommendations

### Typography

1. preserve the existing display/body font pairing only if spacing and scale are
   re-tuned more aggressively
2. enlarge contrast between display headlines and supporting body copy
3. reduce the number of mid-sized headings competing on screen at once

### Color

1. keep the warm archival palette
2. use sharper tonal contrast and more negative space instead of adding more hues
3. assign each major section one dominant tonal role rather than layering many
   similar creams and tans

### Surfaces

1. reduce repeated border-plus-shadow-plus-radius combinations
2. mix open layouts with contained layouts so the whole page does not feel boxed in
3. use one premium high-contrast section to anchor the page rather than spreading
   high treatment everywhere

### Motion And Interaction

1. hover states should be subtle and directional
2. link affordances should be legible without making every element look clickable
3. use Radix-based overlays only when they genuinely improve wayfinding or context

## Execution Plan

### Phase 1: Layout Reset

1. strip the homepage back to content, hierarchy, and responsive structure
2. remove non-essential ornamental treatments
3. redesign the page mobile-first before styling desktop enhancements

### Phase 2: Composition System

1. create dedicated compositions for hero, chronology, companion routes, and mosaic
2. test those compositions at mobile, tablet, laptop, and large desktop widths
3. verify that each zone has one dominant action and clear exit paths

### Phase 3: Visual Art Direction

1. tune typography, spacing, and image placement
2. reintroduce contrast sections and premium surface treatments selectively
3. ensure the site feels authored rather than component-demo driven

### Phase 4: Propagate The System

1. apply the same language to the reading map and people/institutions pages
2. keep the narrative flow model while reducing visual redundancy across surfaces

### Reading Map Model

The reading map should keep its current paper lineage and link density, but add
more pacing through:

- cluster introductions
- editorial guideposts
- selective emphasis such as "read this first" or "why this paper changed the next era"
- more visible transitions between eras or paper clusters

### Cast And Institution Model

The people-and-institutions route should be organized into narrative groups
rather than only one chronological list of cards. Examples include:

- builders
- critics
- public explainers
- institutions that shaped deployment
- source anchors that hold the early story to real documents

The final grouping names belong in sprint docs, but the architecture should
explicitly move the page toward cast logic rather than catalog logic.

## Security

1. **Link Integrity**
   Refactors must preserve working internal navigation and verified official
   external links.

2. **No False Grouping Claims**
   Cast-group labels must be historically defensible and should not invent
   relationships that the repository does not support.

3. **Accessible Orientation**
   New section groupings, visual tracks, and navigation cues must remain clear
   for keyboard and screen-reader users.

## Testing Strategy

### Required Test Categories

1. Homepage smoke coverage updated for new chapter-level sections.
2. Learning-surface tests updated for reading-map structure changes.
3. People-and-institutions coverage updated to reflect grouped cast structure.
4. Full suite verification through lint, typecheck, test, and build.

### Baseline

- Current repository baseline: `13 existing tests`

## Sprint Plan

| Sprint   | Goal                                                                                       |
| -------- | ------------------------------------------------------------------------------------------ |
| Sprint 0 | Refactor the homepage into a stronger opening chapter and align global navigation language |
| Sprint 1 | Refactor the reading map and people/institutions route into companion narrative surfaces   |

## Future Considerations

Explicitly deferred items:

- embedded social feeds
- interactive graph navigation
- search-driven relationship explorer
- personalized reading modes
