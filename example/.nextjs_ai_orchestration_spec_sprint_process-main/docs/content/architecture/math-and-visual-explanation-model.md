# Math And Visual Explanation Model

## Purpose

This document defines how the site should teach technical concepts when prose
alone is not enough.

Sprint 9 adds a live math bridge and a stronger visualization workflow. This
document prevents those additions from turning into generic explainer content
that drifts away from the repository's historical purpose.

## Core Principle

Use the lightest teaching surface that makes the historical point legible.

The order of preference is:

1. short historical prose
2. guide commentary that names a misconception or hard transition
3. minimal math bridge
4. diagram or chart
5. generated conceptual image

If a heavier teaching surface does not make the historical claim clearer, it is
the wrong tool.

## What Counts As A Math Bridge

A math bridge is a short explanation that gives the smallest technical frame a
reader needs in order to understand a concept honestly.

For this repository, math bridges should usually do one of four things:

- define a modern technical term in concrete language
- explain what kind of quantity or comparison the model is using
- connect a modern method back to an earlier era in the chronology
- keep a common misconception from becoming the reader's mental model

## Math Bridge Rules

- keep formulas sparse and only where they change understanding
- explain symbols in plain language immediately around the formula
- prefer vectors, similarity, probability, and optimization as the main live
  math surfaces
- never assume the reader wants a full derivation
- do not use math to disguise uncertainty about how modern models work

## When To Use A Diagram Instead

Choose a diagram over more prose when the concept depends on one of these:

- sequence or pipeline order
- neighborhood or clustering intuition
- comparisons across eras or systems
- causal relationships among institutions, deployment choices, and public effects

If the diagram is mainly decorative, do not make it.

## When To Use A Generated Image

Use a generated image only when all of the following are true:

- no strong sourced historical visual does the job
- the goal is conceptual atmosphere or spatial intuition, not documentary evidence
- the image is clearly recorded as generated
- the image does not imply false quantitative accuracy

Good candidates include:

- a conceptual latent-space landscape for first-time readers
- a stylized embeddings-neighborhood scene used as an orientation visual

Bad candidates include:

- fabricated photos of historical events
- charts that imply measured quantities without real sourced data
- mechanistic diagrams that pretend to reveal an actual model interior without
  evidence

## Relationship To Guide Commentary

Guide commentary should usually introduce the problem a math bridge or diagram
solves.

Examples:

- misconception watch: embeddings are not hidden meanings
- why it matters: public fluency is not the same as mechanistic understanding

This keeps technical teaching attached to reader confusion rather than to a
desire to show off detail.

## Sprint 9 First-Class Teaching Surfaces

- homepage overview that routes readers toward chronology and bridges
- key-papers reading map for intellectual lineage
- embeddings and latent-space math guide
- media records for embeddings and interpretability visuals

## Repository Discipline

- every live math or visual bridge should map back to an existing durable doc or
  research memo
- diagrams and generated visuals must have media records
- generated imagery may support explanation, but not replace provenance
