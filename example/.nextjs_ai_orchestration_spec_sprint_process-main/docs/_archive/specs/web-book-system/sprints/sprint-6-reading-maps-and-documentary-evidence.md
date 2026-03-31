# Sprint 6 — Reading Maps And Documentary Evidence

## Header

- Goal: turn the reading map into a true documentary-evidence companion rather
  than a detached bibliography or dense reference wall.
- Spec sections:
  - Page Taxonomy
  - Content Specification
  - Narrative Information Architecture: Reading Map Responsibilities
  - Narrative Site Map Matrix
  - Acceptance Criteria By Designer Lens
- Prerequisite: `feat: implement Web Book System Sprint 5 — Era Chapter Batch B And Modern Bridges`
- Expected test count: `16 existing + 1 updated = 16 total`

## Available Assets

| Asset                                            | Verified details                                | How this sprint uses it                               |
| ------------------------------------------------ | ----------------------------------------------- | ----------------------------------------------------- |
| `app/reading-maps/intellectual-lineage/page.tsx` | Existing reading map route                      | Primary target                                        |
| documentary image and anchor data                | Already used across content routes              | Must support grouped evidence and explanatory framing |
| shared page furniture from Sprint 3              | Available for documentary bands and transitions | Must be reused rather than re-invented                |

## Tasks

### 1. Reorganize the reading map into editorial evidence clusters

Required outcomes:

- papers are grouped meaningfully
- each group explains why the documents matter
- chronology remains visible as the governing frame

Verify:

```bash
npm run lint
npm run typecheck
```

### 2. Add clearer re-entry paths back to chronology and relevant eras

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

- [ ] Reading map is grouped editorially
- [ ] Evidence clusters explain why documents matter
- [ ] Page remains subordinate to the chronology spine
- [ ] Reader can return to narrative sequence easily

## QA Deviations

None.
