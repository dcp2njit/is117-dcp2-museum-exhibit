# Sprint 1 — Homepage Chronology And Reading Model

## Header

- Goal: turn chronology into a true structural band and the reading-model block
  into a real editorial spread rather than a boxed inset as part 2 of the
  homepage system implementation.
- Spec sections:
  - Non-Negotiable Principles 4, 5, 6, 7, 8, 9
  - Product Priority Order
  - Design System Requirements: Grid, Typography, Color And Contrast, Surfaces
  - Responsive Composition Requirements
  - Content Specification
  - Narrative Information Architecture: Homepage Responsibilities
  - Design Inventory And Audit Rules
  - Acceptance Criteria By Designer Lens
  - Implementation Program: Sprint 1
- Prerequisite: Sprint 0 implemented and verified against the homepage grid and shell reset acceptance checks, including the exact-width browser audit.
- Expected test count: `existing homepage smoke coverage + existing homepage breakpoint audit + any targeted Sprint 1 expectation updates`

## Available Assets

| Asset                                        | Verified details                                                                      | How this sprint uses it                                                             |
| -------------------------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `components/content/home/editorial-home.tsx` | Contains chronology spans, chronology cards, companion routes, and reading-model band | Primary surface for this sprint                                                     |
| `components/ui/section-heading.tsx`          | Shared heading primitive with current typography rules                                | May need refinement for chronology and reading-model hierarchy                      |
| `components/ui/button.tsx`                   | Shared button primitive                                                               | Must remain compatible with reduced CTA noise                                       |
| `tests/app/homepage.test.tsx`                | Homepage smoke test tracks canonical public wording and route emphasis                | Must be updated if chronology or reading-model language changes                     |
| `playwright.config.ts`                       | Browser QA harness with reusable review-width server configuration                    | Must support exact review-width validation for chronology and reading-model changes |
| `tests/browser/homepage-breakpoints.spec.ts` | Breakpoint audit at `390`, `768`, `1024`, `1280`, `1440`, and `1728`                  | Must remain aligned with the homepage's canonical wide-screen and mobile behavior   |
| `lib/site-navigation.ts`                     | Current reading-model and chronology entry labels exist                               | Must remain narratively coherent with page changes                                  |

## Tasks

### 1. Rebuild chronology as a structural strip rather than a card field

Required outcomes:

- chronology reads as one band first and a set of eras second
- long era titles gain enough width or lose enough scale to avoid clotted wraps
- the band feels proportionate on large desktop screens
- the strip still preserves obvious reading order at `390px`, `768px`, and `1024px`
- chronology heading support text should stay in the same governing header split used by the homepage's other major bands rather than reverting to a stranded local composition

Verify:

```bash
npm run lint
npm run typecheck
```

### 2. Recompose the reading-model section as a two-zone editorial spread

Required outcomes:

- left zone establishes the reading model with strong typographic authority
- right zone behaves like evidence of the reading model, not four unrelated mini-cards
- the dark surface acts as a structural pivot in the page sequence
- the spread uses width decisively at `1280px`, `1440px`, and `1728px` rather than floating as a centered inset
- evidence modules on the right should align to one structural logic and not reintroduce equal-height dead space or mini-card sprawl

Verify:

```bash
npm run lint
npm run build
```

### 3. Reduce heading compression in chronology and reading-model modules

Use shared rules where possible. Avoid local hacks for individual titles.

Required outcomes:

- chronology titles and reading-model module titles retain readable measure across the master spec review widths
- any heading treatment added here is reusable for later homepage and interior-route adoption
- if a title is visually composed with forced line breaks or split spans, its accessible name must remain intact for assistive technology and smoke coverage

Verify:

```bash
npm run typecheck
```

### 4. Run browser breakpoint and accessibility QA on chronology and reading-model

Review the changed homepage against the master spec requirements for:

- review widths at `390px`, `768px`, `1024px`, `1280px`, `1440px`, and `1728px`
- semantic heading order after chronology and reading-model restructuring
- accessible names for composed headings and route titles
- landmark clarity and navigation persistence
- visible focus behavior on the light chronology surface and dark reading-model surface
- tap-target clarity for primary homepage actions on small screens
- reading order integrity after large-screen span changes

Required outcomes:

- chronology and reading-model remain readable and navigable at the master spec review widths
- the desktop layout no longer produces decorative dead pockets between chronology, reading-model, and the next band
- browser breakpoint artifacts exist for exact-width review rather than relying on approximate manual resizing
- browser and smoke QA agree on the public homepage wording after any Sprint 1 copy or hierarchy changes

Verify:

```bash
npm run test:browser:homepage
```

### 5. Update homepage smoke coverage if public wording or route emphasis changes

If chronology labels, reading-model copy, or the dominant route language changes,
update the homepage smoke test to reflect the new canonical structure.

Verify:

```bash
npm run test -- tests/app/homepage.test.tsx
```

## Completion Checklist

- [ ] Chronology is a stronger narrative band
- [ ] Reading-model section uses width decisively
- [ ] Long titles no longer collapse into cramped stacks
- [ ] Large-screen review shows structural rather than decorative contrast
- [ ] Shared section-header alignment remains consistent with the governing homepage grid
- [ ] Review widths at `390px`, `768px`, `1024px`, `1280px`, `1440px`, and `1728px` were checked in the browser audit
- [ ] Accessibility review for chronology and reading-model was completed
- [ ] Homepage smoke coverage still passes if wording changed

## QA Deviations

None.
