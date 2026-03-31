# Content Model

## Purpose

This document defines the durable content model for the AI history site.

It is a content-architecture artifact, not a CMS schema and not a rendering
implementation. The goal is to keep the model specific enough for later content
work while avoiding premature technical complexity.

## Modeling Rules

- Treat every content unit as a durable, reviewable artifact.
- Use simple document structure first; do not invent database fields that the
  current repository cannot justify.
- Keep historical narrative separate from GPT-5.4 guide commentary.
- Assume reviewed memo source tables, not raw `eai` output alone, are the
  durable source baseline.
- Every content unit should be teachable to college students and smart
  non-specialists without flattening the topic.

## Cross-Linking Rules

- Every era must link to people, concepts, and at least one institution or
  debate when the material supports it.
- Every person unit must link back to at least one era and one concept.
- Every concept unit must link to the eras that made the idea possible and the
  people or institutions that shaped it.
- Institutions and debates should not exist as detached side notes; they should
  clarify causality, power, funding, or disagreement in the historical story.
- Guide callouts may point across entity types, but they do not replace those
  links.

## Entity Types

### Era

An era is the primary chronological unit.

Required sections:

- title
- date range
- one-sentence thesis
- why this era matters
- core narrative
- linked people
- linked concepts
- linked institutions or debates
- transition in and transition out
- source basis
- guide-callout opportunities
- media opportunities

Notes:

- Era pages carry the main historical narrative.
- An era should explain change over time, not just list names and dates.

### Person

A person unit explains why a human being matters in the story.

Required sections:

- name
- lifespan or active period when known
- role in AI history
- why this person matters
- major contributions in plain language
- linked eras
- linked concepts
- linked institutions when relevant
- tensions, limitations, or misconceptions
- source basis

Notes:

- Person units should keep the human story visible.
- They should not become detached mini-biographies with no historical function.

### Concept

A concept unit teaches a technical or intellectual idea in historical context.

Required sections:

- title
- plain-language definition
- why the concept matters to AI history
- historical emergence or turning point
- linked eras
- linked people
- linked institutions when relevant
- modern relevance
- common misconception to avoid
- source basis

Notes:

- Concept pages should teach both what the idea is and why it appeared when it
  did.
- They should connect directly to the chronology rather than floating above it.

### Institution

An institution unit explains why an organization, lab, company, conference, or
funding structure mattered.

Required sections:

- name
- institution type
- active period or relevant date range
- why it matters
- linked people
- linked eras
- linked concepts or debates
- source basis

Notes:

- Institutions are important because AI history is not only a story of ideas;
  it is also a story of labs, funding, and organizational power.

### Debate Or Turning Point

A debate or turning-point unit captures moments of disagreement, hype, winter,
critique, or strategic reorientation.

Required sections:

- title
- core question or conflict
- why it matters
- positions or pressures involved
- linked eras
- linked people or institutions
- outcome or continuing uncertainty
- source basis

Notes:

- These units help prevent the site from sounding like a smooth march of
  progress.

### Guide Callout

A guide callout is a structured intervention from GPT-5.4 inside the content
system.

Required fields or sections:

- callout type
- placement anchor
- user benefit
- evidence basis
- concise body text
- linked era, person, or concept

Notes:

- Guide callouts are visually distinct from the historical narrative.
- They must not carry the primary burden of explanation.

## Narrative vs Guide Boundary

Historical narrative should do the main teaching work.

Guide commentary may:

- slow the reader down at a hard transition
- surface a misconception
- connect a historical moment to a modern concept
- explain why something matters now

Guide commentary must not:

- introduce unsupported facts
- replace a missing historical explanation
- sound omniscient or absolute without evidence
- become constant side commentary that fragments the page

## Source Basis Minimum

Every durable content unit should be traceable to:

- one or more reviewed sources captured in a research memo
- any open verification notes that still need primary-source review

Raw `eai` output may support drafting, but it is not a substitute for a reviewed
source table.
