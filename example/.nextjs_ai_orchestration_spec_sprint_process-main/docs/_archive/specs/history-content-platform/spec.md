# AI History Content Platform Specification

> **Status:** Complete

## Problem Statement

The repository now has a working site foundation and a completed documentation
foundation, but it still does not have the actual educational content system
that will make the site meaningful to students and general readers.

This creates several concrete problems:

1. The site does not yet contain the structured historical narrative needed to
   teach the history of artificial intelligence from the pre-Shannon period to
   the present day.
2. The repository does not yet define a durable research workflow for using the
   `eai` command-line tool to gather sources, create research documents, locate
   candidate images, and preserve continuity across context resets.
3. The site does not yet define how multimodal teaching should work across
   long-form content, guide commentary, images, diagrams, and planned audio.
4. The repository does not yet have a content model for eras, people,
   institutions, concepts, debates, and explanatory systems such as LLMs,
   vector embeddings, and neural networks.
5. The project does not yet define the provenance, attribution, and usage
   rules required for externally sourced or generated media.
6. The site does not yet define the editorial and design rules needed to make
   dense historical and technical material accessible to college students and
   smart non-specialists without flattening the material into shallow summaries.

Evidence from the current repository state:

- `app/` contains the site shell, but not the full educational content system.
- `docs/foundation/` contains the teaching and process layer, but not the
  actual AI-history research corpus or finished site content.
- There is no `docs/_research/` structure yet for durable source capture.
- There is no content architecture yet for eras, people, concepts, or media.
- There is no explicit repository contract yet for guide callouts, sourced
  media, generated media, mermaid diagrams, or audio planning.

The immediate need is not to write every page in one pass. The immediate need
is to define a content platform that can support serious historical research,
multimodal teaching, durable source capture, and accessible educational
presentation.

## Design Goals

1. **Teach The History Clearly**
   The content system must make the history of AI understandable to college
   students and smart non-specialists without treating them like specialists or
   children.

2. **Preserve Human Context**
   The content must make the humans in the story visible: researchers,
   mathematicians, engineers, institutions, rivalries, constraints, and social
   context should not disappear behind model names and dates.

3. **Be Multimodal From The First Release**
   Images, diagrams, and planned audio are part of the initial educational
   product, not optional enhancements to be considered later.

4. **Support Hybrid Navigation**
   The site must support era-based navigation as the primary structure while
   also cross-linking people, concepts, institutions, debates, and technical
   systems.

5. **Use The Named Guide Intentionally**
   The site must include direct guide commentary from GPT-5.4 as a governed
   content layer, and those interventions must be structured, reusable,
   visually distinct, and governed by explicit editorial rules.

6. **Keep Research Durable**
   Research gathered through the `eai` workflow must be preserved in durable
   repository artifacts so later sessions can continue without redoing the
   entire inquiry process.

7. **Make Media Provenance Explicit**
   Sourced images, generated images, diagrams, and audio plans must include
   provenance, attribution, or usage rationale rather than being treated as
   anonymous assets.

8. **Manage Cognitive Load Deliberately**
   The site must use hierarchy, chunking, pacing, and visual support so users
   can learn difficult material without being overwhelmed.

9. **Stay Repository-Grounded**
   All content, research workflow, and media workflow claims must be tied to
   actual repository artifacts, current tooling, and explicit validation steps.

## Architecture

### Overview

This feature establishes the content platform for the AI history site. The
platform combines research operations, editorial content structure, multimodal
media planning, and presentation rules into one governed system.

The goal is not just to fill pages with text. The goal is to create a durable,
research-backed, multimodal educational system that can be expanded safely over
many sessions.

### Audience Model

The primary audience is:

- college students
- smart general readers
- technically curious people who are not specialists

This means the content should:

- use real terminology where needed
- explain technical ideas clearly when they first appear
- avoid specialist shorthand without explanation
- avoid watered-down summaries that remove meaningful historical or technical
  substance

### Content Model

The system must support at least these content entities:

1. **Eras**
   Major historical phases spanning the pre-Shannon period through the present.

2. **People**
   Researchers, mathematicians, engineers, funders, critics, and other humans
   whose work materially shaped AI history.

3. **Concepts**
   Topics such as information theory, cybernetics, symbolic AI, expert
   systems, neural networks, deep learning, transformers, LLMs, and vector
   embeddings.

