# Sprint 0 — Student Orientation & Workstream Index

## Header

- **Goal:** Make the repository navigable for students who will clone it as a
  reference for building their own museum site. Create a curated reading path,
  a workstream status index, sharpen the README/agent.md separation, and add
  status markers to every spec.
- **Spec sections:** All design goals (1–5)
- **Prerequisite:** None (first and only sprint)

## Available Assets

| Asset                           | Location                | Current State                                                                                                                                                                                                                                      |
| ------------------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `README.md`                     | 221 lines               | Thesis is strong; "Current State" section is stale (references only Sprint 0 of site-foundation as implemented); Documentation Roadmap section lists foundation docs one-at-a-time with redundant narrative; Development/Quality sections are fine |
| `agent.md`                      | 272 lines               | Good LLM control doc; "Current Repository State" section is stale; "Primary Reference Files" list is incomplete (missing research, content, refactor specs); overlaps README on thesis/purpose                                                     |
| `docs/_specs/example_spec.md`   | 330 lines               | Process guide template from another project; feature table references RBAC, Tool Architecture, Vector Search — not this project's workstreams                                                                                                      |
| `docs/_specs/example_sprint.md` | 0 lines                 | Empty file                                                                                                                                                                                                                                         |
| `docs/foundation/`              | 4 files                 | technology-orientation.md (254L), orchestration-method.md (340L), power-words.md (287L), lightweight-change-path.md (223L) — all complete and student-ready                                                                                        |
| 11 `spec.md` files              | `docs/_specs/*/spec.md` | No status markers; completion state must be inferred                                                                                                                                                                                               |

## Tasks

### 1. Create student reading guide

Create `docs/foundation/student-reading-guide.md`.

This is the primary new artifact. It tells a student: you just cloned this
repo, here is what to read and why, in order.

**Structure:**

```markdown
# Student Reading Guide

## What This Repository Is

(2–3 sentences: working museum site + agentic orchestration teaching system)

## How To Use This As A Reference

(Explain: your LLM reads these docs to learn the pattern, then helps you
replicate it for your own museum topic)

## Reading Path

### Step 1: Understand the method

- docs/foundation/orchestration-method.md — how specs/sprints/QA work
- docs/foundation/lightweight-change-path.md — when to use the lighter process

### Step 2: Understand the technology

- docs/foundation/technology-orientation.md — what each technology is and why

### Step 3: Understand the vocabulary

- docs/foundation/power-words.md — how named frameworks are used here

### Step 4: Study a completed spec-to-implementation chain

- Pick one completed workstream from the status index (see below)
- Read: spec.md → sprint docs → look at the code they produced
- Recommended starting example: browser-enhancements (5 sprints, clear
  CSS-only scope, easy to trace from spec to code)

### Step 5: Study the content architecture

- docs/content/architecture/content-model.md — how content entities work
- docs/content/architecture/era-map.md — the chronological spine
- docs/content/architecture/editorial-and-learning-rules.md — writing rules

### Step 6: Study the research workflow

- docs/\_research/README.md — how research memos work
- docs/\_research/templates/research-memo-template.md — the durable pattern
- docs/\_research/topics/pre-shannon-to-dartmouth.md — a completed example

## Where To Find The Workstream Index

→ docs/\_specs/README.md has the full status table for all workstreams.

## What To Do Next

Once you understand the method, start your own museum project:

1. Pick your topic
2. Write a spec for your first feature
3. Have your LLM QA the spec
4. Write your first sprint doc
5. Implement and verify
```

Adapt the above to match the repo's existing prose tone (direct, non-marketing,
serious but accessible). Keep it under 120 lines.

**Verify:** File exists at `docs/foundation/student-reading-guide.md`. All
linked paths resolve to real files.

### 2. Create workstream status index

Replace `docs/_specs/example_spec.md` with a project-specific
`docs/_specs/README.md`.

