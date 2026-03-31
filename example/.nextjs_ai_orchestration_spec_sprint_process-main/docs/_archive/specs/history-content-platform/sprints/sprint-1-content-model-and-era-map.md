# Sprint 1 — Content Model And Era Map

## Header

- Goal: define the durable content model for eras, people, concepts,
  institutions, debates, and guide callouts; establish the initial era map;
  and document the editorial rules that govern GPT-5.4 guide commentary in the
  live content system.
- Spec sections:
  - Problem Statement 1, 4, 6
  - Design Goals 1, 2, 4, 5, 8, 9
  - Architecture: Audience Model, Content Model, Information Architecture,
    Guide Commentary System, Editorial And Learning Model,
    Technical-Concept Teaching Layer
  - Security: Repository Accuracy, No False Authority, Educational Integrity
  - Testing Strategy: Artifact Accuracy, Concept Coverage,
    Minimum Slice Completeness, Consistency Review
- Prerequisite: `docs: implement Sprint 0 — research workflow and eai operations`
- Expected test count: `1 existing + 0 new = 1 total`

## Available Assets

This sprint depends on the research layer created in Sprint 0. During Sprint
Doc QA, verify the actual research artifacts and any early content decisions
before implementation.

| Asset                                                    | Expected verified details at QA time                                                          | How this sprint uses it                                                        |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `docs/_specs/history-content-platform/spec.md`           | Final feature contract for entities, IA, guide commentary, and editorial rules exists         | Primary source of scope and required coverage                                  |
| `docs/_research/README.md`                               | Durable research workspace index exists from Sprint 0                                         | Supplies the research-layer structure and usage boundaries                     |
| `docs/_research/operations/eai-workflow.md`              | Verified `eai` workflow, environment mapping, and tool limitations are documented             | Ensures Sprint 1 uses verified research behavior rather than assumptions       |
| `docs/_research/templates/research-memo-template.md`     | Memo pattern exists with source capture and media-planning sections                           | Defines the durable structure for future topic research                        |
| `docs/_research/topics/pre-shannon-to-dartmouth.md`      | One real exemplar memo exists with timeline anchors, sources, open questions, and media ideas | Seeds the era map and exemplar content direction                               |
| raw Sprint 0 `eai` search artifacts                      | Saved Markdown and JSON outputs exist, but source citations may still need manual capture     | Prevents Sprint 1 from assuming raw tool output is a complete provenance layer |
| current app content structure                            | Live app shell exists but not the full content system                                         | Helps choose durable content artifacts versus rendered output                  |
| `agent.md` and `docs/foundation/orchestration-method.md` | Repo process and no-false-authority rules are already documented                              | Governs the guide-commentary and accuracy rules                                |

## Tasks

### 1. Define the durable content entity model

Create the durable content-model artifacts that describe what an era, person,
concept, institution, debate, and guide callout must contain.

Required outcomes:

- define the minimum fields or sections for each entity type
- make cross-linking expectations explicit
- distinguish historical narrative from guide commentary
- keep the model simple enough to implement without a CMS-level abstraction

Required artifact targets:

- `docs/content/architecture/`
- `docs/content/architecture/content-model.md`

Key implementation details:

- The exact artifact path must respect the repo’s documentation boundaries.
- The model should support future rendered content without locking the repo
  into premature technical complexity.
- The model should assume that reviewed memo source tables remain the durable
  source baseline when raw `eai` outputs omit citations.

Verify:

```bash
npm run format:check
```

### 2. Define the initial era map

Establish the high-level historical spine for the site.

Required outcomes:

- define the initial eras spanning the pre-Shannon period to the present
- give each era a concise scope description
- identify the intended role of each era in the broader teaching journey
- ensure the era map is usable as the primary navigation spine

Required artifact targets:

- `docs/content/architecture/era-map.md`

Key implementation details:

- Eras should be broad enough to organize the story but specific enough to be
  pedagogically useful.
- Avoid excessive granularity before the exemplar package exists.
- Resolve the open question from Sprint 0 about whether the early material is
  best framed as one pre-Shannon-to-Dartmouth era or two adjacent eras.

Verify:

```bash
npm run format:check
```

### 3. Define the GPT-5.4 guide-callout model

Create the editorial and structural rules for the named guide layer.