4. **Institutions**
   Universities, labs, companies, research groups, conferences, and funding
   structures.

5. **Debates And Turning Points**
   Moments of disagreement, criticism, hype, winter, and paradigm shifts.

6. **Guide Callouts**
   Structured in-site commentary from GPT-5.4 that helps users interpret a key
   idea, avoid a misconception, or connect one part of the story to another.

The exact schema belongs in sprint docs, but the architecture must plan for
cross-linking between these entity types.

### Information Architecture

The site must use a hybrid structure:

- **Primary spine:** era-based navigation
- **Secondary layers:** people, concepts, institutions, and technical systems

This means a user should be able to:

- move through history chronologically
- pivot from an era to a key person
- pivot from a person to a concept
- move from a concept page, such as vector embeddings, back into the eras that
  made that concept possible

### Guide Commentary System

The site must include named commentary from GPT-5.4.

This guide layer must be treated as a first-class content system rather than as
random prose inserted ad hoc.

The first release does not need guide commentary on every page, but it must
include at least one implemented guide-callout pattern in the live content
system and at least one exemplar content package that uses it intentionally.

The guide system should support callouts that do things such as:

- explain why a moment matters
- warn users about a common misconception
- connect a historical event to a modern concept
- slow the reader down when a technical leap would otherwise be too abrupt

Guide commentary must follow these rules:

- it must be visually distinct from the main historical narrative
- it must remain concise and purposeful
- it must not replace the primary historical text
- it must not falsely imply omniscience or certainty without evidence

### Research Workflow Layer

This feature must define a durable research workflow using the `eai` command
line tool.

The workflow must support:

- web research
- research memo creation
- source capture
- image candidate discovery
- media planning for diagrams and audio
- continuity across context resets

The research outputs should live under a durable repository location such as:

```text
/docs/_research/
```

The exact folder conventions belong in sprint docs, but research artifacts must
be durable, scannable, and reusable by later sessions.

The workflow contract must also require two durable artifact types:

- topic-level research documents or memos that capture findings and sources
- an operational guide or index that records how `eai` is actually being used
  in this repository so later sessions can resume without rediscovering the
  workflow from scratch

### Media System

The first release is explicitly multimodal.

The media layer must support at least these categories:

1. **Sourced Images**
   Archival or educationally relevant images gathered through research.

2. **Generated Images**
   Original visual assets created when sourced media is unavailable,
   insufficient, or pedagogically weaker than an original explanatory visual.

3. **Diagrams**
   Planned mermaid or equivalent diagrams for chronology, concept structure,
   causal relationships, and system explanations.

4. **Audio**
   Planned audio segments or narration workflows created with `eai` or related
   tooling for users who learn better through listening.

The first release does not require a fully produced audio library, but it must
define an audio-ready workflow and include at least one exemplar audio segment
plan tied to real content.

### Provenance And Attribution Model

The repository must not assume that any externally sourced media is safe to use
without tracking why it is being used and where it came from.

The media system must therefore support:

- source URL or origin
- creator or source name when known
- attribution requirements when applicable
- usage rationale or notes
- status distinction between sourced, generated, and internally created assets
- a durable per-asset record that can be reviewed later without reopening the
  original research session

The feature spec does not need to finalize legal doctrine, but it must require
traceable provenance and explicit documentation.

### Editorial And Learning Model

The site should use these editorial principles:

- serious but accessible tone
- human-centered historical framing
- clear segmentation of long material into manageable chunks
- multimodal reinforcement where dense reading load would otherwise become too
  heavy
- visually structured presentation informed by Swiss International Style
- cognitive-load awareness in pacing, hierarchy, and callout density

The site may also draw from:

- Sage and Explorer brand-archetype framing
- Cialdini-inspired sequencing and emphasis for educational engagement

These frameworks are not decorative. They must translate into practical design
and editorial decisions in later sprint docs.

### Technical-Concept Teaching Layer

The content platform must explicitly teach modern AI ideas in relation to the
history that produced them.

That includes, at minimum:

- neural networks
- deep learning
- transformers
- large language models
- vector embeddings
- the relationship between historical AI paradigms and current systems

These topics should be teachable both as standalone concept pages and as part
of the chronological historical story.

### Repository Boundaries

This feature governs content and research architecture. It does not require the
entire site to be visually finished in one sprint.

The spec should support staged implementation across content architecture,
research pipeline, era outlines, exemplar pages, media workflows, and final QA.

