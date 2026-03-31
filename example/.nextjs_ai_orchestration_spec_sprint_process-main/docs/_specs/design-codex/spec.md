# Design Codex Specification

> **Status:** Complete

## Problem Statement

This repository now contains a fully realized example site with a strong visual
identity, disciplined content architecture, reusable chapter components,
structured narrative data, and a spec-driven delivery process. What it does not
yet contain is a single workstream that explains how to study this site as both
an editorial object and a technical system.

That gap creates three concrete problems:

1. Students can see that the site is effective, but they cannot yet reliably
   explain why it looks the way it does, how the curator’s intent shapes the
   design, or which structural choices create clarity rather than clutter.
2. A coding agent asked to “learn from this site” currently has to reverse-
   engineer the architecture directly from source files with no durable codex
   that maps components, data patterns, CSS systems, and page composition into
   a reusable model.
3. The repository contains many real workstreams under `docs/_specs/`, but it
   does not yet contain an explicit teaching package that helps students derive
   their own specs and sprints from this site without copying the product
   superficially.

Evidence from the current repository state:

- The application has a strong chapter-based structure across `app/`,
  `components/`, and `lib/`, but there is no dedicated student-facing document
  explaining the museum/editorial design doctrine behind it.
- `app/globals.css` contains a substantial design system, including warm
  surfaces, chapter accent themes, and a phi-based spacing scale, but there is
  no durable reference explaining how those systems work together.
- Reusable components such as `ChapterHero`, `ChapterSection`,
  `ChapterVisualBreak`, `EditorialCardGrid`, `NarrativeProfileGrid`, and
  `FocalImage` encode major architectural patterns, but those patterns are not
  yet documented for agentic reuse.
- The repository already teaches the general orchestration method through the
  documentation-foundation workstream, but it does not yet teach how to extract
  a site-specific design language and convert it into reliable specs and sprint
  plans for new domains.

The need is not a marketing case study. The need is a durable teaching codex
that explains both the curatorial logic and the implementation logic of this
site so students and coding agents can adapt its patterns responsibly.

## Design Goals

1. **Explain Why The Site Looks The Way It Does**
   The workstream must teach the visual and editorial logic of the site in a
   way students can understand and reuse.

2. **Preserve Curatorial Intent**
   The documentation must explain how a curator thinks about sequence,
   evidence, actors, images, emphasis, and restraint rather than treating the
   site as a generic component library.

3. **Make The Architecture Legible To Agents**
   The workstream must produce a codex that maps real files, components, data
   models, and CSS systems so an LLM can reason from the repository accurately.

4. **Teach Adaptation Rather Than Copying**
   The resulting documentation must help students derive their own concepts,
   metaphors, and structures rather than cloning the AI history site.

5. **Connect Product Form To Process Discipline**
   The workstream must show how strong site design emerges from specs,
   sprints, verification, and incremental work rather than from a single burst
   of inspiration.

6. **Use Existing Workstreams As Examples**
   The documentation must point students to real specs and sprints already in
   this repository so they can learn from completed artifacts.

7. **Remain Repository-Grounded**
   Every claim about design, code structure, component purpose, or workflow
   must be tied to the actual repository state.

## Architecture

### Overview

This feature creates a two-layer teaching package:

1. a **student-facing curatorial/design explanation** that explains the site as
   an editorial object
2. an **agent-facing technical codex** that explains the implementation system
   as reusable architecture

A third supporting document should connect those two layers to the spec-and-
sprint workflow already present in the repository.

### Required Durable Documents

This workstream must produce durable documentation under `docs/foundation/`.
At minimum:

- `docs/foundation/site-design-philosophy.md`
- `docs/foundation/site-implementation-codex.md`
- `docs/foundation/site-spec-patterns.md`

These are durable teaching documents. They must not live only inside
`docs/_specs/`.

### Document Roles

#### 1. Site Design Philosophy

This document explains the site from the perspective of design, curation, and
pedagogy.

It must cover:

- the museum / exhibition metaphor
- why the palette, typography, spacing, and editorial surfaces feel coherent
- how chronology, companion pages, and navigation express argument structure
- how images function as evidence, atmosphere, or explanatory diagrams
- why restraint matters more than decoration
- how students should choose and sustain their own metaphor for a different
  subject

This document is for humans first.

#### 2. Site Implementation Codex

This document explains the site from the perspective of code structure and
component architecture.

It must cover:

- route structure under `app/`
- reusable component families under `components/`
- CSS architecture in `app/globals.css`
- data architecture in `lib/`
- image pipeline and focus-point system
- navigation model
- testing and verification shape
- adaptation rules for new projects

This document is for coding agents and advanced students.

#### 3. Site Spec Patterns

