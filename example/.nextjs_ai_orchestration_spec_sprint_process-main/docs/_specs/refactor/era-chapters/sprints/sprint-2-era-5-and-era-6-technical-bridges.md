# Sprint 2 — Era 5 And Era 6 Technical Bridges

## Header

- Goal: refactor Era 5 and Era 6 so the transition from statistical learning
  to deep learning and transformers becomes easier to read and teach.
- Spec sections:
  - Problem Statement 2, 5
  - Design Goals 1, 2, 3, 4, 5, 6
  - Architecture: Shared Era Pattern, Rollout Clusters
  - Testing Strategy: Required Test Categories, Baseline
- Prerequisite: `feat: implement Era Chapters Sprint 1 — Era 3 and Era 4 contrast`
- Expected test count: `16 existing + 1 new = 17 total`

## Available Assets

| Asset                                                        | Verified details                                                                                 | How this sprint uses it                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| `app/eras/statistical-learning-and-network-revival/page.tsx` | Current Era 5 route explains backpropagation, probabilistic methods, and learned representations | Gains clearer symbolic-versus-statistical teaching bridges    |
| `app/eras/deep-learning-breakthroughs/page.tsx`              | Current Era 6 route covers deep learning consolidation and the transformer turning point         | Gains stronger scaling and benchmark runway into Era 7        |
| `app/guides/embeddings-latent-space-and-llm-math/page.tsx`   | Existing guide is already the strongest technical teaching model in the site                     | Serves as a style reference for clearer technical explanation |

## Tasks

### 1. Refactor Era 5 around the methodological turn

Required outcomes:

- a clearer comparison between symbolic and statistical approaches
- stronger explanation of why data, probability, and evaluation changed the field
- one visual or structured teaching block that clarifies the methodological shift

Verify:

```bash
npm run lint
npm run typecheck
```

### 2. Refactor Era 6 around acceleration and transformer runway

Required outcomes:

- stronger benchmark or scaling story
- clearer explanation of how deep learning becomes infrastructure for Era 7
- more visible bridge from deep learning breakthroughs to foundation models

Verify:

```bash
npm run lint
npm run build
```

### 3. Update modern-ML test coverage

Refresh or extend the relevant tests so they assert on the clearer technical
bridge structure in Era 5 and Era 6.

Verify:

```bash
npm run test
```

## Completion Checklist

- [ ] Era 5 better explains the symbolic-to-statistical turn
- [ ] Era 6 better explains scaling and transformer runway
- [ ] The bridge into Era 7 is clearer
- [ ] Modern-ML tests are updated
- [ ] Full verification passes

## QA Deviations

None.
