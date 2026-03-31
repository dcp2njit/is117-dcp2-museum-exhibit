# Sprint 4 — Lightweight Change Path

## Header

- Goal: define and document the lightweight path for small documentation and
  repository changes that do not justify the full spec-and-sprint workflow.
- Spec sections:
  - Design Goals 4, 6, 7
  - Architecture: Process Weight Model, Concept Model, Documentation Layers
  - Security: Repository Accuracy, Conceptual Precision
  - Testing Strategy: Consistency Review
- Prerequisite: `docs: implement Sprint 3 — power words documentation`
- Expected test count: `1 existing + 0 new = 1 total`

## Available Assets

This sprint depends on the previously implemented documentation set. During
Sprint Doc QA, verify the current method docs so the lightweight path is
described as a complement to the full workflow rather than a contradiction.

| Asset                                                                           | Expected verified details at QA time                    | How this sprint uses it                                                      |
| ------------------------------------------------------------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `README.md`                                                                     | Landing narrative links the durable documentation layer | Determines how the lightweight path should be exposed from the landing layer |
| `docs/foundation/technology-orientation.md`                                     | Durable stack-orientation document exists               | Keeps the lightweight process doc separate from stack teaching               |
| `docs/foundation/orchestration-method.md`                                       | Full workflow is already documented                     | Establishes what the lightweight path is simplifying                         |
| `docs/foundation/power-words.md`                                                | Durable vocabulary doc exists                           | Reinforces precision around scope, verification, and false authority         |
| `docs/_specs/documentation-foundation/spec.md`                                  | Documentation foundation contract exists                | Anchors the lightweight path to the Process Weight Model                     |
| `docs/_specs/documentation-foundation/sprints/sprint-2-orchestration-method.md` | Sprint 2 exists and has been implemented                | Supplies the durable method-doc precedent                                    |
| `docs/_specs/documentation-foundation/sprints/sprint-3-power-words.md`          | Sprint 3 exists and has been implemented                | Supplies the precision and vocabulary precedent                              |
| `package.json`                                                                  | Actual repository commands are defined there            | Keeps verification guidance tied to the live command set                     |

## Tasks

### 1. Define the lightweight artifact

Choose and document the lightweight artifact format.

Required artifact path for this sprint:

- `docs/foundation/lightweight-change-path.md`

Recommended candidate:

- `Change Note`

The artifact should include, at minimum:

- problem
- scope
- invariants
- files expected to change
- verification
- outcome

Key implementation details:

- keep the document separate from `orchestration-method.md` rather than folding
  the lightweight path into the full-workflow reference
- define the `Change Note` operationally as a smaller control artifact, not as
  permission to skip rigor entirely

Verify:

```bash
npm run format:check
```

### 2. Define when to use the lightweight path

Document the decision rule students and contributors should follow.

Required outcomes:

- full workflow for high-impact, ambiguous, multi-domain, or foundational work
- lightweight path for narrow, low-risk, low-ambiguity work
- examples of each category
- a clear decision rule that students can apply without guessing

Verify:

```bash
npm run format:check
```

### 3. Expose the path in the documentation set

Make sure the lightweight change path is visible from the repository’s main
documentation flow.

Required outcomes:

- students can discover the lightweight path from the main docs
- the relationship between the full workflow and the lightweight path is clear
- the new process does not undermine the seriousness of the main method
- the relationship between the method doc, the power-words doc, and the new
  lightweight-path doc stays clear

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [ ] `docs/foundation/lightweight-change-path.md` exists
- [ ] A lightweight artifact format is defined
- [ ] The decision rule between full workflow and lightweight path is documented
- [ ] Examples of when to use each path exist
- [ ] The lightweight path is discoverable from the main docs
- [ ] The relationship to the existing durable docs remains clear
- [ ] `npm run format:check` passes

## QA Deviations

None.
