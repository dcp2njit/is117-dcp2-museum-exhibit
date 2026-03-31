# Orchestration Method

## Why This Document Exists

This repository is teaching a method, not just a stack.

The application in this project is a Next.js site about the history of
artificial intelligence, but the deeper lesson is how to run serious
AI-assisted work without relying on vague chat interactions, weak memory, or
unverified implementation claims.

This document explains the orchestration method used in this repository. It is
the method behind the specs, sprint docs, implementation passes, and QA passes
already present under `docs/_specs/`.

## The Core Problem

AI assistance is fast, but speed creates three recurring operational problems.

### Drift

Drift is unintended movement away from the requested scope.

In practice, drift happens when the assistant starts changing adjacent files,
adding unrequested features, rewriting structure that was not in bounds, or
declaring work complete before the actual acceptance criteria were met.

Drift is not an abstract failure. It is a normal consequence of weak
constraints. If the request is broad, the output usually becomes broad.

### Context Limits

Large language models do not carry durable project memory from one session to
the next. Even inside one conversation, the usable context is limited.

That means important decisions can fall out of the working context unless they
are preserved somewhere durable.

In this repository, chat is not treated as the system of record.

### Ambiguous Completion

AI-generated work often feels complete before it is actually complete. The code
or documentation may look plausible while still violating the intended scope,
missing a verification step, or contradicting an existing artifact.

This repository solves that problem by making completion explicit and
checkable.

## Artifact Memory

This repository uses artifact memory instead of relying on chat memory.

Artifact memory means the important reasoning is preserved in files that can be
re-read, checked, and reused in later sessions.

Examples in this repository:

- `docs/_specs/site-foundation/spec.md` records the application foundation
  contract.
- `docs/_specs/site-foundation/sprints/sprint-0-nextjs-scaffold.md` records one
  bounded implementation unit and its verification steps.
- `docs/_specs/documentation-foundation/spec.md` records the contract for the
  documentation system itself.
- `docs/_specs/documentation-foundation/sprints/` records the staged rollout of
  the teaching docs.

These artifacts matter because they preserve intent across time. When a later
session begins, the assistant can be grounded again by reading the files that
capture the project history.

## The Operating Primitives

The method in this repository depends on a small set of orchestration
primitives.

### Role

Role framing sets the operating posture.

Examples:

- auditor
- implementer
- reviewer
- educator

The role matters because it changes what the assistant optimizes for. A review
request should produce gap-finding behavior. An implementation request should
produce bounded execution behavior.

### Scope

Scope defines what is in bounds and what is out of bounds.

Good scope names the files, artifacts, or outcomes that are allowed to change.
It also makes clear what must stay untouched.

Without scope, the assistant will often expand into nearby concerns because
that expansion appears helpful.

### Invariants

Invariants are the rules that must not be violated.

Examples in this repository include:

- do not treat unverified claims as complete
- do not collapse durable docs into planning artifacts
- do not introduce unrelated changes during a bounded sprint
- keep README as the landing layer and `docs/` as the durable reference layer

### Acceptance Criteria

Acceptance criteria define what must be true for the work to count as done.

If the work cannot be checked against explicit completion conditions, then the
assistant will usually stop when the output merely looks finished.

### Sequencing

Sequencing breaks larger work into ordered stages.

This repository does not ask for a major feature, implementation, and QA in a
single undifferentiated burst. It uses ordered phases so each phase sharpens
the next one.

### Verification

Verification is the objective check that the claimed result actually holds.

For documentation sprints in this repository, that frequently means:

```bash
npm run format:check
```

For application work, verification may also include:

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

The rule is simple: implementation claims are accepted when the relevant checks
pass, not when the narrative sounds convincing.

## Why This Repository Uses Specs And Sprint Docs

This repository uses a spec-and-sprint model because the work is intentionally
teaching-oriented, multi-session, and sensitive to drift.

### What A Spec Does Here

A spec defines the feature-level contract.

In this repository, a spec explains:

- the problem being solved
- the design goals
- the architecture and artifact model
- the security and accuracy constraints
- the testing or verification strategy

Examples:

- `docs/_specs/site-foundation/spec.md`
- `docs/_specs/documentation-foundation/spec.md`

The spec is where the high-level shape of the work becomes explicit.

### What A Sprint Doc Does Here

A sprint doc turns a larger contract into one bounded execution unit.

In this repository, a sprint doc defines:

- the goal of the sprint
- the exact artifact or file targets
- the tasks for that sprint only
- the verification commands for that sprint
- the completion checklist used during QA

