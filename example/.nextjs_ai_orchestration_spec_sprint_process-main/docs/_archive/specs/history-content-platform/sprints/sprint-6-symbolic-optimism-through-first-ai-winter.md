# Sprint 6 — Symbolic Optimism Through First AI Winter

## Header

- Goal: extend the live chronology beyond the early origin story by implementing
  Era 3 and Era 4, including the shift from post-Dartmouth symbolic optimism to
  expert systems, critique, and the first AI winter.
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
- Prerequisite: `docs: complete Sprint 5 — content platform QA`
- Expected test count: `4 existing + 1-2 new = 5-6 total` depending on the
  rendered navigation and coverage surface

## Available Assets

This sprint starts the post-QA expansion phase. During Sprint Doc QA, verify the
current architecture, exemplar pattern, and current live routes before
implementation.

| Asset                                                       | Expected verified details at QA time                                                             | How this sprint uses it                                                           |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| `docs/_specs/history-content-platform/spec.md`              | Expansion beyond the minimum slice is now explicitly planned                                     | Governs the chronology expansion without reopening the core feature contract      |
| `docs/content/architecture/era-map.md`                      | Era 3 and Era 4 boundaries are already defined                                                   | Fixes the chronological scope for this sprint                                     |
| `docs/content/architecture/content-model.md`                | Entity sections and cross-linking rules remain the durable baseline                              | Ensures new era, person, concept, and turning-point docs match the existing model |
| `docs/content/architecture/guide-commentary-model.md`       | `Why It Matters`, `Misconception Watch`, and bridge-oriented guide commentary rules are stable   | Reuses the existing GPT-5.4 guide pattern instead of creating a second system     |
| `docs/content/architecture/editorial-and-learning-rules.md` | Cognitive-load, pacing, and media-use rules are already documented                               | Keeps the expansion readable for non-specialists                                  |
| `docs/_research/README.md`                                  | Durable research workspace and memo pattern remain active                                        | Ensures the new chronology expansion preserves source basis and continuity        |
| `docs/_research/operations/eai-workflow.md`                 | Verified `eai` workflow and source-traceability limitation are documented                        | Prevents Sprint 6 from inventing unsupported research workflow shortcuts          |
| `docs/content/exemplar/era-1-package.md`                    | Era 1 exists as the precursor runway                                                             | Supplies the earlier context the new eras must extend from                        |
| `docs/content/exemplar/era-2-package.md`                    | Era 2 exists as the current live exemplar                                                        | Serves as the baseline narrative and route pattern for new era packages           |
| `app/eras/precursors-to-machine-intelligence/page.tsx`      | Era 1 live route exists with adjacent-era navigation                                             | Defines the first chronology-expansion route pattern                              |
| `app/eras/computation-information-field-formation/page.tsx` | Era 2 live route exists with guide commentary, media-state language, and adjacent-era navigation | Defines the current rendered pattern Sprint 6 should extend                       |
| `components/content/guide-callout.tsx`                      | Reusable guide-callout component is live                                                         | Prevents duplicate guide implementations                                          |
| `tests/app/exemplar-era-package.test.tsx`                   | Focused Era 2 coverage exists                                                                    | Baseline for rendered route coverage                                              |
| `tests/app/chronology-expansion.test.tsx`                   | Era 1 to Era 2 navigation coverage exists                                                        | Baseline for multi-era navigation tests                                           |
| `docs/content/media/records/logic-to-ai-diagram.md`         | Diagram plan remains approved for implementation                                                 | Optional support for bridge teaching where symbolic AI is connected back to Era 2 |
| `docs/content/media/records/dartmouth-origin-audio-plan.md` | Audio-plan record remains approved for implementation                                            | Optional continuity reference for chronology recap                                |
| `docs/content/media/records/dartmouth-proposal-image.md`    | Sourced-image record still remains `needs verification`                                          | Preserves the current sourced-image boundary                                      |
| `docs/content/media/records/shannon-theseus-image.md`       | Sourced-image record still remains `needs verification`                                          | Preserves the current sourced-image boundary                                      |

