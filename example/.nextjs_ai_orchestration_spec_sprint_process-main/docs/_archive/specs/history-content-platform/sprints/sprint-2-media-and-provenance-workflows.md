# Sprint 2 — Media And Provenance Workflows

## Header

- Goal: establish the durable media workflow for sourced images, generated
  images, diagrams, and audio planning, including the provenance records and
  per-asset documentation needed for later implementation and QA.
- Spec sections:
  - Problem Statement 3, 5
  - Design Goals 3, 7, 8, 9
  - Architecture: Research Workflow Layer, Media System,
    Provenance And Attribution Model, Editorial And Learning Model,
    Repository Boundaries
  - Security: Provenance Discipline, Educational Integrity,
    Accessible Learning Surface
  - Testing Strategy: Artifact Accuracy, Concept Coverage,
    Workflow Verification, Command Verification
- Prerequisite: `docs: implement Sprint 1 — content model and era map`
- Expected test count: `1 existing + 0 new = 1 total`

## Available Assets

This sprint depends on the research and content foundations established in the
first two sprints. During Sprint Doc QA, verify actual research artifacts,
selected exemplar content, and any existing media references before work
starts.

| Asset                                                       | Expected verified details at QA time                                                                 | How this sprint uses it                                                              |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `docs/_specs/history-content-platform/spec.md`              | Final media and provenance contract exists                                                           | Governs categories, provenance, and minimum slice obligations                        |
| `docs/_research/README.md`                                  | Durable research workspace index exists                                                              | Keeps Sprint 2 inside the repo's research and documentation boundaries               |
| `docs/_research/operations/eai-workflow.md`                 | Verified `eai` behavior, environment mapping, and raw-output limitations are documented              | Prevents Sprint 2 from treating raw tool output as a complete provenance layer       |
| `docs/_research/topics/pre-shannon-to-dartmouth.md`         | Exemplar memo exists with concrete sourced-image candidates, diagram ideas, audio idea, and sources  | Supplies the first real media candidates and source baseline                         |
| `docs/content/architecture/content-model.md`                | Entity model includes institutions, debates/turning points, and guide callouts as first-class units  | Ensures media planning attaches to real content entities rather than floating assets |
| `docs/content/architecture/era-map.md`                      | Era 2 is confirmed as the exemplar slice with a clarified Dartmouth handoff                          | Binds Sprint 2 media work to the selected era package                                |
| `docs/content/architecture/exemplar-slice-plan.md`          | Era 2, initial people/concepts/institutions, Dartmouth turning-point target, and media targets exist | Defines the exact slice and concrete candidate assets Sprint 2 must formalize        |
| `docs/content/architecture/guide-commentary-model.md`       | `Why It Matters` is the first live pattern and guide presentation must stay visually distinct        | Keeps diagram/audio/image choices aligned with the guide layer rather than competing |
| `docs/content/architecture/editorial-and-learning-rules.md` | Media must support comprehension, not decoration                                                     | Governs asset selection, diagram scope, and audio usefulness                         |
| `agent.md`                                                  | Repo rules for provenance, verification, and no false authority are active                           | Keeps asset tracking disciplined                                                     |

## Tasks

### 1. Define the media record model

Create the durable artifact structure used to track individual media assets.

Required outcomes:

- define what a per-asset record must contain
- support sourced, generated, diagram, and audio-planning records
- include provenance, attribution, usage rationale, and status fields
- keep the record structure readable in the repo without external tooling

Required artifact targets:

- `docs/content/media/`
- `docs/content/media/media-record-model.md`
- `docs/content/media/records/`

Key implementation details:

- The record model should distinguish sourced, generated, diagram, and audio-
  planning records without fragmenting the repo into needless sub-systems.
- The model should treat reviewed research memo source tables as the evidence
  baseline when raw `eai` outputs do not preserve citations.

Verify:

```bash
npm run format:check
```

### 2. Define sourced-image and generated-image workflows

Document how image candidates are discovered, evaluated, and recorded.

Required outcomes:

- distinguish sourced images from generated images clearly
- define when generated visuals are preferable to sourced media
- define what evidence and rationale must be recorded for each category
- define how unusable or rejected image candidates should be handled if they
  are documented at all

Key implementation details:

- Do not settle legal doctrine beyond the feature spec.
- Focus on traceability, editorial fitness, and durable documentation.

Required artifact targets:

- `docs/content/media/image-workflows.md`

Verify:

```bash
npm run format:check
```

### 3. Define diagram and mermaid planning workflow

Create the workflow for explanatory diagrams tied to the exemplar content.

Required outcomes:

