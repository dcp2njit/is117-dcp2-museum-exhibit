# Algorithmic Aesthetics Next.js Rebuild Spec

## Purpose
Define the implementation contract for rebuilding the Algorithmic Aesthetics exhibit as a structured Next.js application. This document translates the current HTML exhibit and redesign goals into a maintainable editorial system with clear routes, content models, reusable components, accessibility requirements, and verification expectations.

This document is intentionally implementation-ready but code-free. It should guide the build before any project scaffolding or component work begins.

## Product Thesis
Algorithmic Aesthetics is a digital museum exhibit about how online culture reshaped graphic design.

The rebuilt site should feel like a guided exhibition, not a landing page and not a blog. Visitors should move through a clear curatorial sequence while still being able to jump directly to eras and references.

## Core Goals
1. Preserve the four-era narrative already established in the current project.
2. Rebuild the site as a coherent editorial system rather than a group of hand-authored pages.
3. Keep the museum-like tone while improving structure, maintainability, and accessibility.
4. Standardize content rhythm across the exhibit without flattening the personality of each era.
5. Centralize source and asset data so citations, captions, and alt text are easier to maintain.

## Non-Goals
1. Do not add a CMS in the first version.
2. Do not rebuild every current interaction if the same idea can be communicated more clearly with static curation.
3. Do not expand scope into a large research portal before the core exhibit is stable.
4. Do not create route complexity that exceeds the current four-era structure unless a later sprint justifies it.

## Primary Experience Principles
1. Curatorial flow: every main route should feel like part of one exhibition sequence.
2. Visual contrast by era: each era should have a distinct skin, but share a stable page grammar.
3. Evidence-first storytelling: images, captions, and references should feel documentary rather than decorative.
4. Scannable density: long copy should be broken into short, legible modules.
5. Accessibility by default: readable type, visible focus states, reduced-motion support, semantic structure.

## Recommended Technical Direction
1. Framework: Next.js with App Router.
2. Language: TypeScript.
3. Rendering model: static export for low-complexity deployment.
4. Styling: shared design tokens plus reusable exhibit components.
5. Content source: local structured content files and markdown, not inline page copy.

## Information Architecture
The rebuild should preserve a simple, memorable route structure.

### Primary Routes
1. `/` - Opening gallery and exhibit overview
2. `/eras/early-web-aesthetics`
3. `/eras/platform-standardization`
4. `/eras/algorithmic-influence`
5. `/eras/subcultures-and-anti-design`
6. `/sources`

### Route Purposes
#### Home
Acts as the opening gallery. It should orient the visitor, state the exhibit thesis, and provide clear entry into the four eras.

#### Era Routes
Act as the main exhibition sequence. Each route should use the same structural grammar so users learn how to move through the exhibit.

#### Sources
Acts as the evidence archive. It should centralize citations, asset provenance, and licensing notes.

## Navigation Model
Navigation should perform curatorial work, not just link pages.

### Primary Navigation
1. Overview
2. Early Web
3. Platform Standardization
4. Algorithmic Influence
5. Subcultures
6. Sources

### Guided Tour Controls
Each era page should include:
1. previous route
2. next route
3. progress marker such as `2 of 4`

### On-Page Navigation
Each era page should include an optional section navigation block for:
1. Overview
2. Visual Archive
3. Context A
4. Context B
5. Commentary
6. Design Impact
7. References

## Page Grammar
All era routes should follow one stable grammar.

### Era Page Sequence
1. Hero
2. Visual Archive
3. Context Module A
4. Context Module B
5. Era Commentary
6. Design Impact
7. References

### Why This Matters
The site should feel ordered because readers encounter a recurring exhibition rhythm, not because every page looks identical. Structure should be shared. Style should vary by era.

## Home Page Specification
The home page should work as a museum lobby rather than a generic homepage.

### Required Sections
1. Opening hero
2. Exhibit map of the four eras
3. Reading frame that explains how to use the exhibit
4. Short curatorial comparison of the four eras
5. Sources preview with link to the full archive

### Home Page Objectives
1. State the exhibit thesis clearly.
2. Make the four-era structure legible immediately.
3. Provide a guided-tour entry point and direct era access.
4. Establish a documentary tone through evidence and framing.

