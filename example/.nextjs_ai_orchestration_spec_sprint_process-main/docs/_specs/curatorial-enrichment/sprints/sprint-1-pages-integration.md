# Sprint 1 — People & Institutions Page + Era Pages Integration

> **Spec:** `docs/_specs/curatorial-enrichment/spec.md`
> **Depends on:** Sprint 0 (data layer must be complete)
> **Scope:** Wire new narrative profiles into the People & Institutions index
> page and into the relevant era chapter pages so that every era surfaces its
> associated people and historical anchors through existing components.

---

## Pre-flight

```bash
# Verify Sprint 0 is complete — all profiles exist in data layer
npx tsx -e "
import { peopleProfiles, institutionProfiles, historicalAnchors } from './lib/narrative-data';
console.log('People:', peopleProfiles.length, '(expect ≥ 17)');
console.log('Institutions:', institutionProfiles.length, '(expect ≥ 6)');
console.log('Anchors:', historicalAnchors.length, '(expect ≥ 8)');
"
```

---

## Task 1 — Audit People & Institutions page structure

**File:** `app/people-and-institutions/page.tsx`

Read the existing page to understand how it renders profiles. Determine:

- How profiles are grouped (by era? by kind?)
- What component is used for each card (NarrativeCard?)
- Whether the page auto-discovers profiles from the data array or has a
  hardcoded list

**Verify:**

```bash
grep -n "import" app/people-and-institutions/page.tsx | head -10
grep -n "peopleProfiles\|institutionProfiles" app/people-and-institutions/page.tsx
```

---

## Task 2 — Ensure People & Institutions page shows all profiles

If the page imports and maps over the full `peopleProfiles` and
`institutionProfiles` arrays, no changes are needed — the new entries from
Sprint 0 will appear automatically.

If the page uses a hardcoded subset or filter, update it to include all eras.

Group profiles by era for visual clarity. The existing era order should be:
Era 1, Era 2, Era 3, Era 4, Era 5, Era 6, Era 7.

**Verify:**

```bash
npm run build 2>&1 | grep -i "error\|people-and-institutions"
```

---

## Task 3 — Audit era chapter page structure

**Files:** `app/eras/*/page.tsx` (7 era directories)

Read one or two era chapter pages to understand:

- Whether they pull profiles from `narrative-data.ts`
- How they render historical anchors
- Whether they filter by era or show all

**Verify:**

```bash
for dir in app/eras/*/; do
  echo "=== $(basename $dir) ==="
  grep -l "peopleProfiles\|institutionProfiles\|historicalAnchors\|NarrativeCard" "$dir"page.tsx 2>/dev/null || echo "  (no profile references)"
done
```

---

## Task 4 — Add people profiles to era chapter pages

For each era page that does not already display its people profiles, add a
section that filters `peopleProfiles` by the era and renders NarrativeCards.

The pattern should be:

```tsx
{
  peopleProfiles
    .filter((p) => p.era === "Era N")
    .map((profile) => <NarrativeCard key={profile.slug} profile={profile} />);
}
```

Era assignments:

- Era 1 (`precursors-to-machine-intelligence`): Charles Babbage (already exists)
- Era 2 (`computation-information-field-formation`): Alan Turing
- Era 3 (`symbolic-optimism-and-early-ai-programs`): John McCarthy, Marvin Minsky, Herbert Simon
- Era 4 (`knowledge-systems-critique-and-the-first-ai-winter`): Edward Feigenbaum
- Era 5 (`statistical-learning-and-network-revival`): Frank Rosenblatt
- Era 6 (`deep-learning-breakthroughs`): Geoffrey Hinton, Yann LeCun, Yoshua Bengio
- Era 7 (`foundation-models-and-generative-ai`): All existing Era 7 profiles

**Verify:**

```bash
npm run build
```

---

## Task 5 — Add historical anchors to era chapter pages

For each era page, add a section displaying the historical anchors associated
with that era. Filter `historicalAnchors` by era.

Era assignments:

- Era 1: Lovelace & Analytical Engine, Boole-to-Turing
- Era 2: Dartmouth proposal, Shannon & Theseus
- Era 4: Lighthill Report
- Era 5: Backpropagation paper
- Era 6: ImageNet moment
- Era 7: Transformer paper

**Verify:**

```bash
npm run build
```

---

## Task 6 — Add institution profiles to era chapter pages

For each era page, add a section displaying institution profiles associated
with that era.

Era assignments:

- Era 2: Bell Labs
- Era 3: MIT AI Laboratory
- Era 5: DARPA
- Era 7: OpenAI, Google DeepMind, Anthropic

**Verify:**

```bash
npm run build
```

---

## Final Verification

```bash
# Full build
npm run build

# Tests pass
npm run test

# Visual spot-check: each era page should show its profiles
echo "Check these pages manually:"
echo "  /eras/precursors-to-machine-intelligence/"
echo "  /eras/computation-information-field-formation/"
echo "  /eras/symbolic-optimism-and-early-ai-programs/"
echo "  /eras/knowledge-systems-critique-and-the-first-ai-winter/"
echo "  /eras/statistical-learning-and-network-revival/"
echo "  /eras/deep-learning-breakthroughs/"
echo "  /eras/foundation-models-and-generative-ai/"
echo "  /people-and-institutions/"
```
