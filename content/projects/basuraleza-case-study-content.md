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
The "Tools by layer" map must stay visible on the page (Isabel wants the
tools shown), as logo tiles grouped by layer. The agent workflow is
explained separately in "How it was built" as numbered steps.
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

I worked as the product manager and Claude Code as the engineer. The process kept the agent on scope and every product decision with me.

1. **A product brief.** What the app is for, who uses it, and what stays out of the first version.
2. **A standing brief in AGENTS.md.** The context the agent reads at the start of every session, so it never has to be repeated: the product, the rules that can't be broken (no accounts, nothing published identifies anyone) and the conventions to follow.
3. **Six phases, one prompt per phase.** Design, screens, setup, data and moderation, testing, deployment. Each prompt ended with a "done when": what had to be true before moving on.
4. **A hand check before the next phase.** I tested each phase myself against its "done when". Only then did the agent start the next one.

Giving the agent the right context:
- **Supabase MCP**: lets the agent work on the database directly.
- **Clerk and Supabase agent skills**: current, official guidance for auth and data, instead of what the model remembers.
- **frontend-design skill on the Claude design canvas**: set the visual direction and a custom design system before any screen was built.

## Tools by layer

(Rendered as a map of logo tiles, one column per layer.)

| Layer | Tools |
|---|---|
| AI development and design | Claude Code, Claude design canvas, custom design system |
| Frontend | Next.js, TypeScript, Tailwind CSS, Leaflet; official map data from IGN and IDEAragón |
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
