# Site Information Architecture Audit

## Audit Summary

- the site now has enough content to stop behaving like a flat set of exemplar pages
- the strongest existing assets are:
  chronology by era, the intellectual-lineage reading map, the math bridge, and the emerging provenance-first story/media records
- the main current weakness is not lack of content but lack of structure:
  readers are asked to infer the difference between chronology, story, papers, concepts, people, and institutions

## Current Content Inventory

- implemented live surfaces:
  home overview, seven era pages, one reading map, one math guide
- implemented visual layer:
  foundation-model turning points, interpretability gap, logic-to-AI convergence, embeddings neighborhood
- implemented documentary layer:
  Era 7 story cards, Era 1 and Era 2 story records, media-record scaffolding for portraits and institution images

## IA Problems To Solve

- primary problem:
  the homepage is doing orientation, chronology, and pedagogy at the same time without a clear site map
- secondary problem:
  the site has story material but no explicit narrative entrance points
- tertiary problem:
  people and institutions matter historically, but they are still implicit inside era pages rather than treated as a visible organizing layer

## Recommended Navigation Model

- primary navigation:
  Home, Chronology, Reading Maps, Guides
- secondary navigation:
  Start here, Narrative threads, People and institutions, Current era
- tertiary navigation:
  page-level contextual paths such as adjacent-era links, reading-map lineage links, and section-level anchors where useful
- footer role:
  treat the footer as the durable site map and story index, not as legal filler

## Narrative Model

- chronology path:
  for readers who want one continuous historical spine from precursors to foundation models
- text path:
  for readers who want to understand the field through decisive papers and source documents
- concept path:
  for readers who need embeddings, latent space, retrieval, interpretability, and safety concepts explained without leaving the history site
- story path:
  for readers who remember history better through people, institutions, and turning points than through abstract categories alone

## Grounding With Real Stories

- move more of the site toward short documentary cards with three ingredients:
  who or what this is, why it matters in the era, and what verified source or asset supports it
- keep institutions visible because they explain why research becomes a field, a company, a lab, or a public product
- use approved photos and institution images to reinforce the narrative, but keep captions interpretive and factual rather than promotional

## Photo Permissions Implication

- the media records should now be treated as approved for implementation where permissions were cleared
- this changes the backlog priority:
  the main task is no longer rights verification but editorial selection, caption writing, and placement

## Social And Public-Web Strategy

- recommended now:
  add verified outbound links to official sites and official social profiles where they genuinely help readers understand a person or institution
- recommended next:
  create a lightweight people-and-institutions data model with optional fields for official site, X profile, YouTube, LinkedIn, and source provenance
- not recommended as a default:
  embedding live X feeds directly into the main site experience
- rationale:
  live feeds add performance cost, moderation risk, API fragility, and can shift the tone from history and interpretation toward reactive stream content
- better alternative:
  show verified profile links plus a curated public-explanation or public-record module when a post or video is historically useful enough to cite

## Recommended Next Build Steps

- create a dedicated people and institutions surface driven by the existing media records
- add section-level anchor navigation to the era pages with the densest narrative content
- wire approved portrait and institution imagery into Era 7 first, then backfill Era 2 and Era 1 where the story payoff is strongest
- normalize a shared data model for people, institutions, and source provenance before adding social links at scale
