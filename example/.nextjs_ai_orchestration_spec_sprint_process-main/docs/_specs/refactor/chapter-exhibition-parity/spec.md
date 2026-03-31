# Chapter Exhibition Parity Specification

> **Status:** Planned

## Problem Statement

The homepage now functions as the site's visual and editorial benchmark. It has
clear section temperature, strong image placement, purposeful spacing, and a
curated sense of movement between thesis, chronology, and companion routes.
Most non-home routes do not meet that standard.

Concrete problems in the current state:

1. The era pages, reading map, and guide pages are structurally cleaner than
   before, but many still read as orderly stacks of cards rather than authored
   visual chapters.
2. Images are present on many routes, but they often do documentary cleanup
   work at the bottom of the page rather than carrying the opening argument.
3. Section rhythm on non-home pages is too uniform. Repeated card grids and
   similar cream surfaces make everything feel equally important.
4. Several pages still open with abstract or decorative image treatment rather
   than historically grounded, human, or source-bearing visuals.
5. The homepage proves the site can feel spacious, editorial, and memorable,
   but that standard is not yet propagated across the chapter surfaces.
6. If this gap remains, the user experiences the homepage as a premium entry
   point and the rest of the site as a downgrade.

### Initial Evidence From The Era 1 Audit

The first pass on `app/eras/precursors-to-machine-intelligence/page.tsx`
identified a recurring chapter-surface failure mode that is likely present in
other routes as well:

1. the lead image behaved like decorative wallpaper rather than a narrative or
   documentary anchor
2. the page opened without strong human presence even though usable portraits
   already existed in the repository
3. the image and copy relationship was mismatched; the visual supported only
   one of the page's three main claims
4. image rhythm broke after the opener, returning the page to long stretches of
   text-card repetition

That audit is the model for this workstream: every page is evaluated against the
homepage's standard for image authority, visual pacing, hierarchy, and
composition.

## Design Goals

1. **Make Every Major Route Feel Deliberately Authored**
   Each page should read like a designed chapter, not a tidy pile of reusable
   components.

2. **Use Images As Argument, Not Decoration**
   Hero and section images must prove, humanize, or sharpen the chapter's
   claims.

3. **Raise The Non-Home Pages To Homepage Standard**
   The homepage is the benchmark for spacing, surface variety, image placement,
   and narrative confidence.

4. **Audit One Page At A Time**
   Each page gets an explicit critique before redesign. No broad cosmetic pass
   across the whole repo.

5. **Prefer Documentary And Human Visuals**
   Portraits, institutions, papers, and source objects should outrank generic
   thematic imagery.

6. **Strengthen Visual Rhythm Across Long Routes**
   Pages need alternation between open layouts, dominant visuals, denser
   teaching blocks, and documentary sections.

7. **Keep Shared Components, But Do Not Let Them Flatten The Experience**
   Reusable systems should support authored composition rather than forcing
   every page into the same visual cadence.

## Architecture

### Scope

This workstream governs the visual and editorial redesign of all major non-home
routes, using the homepage as the reference surface:

- `app/eras/**/page.tsx`
- `app/reading-maps/intellectual-lineage/page.tsx`
- `app/people-and-institutions/page.tsx`
- `app/guides/embeddings-latent-space-and-llm-math/page.tsx`

### Page Audit Method

Every page follows the same sequence:

1. Compare the route directly against the homepage
2. Critique current image treatment intensively
3. Identify where the page lacks:
   - a strong opening visual thesis
   - human or documentary presence near the top
   - section-to-section visual contrast
   - a credible image rhythm
4. Produce a sprint doc for that page before further implementation

### Visual Audit Rubric

Every page should be judged on these criteria:

1. **Hero role** — does the opener contain a real visual argument?
2. **Image authority** — do the visuals feel documentary, human, or source-led?
3. **Image scale** — are the most important visuals big enough to matter?
4. **Image sequence** — does the page sustain visual pacing after the hero?
5. **Surface contrast** — do sections feel distinct in tone and density?
6. **Hierarchy** — does the page clearly establish what matters first, second,
   and third?
