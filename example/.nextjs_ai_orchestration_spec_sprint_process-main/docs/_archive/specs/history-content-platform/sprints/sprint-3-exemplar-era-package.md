# Sprint 3 — Exemplar Era Package

## Header

- Goal: implement the first coherent content slice for the platform by building
  one exemplar era package with linked people and concept units, live GPT-5.4
  guide commentary, and the associated media and provenance records required by
  the spec.
- Spec sections:
  - Problem Statement 1, 3, 4, 6
  - Design Goals 1, 2, 3, 4, 5, 7, 8, 9
  - Architecture: Content Model, Information Architecture,
    Guide Commentary System, Media System,
    Provenance And Attribution Model, Editorial And Learning Model,
    Technical-Concept Teaching Layer, Repository Boundaries
  - Security: Repository Accuracy, No False Authority, Provenance Discipline,
    Educational Integrity, Accessible Learning Surface
  - Testing Strategy: Artifact Accuracy, Concept Coverage,
    Minimum Slice Completeness, Consistency Review
- Prerequisite: `docs: implement Sprint 2 — media and provenance workflows`
- Expected test count: `1 existing + 1 new = 2 total` minimum if new rendered
  content or utilities are added

## Available Assets

This sprint is the first end-to-end implementation sprint for the content
platform. During Sprint Doc QA, verify the chosen exemplar slice, content-model
artifacts, media records, and the live app structure before implementation.

| Asset                                                       | Expected verified details at QA time                                                                       | How this sprint uses it                                                            |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `docs/_specs/history-content-platform/spec.md`              | Minimum shippable slice requirements are final                                                             | Defines the end-to-end acceptance target                                           |
| `docs/_research/topics/pre-shannon-to-dartmouth.md`         | Exemplar memo exists with chronology, sources, open questions, and media leads                             | Grounds the Era 2 content package in reviewed research                             |
| `docs/content/architecture/content-model.md`                | Entity model for eras, people, concepts, institutions, debates, and guide callouts is final                | Defines the required sections and link expectations for Sprint 3 content artifacts |
| `docs/content/architecture/era-map.md`                      | Era 2 is the selected exemplar slice and Dartmouth closes the era's field-formation arc                    | Fixes the chronological boundary for the exemplar package                          |
| `docs/content/architecture/exemplar-slice-plan.md`          | Era 2 people, concepts, institutions, Dartmouth turning-point target, and guide/media targets are selected | Supplies the exact narrative and entity scope                                      |
| `docs/content/architecture/guide-commentary-model.md`       | `Why It Matters` is the first live pattern and guide commentary must remain visually distinct              | Governs the first implemented guide-callout behavior                               |
| `docs/content/architecture/editorial-and-learning-rules.md` | Editorial pacing, concept-teaching, and media-use rules are final                                          | Keeps the slice serious, accessible, and non-decorative                            |
| `docs/content/media/records/logic-to-ai-diagram.md`         | Diagram plan exists and is approved for implementation                                                     | Supplies the first live diagram connection                                         |
| `docs/content/media/records/dartmouth-origin-audio-plan.md` | Audio plan exists and is approved for implementation                                                       | Supplies the first live audio-plan connection                                      |
| `docs/content/media/records/dartmouth-proposal-image.md`    | Sourced-image record exists but remains `needs verification`                                               | Prevents Sprint 3 from overstating sourced-image readiness                         |
| `docs/content/media/records/shannon-theseus-image.md`       | Sourced-image record exists but remains `needs verification`                                               | Prevents Sprint 3 from treating unverified image reuse as production-ready         |
| `app/` and current tests                                    | Current app shell exists with one baseline test and can host the first exemplar route                      | Defines the live rendering surface and the minimum testing baseline                |
| `package.json`                                              | `lint`, `typecheck`, `test`, `build`, and `format:check` are available and current                         | Defines the required verification baseline                                         |

## Tasks

### 1. Implement the exemplar era narrative

Build the first real era package in the live content system.

Required outcomes:

- implement the chosen era package in repository artifacts and, if this sprint
  includes rendering, in the live app surface
- ensure the era narrative reflects the audience and editorial rules from the
  spec
- keep the content bounded to the approved exemplar slice

Required artifact targets:

- `docs/content/exemplar/`
- `docs/content/exemplar/era-2-package.md`
- `app/eras/computation-information-field-formation/page.tsx`

Key implementation details:

- The era package must be understandable without requiring the full future site.
- Avoid creating a giant content dump when a coherent exemplar is sufficient.
- The era package should treat Dartmouth as the closing turning point of Era 2,
  not as a generic bridge into all later AI history.

Verify:

```bash
npm run format:check
npm run lint
```

### 2. Implement linked people and concept units

Create the linked supporting units required by the exemplar slice.

Required outcomes:

- implement the initial people units tied to the chosen era
- implement the initial concept units tied to the chosen era
- ensure links or references between the era, people, and concepts are real and
  navigable at the artifact level

Required artifact targets:

- `docs/content/exemplar/people/alan-turing.md`
- `docs/content/exemplar/people/claude-shannon.md`
- `docs/content/exemplar/people/warren-mcculloch.md`
- `docs/content/exemplar/people/walter-pitts.md`
- `docs/content/exemplar/people/john-mccarthy.md`
- `docs/content/exemplar/concepts/computability.md`
- `docs/content/exemplar/concepts/information-theory.md`
- `docs/content/exemplar/concepts/threshold-neuron-model.md`
- `docs/content/exemplar/concepts/cybernetics.md`
- `docs/content/exemplar/concepts/machine-intelligence-as-research-agenda.md`
- `docs/content/exemplar/institutions/bell-labs.md`
- `docs/content/exemplar/institutions/dartmouth-summer-research-project-on-artificial-intelligence.md`
- `docs/content/exemplar/turning-points/dartmouth-as-field-formation-not-single-point-invention.md`

