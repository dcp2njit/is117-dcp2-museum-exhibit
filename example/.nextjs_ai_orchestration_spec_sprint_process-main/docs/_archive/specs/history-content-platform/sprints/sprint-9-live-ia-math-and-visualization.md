# Sprint 9 — Live IA, Math, And Visualization Bridges

## Header

- Goal: expose the depth already built in the repository by upgrading the live
  homepage, adding a key-papers reading map, teaching embeddings and latent
  space through approachable math, and formalizing how diagrams and `eai`
  visuals should be used.
- Spec sections:
  - Problem Statement 1, 3, 4, 5, 6
  - Design Goals 1, 2, 3, 4, 5, 6, 8, 9
  - Architecture: Information Architecture, Guide Commentary System,
    Technical-Concept Teaching Layer, Media System, Editorial And Learning
    Model, Repository Boundaries
  - Security: Repository Accuracy, No False Authority, Provenance Discipline,
    Educational Integrity, Accessible Learning Surface
  - Testing Strategy: Route Coverage, Concept Coverage, Workflow Verification,
    Consistency Review
- Prerequisite: `feat: implement Sprint 8 — foundation models, embeddings, and 2026 surface`
- Expected test count: `7-10 existing + 1-2 new = 8-12 total` depending on the
  added route coverage

## Available Assets

Sprint 8 left the repository with a complete seven-era chronology and durable
supporting docs, but the live product surface still looked like an initial
shell. Sprint 9 is the bridge from content accumulation to a genuinely useful
teaching interface.

| Asset                                                           | Expected verified details at QA time                              | How this sprint uses it                                                           |
| --------------------------------------------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `app/page.tsx`                                                  | Homepage still reflects a Sprint 0 shell                          | Must be rewritten to reflect the current seven-era product                        |
| `docs/content/architecture/intellectual-lineage-reading-map.md` | Durable reading map already exists                                | Becomes the source spine for a live key-papers route                              |
| `docs/content/exemplar/concepts/vector-embeddings.md`           | Embeddings are already defined as a durable concept               | Supplies the live math guide with a historical anchor                             |
| `docs/content/exemplar/concepts/latent-space.md`                | Latent space is already defined as a durable concept              | Supplies the live math guide with a plain-language anchor                         |
| `docs/content/media/diagram-workflow.md`                        | Mermaid is already the default text-first diagram-planning format | Remains the first step in the visualization workflow                              |
| `docs/_research/operations/eai-workflow.md`                     | `eai` operational guidance already exists                         | Allows Sprint 9 to formalize when generated images and narrated assets fit        |
| `docs/content/media/media-record-model.md`                      | Media records support diagram and generated-image tracking        | Supports new visualization candidates for embeddings and interpretability         |
| existing era routes and tests                                   | Era 1 through Era 7 are already rendered and covered              | Homepage and new learning bridges should point into the chronology, not bypass it |

## Tasks

### 1. Define Sprint 9 and realign the live top-level information architecture

Required outcomes:

- add Sprint 9 to the governing spec and create a dedicated sprint document
- replace the outdated homepage shell with a live overview that reflects the
  full chronology and the repository's teaching bridges
- make the homepage visibly route readers toward chronology, key papers, and
  modern math concepts

Required artifact targets:

- `docs/_specs/history-content-platform/spec.md`
- `docs/_specs/history-content-platform/sprints/sprint-9-live-ia-math-and-visualization.md`
- `app/page.tsx`
- `lib/site.ts`

Verify:

```bash
npm run format:check
npm run lint
```

### 2. Add the research and architecture layer for approachable math teaching

Required outcomes:

- create a durable research memo on embeddings, latent space, and the minimum
  LLM math the site intends to teach
- create an architecture note that distinguishes prose, math bridges, diagrams,
  and generated visuals
- keep the math surface minimal, explanatory, and historically grounded rather
  than turning the site into a standalone linear-algebra course

Required artifact targets:

- `docs/_research/topics/embeddings-latent-space-and-llm-math-bridges.md`
- `docs/content/architecture/math-and-visual-explanation-model.md`

Verify:

```bash
npm run format:check
npm run lint
```

### 3. Formalize the visualization workflow for diagrams, charts, and `eai` assets

Required outcomes:

- define a stricter workflow for when to use Mermaid, repository-authored
  diagrams, lightweight explanatory charts, or `eai image`
- record at least two diagram candidates and one generated-image candidate for
  the new embeddings and interpretability teaching surfaces
- preserve provenance discipline by making clear that generated visuals cannot
  invent quantitative claims

Required artifact targets:

- `docs/content/media/visualization-workflow.md`
- `docs/content/media/records/embeddings-neighborhood-diagram.md`
- `docs/content/media/records/interpretability-gap-diagram.md`
- `docs/content/media/records/latent-space-landscape-generated-image.md`

Verify:

```bash
npm run format:check
npm run lint
```

### 4. Add a live key-papers reading map route

Required outcomes:

- expose the durable intellectual-lineage reading map as a live route
- teach the chronology through key papers and texts rather than only through era
  summaries
- make the safety and interpretability thread explicit inside the live product

Required artifact targets:

- `app/reading-maps/intellectual-lineage/page.tsx`

Verify:

```bash
npm run format:check
npm run lint
```

### 5. Add a live embeddings and latent-space math guide

Required outcomes:

- create a plain-language route for vectors, similarity, latent space, and the
  minimum math needed to understand why embeddings matter
- connect the math guide back to Era 5 through Era 7 instead of presenting it
  as detached modern jargon
- use guide commentary to slow down the hardest teaching jumps

Required artifact targets:

- `app/guides/embeddings-latent-space-and-llm-math/page.tsx`

Verify:

```bash
npm run format:check
npm run lint
```

### 6. Expand automated coverage for the new live learning surface

Required outcomes:

- update homepage coverage so it verifies the live chronology and bridge routes
- add focused coverage for the reading map and the math guide
- ensure the new routes reinforce the repository's historical framing

Required artifact targets:

- `tests/app/homepage.test.tsx`
- `tests/app/learning-bridges.test.tsx`

Verify:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
```

## Completion Checklist

- [x] Sprint 9 is defined in the governing spec and sprint-doc layer
- [x] The homepage now reflects the actual seven-era product
- [x] A live reading-map route exists
- [x] A live embeddings and latent-space math guide exists
- [x] Research and architecture docs explain the new math-teaching surface
- [x] Visualization workflow and media records exist for diagrams and generated visuals
- [x] Automated coverage includes the new live learning bridges

## QA Deviations

None.

## Implementation QA Report

Verdict: PASS

Audit summary:

- Sprint 9 resolves the gap between the repository's durable content depth and
  its previously minimal live top-level surface.
- The implementation stays aligned with the spec by routing readers through the
  chronology, key papers, and explanatory math rather than replacing the
  historical structure with generic landing-page language.
- The new visualization workflow keeps Mermaid and media records as the first
  durable planning layer while making room for carefully constrained `eai`
  visuals.

Verification:

- `npm run format:check`
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`
