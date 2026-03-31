# Sprint 0 — Research Workflow And EAI Operations

## Header

- Goal: define the durable research workflow for this feature, establish the
  `docs/_research/` structure, and document how `eai` is actually used in this
  repository so later sessions can continue the work without rediscovering the
  process.
- Spec sections:
  - Problem Statement 2, 3
  - Design Goals 3, 6, 9
  - Architecture: Research Workflow Layer, Media System, Repository Boundaries
  - Security: Repository Accuracy, No Secret Exposure, Provenance Discipline
  - Testing Strategy: Artifact Accuracy, Workflow Verification,
    Command Verification
- Prerequisite: none
- Expected test count: `1 existing + 0 new = 1 total`

## Available Assets

This sprint establishes the durable research layer. During Sprint Doc QA,
verify the current repo state before implementation so the guidance reflects
real tooling rather than assumptions.

| Asset                                          | Expected verified details at QA time                                                                     | How this sprint uses it                                                     |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `docs/_specs/history-content-platform/spec.md` | Final feature contract includes required research durability and `eai` operations                        | Governs the workflow and artifact boundaries                                |
| `agent.md`                                     | Repository rules for read order, verification, scope discipline, and accuracy exist                      | Aligns the research workflow with repo operating rules                      |
| `README.md`                                    | Landing layer exists and may later link to durable research-method docs if needed                        | Keeps new workflow docs consistent with the repo’s doc model                |
| `docs/foundation/orchestration-method.md`      | Durable explanation of artifact memory and verification already exists                                   | Prevents duplicate method definitions                                       |
| repository root structure                      | `docs/_research/` does not yet exist and must be created intentionally                                   | Confirms this sprint is adding a new durable artifact area                  |
| local `eai` availability                       | `eai` is currently available in the local environment, but its repository workflow is not yet documented | Prevents invented CLI guidance while preserving the verified starting state |

## Tasks

### 1. Create the durable research workspace structure

Create the initial `docs/_research/` structure required for this feature.

Required outcomes:

- create a durable top-level research area under `docs/_research/`
- define a minimal folder and file structure that supports topic research,
  source capture, media planning, and future expansion
- keep the structure specific enough to guide work but small enough to avoid
  speculative folders with no near-term use

Required artifact targets:

- `docs/_research/`
- a top-level index or README for the research area
- one or more subdirectories or index files sufficient to separate topic-level
  research from operational guidance

Key implementation details:

- The structure must be scannable by future LLM sessions.
- Folder names should describe purpose, not chronology alone.
- Do not create a large taxonomy that the current sprint cannot justify.

Verify:

```bash
npm run format:check
```

### 2. Document the actual `eai` operating workflow

Create a durable operational artifact that records how `eai` is actually used
in this repository.

Required outcomes:

- document the real `eai` commands or patterns used during implementation
- explain what `eai` is being used for in this feature
- separate verified usage from future possibilities
- record enough detail that a later session can resume research work without
  repeating discovery

Required artifact targets:

- an operational guide or index inside `docs/_research/` that captures `eai`
  usage patterns for this repo

Key implementation details:

- Do not invent unsupported flags, workflows, or integrations.
- If `eai` has setup prerequisites, record them without exposing secrets.
- Keep the guidance repository-grounded and procedural.

Verify:

```bash
npm run format:check
```

### 3. Define the research artifact model

Specify how topic-level research documents should be created and maintained.

Required outcomes:

- define what a research memo must contain
- define how sources should be captured
- define how image candidates, diagram ideas, and audio ideas should be noted
- define how research artifacts preserve continuity across context resets

Required artifact targets:

- one durable research-template or exemplar document pattern under
  `docs/_research/`

Key implementation details:

- The model should support later era, person, and concept research without
  needing to be redesigned.
- Keep provenance and usage rationale visible from the start.

Verify:

```bash
npm run format:check
```

### 4. Create at least one exemplar research memo

Produce one real research artifact that proves the workflow is usable.

Required outcomes:

- choose one topic appropriate for the feature’s early implementation
- capture at least a small set of real sources
- include notes relevant to content, images or diagrams, and audio planning
- make the memo useful enough that Sprint 1 and Sprint 2 can build on it

Required artifact targets:

- one real topic memo under `docs/_research/` in the structure established by
  Task 1

Key implementation details:

- The exemplar should be modest in scope but real.
- The memo must be durable and readable without chat context.

Verify:

```bash
npm run format:check
```

### 5. Record any repo-level workflow implications

Update landing or durable documentation only if the new research layer must be
discoverable for future work.

Required outcomes:

- add discoverability only if it materially helps future sessions
- preserve the boundary between durable docs, planning docs, and research docs
- avoid overloading the landing layer with internal operating detail

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [x] `docs/_research/` exists with intentional initial structure
- [x] A durable research index or README exists
- [x] A durable `eai` operations guide or index exists
- [x] The research artifact model is documented clearly
- [x] At least one real exemplar research memo exists
- [x] Source capture and media-planning fields are visible in the research model
- [x] No unsupported `eai` claims are documented
- [x] `npm run format:check` passes

## QA Deviations

None.

## QA Report

Verdict: PASS (2 issues resolved)

Audit summary:

- The sprint aligns with the governing feature spec's research-workflow
  contract, including durable `docs/_research/` artifacts, an operational
  `eai` guide, and continuity across context resets.
- The sprint stays inside the repository's documentation-boundary rules and is
  appropriately scoped as a planning artifact rather than a durable teaching
  doc.
- Verification remains proportional to the sprint's documentation-first scope.

Resolved issues:

1. The Available Assets table named local `eai` availability, but it did not
   record the verified current state. The row now states that `eai` is present
   locally while the repository workflow remains undocumented.
2. Task 4 required an exemplar research memo but did not bind it to a concrete
   artifact target under `docs/_research/`. The sprint now makes that target
   explicit so implementation cannot drift.

Verification:

- `npm run format:check`

## Implementation QA Report

Verdict: PASS (2 issues resolved)

Audit summary:

- The implemented Sprint 0 artifacts satisfy the spec's research-workflow
  contract: `docs/_research/` exists, a durable `eai` operations guide exists,
  a reusable research-memo template exists, and a real exemplar memo exists with
  source capture and early media planning.
- The implementation stays within repository boundaries by keeping research
  artifacts under `docs/_research/` instead of collapsing them into
  `docs/foundation/` or `docs/_specs/`.
- Verification remains correct for the sprint's documentation-first scope.

Resolved issues:

1. Sprint 0 created the durable research layer, but the repository-level agent
   handoff did not yet tell future content sessions to read `docs/_research/`.
   `agent.md` now records that requirement and the repo state reflects the new
   research layer.
2. Sprint 1 depended on Sprint 0 generically, but it did not yet name the exact
   Sprint 0 artifacts and verified source-traceability limitation that should
   guide the next phase. Sprint 1 now points to the concrete research artifacts
   and records that manual source capture remains the durable baseline when raw
   `eai` outputs omit citations.

Verification:

- `npm run format:check`
