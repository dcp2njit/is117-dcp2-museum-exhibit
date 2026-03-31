# Sprint 1 — Reading Map And Cast Page

## Header

- Goal: refactor the reading map and people/institutions page so they behave
  like companion chapters rather than reference indexes.
- Spec sections:
  - Problem Statement 2, 3
  - Design Goals 2, 3, 4, 5
  - Architecture: Target Routes, Reading Map Model, Cast And Institution Model
  - Testing Strategy: Required Test Categories, Baseline
- Prerequisite: `feat: implement Narrative Surfaces Sprint 0 — homepage and navigation chapter`
- Expected test count: `14 existing + 2 new = 16 total`

## Available Assets

| Asset                                            | Verified details                                                                                                         | How this sprint uses it                                     |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| `app/reading-maps/intellectual-lineage/page.tsx` | Current live reading-map route already teaches the chronology through decisive texts and interpretability/safety threads | Gains pacing, cluster framing, and stronger chapter rhythm  |
| `app/people-and-institutions/page.tsx`           | Current route renders people, institutions, and historical anchors using `NarrativeCard` and `GuideCallout`              | Is regrouped into a cast-and-institutions companion page    |
| `components/content/narrative-card.tsx`          | Already supports image, official link, source record, and optional social links                                          | Remains the core card format inside the regrouped cast page |
| `tests/app/learning-bridges.test.tsx`            | Already covers the reading map and math guide                                                                            | Must reflect structural changes to the reading map          |
| `tests/app/people-and-institutions.test.tsx`     | Existing people-page coverage is present in the repo                                                                     | Must be updated for cast-style grouping                     |

## Tasks

### 1. Refactor the reading map into paced paper clusters

Update the reading map so it still preserves source density but adds:

- clear cluster intros
- selective emphasis markers
- better transitions between era groupings
- more visible explanation of why each cluster matters historically

Verify:

```bash
npm run lint
npm run typecheck
```

### 2. Refactor the people-and-institutions route into a grouped cast page

Reorganize the route around narrative roles rather than one flat roster.

Required outcomes:

- people are grouped into defensible story roles
- institutions are framed as historical actors, not just logos or names
- early-era source anchors remain visible as grounding devices

Verify:

```bash
npm run lint
npm run build
```

### 3. Refresh the route-level copy to match the multimedia-book model

Ensure the reading map and cast page use the shared chapter system and read as
part of the same product language as the homepage.

Verify:

```bash
npm run lint
```

### 4. Update learning-surface and cast-page coverage

Revise tests so they assert on the new grouped structures and preserved key
links.

Verify:

```bash
npm run test
npm run build
```

## Completion Checklist

- [ ] The reading map is paced through clearer paper clusters
- [ ] The people-and-institutions route is grouped as a cast page
- [ ] Shared chapter patterns are visible on both routes
- [ ] Learning-surface and people-page tests are updated
- [ ] Full verification passes

## QA Deviations

None.