The current `example_spec.md` is a generic process guide from another project
(references RBAC, Vector Search, Tool Architecture). Replace it with an index
that covers **this project's** workstreams.

**Structure:**

```markdown
# Specifications Index

## Process

(Keep 3–4 sentences from the existing process guide explaining the
spec → sprint → implement → QA lifecycle. Link to
docs/foundation/orchestration-method.md for the full explanation.)

## Workstreams

| Workstream                                                      | Status      | Sprints | What It Produced                                                                            |
| --------------------------------------------------------------- | ----------- | ------- | ------------------------------------------------------------------------------------------- |
| [site-foundation](site-foundation/)                             | Complete    | 6       | Next.js scaffold, design system, content architecture, homepage shell, quality gates        |
| [documentation-foundation](documentation-foundation/)           | Complete    | 6       | README, technology orientation, orchestration method, power words, lightweight change path  |
| [history-content-platform](history-content-platform/)           | Complete    | 10      | Research workflow, content model, era map, 7 era packages, media pipeline, exemplar content |
| [web-book-system](web-book-system/)                             | Complete    | 9       | Homepage grid, chronology section, reading model, scenes, footer, shared design system      |
| [setup](setup/)                                                 | Reference   | 0       | Architectural rules for UI framework; implemented as part of site-foundation                |
| [refactor/code-quality](refactor/code-quality/)                 | Complete    | 5       | Token consolidation, section file split, classname consistency, Next.js patterns            |
| [refactor/browser-polish](refactor/browser-polish/)             | Complete    | 4       | DRY consolidation, CSS features, accessibility focus                                        |
| [refactor/browser-enhancements](refactor/browser-enhancements/) | Complete    | 5       | Mobile touch, typography, visual effects, layout/color, QA pass                             |
| [refactor/reading-system](refactor/reading-system/)             | In Progress | 2       | Shared chapter patterns (chapter-hero, chapter-section, editorial-aside)                    |
| [refactor/narrative-surfaces](refactor/narrative-surfaces/)     | Planned     | 2       | Homepage and reading-map chapter refactor                                                   |
| [refactor/era-chapters](refactor/era-chapters/)                 | Planned     | 4       | Era 1–7 chapter-style rollout                                                               |
| [documentation-cleanup](documentation-cleanup/)                 | In Progress | 1       | Student orientation, workstream index, status markers                                       |

## Recommended Study Order

For students learning the agentic orchestration method:

1. **browser-enhancements** — cleanest example of the full cycle (5 focused
   sprints, CSS-only scope, clear spec → sprint → code traceability)
2. **code-quality** — shows how to audit existing code and plan targeted
   refactors
3. **documentation-foundation** — shows how documentation itself can be
   spec'd and staged
```

Delete `docs/_specs/example_spec.md` and `docs/_specs/example_sprint.md` after
creating the README.

**Verify:** `docs/_specs/README.md` exists. All workstream links resolve. Old
`example_spec.md` and `example_sprint.md` are gone.

### 3. Add status markers to all spec.md files

Add a status line immediately after the H1 title in each spec.md file.

Format: `> **Status:** Complete | In Progress | Planned | Reference`

Apply these statuses:

| Spec                                    | Status      |
| --------------------------------------- | ----------- |
| `site-foundation/spec.md`               | Complete    |
| `documentation-foundation/spec.md`      | Complete    |
| `history-content-platform/spec.md`      | Complete    |
| `web-book-system/spec.md`               | Complete    |
| `setup/spec.md`                         | Reference   |
| `refactor/code-quality/spec.md`         | Complete    |
| `refactor/browser-polish/spec.md`       | Complete    |
| `refactor/browser-enhancements/spec.md` | Complete    |
| `refactor/reading-system/spec.md`       | In Progress |
| `refactor/narrative-surfaces/spec.md`   | Planned     |
| `refactor/era-chapters/spec.md`         | Planned     |

