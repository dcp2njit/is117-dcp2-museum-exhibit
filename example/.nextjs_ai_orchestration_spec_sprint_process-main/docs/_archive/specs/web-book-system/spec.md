# Web Book System Master Specification

> **Status:** Complete

## Objective

Create a single governing specification for the site's transformation into a
professional, book-like, web-native reading system.

This specification defines the design doctrine, technical stack constraints,
content model, information architecture, accessibility standards, responsive
behavior, and execution plan required to turn the repository into a rigorous
historical publication for contemporary college readers.

The target is not a marketing site and not a dashboard. The target is a new
generation of book: a narrative-first, reference-capable, index-aware web
publication.

## Product Definition

The site should behave like all of the following at once:

1. a readable historical book
2. a guided course companion
3. a narrative index of concepts, people, institutions, and documents
4. a cognitively manageable reading environment for college students

The site must preserve scholarly seriousness while reducing cognitive friction.

### Product Priority Order

The four product identities above are not equal.

When tradeoffs appear, the site must prioritize them in this order:

1. readable historical book
2. guided course companion
3. narrative index
4. flexible reference environment

If a feature improves indexing but weakens the main reading sequence, it should
be rejected or redesigned.

## Design Council

The governing design lens for this work combines four historical viewpoints:

1. **Massimo Vignelli**
   Reduce, standardize, impose hierarchy, eliminate decorative inconsistency.

2. **Josef Muller-Brockmann**
   Build one governing grid, use space structurally, and remove accidental voids.

3. **Jan Tschichold**
   Compose headings, paragraphs, and measures deliberately rather than forcing
   text into arbitrary boxes.

4. **Beatrice Warde**
   Ensure the interface clarifies reading rather than performing design at the
   expense of comprehension.

These are not mood-board references. They are working constraints.

## Design Council Audit Of The Current Spec

This section records the critical weaknesses of the current site and of early
versions of this specification so the project does not drift back into vague
ambition.

### Vignelli Audit

1. The site still permits too many surface behaviors.
2. The current design language tolerates too many card-like objects.
3. Navigation and orientation are repeated in multiple visual dialects.
4. The specification must reduce allowable variation, not merely encourage restraint.

### Muller-Brockmann Audit

1. The homepage still shows evidence of local grids rather than one governing system.
2. Chronology and lower-page mosaics still risk stranded blocks on wide screens.
3. Large screens still require stricter use of horizontal span and sectional force.
4. The specification must define what counts as accidental empty space.

### Tschichold Audit

1. Headings remain vulnerable to cramped wraps in narrow modules.
2. The typography system needs explicit measure, leading, and scale constraints.
3. The project must stop forcing long titles into undersized containers.
4. The specification must define headline classes by role, not by local preference.

### Warde Audit

1. The site still risks over-designing reference surfaces.
2. Too many containers and tonal shifts can interfere with comprehension.
3. The reading model must be obvious without repeated explanation chrome.
4. The specification must privilege clarity over novelty whenever the two conflict.

### Audit-Derived Defects To Eliminate

The redesign is not complete while any of the following remain true:

1. a section feels visually stranded in a larger field
2. a page uses more card types than necessary to explain its content
3. a headline wraps awkwardly because its container is too narrow
4. navigation language changes meaning from one surface to another
5. the shell competes with the page for primary attention
6. a reader cannot identify the dominant next move within a few seconds

## Non-Negotiable Principles

1. One site, one governing system.
   The homepage, eras, guides, reading maps, people pages, header, and footer
   must feel authored by one hand.

2. Narrative before inventory.
   The site may expose many routes, but it must always privilege reading order,
   causal sequence, and intellectual scaffolding.

3. Fewer objects, stronger structure.
   The design should stop relying on repeated bordered cards and start relying
   on hierarchy, grid, rhythm, and contrast.

4. Typography carries authority.
   Headline rhythm, line breaks, line height, measure, and contrast must do more
   of the work than decorative surfaces.

5. Space must be earned.
   White space is not inherently sophisticated. It must reveal hierarchy,
   support pacing, or frame important content.

6. Responsiveness is compositional.
   Mobile, tablet, laptop, and large desktop layouts each require intentional
   structure rather than simple shrink-and-wrap behavior.

7. Accessibility is part of design quality.
   Clear heading order, keyboard navigation, contrast, focus states, semantic
   landmarks, and readable measures are required, not optional.

8. Cognitive load must be managed explicitly.
   Students should always know where they are, what kind of page they are on,
   what to read next, and how to branch without losing the main argument.

9. The specification must remain executable.
   Every major design rule in this document should be convertible into an audit,
   acceptance criterion, test, or review checklist.

