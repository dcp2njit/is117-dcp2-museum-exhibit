# Sprint 5 — Content Platform QA

## Header

- Goal: perform the formal QA pass across the history-content-platform feature,
  resolve inconsistencies, and leave the repository with a coherent, durable,
  research-backed content system that matches the approved spec.
- Spec sections:
  - All sections of `docs/_specs/history-content-platform/spec.md`
- Prerequisite: `feat: implement Sprint 4 — chronology and cross-linking expansion`
- Expected test count: `final implemented total at QA time + 0 new` unless QA
  fixes require targeted additional coverage

## Available Assets

This sprint is intentionally a QA sprint. At QA time, the reviewer must read
the feature spec, all history-content-platform sprint docs, all implemented
research and content artifacts, and any live app files touched by the feature.

| Asset                                                                                    | Expected verified details required at QA time                                                                               | How this sprint uses it                                   |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `docs/_specs/history-content-platform/spec.md`                                           | Final approved feature contract                                                                                             | Primary audit source                                      |
| all Sprint 0 through Sprint 4 docs under `docs/_specs/history-content-platform/sprints/` | Planned intent and acceptance targets remain understandable                                                                 | Planned-work audit source                                 |
| `docs/_research/` and its indexes, memos, and operational docs                           | Durable research workflow is implemented and usable                                                                         | QA target for continuity and evidence                     |
| implemented content-model, era-map, and guide-commentary artifacts                       | Durable content architecture exists and is reflected in the repo                                                            | QA target for structure and editorial discipline          |
| media and provenance records                                                             | Diagram and audio-plan records are approved, and sourced-image records still remain `needs verification`                    | QA target for multimodal traceability and status accuracy |
| implemented app routes, components, content files, and tests                             | `/`, Era 1, and Era 2 routes exist; `GuideCallout` is live; focused route tests exist for exemplar and chronology expansion | QA target for rendered behavior and verification results  |
| `package.json`                                                                           | Live command set is current and verifiable                                                                                  | Accuracy verification for required commands               |

## Tasks

### 1. Audit the feature against the spec

Review the implemented feature against every section of the approved spec.

Required checks:

- the audience and editorial model are visible in the implemented artifacts
- the content model and hybrid navigation are coherent
- GPT-5.4 guide commentary exists and follows its rules
- research durability and `eai` continuity artifacts exist
- media provenance and audio-planning requirements are satisfied
- the minimum shippable slice contract was actually met

Verify:

```bash
npm run format:check
```

### 2. Audit the feature against Sprint 0 through Sprint 4

Verify that each planned deliverable exists or has a documented deviation.

Required outcomes:

- research workflow artifacts exist and are usable
- content-model artifacts and era map exist
- media and provenance workflow artifacts exist
- exemplar content was actually implemented
- chronology expansion work matches the sprint scope that was completed
- Sprint 4 closeout details remain accurate, including the adjacent Era 1 route,
  explicit era-to-era navigation, and the current sourced-image status boundary

Verify:

```bash
npm run format:check
```

### 3. Fix inconsistencies and accuracy issues

Apply the smallest changes necessary to bring the full feature back into
alignment.

Required outcomes:

- no docs describe nonexistent files, commands, or media states
- no content artifact contradicts the implemented guide or provenance rules
- cross-links and content boundaries remain coherent
- any deviations from sprint intent are recorded explicitly

Verify:

```bash
npm run format:check
npm run lint
```

### 4. Run the full verification baseline required by the implemented state

Validate the final repository state for the feature.

Required outcomes:

- run the repo checks actually required by the implemented surface
- include application-level verification if the feature touched rendered content
- do not omit build or test verification when the implementation requires it

Minimum expected verification for a rendered implementation:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
```

Current expected implemented baseline before Sprint 5 fixes:

- `tests/app/homepage.test.tsx`
- `tests/app/exemplar-era-package.test.tsx`
- `tests/app/chronology-expansion.test.tsx`
- two live era routes:
  `app/eras/precursors-to-machine-intelligence/page.tsx` and
  `app/eras/computation-information-field-formation/page.tsx`

### 5. Produce the QA report

Document the outcome of the QA pass in this sprint doc.

Required outcomes:

- verdict is either `PASS (0 issues)` or a concise list of resolved issues
- findings are concrete and repository-grounded
- final state is understandable to a future reviewer

Required artifact path for the QA report:

- append the QA report to this sprint doc under a dedicated `QA Report` section

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [x] The full feature has been audited against the spec
- [x] The full feature has been audited against Sprint 0 through Sprint 4
- [x] Any inconsistencies have been fixed
- [x] Research, content, media, and provenance artifacts are accurate
- [x] Final command and app verification references are accurate
- [x] A QA report exists in this sprint doc with a clear verdict
- [x] Required verification passes for the implemented state

## QA Deviations

None.

## QA Report

Verdict: PASS (3 issues resolved)

Audit summary:

- The implemented feature satisfies the spec's minimum shippable slice: one
  live exemplar era package, linked people and concept units, implemented
  GPT-5.4 guide commentary, durable research artifacts, approved diagram and
  audio-plan records, and explicit provenance tracking for sourced-image
  candidates that are not yet production-ready.
- Sprint 0 through Sprint 4 deliverables are present and coherent across the
  research layer, content architecture, media/provenance workflow, live Era 2
  exemplar, and adjacent Era 1 expansion.
- The remaining issues were accuracy and continuity issues in durable docs, not
  missing feature surfaces.

Resolved issues:

1. Several durable artifacts still described Sprint 3 or Sprint 4 work as if it
   were pending. That was no longer true after the Era 2 exemplar and Era 1
   expansion were implemented, and it risked confusing future sessions about
   what had already shipped. The stale forward-looking wording is now removed or
   rewritten in the architecture docs, the research memo, and the approved
   diagram/audio-plan records.
2. The research memo still carried one open question that Sprint 1 had already
   resolved and one next-use section that still spoke as if the exemplar slice
   had not yet been implemented. Those sections now reflect the actual repo
   state and point forward only to the remaining primary-source, diagram,
   sourced-image, and audio-production work.
3. One durable content artifact used sprint-number language inside the content
   itself: `docs/content/exemplar/concepts/machine-intelligence-as-research-agenda.md`
   said the concept mattered because it let Sprint 4 do something. That sprint
   bookkeeping is now removed so the concept doc reads as a stable historical
   unit rather than a planning note.

Verification:

- `npm run format:check`
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`