## Tasks

### 1. Create the research basis for Era 3 and Era 4

Extend the durable research layer before writing new historical packages.

Required outcomes:

- create at least one durable research memo covering the post-Dartmouth to
  first-AI-winter arc
- capture reviewed source tables and open verification questions for the new
  eras
- make the memo usable as the source basis for the new era, person, concept,
  institution, and turning-point artifacts

Required artifact targets:

- `docs/_research/topics/post-dartmouth-to-first-ai-winter.md`

Key implementation details:

- The memo should cover symbolic optimism, theorem proving, search,
  expert-systems growth, critique, and winter conditions at a level sufficient
  to support the minimum Sprint 6 artifact set.
- If raw `eai` outputs are used during implementation, the durable source basis
  still belongs in the reviewed memo rather than in uncited tool output.

Verify:

```bash
npm run format:check
```

### 2. Implement Era 3 and Era 4 package docs

Extend the durable content layer with the next two historical eras after
Dartmouth.

Required outcomes:

- implement Era 3 and Era 4 as coherent chronological packages
- preserve the era-first navigation spine
- make the transition from field formation to symbolic optimism and then into
  critique and winter intelligible to non-specialists

Required artifact targets:

- `docs/content/exemplar/era-3-package.md`
- `docs/content/exemplar/era-4-package.md`

Key implementation details:

- Era 3 should focus on symbolic AI, theorem proving, search, heuristics, and
  lab-centered optimism after Dartmouth.
- Era 4 should focus on expert systems, knowledge engineering, critique,
  funding pressure, and the first AI winter.
- The two eras should read as connected but distinct historical phases rather
  than one long undifferentiated middle period.

Verify:

```bash
npm run format:check
npm run lint
```

### 3. Add the minimum new people, concept, institution, and turning-point units

Expand the linked-entity layer to support the new eras.

Required outcomes:

- add the minimum new people and concept units needed to make Era 3 and Era 4
  teachable
- add the minimum institution units needed to keep the eras human, organizational,
  and funding-aware rather than concept-only
- keep cross-links explicit between eras, people, concepts, and turning points
- preserve the content-model discipline established earlier in the feature

Required artifact targets:

- `docs/content/exemplar/people/marvin-minsky.md`
- `docs/content/exemplar/people/allen-newell.md`
- `docs/content/exemplar/people/herbert-simon.md`
- `docs/content/exemplar/people/edward-feigenbaum.md`
- `docs/content/exemplar/concepts/symbolic-ai.md`
- `docs/content/exemplar/concepts/search-and-heuristics.md`
- `docs/content/exemplar/concepts/theorem-proving.md`
- `docs/content/exemplar/concepts/expert-systems.md`
- `docs/content/exemplar/concepts/ai-winter.md`
- `docs/content/exemplar/institutions/mit-artificial-intelligence-laboratory.md`
- `docs/content/exemplar/institutions/darpa.md`
- `docs/content/exemplar/turning-points/lighthill-critique-and-first-ai-winter.md`

Key implementation details:

- Favor the minimum strong set of entities over encyclopedic coverage.
- Explicitly connect the new concepts back to Era 2 and forward to the later
  statistical and deep-learning eras when that lineage improves comprehension.
- The institution set should be sufficient for the era packages to satisfy the
  content-model requirement that eras link to institutions or debates when the
  material supports it.

Verify:

```bash
npm run format:check
npm run lint
```

### 4. Implement the new live routes and adjacent-era navigation

Render the next two eras in the live app.

Required outcomes:

- add live routes for Era 3 and Era 4
- update adjacent-era navigation so the chronology reads continuously from Era 2
  through Era 4
- use guide commentary selectively at the places where optimism, critique, or
  institutional pressure are easy to misunderstand

Required artifact targets:

- `app/eras/symbolic-optimism-and-early-ai-programs/page.tsx`
- `app/eras/knowledge-systems-critique-and-the-first-ai-winter/page.tsx`
- updates to `app/eras/computation-information-field-formation/page.tsx`

