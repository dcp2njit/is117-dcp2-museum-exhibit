# Sprint 4 — Chronology And Cross-Linking Expansion

## Header

- Goal: expand the platform beyond the first exemplar by extending chronology,
  adding linked entities across multiple eras, and strengthening the site’s
  hybrid navigation and concept-teaching structure without losing the bounded
  editorial discipline established in Sprint 3.
- Spec sections:
  - Problem Statement 1, 4, 6
  - Design Goals 1, 2, 4, 5, 8, 9
  - Architecture: Content Model, Information Architecture,
    Guide Commentary System, Editorial And Learning Model,
    Technical-Concept Teaching Layer, Repository Boundaries
  - Security: Repository Accuracy, No False Authority, Educational Integrity,
    Accessible Learning Surface
  - Testing Strategy: Concept Coverage, Minimum Slice Completeness,
    Consistency Review, Workflow Verification
- Prerequisite: `docs: implement Sprint 3 — exemplar era package`
- Expected test count: `2 existing + 0-2 new = 2-4 total` depending on the
  implementation surface

## Available Assets

This sprint expands a proven content slice rather than inventing a second
system. During Sprint Doc QA, verify the actual Sprint 3 outputs before setting
the exact expansion scope.

| Asset                                                       | Expected verified details at QA time                                                                | How this sprint uses it                                                        |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `docs/_specs/history-content-platform/spec.md`              | Hybrid-navigation and concept-teaching contract is final                                            | Governs expansion without scope drift                                          |
| `docs/content/exemplar/era-2-package.md`                    | One coherent exemplar slice exists with linked people, concepts, institutions, and turning point    | Serves as the baseline narrative and linking model for expansion               |
| `docs/content/exemplar/`                                    | The Sprint 3 doc set exists across people, concepts, institutions, and turning-point units          | Defines the current artifact structure future chronology should extend         |
| `app/eras/computation-information-field-formation/page.tsx` | Live Era 2 route exists and already connects guide commentary and media states                      | Defines the first rendered pattern Sprint 4 should extend rather than replace  |
| `components/content/guide-callout.tsx`                      | `Why It Matters` and `Misconception Watch` are already live variants                                | Reuses the current guide-callout implementation for selective expansion        |
| `tests/app/exemplar-era-package.test.tsx`                   | Focused coverage exists for the current exemplar route                                              | Defines the existing verification baseline for future navigation/content tests |
| `docs/content/media/records/logic-to-ai-diagram.md`         | Diagram plan is approved for implementation and now points forward from the implemented Era 2 slice | Supports later diagram rendering or multi-era concept teaching                 |
| `docs/content/media/records/dartmouth-origin-audio-plan.md` | Audio plan is approved for implementation and now points forward from the implemented Era 2 slice   | Supports later audio or narration expansion                                    |
| `docs/content/media/records/dartmouth-proposal-image.md`    | Sourced-image record still remains `needs verification`                                             | Prevents Sprint 4 from treating the Dartmouth image as ready to ship           |
| `docs/content/media/records/shannon-theseus-image.md`       | Sourced-image record still remains `needs verification`                                             | Prevents Sprint 4 from treating the Shannon / Theseus image as ready to ship   |
| `docs/_research/` and media/provenance records              | Additional research and asset planning can be created using the established workflow                | Prevents fresh ad hoc process invention                                        |

## Tasks

### 1. Expand chronology beyond the exemplar era

Extend the live content set to cover additional chronological ground.

Required outcomes:

- add at least one additional era or the equivalent bounded chronology extension
- preserve the primary era-based navigation spine
- ensure the new chronology still reads as part of one coherent educational
  system rather than isolated pages

Required artifact targets:

- `docs/content/exemplar/era-1-package.md`
- `app/eras/precursors-to-machine-intelligence/page.tsx`
- updates to `app/eras/computation-information-field-formation/page.tsx` to add explicit adjacent-era navigation

Key implementation details:

- Extend from the existing Era 2 route and exemplar-doc structure rather than
  starting a second unrelated presentation pattern.
- The bounded chronology expansion for this sprint should be the adjacent Era 1
  package, not a jump to a much later period.

Verify:

```bash
npm run format:check
npm run lint
```

### 2. Expand linked people, concepts, or institutions

Strengthen the secondary navigation layers with real additional entities.

Required outcomes:

- add new linked entities only where they materially deepen the history
- preserve the entity model and editorial constraints from Sprint 1
- ensure cross-links are explicit and not just implied in prose

Required artifact targets:

- `docs/content/exemplar/people/george-boole.md`
- `docs/content/exemplar/people/charles-babbage.md`
- `docs/content/exemplar/people/ada-lovelace.md`
- `docs/content/exemplar/concepts/formal-logic.md`
- `docs/content/exemplar/concepts/mechanized-calculation.md`