## Current Technical Baseline

### Platform

1. Next.js 16 App Router
2. React 19
3. TypeScript
4. ESLint
5. Vitest and Testing Library

### Styling And UI Framework

1. Tailwind CSS 4 is the primary styling system.
2. shadcn-style local primitives live under `components/ui/*`.
3. Radix primitives are wrapped locally and consumed through repository-owned
   interfaces.
4. CVA, `clsx`, and `tailwind-merge` define variant behavior.
5. Global CSS should remain responsible for tokens, broad document rules,
   baseline layout rules, and shared typography constraints only.

### Image System

1. `FocalImage` is the shared image entry point.
2. `sharp` and `smartcrop-sharp` provide focal metadata.
3. Images should behave as narrative anchors, not decorative filler.

## UI Architecture Contract

### Layering Rules

1. `components/ui/*`
   Shared design-system and interaction primitives only.

2. `components/content/*`
   Editorial composition layer for chapter surfaces, route bands, narrative
   mosaics, chronology systems, and page-level reading structures.

3. `app/*`
   Route orchestration only. Routes should not become ad hoc visual systems.

### Stack Rules

1. Tailwind utilities define composition and spacing.
2. Radix solves accessibility-heavy interactions.
3. shadcn-style wrappers protect the codebase from direct third-party coupling.
4. New shared patterns must be extracted before a third one-off implementation
   appears.

## Design System Requirements

### Grid

1. The site must adopt one governing frame and one compositional grid language.
2. Major sections may change density, but they may not abandon the system.
3. Full-width sections should be used deliberately for major narrative resets.
4. Floating mid-width blocks inside wide canvases should be treated as a defect
   unless compositionally justified.
5. Large desktop sections must visually claim width; a section narrower than its
   surrounding frame must justify itself with reading measure or narrative emphasis.
6. No homepage section may read as an isolated card floating in the middle of the canvas.

### Layout Budgets

The following budgets govern the redesign:

1. Homepage card archetypes: maximum 3
2. Shared heading roles across the site: maximum 4
3. Primary navigation groups in the shell: maximum 2
4. Dominant action per major band: maximum 1
5. Competing visual temperatures per page: maximum 3

### Typography

1. Reduce the number of headline scales used across the site.
2. Increase consistency in line-height and tracking rules.
3. Compose long headings instead of allowing arbitrary cramped wraps.
4. Treat hero headlines, section headlines, modular headlines, and small
   metadata labels as a controlled family.
5. Paragraph measures must support reading, not card aesthetics.
6. Long historical titles must be given more width before being given more line breaks.
7. Headline tracking should never be tightened so far that counters visually close.
8. Display type may be dramatic only where the page can support the measure.

### Typographic Roles

The site should use only the following headline roles:

1. Hero title
   Page-defining statement, composed line breaks allowed.

2. Section title
   Major narrative band heading.

3. Module title
   Local block heading within a larger section.

4. Meta label
   Small uppercase orientation text.

Any additional heading style requires explicit justification in sprint specs.

### Color And Contrast

1. Preserve the warm archival palette unless a clear systemic reason emerges to
   change it.
2. Contrast should express hierarchy and section temperature.
3. Dark sections should feel like structural pivots, not decorative callouts.
4. Avoid piling similar cream-on-cream surfaces that flatten hierarchy.

### Surfaces

1. Stop defaulting to bordered rounded cards for every content unit.
2. Use open layouts, ruled layouts, bands, shelves, and quiet text fields in
   addition to contained modules.
3. Reserve strong surface treatment for sections that genuinely need it.
4. Bordered cards should be the exception, not the default page grammar.
5. When a section can be expressed as aligned text and rules, do not box it.

### Interaction

1. Hover and focus states must clarify link behavior without turning every
   element into a noisy button.
2. Navigation labels must remain legible without requiring hover to decode.
3. Motion should be subtle and purposeful only.

## Page Taxonomy

Every route in the site must belong to exactly one of the following page roles:

1. Opening chapter
2. Era chapter
3. Companion evidence page
4. Cast and institution page
5. Concept bridge page

Each role must have its own allowed composition pattern and its own content obligations.

### Role Contract

1. Opening chapter
   Introduces thesis, reading model, chronology, and controlled entry points.

2. Era chapter
   Advances the main argument in sequence and must always point backward and forward.

3. Companion evidence page
   Supports chronology with documents, papers, and explanation of why evidence matters.

4. Cast and institution page
   Grounds the history in people, labs, firms, and research cultures.

5. Concept bridge page
   Reduces technical friction for modern concepts without taking over the main narrative.

