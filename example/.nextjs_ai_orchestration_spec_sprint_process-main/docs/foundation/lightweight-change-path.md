# Lightweight Change Path

## Why This Document Exists

This repository uses a strict spec-and-sprint workflow for foundational work.
That is intentional. It reduces drift, preserves reasoning in durable
artifacts, and makes implementation claims easier to verify.

Not every change deserves that full process weight.

Some changes are narrow, low-risk, and low-ambiguity. For those cases, this
repository defines a smaller control artifact so students and contributors can
move faster without collapsing back into vague, untracked requests.

This document explains that lightweight path.

## What The Lightweight Path Is For

The lightweight path is for changes that are small enough to reason about in a
single bounded note and simple enough that they do not need a full feature spec
and sprint set.

Typical examples:

- a typo fix in a durable documentation file
- a one-section clarification in `README.md`
- a small command correction when the actual repository script is already known
- a narrow wording adjustment that does not alter the repository’s method or
  architecture

The lightweight path is not a relaxed version of engineering. It is a narrower
control surface for narrower work.

## The Lightweight Artifact: Change Note

The lightweight artifact in this repository is a `Change Note`.

A `Change Note` is the smallest acceptable planning artifact for a narrow,
low-risk change. It exists so the work still has an explicit problem, explicit
scope, and explicit verification even when a full sprint doc would be excessive.

## Required Change Note Fields

A valid `Change Note` should include these fields:

1. Problem
2. Scope
3. Invariants
4. Files expected to change
5. Verification
6. Outcome

### Problem

State what is wrong or missing.

Keep it concrete. Examples:

- the README command example no longer matches `package.json`
- a durable docs section is ambiguous for first-time readers

### Scope

Define exactly what is in bounds.

For a lightweight change, the scope should usually be a small number of files or
one narrow documentation concern.

### Invariants

State what must not be broken while making the change.

Examples:

- do not change the overall process model
- do not add new dependencies
- do not rewrite unrelated sections while fixing a local issue

### Files Expected To Change

List the files that are allowed to change.

This preserves scope discipline and makes review easier.

### Verification

State the exact commands or checks that confirm the change is valid.

For documentation work in this repository, that will often be:

```bash
npm run format:check
```

If a command example or workflow claim is being updated, verification should
also include checking the live repository source of truth, such as
`package.json`.

### Outcome

Record what actually changed after implementation.

This closes the loop and prevents the note from becoming a vague intention.

## When To Use The Full Workflow

Use the full spec-and-sprint workflow when the change is:

- foundational
- ambiguous
- likely to affect multiple documentation layers or code domains
- likely to introduce new concepts or durable architectural decisions
- likely to be revisited across multiple sessions

Examples in this repository:

- creating the technology-orientation doc
- creating the orchestration-method doc
- creating the power-words doc
- establishing a new documentation layer or process model

These changes shape how the repository is understood. They justify higher
process weight.

## When To Use The Lightweight Path

Use the lightweight path when the change is:

- narrow
- low-risk
- low-ambiguity
- easy to verify directly
- unlikely to alter the architecture or teaching model of the repository

Examples in this repository:

- fixing a stale command example after checking `package.json`
- correcting a broken link in `README.md`
- clarifying one paragraph in a durable reference doc without changing the
  larger method
- updating a file path in a doc when the repository structure is already stable

## The Decision Rule

Use this decision rule:

If the work changes the repository’s method, architecture, documentation layer
structure, or long-term teaching model, use the full workflow.

If the work only corrects, clarifies, or lightly refines a narrow, well-bounded
surface that can be verified directly, use a `Change Note`.

When in doubt, choose the heavier path.

That bias is deliberate. It is safer to use slightly too much structure for an
important change than too little structure for a foundational one.

## Example Change Note

```text
Change Note

Problem:
README command example no longer matches the live script name.

Scope:
Update the single incorrect command reference in README.md.

Invariants:
- Do not rewrite unrelated README sections.
- Do not change the repository workflow description.

Files expected to change:
- README.md

Verification:
- Confirm the script name in package.json.
- Run npm run format:check.

Outcome:
- README.md updated so the documented command matches package.json.
```

## Relationship To The Full Method

The lightweight path does not replace the main orchestration method.

It exists because the full workflow is meant for foundational work, not for
every tiny correction.

The relationship is simple:

- `docs/foundation/orchestration-method.md` explains the high-rigor workflow
  used for major work.
- `docs/foundation/lightweight-change-path.md` explains the smaller artifact
  used for narrow changes.

The two paths are complementary. The lightweight path should reduce needless
ceremony, not reduce accountability.

## Relationship To The Other Foundation Docs

This document is intentionally separate from the other durable foundation docs.

- `docs/foundation/technology-orientation.md` explains the stack.
- `docs/foundation/orchestration-method.md` explains the full execution method.
- `docs/foundation/power-words.md` explains the named vocabulary used in the
  repository.
- `docs/foundation/lightweight-change-path.md` explains the smaller artifact
  used for narrow, low-risk changes.

Keeping those roles separate preserves clarity for first-time readers.

## Related Artifacts

- `README.md` for the landing-level documentation roadmap
- `package.json` for the live repository command set
- `docs/foundation/orchestration-method.md` for the full workflow
- `docs/foundation/power-words.md` for the vocabulary around rigor and false
  authority
- `docs/_specs/documentation-foundation/spec.md` for the Process Weight Model
- `docs/_specs/documentation-foundation/sprints/sprint-4-lightweight-change-path.md`
  for the sprint that produced this document
