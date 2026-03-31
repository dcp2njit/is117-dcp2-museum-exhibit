# Site Implementation Codex

## Why This Document Exists

This document explains how the site is built.

It is written for two readers at once:

- a student who needs to understand how design intent becomes implementation
- a coding agent that needs a reliable map of the repository before proposing
  changes or generating a new project from the patterns here

This is not a generic Next.js tutorial. It is a repository-grounded codex for
this specific site.

## The Big Picture

The site is a chapter-driven reference product built on Next.js App Router.
Its architecture is intentionally narrow:

- `app/` defines the routes and page entry points
- `components/` defines reusable visual and structural primitives
- `lib/` defines data, configuration, navigation, and image helpers
- `public/media/` stores documentary and generated imagery
- `tests/` asserts the presence of the site’s major teaching surfaces and
  continuity claims

The implementation works because those layers stay distinct.

## Route Map

The top-level route categories under `app/` are:

- `app/page.tsx` — homepage / opening gallery
- `app/eras/` — the seven main chronology chapters
- `app/reading-maps/` — reading lineage and paper-oriented companion surfaces
- `app/people-and-institutions/` — cast and institution companion chapter
- `app/guides/` — explanatory bridge pages such as the math guide
- `app/layout.tsx` — global shell, fonts, header, and footer
- `app/globals.css` — global design system and layout rules
- `app/robots.ts` and `app/sitemap.ts` — route metadata surfaces

This route map is important because it encodes the product thesis directly.
There is one main chronology, then companion routes that make the chronology
more legible.

## Shell Composition

The root shell is declared in `app/layout.tsx`.

Important details:

- uses `Bodoni_Moda` for the display layer via `--font-display`
- uses `IBM_Plex_Sans` for the body layer via `--font-body`
- wraps all pages with `SiteHeader` and `SiteFooter`
- imports `app/globals.css` once at the application shell level

The shell matters because typography and navigation are treated as product-wide
invariants rather than page-level decoration.

## Component Families

### 1. Chapter Components

These files live under `components/content/chapter/` and define the core page
grammar.

- `chapter-hero.tsx`
  - component: `ChapterHero`
  - role: the primary opener for a route
  - key props: `eyebrow`, optional `period`, `title`, `lede`, optional
    `links`, optional `children`, optional `featureImage`
  - CSS classes: `chapter-hero`, `chapter-hero__lead`, `chapter-hero__support`,
    `chapter-hero__feature-image`, `chapter-hero__nav`

- `chapter-section.tsx`
  - component: `ChapterSection`
  - role: wraps a named content section with a shared heading treatment
  - key props: `id`, `eyebrow`, `title`, `children`, optional `prose`
  - CSS classes: `exemplar-section`, `chapter-section`,
    optional `chapter-section--prose`

- `chapter-visual-break.tsx`
  - component: `ChapterVisualBreak`
  - role: full-width editorial image break inside a chapter page
  - key props: `src`, `alt`, optional `caption`, optional `className`
  - CSS classes: `chapter-visual-break`, `chapter-visual-break__media`,
    `chapter-visual-break__caption`

- `chapter-timeline.tsx`
  - component: `ChapterTimeline`
  - role: renders structured chronology cards in a timeline grid

- `editorial-aside.tsx`
  - component: `EditorialAside`
  - role: places a smaller interpretive note beside or inside a larger section

- `pull-quote.tsx`
  - component: `PullQuote`
  - role: isolates a historically or rhetorically important quotation

- `transition-block.tsx`
  - component: `TransitionBlock`
  - role: handles route-to-route handoff language at the end of a chapter

This family is the reason the pages feel related even when their content and
emphasis differ.

### 2. Editorial Grid Components

These live under `components/content/editorial/`.

- `editorial-card-grid.tsx`
  - component: `EditorialCardGrid`
  - role: generic grid for content cards with optional image and metadata
  - item model: `title`, `description`, optional `meta`, optional `footer`,
    optional `imageUrl`, optional `imageAlt`
  - CSS classes: `content-grid`, optional `content-grid--dense`, `content-card`

