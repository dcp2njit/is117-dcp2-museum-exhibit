# Site Spec Patterns

## Why This Document Exists

This repository is meant to be studied, not copied.

Students should be able to look at this site, understand the design and process
patterns that make it work, and then write original specs and sprint packages
for a different subject.

This document explains how to make that transfer reliably.

## First Rule: Extract Principles, Not Surfaces

If you only extract the surface features of this site, you will get a weak copy.

Surface features include things like:

- warm paper colors
- serif headlines
- documentary portraits
- chapter pages with elegant cards

Those things matter, but they are not the main lesson.

The main lesson is the underlying system:

- one strong governing metaphor
- one main route through the material
- companion pages that reduce overload
- reusable component patterns
- centralized data and navigation
- specs and sprints that keep the design coherent as the project grows

That is what you should carry into a new project.

## What To Extract Before Writing A New Spec

Before you write a spec for your own project, extract five things from this
site.

### 1. The Governing Metaphor

This site behaves like a museum exhibition catalog.

You need to decide what your project behaves like.

Good alternatives might include:

- field guide
- archive
- atlas
- dossier
- casebook
- lab notebook
- oral-history collection

Your metaphor should be strong enough to shape layout, tone, navigation, and
image policy.

### 2. The Project Thesis

Your project also needs a sentence-level argument about what readers should
understand when they finish the site.

This is different from the metaphor.

- the metaphor shapes the feel of the site
- the thesis shapes the claim the site is making

For example, this site does not only say "AI has a history." It argues that AI
history becomes more legible when readers see chronology, actors,
institutions, papers, and technical bridges as one connected story.

If your thesis is weak, the later spec usually becomes a list of pages without
an argument.

### 3. The Main Route

This site has a central spine: seven eras.

Your project also needs a spine. It might be:

- a chronology
- a sequence of cases
- a set of themes
- a geographic route
- a research pipeline
- a cast of key actors

The spine is what keeps the project from feeling like unrelated pages.

### 4. The Companion Surfaces

This site uses companion pages for:

- paper lineage
- people and institutions
- math translation

Those are not decorative extras. They remove supporting material from the main
chronology so the central route stays readable.

When planning your own project, ask:

- what would overload the main route if it stayed inline
- what deserves its own supporting surface
- what kind of companion page would actually improve understanding

### 5. The Evidence Model

This site teaches with multiple evidence surfaces:

- documentary profiles
- source anchors
- timelines
- summary cards
- visual explanations

Before you write your spec, identify what counts as evidence in your own
subject and how it should appear.

### 6. The Process Model

This repository did not become coherent through one giant prompt.

It used:

- specs
- sprint docs
- bounded implementation
- QA passes
- verification commands

Your project should inherit that discipline, even if your content and aesthetic
are completely different.

## How To Write A Strong Spec From These Patterns

A strong site spec should answer six questions clearly.

### 1. What problem is the site solving?

Do not say only “I want a website about X.”

Say what kind of confusion, overload, invisibility, or fragmentation the site
is trying to fix for readers.

### 2. What should the site feel like?

Name the governing metaphor explicitly.

This helps your agent make better design decisions later, because it gives the
work a clear aesthetic and rhetorical direction.

### 3. What is the main route through the material?

Define the primary user journey early.

That journey should influence navigation, page priorities, and component needs.

### 4. What supporting pages are necessary?

Decide which companion surfaces reduce overload and deepen understanding.

### 5. What reusable systems must exist?

Your spec should name the systems that need to be real architectural layers,
not ad-hoc page code. Examples:

- navigation model
- design tokens
- section/hero patterns
- card and grid systems
- content data model
- media policy

### 6. How will quality be checked?

Your spec should declare verification early. If the site is supposed to feel
coherent, then verification cannot be only visual intuition. It needs:

- formatting and lint checks
- route or content tests where appropriate
- build verification
- later QA against the written spec and sprint doc

## How Specs And Sprint Docs Are Structured In This Repository

Before writing your own artifacts, notice the house shape used across
`docs/_specs/`.

### Specs usually do this work

- define the problem in concrete terms
- state design goals explicitly
- describe the architecture and named systems that must exist
- identify accuracy, scope, or security risks
- define the testing strategy before implementation starts
- end with a sprint plan that breaks the work into bounded units

The spec is the contract. It should explain why the feature exists and what
must be true when it is complete.

### Sprint docs usually do this work

- name the goal for one bounded unit of delivery
- list the governing spec sections
- identify available assets and verified inputs
- define concrete tasks and required outcomes
- declare exact verification commands
- end with a completion checklist and a QA deviations section

The sprint doc is the execution frame. It should be narrow enough that a human
or coding agent can finish it without improvising the architecture.

## How To Choose Scope Boundaries

