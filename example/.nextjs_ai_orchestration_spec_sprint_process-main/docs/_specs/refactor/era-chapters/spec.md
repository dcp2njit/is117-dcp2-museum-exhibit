# Era Chapters Refactor Specification

> **Status:** Planned

## Problem Statement

The era pages are the heart of the product, but they are not yet equally strong
as chapter experiences.

Concrete problems in the current repository state:

1. Era 2 already mixes chronology, prose, visual explanation, story cards, and
   source anchors in a way that feels closest to a chapter. Several other era
   pages are historically strong but comparatively lighter in visual pacing.
2. Era 3 through Era 6 often reuse the same section ordering and card density,
   which creates consistency but also flattens the emotional and educational
   rhythm of the chronology.
3. Era 1 contains important runway material, but it could use a stronger scene
   and artifact-led opening to make the earliest chapter feel less abstract.
4. Era 7 already benefits from sourced narrative cards and stronger grounding,
   but it still needs a clearer synthesis block tying foundation models,
   embeddings, multimodality, interpretability, and deployment into one chapter
   argument.
5. Without a staged chronology plan, page-by-page rewrites risk drifting away
   from a shared structure or exhausting effort on one era while leaving the
   rest inconsistent.

The immediate need is to define a staged rollout that refactors Era 1 through
Era 7 into a coherent sequence of chapter-style routes.

## Design Goals

1. **Make Each Era Feel Distinct**
   Each era should preserve a shared chapter logic while also having its own
   emotional and pedagogical character.

2. **Use Visuals To Clarify Historical Difference**
   Each cluster of eras should gain visuals or documentary treatments that fit
   its subject matter rather than repeating generic cards.

3. **Preserve The Chronological Spine**
   The seven-era structure remains the core navigation model.

4. **Strengthen Cross-Era Continuity**
   Era endings and beginnings should more clearly hand off concepts, people,
   and institutions to the next chapter.

5. **Adopt Shared Reading Primitives Rather Than One-Off Layouts**
   Era refactors should consume the Reading System feature instead of creating
   custom page patterns per era.

6. **Keep The History Accurate And Grounded**
   New dramatic or documentary framing should sharpen the material without
   inventing unsupported claims.

## Architecture

### Shared Era Pattern

Each era page should aim for a common chapter arc:

1. chapter opener or scene
2. five anchor chronology
3. core narrative explanation
4. one decisive visual or documentary block
5. people and institutions in historical role
6. concepts explained in relation to the era
7. clear forward transition to the next chapter

Not every era will express each element in the same way, but the pages should
all feel like members of the same book.

### Rollout Clusters

The chronology should be refactored in four implementation clusters:

1. **Eras 1-2**
   Establish the exemplar chapter format and strengthen the early-story runway.

2. **Eras 3-4**
   Emphasize symbolic optimism, institutional ambition, critique, and the first
   winter through stronger contrast structures.

3. **Eras 5-6**
   Improve technical-bridge teaching with clearer comparisons, benchmark turns,
   and the run-up to transformers.

4. **Era 7**
   Add synthesis and systems-level explanation so the public AI era feels like
   a conclusion to the current chronology rather than only a dense current-events page.

### Supporting Assets

The feature may reuse and extend:

- `GuideCallout`
- `NarrativeCard`
- existing visualization components
- source-anchor data in `lib/narrative-data.ts`
- shared site navigation for chapter handoff language

## Security

1. **Historical Integrity**
   New scenes, contrasts, or documentary blocks must stay tied to verified
   sources or clearly labeled repository-authored summaries.

2. **No Artificial Sensationalism**
   Dramatic pacing is allowed, but it must not exaggerate conflicts or imply
   consensus where the repository material does not support it.

3. **Accessible Long-Form Structure**
   Each refactored era must preserve semantic heading order and readable mobile
   layouts.

## Testing Strategy

### Required Test Categories

1. Existing era-route tests updated where route structure changes materially.
2. New targeted tests for any newly added chapter-specific visuals or grouped
   content structures.
3. Full regression through `npm run lint`, `npm run typecheck`, `npm run test`,
   and `npm run build` after each chronology cluster.

### Baseline

- Current repository baseline: `13 existing tests`

## Sprint Plan

| Sprint   | Goal                                                                                  |
| -------- | ------------------------------------------------------------------------------------- |
| Sprint 0 | Refactor Era 1 and Era 2 into the exemplar chapter model                              |
| Sprint 1 | Refactor Era 3 and Era 4 around optimism, critique, and winter contrast               |
| Sprint 2 | Refactor Era 5 and Era 6 around technical bridges, benchmarks, and transformer runway |
| Sprint 3 | Refactor Era 7 into a synthesis chapter and finish chronology QA                      |

## Future Considerations

Explicitly deferred items:

- interactive timeline scrubbing across eras
- audio narration embedded directly on era pages
- advanced source annotation UI
- user-selectable reading difficulty modes
