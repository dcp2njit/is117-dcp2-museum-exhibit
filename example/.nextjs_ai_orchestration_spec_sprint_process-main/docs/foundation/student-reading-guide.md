# Student Reading Guide

## What This Repository Is

This repository is two things at once: a working museum-style website about
the history of artificial intelligence, and a teaching system for serious
AI-assisted software delivery. The site is the example product. The method —
specifications, sprint documents, implementation passes, and QA passes — is
the primary lesson.

## How To Use This As A Reference

You are expected to build your own museum site on a topic you choose. Your LLM
will read the documents in this repository to learn the orchestration pattern,
then help you replicate it for your own project. The goal is not to copy this
site. The goal is to study how it was planned, built, and verified, then apply
that same discipline to your own work.

Think of yourself as the CEO of your museum. You set the vision, define the
scope, and make the judgment calls. Your LLM is a high-leverage engineering
instrument — but only when you direct it through explicit artifacts and
objective quality gates.

## Reading Path

### Step 1: Understand the method

Start here. These two documents explain the core workflow that drives
everything in this repository.

- [Orchestration Method](orchestration-method.md) — how specs, sprints, and
  QA passes work together to turn vague intent into bounded, verified execution
- [Lightweight Change Path](lightweight-change-path.md) — when a narrow change
  can use a smaller process instead of the full workflow

### Step 2: Understand the technology

This document explains what each technology in the stack is, why it was chosen,
and where to see it in action.

- [Technology Orientation](technology-orientation.md) — Next.js, React,
  TypeScript, Tailwind CSS, Vitest, Playwright, Radix UI

### Step 3: Understand the vocabulary

This repository uses named frameworks and practitioner references as
compressed engineering vocabulary. This document explains the rules.

- [Power Words](power-words.md) — how named frameworks are used here, when
  they are valid, and how to avoid cargo-cult adoption

### Step 4: Understand verification and deployment

This document explains why deterministic verification tools are the essential
complement to the spec/sprint/QA process — and why they matter more, not less,
when AI generates the code.

- [Verification & Deployment](verification-and-deployment.md) — the full
  quality stack from local tools to CI/CD to Lighthouse to GitHub Pages

### Step 5: Study a completed spec-to-implementation chain

Pick one completed workstream from the
[workstream index](../_specs/README.md) and read through its full chain:
spec → sprint docs → the code they produced.

**Recommended starting example:**
[browser-enhancements](../_specs/refactor/browser-enhancements/) — five
focused sprints, CSS-only scope, clear traceability from spec evidence table
to `@supports` gates in `app/globals.css`. Start with `spec.md`, then read
the sprints in order (0 through 4).

Other good examples:

- [code-quality](../_specs/refactor/code-quality/) — shows how to audit
  existing code, identify DRY violations, and plan targeted refactors
- [documentation-foundation](../_specs/documentation-foundation/) — shows how
  documentation itself can be specified and staged through sprints

### Step 6: Study why this site works as a product

These documents explain the site itself as a design system, a curatorial
artifact, and a reusable pattern source.

- [Site Design Philosophy](site-design-philosophy.md) — why the site feels
  like a museum-exhibition reference instead of a generic web app
- [Site Implementation Codex](site-implementation-codex.md) — where the design
  logic lives in the routes, components, CSS, data, navigation, and media
  pipeline
- [Site Spec Patterns](site-spec-patterns.md) — how to turn what you learn
  from this site into original specs and sprint packages for your own project

### Step 7: Study the content architecture

These documents define how the site's content is structured, what entities
exist, and what rules govern editorial decisions.

- [Content Model](../content/architecture/content-model.md) — eras, people,
  concepts, institutions, and how they cross-link
- [Era Map](../content/architecture/era-map.md) — the seven-era chronological
  spine with teaching justifications for each boundary
- [Editorial and Learning Rules](../content/architecture/editorial-and-learning-rules.md)
  — practical guidance for writing content that teaches clearly

### Step 8: Study the research workflow

Research decisions are preserved in durable memos so they can be reviewed and
verified, not buried in chat history.

- [Research README](../_research/README.md) — how the research layer works
- [Research Memo Template](../_research/templates/research-memo-template.md)
  — the repeatable pattern for capturing research
- [Pre-Shannon to Dartmouth](../_research/topics/pre-shannon-to-dartmouth.md)
  — a completed example memo

## Where To Find The Workstream Index

The full status table for all workstreams is at
[docs/\_specs/README.md](../_specs/README.md). It shows which specs are
complete (study these), in progress, or planned.

## What To Do Next

Once you understand the method, start your own museum project:

1. Pick your topic
2. Write a spec for your site foundation
3. Have your LLM QA the spec against the example specs in this repo
4. Write your first sprint doc
5. Implement the sprint, running verify steps after each task
6. QA the implementation as a separate pass
7. Repeat for each feature

The process is the product. If your LLM drifts, the spec pulls it back. If
you lose context between sessions, the sprint doc preserves intent. If
completion feels ambiguous, the verification commands give you an objective
answer.