## Navigation Contract

Navigation language must teach the reading model.

### Global Navigation Rules

1. Primary navigation should describe the main reading paths, not merely site buckets.
2. Secondary navigation should reinforce entry points, not compete with primary navigation.
3. Footer navigation should help readers re-enter the narrative with intention.
4. Route labels must remain stable across header, page body, and footer.

### Approved Reader Model Language

The navigation and orientation system should repeatedly reinforce this sequence:

1. Read the story in order.
2. Check the documents when needed.
3. Meet the people and institutions when needed.
4. Slow down for concepts when needed.

If a navigation label does not support that model, it should be revised.

## Accessibility Requirements

1. Every page must preserve semantic heading order.
2. Landmarks must remain explicit: header, main, nav, complementary, footer.
3. Keyboard users must be able to reach all routes and controls clearly.
4. Focus styling must remain visible over light and dark surfaces.
5. Text and UI contrast must satisfy WCAG 2.2 AA at minimum.
6. Decorative images must not carry required meaning.
7. Narrative images must have meaningful alt text when they do real explanatory work.
8. Responsive rearrangement must not break reading order for assistive tech.
9. Tap targets on touch devices should remain comfortably reachable and not rely on precision clicking.
10. Long pages must preserve heading discoverability for screen-reader navigation.

## Responsive Composition Requirements

### Mobile

1. Mobile is the canonical reading mode.
2. The first screen must establish title, thesis, and one clear next move.
3. Use a narrative stack rather than pseudo-masonry.
4. Avoid tiny image tiles and cramped multi-column patterns.
5. Reduce interface choices before reducing textual clarity.

Review width:

1. 390px minimum design review

### Tablet

1. Tablet is the transition from stack to composition.
2. Two-column relationships should emerge only where hierarchy is clear.
3. Chronology may become quilted only if reading order remains obvious.
4. Companion content may pair, but should not become cluttered.

Review widths:

1. 768px portrait
2. 1024px landscape

### Laptop And Desktop

1. Larger screens should increase authority, not the number of boxes.
2. Large canvases require stronger section spans and more decisive bands.
3. Empty space must work structurally, not merely decorate the page.
4. If a section feels stranded in a field, the layout is wrong.

Review widths:

1. 1280px
2. 1440px
3. 1728px

## Content Model Requirements

The site must be legible as both a historical argument and a navigable reference
system.

### Core Content Modes

1. chronology
2. documentary evidence
3. people and institutions
4. concept bridges
5. reading maps
6. route summaries and transitions

### Editorial Behavior

1. Chronology is the spine.
2. Reading maps provide evidence and lineage.
3. People and institutions keep the story inhabited.
4. Guides slow down difficult technical transitions.
5. Homepage and shell must teach the reading model itself.

## Content Specification

Every major route should be composed from a controlled set of narrative units.

### Allowed Narrative Units

1. thesis opener
2. chronology band
3. documentary anchor
4. cast anchor
5. concept bridge
6. transition block
7. forward path

### Route-Level Content Requirements

1. Homepage must contain a thesis opener, chronology band, reading-model explanation,
   and exploratory entry surfaces.
2. Every era page must contain a chapter thesis, historical sequence context,
   documentary or institutional grounding, and forward/backward orientation.
3. Reading maps must explain why documents matter, not just list them.
4. People and institutions pages must be grouped editorially, not just chronologically.
5. Guides must define the problem, explain the concept, and hand the reader back to the chronology.

## Reader And Cognitive Load Model

The primary reader is a current college student who needs strong orientation,
low friction, and visible intellectual payoff.

### Reader Needs

1. understand where to start
2. understand how the site is organized
3. understand how each page type differs
4. understand what to read next
5. branch into evidence or explanation without losing the main thread

### Cognitive Load Rules

1. Every route must identify its role in the reading system.
2. Every page should expose one dominant next action.
3. Navigation should be stable across pages.
4. Dense pages must be segmented with visible pacing.
5. Branching should be opt-in, not mandatory to understand the core argument.
6. Pages should never ask readers to make more than one major navigational decision in a single visual cluster.
7. Orientation copy should explain page role quickly and then get out of the way.

## Current Site Inventory

### Route Inventory

The current app routes are:

1. `/`
   Homepage / opening chapter

2. `/reading-maps/intellectual-lineage`
   Reading map / paper trail companion

3. `/people-and-institutions`
   Cast and institutions companion

4. `/guides/embeddings-latent-space-and-llm-math`
   Concept bridge / technical guide

5. `/eras/precursors-to-machine-intelligence`
   Era 1

