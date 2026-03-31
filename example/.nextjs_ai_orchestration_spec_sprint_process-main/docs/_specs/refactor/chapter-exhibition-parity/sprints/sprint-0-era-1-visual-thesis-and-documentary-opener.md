# Sprint 0 — Era 1 Visual Thesis And Documentary Opener

## Header

- Goal: audit `app/eras/precursors-to-machine-intelligence/page.tsx` against
  the homepage and redesign the page so its opener, portraits, and image rhythm
  feel like a true exhibition chapter rather than a text-first stack.
- Spec sections:
  - Problem Statement 1, 2, 3, 4, 6
  - Initial Evidence From The Era 1 Audit
  - Design Goals 1 through 6
  - Architecture: Page Audit Method, Visual Audit Rubric, Image Strategy
- Prerequisite: existing shared chapter/editorial system remains in place and
  tests are green before starting implementation

## Available Assets

| Asset                                                  | Verified details                                                                                                                | How this sprint uses it                                                            |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `app/eras/precursors-to-machine-intelligence/page.tsx` | Current route already uses `ChapterHero`, `ChapterSection`, `EditorialSummaryGrid`, `EditorialCardGrid`, `HistoricalAnchorGrid` | Primary file under redesign                                                        |
| `components/content/chapter/chapter-hero.tsx`          | Hero exposes lead column plus support slot through `children` and adjacent nav                                                  | Allows a redesigned visual support composition without replacing the chapter shell |
| `components/media/focal-image.tsx`                     | Wraps `next/image` with focal-point support                                                                                     | Required for all lead and portrait imagery                                         |
| `components/ui/panel.tsx`                              | Warm and subtle panel surfaces already exist                                                                                    | Can support feature and support image modules                                      |
| `app/globals.css`                                      | Contains chapter theme rules plus `chapter-theme--precursor` overrides                                                          | Receives the new Era 1 visual rules                                                |
| `lib/narrative-data.ts`                                | Verified Era 1 anchors: `lovelace-analytical-engine`, `boole-to-turing`; verified generated illustration: `era-1-precursors`    | Supplies documentary/source visuals already available in repo                      |
| `public/media/wikimedia/ada-lovelace.webp`             | Local portrait exists                                                                                                           | Candidate for feature-scale human opener                                           |
| `public/media/wikimedia/charles-babbage.webp`          | Local portrait exists                                                                                                           | Candidate for supporting figure block                                              |
| `public/media/wikimedia/george-boole.webp`             | Local portrait exists                                                                                                           | Candidate for supporting figure block                                              |
| `public/media/generated/era-1-precursors.webp`         | Local generated illustration exists                                                                                             | May remain only if its role is clearly secondary and specific                      |
| `tests/app/chronology-expansion.test.tsx`              | Covers Era 1 route rendering and adjacent-era handoff                                                                           | Must stay green                                                                    |
| `tests/app/exemplar-era-package.test.tsx`              | Covers the first era package rendering                                                                                          | Must stay green                                                                    |

## Audit Conclusions To Honor

Implementation must treat these as hard requirements, not optional style notes:

1. the current lead image cannot behave like decorative wallpaper
2. the page must introduce human presence near the top
3. the lead visual must support more than one-third of the page argument
4. the signal-card stack under the hero should not survive unchanged if it
   keeps the page visually lopsided
5. the page needs image rhythm after the opener, not only one image event

## Tasks

### 1. Re-audit the opener before editing

Read the homepage opener and the Era 1 opener side by side. Confirm which
current elements should survive and which should be replaced.

Required output of this task:

- one sentence describing the surviving core of the Era 1 opener
- one sentence describing the visual role of the new lead image
- one sentence describing what image should become secondary or be removed

Verify:

```bash
npm run test -- --run tests/app/chronology-expansion.test.tsx
```

### 2. Replace the current lead-image strategy with a real documentary opener

Rework the hero support block so the opening visual is driven by one of these:

- Ada Lovelace portrait paired with source-object framing
- Analytical Engine or manuscript object paired with human presence
- a split composition that gives both person and source equal interpretive role

The generated `era-1-precursors.webp` image must not remain the sole visual
thesis unless the sprint explicitly proves why it outranks the documentary
material.

Verify:

```bash
npm run test -- --run tests/app/exemplar-era-package.test.tsx
```

### 3. Remove the lopsided signal-card stack if it weakens the hero

The three small support cards beneath or beside the lead image should be either:

- collapsed into a tighter, more integrated support treatment
- converted into a more visual composition
- removed in favor of stronger lead-image and prose balance

Do not keep them unchanged if they still create a right-heavy top composition.

Verify:

```bash
npm run test -- --run tests/app/chronology-expansion.test.tsx
```

### 4. Rebuild the linked-people section as an authored figure composition

The page should not present Boole, Babbage, and Lovelace as three equal generic
cards unless a better hierarchy is impossible. One figure should carry feature
weight and the others should support that hierarchy.

Allowed outcomes include:

- one dominant portrait with two supporting figures
- one feature figure plus a paired comparison block
- one portrait-led editorial strip followed by supporting person cards

Verify:

```bash
npm run test -- --run tests/app/exemplar-era-package.test.tsx
```

### 5. Add at least one additional visual rhythm change after the opener

After the hero section, the page must contain at least one more meaningful image
or documentary visual moment before the final source anchors. This can be:

- a source-object band
- a figure callout section
- a stronger document/teaching-card visual treatment

The goal is to prevent a single-image opener followed by a long return to text
grids.

Verify:

```bash
npm run test -- --run tests/app
```

### 6. Tune CSS and shared composition only as needed

Any CSS added for Era 1 should stay scoped to the chapter theme or to reusable
chapter-image patterns that other pages are likely to need. Avoid global style
drift with no page-level justification.

Verify:

```bash
npm run build
```

## Completion Checklist

- [ ] Era 1 opens with a credible documentary or human visual thesis
- [ ] The lead image supports the page argument instead of acting as wallpaper
- [ ] The top composition no longer feels visually lopsided
- [ ] Boole, Babbage, and Lovelace are presented with stronger hierarchy
- [ ] The page contains more than one meaningful image event
- [ ] App tests pass
- [ ] Build passes

## QA Notes

QA for this sprint must inspect the route visually at desktop and mobile widths.
Passing tests alone is not sufficient because the sprint's core requirement is
image quality and composition.
