# Sprint 3 — Power Words Documentation

## Header

- Goal: document the curated set of named frameworks and practitioner references
  used in this repository, with each one tied to a concrete lesson, failure
  mode, or quality standard.
- Spec sections:
  - Design Goals 3, 4, 5, 7
  - Architecture: Concept Model, Power Words Model, Documentation Layers,
    Documentation Placement Rules
  - Security: Conceptual Precision, No False Authority
  - Testing Strategy: Concept Coverage, Consistency Review
- Prerequisite: `docs: implement Sprint 2 — orchestration method documentation`
- Expected test count: `1 existing + 0 new = 1 total`

## Available Assets

This sprint depends on the implemented orientation and method docs plus the
existing spec-and-sprint artifacts. During Sprint Doc QA, verify the exact
locations of the durable docs and ensure each named reference maps to a real
repository lesson rather than unsupported theory.

| Asset                                                                             | Expected verified details at QA time                                | How this sprint uses it                                              |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `README.md`                                                                       | Landing narrative explains the docs layer and links to durable docs | Preserves the distinction between landing copy and deeper references |
| `docs/foundation/technology-orientation.md`                                       | Durable stack-orientation document exists                           | Prevents power-word docs from duplicating stack explanations         |
| `docs/foundation/orchestration-method.md`                                         | Durable method document exists                                      | Connects named references to the execution model                     |
| `docs/_specs/site-foundation/spec.md`                                             | Application foundation contract exists                              | Supplies concrete examples of approved stack and architecture terms  |
| `docs/_specs/site-foundation/sprints/sprint-0-nextjs-scaffold.md`                 | Implemented site-foundation Sprint 0 plan exists                    | Supplies examples of verification and bounded sprint structure       |
| `docs/_specs/documentation-foundation/spec.md`                                    | Documentation foundation contract exists                            | Anchors the power-word layer to the documentation system itself      |
| `docs/_specs/documentation-foundation/sprints/sprint-1-technology-orientation.md` | Sprint 1 exists and has been implemented                            | Shows how stack teaching was separated into its own durable doc      |
| `docs/_specs/documentation-foundation/sprints/sprint-2-orchestration-method.md`   | Sprint 2 exists and has been implemented                            | Shows how method teaching was separated into its own durable doc     |

## Tasks

### 1. Define the power-word concept carefully

Create a durable student-facing document that explains named frameworks and
practitioner references as compressed engineering intent.

Required artifact path for this sprint:

- `docs/foundation/power-words.md`

Required outcomes:

- explain why names are useful
- explain the risk of empty name-dropping
- define the local contract: every name must change execution, evaluation, or
  design decisions in this repository
- make clear that a recognized name is not proof that a decision is correct

Key implementation details:

- keep the document separate from `technology-orientation.md` and
  `orchestration-method.md`
- define the idea operationally, not as status signaling or rhetoric
- keep the tone serious and repository-grounded

Verify:

```bash
npm run format:check
```

### 2. Curate the initial named-reference set

Document the initial set of references chosen for this repository.

Recommended core set:

- GoF
- Robert C. Martin
- Donald Knuth
- Kent Beck
- Martin Fowler
- Ward Cunningham
- Steve Krug

For each entry, explain:

- who or what it refers to
- what problem it helps students reason about
- how it maps to this repository’s method or quality expectations
- where possible, what existing repository artifact makes the reference concrete

Verify:

```bash
npm run format:check
```

### 3. Connect power words to repository artifacts

Anchor the named references to concrete examples in this repo.

Required outcomes:

- at least some references point to actual specs, sprints, or implementation
  choices in the repository
- the docs avoid sounding mystical or ornamental
- the material supports student judgment rather than passive memorization
- the examples come from artifacts already present in this repository rather
  than hypothetical case studies

Verify:

```bash
npm run format:check
```

### 4. Prepare the landing layer for the vocabulary doc

Keep the durable-doc structure legible as the foundation layer expands.

Required outcomes:

- the sprint explicitly decides whether README should link the power-word doc at
  implementation time
- the relationship between the stack doc, the method doc, and the vocabulary
  doc stays clear
- the landing layer remains concise rather than turning into the full manual

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [ ] `docs/foundation/power-words.md` exists
- [ ] Power words are defined as compressed engineering intent
- [ ] The initial named-reference set is curated and justified
- [ ] Every included name has a concrete repository-relevant lesson
- [ ] The docs avoid decorative name-dropping
- [ ] The relationship to the existing durable docs remains clear
- [ ] `npm run format:check` passes

## QA Deviations

None.