The minimum shippable slice for this feature is not the whole history of AI. It
is a coherent exemplar package that proves the system works end to end:

- one era package
- linked people and concept units
- implemented GPT-5.4 guide commentary
- at least one diagram or image plan with provenance records
- at least one audio segment plan tied to the same content slice

## Security

This feature is primarily editorial and research-focused, but it has important
accuracy and safety requirements.

1. **Repository Accuracy**
   Content and workflow docs must not claim tools, files, or media states that
   do not exist.

2. **No Secret Exposure**
   Environment variables such as `.env.local` must never be copied into docs,
   output, or commits. Tooling may be used if configured, but secret values must
   remain private.

3. **No False Authority**
   GPT-5.4 guide commentary must not present speculation as fact or imply that
   fluency equals verified accuracy.

4. **Provenance Discipline**
   Externally sourced media must not be treated as anonymous or context-free.
   The system must preserve provenance or usage notes.

5. **Educational Integrity**
   The site must not optimize for shallow persuasion at the expense of clarity,
   accuracy, or student understanding.

6. **Accessible Learning Surface**
   Multimedia and page structure must support legibility, scanability, and
   accessible consumption patterns for public educational use.

## Testing Strategy

This feature is content-heavy, but it still requires explicit validation.

### Required Validation Categories

1. **Artifact Accuracy**
   Referenced files, commands, research outputs, and media records must match
   the actual repository state.

2. **Concept Coverage**
   The feature must cover chronology, people, concepts, guide commentary,
   multimodal planning, and provenance rules.

3. **Minimum Slice Completeness**
   The exemplar release slice must prove that one era package can connect
   narrative content, linked entities, guide commentary, media planning, and
   provenance records without relying on future undocumented work.

4. **Consistency Review**
   Landing docs, durable docs, research docs, and sprint artifacts must not
   contradict one another.

5. **Workflow Verification**
   Research and media procedures must be documented clearly enough that a later
   LLM session can resume the process after context resets.

6. **Command Verification**
   Any scripted workflow references must be verified against the live
   repository and the actual `eai` usage learned during implementation.

### Baseline Counts And Validation Shape

- Current repository baseline includes application verification and formatting
  checks, but not yet a research-corpus or multimodal content system.
- This feature may begin with document QA and repository verification before
  moving into application rendering or media integration tests.
- Sprint docs should specify exact before/after expectations for new research
  artifacts, content units, or media records when implementation begins.

### Verification Baseline

Every sprint for this feature must define concrete verification steps.

Depending on the sprint, common verification will include:

```bash
npm run format:check
npm run lint
```

If a sprint adds rendered content, utilities, or app behavior, it may also
require:

```bash
npm run typecheck
npm run test
npm run build
```

## Sprint Plan

| Sprint   | Goal                                                                                                                                                                         |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sprint 0 | Define the research workflow, `docs/_research/` structure, and `eai` operational guidance                                                                                    |
| Sprint 1 | Define the content model, era map, and editorial/guide-commentary system                                                                                                     |
| Sprint 2 | Establish media, provenance, image, audio, and diagram planning workflows                                                                                                    |
| Sprint 3 | Build the first exemplar content package for one era with linked people and concept units                                                                                    |
| Sprint 4 | Expand the chronology and cross-linking layer across eras, people, and technical concepts                                                                                    |
| Sprint 5 | Perform full content-platform QA and resolve inconsistencies before broader content expansion                                                                                |
| Sprint 6 | Implement Era 3 and Era 4 so the site covers symbolic optimism, knowledge systems, and the first AI winter                                                                   |
| Sprint 7 | Implement Era 5 and Era 6 so the site covers statistical learning, network revival, deep learning, and transformers                                                          |
| Sprint 8 | Implement Era 7 through 2026 plus modern concept units for large language models, vector embeddings, latent space, and current debates                                       |
| Sprint 9 | Expose the full live learning surface with a stronger homepage, a key-papers reading map, an embeddings and latent-space math guide, and a documented visualization workflow |

## Future Considerations

The following items are intentionally deferred until later specifications or
later sprints if needed:

- advanced interactive timeline visualizations beyond the first explanatory
  diagrams
- quizzes, assessments, or classroom tooling
- user accounts or personalization
- multilingual localization
- podcast-style long-form audio production pipelines beyond initial planned
  educational audio segments
