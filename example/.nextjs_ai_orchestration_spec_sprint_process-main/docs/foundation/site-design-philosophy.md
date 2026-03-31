# Site Design Philosophy

## Why This Document Exists

This repository is teaching more than a stack.

It is also teaching a way of making a site feel coherent.

Students can usually tell that this site feels deliberate. The harder part is
explaining why. This document names the logic behind the feeling so you can
study it, discuss it, and adapt it to your own project without copying the AI
history site directly.

The core claim is simple: this site looks good because it behaves like a
curated exhibition, not because it piles on decorative effects.

## What The Site Is Trying To Feel Like

The site is trying to feel like a museum exhibition catalog that became
interactive.

That choice controls more than color or typography. It controls the reading
experience.

The site wants readers to feel that they are moving through a sequence of
rooms, cases, and explanatory labels:

- the homepage works as the opening gallery
- the era pages work as chapters or rooms in the main exhibition
- the reading map, people-and-institutions page, and math guide work like
  companion galleries that deepen the main route without replacing it

This is why the site avoids the visual language of a startup landing page. It
is not trying to feel frictionless, disruptive, or promotional. It is trying
to feel trustworthy, sequenced, and interpretive.

## Why The Visual Language Is Museum-Editorial

The visual language combines two traditions:

1. museum presentation
2. editorial longform design

The museum side contributes:

- warm paper-like surfaces instead of flat app chrome
- serif display typography that feels historical and interpretive
- documentary images treated like evidence or exhibit material
- labeled sections that behave like curatorial panels

The editorial side contributes:

- strong hierarchy in headlines, ledes, side notes, and supporting cards
- readable paragraph measures and controlled whitespace
- recurring visual modules that make dense information easier to scan
- pacing devices such as visual breaks, transitions, and companion pages

Together, those choices produce seriousness without making the site stiff.

## What Gives The Layout Its Sense Of Order

The site does not feel ordered because every page is identical. It feels
ordered because the same structural grammar keeps recurring.

Across the main routes, the pattern is usually:

1. a chapter shell
2. a strong hero
3. repeated sections with stable internal rhythm
4. supporting cards, timelines, or documentary grids
5. a transition into the next route

In code, this appears through repeated use of the chapter components and layout
classes:

- `hero-panel`
- `ChapterHero`
- `ChapterSection`
- `ChapterVisualBreak`
- `TransitionBlock`

That repetition matters. Readers learn the rhythm quickly, so they spend less
energy decoding layout and more energy following the argument.

The spacing system matters too. The site uses a phi-based spacing scale in
`app/globals.css` rather than a pile of unrelated margin values. That does not
make the site magical. It simply means vertical rhythm was treated as a system
instead of as a series of one-off patches.

## Why The Chronology Is Split Into Eras

The seven-era structure is a curatorial decision, not just an information
architecture trick.

If AI history were presented as one endless article, students would struggle to
see turning points. The era model makes the argument legible by imposing
meaningful boundaries:

- a precursor runway before AI is formally named
- field formation and convergence
- symbolic optimism
- the first AI winter and expert-systems narrowing
- statistical revival
- deep-learning breakthrough
- foundation-model public deployment

A curator breaks history into eras for the same reason a teacher breaks a
complex lecture into units: boundaries create memory.

This is also why the era pages include explicit handoff language. The site is
not only presenting isolated chapters. It is teaching continuity and change.

## Why Companion Pages Exist

The companion pages keep the main chronology from becoming overloaded.

Each one solves a different teaching problem:

- the reading map shows documents and lineage
- the people-and-institutions page ties the history to actors and power
- the math guide translates technical vocabulary that would otherwise clog the
  main narrative

This is a curatorial move. In a strong exhibition, not every object goes in the
same room. Some material belongs in supporting rooms so the main story can stay
clear.

Students should learn this directly: when everything lives on one page, nothing
is prioritized.

## How The Curator Thinks About Evidence

This site tries to keep history attached to proof.

That is why it uses several distinct evidence surfaces:

- source-anchor cards for primary documents and archives
- people and institution profiles for named actors
- visual diagrams where explanation needs a conceptual bridge
- timelines and summary cards where sequence must stay scannable

The important principle is that each surface has a job.

A strong curator does not add cards because cards are fashionable. A strong
curator asks what kind of evidence or explanation the reader needs next, then
chooses the surface that best delivers it.

This is one reason the site feels disciplined. It is not throwing every content
type at every page.