Key implementation details:

- The linked-unit set should reflect the Sprint 1 exemplar slice exactly before
  expanding scope.
- Artifact-level navigation may be document links, route links, or both, but it
  must be real rather than implied.

Verify:

```bash
npm run format:check
npm run lint
```

### 3. Implement the GPT-5.4 guide-callout pattern

Introduce live guide commentary in the exemplar slice.

Required outcomes:

- implement at least one reusable guide-callout pattern in the live content
  system
- use that pattern intentionally within the exemplar package
- ensure guide commentary remains distinct from the historical narrative and
  follows the no-false-authority rule

Required artifact targets:

- `components/content/guide-callout.tsx`
- one or more live uses inside `app/eras/computation-information-field-formation/page.tsx`

Key implementation details:

- The first live pattern should be `Why It Matters`.
- `Misconception Watch` may appear if useful near Dartmouth, but it is not a
  substitute for implementing `Why It Matters` first.

Verify:

```bash
npm run format:check
npm run lint
```

### 4. Connect the slice to media and provenance artifacts

Ensure the exemplar slice includes the required multimodal and provenance layer.

Required outcomes:

- connect the era package to at least one diagram or image plan with provenance
  records
- connect the same slice to at least one audio segment plan
- keep the relationship between live content and durable media records explicit

Required artifact targets:

- a live connection to `docs/content/media/records/logic-to-ai-diagram.md`
- a live connection to `docs/content/media/records/dartmouth-origin-audio-plan.md`
- optional live connection to `docs/content/media/records/dartmouth-proposal-image.md` or `docs/content/media/records/shannon-theseus-image.md` only if verification is completed during implementation

Key implementation details:

- Sprint 3 may rely on the diagram and audio-plan records immediately because
  they are approved for implementation.
- Sprint 3 must not present the two sourced-image records as production-ready
  assets unless their current `needs verification` status is resolved during the
  sprint.

Verify:

```bash
npm run format:check
npm run lint
```

### 5. Add focused verification coverage for the exemplar slice

Add or update the minimum automated coverage required by the implemented slice.

Required outcomes:

- add at least one focused test if rendered content, utilities, or route logic
  is introduced
- ensure the test targets the implemented exemplar behavior rather than generic
  boilerplate
- run the full verification baseline required by the final implementation state

Required artifact targets:

- `tests/app/exemplar-era-package.test.tsx`

Verify:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
```

## Completion Checklist

- [x] One exemplar era package is implemented
- [x] Linked people and concept units exist for that slice
- [x] A live GPT-5.4 guide-callout pattern is implemented and used intentionally
- [x] The exemplar slice connects to real media and provenance artifacts
- [x] At least one audio segment plan is tied to the same slice
- [x] Added coverage matches the actual implemented behavior when needed
- [x] Full required verification passes

## QA Deviations

None.

## QA Report

Verdict: PASS (2 issues resolved)

Audit summary:

- Sprint 3 is the correct next implementation sprint because Sprint 1 finalized
  the exemplar content architecture and Sprint 2 finalized the first media and
  provenance layer for the Era 2 slice.
- The sprint remains aligned with the feature spec's minimum shippable slice:
  one era package, linked entities, implemented GPT-5.4 guide commentary, and
  explicit media/provenance connections.
- The sprint now carries forward the exact implementation constraints that were
  resolved in Sprints 1 and 2 instead of leaving the exemplar package too loose.

Resolved issues:

1. The original Sprint 3 asset inventory referred to Sprint 1, Sprint 2, and
   the current app surface too generically for a sprint that is supposed to
   implement the first end-to-end content slice. The asset table now names the
   exact exemplar-slice, guide-model, diagram, audio, and sourced-image records
   that govern Sprint 3.
2. The original Sprint 3 tasks described outcomes but did not encode the most
   important handoff constraint from Sprint 2: the diagram and audio-plan
   records are implementation-ready, but the sourced-image records are still in
   `needs verification` status. The sprint now makes that boundary explicit and
   names a concrete minimum artifact set for the era package, linked units,
   guide-callout component, and focused test coverage.

## Implementation QA Report

Verdict: PASS (2 issues resolved)

Audit summary:

- Sprint 3 successfully implemented the first end-to-end exemplar package for
  the platform across durable docs, a live route, a reusable guide-callout
  component, and focused automated coverage.
- The live slice stays aligned with the Era 2 architecture decisions and does
  not overstate the readiness of sourced-image assets that still require
  verification.
- The implementation meets the spec's minimum-slice contract by connecting one
  era package to linked entities, guide commentary, and approved media-plan
  records.

Resolved issues:

1. The sprint doc still reflected pre-QA implementation state: the checklist was
   left open and the implementation QA result had not been recorded. The
   checklist is now complete and this implementation QA report closes the sprint
   with a durable audit trail.
2. Two Sprint 2 media records still used future-state wording that assumed the
   Era 2 narrative would be finalized during Sprint 3. Because Sprint 3 is now
   implemented, those next-step notes were stale and risked confusing Sprint 4.
   They now point explicitly to the implemented Era 2 route and exemplar docs as
   the baseline for later diagram and audio production work.

Verification:

- `npm run format:check`
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`
