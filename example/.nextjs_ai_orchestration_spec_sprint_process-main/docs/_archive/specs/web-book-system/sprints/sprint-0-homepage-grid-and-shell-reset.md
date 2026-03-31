# Sprint 0 — Homepage Grid And Shell Reset

## Header

- Goal: establish the canonical homepage grid, reduce shell competition, and
  remove the major structural causes of dead space as part 1 of the homepage
  system implementation.
- Spec sections:
  - Non-Negotiable Principles 1, 3, 5, 6, 8, 9
  - Design System Requirements: Grid, Layout Budgets, Typography, Surfaces
  - Responsive Composition Requirements
  - Narrative Information Architecture: Homepage Responsibilities
  - Acceptance Criteria By Designer Lens
  - Implementation Program: Sprint 1
- Prerequisite: none
- Expected test count: `14 existing + targeted homepage smoke update = 14 total`

## Available Assets

| Asset                                        | Verified details                                                                                 | How this sprint uses it                                                                                  |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| `app/page.tsx`                               | Thin route wrapper that renders `EditorialHome`                                                  | Keeps route orchestration thin while homepage composition changes                                        |
| `components/content/home/editorial-home.tsx` | Current homepage composition with opening band, chronology, reading-model band, and entry scenes | Primary implementation surface                                                                           |
| `components/site/site-header.tsx`            | Tailwind-based editorial shell header                                                            | Must be reduced to a subordinate orientation layer                                                       |
| `components/site/site-footer.tsx`            | Tailwind-based footer with quick-return links and section groups                                 | May need minimal alignment only; full footer close is owned by Sprint 2 as part 3 of the homepage system |
| `components/ui/section-heading.tsx`          | Shared section heading primitive                                                                 | Must remain compatible with homepage hierarchy changes                                                   |
| `lib/site-navigation.ts`                     | Exports primary, secondary, and footer navigation arrays                                         | Must preserve current route semantics                                                                    |
| `tests/app/homepage.test.tsx`                | Homepage smoke test already exists                                                               | Must be updated if public headings or structure change                                                   |

## Tasks

### 1. Lock the homepage to one governing desktop grid

Refactor the homepage so the opening band, chronology band, reading-model band,
and entry-scene region all visibly belong to the same structural system.

Required outcomes:

- no section reads like a medium card floating inside a large canvas
- wide-screen empty space is structural rather than accidental
- the shell no longer competes with the opening chapter for visual priority
- mobile and tablet compositions remain coherent while the desktop grid is tightened

Verify:

```bash
npm run lint
npm run typecheck
```

### 2. Reduce shell dominance and normalize navigation tension

Tighten the header so it behaves as orientation furniture rather than a second
hero. Preserve navigation meaning, but reduce visual competition.

Verify:

```bash
npm run lint
```

### 3. Define homepage section span rules in code

Adjust span logic, frame usage, and section widths in the homepage composition
so review widths at `390px`, `768px`, `1024px`, `1280px`, `1440px`, and
`1728px` show a coherent grid.

Verify:

```bash
npm run build
```

### 4. Run accessibility and responsive QA on the homepage shell and opening bands

Review the changed homepage and shell against the master spec requirements for:

- semantic heading order
- landmark clarity
- visible focus behavior on light and dark surfaces
- tap-target and navigation clarity on small screens
- reading order integrity after responsive rearrangement

Required outcomes:

- the homepage remains readable and navigable at the master spec review widths
- shell changes do not reduce accessibility clarity

Verify:

```bash
npm run lint
npm run typecheck
```

### 5. Update homepage smoke coverage if public structure changes

If the public section wording or route emphasis changes, update the homepage
test to reflect the new canonical structure.

Verify:

```bash
npm run test -- tests/app/homepage.test.tsx
```

## Completion Checklist

- [ ] Homepage sections belong to one governing wide-screen system
- [ ] Header reads as shell, not hero
- [ ] Desktop dead zones are materially reduced
- [ ] Review widths at `390px`, `768px`, `1024px`, `1280px`, `1440px`, and `1728px` were checked
- [ ] Accessibility review for shell and homepage opening bands was completed
- [ ] Homepage smoke coverage still passes

## QA Deviations

None.