Insert the status line between the H1 and the first H2, with a blank line
above and below.

Example for browser-enhancements:

```markdown
# Browser-Specific Enhancements — Spec

> **Status:** Complete

## Problem Statement
```

**Verify:** `grep -r "Status:" docs/_specs/*/spec.md docs/_specs/refactor/*/spec.md`
returns 11 matches.

### 4. Rewrite README.md

Rewrite `README.md` to focus on student orientation. Keep the strong thesis
and purpose sections. Fix these problems:

1. **Stale "Current State" section.** Replace with an accurate summary of
   what's implemented (working Next.js 16 app with 7 era routes, homepage,
   reading maps, people/institutions page, full test suite, 11 completed or
   planned spec workstreams).

2. **Redundant "Documentation Roadmap" section.** The four foundation docs
   are listed with repetitive explanatory paragraphs. Replace with a clean
   list pointing to the student reading guide.

3. **Missing pointer to the student reading guide.** Add a prominent "Start
   Here" or "For Students" section early in the document that points to
   `docs/foundation/student-reading-guide.md`.

4. **Missing pointer to the workstream index.** Add a link to
   `docs/_specs/README.md`.

Keep Development, Quality Commands, and Repository Structure sections as-is
(they are useful and accurate). Keep the thesis and "Who This Is For" sections.
Keep the Remote section.

Target length: ~180 lines (down from 221, mostly by collapsing the
documentation roadmap).

**Verify:** `cat README.md | head -20` shows updated content. All linked
paths resolve.

### 5. Update agent.md repository state

Update the "Current Repository State" section and "Primary Reference Files"
list in `agent.md`. Do not change the process rules, scope discipline, or
verification rules.

Specific changes:

1. **"Current Repository State" section** — update to reflect:
   - 7 era routes implemented
   - Homepage with 4 sections (opening, chronology, scenes, reading model)
   - Reading maps and people/institutions pages
   - 5 durable student-facing docs (the 4 existing + new student reading guide)
   - 11 workstream specs (8 complete, 1 reference, 2 in progress, 2 planned)
   - 5 research memos in `docs/_research/topics/`
   - Content architecture with 7 era packages, 25 concepts, 21 people,
     9 institutions

2. **"Primary Reference Files" section** — update to include:
   - `docs/foundation/student-reading-guide.md`
   - `docs/_specs/README.md`
   - `docs/_specs/history-content-platform/spec.md`
   - `docs/_specs/web-book-system/spec.md`
   - `docs/_research/README.md`

3. **Remove teaching prose that duplicates README.md.** The "Purpose Of This
   Repository" section should stay but be tightened to 3–4 lines. The
   explanation of the dual purpose belongs in README, not here.

**Verify:** `grep "student-reading-guide" agent.md` returns a match. The
"Current Repository State" section no longer references Sprint 0 of
site-foundation as the latest milestone.

### 6. Delete stale template files

Delete `docs/_specs/example_sprint.md` (empty file, 0 bytes). The process
guide content from `example_spec.md` is preserved in the new
`docs/_specs/README.md` (condensed and project-specific).

Delete `docs/_specs/example_spec.md` after confirming the new
`docs/_specs/README.md` is in place.

**Verify:** `ls docs/_specs/example_*` returns "No such file or directory."

## Completion Checklist

- [ ] `docs/foundation/student-reading-guide.md` exists with curated path
- [ ] `docs/_specs/README.md` exists with workstream status table
- [ ] All 11 spec.md files have `> **Status:**` markers
- [ ] `README.md` rewritten with student orientation, accurate state, reading
      guide pointer
- [ ] `agent.md` repository state updated, primary references updated
- [ ] `docs/_specs/example_spec.md` and `example_sprint.md` deleted
- [ ] All linked file paths in all modified docs resolve to real files
- [ ] `npm run build` succeeds
- [ ] `npx vitest run` passes

## QA Deviations

(To be populated during implementation QA.)