## Content Architecture
Content should move out of route files and into structured source files.

### Site-Level Content
This should store:
1. site title
2. exhibit description
3. navigation labels
4. homepage copy
5. footer copy

### Era Content
Each era should have one structured content record containing:
1. slug
2. era number
3. title
4. year range
5. lede
6. theme or mood
7. hero metadata
8. archive items
9. context modules
10. commentary copy
11. design impact statement
12. short references
13. previous and next route information

### Source Content
Each source record should contain:
1. title
2. URL
3. source type
4. associated era or eras
5. use note
6. author or site when known
7. license note when known

### Asset Content
Each image record should contain:
1. image path or remote URL
2. alt text
3. caption
4. credit line
5. linked source record
6. licensing status
7. optional focal-point metadata for future cropping support

## Data Model
The rebuild should be based on a small number of durable content types.

### EraRecord
Defines one main exhibition route.

Required fields:
1. `slug`
2. `order`
3. `title`
4. `years`
5. `eyebrow`
6. `lede`
7. `themeKey`
8. `archiveItems`
9. `contextBlocks`
10. `commentary`
11. `designImpact`
12. `referenceIds`

### ArchiveItem
Defines one visual object in the exhibit.

Required fields:
1. `id`
2. `image`
3. `alt`
4. `caption`
5. `credit`
6. `sourceId`

### ContextBlock
Defines one text-plus-supporting-media module.

Required fields:
1. `id`
2. `title`
3. `body`
4. `listItems`
5. `supportImage`
6. `supportCaption`

### SourceRecord
Defines one citation or asset lead.

Required fields:
1. `id`
2. `title`
3. `url`
4. `type`
5. `use`
6. `eras`

## Component Inventory
The build should begin from a small shared component set.

### Site Shell Components
1. `SiteHeader`
2. `SiteFooter`
3. `MotionToggle`
4. `SectionNav`

### Home Components
1. `HomeHero`
2. `EraMapGrid`
3. `EraCard`
4. `ReadingFrame`
5. `SourcesPreview`

### Era Components
1. `EraHero`
2. `ArchiveGrid`
3. `ArchiveCard`
4. `ContextModule`
5. `EvidenceList`
6. `CommentaryBlock`
7. `ImpactCallout`
8. `ReferenceList`
9. `MilestoneStrip` if a static chronology surface is needed

### Sources Components
1. `SourcesHero`
2. `SourcesSection`
3. `SourceList`
4. `LicensingChecklist`

## Mapping From Current HTML To Future Components
This mapping defines what should be preserved from the current build.

### Current Home Page
Current source: `index.html`

Map to:
1. hero -> `HomeHero`
2. era overview cards -> `EraMapGrid`
3. references preview -> `SourcesPreview`

### Current Era Pages
Current sources: `early-web.html`, `platform.html`, `algorithmic.html`, `subcultures.html`

Map shared sections to:
1. era hero -> `EraHero`
2. visual archive -> `ArchiveGrid`
3. split text and media modules -> `ContextModule`
4. list blocks -> `EvidenceList`
5. era commentary -> `CommentaryBlock`
6. design impact -> `ImpactCallout`
7. references -> `ReferenceList`

### Platform Interaction
Current source: `platform.html`

The interactive timeline tabs should not be rebuilt as-is unless later testing proves they add meaningful value. The content should instead become a static milestone or chronology block.

## Design System Direction
The design system should preserve the curatorial tone described in the existing redesign spec while making the visual language more systematic.

### Global Design Goals
1. warm museum-like framing
2. strong typographic hierarchy
3. restrained motion
4. readable spacing rhythm
5. documentary treatment of images and captions

### Era Variability
The system should support visual variation through per-era tokens rather than per-page ad hoc CSS.

Each era should define:
1. display type choice
2. accent palette
3. background treatment
4. card or surface style
5. list and callout styling

### Shared Constraints
1. page width and reading width should be consistent across the site
2. archive grids and content modules should follow reusable layout rules
3. image aspect handling should be predictable
4. focus styles should be visible across every theme

## Typography Direction
Use one stable body font for readability and one display treatment per era or per exhibit zone.