Examples:

- `docs/_specs/site-foundation/sprints/sprint-0-nextjs-scaffold.md`
- `docs/_specs/documentation-foundation/sprints/sprint-1-technology-orientation.md`
- `docs/_specs/documentation-foundation/sprints/sprint-2-orchestration-method.md`

The sprint doc exists so implementation can stay narrow and auditable.

## The Lifecycle In This Repository

For foundational work, the operating loop is:

1. Write a spec.
2. QA the spec for gaps or contradictions.
3. Write one sprint doc.
4. QA the sprint doc against the spec and the live repository.
5. Implement the sprint.
6. QA the implementation against both the sprint doc and the repository state.

This is stricter than casual prompt-driven work, but the strictness is the
point. It creates continuity across sessions and leaves behind artifacts that
can be reloaded later.

## Worked Example From This Repository

One visible example is the documentation-foundation work.

### Step 1: The User Bounded The Problem

The user did not ask for random documentation improvements. The request became
a proper feature with its own scope under `docs/_specs/documentation-foundation/`.

### Step 2: The Spec Created The Contract

`docs/_specs/documentation-foundation/spec.md` established the required
documentation layers, including project framing, technology orientation,
orchestration method, conceptual vocabulary, and process-weight distinctions.

### Step 3: Sprint Docs Split The Work

The documentation work was divided into sprint-sized units such as:

- README rewrite
- technology orientation
- orchestration method

That prevented the assistant from trying to write the entire teaching system in
one pass.

### Step 4: Implementation Stayed Inside One Sprint

Sprint 1 created `docs/foundation/technology-orientation.md` instead of trying
to solve every later documentation need at the same time.

Sprint 2 created `docs/foundation/orchestration-method.md` and updated the
README link layer without expanding into the later vocabulary or lightweight
change-path work. Those remained separate bounded sprints rather than being
collapsed into the same implementation pass.

### Step 5: QA Closed The Loop

Each sprint was reviewed against the governing spec, the sprint contract, and
the live repository. When a mismatch was found, the sprint artifact was fixed
before the implementation was accepted.

That is the operational meaning of serious orchestration in this repository:
bounded work, visible artifacts, and explicit verification.

## Prompting Style In This Repository

The prompting style used here is direct, bounded, and artifact-first.

It is not based on trying to sound clever. It is based on supplying the missing
engineering constraints that the model cannot infer reliably on its own.

### Good Orchestration Requests

Good requests in this repository usually do some combination of the following:

- define the task as a spec, sprint, QA pass, or implementation pass
- name the artifact that should be created or updated
- restrict the scope to the current feature or sprint
- require verification against the live repository
- demand real QA instead of superficial approval

Examples:

- write a spec in the repository’s established style
- QA this sprint against the spec and resolve the gaps
- implement Sprint 2 and keep it aligned with the prior documentation layer

### Vague Requests

Vague requests leave too much of the control surface unspecified.

Examples:

- improve the docs
- clean this up
- make this better

Those prompts may still produce useful output, but they increase the probability
of drift, hidden assumptions, and weak verification.

### Why This Style Is Used

This repository is trying to teach students that natural language now affects
implementation outcomes. If that language is sloppy, the output usually gets
sloppy too.

The method therefore treats prompts as engineering instructions, not casual
conversation.

## Process Weight

This repository uses heavyweight process for foundational work and a lighter
path for smaller changes.

The full spec-and-sprint loop is used when the change is:

- foundational
- ambiguous
- likely to shape later work
- likely to be revisited across multiple sessions

Not every typo fix or narrow copy update deserves that full ceremony.

The lighter change path is now documented separately in
`docs/foundation/lightweight-change-path.md`, but the distinction matters here
because it shows that the process is selective rather than bureaucratic.

## How Students Should Use This Method

Students should read this repository with a simple rule in mind: do not treat
AI output as the plan.

Instead:

1. decide what the work actually is
2. write the contract down in an artifact
3. break the work into bounded units
4. implement one unit at a time
5. verify what was claimed
6. preserve the result in durable files

That is the method this repository is teaching.

## Related Artifacts

- `README.md` for the landing-level project framing
- `docs/foundation/technology-orientation.md` for the stack explanation layer
- `docs/_specs/example_spec.md` for the governing process style
- `docs/_specs/documentation-foundation/spec.md` for the documentation contract
- `docs/_specs/documentation-foundation/sprints/sprint-2-orchestration-method.md`
  for the sprint that produced this document
