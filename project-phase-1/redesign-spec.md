# Algorithmic Aesthetics Redesign Spec

## Purpose
Recreate the entire exhibit website with stronger narrative flow, more cohesive design system, and tighter content rhythm while preserving the best ideas from the current build.

## Executive Summary
- Keep the four-era structure but make the experience feel like a curated exhibition walkthrough.
- Reduce friction: clearer navigation, predictable section rhythm, and consistent caption/citation patterns.
- Strengthen contrast between eras through layout shifts, not only color and imagery.
- Upgrade content density: fewer long blocks, more structured micro-essays and visual anchors.

## Core Experience Principles
1. Curatorial flow: every page follows the same structural cadence.
2. Era contrast: each era changes layout, grid, and texture, not just palette.
3. Visual-first storytelling: images lead, text explains, citations support.
4. Accessibility by default: reduced motion, readable type, and focus-visible interactions.

## Information Architecture
- Home (Overview + Map)
- Era 1: Early Web Aesthetics
- Era 2: Platform Standardization
- Era 3: Algorithmic Influence
- Era 4: Subcultures and Anti-Design
- Sources (single reference index)

## Global Layout System
- Max width: 1120px content, 1280px full-bleed sections.
- Primary grid: 12-column, 24px gutters, 8pt spacing scale.
- Page rhythm: Hero -> Visual Archive -> Two narrative modules -> Commentary -> Design Impact -> References.

## Navigation and Flow
- Persistent top nav with era progress indicator (1-4).
- Primary actions: Next/Previous buttons fixed at top and bottom.
- Optional mini-map on home with direct era jumps.
- Replace interactive panels with static, curated content blocks for clarity.

## Content Strategy
### Tone
- Curatorial, concise, explanatory.
- Use short paragraphs (2-4 sentences) with a clear topic sentence.

### Content Modules (per era)
1. Hero (80-120 words)
2. Visual Archive (4 images + tight captions)
3. Context Module A (120-150 words + list)
4. Context Module B (120-150 words + list)
5. Era Commentary (2 paragraphs)
6. Design Impact (1 paragraph)
7. References (3-6 sources)

### Global Copy Improvements
- Replace repeated phrases with specific era language.
- Use parallel structure for list items.
- Avoid generic statements like "visual language" unless tied to a concrete example.

## Visual Direction
### Home
- Museum lobby feel: large title, summary, and a grid of era cards.
- Use a single hero image with a subtle overlay grid.

### Era 1: Early Web Aesthetics
- Visual language: collage, stickers, GIF motifs, scanline texture.
- Layout: asymmetric split, stacked lists, playful badge clusters.
- Emphasis: no standardized layouts, no mobile constraints, handcrafted HTML.

### Era 2: Platform Standardization
- Visual language: clean modules, strict grids, system cards.
- Layout: symmetric two-column modules, strong baseline grid.
- Emphasis: templates, tokens, responsive rules, platform consistency.

### Era 3: Algorithmic Influence
- Visual language: dashboards, metrics strips, data overlays.
- Layout: modular blocks, card stacks, KPI band.
- Emphasis: optimization, experimentation, engagement loops.

### Era 4: Subcultures and Anti-Design
- Visual language: collage, raw type, zine layout.
- Layout: broken grid, staggered blocks, layered textures.
- Emphasis: resistance, remix culture, anti-standardization.

## Typography System
- Body font: Space Grotesk (all pages).
- Era display fonts:
  - Early Web: Press Start 2P
  - Platform: Sora
  - Algorithmic: IBM Plex Mono
  - Subcultures: Bungee
- Type scale: 14/16/20/28/40/56.

## Color System
- Shared neutrals for body text and backgrounds.
- Era palettes:
  - Early Web: neon cyan, magenta, electric blue.
  - Platform: cool gray, cobalt, teal.
  - Algorithmic: graphite, acid green, amber.
  - Subcultures: black, neon orange, hot pink.

## Components
- Era hero with eyebrow + title + lede + next/prev.
- Visual Archive grid (2x2, consistent caption style).
- Callout card (Design Impact) with icon or label.
- Reference list with uniform citation formatting.

## Interaction and Motion
- Page transition overlay with reduced-motion toggle.
- Lightbox for images with captions.
- Remove timeline scrubbers and interactive tabs for clarity.

## Accessibility
- Ensure contrast ratios meet AA for body text.
- All images have descriptive alt text.
- Motion toggle persists in local storage.

## Content Improvements (Highlights)
- Early Web: add explicit contrast with mobile/responsive constraints.
- Platform: align grid examples with real layout systems and consistent captions.
- Algorithmic: tighten metrics language with real KPI labels.
- Subcultures: reduce long lists, add a micro-essay on remix ethics.

## Sources Strategy
- Centralize citations in a single Sources page.
- Each era page includes a short reference list with 3-6 primary links.
- Ensure every non-user image has a source link.

## Build Plan
1. Restructure page templates and remove unused interactive panels.
2. Standardize layout rhythm and component classes across pages.
3. Rewrite era copy in short, modular blocks.
4. Audit images and captions; align with sources.
5. Final QA: links, alt text, responsive checks.

## Success Criteria
- Consistent visual rhythm across pages.
- Clear contrast between eras through layout and tone.
- Reduced cognitive load (less repetition, more structure).
- All assets cited and accessible.
