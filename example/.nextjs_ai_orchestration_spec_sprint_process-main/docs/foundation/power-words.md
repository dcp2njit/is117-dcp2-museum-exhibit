# Power Words

## Why This Document Exists

This repository uses a small set of named frameworks and practitioner
references as compressed engineering vocabulary.

The names matter, but only when they change how work is executed, reviewed, or
judged. A recognized name is not proof that a decision is correct. In this
repository, names are useful only when they point to a concrete lesson,
constraint, failure mode, or quality standard that can be seen in the actual
artifacts.

This document explains the initial power-word set used in this repository and
shows how each reference maps to real repository work.

## What A Power Word Is

A power word is a name that compresses a larger body of engineering knowledge.

When someone says `Kent Beck`, they are not just mentioning a person. They are
usually invoking ideas about executable verification, tight feedback loops, and
small steps that can be checked continuously.

When someone says `GoF`, they are not just naming a book. They are invoking a
shared vocabulary for reusable structural and behavioral patterns.

That compression is useful because it shortens communication. It lets a team
refer to a larger set of design ideas without rewriting the entire theory every
time.

## The Local Contract In This Repository

In this repository, a named framework or practitioner reference is only valid
when it does at least one of the following:

- changes an implementation decision
- changes how work is evaluated
- changes what is considered a quality risk
- gives students a better way to interpret a concrete repository artifact

If a name does none of those things, it does not belong here.

This rule exists to prevent decorative name-dropping. The goal is not to sound
educated. The goal is to make reasoning more precise.

## The Main Risk

The risk of power words is false authority.

A named reference can create the impression that a decision is automatically
serious or correct because it sounds connected to a famous person or a classic
book. That is the wrong standard.

In this repository, names do not replace reasoning, repository evidence, or
verification commands. They only help if they sharpen them.

## How To Read This Document

Each reference below answers four questions:

1. Who or what is being referenced?
2. What problem does that reference help students think about?
3. What lesson does this repository take from that reference?
4. What repository artifact makes the reference concrete here?

That structure keeps the vocabulary tied to the actual project rather than to
abstract prestige.

## Initial Power-Word Set

### GoF

GoF refers to the Gang of Four authors of _Design Patterns_, a book that gave
software teams a shared vocabulary for recurring structural and behavioral
solutions.

Problem it helps students reason about:

- how to talk about reusable design decisions without inventing new language
  every time

Local lesson in this repository:

- architecture should use reusable vocabulary instead of vague claims about
  making things cleaner or more scalable
- students should learn that named pattern language is useful only when it
  sharpens a real design choice

Repository anchors:

- `docs/_specs/site-foundation/spec.md`, where reusable component and design
  system boundaries are part of the approved architecture
- `docs/foundation/technology-orientation.md`, where students are introduced to
  the planned design-system stack that will eventually need a shared component
  vocabulary

### Robert C. Martin

Robert C. Martin is commonly invoked for maintainability, boundaries, and
SOLID-style reasoning about how responsibilities should be separated.

Problem it helps students reason about:

- how to keep systems understandable as they grow
- how to avoid letting one change mutate unrelated areas

Local lesson in this repository:

- bounded work matters more than broad, enthusiastic rewriting
- scope discipline and explicit artifact boundaries are part of maintainable
  AI-assisted work, not just code style preferences

Repository anchors:

- `docs/foundation/orchestration-method.md`, especially the sections on scope,
  invariants, and bounded sprint execution
- `docs/_specs/documentation-foundation/spec.md`, where documentation placement
  rules keep README, durable docs, and planning artifacts distinct

### Donald Knuth

Donald Knuth is often invoked as a symbol of rigor and as a warning against
shallow optimization thinking.

Problem it helps students reason about:

- how to distinguish between work that is actually validated and work that only
  sounds elegant or advanced

Local lesson in this repository:

- polished language is not proof
- apparently sophisticated AI output still has to survive repository checks and
  artifact review

Repository anchors:

- `README.md`, which defines non-interactive quality commands as part of the
  project’s operating baseline
- `docs/foundation/orchestration-method.md`, where verification is treated as
  the standard for accepting implementation claims

### Kent Beck

Kent Beck is strongly associated with test-first thinking, fast feedback, and
executable verification.

Problem it helps students reason about:

- how to know whether a change actually works instead of merely looking
  plausible

Local lesson in this repository:

- work is not accepted because it reads well or compiles in theory
- quality gates and repeatable checks are part of the method from the first
  sprint onward

Repository anchors:

- `docs/_specs/site-foundation/sprints/sprint-0-nextjs-scaffold.md`, which
  required a smoke test and explicit verification commands
- `README.md`, which exposes `npm run test`, `npm run lint`, `npm run build`,
  and `npm run format:check`

### Martin Fowler

Martin Fowler is commonly invoked for refactoring vocabulary and for the idea
that systems improve through small, safe, named transformations rather than
through constant rewrites.

Problem it helps students reason about:

- how to change a system without losing control of behavior
- why large undifferentiated edits are harder to review and trust

Local lesson in this repository:

- multi-sprint work should be broken into small units with explicit goals and
  verification
- later improvements should be made through bounded changes rather than vague
  cleanup passes

Repository anchors:

- `docs/foundation/orchestration-method.md`, where the lifecycle is defined as
  spec -> sprint -> implementation -> QA
- `docs/_specs/documentation-foundation/sprints/sprint-1-technology-orientation.md`,
  where the stack explanation was isolated into one bounded documentation unit
- `docs/_specs/documentation-foundation/sprints/sprint-2-orchestration-method.md`,
  where the process explanation was isolated into a separate bounded unit

### Ward Cunningham

Ward Cunningham is commonly invoked for technical debt and for the broader idea
that knowledge should be captured in forms the team can revisit.

Problem it helps students reason about:

- why systems become harder to change when decisions are not preserved clearly
- why fast output can create future cost when it is not documented or verified

Local lesson in this repository:

- specs, sprint docs, and durable reference files are not ceremony for their
  own sake
- they are the project’s memory system for AI-assisted work

Repository anchors:

- `docs/foundation/orchestration-method.md`, where artifact memory is defined
  explicitly
- `docs/_specs/documentation-foundation/spec.md`, where the repository commits
  to durable documentation layers rather than relying on chat alone

### Steve Krug

Steve Krug is commonly invoked for clarity, scan-ability, and the idea that
interfaces should not force users to work hard just to understand what they are
looking at.

Problem it helps students reason about:

- how to judge whether an educational interface or document is readable and
  navigable

Local lesson in this repository:

- public teaching material should be easy to scan without becoming simplistic
- landing docs and durable docs should stay organized so the repository remains
  usable to first-time readers

Repository anchors:

- `README.md`, where the landing layer stays concise and points outward to
  deeper docs
- `docs/foundation/technology-orientation.md` and
  `docs/foundation/orchestration-method.md`, where beginner-facing explanations
  are kept separate by topic instead of collapsing into one oversized manual

## How Students Should Use Power Words

Students should use these names as prompts for better questions, not as
substitutes for judgment.

Good use:

- `This feels like a Kent Beck issue because we have not defined how to verify
the claim yet.`
- `This sounds like decorative GoF language unless we can point to the actual
reusable boundary or pattern choice.`
- `This is closer to a Ward Cunningham problem because the decision is living
only in chat instead of in an artifact.`

Weak use:

- `This is good because it sounds SOLID.`
- `This is the right architecture because it references design patterns.`
- `This must be correct because it cites a famous engineer.`

The good use sharpens reasoning. The weak use hides behind reputation.

## Relationship To The Other Foundation Docs

This document is intentionally separate from the other durable foundation docs.

- `docs/foundation/technology-orientation.md` explains what technologies are in
  the project and what is planned next.
- `docs/foundation/orchestration-method.md` explains how the repository turns
  requests into bounded, verified execution.
- `docs/foundation/power-words.md` explains how named frameworks and
  practitioner references function as compressed engineering vocabulary in this
  repository.

Keeping those roles separate makes the docs easier to teach and easier to
maintain.

## Related Artifacts

- `README.md` for the landing-level documentation roadmap
- `docs/foundation/technology-orientation.md` for the stack explanation layer
- `docs/foundation/orchestration-method.md` for the execution-method layer
- `docs/_specs/documentation-foundation/spec.md` for the documentation-system
  contract
- `docs/_specs/documentation-foundation/sprints/sprint-3-power-words.md` for
  the sprint that produced this document
