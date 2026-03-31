# Sprint 10: Content System & Source Migration

**Goal:**
Move exhibit content out of HTML page markup into structured data and source records that the Next.js app can render consistently.

**Scope:**
- In: era content records, source records, archive metadata, alt text normalization, caption normalization, content loading strategy
- Out: final polish, animation tuning, advanced interactive features

**Tasks:**
- Convert the four eras into structured content records
- Convert sources.md into structured source data grouped by era and use
- Normalize archive items with captions, credits, alt text, and source links
- Define the home page content record and sources page content shape
- Decide whether longform text lives in TypeScript data, markdown, or a hybrid model
- Add content integrity rules for required fields

**Files to touch:**
- Era content files
- Source data files
- Asset metadata files
- Content loader utilities
- nextjs-rebuild-spec.md if content-shape decisions change the contract

**Acceptance Criteria:**
- Every era has a complete structured content record
- Every documentary image has caption, alt text, and source linkage
- Source records exist for all current citations that will ship in v1
- The app can load content without relying on inline route-page copy
- Content integrity rules can identify missing required fields

**Verification Checklist:**
- [ ] Era content records complete
- [ ] Source data complete enough for v1 routes
- [ ] Archive metadata normalized
- [ ] Content loads through shared utilities
- [ ] Content integrity checks pass

**Completion Evidence:**
- Example content record excerpts or screenshots
- Successful integrity-check output
- PR or commit link
