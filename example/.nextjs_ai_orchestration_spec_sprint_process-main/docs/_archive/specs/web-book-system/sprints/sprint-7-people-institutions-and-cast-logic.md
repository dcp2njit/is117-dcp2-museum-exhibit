# Sprint 7 — People, Institutions, And Cast Logic

## Header

- Goal: rebuild the people-and-institutions route as a true cast page grounded
  in narrative grouping rather than directory logic.
- Spec sections:
  - Page Taxonomy
  - Content Specification
  - Narrative Information Architecture: People And Institutions Responsibilities
  - Narrative Site Map Matrix
  - Acceptance Criteria By Designer Lens
- Prerequisite: `feat: implement Web Book System Sprint 6 — Reading Maps And Documentary Evidence`
- Expected test count: `16 existing + 1 updated = 16 total`

## Available Assets

| Asset                                  | Verified details                                       | How this sprint uses it                      |
| -------------------------------------- | ------------------------------------------------------ | -------------------------------------------- |
| `app/people-and-institutions/page.tsx` | Existing people-and-institutions route                 | Primary target                               |
| people and institution data modules    | Already power route content                            | Must be regrouped editorially and defensibly |
| shared page furniture from Sprint 3    | Available for cast group intros and documentary blocks | Must be reused                               |

## Tasks

### 1. Reorganize the page into cast logic groups

Expected group logic may include builders, critics, institutions, deployment actors,
or equivalent historically defensible clusters.

Verify:

```bash
npm run lint
npm run typecheck
```

### 2. Add stronger ties back to chronology and key eras

Verify:

```bash
npm run build
```

### 3. Update tests if public structure changes

Verify:

```bash
npm run test
```

## Completion Checklist

- [ ] Route behaves like a cast page rather than a directory
- [ ] Group labels are historically defensible
- [ ] Reader can understand why actors matter to specific eras
- [ ] Route remains subordinate to the chronology spine

## QA Deviations

None.
