# Guide Commentary Model

## Purpose

This document defines how GPT-5.4 guide commentary works in the content system.

The guide layer is mandatory for this feature, but it must remain subordinate to
the main historical narrative.

## Core Rule

Guide commentary exists to help a reader understand, not to perform as an all-
purpose narrator.

Historical prose carries the main account. Guide commentary intervenes when the
reader benefits from a short, structured explanation.

## Allowed Functions

Guide commentary may:

- explain why a moment matters
- warn about a common misconception
- connect a historical event to a modern concept
- slow the reader down when a technical jump would otherwise be abrupt
- point out a tension, ambiguity, or interpretive caution

## Prohibited Functions

Guide commentary must not:

- introduce unsupported facts
- present speculation as settled truth
- replace missing narrative or weak research
- become a running side conversation on every paragraph
- sound omniscient or theatrically authoritative

## Tone Rules

- serious, clear, and concise
- helpful without sounding patronizing
- confident only where the evidence supports confidence
- plain language first, technical terminology when needed

## Placement Rules

- place guide commentary at friction points, not everywhere
- use it after dense chronology, before a likely misconception, or at a modern
  bridge point
- do not stack multiple guide callouts back to back unless there is a clear
  teaching reason
- guide commentary must remain visually distinct from the main historical
  narrative so readers can tell the difference between the primary account and
  the GPT-5.4 guide layer immediately

## Evidence Rules

- every guide callout must be anchored to the surrounding researched content
- if a point is interpretive rather than purely factual, the language should say
  so explicitly
- guide commentary should not overstate causal certainty when the historical
  picture is contested

## Reusable Callout Types

### 1. Why It Matters

- Use when:
  a reader may understand the event but not its larger importance
- Purpose:
  elevate significance without derailing the chronology

### 2. Misconception Watch

- Use when:
  a familiar but misleading summary is likely
- Purpose:
  correct oversimplification quickly and clearly

### 3. Bridge To Now

- Use when:
  a historical topic directly illuminates a modern AI concept or public debate
- Purpose:
  connect history to current systems without collapsing the two

## First Live Pattern

The first live implementation pattern is:

- `Why It Matters`

Reason:

- it is the safest, most versatile pattern for the first era package
- it helps smart non-specialists without requiring an aggressive editorial voice
- it can sit cleanly beside chronology and concept teaching

## Suggested Structure For A Guide Callout

- label
- short title
- 50-120 words of body copy
- linked entity or concept reference

## Presentation Boundary

- the guide layer should use a repeatable visual treatment that is clearly
  different from the body narrative
- the treatment should signal interpretation and orientation, not a second
  competing article voice
- visual distinction should improve scanability without making the callout feel
  decorative or optional when it is doing real teaching work

## Example Use In The Leading Exemplar Slice

Within the 1936-1956 formation era, good placement candidates include:

- after Turing's 1936 work to explain why computability belongs in AI history
- after Shannon's 1938 relay-circuit work to explain the logic-to-machinery
  bridge
- after Dartmouth to explain why naming a field matters institutionally and
  intellectually
