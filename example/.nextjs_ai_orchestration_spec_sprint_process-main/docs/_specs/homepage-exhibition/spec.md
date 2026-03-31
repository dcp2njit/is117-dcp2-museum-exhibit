# Homepage Exhibition Redesign — Spec

> **Status:** Planned

## Problem Statement

The homepage has strong intellectual architecture — a thesis-first opening, a
chronological spine, branching navigation, and a reading-model panel — but its
visual execution fails to match that ambition. A curatorial audit conducted at
desktop (1440 px) and mobile (390 px) viewports identified seven concrete
problems that undermine the page's effectiveness as an exhibition space.

### Evidence Table

| #   | Problem                                                       | Evidence                                                                                  | Impact                                                                                              |
| --- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 1   | Chronology section has zero images across 7 era cards         | DOM audit: 0 `<img>` elements inside `#home-chronology`                                   | The narrative spine — the most important section — reads as a text wall. Visitors scroll past it.   |
| 2   | External image URLs are fragile                               | Mobile audit: OpenAI office `.webp` from `images.ctfassets.net` reports `naturalWidth: 0` | Broken images destroy credibility. External URLs can rot without warning.                           |
| 3   | Scenes section duplicates Opening and Chronology destinations | 5 of 5 Scenes entries link to routes already reachable from Opening or Chronology cards   | Visitors see the same destinations 4–5 times. Cognitive load increases; perceived choices decrease. |
| 4   | No visual breathing room between dense sections               | 4,901 px of content with no full-bleed visual break                                       | The page feels like one undifferentiated scroll. Sections blur together.                            |
| 5   | Reading Model section assumes visitor already cares           | "Branch without breaking the argument" appears 2,500 px into the page                     | By the time visitors reach it, those who needed permission to branch have already left.             |
| 6   | Ada Lovelace portrait used twice                              | Same image in Opening hero and Opening support visual                                     | Reuse signals a thin media library, not curatorial intention.                                       |
| 7   | Scenes grid has 5 entries with 37 total headings on page      | Heading audit: 37 `<h*>` elements across a single page                                    | "Label fatigue" — too many headings dilute the hierarchy and exhaust attention.                     |

### What Is Working

- **Opening section** is strong: thesis-first H1, paired deck text, hero
  visuals, clear primary routes. Don't break this.
- **Chronology editorial content** (titles, descriptions, ledger items,
  macro-arc phases) is well-written and historically grounded.
- **Design system** (ink scale, surface-warm palette, golden-ratio type scale)
  is coherent and distinctive.
- **Mobile horizontal scroll** for era cards is a good interaction pattern.
- **Dark panel** in Reading Model section provides useful contrast.

---

## Design Goals

1. **Give every era card a signature image.** Seven AI-generated illustrations,
   one per era, anchored in the historical subject matter. Each image makes an
   era visually distinct and scroll-stopping.

2. **Eliminate external image dependencies.** Every image on the homepage is
   served from `public/media/`. No CDN URLs, no runtime fetches, no broken
   hotlinks.

3. **Add a full-bleed visual divider** between the Chronology and Reading
   Model sections to create breathing room and signal a narrative shift.

4. **Simplify Scenes to 3 entries.** Remove duplicates of Opening and
   Chronology destinations. Keep only routes that offer genuinely new
   navigation paths.

5. **Surface the "branch and return" concept earlier.** Move the core reading
   model insight into the Opening section as a one-line signal, so visitors
   get permission to explore before they scroll past the chronology.

6. **Use distinct portraits throughout.** No image appears more than once on
   the page. Replace the duplicate Ada Lovelace with a different historically
   relevant portrait.

7. **Reduce heading count by ≥ 30%.** Trim from 37 headings to ≤ 26 through
   section simplification and merging redundant labels.

---

## Architecture

### Image Asset Pipeline

All new images go into `public/media/generated/`. The naming convention:

```
public/media/generated/era-{n}-{slug}.png
```

Examples:

- `era-1-precursors.webp` — mechanical computation (Babbage, Lovelace, Boolean algebra)
- `era-2-symbolic-ai.png` — symbolic reasoning programs (Logic Theorist era)
- `era-3-knowledge-systems.png` — expert systems and the first AI winter
- `era-4-neural-revival.png` — connectionists and statistical learning
- `era-5-deep-learning.png` — deep learning breakthroughs (ImageNet, GPUs)
- `era-6-foundation-models.png` — transformers and generative AI
- `era-7-frontier.png` — the current frontier (GPT, Claude, open questions)

Additional generated images:

- `section-divider-chronology.webp` — full-bleed visual break between Chronology
  and Reading Model

