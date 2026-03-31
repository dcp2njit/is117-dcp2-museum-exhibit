# Sprint 2 — Orchestration Method Documentation

## Header

- Goal: create durable documentation for the orchestration method used in this
  repository, including drift, context limits, artifact memory, verification,
  the spec/sprint/implementation/QA lifecycle, the user prompting style, and
  concrete examples of human/AI collaboration in this repository.
- Spec sections:
  - Design Goals 1, 4, 6, 7
  - Architecture: Documentation Layers, Concept Model, Process Weight Model,
    Documentation Placement Rules
  - Security: No False Authority, Conceptual Precision
  - Testing Strategy: Concept Coverage, Consistency Review
- Prerequisite: `docs: implement Sprint 1 — technology orientation`
- Expected test count: `1 existing + 0 new = 1 total`

## Available Assets

This sprint depends on implemented outputs from prior documentation sprints.
During Sprint Doc QA, verify the actual README and durable docs structure
before implementation.

| Asset                                                                             | Expected verified details at QA time                          | How this sprint uses it                                          |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------- |
| `README.md`                                                                       | Landing narrative exists and already links to durable docs    | Links to deeper orchestration docs                               |
| `docs/foundation/technology-orientation.md`                                       | Durable student-facing docs location now exists under `docs/` | Keeps method docs distinct from stack orientation                |
| `docs/_specs/example_spec.md`                                                     | Process guide exists                                          | Provides the canonical workflow model                            |
| `docs/_specs/site-foundation/spec.md`                                             | Application foundation contract exists                        | Supplies real examples of specs and sprint roadmaps              |
| `docs/_specs/site-foundation/sprints/sprint-0-nextjs-scaffold.md`                 | Implemented site-foundation Sprint 0 plan exists              | Supplies a concrete example of sprint structure and verification |
| `docs/_specs/documentation-foundation/spec.md`                                    | Documentation foundation contract exists                      | Anchors the process explanation to the docs system itself        |
| `docs/_specs/documentation-foundation/sprints/sprint-0-readme-rewrite.md`         | Sprint 0 documentation sprint exists and has been implemented | Supplies a concrete example of README-level documentation work   |
| `docs/_specs/documentation-foundation/sprints/sprint-1-technology-orientation.md` | Sprint 1 documentation sprint exists and has been implemented | Supplies a concrete example of durable documentation work        |

## Tasks

### 1. Create the orchestration-method reference document

Create a durable student-facing document that teaches the method explicitly.

Required artifact path for this sprint:

- `docs/foundation/orchestration-method.md`

Required concepts:

- drift
- context-window or session-memory limits
- artifact memory
- role, scope, invariants, acceptance criteria, sequencing, verification
- why the repository uses specs and sprint docs
- the prompting style used to direct the assistant in this workflow
- worked examples showing how a human request becomes a bounded execution loop

Key implementation details:

- Define the terms operationally, not rhetorically.
- Use repository examples where possible.
- Keep the tone serious and concrete.
- Keep the method doc separate from technology-orientation content rather than
  merging the two into one large foundation file.

Verify:

```bash
npm run format:check
```

### 2. Explain the lifecycle with repository-grounded examples

Teach the process by pointing to the artifacts already present in the repo.

Required outcomes:

- explain what a spec is in this repository
- explain what a sprint doc is in this repository
- explain how implementation and QA relate to those artifacts
- explain why durable artifacts matter for LLM-assisted work
- include at least one concrete example of how the user and assistant interact:
  request -> clarification of scope -> artifact creation -> implementation ->
  verification
- use artifacts already present in this repo rather than hypothetical examples

Verify:

```bash
npm run format:check
```

### 3. Explain the prompting style used in this repository

Document the operating style used to direct the assistant effectively.

Required outcomes:

- explain the emphasis on role framing, scope boundaries, invariants,
  acceptance criteria, sequencing, and verification
- explain why this prompting style is used for serious work rather than ad hoc
  conversational requests
- keep the examples grounded in how this repository is actually being run
- distinguish between good orchestration prompts and vague requests in a way
  students can recognize immediately

Verify:

```bash
npm run format:check
```

### 4. Introduce the process-weight distinction

Prepare readers for the difference between foundational work and lightweight
changes.

Required outcomes:

- explain that not every update deserves full ceremony
- reserve the detailed lightweight path for Sprint 4
- make the distinction visible now so the method feels intentional rather than
  bureaucratic

Verify:

```bash
npm run format:check
```

### 5. Link the method docs back to the landing layer

Update the README so students can discover the orchestration-method reference
without reading the planning artifacts first.

Required outcomes:

- README links to `docs/foundation/orchestration-method.md`
- the relationship between the technology doc and the method doc is clear
- the landing page stays readable and does not collapse into a full manual

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [ ] Durable orchestration-method docs exist outside `docs/_specs/`
- [ ] `docs/foundation/orchestration-method.md` exists
- [ ] Drift, context limits, artifact memory, and verification are defined clearly
- [ ] The repository lifecycle is explained with real artifacts
- [ ] The prompting style is explained in a clear student-facing way
- [ ] At least one concrete collaboration example is documented
- [ ] The distinction between foundational work and smaller changes is introduced
- [ ] The README links to the orchestration-method doc
- [ ] `npm run format:check` passes

## QA Deviations

None.
