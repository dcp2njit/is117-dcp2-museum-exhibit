# Sprint 3 — Era 7 Synthesis And QA

## Header

- Goal: refactor Era 7 into a stronger synthesis chapter and finish chronology
  QA across the seven-era sequence.
- Spec sections:
  - Problem Statement 4, 5
  - Design Goals 1, 2, 3, 4, 5, 6
  - Architecture: Shared Era Pattern, Rollout Clusters, Supporting Assets
  - Testing Strategy: Required Test Categories, Baseline
- Prerequisite: `feat: implement Era Chapters Sprint 2 — Era 5 and Era 6 technical bridges`
- Expected test count: `17 existing + 1 new = 18 total`

## Available Assets

| Asset                                                   | Verified details                                                                                                                                               | How this sprint uses it                                             |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `app/eras/foundation-models-and-generative-ai/page.tsx` | Current Era 7 route already includes milestone anchors, `GuideCallout`, linked people, concept cards, and `NarrativeCard`-based people and institution batches | Gains the final synthesis treatment                                 |
| `components/content/narrative-card.tsx`                 | Already powers the sourced documentary visuals for the current era                                                                                             | Remains the core documentary card pattern                           |
| `app/people-and-institutions/page.tsx`                  | Supplies the broader cast-and-institution layer for the public AI era                                                                                          | Helps Era 7 connect back to the companion cast surface              |
| chronology-era tests in `tests/app/`                    | Existing suite already covers era routes in clusters                                                                                                           | Receives final regression updates for the completed chapter rollout |

## Tasks

### 1. Refactor Era 7 into a synthesis chapter

Required outcomes:

- one central systems or synthesis block tying together foundation models,
  embeddings, multimodality, interpretability, and deployment
- stronger explanation of why the public AI era is a historical chapter rather
  than an endless present
- clearer connection back to the rest of the chronology

Verify:

```bash
npm run lint
npm run typecheck
```

### 2. Audit and polish chronology handoffs across all seven eras

Required outcomes:

- adjacent-era navigation language is consistent
- chapter endings point readers forward coherently
- no era feels structurally abandoned after the rollout

Verify:

```bash
npm run lint
npm run build
```

### 3. Run final chronology-focused test and verification pass

Refresh era-route tests as needed, then run the full suite.

Verify:

```bash
npm run test
npm run lint
npm run typecheck
npm run build
```

## Completion Checklist

- [ ] Era 7 has a synthesis-centered chapter structure
- [ ] Cross-era handoffs are consistent across the chronology
- [ ] Chronology-route tests are updated for the final rollout
- [ ] Full verification passes

## QA Deviations

None.