6. `/eras/computation-information-field-formation`
   Era 2

7. `/eras/symbolic-optimism-and-early-ai-programs`
   Era 3

8. `/eras/knowledge-systems-critique-and-the-first-ai-winter`
   Era 4

9. `/eras/statistical-learning-and-network-revival`
   Era 5

10. `/eras/deep-learning-breakthroughs`
    Era 6

11. `/eras/foundation-models-and-generative-ai`
    Era 7

### Route Roles

1. Homepage
   Establishes thesis, reading model, sequence, and entry points.

2. Era pages
   Carry the main narrative chronology.

3. Reading map
   Anchors historical claims in named texts and source objects.

4. People and institutions
   Gives the field a cast, institutional logic, and social grounding.

5. Guides
   Translate technical concepts so the modern eras remain readable.

### Current Structural Problems

1. The homepage still over-relies on modular card behavior.
2. The shell is improved but still not fully unified with the rest of the site.
3. Chronology and lower-page mosaics still exhibit dead zones on wide screens.
4. Several headings still rely on narrow columns rather than true composition.
5. Interior routes still lag behind the homepage in visual rigor.
6. The site does not yet fully distinguish page roles through consistent layout behavior.
7. Footer and lower-page regions remain vulnerable to empty compositional pockets.

## Target Site Map

The site map should be both literal and narrative.

### Primary Narrative Spine

1. Home
   Opening chapter / why this site exists / how to read it

2. Seven Eras
   The main historical argument in sequence

3. Current Era
   The culmination and present-day synthesis surface

### Companion Evidence Layer

1. Reading maps
   Intellectual lineage / paper trail / primary sources

2. People and institutions
   Cast / labs / critics / builders / deployment actors

3. Guides
   Concept bridges and technical orientation

### Proposed Reader-Facing IA Model

The reader should be able to understand the site as:

1. Read the story in order
2. Check the documents when needed
3. Meet the people and institutions when needed
4. Slow down for concepts when needed

That sentence should govern all navigation language.

## Narrative Information Architecture

### Site-Level Reading Sequence

The whole site should be legible as a book with this sequence:

1. opening chapter
2. seven era chapters
3. companion evidence and cast pages
4. technical concept bridges
5. re-entry through footer and contextual links

### Homepage Responsibilities

The homepage must do all of the following:

1. state the thesis
2. define the reading model
3. expose the chronology as the main route
4. explain companion surfaces without making them compete as equal homepages
5. offer strong entry scenes and documentary anchors

### Era Page Responsibilities

Each era page must:

1. open with a clear historical claim
2. situate the era within the seven-era sequence
3. provide documentary evidence or source anchors
4. reference people and institutions where relevant
5. bridge to technical guides where modern concepts become difficult

### Reading Map Responsibilities

The reading map must:

1. group papers meaningfully
2. explain why each cluster matters
3. remain tied to chronology
4. reduce the risk of the page becoming a detached bibliography

### People And Institutions Responsibilities

This route must:

1. behave like a cast page, not a directory
2. expose builders, critics, institutions, and deployment actors
3. stay historically defensible
4. help readers understand why eras feel different

### Guide Responsibilities

Guides must:

1. lower technical barriers
2. stay clearly subordinate to the main narrative spine
3. avoid feeling like a separate mini-site

## Narrative Site Map Matrix

| Route                                          | Page Role                 | Reader Job                      | Must Link Back To                                  |
| ---------------------------------------------- | ------------------------- | ------------------------------- | -------------------------------------------------- |
| `/`                                            | Opening chapter           | learn the reading model         | Era 1 and chronology                               |
| `/eras/*`                                      | Era chapter               | advance the main story          | previous and next era, evidence, guide when needed |
| `/reading-maps/intellectual-lineage`           | Companion evidence page   | inspect documentary proof       | chronology and relevant eras                       |
| `/people-and-institutions`                     | Cast and institution page | understand who shaped the field | chronology and relevant eras                       |
| `/guides/embeddings-latent-space-and-llm-math` | Concept bridge page       | lower technical friction        | the modern eras                                    |

## Design Inventory And Audit Rules

Every future design audit should check the site against these questions:

1. Is this section part of the governing grid or an isolated composition?
2. Is the white space structural or accidental?
3. Are headings composed or merely wrapped?
4. Is the page clarifying the argument or showcasing modules?
5. Does the reader know what to read next?
6. Is the route role obvious?
7. Is the visual system consistent with the rest of the site?

## Acceptance Criteria By Designer Lens

### Vignelli Acceptance Criteria

