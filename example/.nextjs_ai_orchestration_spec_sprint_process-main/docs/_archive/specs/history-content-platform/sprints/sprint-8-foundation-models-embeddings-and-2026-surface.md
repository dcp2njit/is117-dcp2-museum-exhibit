# Sprint 8 — Foundation Models, Embeddings, And 2026 Surface

## Header

- Goal: implement Era 7 through the repository’s current horizon of 2026,
  including foundation models, large language models, vector embeddings, latent
  space, multimodality, and the current debates that tie the full history to
  systems readers recognize today.
- Spec sections:
  - Problem Statement 1, 3, 4, 6
  - Design Goals 1, 2, 3, 4, 5, 8, 9
  - Architecture: Audience Model, Content Model, Information Architecture,
    Guide Commentary System, Media System,
    Provenance And Attribution Model, Editorial And Learning Model,
    Technical-Concept Teaching Layer, Repository Boundaries
  - Security: Repository Accuracy, No False Authority, Provenance Discipline,
    Educational Integrity, Accessible Learning Surface
  - Testing Strategy: Artifact Accuracy, Concept Coverage,
    Consistency Review, Workflow Verification
- Prerequisite: `feat: implement Sprint 7 — statistical learning through transformers`
- Expected test count: `6-8 existing + 1-2 new = 7-10 total` depending on the
  rendered route and concept coverage

## Available Assets

This sprint completes the chronology currently planned in the era map and is the
place where the repository must explicitly teach vectors, latent space,
transformers-to-LLM continuity, and the present-day 2026 surface.

| Asset                                          | Expected verified details at QA time                                                                   | How this sprint uses it                                                              |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `docs/_specs/history-content-platform/spec.md` | Technical-concept teaching requirements explicitly include large language models and vector embeddings | Governs the final modern concept surface                                             |
| `docs/content/architecture/era-map.md`         | Era 7 is defined as `2020-present`                                                                     | Fixes the final chronology boundary                                                  |
| `docs/content/architecture/content-model.md`   | Concept units must connect modern systems back to historical eras                                      | Prevents modern AI concepts from becoming detached glossary entries                  |
| prior era package docs                         | Era 1 through Era 6 docs exist by Sprint 7 completion                                                  | Supplies the backward lineage required for embeddings, latent space, and LLMs        |
| prior live routes                              | Live routes exist through Era 6 by Sprint 7 completion                                                 | Defines the adjacent-era navigation chain                                            |
| `components/content/guide-callout.tsx`         | Current guide-callout component remains the live guide surface                                         | Reuses the current guide implementation                                              |
| existing tests                                 | Focused chronology and exemplar coverage exists through the transformer transition                     | Baseline for final route-level and concept-level coverage                            |
| media/provenance workflow docs                 | Multimodal planning and provenance rules remain active                                                 | Supports any new diagram or audio-plan records that become necessary for this sprint |

## Tasks

### 1. Implement the Era 7 package doc for 2020 through 2026

Create the final currently planned era in the durable chronology.

Required outcomes:

- implement Era 7 as a coherent package that reaches the present project horizon
  of 2026
- connect foundation models, multimodality, public adoption, policy, labor,
  trust, and capability debates into one readable historical phase
- avoid treating the current era as hype or product marketing

Required artifact targets:

- `docs/content/exemplar/era-7-package.md`

Key implementation details:

- The era package should explicitly note that the repo’s present horizon is
  2026, not an indefinitely open present.
- The package should connect current systems back to the earlier eras that made
  them possible, especially deep learning and transformers.

Verify:

```bash
npm run format:check
npm run lint
```

### 2. Add the modern concept units the spec explicitly requires

Implement the concept layer for the systems contemporary readers already know.

Required outcomes:

- add concept units for large language models, vector embeddings, and latent
  space
- make the relationship between transformers and LLMs explicit
- make the relationship between embeddings, latent space, retrieval, and modern
  model behavior teachable in plain language

Required artifact targets:

- `docs/content/exemplar/concepts/foundation-models.md`
- `docs/content/exemplar/concepts/large-language-models.md`
- `docs/content/exemplar/concepts/vector-embeddings.md`
- `docs/content/exemplar/concepts/latent-space.md`
- `docs/content/exemplar/concepts/multimodality.md`
- updates to `docs/content/exemplar/concepts/transformers.md`

Key implementation details:

