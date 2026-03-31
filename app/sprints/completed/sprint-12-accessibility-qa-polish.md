# Sprint 12: Curatorial Upgrade & Exhibit Reframing

**Goal:**
Reframe the site as an experimental artist-run digital show that borrows institutional cues, deepens object handling, and closes the gap between strong styling and actual exhibition design.

**Direction:**
- Mode: artist-run show with museum discipline, not a Smithsonian clone
- Tone: interpretive, slightly rough, materially aware, still legible and evidence-first
- Persuasion principle: apply Cialdini's authority through credible curation, provenance, expert framing, and disciplined label systems rather than through empty institutional branding
- Layout inspiration: borrow from the example project's broader editorial frame, chapter-style hero/support columns, stronger section rhythm, and deliberate home-page sequencing

**Scope:**
- In: exhibit narrative restructuring, object metadata expansion, local asset stewardship for hero artifacts, example-inspired layout upgrades, human-voice inserts, interpretive ending sequence, label/caption redesign, curatorial navigation refinement, authority-building cues rooted in credible scholarship and object handling
- Out: net-new era topics, large backend systems, full CMS buildout, speculative interactive playgrounds unrelated to exhibit reading

**Core Problems This Sprint Resolves:**
- The exhibit reads as curated structurally, but not yet deeply enough at the object level
- Artifact records are too thin to feel accessioned or intentionally collected
- The home page opens well but the exhibit lacks a strong exit or reflective coda
- Human stakes are underrepresented relative to systems analysis
- Grunge atmosphere lives mostly in the surfaces instead of the interpretive devices
- The exhibit signals taste, but it does not yet project enough curatorial authority through provenance, labeling, and source framing
- Layout is coherent, but it can borrow more of the example project's editorial sequencing and support-column rhythm

**Tasks:**
- Rework the home page into a clearer opening sequence with stronger section transitions, wider editorial framing, and a more deliberate route through the exhibit
- Add an exhibit closing/epilogue section or route that gives visitors a reflective ending rather than dropping them into references
- Expand the object schema so artifacts can include year, maker/community, medium, provenance/context, and significance notes in addition to caption and credit
- Redesign artifact presentation so each image reads like an exhibit object label rather than a web illustration
- Localize the most important hero/archive assets into the project and document which objects remain external references
- Add human-voice material to each era: maker/community notes, witness quotes, micro-stories, or brief pull-quote style interpretive fragments
- Strengthen authority signals across the exhibit: curatorial label language, disciplined source attributions, dossier-style support text, and explicit framing of why each object has been selected
- Refine section navigation so gallery orientation feels intentional: opening, in-gallery wayfinding, and end-of-gallery return signals
- Push the grunge-museum language into labels, cards, section dividers, and interpretive framing rather than only page backgrounds and textures
- Borrow example-project layout ideas where they fit this exhibit:
	- broader frame width and stronger editorial spacing rhythm
	- support-column hero composition for chapter openings
	- section dividers or visual breaks between major interpretive beats
	- clearer distinction between opening, reading frame, chronology, and scene/object groupings
- Preserve and verify accessibility while making the exhibit rougher in tone: readable type, focus states, reduced motion, and caption clarity must remain intact

**Implementation Tracks:**
1. Narrative Flow
- Re-sequence the home page so it behaves like an opening gallery with an explicit invitation, route map, reading model, and scene/object lead-in
- Add an ending section that answers "what carries forward?" and gives the show a final argument
- Strengthen previous/next and return navigation so the guided tour feels complete from entry to exit

2. Exhibit Organization
- Revisit section IDs, labels, and page navigation naming so the exhibit reads like rooms, scenes, labels, and dossiers rather than generic web sections
- Use the example project's chapter-hero and section-break logic as inspiration for pacing and orientation
- Make authority legible at the structural level through stable headings, curatorial framing blocks, and a consistent hierarchy of overview, object evidence, interpretation, and references

3. Artifact Presentation
- Extend content types for accession-like records and interpretive label fields
- Update media and reference components to surface provenance, significance, and source intent more clearly
- Move priority assets into local project storage where feasible
- Ensure object labels answer the authority questions a visitor asks implicitly: what is this, why is it here, who sourced it, and how should I read it

4. Educational Value
- Add short interpretive notes that connect each object to a claim, not just a citation
- Introduce human voices or community markers so visitors understand who made, used, or circulated these aesthetics
- Use expert framing carefully: the exhibit should feel researched and authoritative without sounding bureaucratic or flattening subcultural material

5. Emotional Engagement
- Use quotes, manifesto fragments, visitor-facing prompts, and end-of-gallery reflections to give the show affective shape
- Let each era feel inhabited by people and subcultures, not only by trends and systems

6. Visual Coherence
- Align the home page, era pages, and source archive under one editorial system with clearer spacing, support rails, dividers, and caption hierarchy
- Keep each era distinct while ensuring the common exhibit grammar is unmistakable

7. Visitor Experience
- Improve wayfinding for first-time visitors and skimmers without flattening the guided narrative
- Keep the show inspectable, quiet, and non-app-like even when the layout becomes more ambitious
- Make visitors feel they are in trusted hands through consistent label logic, clear provenance cues, and a confident but not overbearing curatorial voice

**Files to touch:**
- app/page.tsx
- app/sources/page.tsx
- app/globals.css
- components/content/home-hero.tsx
- components/content/era-map-grid.tsx
- components/content/reading-frame.tsx
- components/content/curatorial-comparison.tsx
- components/content/era-chapter.tsx
- components/content/era-hero.tsx
- components/content/archive-grid.tsx
- components/content/media-figure.tsx
- components/content/reference-list.tsx
- components/content/impact-callout.tsx
- components/content/source-archive.tsx
- lib/content/types.ts
- lib/content/site-content.ts
- lib/site.ts
- assets/ and docs/assets/ for localized collection objects as needed

**Potential New Files:**
- components/content/exhibit-epilogue.tsx
- components/content/object-label.tsx
- components/content/pull-quote.tsx
- components/content/section-divider.tsx
- lib/content/object-records.ts or equivalent helper if the object schema needs separation from era copy

**Acceptance Criteria:**
- The home page reads like an opening gallery with clearer editorial pacing and stronger layout hierarchy
- The exhibit has a real ending sequence or epilogue, not just a final references block
- Priority artifacts present richer object metadata and exhibit-label style presentation
- At least one human-voice or community-centered interpretive device appears in each era
- Authority is visible through object provenance, curatorial framing, and disciplined source presentation rather than through decorative institutional mimicry alone
- Grunge design principles are visible in the interpretive devices and labels, not only in the page background treatment
- The example project's editorial layout lessons are translated into this project without breaking the current museum-exhibit architecture
- Accessibility basics still hold after the redesign pass
- Build, lint, typecheck, and content validation pass after the changes

**Verification Checklist:**
- [ ] Opening sequence reworked
- [ ] Ending/epilogue added
- [ ] Object schema expanded
- [ ] Priority assets localized or explicitly documented as external
- [ ] Artifact labels upgraded
- [ ] Human-voice layer added to all eras
- [ ] Authority cues integrated into labels, sources, and curatorial framing
- [ ] Navigation/orientation refined
- [ ] Grunge language pushed into interpretive devices
- [ ] Accessibility checks still pass
- [ ] Verification commands pass

**Completion Evidence:**
- Screenshot set of the revised opening sequence, one upgraded era page, and the new ending sequence
- Before/after examples of upgraded object labels and metadata
- Verification output summary for lint, typecheck, content checks, and build
- PR or commit link