1. The site uses a visibly reduced design vocabulary.
2. Repeated structures share the same hierarchy and alignment logic.
3. Shell, homepage, and interior pages no longer feel like separate systems.

### Muller-Brockmann Acceptance Criteria

1. Major sections visibly belong to one governing grid.
2. Wide-screen layouts do not contain stranded modules or decorative voids.
3. Section width changes are structural and intentional.

### Tschichold Acceptance Criteria

1. Major headings read as composed text, not collapsed shapes.
2. Long titles are given enough measure or reduced enough ambition to remain readable.
3. The typographic hierarchy is stable across page roles.

### Warde Acceptance Criteria

1. The interface never overshadows the reading task.
2. Orientation is clear without repeated ornamental framing.
3. Readers can move through the site without learning a new visual logic per section.

## Final QA Round

This specification has completed a second QA pass against the live route
inventory, homepage implementation, shell, navigation model, and recent visual
review screenshots.

### Final QA Findings

1. The specification now has a defensible page taxonomy and route-role model.
2. The specification now defines measurable design limits rather than broad aesthetic goals alone.
3. The specification now aligns with the current repository stack and route structure.
4. The specification now defines explicit review widths, accessibility floors,
   narrative responsibilities, and sprint-level acceptance criteria.

### Remaining Project Risks

These are no longer specification defects. They are implementation risks.

1. homepage wide-screen dead space may return if local compositions drift from the governing grid
2. interior routes may reintroduce card sprawl if the shared system is not enforced early
3. navigation language may fragment if shell changes outpace route adoption
4. typographic quality may degrade if long headings are handled locally instead of through shared role rules

### Finalization Status

This master specification is considered ready for sprinted execution.
Implementation should proceed only through the sprint documents in
`docs/_specs/web-book-system/sprints/`.

## Implementation Program

### Sprint 1: Homepage System

Goal:
Create the canonical homepage composition and design doctrine.

Scope:

1. finalize the homepage governing grid
2. reduce card archetypes
3. rebuild chronology as a stronger structural band
4. rebuild the reading-model section as a real editorial spread
5. simplify the footer into a quieter close

Acceptance criteria:

1. homepage sections no longer feel like independent premium cards
2. chronology reads as a dominant narrative band on large screens
3. reading-model section uses width decisively and does not float as an inset object
4. lower-page mosaic has no obvious dead pockets at review widths

### Sprint 2: Shared Shell And Design System

Goal:
Turn homepage decisions into reusable rules.

Scope:

1. width system
2. spacing rhythm
3. heading scales and line-height rules
4. shell behavior
5. page furniture primitives
6. accessibility and interaction consistency

Acceptance criteria:

1. shared heading roles are documented and implemented
2. shell language matches page language
3. card and panel types are reduced and named explicitly
4. spacing and width rules are reusable rather than route-specific

### Sprint 3: Interior Route Adoption

Goal:
Apply the system to all major route types.

Scope:

1. all era pages
2. reading map
3. people and institutions
4. guides

Acceptance criteria:

1. each page role has a consistent composition model
2. reading maps, cast pages, and guides remain subordinate to the main narrative spine
3. no interior route reintroduces drift in spacing, hierarchy, or shell behavior

### Sprint 4: Final QA And Reader Testing

Goal:
Verify the site as a coherent book-like web system.

Scope:

1. narrative consistency review
2. layout and responsiveness review
3. accessibility review
4. cognitive-load review
5. test, lint, typecheck, build

Acceptance criteria:

1. all review widths pass visual audit
2. accessibility checks pass
3. reader path from homepage to era to evidence to guide is clear and low-friction
4. the site reads as one authored publication

## Testing And Quality Gates

All implementation sprints must end with:

1. lint passing
2. typecheck passing
3. route-level smoke tests updated where needed
4. full build passing
5. browser review at mobile, tablet, laptop, and large desktop widths
6. screenshot-based audit against the four designer lenses
7. written note of any unresolved spatial or typographic defects

## Deliverables

This feature area must eventually produce:

1. one governing design doctrine
2. one governing information architecture
3. one reusable design-system contract
4. one reusable content and page-role contract
5. a sprinted implementation path for the whole site

## Success Criteria

The site is successful when:

1. it feels like a serious publication rather than a collection of components
2. students can understand how to read it within seconds
3. the chronology clearly behaves as the primary route
4. documents, people, and guides deepen the story without fragmenting it
5. wide screens feel composed rather than empty
6. headings read cleanly across all major sections
7. the shell, homepage, and interior pages feel like one authored system
8. page roles are legible without explanation-heavy chrome
9. readers can branch into evidence and return to the main story without confusion
