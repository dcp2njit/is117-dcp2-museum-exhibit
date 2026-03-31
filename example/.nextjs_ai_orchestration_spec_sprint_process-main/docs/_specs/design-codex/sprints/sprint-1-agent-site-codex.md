# Sprint 1 — Agent Site Codex

## Header

- Goal: write an agent-facing technical codex that explains how the site is
  built so a coding agent can extract reusable patterns accurately.
- Spec sections:
  - Problem Statement
  - Design Goals 3, 5, 7
  - Architecture: Required Durable Documents, Site Implementation Codex,
    Extraction Model, Site Patterns That Must Be Documented, Adaptation Rules
  - Security: No False Reverse Engineering, No Hidden Dependency Claims,
    Repository Accuracy
  - Testing Strategy: Artifact Accuracy, Concept Coverage, Repository
    Verification
- Prerequisite: Sprint 0 complete or drafted, so philosophy and technical codex
  can reinforce one another
- Expected test count: `0 existing + 0 new = 0 total`

## Available Assets

| Asset                                                  | Verified details                                                                                                                        | How this sprint uses it                                                    |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `components/content/chapter/chapter-hero.tsx`          | `ChapterHero` accepts `eyebrow`, optional `period`, `title`, `lede`, optional `links`, optional `children`, and optional `featureImage` | Documents the hero surface as the primary chapter opener pattern           |
| `components/content/chapter/chapter-section.tsx`       | `ChapterSection` wraps `SectionHeading` and creates section rhythm through the shared `chapter-section` class                           | Documents the standard section shell for chapter pages                     |
| `components/content/chapter/chapter-visual-break.tsx`  | `ChapterVisualBreak` renders full-width editorial imagery between sections                                                              | Documents the chapter-image pattern used to break dense runs of text/cards |
| `components/content/editorial/editorial-card-grid.tsx` | Reusable content grid that can include optional images and metadata                                                                     | Documents the base editorial card pattern                                  |
| `components/content/editorial/narrative-card-grid.tsx` | Adapts centralized narrative data into documentary profile and source-anchor grids                                                      | Documents the site’s data-to-card transformation pattern                   |
| `components/media/focal-image.tsx`                     | Wraps `next/image` and applies stored focus metadata from `lib/image-focus`                                                             | Documents the image-cropping system                                        |
| `lib/narrative-data.ts`                                | Exports `NarrativeProfile`, `HistoricalAnchor`, and multiple curated arrays                                                             | Documents the central content model                                        |
| `lib/site-navigation.ts`                               | Encodes top navigation, section navigation, and footer navigation                                                                       | Documents the navigation model                                             |
| `app/globals.css`                                      | Contains design tokens, chapter themes, layout shells, grids, visual-break styles, visualization styles, and mobile rules               | Documents the CSS architecture and naming system                           |
| `package.json`                                         | Verifies scripts such as `dev`, `build`, `test`, `generate:image-focus`, `format:check`                                                 | Grounds the codex in real verification commands                            |

## Tasks

### 1. Audit the technical architecture

Read the repository as an implementation system rather than as prose.

Required topics to document:

- route anatomy under `app/`
- component families and their responsibilities
- CSS token system and layout classes
- chapter theme model
- centralized data and filtering patterns
- navigation configuration
- image generation and focus-point pipeline
- verification/testing shape

Key implementation details:

- Use exact file paths and real component names.
- Explain the relationship between files, not only the files in isolation.
- Keep the document useful to both an LLM and an advanced student.

Verify:

```bash
npm run format:check
```

### 2. Write `docs/foundation/site-implementation-codex.md`

Create a durable technical reference.

Required sections:

- route map and page categories
- component catalog by family
- CSS architecture and token systems
- data architecture and filtering patterns
- media/image pipeline
- navigation and shell patterns
- tests and verification commands
- adaptation rules for new domains

Required outcomes:

- a coding agent can identify where to look for major site behaviors
- a student can map design intent to implementation structure
- the document is specific enough to reduce hallucinated reverse engineering

Verify:

```bash
npm run format:check
```

### 3. Encode adaptation guidance for agents

The codex must not only describe the current site. It must also tell an agent
how to transfer the patterns into a new project responsibly.

Required outcomes:

- explain what should usually be preserved (chapter shell, section rhythm,
  structured navigation, evidence surfaces, centralized data)
- explain what must change for a new domain (metaphor, content, palette,
  illustrations, era/chapter model if inapplicable)
- explain how an agent should inspect the site before proposing changes
- explain how specs and sprint docs should be generated from the extracted
  patterns

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [x] the technical architecture has been audited against real files
- [x] `docs/foundation/site-implementation-codex.md` exists
- [x] the document explains routes, components, CSS, data, media, and tests
- [x] the document includes adaptation rules for coding agents
- [x] the document is repository-grounded and specific
- [x] `npm run format:check` passes

## QA Summary

- QA target: `docs/foundation/site-implementation-codex.md` reviewed against
  `docs/_specs/design-codex/spec.md`
- Spec coverage confirmed:
  - Problem Statement: the codex maps the architecture into a reusable,
    repository-grounded model for agents and advanced students
  - Design Goals 3, 5, 7: real files, component families, CSS systems, data
    flow, navigation, media pipeline, and verification commands are all named
    concretely
  - Architecture: the codex covers route structure, component families,
    chapter-theme tokens, image pipeline, adaptation rules, and the companion
    chapter pattern
  - Security: file references are concrete enough to reduce hallucinated
    reverse engineering and hidden dependency claims
- Verification result: `npm run format:check` passed
- Findings: none

## QA Deviations

None.
