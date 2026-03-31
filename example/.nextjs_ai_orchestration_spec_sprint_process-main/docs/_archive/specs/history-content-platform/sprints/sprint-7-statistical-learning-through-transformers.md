# Sprint 7 — Statistical Learning Through Transformers

## Header

- Goal: implement Era 5 and Era 6 so the site covers the statistical-learning
  turn, network revival, deep-learning breakthroughs, and the transformer shift
  that leads directly into the foundation-model period.
- Spec sections:
  - Problem Statement 1, 4, 6
  - Design Goals 1, 2, 4, 5, 8, 9
  - Architecture: Audience Model, Content Model, Information Architecture,
    Guide Commentary System, Editorial And Learning Model,
    Technical-Concept Teaching Layer, Repository Boundaries
  - Security: Repository Accuracy, No False Authority, Educational Integrity,
    Accessible Learning Surface
  - Testing Strategy: Artifact Accuracy, Concept Coverage,
    Consistency Review, Workflow Verification
  - Prerequisite: `docs: complete Sprint 6 QA — symbolic optimism through first AI winter`
  - Expected test count: `6 existing + 1-2 new = 7-8 total` depending on the
    rendered route and concept coverage

## Available Assets

This sprint builds the bridge from the symbolic/knowledge era into the modern
technical lineage that students need to understand before the LLM period.
During Sprint Doc QA, verify the current live chronology and updated entity set
from Sprint 6.

| Asset                                                                  | Expected verified details at QA time                                                                        | How this sprint uses it                                                      |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `docs/_specs/history-content-platform/spec.md`                         | Technical-concept teaching requirements explicitly include neural networks, deep learning, and transformers | Governs the concept coverage required by this sprint                         |
| `docs/content/architecture/era-map.md`                                 | Era 5 and Era 6 boundaries are already defined                                                              | Fixes the chronological scope                                                |
| `docs/content/architecture/content-model.md`                           | Era and concept units must connect technical ideas back to chronology and linked institutions or debates    | Keeps the new technical material historical rather than floating abstraction |
| `docs/content/architecture/guide-commentary-model.md`                  | `Why It Matters`, `Misconception Watch`, and bridge-oriented guide rules are stable                         | Reuses the current guide implementation                                      |
| `docs/content/architecture/editorial-and-learning-rules.md`            | Cognitive-load and technical-concept teaching rules are already documented                                  | Keeps Era 5 and Era 6 readable for non-specialists                           |
| `docs/_research/README.md`                                             | Durable research workspace and memo pattern remain active                                                   | Preserves source basis and continuity for the new chronology work            |
| `docs/_research/operations/eai-workflow.md`                            | Verified `eai` workflow and citation-traceability limitation are documented                                 | Prevents unsupported research shortcuts                                      |
| `docs/content/exemplar/era-3-package.md`                               | Era 3 exists as the symbolic-optimism package                                                               | Supplies the immediate backward chronology link                              |
| `docs/content/exemplar/era-4-package.md`                               | Era 4 exists as the critique and first-winter package                                                       | Supplies the direct transition into statistical learning                     |
| `app/eras/symbolic-optimism-and-early-ai-programs/page.tsx`            | Era 3 live route exists with adjacent-era navigation and guide commentary                                   | Defines the rendered pattern the new routes should extend                    |
| `app/eras/knowledge-systems-critique-and-the-first-ai-winter/page.tsx` | Era 4 live route exists with adjacent-era navigation and guide commentary                                   | Defines the latest live handoff into the new chronology                      |
| `components/content/guide-callout.tsx`                                 | Current guide-callout component supports the active live variants                                           | Reuses the current guide implementation                                      |
| `tests/app/chronology-expansion.test.tsx`                              | Era 1 to Era 3 navigation coverage exists                                                                   | Baseline for chronology-chain assertions                                     |
| `tests/app/mid-century-expansion.test.tsx`                             | Focused Era 3 and Era 4 rendered coverage exists                                                            | Baseline for new route and guide assertions                                  |
| `package.json`                                                         | `format:check`, `lint`, `typecheck`, `test`, and `build` commands are current                               | Defines the required verification baseline                                   |

## Tasks

### 1. Create the research basis for Era 5 and Era 6

Extend the durable research layer before writing the next modern-era packages.

Required outcomes:

- create at least one durable research memo covering the statistical-learning
  through transformer arc
- capture reviewed source tables and open verification questions for the new
  eras
- make the memo usable as the source basis for the new era, person, concept,
  institution, and turning-point artifacts

Required artifact targets:

- `docs/_research/topics/statistical-learning-through-transformers.md`

Key implementation details:

- The memo should cover probabilistic learning, statistical NLP, the
  backpropagation revival, deep-learning breakthroughs, and the transformer
  shift at a level sufficient to support the minimum Sprint 7 artifact set.
- If raw `eai` outputs are used during implementation, the durable source basis
  still belongs in the reviewed memo rather than in uncited tool output.

Verify:

```bash
npm run format:check
```

### 2. Implement Era 5 and Era 6 package docs

Create the next two eras in the durable chronology.

Required outcomes:

- implement Era 5 and Era 6 package docs
- make the shift from symbolic dominance to statistical learning and then to
  deep-learning breakthroughs legible for non-specialists
- ensure transformers are introduced as a historically situated breakthrough,
  not as a detached modern buzzword

Required artifact targets:

