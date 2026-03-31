# Sprint 0 — Era 1 And Era 2 Exemplars

## Header

- Goal: use Era 1 and Era 2 to establish the final exemplar format for the
  chronology chapter system.
- Spec sections:
  - Problem Statement 1, 3, 5
  - Design Goals 1, 2, 3, 4, 5, 6
  - Architecture: Shared Era Pattern, Rollout Clusters
  - Testing Strategy: Required Test Categories, Baseline
- Prerequisite: `feat: implement Reading System Sprint 1 — editorial reading rhythm`
- Expected test count: `13 existing + 2 new = 15 total`

## Available Assets

| Asset                                                       | Verified details                                                                                               | How this sprint uses it                                   |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `app/eras/precursors-to-machine-intelligence/page.tsx`      | Existing Era 1 route already carries the precursor runway material                                             | Gains a stronger scene-led opener and artifact rhythm     |
| `app/eras/computation-information-field-formation/page.tsx` | Existing Era 2 route already includes `LogicToAiDiagram`, documentary story cards, and approved source anchors | Becomes the exemplar chapter format for later eras        |
| `components/content/visualizations/logic-to-ai-diagram.tsx` | Existing live visualization for Era 2                                                                          | Remains part of the exemplar visual pattern               |
| `lib/narrative-data.ts`                                     | Supplies historical anchors used in later-era documentary sections                                             | Continues grounding the early chronology in named sources |

## Tasks

### 1. Refactor Era 1 into a stronger opening chapter

Required outcomes:

- a clearer opening scene or thesis about the prehistory of mechanized thought
- stronger artifact or source-led grounding near the top of the page
- more visible handoff into Era 2

Verify:

```bash
npm run lint
npm run typecheck
```

### 2. Tighten Era 2 into the formal exemplar chapter

Required outcomes:

- preserve the current convergence argument
- adopt the final shared chapter primitives consistently
- make Era 2 the clearest model for later chronology work

Verify:

```bash
npm run lint
npm run build
```

### 3. Update early-chronology test coverage

Refresh or expand the relevant era tests so they assert on the stronger chapter
elements introduced in Era 1 and Era 2.

Verify:

```bash
npm run test
```

## Completion Checklist

- [ ] Era 1 has a stronger opening-chapter treatment
- [ ] Era 2 is the stable exemplar for later chronology work
- [ ] Early-era tests reflect the new structure
- [ ] Full verification passes

## QA Deviations

None.