### Requirements
1. body text must remain consistent enough that the site still feels unified
2. display typography may vary by era to reinforce historical contrast
3. heading sizes and spacing must come from a defined scale, not one-off values
4. paragraph measure should stay controlled for long-form reading

## Color Direction
Use a shared neutral base plus per-era accent systems.

### Requirements
1. body text and core surfaces should remain readable across all themes
2. era palettes should express contrast without breaking the global design system
3. impact callouts, evidence labels, and progress markers should use consistent semantic roles
4. color alone must not communicate state or meaning

## Motion and Interaction
Interaction should support reading, not compete with it.

### Keep
1. reduced-motion preference
2. subtle section reveals if they remain optional and accessible
3. image lightbox only if it improves the exhibit rather than adding noise

### Remove or Deprioritize
1. full-page transition overlays unless they are minimal and justified
2. tabbed interactions that only reveal a sentence or two of content
3. novelty motion that interrupts reading flow

## Accessibility Requirements
The rebuild must meet public-facing accessibility expectations.

### Required Accessibility Behaviors
1. semantic headings and landmark structure
2. skip link
3. visible keyboard focus states
4. descriptive alt text for all images
5. reduced-motion support
6. sufficient text contrast
7. meaningful link text
8. logical reading order on mobile and desktop

### Content Accessibility Rules
1. captions should be concise and informative
2. references should be readable and scannable
3. decorative imagery should not receive documentary alt text
4. lists should be used only when the content is truly list-like

## Sources and Evidence Strategy
The rebuilt site should treat citations as part of the product.

### Rules
1. every documentary image must map to a known source record
2. every era page should display a short curated reference list
3. the full sources page should centralize all citations and asset notes
4. licensing status should be tracked where possible, even before final QA

### Migration Source
The current `sources.md` file should become structured source data rather than remain a loose reference note.

## Performance Expectations
As a mostly static exhibit site, performance should be treated as a baseline quality requirement.

### Requirements
1. routes should be statically generated
2. avoid unnecessary client-side interactivity
3. optimize images where feasible
4. avoid shipping large libraries for minor UI effects
5. preserve good mobile performance on image-heavy pages

## SEO and Metadata
The site should include the basics even though its primary use is educational.

### Requirements
1. unique page titles per route
2. meaningful meta descriptions
3. open graph basics for sharing
4. structured, readable route names

## Verification Requirements
The rebuild should include lightweight but real verification.

### Minimum Quality Gates
1. type checking
2. linting
3. build verification
4. content integrity checks for required fields

### Recommended Content Integrity Checks
1. every era has exactly two context modules
2. every archive item has caption, alt text, and linked source
3. every era page has previous and next navigation except route endpoints
4. every reference shown on a page resolves to a known source record

## Migration Plan
The rebuild should happen as a structured conversion, not as an all-at-once rewrite.

### Phase 1: Foundation
1. initialize the Next.js project
2. define route structure
3. define content types
4. build the shared shell

### Phase 2: Content System
1. convert era content into structured records
2. convert sources into structured records
3. normalize image captions and alt text

### Phase 3: Page Assembly
1. build home page
2. build one era route fully
3. reuse the same grammar for the other three era routes
4. build sources page

### Phase 4: Refinement
1. tune era-specific skins
2. audit accessibility
3. audit performance
4. verify citations and asset provenance

## Success Criteria
The rebuild is successful when:
1. the four-era exhibit feels like one coherent museum experience
2. each era still has a clearly distinct visual identity
3. content is driven by structured data instead of inline page markup
4. navigation makes the sequence and page structure obvious
5. sources and captions are easier to maintain than in the HTML version
6. the site is accessible, responsive, and stable to extend

## Open Decisions For Implementation
These decisions should be resolved before scaffolding begins.

1. whether the first version should use plain local TypeScript data, markdown, or a mix of both
2. whether image lightbox behavior adds enough value to justify client-side code
3. whether the home page should include a mini-map, a comparison strip, or both
4. whether the sources page should be grouped by era only or by era plus source type

## Final Direction
This rebuild should not be treated as a framework migration alone.

It is a content-system and exhibition-architecture upgrade.

The implementation should preserve the existing curatorial thesis, remove avoidable one-off patterns, and establish one durable editorial system for the entire museum project.