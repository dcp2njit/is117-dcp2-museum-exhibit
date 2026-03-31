# Sprint 2 — Spec And Sprint Patterns

## Header

- Goal: write a document that teaches students how to turn lessons from this
  site into original specs and sprint packages for their own projects.
- Spec sections:
  - Problem Statement
  - Design Goals 4, 5, 6, 7
  - Architecture: Site Spec Patterns, Extraction Model, Adaptation Rules
  - Security: No Copying Guidance, No Process Dilution, Repository Accuracy
  - Testing Strategy: Template Quality, Consistency Review
- Prerequisite: Sprint 0 and Sprint 1 complete or drafted
- Expected test count: `0 existing + 0 new = 0 total`

## Available Assets

| Asset                                                          | Verified details                                                                                               | How this sprint uses it                                              |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `docs/foundation/site-design-philosophy.md`                    | Explains the site's governing metaphor, companion-surface logic, image roles, and anti-copying posture         | Supplies the design-language layer students should translate         |
| `docs/foundation/site-implementation-codex.md`                 | Maps routes, components, CSS systems, data architecture, navigation, image pipeline, and adaptation rules      | Supplies the implementation and process constraints students inherit |
| `docs/_specs/README.md`                                        | Describes the workstream inventory and recommended study order                                                 | Grounds students in the existing spec ecosystem                      |
| `docs/_specs/documentation-foundation/spec.md` and sprint docs | Show a complete documentation-oriented spec package with explicit goals, assets, tasks, verification, and QA   | Serve as the clearest house-style example for educational artifacts  |
| `docs/_specs/refactor/browser-enhancements/`                   | Demonstrates bounded UX refinement sprints and product-quality improvements without changing the site thesis   | Provides an example of narrow, experience-focused sprint slicing     |
| `docs/_specs/refactor/code-quality/`                           | Demonstrates audit-driven refactor planning, explicit evidence, and QA deviation recording                     | Provides an example of architecture-focused planning discipline      |
| `docs/foundation/site-spec-patterns.md`                        | Durable bridge document now exists and includes example workstreams, workflow order, and anti-copying guidance | Acts as the sprint's delivered artifact and QA target                |

## Tasks

### 1. Identify the reusable planning lessons in this repository

Extract the planning patterns that students should imitate.

Required topics:

- how specs define problem, goals, architecture, security, testing, sprint plan
- how sprint docs define assets, tasks, verification, and completion criteria
- how completed workstreams in this repo demonstrate iteration rather than one
  giant rewrite
- how to choose scope boundaries for a new student project

Verify:

```bash
npm run format:check
```

### 2. Write `docs/foundation/site-spec-patterns.md`

Create the durable bridge document.

Required sections:

- how to read this repository as a pattern source
- what to extract from the site before writing a new spec
- how to choose a governing metaphor and project thesis
- how to write a strong spec for a new domain
- how to split that spec into realistic sprints
- which repository workstreams students should study as examples
- common failure modes when students or agents imitate surfaces without system
  thinking

Required outcomes:

- students can produce an original spec package informed by this repo
- agents can use the document as a guide when asked to scaffold specs/sprints
- the document explicitly warns against cloning the product itself

Verify:

```bash
npm run format:check
```

### 3. Add example study guidance

This sprint must point students to a short list of existing workstreams that
best demonstrate the repository’s process.

Required outcomes:

- recommend at least three existing workstreams and explain what each one
  teaches
- distinguish between studying a completed workstream and copying its exact
  content
- connect the examples back to the new design-codex documents

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [x] reusable spec/sprint lessons have been extracted from the repo
- [x] `docs/foundation/site-spec-patterns.md` exists
- [x] the document teaches students how to create original specs and sprints
- [x] the document points to existing workstreams as examples
- [x] the document explicitly warns against copying the site directly
- [x] `npm run format:check` passes

## QA Summary

- QA target: `docs/foundation/site-spec-patterns.md` reviewed against
  `docs/_specs/design-codex/spec.md`
- Spec coverage confirmed:
  - Problem Statement: the document teaches original spec generation rather
    than product cloning
  - Design Goals 4, 5, 6, 7: adaptation, process discipline, example
    workstreams, and repository-grounded references are all present
  - Architecture: the document explains extraction, new-domain translation,
    spec writing, project-thesis selection, sprint decomposition, and
    adaptation rules
  - Security: anti-copying guidance is explicit, process discipline is
    reinforced, and file/workstream references are real
  - Testing Strategy: the document aligns with repository house style and
    stays consistent with the philosophy and implementation codex documents
- Verification result: `npm run format:check` passed
- Resolved during QA: explicit project-thesis guidance was added so the
  document matches the Sprint 2 contract more directly

## QA Deviations

None. QA against `docs/_specs/design-codex/spec.md` found no deviations for
Sprint 2.
