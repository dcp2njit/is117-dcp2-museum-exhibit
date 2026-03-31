# Sprint 4 — Era Chapter Template And Batch A

## Header

- Goal: create the reusable era-chapter composition model and adopt it on the
  first three era pages.
- Spec sections:
  - Page Taxonomy
  - Content Specification
  - Narrative Information Architecture: Era Page Responsibilities
  - Narrative Site Map Matrix
  - Implementation Program: Sprint 3
- Prerequisite: `feat: implement Web Book System Sprint 3 — Shared Design System And Page Furniture`
- Expected test count: `16 existing + 3 updated = 16 total`

## Available Assets

| Asset                                                       | Verified details                                      | How this sprint uses it                                           |
| ----------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------- |
| `app/eras/precursors-to-machine-intelligence/page.tsx`      | Existing Era 1 route                                  | First adopter                                                     |
| `app/eras/computation-information-field-formation/page.tsx` | Existing Era 2 route                                  | Second adopter                                                    |
| `app/eras/symbolic-optimism-and-early-ai-programs/page.tsx` | Existing Era 3 route                                  | Third adopter                                                     |
| `components/content/chapter/*` or existing content patterns | May already exist in partial form from previous specs | Must provide the reusable era model                               |
| `tests/`                                                    | Existing route smoke coverage baseline                | Update or add route-level smoke tests if public structure changes |

## Tasks

### 1. Create the era-chapter composition template

Required outcomes:

- clear chapter opener
- sequence context within seven eras
- documentary or institutional grounding
- forward and backward links

Verify:

```bash
npm run lint
npm run typecheck
```

### 2. Apply the template to Eras 1 through 3

These pages should feel like one authored family rather than three separate page designs.

Verify:

```bash
npm run build
```

### 3. Update targeted tests if public route structure changes materially

Verify:

```bash
npm run test
```

## Completion Checklist

- [ ] Reusable era template exists
- [ ] Eras 1 through 3 adopt the shared model
- [ ] Sequence orientation is visible on each adopted page
- [ ] No page reintroduces card sprawl or shell drift

## QA Deviations

None.