- `editorial-summary-grid.tsx`
  - component: `EditorialSummaryGrid`
  - role: compact summary/bridge cards, often used for “reading frame” or
    “stop here if needed” sections
  - delegates internal rendering to `EditorialInsightCard`

- `narrative-card-grid.tsx`
  - components: `NarrativeProfileGrid`, `HistoricalAnchorGrid`
  - role: adapt structured data from `lib/narrative-data.ts` into documentary
    card grids
  - CSS classes: `documentary-grid`, `source-anchor-grid`

These components let the site change content density without inventing a new
layout grammar on every page.

### 3. Media Components

- `components/media/focal-image.tsx`
  - component: `FocalImage`
  - role: wrapper around `next/image` that applies precomputed focus data
  - behavior:
    - prefixes image sources with `NEXT_PUBLIC_BASE_PATH` when needed
    - looks up object-position and suggested fit through `getImageFocusData`
    - uses stored focus metadata so images crop consistently across surfaces

This is a critical repository pattern. The site avoids arbitrary cropping by
turning image framing into a repeatable pipeline.

### 4. Site Shell Components

These live under `components/site/`.

- `site-header.tsx`
  - component: `SiteHeader`
  - role: brand lockup plus primary navigation and per-page section nav
  - depends on `lib/site-navigation.ts`
  - behavior:
    - highlights main navigation based on pathname and hash
    - shows homepage section nav on `/`
    - shows “On this page” section navigation for pages listed in
      `pageSectionNavigation`

- `site-footer.tsx`
  - component: `SiteFooter`
  - role: return points, quick links, and footer navigation derived from shared
    navigation data

### 5. UI Primitives

The lower-level reusable primitives live under `components/ui/`.

These include things like:

- `SectionHeading`
- accordion, dialog, separator, tooltip, panel, button, card primitives

This layer matters because the chapter/editorial components are intentionally
composed on top of shared primitives rather than each page hand-rolling its own
heading treatment.

## CSS Architecture

The main CSS system is in `app/globals.css`.

### Token Layer

The `:root` block defines the site-wide tokens:

- background and foreground colors
- warm surface variants
- opacity-based ink and muted text scales
- overlay and dark-surface values
- gradient tokens
- the phi-based spacing scale

The phi-based spacing tokens are:

- `--space-3xs: 0.146rem`
- `--space-2xs: 0.236rem`
- `--space-xs: 0.382rem`
- `--space-s: 0.618rem`
- `--space-m: 1rem`
- `--space-l: 1.618rem`
- `--space-xl: 2.618rem`
- `--space-2xl: 4.236rem`

The point is not the number mystique. The point is that spacing was turned into
an explicit rhythm system.

### Theme Layer

Chapter themes are declared through scoped classes such as:

- `chapter-theme--home`
- `chapter-theme--precursor`
- `chapter-theme--formation`
- `chapter-theme--papers`
- `chapter-theme--cast`
- `chapter-theme--symbolic`
- `chapter-theme--winter`
- `chapter-theme--statistical`
- `chapter-theme--breakthrough`
- `chapter-theme--foundation`
- `chapter-theme--guide`

Each theme sets:

- `--chapter-accent-rgb`
- `--chapter-accent-text`

That means accent color is scoped by chapter context rather than hardcoded into
individual components.

### Layout Layer

Important shared classes include:

- `hero-panel` — top-level chapter wrapper with the major page padding/gap
- `chapter-hero` — two-column opener grid
- `chapter-section` — heading-to-content rhythm
- `section-heading` — section title and eyebrow grouping
- `content-grid` and `content-grid--dense` — editorial card layouts
- `documentary-grid` — narrative-profile/documentary-card layout
- `visualization-grid` — paired diagram / image layout
- `timeline-list` — chronology card layout
- `chapter-visual-break` — mid-page immersive image band

A useful architectural rule: page-level TSX should mostly compose these classes
and components, not invent new layout rules inline.

### Responsive Rules

The mobile breakpoint in `app/globals.css` collapses multi-column layouts such
as:

