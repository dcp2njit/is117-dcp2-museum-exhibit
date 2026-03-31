# Sprint 0 — Shared Chapter Patterns

## Header

- Goal: create the reusable component and styling layer that lets long routes
  read like chapters instead of uniform section stacks.
- Spec sections:
  - Problem Statement 1, 2, 4, 5
  - Design Goals 1, 2, 3, 4, 5
  - Architecture: Shared Component Layer, Styling Layer, Composition Rules,
    Accessibility And Semantics
  - Testing Strategy: Required Test Categories, Baseline
- Prerequisite: none
- Expected test count: `13 existing + 2 new = 15 total`

## Available Assets

| Asset                                   | Verified details                                                                                                                        | How this sprint uses it                                                     |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `app/globals.css`                       | Defines the current editorial palette, panel system, grids, `guide-callout`, `timeline-card`, `content-card`, and visualization classes | Extends the shared reading language instead of replacing it                 |
| `components/content/guide-callout.tsx`  | Exports `GuideCallout({ variant, title, children })` with variants `why-it-matters` and `misconception-watch`                           | Remains the high-signal instructional callout within the new chapter system |
| `components/content/narrative-card.tsx` | Exports `NarrativeCard` with image, official link, source record, and optional social links                                             | Continues to serve the documentary-card role inside artifact sections       |
| `app/layout.tsx`                        | Wraps all pages in the shared `SiteHeader` and `SiteFooter`                                                                             | Ensures new chapter primitives fit inside the existing site shell           |

## Tasks

### 1. Create the shared chapter component folder and base primitives

Create a reusable component layer for long-form chapter composition.

Expected artifacts:

- `components/content/chapter/`
- chapter hero component
- prose section component
- aside or side-note component
- pull-quote component
- transition component

Key implementation details:

- Keep the primitives server-compatible and presentation-focused.
- Prefer semantic HTML over deeply nested wrapper divs.
- Do not duplicate `GuideCallout` or `NarrativeCard`; compose with them.

Verify:

```bash
npm run lint
npm run typecheck
```

### 2. Extend global editorial styles for chapter reading

Update `app/globals.css` to support the new chapter components.

Required outcomes:

- stronger chapter opener treatment
- prose-width styling distinct from card grids
- quote styling
- inset-note styling
- transition-divider styling
- artifact-band or documentary-strip styling

Key implementation details:

- Preserve the current warm editorial tone.
- Keep the CSS utility-light and route-agnostic.
- Ensure mobile layouts collapse cleanly.

Verify:

```bash
npm run lint
npm run build
```

### 3. Adopt the chapter primitives on one live route as proof of system fit

Apply the new primitives to one already-strong route, preferably Era 2 or the
math guide, so the shared system is validated on a real page.

Required outcomes:

- one route uses the new chapter hero and at least two additional primitives
- the route remains semantically clear and visually stronger

Verify:

```bash
npm run test
npm run build
```

### 4. Add focused automated coverage for the new shared chapter system

Create tests that confirm the new primitives and the adopted route render their
new chapter-level elements.

Expected artifacts:

- one component-oriented chapter-system test
- one updated route test or new route-level test

Verify:

```bash
npm run test
```

## Completion Checklist

- [ ] Shared chapter components exist under `components/content/chapter/`
- [ ] `app/globals.css` supports chapter-level reading patterns
- [ ] One live route adopts the new chapter system
- [ ] New tests cover the shared chapter primitives or adopted route
- [ ] `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build` pass

## QA Deviations

None.
