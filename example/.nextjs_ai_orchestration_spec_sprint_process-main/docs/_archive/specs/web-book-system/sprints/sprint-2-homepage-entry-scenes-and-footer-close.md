# Sprint 2 — Homepage Entry Scenes And Footer Close

## Header

- Goal: tighten the lower homepage mosaic and convert the footer into a quiet,
  narrative re-entry surface rather than a restart of the card language.
- Spec sections:
  - Design Council Audit Of The Current Spec
  - Design System Requirements: Grid, Typography, Surfaces
  - Content Specification
  - Narrative Information Architecture: Homepage Responsibilities
  - Acceptance Criteria By Designer Lens
  - Implementation Program: Sprint 1
- Prerequisite: Sprint 1 implemented and verified, including the exact-width browser audit and final live homepage critique.
- Expected test count: `existing homepage smoke coverage + existing homepage breakpoint audit + any targeted Sprint 2 expectation updates`

## Available Assets

| Asset                                        | Verified details                                                                                                                             | How this sprint uses it                                                                                         |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `components/content/home/editorial-home.tsx` | Entry-scenes mosaic with variant-based spans; live critique confirmed the opening band still carries substantial support-surface competition | Must make the lower homepage calmer and more editorial rather than adding another field of equal-weight modules |
| `components/site/site-footer.tsx`            | Footer with quick-return block and three section groups; live critique confirmed it still restarts the rounded-card grammar                  | Must become a quieter closing structure and stop reading like a second card deck                                |
| `components/media/focal-image.tsx`           | Shared focal image component                                                                                                                 | Must preserve image quality and crop control while tightening layout                                            |
| `lib/site-navigation.ts`                     | Footer links already expose narrative re-entry routes                                                                                        | Must remain aligned with final footer close                                                                     |
| `playwright.config.ts`                       | Browser QA harness at the exact master-spec review widths already exists                                                                     | Must be used for Sprint 2 verification rather than approximate manual resizing                                  |
| `tests/browser/homepage-breakpoints.spec.ts` | Existing audit covers homepage behavior at `390`, `768`, `1024`, `1280`, `1440`, and `1728`                                                  | Must be updated if Sprint 2 changes lower-page or footer expectations                                           |
| `tests/app/homepage.test.tsx`                | Homepage smoke coverage already tracks canonical public wording and route emphasis                                                           | Must remain aligned with any Sprint 2 copy or structure changes                                                 |

## Tasks

### 1. Tighten the entry-scenes mosaic

Required outcomes:

- no obvious dead pockets in the lower homepage at review widths
- card spans are justified by narrative weight, not visual novelty
- image-led and text-led entries compose as one surface
- the lower homepage should reduce visual competition created by the still-dense opening field rather than behaving like a second opening chapter
- one or two entries may carry most of the mass, but the section should still read as a governed field instead of a menu of equally loud supports

Verify:

```bash
npm run lint
npm run typecheck
```

### 2. Reduce the number of perceived card archetypes in the lower homepage

The reader should feel a controlled editorial field rather than a menu of unrelated blocks.

Required outcomes:

- Sprint 2 should reduce, not expand, the number of lower-page visual dialects
- if images, text-led entries, and institution-led entries remain mixed, they should share one stronger compositional logic instead of reading as separate component families
- Sprint 2 should not reopen chronology or reading-model structure, but it must keep the lower half from making those gains feel temporary

Verify:

```bash
npm run lint
```

### 3. Rebuild the footer as a quiet closing system

Required outcomes:

- footer helps the reader re-enter the site with intention
- footer does not restart the homepage’s object language
- footer aligns with the same hierarchy and spacing logic as the shell and homepage
- the current rounded-card restart in the footer should be materially reduced or eliminated
- the footer opener, quick-return links, and section groups should feel like one closing cadence rather than a headline block followed by another card grid

Verify:

```bash
npm run build
```

### 4. Run exact-width browser and accessibility QA on the lower homepage and footer

Review the changed homepage against the master spec requirements for:

- review widths at `390px`, `768px`, `1024px`, `1280px`, `1440px`, and `1728px`
- lower-page compositional continuity after any span or image-mass changes
- footer reading order, landmark clarity, and link discoverability
- visible focus behavior on footer links and lower-page route entries
- agreement between browser QA and homepage smoke coverage after any Sprint 2 copy changes

Required outcomes:

- the lower homepage no longer introduces decorative visual competition after the opening and reading-model bands
- the footer reads as a quiet close at the master-spec review widths instead of a second modular destination field
- browser breakpoint artifacts remain the authoritative review path for Sprint 2 changes

Verify:

```bash
npm run test:browser:homepage
```

### 5. Update homepage smoke coverage if public wording or route emphasis changes

If Sprint 2 changes public section wording, footer labels, or route emphasis,
update the homepage smoke test to reflect the new canonical structure.

Verify:

```bash
npm run test -- tests/app/homepage.test.tsx
```

## Completion Checklist

- [ ] Lower homepage no longer contains obvious compositional voids
- [ ] Entry scenes read as one system
- [ ] Lower-page entries no longer compete with the opening band as a second support field
- [ ] Footer closes the page quietly and clearly
- [ ] Footer no longer restarts the homepage with a second rounded-card grid
- [ ] Reader can re-enter chronology, evidence, and cast paths intentionally
- [ ] Review widths at `390px`, `768px`, `1024px`, `1280px`, `1440px`, and `1728px` were checked in the browser audit
- [ ] Homepage smoke coverage still passes if wording changed

## QA Deviations

None.
