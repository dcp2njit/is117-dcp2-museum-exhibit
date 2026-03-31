# Visualization Workflow

## Purpose

This document defines how Sprint 9 and later work should choose among Mermaid,
repository-authored diagrams, lightweight charts, and `eai` generated images.

The goal is to make visuals useful, reviewable, and historically disciplined.

## Verified Tool Surface

The current command surface was rechecked during Sprint 9 planning.

- `eai image --help` confirms support for prompt-based image generation,
  multiple sizes, quality modes, saved outputs, and variations.
- `eai speak --help` confirms support for file output, voice choice,
  instructions, streaming, and playback.

These command checks establish that `eai` is available for media work. They do
not by themselves justify using generated visuals everywhere.

## Decision Ladder

Choose the first option in this list that teaches the idea well enough:

1. prose only
2. guide commentary
3. Mermaid planning diagram
4. repository-authored explanatory diagram or simple chart
5. generated image recorded through the media-record workflow

## Mermaid First

Use Mermaid first when the teaching problem is structural.

Examples:

- tracing the path from query to embedding to nearest-neighbor retrieval
- showing how historical eras feed into one another
- showing deployment, interpretability, and safety relationships in Era 7

Mermaid is preferred at the planning stage because it is text-reviewable and
fits the repository's existing diagram workflow.

## Repository-Authored Diagrams And Charts

Use a repository-authored diagram or chart when the visual needs more control
than Mermaid provides but still represents a real explanatory claim.

Good candidates:

- an embeddings-neighborhood diagram with labeled points and a query vector
- a compact chart explaining similarity, ranking, and retrieval
- a staged interpretability-gap diagram showing observed behavior versus known
  internal mechanism

Rules:

- every chart must have a clear teaching claim
- charts cannot imply measured data without a sourced basis
- the caption or record should state whether the visual is literal,
  schematic, or conceptual

## `eai image` Generated Visuals

Use `eai image` when the repository needs a conceptual visual and sourced media
would either be misleading or unavailable.

Good candidates:

- a conceptual latent-space landscape image
- a non-literal orientation visual for embeddings neighborhoods

Do not use `eai image` for:

- historical documentary scenes
- portraits of real people or documentary institutional moments
- diagrams that need precise labels or measured values
- anything that would be mistaken for direct evidence of a model's real
  internal structure

## Portrait And Documentary Visuals

When the site needs faces, labs, proposals, or turning-point artifacts, use
sourced visuals with provenance rather than generated substitutes.

Priority rule:

- real people should get real portraits or institutional headshots
- real institutions and turning points should get documentary or archival
  visuals when available
- generated visuals should stay in the conceptual-teaching lane

See also:

- `docs/content/media/portrait-and-story-visual-backlog.md`

## `eai speak` Sidecar Use

`eai speak` is available for short narrated companion assets, but it is not the
primary output of Sprint 9.

If used later, it should support existing pages rather than define new content
standards by itself.

## Required Repository Records

Any produced or approved visualization should link to:

- the page or route where it belongs
- the durable concept or era it teaches
- the research memo or architecture note that justifies it
- the media record that captures status, origin, and open questions

## First Sprint 9 Candidates

- embeddings-neighborhood diagram
- interpretability-gap diagram
- latent-space landscape generated image
