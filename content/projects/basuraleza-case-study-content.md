---
title: "Basuraleza — A Moderated Map of Rubbish Dumped in the Countryside"
slug: basuraleza
description: "A citizen app, built solo with a coding agent in two days, that lets anyone report dumped rubbish without an account and puts every report through human review before it reaches a public map."
status: "shipped, in early real use"
role: "Self-initiated, solo: product, scope and launch, built by directing a coding agent (Claude Code)"
stage: ["Strategy", "MVP", "Build", "Launch"]
product_skills: ["MVP Scoping", "Product Requirements", "Privacy by Design", "Trust & Safety", "Mobile-First UX", "AI-Assisted Development", "Launch Planning", "Experiment Design"]
tools_frameworks: ["Claude Code", "Phased delivery with explicit done-when criteria", "Next.js", "TypeScript", "Supabase / PostGIS", "Clerk", "Leaflet", "Playwright", "Netlify"]
domain_impact_area: ["Social Impact Tech", "Environmental Action", "Civic Tech"]
---

<!--
NOTE FOR IMPLEMENTATION:
Keep this page short and visual. Visuals carry the flow; text only explains
the decisions. Use the stat strip as a row of big numbers, not a list.

Visuals (from the Basuraleza repo, generated with seeded test data):
- HERO: the 4 report steps on phone (location, photos, description, "Aviso
  recibido"), side by side. From .screens/phone-390/.
- VISUAL 2: moderation review screen, original text next to the editable
  published copy. From .screens/member-desktop-1440/.
- VISUAL 3: public map with published spots. From .screens/phone-390/ or
  desktop-1440/.
Do NOT use the Instagram carousel or live-site captures: they contain
user-submitted photos with unconfirmed rights.

Citizen initiative: monetization is NOT a goal, never frame it as a business.
The "How it was built" table must stay visible on the page (Isabel wants
the tools shown). Render it compactly, e.g. as grouped tool chips per layer.
Excluded for length (documented in project-dossier.md in the Basuraleza
repo): architecture details, bugs, the unpublish gap found
after launch, Instagram assets.
Open item: add the outcome of the first clean-up (end of October 2026) to
the stat strip and one line in "Launch".
-->

## Context note (show near the top, small/muted style)
*A live product I built on my own initiative for the Grupo Ecologista del Somontano, the environmental association I'm an active member of.*

## My Role

I did all of it myself, directing Claude Code as a coding agent: the idea, the product brief and scope, design direction, setup, hand-checking each phase, and the launch.

## Problem

Rubbish dumped in the Somontano countryside reached the Grupo, if at all, through scattered WhatsApp messages and calls, so there was no map to plan clean-ups from. I also wanted to give our followers a concrete way to take part.

[the four report steps on a phone]

## The hypothesis

More people will report rubbish if they can do it completely anonymously, without handing over any personal details.

So there are no accounts, and reporting takes a minute. Anonymity needs a safeguard, though: every report is reviewed by a person before it reaches the map, and nothing published identifies anyone.

[VISUAL 2: moderation screen, original vs published text]

## How it was built

I wrote the product brief and split the work into six phases (design, screens, setup, data and moderation, testing, deployment), each with a "done when" that I checked by hand before Claude Code moved on.

| Layer | Tools |
|---|---|
| AI development | Claude Code, a standing brief in AGENTS.md, one prompt per phase, Supabase MCP, Clerk and Supabase agent skills |
| Design | Claude design canvas with the frontend-design skill, custom design system |
| Frontend | Next.js, TypeScript, Tailwind, Leaflet with official Spanish (IGN) and Aragón (IDEAragón) map data |
| Auth and roles | Clerk, with organizations and moderator roles |
| Data and photos | Supabase (Postgres, PostGIS, Storage), sharp for photo processing |
| Testing | Vitest and Playwright, 137 automated tests |
| Deployment | GitHub, Netlify |

## Launch and early signals

**2 days** to a working MVP · **5 reports** in the first week and **7 photos** on the map · **2 requests** from other groups

I launched it on the Grupo's Instagram on 5 October 2026. So far all reports come from two members of the Grupo, and the two comments on the post asked for the same tool in other comarcas and groups. The first clean-up organised from the map is planned for the end of October.

[VISUAL 3: public map with published spots]

## Reflection

AI made experimenting cheap enough to test an engagement strategy with a real product instead of a post, which moved the bottleneck from building to adoption, and that hypothesis isn't validated yet. The surprise was the demand from other groups. It turned a tool for one association into a citizen initiative others could adopt, and raised the real scaling question: not the code, which already supports multiple territories, but how each group would sustain its own human moderation.
