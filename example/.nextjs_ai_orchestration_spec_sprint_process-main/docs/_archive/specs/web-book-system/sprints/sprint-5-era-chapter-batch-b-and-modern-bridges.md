# Sprint 5 — Era Chapter Batch B And Modern Bridges

## Header

- Goal: apply the era-chapter model to Eras 4 through 7 and ensure the later
  chapters hand off cleanly to technical guides where complexity increases.
- Spec sections:
  - Page Taxonomy
  - Content Specification
  - Narrative Information Architecture: Era Page Responsibilities, Guide Responsibilities
  - Narrative Site Map Matrix
  - Implementation Program: Sprint 3
- Prerequisite: `feat: implement Web Book System Sprint 4 — Era Chapter Template And Batch A`
- Expected test count: `16 existing + 4 updated = 16 total`

## Available Assets

| Asset                                                                  | Verified details     | How this sprint uses it                   |
| ---------------------------------------------------------------------- | -------------------- | ----------------------------------------- |
| `app/eras/knowledge-systems-critique-and-the-first-ai-winter/page.tsx` | Existing Era 4 route | Adopts shared era model                   |
| `app/eras/statistical-learning-and-network-revival/page.tsx`           | Existing Era 5 route | Adopts shared era model                   |
| `app/eras/deep-learning-breakthroughs/page.tsx`                        | Existing Era 6 route | Adopts shared era model                   |
| `app/eras/foundation-models-and-generative-ai/page.tsx`                | Existing Era 7 route | Adopts shared era model                   |
| `app/guides/embeddings-latent-space-and-llm-math/page.tsx`             | Existing guide route | Must receive better chapter handoff links |

## Tasks

### 1. Apply the shared era template to Eras 4 through 7

Verify:

```bash
npm run lint
npm run typecheck
```

### 2. Strengthen guide handoffs in later eras

Required outcomes:

- modern-era pages acknowledge when concept bridges are needed
- guide links feel like support for the main narrative rather than escape hatches

Verify:

```bash
npm run build
```

### 3. Update route-level tests if necessary

Verify:

```bash
npm run test
```

## Completion Checklist

- [ ] Eras 4 through 7 adopt the shared chapter model
- [ ] Later eras hand off to guides clearly and sparingly
- [ ] Modern chapters remain part of the main narrative spine

## QA Deviations

None.
