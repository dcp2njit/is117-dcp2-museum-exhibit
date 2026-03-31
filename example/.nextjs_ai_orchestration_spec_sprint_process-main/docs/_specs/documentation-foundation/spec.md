# Documentation Foundation Specification

> **Status:** Complete

## Problem Statement

The repository now contains a working Next.js application, an initial README,
and planning artifacts for the site foundation feature. What it does not yet
have is a coherent documentation system that teaches readers what this project
is, why it exists, what technologies it uses, and how its AI orchestration
process is supposed to work.

This creates several concrete problems:

1. A first-time reader cannot yet distinguish between the example product
   (the AI history site) and the primary educational purpose of the repository
   (teaching agentic orchestration and spec-driven delivery).
2. New students or contributors do not have a clear onboarding explanation of
   the core technologies in the stack, including Next.js, React, JSX,
   Tailwind CSS, Radix UI, and shadcn/ui.
3. The repository does not yet explain the central orchestration concepts that
   justify the process itself: drift, context-window limits, artifact-based
   memory, verification discipline, and the use of named frameworks as
   compressed engineering intent.
4. The repository does not yet distinguish between heavyweight documentation
   work that should use the full spec-and-sprint process and lightweight
   changes that should use a smaller operational path.

Evidence from the current repository state:

- `README.md` has been updated from the default scaffold, but it still does not
  fully teach the educational thesis or student onboarding model.
- `docs/_specs/` contains process artifacts, but there is no dedicated feature
  specification for the documentation system itself.
- The current documentation does not yet contain an explicit glossary or
  technology-orientation layer for beginners.
- The current documentation does not yet operationalize the idea of a lighter
  change path for minor updates.

The need is not just better prose. The need is a documentation architecture
that can function as part of the product, part of the curriculum, and part of
the control system for AI-assisted work.

## Design Goals

1. **Teach the Project Clearly**
   The documentation must explain, in plain language, what this repository is,
   why it exists, and what readers should learn from it.

2. **Separate Product from Pedagogy**
   The docs must make clear that the AI history site is the example product,
   while the deeper subject is AI orchestration, engineering judgment, and
   spec-driven delivery.

3. **Orient Beginners Without Diluting Seriousness**
   The documentation must support first-exposure learners without sounding like
   marketing copy or flattening technical nuance.

4. **Make Orchestration Concepts Explicit**
   The docs must define drift, context limits, artifact memory, verification,
   and orchestration primitives in a way that students can apply directly.

5. **Use Named Frameworks Precisely**
   The documentation must explain named frameworks and practitioner references
   as compressed packets of design intent, not as decorative name-dropping.

6. **Scale Process Weight Appropriately**
   The documentation system must support both foundational, high-rigor docs and
   a lighter path for narrow, low-risk changes.

7. **Remain Repository-Grounded**
   Documentation claims must stay tied to this repository’s actual artifacts,
   commands, structure, and implementation state.

## Architecture

### Overview

This feature establishes the repository’s documentation foundation as a
teaching and operational system. The goal is to make the project legible to
students, contributors, and reviewers without conflating broad educational
theses with repository-specific guidance.

### Documentation Layers

The documentation foundation must support at least five layers:

1. **Project Framing**
   A landing explanation of what the repository is, why it exists, who it is
   for, and what it demonstrates.

2. **Technology Orientation**
   A beginner-friendly explanation of the main technologies in the stack,
   including their role in the system and why they were chosen.

3. **Orchestration Method**
   A clear explanation of the spec -> sprint -> implementation -> QA flow,
   including why this process exists and what problem it solves.

4. **Conceptual Vocabulary**
   Definitions for terms like drift, context-window limits, artifact memory,
   verification, invariants, scope boundaries, and acceptance criteria.

5. **Power Words / Named Frameworks**
   A curated explanation of framework names and practitioner references used in
   this project, with each one tied to a real failure mode, design principle,
   or usability concept.

### Primary Artifacts

The foundational documentation system should be expressed through repository
artifacts such as:

- `README.md` for project framing and quick-start orientation
- one or more repository docs under a durable top-level documentation location
  such as `docs/` for technology orientation, glossary material, and
  methodology reference content
- `docs/_specs/` for process-governed documentation features
- lightweight operational notes for small changes once the foundation exists

The exact filenames and final structure belong in sprint docs, but the system
must distinguish between landing-page documentation and durable reference
documentation.

### Documentation Placement Rules

The foundation must keep documentation roles distinct:

- `README.md` is the landing document for first-contact orientation
- durable reference documents should live in repository documentation
  directories rather than being embedded only inside planning artifacts
- `docs/_specs/` remains reserved for process artifacts, not as the only home
  for student-facing explanatory documentation

This prevents planning documents from becoming the accidental primary teaching
surface.

### Concept Model

The documentation must teach the following core ideas:

- **AI orchestration** as the practice of converting intent into bounded,
  verifiable execution
- **drift** as unintended expansion or mutation of scope when constraints are
  weak
- **context limits** as a practical limitation of LLM-based work that requires
  durable artifacts rather than relying on chat memory
