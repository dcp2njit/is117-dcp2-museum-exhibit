# Refactor Spec Program

This folder groups the post-audit refactor work into a small set of feature
specs instead of treating the entire site rewrite as one undifferentiated task.

The current repository already has strong historical substance, a stable
seven-era chronology, shared navigation, narrative cards, guide callouts, and
working tests. The refactor problem is therefore not basic site setup. It is
the next editorial and presentation layer: turning the current routes into a
coherent multimedia-book reading experience.

## Workstreams

| Workstream                                              | Status      | Purpose                                                                |
| ------------------------------------------------------- | ----------- | ---------------------------------------------------------------------- |
| [Reading System](reading-system/)                       | In Progress | Shared chapter patterns, editorial UI, and long-form reading rhythm    |
| [Narrative Surfaces](narrative-surfaces/)               | Planned     | Homepage, reading map, and people/institutions refactor                |
| [Chapter Exhibition Parity](chapter-exhibition-parity/) | Planned     | Homepage-parity visual audit and redesign of non-home chapter surfaces |
| [Era Chapters](era-chapters/)                           | Planned     | Chapter-style rollout across Era 1 through Era 7                       |

Two completed refactor workstreams (code-quality, browser-enhancements) remain
in this directory as student study examples. A third (browser-polish) has been
moved to [docs/\_archive/](../../_archive/specs/refactor/browser-polish/).

## Why These Groups

1. The site needs shared reading primitives before page-by-page rewrites, or
   each route will solve the same narrative problems independently.
2. The homepage, reading map, and people page are the top-level orientation
   surfaces and should be refactored as one connected group.
3. The era pages are the main body of the product and should be planned as a
   dedicated chronology rollout with staged implementation.

## Recommended Order

1. Implement [Reading System](reading-system/) first.
2. Refactor [Narrative Surfaces](narrative-surfaces/) second.
3. Implement [Chapter Exhibition Parity](chapter-exhibition-parity/) to raise
   non-home routes to the homepage's visual standard.
4. Roll out [Era Chapters](era-chapters/) last, using the new shared chapter
   system, top-level story framing, and the stricter visual benchmark.

## Expected Outcome

If these specs are implemented in order, the site should move from a strong
educational archive with good cards and sections to a more intentional reading
experience with:

- chapter openers and recurring editorial rhythm
- clearer separation between narrative prose and reference material
- stronger visual pacing across long routes
- more documentary, cast, and systems-style teaching moments
- a more cohesive "multimedia book" feel across the whole chronology