Key implementation details:

- Reuse `GuideCallout` rather than introducing a new presentational system.
- At least one guide intervention should clarify that symbolic AI was powerful
  and productive without treating the period as naïve fantasy.
- At least one guide intervention should clarify that the first AI winter was a
  mix of technical, institutional, and expectation-management failure rather
  than a single-cause collapse.

Verify:

```bash
npm run format:check
npm run lint
```

### 5. Expand automated coverage for the new chronology surface

Add focused tests for the new eras and the updated navigation chain.

Required outcomes:

- add focused route-level coverage for Era 3 and Era 4
- verify adjacent-era navigation around Era 2, Era 3, and Era 4
- keep tests proportional to the rendered behavior rather than generic page
  rendering only

Required artifact targets:

- `tests/app/mid-century-expansion.test.tsx`
- updates to `tests/app/chronology-expansion.test.tsx` if needed

Verify:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
```

## Completion Checklist

- [x] Era 3 and Era 4 package docs exist
- [x] Minimum new people, concepts, institutions, and turning-point docs exist
- [x] Live routes exist for Era 3 and Era 4
- [x] Adjacent-era navigation now reaches through Era 4
- [x] Guide commentary remains selective and evidence-aware
- [x] Verification matches the rendered expansion

## QA Deviations

None.

## QA Report

Verdict: PASS (2 issues resolved)

Audit summary:

- Sprint 6 is the correct next implementation sprint because Sprint 5 closed the
  minimum-slice QA pass and the era map already defines Era 3 and Era 4 as the
  next bounded chronology expansion.
- The sprint remains aligned with the feature spec by extending chronology,
  preserving the era-first navigation spine, and keeping GPT-5.4 guide
  commentary subordinate to the main historical narrative.
- The sprint now carries forward the repo's source-basis and cross-linking rules
  explicitly enough for implementation.

Resolved issues:

1. The original Sprint 6 draft asked for new era, person, and concept artifacts
   without first creating a durable research basis for the post-Dartmouth to
   first-AI-winter material. That would have violated the feature's research
   workflow and source-basis rules, which require new content units to be
   grounded in reviewed research memos rather than ad hoc prose. The sprint now
   begins with a concrete research-memo task and artifact target under
   `docs/_research/topics/`.
2. The original entity-expansion task omitted institution artifacts even though
   the content model requires eras to link institutions or debates when the
   material supports it, and Era 3 through Era 4 materially depend on labs,
   funding, and organizational context. The sprint now names a minimum
   institution set and makes that requirement explicit in the task details.

Verification:

- `npm run format:check`

## Implementation QA Report

Verdict: PASS (2 issues resolved)

Audit summary:

- Sprint 6 successfully extends the live chronology through Era 4 with a
  reviewed research memo, durable era and linked-entity artifacts, selective
  GPT-5.4 guide commentary, continuous adjacent-era navigation, and focused
  route-level coverage.
- The implementation stays aligned with the governing spec and Sprint 6 contract
  by grounding the new chronology in reviewed research, preserving the existing
  GuideCallout system, and keeping the rendered expansion proportional to the
  current era-first site surface.
- The remaining QA work was sprint-closeout drift in the sprint doc itself, not
  missing live routes, missing artifacts, or broken verification.

Resolved issues:

1. The sprint doc still reflected pre-QA implementation state: every completion
   checklist item remained unchecked and there was no implementation QA result
   recorded, even though the Sprint 6 routes, durable docs, tests, and full
   verification baseline had already been completed. The checklist is now closed
   and this implementation QA report records the audited final state.
2. The completion checklist did not include the required institution artifacts,
   even though the Sprint 6 contract explicitly required `MIT Artificial
Intelligence Laboratory` and `DARPA` to keep Era 3 and Era 4 grounded in lab
   and funding context. The checklist now reflects the full required artifact
   set instead of understating sprint scope.

Verification:

- `npm run format:check`
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`