- **artifact memory** as the use of specs, sprint docs, QA notes, and
  repository files to preserve intent across sessions
- **verification** as the principle that implementation claims are accepted
  only when supported by objective commands or evidence

These concepts must be written as operational teaching tools, not as abstract
philosophy.

### Power Words Model

The documentation must present named frameworks and practitioner references as
semantic compression with local meaning in this repository.

Examples that may be included where relevant:

- Gang of Four / GoF for structural pattern vocabulary
- Robert C. Martin for maintainability, boundaries, and SOLID thinking
- Donald Knuth for rigor and caution around simplistic optimization thinking
- Kent Beck for executable verification and test-first discipline
- Martin Fowler for refactoring vocabulary
- Ward Cunningham for debt and knowledge capture
- Steve Krug for navigation clarity and usability expectations

The documentation must avoid treating names as status markers. Every reference
must map to a concrete lesson, constraint, or quality standard. If a name is
included, the documentation must explain why it matters to the student and how
it changes execution, evaluation, or design decisions in this repository.

### Process Weight Model

This feature must define two documentation paths:

1. **Foundation path**
   Uses the full spec-and-sprint workflow for high-impact documentation work,
   such as landing-page framing, methodology docs, glossary systems, and other
   artifacts that shape how the repository is understood.

2. **Lightweight path**
   Uses a smaller artifact for narrow, low-risk changes such as typo fixes,
   copy cleanup, one-section clarifications, minor README improvements, or
   single-command updates.

This lightweight path may be implemented later as a `Change Note`, `Patch
Brief`, or similarly small artifact, but the documentation foundation must
declare that such a path exists and explain when it should be used.

## Security

This feature is documentation-focused, but it still has security and accuracy
requirements:

1. **Repository Accuracy**
   Documentation must not claim commands, files, workflows, or technologies
   that do not exist in the repository.

2. **No Secret Exposure**
   Examples and onboarding text must not encourage exposing secrets, private
   credentials, or unsafe local environment practices.

3. **No False Authority**
   The documentation must not overstate what AI can do or imply that generated
   output is trustworthy without verification.

4. **Conceptual Precision**
   Definitions for drift, orchestration, named frameworks, and related ideas
   must remain concrete enough that students do not confuse rhetoric with
   engineering method.

5. **Accessible Learning Surface**
   If documentation is rendered in the application, information structure must
   remain readable, scannable, and navigable for first-time users.

## Testing Strategy

This feature primarily changes documentation, but it still requires validation
and review discipline.

### Required Validation Categories

1. **Command Accuracy**
   Any command documented for setup, verification, or development must be
   verified against the repository.

2. **Artifact Accuracy**
   Referenced files, directories, and workflows must exist and match the actual
   repository state.

3. **Concept Coverage**
   The documentation set must cover project purpose, technology orientation,
   orchestration method, drift/context concepts, and the process-weight model.

4. **Consistency Review**
   The landing narrative, glossary or concept docs, and spec artifacts must not
   contradict each other.

### Baseline Counts and Validation Shape

- Current baseline: there are no documentation-specific automated checks beyond
  repository formatting and the existing application quality gates.
- This feature may rely primarily on document QA and repository verification
  rather than introducing heavy documentation tooling in its first iteration.
- If implementation includes new rendered documentation in the app, relevant
  rendering or smoke checks should be added in the associated sprint.
- Current documentation baseline is effectively one project README plus
  planning artifacts; there is no dedicated technology-orientation or
  orchestration-reference documentation layer yet.

### Verification Baseline

Each sprint for this feature must define concrete validation steps. Depending on
what changes in a sprint, verification may include:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
```

Documentation-only sprints may not require every command if no code paths are
affected, but the sprint doc must say exactly which checks are required and why.

## Sprint Plan

| Sprint   | Goal                                                                                                                              |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Sprint 0 | Rewrite the project README so it clearly explains what the repository is, why it exists, and who it is for                        |
| Sprint 1 | Add technology orientation documentation for Next.js, React, JSX, Tailwind, Radix UI, and shadcn/ui                               |
| Sprint 2 | Add orchestration-method documentation covering drift, context limits, artifact memory, verification, and the spec/sprint/QA flow |
| Sprint 3 | Add curated power-word and practitioner-reference documentation tied to concrete engineering and UX lessons                       |
| Sprint 4 | Define and document the lightweight documentation change path for small, low-risk updates                                         |
| Sprint 5 | Perform documentation QA across the whole set and resolve inconsistencies                                                         |

## Future Considerations

The following items are explicitly out of scope for this feature unless a later
spec introduces them:

- full curriculum design for the broader NJIT program
- grading rubrics or learning management system integration
- video lectures, slide decks, or multimedia instruction assets
- repository-wide docs automation beyond what is needed for the foundation
- external publishing, marketing, or institutional communications strategy
- comprehensive historical essays on every practitioner referenced

This feature succeeds when a first-time serious reader can understand what this
project is, what technologies it uses, what orchestration problems it solves,
why its process exists, and how to tell the difference between a major
documentation initiative and a minor documentation change.
