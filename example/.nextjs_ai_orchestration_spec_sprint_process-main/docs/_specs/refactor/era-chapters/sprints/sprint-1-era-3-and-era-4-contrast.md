# Sprint 1 — Era 3 And Era 4 Contrast

## Header

- Goal: make Era 3 and Era 4 feel like a deliberate dramatic pair, moving from
  symbolic optimism into critique, limits, and winter.
- Spec sections:
  - Problem Statement 2, 5
  - Design Goals 1, 2, 3, 4, 5, 6
  - Architecture: Shared Era Pattern, Rollout Clusters
  - Testing Strategy: Required Test Categories, Baseline
- Prerequisite: `feat: implement Era Chapters Sprint 0 — Era 1 and Era 2 exemplars`
- Expected test count: `15 existing + 1 new = 16 total`

## Available Assets

| Asset                                                                  | Verified details                                                                         | How this sprint uses it                                       |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `app/eras/symbolic-optimism-and-early-ai-programs/page.tsx`            | Current Era 3 route teaches symbolic AI, heuristics, theorem proving, and early planning | Gains stronger scene, contrast, and lab/institution pacing    |
| `app/eras/knowledge-systems-critique-and-the-first-ai-winter/page.tsx` | Current Era 4 route already covers critique and winter                                   | Is refactored to heighten expectation-versus-limit contrast   |
| shared chapter primitives from Reading System                          | Introduced in the prerequisite feature                                                   | Provide the contrast and transition patterns these pages need |

## Tasks

### 1. Refactor Era 3 around ambition and symbolic confidence

Required outcomes:

- a stronger lab-scene or research-culture opener
- clearer explanation of what symbolic AI thought intelligence was
- better documentary or quote-style support for the era's optimism

Verify:

```bash
npm run lint
npm run typecheck
```

### 2. Refactor Era 4 around disappointment, critique, and institutional correction

Required outcomes:

- a visible contrast structure such as promise versus limit
- stronger framing of criticism, scale problems, and winter conditions
- a cleaner handoff into the statistical and connectionist return of Era 5

Verify:

```bash
npm run lint
npm run build
```

### 3. Update mid-century test coverage

Refresh or extend the relevant era tests to check for the new contrast and
chapter markers in Era 3 and Era 4.

Verify:

```bash
npm run test
```

## Completion Checklist

- [ ] Era 3 reads as a chapter of symbolic ambition
- [ ] Era 4 reads as a chapter of critique and winter
- [ ] The handoff from Era 4 to Era 5 is clearer
- [ ] Mid-century test coverage is updated
- [ ] Full verification passes

## QA Deviations

None.