Students often make two opposite mistakes: either they write one giant sprint,
or they split work into arbitrary file-level fragments.

Better boundaries come from product units.

Good sprint boundaries usually isolate one of these:

- a foundation layer such as tokens, shell, or navigation
- one complete route pattern rather than scattered partial pages
- one companion surface with a clear learning job
- one data-model or media-system upgrade
- one QA and consistency pass across already-built work

Bad boundaries usually look like this:

- "update a few components"
- "work on styling"
- "finish the site"
- "do all remaining cleanup"

If a sprint cannot name one verifiable outcome, it is probably too wide.

## How To Split A Site Spec Into Sprints

A strong sprint plan decomposes the site into bounded implementation units.

A common pattern is:

1. foundation shell and design tokens
2. route skeletons and navigation
3. first complete chapter/page pattern
4. supporting companion surfaces
5. media and content-system refinements
6. QA and consistency pass

Do not split sprints randomly by file. Split them by meaningful product units.

Good sprint boundaries usually produce one verifiable outcome each.

## A Practical Drafting Sequence

If you need to draft a new project from this repository, use this sequence:

1. read `docs/foundation/site-design-philosophy.md` to understand how
   metaphor, pacing, and evidence create coherence
2. read `docs/foundation/site-implementation-codex.md` to see where that
   coherence lives in routes, components, CSS, data, and verification
3. read this document to convert those lessons into an original spec and sprint
   package
4. write your spec before naming specific components or pages
5. derive sprints from product units, not from whichever files seem easiest to
   edit
6. implement one sprint at a time and QA each sprint against the spec

That sequence prevents a common failure mode: inventing implementation details
before the project thesis and scope are actually stable.

## A Minimal Checklist For New Specs

Before you call a spec ready, confirm that it answers these questions:

- what reader problem the site solves
- what governing metaphor gives it a coherent voice
- what the main route is
- which companion surfaces reduce overload
- which systems must be centralized early
- what verification commands and QA passes will be used

If one of those is missing, the later sprint plan usually becomes vague.

## What Existing Workstreams To Study In This Repository

Study these workstreams as examples.

### 1. `docs/_specs/refactor/browser-enhancements/`

What it teaches:

- how to keep scope tight
- how to refine experience quality incrementally
- how CSS-focused work can still be rigorously specified and QAed

### 2. `docs/_specs/refactor/code-quality/`

What it teaches:

- how to audit an existing codebase
- how to identify concrete maintainability problems
- how to plan refactors with explicit evidence and bounded sprints

### 3. `docs/_specs/documentation-foundation/`

What it teaches:

- how documentation can be treated as a real product surface
- how to stage durable docs through multiple sprints
- how repository education can be specified instead of improvised

### 4. `docs/_specs/design-codex/`

What it teaches:

- how to turn an existing product into a studyable pattern source
- how to separate philosophy, implementation codex, and QA
- how to prepare a repository for agent-assisted reuse by students

Read those examples alongside the design-codex documents:

- `site-design-philosophy.md` explains what a project is trying to feel like
- `site-implementation-codex.md` explains which real systems create that feel
- `site-spec-patterns.md` explains how to turn both into a new planning
  package without copying the original product

## Common Failure Modes

### Surface imitation without structural thinking

This produces projects that resemble the site visually but feel incoherent in
use.

### Writing one giant sprint

This makes verification weak and invites drift.

### No governing metaphor

Without a clear metaphor, the site becomes a generic collection of pages and UI
pieces.

### No distinction between main route and companion material

When everything is equally primary, the reader loses the plot.

### Letting the agent reverse-engineer everything from scratch

This increases hallucination and lowers reliability. Give the agent durable
reference documents and a real spec package.

## A Practical Workflow For Students

When starting your own project, use this order:

1. read `docs/foundation/site-design-philosophy.md`
2. read `docs/foundation/site-implementation-codex.md`
3. choose your own topic and governing metaphor
4. write a feature spec for your site
5. QA the spec against the patterns in this repository
6. write Sprint 0
7. implement one sprint at a time with verification after each task
8. run a separate QA pass after implementation

That sequence matters because it keeps intent explicit.

## What Not To Reuse Literally

Do not reuse literally:

- the AI-history thesis
- the seven-era breakdown
- the exact page names
- the exact color system
- the same images or image subjects
- the same copy patterns line-for-line

Reuse instead:

- the discipline of the planning process
- the logic of a strong main route
- the idea of companion surfaces
- the use of reusable component families
- the habit of grounding quality claims in explicit verification

## The Main Lesson

This site is best used as a pattern library of decisions, not as a template to
clone.

If you can explain:

- what gives it coherence
- what in the code produces that coherence
- what in the process preserves that coherence over time

then you are ready to write specs and sprints for a site of your own.