Key implementation details:

- Follow the `docs/content/exemplar/` artifact pattern introduced in Sprint 3
  unless Sprint 4 explicitly defines a better extension point during sprint-doc
  QA.
- New entities should connect back to the existing Era 2 package where that
  connection improves chronology or lineage.

Verify:

```bash
npm run format:check
npm run lint
```

### 3. Strengthen concept-teaching across chronology

Use the expanded content to make technical concepts more teachable.

Required outcomes:

- connect at least one modern AI concept across multiple historical moments
- ensure the concept-teaching layer helps readers understand causality and
  lineage rather than just vocabulary
- use guide commentary selectively where it improves comprehension

Required artifact targets:

- updates to `docs/content/exemplar/concepts/computability.md`
- updates to `docs/content/exemplar/concepts/machine-intelligence-as-research-agenda.md`
- live cross-era references in `app/eras/precursors-to-machine-intelligence/page.tsx` and `app/eras/computation-information-field-formation/page.tsx`

Key implementation details:

- Reuse the existing `GuideCallout` component and the selective guide density
  established in Sprint 3.
- The approved diagram and audio-plan records may be expanded further, but the
  two sourced-image records should remain non-live until their verification
  status is resolved.

Verify:

```bash
npm run format:check
npm run lint
```

### 4. Expand verification and navigation coverage as needed

Add or update focused checks for any new rendered navigation or content logic.

Required outcomes:

- add tests when new route behavior, utilities, or content-selection logic is
  introduced
- ensure verification covers the actual expansion rather than generic page
  rendering only
- keep the verification set proportional to the implementation scope

Required artifact targets:

- `tests/app/exemplar-era-package.test.tsx`
- `tests/app/chronology-expansion.test.tsx`

Key implementation details:

- Treat `tests/app/exemplar-era-package.test.tsx` as the current baseline and
  extend coverage from there instead of replacing it with generic rendering
  checks.

Verify:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
```

## Completion Checklist

- [x] Chronology extends beyond the original exemplar slice
- [x] Additional linked entities deepen the content system intentionally
- [x] Cross-linking remains explicit and navigable
- [x] Concept-teaching improves across multiple moments or eras
- [x] Guide commentary remains selective and evidence-aware
- [x] Verification matches the implemented expansion

## QA Deviations

None.

## QA Report

Verdict: PASS (2 issues resolved)

Audit summary:

- Sprint 4 is the correct follow-on sprint because Sprint 3 established one
  coherent live exemplar package, a reusable guide-callout component, and a
  working verification baseline.
- The sprint remains aligned with the spec by expanding chronology and
  cross-linking without losing the bounded editorial discipline of the minimum
  shippable slice.
- The sprint now carries forward the actual Sprint 3 and Sprint 2 constraints in
  a way that is specific enough for implementation.

Resolved issues:

1. The original Sprint 4 tasks still described expansion in broad terms and did
   not name exact artifact targets. That left too much room for drift in a repo
   that requires sprint docs to define concrete execution. The sprint now names
   the bounded adjacent-era expansion, the minimum new people and concept files,
   the cross-era concept updates, and the focused test targets.
2. The original asset table still treated key carry-forward inputs too
   generically, especially the sourced-image status constraint and the exact
   Sprint 3 surfaces that future work must extend. The asset inventory now names
   the concrete route, component, tests, and media-record files that govern
   Sprint 4.

## Implementation QA Report

Verdict: PASS (2 issues resolved)

Audit summary:

- Sprint 4 successfully extends the platform beyond the original Era 2 exemplar
  without drifting into a second content system or a much later chronology.
- The implementation keeps the hybrid navigation model coherent by adding a live
  adjacent Era 1 route, explicit era-to-era navigation, and cross-era concept
  teaching that now shows how the precursor runway narrows into formal
  computation and field formation.
- The sourced-image boundary remains intact: diagram and audio-plan records are
  still implementation-ready, while the two sourced-image records remain visible
  but non-live until verification is completed.

Resolved issues:

1. The Sprint 4 implementation state was not yet closed in the sprint doc. The
   checklist remained open and there was no implementation QA report, which left
   the repo without a durable record that the adjacent-era expansion had been
   audited against the spec and sprint contract. The checklist is now complete
   and this report closes the sprint.
2. One precursor person artifact no longer carried the cross-era linkage that
   Sprint 4 promised where lineage materially improves comprehension:
   `docs/content/exemplar/people/charles-babbage.md` linked only to Era 1 even
   though the same file already points forward into mechanized calculation and
   computability. The Era 2 link is restored so the artifact-level navigation is
   consistent across the precursor people set.

Verification:

- `npm run format:check`
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`