- `timeline-list`
- `content-grid`
- `content-grid--dense`
- `visualization-grid`
- `source-anchor-grid`
- `institution-grid`
- `artifact-grid`
- `documentary-grid`

into single-column runs.

This preserves the editorial order while simplifying the visual structure on
narrow screens.

## Data Architecture

The main narrative data lives in `lib/narrative-data.ts`.

Important exported types:

- `SocialLink`
- `NarrativeProfile`
- `HistoricalAnchor`
- `GeneratedIllustration`

Important exported arrays:

- `peopleProfiles`
- `institutionProfiles`
- `historicalAnchors`
- `generatedIllustrations`

The common page pattern is to filter these arrays by era and then feed the
result into adapter components like `NarrativeProfileGrid` or
`HistoricalAnchorGrid`.

That is an important design choice. Data is centralized first, then rendered in
page-specific context. This helps the site stay coherent and makes companion
pages possible without duplicating content definitions across routes.

## Navigation Architecture

Navigation is centralized in `lib/site-navigation.ts`.

Important exports:

- `mainNavigation`
- `homeSectionNavigation`
- `pageSectionNavigation`
- `footerQuickLinks`
- `footerReturnSignals`
- `footerNavigation`

This file encodes two key product ideas:

1. the main navigation is stable across the site
2. section-level navigation is route-specific and should be driven by data,
   not handwritten in the header component

That pattern is useful for future projects. If a site has a clear reading path,
its navigation usually deserves a dedicated data file rather than scattered link
markup.

## Image Pipeline

The image pipeline has three parts.

### 1. Source Images

Images live primarily under `public/media/`.

There are two broad classes:

- documentary / historical imagery under paths such as `public/media/wikimedia`
- generated editorial imagery under paths such as `public/media/generated`

### 2. Focus Metadata

The script `scripts/generate-image-focus.mjs` scans source files for image
references, analyzes images with `sharp` and `smartcrop-sharp`, and writes
focus metadata to `lib/generated/image-focus-map.ts`.

The metadata includes:

- `objectPosition`
- `width`
- `height`
- `aspectRatio`
- `orientation`
- `sourceKind`
- `suggestedFit`

### 3. Runtime Application

At runtime, `FocalImage` reads that data through `lib/image-focus.ts` and uses
it to apply consistent cropping and fit behavior.

This is why the site can reuse one image across multiple surfaces without each
surface needing a manual one-off crop decision.

## Testing And Verification

The testing pattern in this repository is product-oriented.

Unit tests under `tests/app/` do not primarily assert implementation trivia.
They assert the presence of:

- major headings
- route continuity
- companion-surface presence
- historically important labels and links

For example, `tests/app/learning-bridges.test.tsx` asserts that the reading map
and math guide render their key headings, bridge language, and anchor visuals.