This document explains how to derive new work from this site without copying
it.

It must cover:

- how to identify the site’s governing design principles
- how to translate those principles into a new domain-specific concept
- how to write a spec for a new site inspired by the patterns here
- how to decompose that spec into sprints
- which existing workstreams in this repository are best used as examples

This document bridges philosophy and execution.

### Extraction Model

The workstream must teach extraction at three levels:

1. **Surface level** — typography, imagery, spacing, panels, and hierarchy
2. **Structural level** — routes, heroes, sections, grids, transitions,
   navigation, and supporting pages
3. **Process level** — specs, sprint docs, implementation sequencing, and QA

Students and agents must learn that reliable adaptation comes from all three
levels together. Surface imitation alone is insufficient.

### Site Patterns That Must Be Documented

The codex must explicitly cover the following repository-grounded patterns:

- chapter-driven pages built from `hero-panel` + `ChapterHero` + repeated
  `ChapterSection` blocks
- chapter-theme accent variants such as `chapter-theme--precursor`,
  `chapter-theme--formation`, `chapter-theme--guide`, and related theme tokens
- phi-based spacing tokens under `:root`
- reusable editorial grids such as `content-grid`, `documentary-grid`,
  `visualization-grid`, and timeline layouts
- centralized narrative data in `lib/narrative-data.ts`
- navigation declarations in `lib/site-navigation.ts`
- `FocalImage` plus generated image focus metadata for consistent cropping
- companion chapter pattern across reading map, people/institutions, and math
  guide pages
- tests that assert headings, links, and historical continuity rather than only
  implementation trivia

### Adaptation Rules

The documents produced by this workstream must teach students and agents to:

- keep the structural discipline while changing the subject matter
- select a new metaphor or editorial frame appropriate to their own project
- build new specs and sprints from their own content and goals
- reuse patterns intentionally rather than reusing copy, image choices, or the
  AI-history narrative itself

## Security

This feature is documentation-focused, but it has meaningful accuracy and
pedagogical risks.

1. **No False Reverse Engineering**
   The documents must not invent component roles, data models, or workflow
   explanations that are not supported by the repository.

2. **No Copying Guidance**
   The documentation must not encourage students to clone the site literally.
   It must explicitly frame reuse as pattern transfer, not product duplication.

3. **No Hidden Dependency Claims**
   If the codex recommends a pattern, it must name the real file or system that
   implements it in this repo.

4. **No Process Dilution**
   The workstream must not imply that good design emerges independently of
   scope control, specs, sprint sequencing, and verification.

5. **Repository Accuracy**
   All referenced files, scripts, and artifacts must exist and match the actual
   codebase.

## Testing Strategy

This workstream changes documentation, but its claims depend on code reality.
Validation must include both documentation checks and repository-grounding
checks.

### Required Validation Categories

1. **Artifact Accuracy**
   Every referenced component, route, CSS system, data file, and script must be
   verified against the repository.

2. **Concept Coverage**
   The final document set must cover curatorial logic, component architecture,
   CSS/token systems, data patterns, and spec/sprint derivation.

3. **Template Quality**
   The examples of spec-writing and sprint-writing must align with the existing
   house style already used in `docs/_specs/`.

4. **Consistency Review**
   The student-facing and agent-facing documents must reinforce each other
   rather than contradicting each other.

5. **Repository Verification**
   If any code examples or commands are included, they must be checked against
   the repository scripts and file structure.

### Verification Baseline

Each sprint must specify exact verification steps. Depending on the sprint,
verification may include:

```bash
npm run format:check
npm run lint
npm run test
npm run build
```

Documentation-only sprints do not need every command unless they change code
or reference code paths that require deeper validation, but the sprint doc must
state exactly why the selected commands are sufficient.

## Sprint Plan

| Sprint   | Goal                                                                                                                                       |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Sprint 0 | Audit the current site and write the student-facing curatorial/design philosophy document                                                  |
| Sprint 1 | Write the agent-facing implementation codex covering routes, components, CSS architecture, data flow, image handling, and testing patterns |
| Sprint 2 | Write the spec-patterns document showing how students should derive new specs and sprints from this site without copying it                |
| Sprint 3 | Perform QA across the full package, verify repository accuracy, and align the docs with existing workstream conventions                    |

## Future Considerations

The following items are explicitly out of scope unless a later spec adds them:

- turning the codex into an in-app tutorial experience
- generating automated diagrams from the repository
- building a generic starter template package from this site
- creating classroom rubrics or grading systems
- domain-specific spec packages for every future student project
- converting the design codex into a separate published website

This feature succeeds when a student can explain why this site feels coherent,
a coding agent can identify the reusable architecture accurately, and both can
convert those lessons into reliable specs and sprint plans for an original
project.