- define what kinds of diagrams this feature will support first
- define how a diagram idea is proposed, scoped, and recorded
- define how diagrams connect to the era or concept they teach
- include at least one real diagram plan for the exemplar slice

Required artifact targets:

- `docs/content/media/diagram-workflow.md`
- `docs/content/media/records/logic-to-ai-diagram.md`

Key implementation details:

- Use the exemplar slice's existing diagram ideas rather than inventing a new
  abstract example.
- The first diagram plan should support the Era 2 story and not compete with
  the primary narrative or guide layer.

Verify:

```bash
npm run format:check
```

### 4. Define the audio-segment planning workflow

Create the durable process for planned audio segments.

Required outcomes:

- define what an audio-ready content segment plan must contain
- distinguish planning from fully produced audio
- include at least one exemplar audio segment plan tied to the chosen content
  slice
- keep the plan useful for future implementation or production work

Required artifact targets:

- `docs/content/media/audio-workflow.md`
- `docs/content/media/records/dartmouth-origin-audio-plan.md`

Key implementation details:

- The first audio plan should inherit the exemplar memo's existing narration
  idea about Dartmouth naming AI without inventing the field from nothing.
- Audio plans should complement the selected `Why It Matters` and
  `Misconception Watch` teaching moments rather than duplicating them.

Verify:

```bash
npm run format:check
```

### 5. Create the first real provenance records

Produce enough real records to prove the workflow works.

Required outcomes:

- create at least one real media record tied to the exemplar slice
- ensure the record includes provenance and usage rationale
- create at least one record or plan for a diagram or audio asset
- keep every record grounded in actual research artifacts

Required artifact targets:

- `docs/content/media/records/dartmouth-proposal-image.md`
- `docs/content/media/records/shannon-theseus-image.md`

Key implementation details:

- The first real records should come from the Sprint 0 exemplar memo's actual
  sourced-image candidates so Sprint 2 proves the workflow on real artifacts.
- At least one record should tie directly to the Dartmouth turning-point target
  selected in Sprint 1.

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [x] The media record model is documented clearly
- [x] A durable location for per-asset records exists
- [x] Sourced and generated image workflows are defined distinctly
- [x] Diagram planning workflow is defined and includes one real exemplar plan
- [x] Audio planning workflow is defined and includes one real exemplar plan
- [x] At least one real provenance record exists
- [x] The sprint avoids unsupported legal or tooling claims
- [x] `npm run format:check` passes

## QA Deviations

None.

## QA Report

Verdict: PASS (2 issues resolved)

Audit summary:

- Sprint 2 is the correct next phase after Sprint 1 because the exemplar slice,
  guide-callout direction, and initial media targets now exist and can support
  a real media-and-provenance workflow.
- The sprint remains aligned with the governing spec's requirements for
  multimodal planning, provenance discipline, and minimum-slice completeness.
- The sprint now carries forward the specific Sprint 1 decisions that matter to
  implementation instead of referring to the architecture layer generically.

Resolved issues:

1. The original asset inventory referred to Sprint 1 and current media notes in
   broad terms, which was too weak for a handoff sprint that depends on exact
   exemplar and guide decisions. The asset table now names the specific Sprint
   0 and Sprint 1 artifacts that govern Sprint 2, including the Era 2 exemplar
   slice, the Dartmouth turning-point target, the `Why It Matters` pattern, and
   the documented limitation that raw `eai` output is not a complete
   provenance layer.
2. Tasks 1 through 5 previously described outcomes but did not name a precise
   durable artifact set for implementation. The sprint now assigns exact target
   files under `docs/content/media/` and `docs/content/media/records/`, plus
   concrete exemplar records drawn from the real Sprint 0 research memo.

## Implementation QA Report

Verdict: PASS (2 issues resolved)

Audit summary:

- Sprint 2 created the durable media layer required by the spec, including a
  shared media-record model, image/diagram/audio workflows, and real exemplar
  records tied to the selected Era 2 package.
- The implementation stays grounded in the Sprint 0 research memo and the
  Sprint 1 architecture decisions rather than inventing an abstract asset
  system.
- The sourced-image records correctly remain in a `needs verification` state,
  which preserves provenance discipline instead of overstating readiness.

Resolved issues:

1. The sourced-image workflow and media-record model require sourced-image
   records to state what the image depicts and why it is better than a generic
   visual, but the two live sourced-image records did not include those fields.
   Those records now satisfy the model directly.
2. The sprint doc still reflected pre-QA implementation state: the completion
   checklist remained unchecked and the implementation QA result had not been
   recorded. The checklist is now complete and this implementation QA report is
   appended so the sprint closes with a durable audit trail.

Verification:

- `npm run format:check`