7. **Homepage parity** — would this page feel like it belongs to the same
   product without apologizing for itself?

### Component Strategy

This workstream is allowed to extend or create shared compositions when the same
visual problem appears on multiple routes. Likely patterns include:

- image-led chapter hero support blocks
- asymmetric figure groups
- documentary/source callout bands
- stronger section-divider moments
- editorial comparison or synthesis panels

New shared components are justified only when they support multiple pages and do
not reduce local authorship.

### Image Strategy

Image decisions should follow this order of preference:

1. existing documentary portraits or institutional images in `public/media/`
2. existing generated illustrations already tied to the narrative model
3. source anchors already registered in `lib/narrative-data.ts`
4. new generated or processed images only when the sprint doc explicitly calls
   for them

Generated images must not be used as generic filler when better documentary
material already exists.

## Testing Strategy

For every page sprint:

1. run page-relevant app tests after each implementation block
2. run `npm run test -- --run tests/app` after the page sprint is complete
3. run `npm run build` after any sprint that changes shared layout, shared CSS,
   or image references
4. when possible, inspect the route at desktop and mobile widths before closing
   the sprint

Visual correctness is not considered verified by typecheck alone. Screenshot or
browser review is part of the intended QA process for this workstream.

## Security Considerations

- No new runtime data sources are introduced.
- All images remain local static assets or already-approved source anchors.
- No new dependencies should be added for visual polish alone.

## Sprint Plan

### Sprint 0 — Era 1 Visual Thesis And Documentary Opener

Audit `app/eras/precursors-to-machine-intelligence/page.tsx` against the
homepage, fix the opening image strategy, and establish a more credible image
rhythm for the first chapter.

### Sprint 1 — Era 2 Field-Formation Upgrade

Bring `app/eras/computation-information-field-formation/page.tsx` to homepage
standard with stronger image-bearing field formation, institutions, and source
objects near the top of the route.

### Sprint 2 — Era 3 Symbolic Ambition Upgrade

Rework `app/eras/symbolic-optimism-and-early-ai-programs/page.tsx` so symbolic
optimism feels like a real moment of confidence and institutional force rather
than a sequence of equal-weight cards.

### Sprint 3 — Era 4 Winter Contrast Upgrade

Redesign `app/eras/knowledge-systems-critique-and-the-first-ai-winter/page.tsx`
to visually express constraint, usefulness, critique, and contraction without
turning the page into a monotone warning wall.

### Sprint 4 — Era 5 Statistical Revival Upgrade

Improve `app/eras/statistical-learning-and-network-revival/page.tsx` with a
clearer methodological and institutional visual story, reducing repeated dense
card rhythm.

### Sprint 5 — Era 6 Breakthrough Upgrade

Recompose `app/eras/deep-learning-breakthroughs/page.tsx` around stronger human
and architectural visuals so the chapter feels like a true breakthrough rather
than a summary of methods.

### Sprint 6 — Era 7 Modern Stack Upgrade

Push `app/eras/foundation-models-and-generative-ai/page.tsx` to homepage-grade
exhibition quality, with disciplined public/deployment imagery and stronger
visual synthesis.

### Sprint 7 — Reading Map, People, And Guide Surfaces

Apply the same homepage-parity standard to:

- `app/reading-maps/intellectual-lineage/page.tsx`
- `app/people-and-institutions/page.tsx`
- `app/guides/embeddings-latent-space-and-llm-math/page.tsx`

### Sprint 8 — QA Pass

Run a dedicated QA sweep across all modified routes, focusing on:

- image role and crop quality
- section rhythm and spacing
- responsive composition
- regressions in shared components and CSS

## Future Considerations

- A later workstream may formalize reusable chapter-divider or visual-rhythm
  components if enough patterns stabilize.
- If the repo grows a stronger image archive, some generated chapter visuals may
  be replaced by more documentary material.