- `docs/content/exemplar/era-5-package.md`
- `docs/content/exemplar/era-6-package.md`

Key implementation details:

- Era 5 should focus on probabilistic reasoning, machine learning, larger
  datasets, and the revival of neural networks.
- Era 6 should focus on large-scale deep learning, representation learning, and
  transformers as a turning point in modern model capability.

Verify:

```bash
npm run format:check
npm run lint
```

### 3. Add the minimum new technical concept, people, institution, and

turning-point units

Expand the entity set so the modern technical arc is actually teachable.

Required outcomes:

- add the minimum people and concept units needed for Era 5 and Era 6
- add the minimum institution and turning-point units needed to keep the eras
  historically grounded in organizations, benchmarks, and paradigm-shift moments
- make neural networks, deep learning, and transformers explicit concept units
- prepare the conceptual runway for latent space, vector embeddings, and LLMs
  in the final era sprint

Required artifact targets:

- `docs/content/exemplar/people/geoffrey-hinton.md`
- `docs/content/exemplar/people/yann-lecun.md`
- `docs/content/exemplar/people/yoshua-bengio.md`
- `docs/content/exemplar/concepts/probabilistic-learning.md`
- `docs/content/exemplar/concepts/neural-networks.md`
- `docs/content/exemplar/concepts/backpropagation-revival.md`
- `docs/content/exemplar/concepts/representation-learning.md`
- `docs/content/exemplar/concepts/deep-learning.md`
- `docs/content/exemplar/concepts/transformers.md`
- `docs/content/exemplar/institutions/ibm-research.md`
- `docs/content/exemplar/institutions/google-brain.md`
- `docs/content/exemplar/turning-points/attention-is-all-you-need-and-the-transformer-shift.md`

Key implementation details:

- Use plain language first, then connect each concept to the era that made it
  historically dominant.
- Transformers should be taught as a late-Era-6 turning point that also serves
  as the direct runway into foundation models and LLMs.
- The institution and turning-point set should be sufficient for Era 5 and Era
  6 to satisfy the content-model rule that eras link to institutions or debates
  when the material supports it.

Verify:

```bash
npm run format:check
npm run lint
```

### 4. Implement the Era 5 and Era 6 live routes

Render the statistical-to-transformer chronology in the app.

Required outcomes:

- add live routes for Era 5 and Era 6
- update adjacent-era navigation so the chronology reaches through the
  transformer transition
- use guide commentary where it clarifies statistical methods, scale, or the
  transformer inflection point without overwhelming the main narrative

Required artifact targets:

- `app/eras/statistical-learning-and-network-revival/page.tsx`
- `app/eras/deep-learning-breakthroughs/page.tsx`
- updates to the latest prior era route created in Sprint 6

Key implementation details:

- At least one guide intervention should clarify that deep learning is not the
  same thing as neural networks in the abstract; it is a particular scale and
  training regime breakthrough.
- At least one guide intervention should explain why transformers matter to the
  later LLM and embeddings story.

Verify:

```bash
npm run format:check
npm run lint
```

### 5. Expand automated coverage for the modern pre-LLM arc

Add focused tests for the new routes and key chronology claims.

Required outcomes:

- add rendered coverage for Era 5 and Era 6
- verify adjacent-era navigation continues across the new routes
- verify the transformer handoff is explicitly present in the rendered content

Required artifact targets:

- `tests/app/modern-ml-expansion.test.tsx`

Verify:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
```

## Completion Checklist

- [ ] Research memo exists for the statistical-learning through transformer arc
- [ ] Era 5 and Era 6 package docs exist
- [ ] Minimum new modern people, concepts, institutions, and turning-point docs exist
- [ ] Live routes exist for Era 5 and Era 6
- [ ] Adjacent-era navigation now reaches the transformer transition
- [ ] Neural networks, deep learning, and transformers are taught explicitly
- [ ] Verification matches the rendered expansion

## QA Deviations

None.

## QA Report

Verdict: PASS (3 issues resolved)

Audit summary:

- Sprint 7 is the correct next implementation sprint because Sprint 6 is now
  QA-closed and the era map already defines Era 5 and Era 6 as the next bounded
  chronology expansion.
- The sprint remains aligned with the feature spec by extending chronology into
  statistical learning and transformers while keeping those technical concepts
  tied to historical eras, linked entities, and the existing guide-commentary
  system.
- The sprint now carries forward the repo's research-basis and cross-linking
  rules explicitly enough for implementation.

Resolved issues:

1. The original Sprint 7 draft moved directly into new era and concept
   implementation without first creating a durable research basis for the
   statistical-learning-through-transformers arc. That would have violated the
   feature's research workflow and source-basis rules, which require new
   content units to be grounded in reviewed research memos rather than ad hoc
   prose. The sprint now begins with a concrete research-memo task and artifact
   target under `docs/_research/topics/`.
2. The original entity-expansion task omitted institution and turning-point
   artifacts even though the content model requires eras to link institutions or
   debates when the material supports it, and Era 5 through Era 6 materially
   depend on research organizations and the transformer shift as a historical
   turning point. The sprint now names a minimum institution and turning-point
   set and makes that requirement explicit in the task details and completion
   checklist.
3. The original asset inventory and verification baseline were too generic for
   a post-QA chronology sprint. The asset table now names the concrete Sprint 6
   routes, tests, research workflow docs, and architecture files that govern the
   work, and the expected test count now matches the current verified baseline.

Verification:

- `npm run format:check`