Required outcomes:

- define what a guide callout is allowed to do
- define what it must not do
- define placement, tone, and evidence expectations
- define at least one reusable guide-callout pattern for live content

Required artifact targets:

- `docs/content/architecture/guide-commentary-model.md`

Key implementation details:

- The guide system is mandatory for this feature and cannot remain a vague idea.
- Keep the rules tight enough that later content writers cannot drift into
  filler commentary.

Verify:

```bash
npm run format:check
```

### 4. Document editorial pacing and learning rules

Translate the spec’s cognitive-load and editorial principles into practical
content guidance.

Required outcomes:

- define segmentation rules for dense historical material
- define when technical concept teaching should interrupt or support the
  chronology
- define how guide commentary and media should support comprehension rather
  than clutter the page
- keep the rules concrete enough to use during Sprint 3 implementation

Required artifact targets:

- `docs/content/architecture/editorial-and-learning-rules.md`

Verify:

```bash
npm run format:check
```

### 5. Create the implementation targets for the exemplar slice

Prepare Sprint 3 by selecting the initial era package and identifying its core
linked entities.

Required outcomes:

- choose one era for the exemplar package
- identify the initial people and concept units linked to that era
- identify where guide commentary is expected inside that slice
- ensure the chosen slice is research-backed and realistically implementable

Required artifact targets:

- `docs/content/architecture/exemplar-slice-plan.md`

Key implementation details:

- The current leading candidate slice is the early AI origin story captured in
  `docs/_research/topics/pre-shannon-to-dartmouth.md`; if Sprint 1 chooses a
  different slice, it should record why.
- Carry forward the memo's open questions explicitly rather than letting them
  disappear between sprints.

Verify:

```bash
npm run format:check
```

## Completion Checklist

- [x] Durable content-model artifacts exist
- [x] The initial era map is defined clearly
- [x] Cross-linking rules between entity types are explicit
- [x] The GPT-5.4 guide-callout model is documented
- [x] Editorial pacing and learning rules are documented concretely
- [x] One exemplar era slice is chosen with initial linked entities
- [x] The sprint remains repository-grounded and avoids speculative architecture
- [x] `npm run format:check` passes

## QA Deviations

None.

## QA Report

Verdict: PASS (2 issues resolved)

Audit summary:

- Sprint 1 aligns with the governing feature spec by turning Sprint 0 research
  into a durable content architecture phase covering the entity model, era map,
  guide commentary rules, editorial pacing, and exemplar-slice selection.
- The sprint now consumes the concrete Sprint 0 artifacts rather than referring
  to research generically.
- Verification remains correct for a documentation-first sprint.

Resolved issues:

1. The sprint identified the work areas correctly, but it still left the durable
   artifact locations too vague for implementation. The major tasks now name
   exact targets under `docs/content/architecture/` so Sprint 1 can be executed
   without drifting across `docs/foundation/`, `docs/_research/`, or
   `docs/_specs/`.
2. Tasks 2 through 5 previously defined outcomes but not exact artifact targets.
   Those targets are now explicit for the era map, guide-commentary model,
   editorial rules, and exemplar-slice plan, which brings the sprint in line
   with the repo’s sprint-doc standard.

Verification:

- `npm run format:check`

## Implementation QA Report

Verdict: PASS (2 issues resolved)

Audit summary:

- Sprint 1 successfully created the durable content-architecture layer required
  by the spec and the sprint doc.
- The five required artifacts exist and keep the repo boundaries clean between
  research, architecture, and process docs.
- The chosen exemplar slice, early-era split, and first guide-callout pattern
  are all consistent with the Sprint 0 research baseline.

Resolved issues:

1. The guide-commentary model defined tone, placement, and evidence rules, but
   it did not directly own the spec requirement that guide commentary be
   visually distinct from the main historical narrative. That rule is now
   explicit in the guide model so Sprint 3 can implement the guide layer without
   ambiguity.
2. The editorial-and-learning rules translated pacing and cognitive-load goals,
   but they did not yet convert the project's Sage, Explorer, and
   Cialdini-inspired framing into practical editorial constraints. That
   translation is now documented so later content work can use those influences
   without drifting into hype or decorative branding language.

Verification:

- `npm run format:check`