Core commands from `package.json`:

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run test:browser`
- `npm run generate:image-focus`
- `npm run format:check`

The build pipeline also runs `prebuild`, which regenerates image-focus data.

## How To Inspect This Site Before Reusing It

A coding agent should not start by copying components blindly.

Inspect in this order:

1. read `docs/foundation/site-design-philosophy.md`
2. inspect `app/layout.tsx` and `app/globals.css`
3. inspect one representative era page and one companion page
4. inspect the chapter components under `components/content/chapter/`
5. inspect grid and card adapters under `components/content/editorial/`
6. inspect `lib/narrative-data.ts` and `lib/site-navigation.ts`
7. inspect one or two tests under `tests/app/`

That sequence matters because it moves from product intent to implementation
structure instead of starting from isolated code snippets.

## What To Preserve In A New Project

A new project inspired by this site should usually preserve:

- a strong shell and stable navigation model
- a repeated chapter/page grammar
- centralized data instead of scattered inline content definitions
- explicit visual hierarchy and spacing tokens
- purposeful companion pages when the main route would otherwise overload
- documented quality gates and sprint-level verification

## What Must Change In A New Project

A new project should usually change:

- the governing metaphor
- the subject matter and route taxonomy
- the palette and imagery strategy
- the content entities and data model
- the exact companion pages if the subject needs a different teaching support
  structure
- the specific chapter-theme accents and image choices

Preserve the discipline, not the local skin.

## Quick Retrieval Appendix

Use this appendix when you need a fast lookup table instead of rereading the
whole codex.

### Core Chapter And Editorial Components

| File                                                      | Export                 | Key props                                                                                                                                                      | Primary use                                                                 |
| --------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `components/content/chapter/chapter-hero.tsx`             | `ChapterHero`          | `eyebrow`, optional `period`, `title`, `lede`, optional `links`, optional `children`, optional `featureImage`                                                  | Main route opener with title, lede, support column, and optional hero image |
| `components/content/chapter/chapter-section.tsx`          | `ChapterSection`       | `id`, `eyebrow`, `title`, `children`, optional `prose`                                                                                                         | Standard content-section shell with shared heading treatment                |
| `components/content/chapter/chapter-visual-break.tsx`     | `ChapterVisualBreak`   | `src`, `alt`, optional `caption`, optional `className`                                                                                                         | Full-width editorial image break between sections                           |
| `components/content/chapter/chapter-timeline.tsx`         | `ChapterTimeline`      | `items`, optional `className`, optional `itemClassName`                                                                                                        | Ordered chronology cards inside a timeline grid                             |
| `components/content/chapter/editorial-aside.tsx`          | `EditorialAside`       | optional `label`, `title`, optional `tone`, `children`                                                                                                         | Secondary interpretive block for key insight or contrast note               |
| `components/content/chapter/pull-quote.tsx`               | `PullQuote`            | `quote`, optional `attribution`, optional `source`                                                                                                             | Isolated quotation surface for rhetorical or historical emphasis            |
| `components/content/chapter/transition-block.tsx`         | `TransitionBlock`      | `eyebrow`, `title`, `description`, optional `href`, optional `linkLabel`                                                                                       | End-of-route handoff into the next chapter or companion page                |
| `components/content/editorial/editorial-card-grid.tsx`    | `EditorialCardGrid`    | `items`, optional `className`, optional `dense`, optional `cardClassName`                                                                                      | Generic editorial card grid with optional media and metadata                |
| `components/content/editorial/editorial-summary-grid.tsx` | `EditorialSummaryGrid` | `items`, optional `className`, optional `dense`, optional `cardClassName`, optional `titleClassName`, optional `descriptionClassName`, optional `eyebrowScale` | Compact summary or bridge cards built on `EditorialInsightCard`             |
| `components/content/editorial/narrative-card-grid.tsx`    | `NarrativeProfileGrid` | `profiles`, optional `className`, optional `cardClassName`, optional `getSubtitle`, optional `getImageFit`                                                     | Converts people/institution profile data into documentary cards             |
| `components/content/editorial/narrative-card-grid.tsx`    | `HistoricalAnchorGrid` | `anchors`, optional `story`, optional `className`, optional `cardClassName`, optional `getSubtitle`                                                            | Converts source-anchor data into documentary evidence cards                 |

### Media, Shell, And Data Helpers

| File                                | Export                                                                                                                            | Key props or API                                                                              | Primary use                                                                     |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `components/media/focal-image.tsx`  | `FocalImage`                                                                                                                      | all `next/image` props plus optional `applySuggestedFit`                                      | Image wrapper that applies stored crop/focus metadata automatically             |
| `components/site/site-header.tsx`   | `SiteHeader`                                                                                                                      | none                                                                                          | Global brand lockup, main navigation, homepage subnav, and per-page section nav |
| `components/site/site-footer.tsx`   | `SiteFooter`                                                                                                                      | none                                                                                          | Global footer with quick links, return signals, and grouped footer navigation   |
| `components/content/math-block.tsx` | `MathBlock`                                                                                                                       | `tex`, optional `display`, optional `className`                                               | Server-rendered KaTeX block for math-guide surfaces                             |
| `lib/narrative-data.ts`             | `peopleProfiles`, `institutionProfiles`, `historicalAnchors`, `generatedIllustrations`                                            | centralized arrays plus `NarrativeProfile`, `HistoricalAnchor`, `GeneratedIllustration` types | Shared content layer for profiles, anchors, and generated-image references      |
| `lib/site-navigation.ts`            | `mainNavigation`, `homeSectionNavigation`, `pageSectionNavigation`, `footerQuickLinks`, `footerReturnSignals`, `footerNavigation` | route and section navigation declarations                                                     | Shared navigation model used by header, footer, and page-level section nav      |
| `lib/image-focus.ts`                | `getImageFocusData`, `getSuggestedImageFit`                                                                                       | source-path lookup helpers                                                                    | Runtime access to image-focus metadata generated ahead of build                 |
| `scripts/generate-image-focus.mjs`  | script entrypoint                                                                                                                 | scans TS/TSX files and writes `lib/generated/image-focus-map.ts`                              | Build-support script for deterministic crop/focus behavior                      |

### Route-Level Page Patterns

| Route family                      | Representative file                                             | Typical composition                                                                                                                                                                                                                        | What makes it distinct                                                                                                         |
| --------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| Homepage                          | `app/page.tsx` and `components/content/home/editorial-home.tsx` | Thin route entry that delegates to `EditorialHome`, which composes `OpeningSection`, `ChronologySection`, `ReadingModelSection`, `ScenesSection`, and `HomeSectionDivider` around centralized homepage content                             | The homepage is the only route family that behaves like an opening gallery instead of a chapter article                        |
| Era chapter                       | `app/eras/foundation-models-and-generative-ai/page.tsx`         | `article.hero-panel.exemplar-panel.chapter-theme`, then `ChapterHero`, `GuideCallout`, multiple `ChapterSection` blocks, optional `ChapterTimeline`, `ChapterVisualBreak`, documentary/editorial grids, `PullQuote`, and `TransitionBlock` | Era routes are the primary chronology spine and usually filter shared narrative data by era before rendering                   |
| Reading map companion             | `app/reading-maps/intellectual-lineage/page.tsx`                | Chapter shell with `ChapterHero`, `GuideCallout`, summary or card grids, reading-specific components such as `ReadingClusterGrid`, optional diagrams, then a closing `TransitionBlock`                                                     | Reading maps translate chronology into paper lineage and clustered reading sequences rather than biography or math instruction |
| People and institutions companion | `app/people-and-institutions/page.tsx`                          | Chapter shell with `ChapterHero`, `GuideCallout`, route-choice summary grids, grouped sections that adapt `peopleProfiles`, `institutionProfiles`, and `historicalAnchors`, plus `PullQuote` and `TransitionBlock`                         | This route treats the site as a cast sheet and institutional atlas instead of a pure chronology                                |
| Guide companion                   | `app/guides/embeddings-latent-space-and-llm-math/page.tsx`      | Chapter shell with `ChapterHero`, `GuideCallout`, explanatory `ChapterSection` runs, `MathBlock`, `ChapterTimeline`, `FocalImage`, and visualization components before reentry links                                                       | Guide pages are bridge surfaces that slow down one difficult concept without replacing the main chronology                     |

Common route rule: most non-home pages keep page-level TSX focused on narrative assembly and data selection, while reusable structure stays in chapter, editorial, media, and visualization components.

### Fast Inspection Order For Agents

If an agent needs to understand the site quickly, inspect these in order:

1. `docs/foundation/site-design-philosophy.md`
2. `app/layout.tsx`
3. `app/globals.css`
4. one era page in `app/eras/`
5. one companion page in `app/reading-maps/`, `app/people-and-institutions/`, or `app/guides/`
6. the chapter components in `components/content/chapter/`
7. the editorial and documentary grid adapters in `components/content/editorial/`
8. `lib/narrative-data.ts` and `lib/site-navigation.ts`
9. one representative test in `tests/app/`

## How This Codex Supports Specs And Sprints

This document should be read before writing a new site spec.

Its purpose is to help students and coding agents answer practical questions
such as:

- what structural patterns are worth reusing
- what visual systems need to be codified early
- which data should be centralized
- which surfaces deserve dedicated components
- which quality gates should be in place before the site grows

If the philosophy document explains why this site feels coherent, this codex
explains where that coherence lives in the code.
