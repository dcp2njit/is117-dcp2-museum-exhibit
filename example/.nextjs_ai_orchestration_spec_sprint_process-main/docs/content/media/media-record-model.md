# Media Record Model

## Purpose

This document defines the durable record model for media assets used by the AI
history site.

The goal is to make sourced images, generated images, diagrams, and audio plans
reviewable in the repository without requiring a database or external asset
tracker.

## Repository Location

- durable workflow docs live in `docs/content/media/`
- per-asset records live in `docs/content/media/records/`

## Record Types

Sprint 2 supports four first-class record types:

1. sourced image
2. generated image
3. diagram
4. audio plan

These record types share a common structure so later sprints can review media
choices consistently.

## Core Fields For Every Record

Every media record should include:

- title
- record type
- current status
- linked era, concept, institution, person, or turning point
- intended page or placement
- why the asset helps the reader
- evidence basis
- source or origin
- attribution or rights notes when known
- usage rationale
- open questions or follow-up needs

## Status Vocabulary

Use a small shared status set:

- candidate
- approved for implementation
- needs verification
- rejected
- produced

Notes:

- `candidate` means the asset is worth tracking but is not ready to ship
- `approved for implementation` means the editorial and provenance review is
  strong enough for the next sprint to use it
- `needs verification` means the asset is promising but still has unresolved
  provenance, sourcing, or editorial questions
- `rejected` means the asset is intentionally not moving forward
- `produced` is for assets that have actually been created or integrated later

## Evidence Baseline

- reviewed source tables in research memos are the baseline evidence layer
- raw `eai` output may support discovery, but it is not enough by itself for a
  durable provenance record
- a media record may point to a research memo, a specific source URL, and later
  implementation notes

## Record Template

Use this structure for each new record:

### Title

- title:
- record type:
- current status:

### Content Link

- linked era:
- linked entities:
- intended page or placement:

### Why This Asset Exists

- reader benefit:
- teaching role:

### Source Or Origin

- source URL or origin:
- creator or source name when known:
- evidence basis:

### Attribution And Usage Notes

- attribution requirements when known:
- usage rationale:
- rights or uncertainty notes:

### Next Step

- next action:
- open questions:

## Type-Specific Additions

### Sourced Image

Add:

- what the image depicts
- why this image is better than a generic visual

### Generated Image

Add:

- reason sourced media is insufficient
- prompt or generation brief when available
- accuracy guardrails for the generated visual

### Diagram

Add:

- diagram format
- key teaching claim
- required nodes, steps, or relationships

### Audio Plan

Add:

- target duration
- narration purpose
- pacing or pronunciation notes

## Rejected Or Dormant Records

- rejected ideas may be recorded when doing so prevents repeat work
- a rejected record should state why it was rejected instead of disappearing
- do not create a record for every weak idea; record rejections only when they
  are likely to recur or create confusion later