Images are generated using the `eai image` CLI tool (gpt-image-1 model) with
crafted prompts that produce historically grounded, exhibition-quality
illustrations. Each prompt specifies era-accurate subject matter, visual style
consistency, and warm-palette compatibility.

After generation, the `generate-image-focus.mjs` script runs to update
`lib/generated/image-focus-map.ts` with focal-point data for all new images.

### Chronology Card Updates

`components/content/home/chronology-section.tsx` gains an optional image per
era card. The `ChronologyCard` component receives an `imageRef` string and
renders a `FocalImage` above the text content. The content data in
`docs/content/site/homepage.md` adds `imageRef` fields to each era entry.

### Scenes Section Simplification

`components/content/home/scenes-section.tsx` renders 3 entries instead of 5.
The content data in `docs/content/site/homepage.md` removes the 2 entries that
duplicate Opening/Chronology routes. The grid layout adjusts to a simpler
2-column or 3-column arrangement.

### Visual Divider

A new `HomeSectionDivider` component renders a full-bleed image between
sections. It uses `FocalImage` with `fill` layout and a fixed aspect ratio
container. The divider is placed between `ChronologySection` and
`ReadingModelSection` in `editorial-home.tsx`.

### Opening Section Amendments

- Replace duplicate Ada Lovelace `imageRef` with a different portrait from
  the existing `public/media/wikimedia/` library.
- Add a one-line "branch and return" signal to the Opening deck or signal
  cards, extracted from the Reading Model section's core message.

### Reading Model Section Slimming

With the core concept surfaced in Opening, the Reading Model section can shed
its introductory framing and focus on the companion routes and prompt pills.
Remove redundant heading/subheading pairs to cut heading count.

---

## Testing Strategy

1. **Build verification:** `npm run build` produces static output with all new
   images resolved
2. **Existing tests pass:** `npm run test` (Vitest), `npm run typecheck`,
   `npm run lint`, `npm run format:check`
3. **Image integrity:** Every `imageRef` in `homepage.md` resolves to a file
   in `public/media/`
4. **No external image URLs:** `grep` for `http` in homepage content and
   component files returns zero matches for image sources
5. **Heading audit:** DOM inspection at desktop viewport shows ≤ 26 `<h*>`
   elements
6. **Visual regression:** Playwright screenshots at 1440 px and 390 px for
   before/after comparison

---

## Security Considerations

- All images are local static assets — no external CDN dependencies at runtime
- No new environment variables or secrets are introduced
- Image generation prompts do not contain sensitive information
- Generated images are committed to the repository (no build-time generation)

---

## Sprint Plan

### Sprint 0 — Image Asset Generation & Pipeline

Generate all era illustrations and the section divider image using the `eai`
CLI tool. Download and localize any external images currently referenced on the
homepage. Regenerate the image focus map. This sprint is pure asset
preparation — no component code changes.

**Deliverables:**

- 7 era images in `public/media/generated/`
- 1 section divider image in `public/media/generated/`
- External images replaced with local copies in `public/media/`
- Updated `lib/generated/image-focus-map.ts`
- Duplicate Ada Lovelace usage identified and replacement portrait selected

### Sprint 1 — Chronology Visual Enrichment & Breathing Room

Wire era images into chronology cards, add the section divider component,
replace the duplicate portrait in Opening, and add the "branch and return"
signal. This sprint transforms the page's visual density.

**Deliverables:**

- `ChronologyCard` renders `FocalImage` when `imageRef` is present
- `homepage.md` chronology eras have `imageRef` fields
- New `HomeSectionDivider` component between Chronology and Reading Model
- Opening section uses distinct portrait (no duplicates)
- Opening section includes one-line reading model signal
- Updated `homepage.md` content data

### Sprint 2 — Navigation Simplification & QA

Trim Scenes from 5 to 3 entries, slim the Reading Model section, reduce
heading count, and run a full QA pass across all viewports.

**Deliverables:**

- Scenes section renders 3 entries (2 removed from `homepage.md`)
- Reading Model section has reduced introductory framing
- Heading count ≤ 26 (verified by DOM audit)
- No external image URLs on the homepage
- All tests pass (Vitest, typecheck, lint, format, build)
- Playwright screenshots at 1440 px and 390 px confirm visual quality

---

## Future Considerations

- **Era card hover/interaction states:** Micro-interactions on hover could
  further differentiate the chronology cards. Defer to a polish sprint.
- **Responsive image sizes:** Currently all images are `unoptimized`. If
  image payload becomes a Lighthouse concern, consider responsive `srcSet`
  with locally pre-sized variants.
- **Additional generated media:** Timeline visualizations, concept diagrams,
  or animated transitions could enrich the page further. Defer to a
  content-expansion workstream.
- **A/B testing reading model placement:** The "branch and return" signal
  in Opening is a hypothesis. Track engagement to validate.