## How The Curator Thinks About Images

The images are not there just to make the page less empty.

They play three different roles:

### 1. Documentary evidence

Portraits, institutional photos, and source-associated imagery connect the
history to real actors and places.

### 2. Atmospheric framing

Generated era illustrations and hero images help create the emotional and
historical atmosphere of a page.

### 3. Explanatory bridges

Some visuals do teaching work by making an abstract idea easier to grasp, such
as the math-guide diagrams.

The site works best when those roles stay distinct.

That is why duplicate images weaken the experience. If the same image is used
repeatedly without a reason, it stops feeling like evidence and starts feeling
like filler.

## Why Restraint Matters More Than Decoration

One reason the site feels strong is that it does not try to perform style on
every square inch.

The palette is warm and controlled. The panels are soft but not flashy. Motion
is limited. The hierarchy is strong. Surfaces repeat.

This is important for students to understand. Good design is not the same as
constant novelty.

Curatorial design often depends on restraint because restraint keeps attention
on the objects, argument, and sequence. If every section shouts, the exhibit
loses its internal ranking.

## Why The Site Feels Human Rather Than Template-Driven

The site is structured, but it does not feel robotic because the structure is
serving editorial judgment.

You can see that in the way the pages combine:

- large interpretive titles
- concise ledes
- side notes and guide callouts
- documentary profiles
- transitions that explain why the next route matters

Those patterns create the feeling that someone is guiding the reader.

That is the curatorial difference between a component library and an exhibition
experience. Components are reusable parts. Curation is the judgment that puts
the right part in the right place for the right reason.

## Why The Process Matters To The Design

This site did not become coherent by accident.

Its visual and editorial quality comes from repeated cycles of:

- identifying a problem
- writing a spec
- breaking the work into sprints
- implementing bounded changes
- QAing the result against explicit requirements

That process matters because good design usually degrades when scope is loose.

Without specs and sprint boundaries, a site like this would drift toward:

- duplicated patterns with slight differences
- inconsistent spacing and heading rhythm
- decorative images with no curatorial function
- pages that feel individually interesting but collectively incoherent

The process is what protects the design language from erosion.

## What Students Should Carry Into Their Own Projects

Do not copy the AI-history surface.

Carry these principles instead:

### Pick A Governing Metaphor

This site uses the museum/editorial metaphor. Your project may need something
else: a field guide, archive, lab notebook, atlas, casebook, or dossier.

The point is not to pick a clever metaphor. The point is to pick one strong
enough to guide design decisions consistently.

### Decide What The Main Route Is

Readers need a spine.

For this site, the seven eras are the spine. In your project, the spine may be
time, cases, themes, regions, experiments, or people. But there should be a
main route that gives the rest of the material a clear relationship.

### Separate The Main Narrative From Support Material

Do not force every concept onto the same page. Decide what belongs in the main
line and what belongs in companion surfaces.

### Make Every Surface Earn Its Place

If you use cards, timelines, diagrams, pull quotes, or documentary profiles,
know what each one is for. Reusable patterns are useful only when they carry
distinct explanatory roles.

### Treat Images As Part Of The Argument

Images should either prove something, frame something, or explain something.
If they do none of those things, they are probably decorative noise.

### Protect Rhythm

Spacing, hierarchy, and repeated section structure are not cosmetic details.
They determine how tiring or readable the site feels over time.

## What Students Should Not Copy Directly

Do not copy:

- the AI-history topic itself
- the exact palette or chapter-theme colors
- the same images or image categories without a reason
- the exact route map if your subject needs a different structure
- the rhetoric of the ledes and section labels word-for-word

Those are local decisions for this product.

What you should copy is the discipline:

- choose a concept deliberately
- translate that concept into structure
- keep the visual system narrow and repeatable
- support the main route with purposeful companion pages
- document the work through specs and sprints so the system stays coherent

## The Main Lesson

This site looks the way it does because a curator is always deciding three
things at once:

1. what the reader needs to understand
2. what evidence best supports that understanding
3. what form will keep that understanding clear over time

That is the habit worth carrying into your own project.

Do not ask only, “What layout should I use?”

Ask instead:

- what is my exhibit trying to prove
- what is the main route through it
- what surfaces does each kind of evidence deserve
- what design language supports that argument without overwhelming it

If you can answer those questions clearly, your project will stop feeling like
a random collection of pages and start feeling like a real editorial system.
