# Next.js Rebuild Sprint Plan

## Purpose
This document organizes the Next.js rebuild into a bounded sprint sequence that follows the existing sprint-document workflow while recognizing that the project is now moving from an HTML exhibit to a structured application.

## Sprint Sequence
1. Sprint 9: Next.js Foundation
2. Sprint 10: Content System & Source Migration
3. Sprint 11: Page Assembly & Era Implementation
4. Sprint 12: Accessibility, QA & Polish

## Why The Sequence Is Structured This Way
The rebuild should not begin with page-by-page coding.

It should begin with the system that makes the pages maintainable.

### Sprint 9
Creates the shell, route map, and baseline design system.

### Sprint 10
Moves content, citations, and image metadata into structured records.

### Sprint 11
Builds the actual exhibit routes using the shared shell and content system.

### Sprint 12
Hardens the result through accessibility review, verification, and visual polish.

## Dependencies
1. Sprint 10 depends on Sprint 9 route and model decisions.
2. Sprint 11 depends on Sprint 10 content structure being stable.
3. Sprint 12 depends on the main route set being assembled.

## Output Expectations By Sprint
### After Sprint 9
The app exists and the architecture is real.

### After Sprint 10
The app has durable content and evidence data.

### After Sprint 11
The exhibit is fully navigable.

### After Sprint 12
The exhibit is submission-ready or launch-ready.

## Success Conditions For The Full Rebuild
1. The four-era experience feels like one museum exhibition.
2. The site is driven by structured content rather than copied HTML.
3. Citations and captions are easier to maintain than in the current project.
4. Shared components handle repeated page grammar cleanly.
5. Accessibility and verification are treated as part of the product, not an afterthought.

## Reference Documents
1. `redesign-spec.md`
2. `nextjs-rebuild-spec.md`
3. `sources.md`
