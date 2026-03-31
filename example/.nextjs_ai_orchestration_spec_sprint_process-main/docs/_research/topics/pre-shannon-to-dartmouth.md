# Pre-Shannon To Dartmouth

## Topic

- Topic name: pre-Shannon to Dartmouth
- Date started: 2026-03-12
- Sprint: history-content-platform Sprint 0
- Research owner: GitHub Copilot

## Question

What is the most teachable way to explain the path from the intellectual and
technical prehistory of AI through Shannon, McCulloch-Pitts, and the 1956
Dartmouth conference for college students and smart non-specialists?

## Why This Matters

This topic is a strong exemplar slice because it naturally connects several core
threads the site needs to teach later:

- logic and formal reasoning
- computability and machines
- communication and information
- neural models and early AI
- the naming and consolidation of AI as a field

It is also a good test case for the project’s human-centered teaching approach,
because it keeps the story from collapsing into a shallow "AI began in 1956"
timeline.

## Scope

- In scope:
  prehistory of AI before 1956, Shannon’s role, McCulloch-Pitts (1943), and the
  Dartmouth conference as a field-forming event.
- Out of scope:
  full post-1956 AI history, detailed cybernetics coverage, and deep treatment
  of later connectionism or expert systems.

## Working Summary

The most useful teaching frame is not that AI suddenly appeared at Dartmouth,
but that Dartmouth condensed several older lines of work into a named research
agenda. The most important prehistory threads are formal logic, mechanized
calculation, control and feedback, early models of computation, and attempts to
connect nervous systems to logic and machines.

Within that frame, Claude Shannon matters because he helped bridge abstract
logic and physical machinery in his 1938 relay-circuit work, then gave the mid-
century world a formal language for information in 1948, and also participated
directly in the 1955-1956 Dartmouth formation moment. McCulloch and Pitts matter
because their 1943 paper showed how simple neuron-like units could be treated as
logical components in networks, creating an early bridge between neurobiology
and computation.

The durable teaching angle for the site should be: Dartmouth named the field,
but Shannon, Turing, McCulloch, Pitts, Wiener, and others made the field
intellectually possible before the meeting ever happened.

## Timeline Anchors

- 19th century: Boole, symbolic logic, mechanized calculation, Babbage, and
  Lovelace establish crucial precursors.
- 1931: Gödel shows limits of formal systems.
- 1936: Turing gives a formal model of effective computation in the context of
  the Entscheidungsproblem.
- 1938: Shannon links Boolean logic and switching circuits in relay-circuit
  analysis.
- 1943: McCulloch and Pitts publish the threshold-neuron paper.
- 1948: Shannon publishes "A Mathematical Theory of Communication".
- 1950: Turing publishes "Computing Machinery and Intelligence"; Shannon works
  on chess and machine intelligence ideas and demonstrates Theseus.
- 1955: Dartmouth proposal coins "Artificial Intelligence".
- 1956: Dartmouth Summer Research Project on Artificial Intelligence convenes.

## Source Capture

| Source                                                                       | Type                       | Why it matters                                                                                                                                     | Notes                                                                           |
| ---------------------------------------------------------------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth | institutional history page | Confirms Dartmouth’s 1956 role, the proposal framing, and the field-forming language                                                               | Good for the naming-and-origin section and a possible sourced image candidate   |
| https://plato.stanford.edu/entries/turing-machine/                           | reference article          | Grounds the 1936 computation story, Entscheidungsproblem context, and Turing-machine framing                                                       | Useful for explaining why computation theory belongs in the AI prehistory story |
| https://plato.stanford.edu/entries/goedel-incompleteness/                    | reference article          | Grounds the pre-AI logic and formal-systems context, especially the limitative results around formal provability                                   | Useful for explaining why logic and computability belong in the runway to AI    |
| http://belllabs-site-claude-shannon.s3-website-us-east-1.amazonaws.com/      | institutional history page | Provides Shannon-specific material on the 1938 thesis, information theory, cryptography, Theseus, and Bell Labs’ framing of his digital-age impact | Best current source in this memo for Shannon-specific narrative and media leads |

## Raw EAI Artifacts

- Markdown output:
  `docs/_research/topics/pre-shannon-to-dartmouth-search.md`
- JSON output:
  `docs/_research/topics/pre-shannon-to-dartmouth-search.json`
- Query text:
  `history of artificial intelligence pre-Shannon McCulloch Pitts 1943 Dartmouth conference Claude Shannon`

## Claims That Need Later Primary-Source Verification

- Exact wording and interpretive framing for McCulloch-Pitts should be checked
  directly against the 1943 paper before publication-grade content is written.
- Shannon’s 1938 thesis and 1950 chess work should be checked against primary
  documents before final student-facing prose is locked.
- The exact attendee and participant framing for Dartmouth should be checked
  against the proposal text and stronger historical sources before any
  publication-grade expansion of the Dartmouth material.

## Candidate Media

### Sourced Images

- Candidate: Dartmouth proposal image from the Dartmouth history page
- URL or origin:
  https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth
- Why it helps:
  It visually anchors the field-naming moment and gives the era package a real
  historical object rather than generic retro-computer imagery.
- Notes:
  Requires later provenance handling and usage review in Sprint 2.

- Candidate: Bell Labs Shannon / Theseus imagery from the Bell Labs Shannon
  history site
- URL or origin:
  http://belllabs-site-claude-shannon.s3-website-us-east-1.amazonaws.com/
- Why it helps:
  It makes Shannon legible as an engineer and machine-builder, not only as an
  abstract theorist.
- Notes:
  Good candidate for sourced-image planning, but still requires explicit record
  handling in Sprint 2.

### Diagram Ideas

- Diagram concept: "From logic to AI" flow diagram
- What it teaches:
  Boole/Frege/Gödel/Turing -> Shannon -> McCulloch-Pitts -> Dartmouth.
- Why a diagram is better than prose alone:
  It can show that AI emerged from several lines of work at once rather than one
  isolated breakthrough.

- Diagram concept: mini timeline from 1936 to 1956
- What it teaches:
  Turing 1936, Shannon 1938 and 1948, McCulloch-Pitts 1943, Dartmouth 1956.
- Why a diagram is better than prose alone:
  It slows the reader down and prevents the chronology from blurring together.

### Audio Segment Idea

- Proposed segment:
  a 90-second narration explaining why Dartmouth named AI but did not create all
  of its underlying ideas from scratch
- Audience need:
  students who understand narrative more easily when chronology is spoken aloud
- Notes on pacing or pronunciation:
  slow pace; pronounce McCulloch and Pitts clearly; emphasize that "information"
  and "intelligence" are related but not identical ideas in this period

## Open Questions

- How much cybernetics should be foregrounded in the first exemplar package?
- Should Shannon be introduced first as a digital-logic figure or as an
  information-theory figure for this audience?

## Next Use In The Repo

This memo now supports the implemented exemplar and adjacent-era work in three
ways:

- it anchors the early-era split between the precursor runway and the 1936-1956
  field-formation package
- it remains the source basis for the Era 2 exemplar slice and the adjacent Era
  1 expansion
- it still contains the media leads that support later diagram rendering,
  sourced-image verification, and audio production work

It should be revisited whenever the repo deepens primary-source verification,
diagram rendering, sourced-image verification, or audio production for this
historical sequence.