- `large-language-models.md` should explain what an LLM is historically, not
  just functionally.
- `vector-embeddings.md` should connect representation learning to retrieval,
  semantic similarity, and the broader history of modern AI infrastructure.
- `latent-space.md` should explain the idea in plain language and connect it to
  representation learning and generative modeling without pretending every model
  uses the concept identically.

Verify:

```bash
npm run format:check
npm run lint
```

### 3. Add the minimum modern people, institutions, and debate units

Support the current era with the minimum durable entity set it needs.

Required outcomes:

- add the minimum people and institution units necessary for Era 7 to avoid
  becoming a concept-only story
- add at least one debate or turning-point unit for the current era
- keep the emphasis on historical causality, institutional choice, and public
  consequence rather than product branding

Required artifact targets:

- `docs/content/exemplar/people/ilya-sutskever.md`
- `docs/content/exemplar/people/demis-hassabis.md`
- `docs/content/exemplar/institutions/openai.md`
- `docs/content/exemplar/institutions/deepmind.md`
- `docs/content/exemplar/turning-points/foundation-model-deployment-and-public-use.md`

Key implementation details:

- The selected modern people and institutions should be sufficient to explain
  the era without turning the repo into a company catalog.
- The turning-point unit should make the present-era debate visible: capability,
  deployment, trust, labor, governance, and educational use.

Verify:

```bash
npm run format:check
npm run lint
```

### 4. Implement the final live era route and complete the adjacent-era chain

Render Era 7 in the live app and complete the currently planned chronology.

Required outcomes:

- add a live route for Era 7
- update adjacent-era navigation so the chronology now runs from Era 1 through
  Era 7
- use guide commentary selectively for the hardest modern teaching jumps,
  especially transformers-to-LLMs, embeddings, latent space, and the gap
  between public fluency and actual system understanding

Required artifact targets:

- `app/eras/foundation-models-and-generative-ai/page.tsx`
- updates to the latest prior era route created in Sprint 7

Key implementation details:

- At least one guide intervention should explain why LLM fluency is not the
  same thing as settled machine understanding.
- At least one guide intervention should explain embeddings or latent-space
  reasoning in plain language for non-specialists.

Verify:

```bash
npm run format:check
npm run lint
```

### 5. Expand automated coverage for the final current-era surface

Add focused tests for the final era and the now-complete chronology.

Required outcomes:

- add rendered coverage for Era 7
- verify that vectors, latent space, transformers, and LLM continuity are
  explicitly present in the implemented content
- verify the adjacent-era chain remains intact through the final era

Required artifact targets:

- `tests/app/foundation-model-era.test.tsx`

Verify:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
```

## Completion Checklist

- [x] Era 7 package doc exists through the current horizon of 2026
- [x] Modern concept docs exist for foundation models, LLMs, vector embeddings, latent space, and multimodality
- [x] Minimum modern people, institutions, and turning-point docs exist
- [x] A live Era 7 route exists
- [x] The adjacent-era chain now reaches the current era
- [x] Vectors, latent space, transformers, and LLM continuity are taught explicitly
- [x] Verification matches the rendered expansion

## QA Deviations

None.

## Implementation QA Report

Verdict: PASS (2 issues resolved)

Audit summary:

- Sprint 8 successfully completes the planned chronology through Era 7 with a
  reviewed research memo, durable era and linked-entity artifacts, an updated
  transformer concept, a final live route, and focused test coverage for the
  modern current-era surface.
- The implementation stays aligned with the governing spec and Sprint 8
  contract by teaching the 2026 horizon explicitly, keeping modern concepts tied
  back to Era 6's transformer and representation-learning runway, and using the
  existing guide-callout system for the hardest present-era teaching jumps.
- Full repository verification now passes against the expanded app surface,
  including the final Era 7 route and its adjacency with Era 6.

Resolved issues:

1. The live architecture map still described Era 7 as `2020-present`, which no
   longer matched Sprint 8's explicit requirement that the repository's current
   horizon stop at 2026. `docs/content/architecture/era-map.md` now reflects the
   2020-2026 boundary so the architecture and live content agree.
2. The first version of the new Era 7 rendered test used overly broad text
   assertions and failed against valid duplicated phrases in the live page. The
   coverage is now tightened to exact concept-heading assertions so the test
   verifies the intended surface without producing false negatives.

Verification:

- `npm run format:check`
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`
